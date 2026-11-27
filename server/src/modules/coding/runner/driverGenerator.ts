export type InferredType =
  | 'int'
  | 'double'
  | 'bool'
  | 'string'
  | 'int[]'
  | 'string[]'
  | 'int[][]'
  | 'string[][]';

export interface GeneratedStarterBundle {
  methodName: string;
  params: { name: string; type: InferredType }[];
  returnType: InferredType;
  starterCode: {
    language: 'python' | 'javascript' | 'cpp' | 'java';
    boilerplate: string;
    driverCode?: string;
  }[];
}

function toCamelCase(title: string): string {
  const clean = (title || 'solve')
    .replace(/[^a-zA-Z0-9\s]/g, ' ')
    .trim();
  if (!clean) return 'solve';
  const words = clean.split(/\s+/);
  const camel = words
    .map((w, idx) =>
      idx === 0 ? w.toLowerCase() : w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()
    )
    .join('');
  return /^[0-9]/.test(camel) ? `solve${camel}` : camel;
}

function inferValueType(raw: string): InferredType {
  const trimmed = (raw || '').trim();
  if (!trimmed) return 'string';

  if (trimmed === 'true' || trimmed === 'false') return 'bool';
  if (/^0\d+$/.test(trimmed)) return 'string';

  try {
    const parsed = JSON.parse(trimmed);
    if (typeof parsed === 'boolean') return 'bool';
    if (typeof parsed === 'number') {
      return Number.isInteger(parsed) ? 'int' : 'double';
    }
    if (typeof parsed === 'string') return 'string';
    if (Array.isArray(parsed)) {
      if (parsed.length === 0) return 'int[]';
      if (Array.isArray(parsed[0])) {
        const inner = parsed[0][0];
        if (typeof inner === 'string') return 'string[][]';
        return 'int[][]';
      }
      if (typeof parsed[0] === 'string') return 'string[]';
      return 'int[]';
    }
  } catch {
    if (/^-?\d+$/.test(trimmed)) return 'int';
    if (/^-?\d+\.\d+$/.test(trimmed)) return 'double';
  }

  return 'string';
}

function mergeTypes(a: InferredType, b: InferredType): InferredType {
  if (a === b) return a;
  if (a === 'string[][]' || b === 'string[][]') return 'string[][]';
  if (a === 'int[][]' || b === 'int[][]') return 'int[][]';
  if (a === 'string[]' || b === 'string[]') return 'string[]';
  if (a === 'int[]' || b === 'int[]') return 'int[]';
  if (a === 'string' || b === 'string') return 'string';
  if (a === 'double' || b === 'double') return 'double';
  return a;
}

function pyType(t: InferredType): string {
  switch (t) {
    case 'int':
      return 'int';
    case 'double':
      return 'float';
    case 'bool':
      return 'bool';
    case 'string':
      return 'str';
    case 'int[]':
      return 'List[int]';
    case 'string[]':
      return 'List[str]';
    case 'int[][]':
      return 'List[List[int]]';
    case 'string[][]':
      return 'List[List[str]]';
  }
}

function cppType(t: InferredType, asRef = false): string {
  const suffix = asRef ? '&' : '';
  switch (t) {
    case 'int':
      return 'int';
    case 'double':
      return 'double';
    case 'bool':
      return 'bool';
    case 'string':
      return `string${suffix}`;
    case 'int[]':
      return `vector<int>${suffix}`;
    case 'string[]':
      return `vector<string>${suffix}`;
    case 'int[][]':
      return `vector<vector<int>>${suffix}`;
    case 'string[][]':
      return `vector<vector<string>>${suffix}`;
  }
}

function javaType(t: InferredType): string {
  switch (t) {
    case 'int':
      return 'int';
    case 'double':
      return 'double';
    case 'bool':
      return 'boolean';
    case 'string':
      return 'String';
    case 'int[]':
      return 'int[]';
    case 'string[]':
      return 'String[]';
    case 'int[][]':
      return 'int[][]';
    case 'string[][]':
      return 'String[][]';
  }
}

const CPP_HELPERS = `
static string _trim(const string& s) {
    size_t l = 0, r = s.size();
    while (l < r && isspace((unsigned char)s[l])) l++;
    while (r > l && isspace((unsigned char)s[r - 1])) r--;
    return s.substr(l, r - l);
}
static int _parseInt(const string& s) { return stoi(_trim(s)); }
static double _parseDouble(const string& s) { return stod(_trim(s)); }
static bool _parseBool(const string& s) { return _trim(s) == "true" || _trim(s) == "1"; }
static string _parseString(const string& s) {
    string t = _trim(s);
    if (t.size() >= 2 && t.front() == '"' && t.back() == '"') return t.substr(1, t.size() - 2);
    return t;
}
static vector<int> _parseIntVec(const string& s) {
    vector<int> res; string cur;
    for (char c : s) {
        if (isdigit((unsigned char)c) || c == '-') cur += c;
        else if (!cur.empty()) { res.push_back(stoi(cur)); cur.clear(); }
    }
    if (!cur.empty()) res.push_back(stoi(cur));
    return res;
}
static vector<string> _parseStrVec(const string& s) {
    vector<string> res;
    bool inQ = false; string cur;
    for (size_t i = 0; i < s.size(); i++) {
        char c = s[i];
        if (c == '"' && (i == 0 || s[i - 1] != '\\\\')) {
            if (inQ) { res.push_back(cur); cur.clear(); }
            inQ = !inQ;
        } else if (inQ) {
            cur += c;
        }
    }
    return res;
}
static vector<vector<int>> _parseIntMat(const string& s) {
    vector<vector<int>> res;
    int depth = 0; size_t start = string::npos;
    for (size_t i = 0; i < s.size(); i++) {
        if (s[i] == '[') {
            depth++;
            if (depth == 2) start = i;
        } else if (s[i] == ']') {
            if (depth == 2 && start != string::npos) {
                res.push_back(_parseIntVec(s.substr(start, i - start + 1)));
                start = string::npos;
            }
            depth--;
        }
    }
    return res;
}
static vector<vector<string>> _parseStrMat(const string& s) {
    vector<vector<string>> res;
    int depth = 0; size_t start = string::npos;
    for (size_t i = 0; i < s.size(); i++) {
        if (s[i] == '[') {
            depth++;
            if (depth == 2) start = i;
        } else if (s[i] == ']') {
            if (depth == 2 && start != string::npos) {
                res.push_back(_parseStrVec(s.substr(start, i - start + 1)));
                start = string::npos;
            }
            depth--;
        }
    }
    return res;
}
static void _printVal(int v) { cout << v << "\\n"; }
static void _printVal(double v) { cout << v << "\\n"; }
static void _printVal(bool v) { cout << (v ? "true" : "false") << "\\n"; }
static void _printVal(const string& v) { cout << v << "\\n"; }
static void _printVal(const vector<int>& v) {
    cout << "[";
    for (size_t i = 0; i < v.size(); i++) { if (i) cout << ", "; cout << v[i]; }
    cout << "]\\n";
}
static void _printVal(const vector<string>& v) {
    cout << "[";
    for (size_t i = 0; i < v.size(); i++) { if (i) cout << ", "; cout << "\\"" << v[i] << "\\""; }
    cout << "]\\n";
}
static void _printVal(const vector<vector<int>>& m) {
    cout << "[";
    for (size_t i = 0; i < m.size(); i++) {
        if (i) cout << ", ";
        cout << "[";
        for (size_t j = 0; j < m[i].size(); j++) { if (j) cout << ", "; cout << m[i][j]; }
        cout << "]";
    }
    cout << "]\\n";
}
static void _printVal(const vector<vector<string>>& m) {
    cout << "[";
    for (size_t i = 0; i < m.size(); i++) {
        if (i) cout << ", ";
        cout << "[";
        for (size_t j = 0; j < m[i].size(); j++) { if (j) cout << ", "; cout << "\\"" << m[i][j] << "\\""; }
        cout << "]";
    }
    cout << "]\\n";
}
`;

export class DriverGenerator {
  static generateFromCases(
    title: string,
    cases: { input: string; expectedOutput: string }[],
    description: string = ''
  ): GeneratedStarterBundle {
    const methodName = toCamelCase(title);
    const nonEmptyCases = cases.filter((c) => c.input !== undefined);
    const firstLines = (nonEmptyCases[0]?.input || '').split('\n').filter((l) => l.trim().length > 0);
    const paramCount = Math.max(1, firstLines.length);

    const paramTypes: InferredType[] = Array(paramCount).fill('string');
    for (let p = 0; p < paramCount; p++) {
      let inferred: InferredType | null = null;
      for (const c of nonEmptyCases) {
        const lines = (c.input || '').split('\n').filter((l) => l.trim().length > 0);
        if (lines[p] !== undefined) {
          const t = inferValueType(lines[p]);
          inferred = inferred ? mergeTypes(inferred, t) : t;
        }
      }
      if (inferred) paramTypes[p] = inferred;
    }

    if (
      paramCount === 1 &&
      paramTypes[0] === 'int' &&
      /\b(string|digits|substring|palindrome|anagram|characters)\b/i.test(description) &&
      !/\bnon-negative integer\b/i.test(description)
    ) {
      paramTypes[0] = 'string';
    }

    let returnType: InferredType = 'int';
    if (nonEmptyCases.length > 0) {
      let inferredOut: InferredType | null = null;
      for (const c of nonEmptyCases) {
        const t = inferValueType(c.expectedOutput || '');
        inferredOut = inferredOut ? mergeTypes(inferredOut, t) : t;
      }
      if (inferredOut) returnType = inferredOut;
    }

    const params = paramTypes.map((type, idx) => ({
      name: `arg${idx}`,
      type,
    }));

    // Python
    const pySigParams = params.map((p) => `${p.name}: ${pyType(p.type)}`).join(', ');
    const pyBoilerplate = [
      'class Solution:',
      `    def ${methodName}(self, ${pySigParams}) -> ${pyType(returnType)}:`,
      '        # Write your solution here',
      '        pass',
    ].join('\n');

    const pyParseLines = params
      .map((p, idx) => {
        if (p.type === 'string') {
          return `    ${p.name} = _parse_str(_lines[${idx}]) if len(_lines) > ${idx} else ""`;
        }
        return `    ${p.name} = json.loads(_lines[${idx}]) if len(_lines) > ${idx} else None`;
      })
      .join('\n');

    const pyPrintExpr =
      returnType === 'bool'
        ? `print("true" if _res else "false")`
        : returnType === 'string'
        ? `print(_res if isinstance(_res, str) else json.dumps(_res))`
        : `print(json.dumps(_res))`;

    const pyDriver = [
      'def _parse_str(s: str) -> str:',
      '    s = s.strip()',
      '    if len(s) >= 2 and ((s[0] == \'"\' and s[-1] == \'"\') or (s[0] == "\'" and s[-1] == "\'")):',
      '        return s[1:-1]',
      '    return s',
      '',
      'if __name__ == "__main__":',
      '    _raw = sys.stdin.read().strip()',
      '    _lines = [l for l in _raw.splitlines() if l.strip()]',
      pyParseLines,
      `    _res = Solution().${methodName}(${params.map((p) => p.name).join(', ')})`,
      `    ${pyPrintExpr}`,
    ].join('\n');

    // JavaScript
    const jsBoilerplate = [
      '/**',
      ...params.map((p) => ` * @param {*} ${p.name}`),
      ' * @return {*}',
      ' */',
      `var ${methodName} = function(${params.map((p) => p.name).join(', ')}) {`,
      '    // Write your solution here',
      '};',
    ].join('\n');

    const jsParseLines = params
      .map((p, idx) => {
        if (p.type === 'string') {
          return `const ${p.name} = _parseStr(_lines[${idx}] || '');`;
        }
        return `const ${p.name} = _lines[${idx}] !== undefined ? JSON.parse(_lines[${idx}]) : null;`;
      })
      .join('\n');

    const jsPrintExpr =
      returnType === 'string'
        ? `console.log(typeof _res === 'string' ? _res : JSON.stringify(_res));`
        : `console.log(JSON.stringify(_res));`;

    const jsDriver = [
      'const fs = require("fs");',
      'function _parseStr(s) {',
      '  s = (s || "").trim();',
      '  if (s.length >= 2 && ((s.startsWith(\'"\') && s.endsWith(\'"\')) || (s.startsWith("\'") && s.endsWith("\'")))) return s.slice(1, -1);',
      '  return s;',
      '}',
      'const _lines = fs.readFileSync(0, "utf-8").trim().split(/\\r?\\n/).filter(l => l.trim().length > 0);',
      jsParseLines,
      `const _res = ${methodName}(${params.map((p) => p.name).join(', ')});`,
      jsPrintExpr,
    ].join('\n');

    // C++
    const cppSigParams = params.map((p) => `${cppType(p.type, true)} ${p.name}`).join(', ');
    const cppBoilerplate = [
      'class Solution {',
      'public:',
      `    ${cppType(returnType)} ${methodName}(${cppSigParams}) {`,
      '        // Write your solution here',
      '    }',
      '};',
    ].join('\n');

    const cppParseLines = params
      .map((p, idx) => {
        const lineVar = `_lines.size() > ${idx} ? _lines[${idx}] : string("")`;
        switch (p.type) {
          case 'int':
            return `    int ${p.name} = _parseInt(${lineVar});`;
          case 'double':
            return `    double ${p.name} = _parseDouble(${lineVar});`;
          case 'bool':
            return `    bool ${p.name} = _parseBool(${lineVar});`;
          case 'string':
            return `    string ${p.name} = _parseString(${lineVar});`;
          case 'int[]':
            return `    vector<int> ${p.name} = _parseIntVec(${lineVar});`;
          case 'string[]':
            return `    vector<string> ${p.name} = _parseStrVec(${lineVar});`;
          case 'int[][]':
            return `    vector<vector<int>> ${p.name} = _parseIntMat(${lineVar});`;
          case 'string[][]':
            return `    vector<vector<string>> ${p.name} = _parseStrMat(${lineVar});`;
        }
      })
      .join('\n');

    const cppDriver = [
      CPP_HELPERS,
      'int main() {',
      '    ios_base::sync_with_stdio(false);',
      '    cin.tie(NULL);',
      '    vector<string> _lines;',
      '    string _line;',
      '    while (getline(cin, _line)) {',
      '        if (!_trim(_line).empty()) _lines.push_back(_line);',
      '    }',
      cppParseLines,
      `    auto _res = Solution().${methodName}(${params.map((p) => p.name).join(', ')});`,
      '    _printVal(_res);',
      '    return 0;',
      '}',
    ].join('\n');

    // Java (clean stub)
    const javaSigParams = params.map((p) => `${javaType(p.type)} ${p.name}`).join(', ');
    const javaBoilerplate = [
      'class Solution {',
      `    public ${javaType(returnType)} ${methodName}(${javaSigParams}) {`,
      '        // Write your solution here',
      '    }',
      '}',
    ].join('\n');

    return {
      methodName,
      params,
      returnType,
      starterCode: [
        { language: 'python', boilerplate: pyBoilerplate, driverCode: pyDriver },
        { language: 'javascript', boilerplate: jsBoilerplate, driverCode: jsDriver },
        { language: 'cpp', boilerplate: cppBoilerplate, driverCode: cppDriver },
        { language: 'java', boilerplate: javaBoilerplate },
      ],
    };
  }
}
