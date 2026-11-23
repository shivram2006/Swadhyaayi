import json
import os
import re

def to_camel_case(text):
    s = re.sub(r'[^a-zA-Z0-9 ]', '', text)
    words = s.split()
    if not words:
        return 'solve'
    return words[0].lower() + ''.join(w.capitalize() for w in words[1:])

def to_pascal_case(text):
    s = re.sub(r'[^a-zA-Z0-9 ]', '', text)
    return ''.join(w.capitalize() for w in s.split())

def generate_ts_code(q_list, export_name):
    code_lines = [
        "/* eslint-disable */",
        "// Auto-generated Apple Interview Catalog - 100 DSA/CP/DP Problems",
        f"export const {export_name} = ["
    ]

    for q in q_list:
        slug = q['slug']
        title = q['title'].replace('"', '\\"')
        func_name = to_camel_case(q['title'])
        class_name = to_pascal_case(q['title'])

        # Multi-lang boilerplate
        py_boilerplate = f"""def {func_name}(*args):
    # TODO: Implement solution for {title}
    pass

# Driver Code
import sys, json
input_data = sys.stdin.read().strip().splitlines()
if input_data:
    try:
        parsed = [json.loads(line) for line in input_data if line.strip()]
        result = {func_name}(*parsed)
        print(json.dumps(result))
    except Exception:
        print({func_name}(*input_data))
"""

        js_boilerplate = f"""function {func_name}(...args) {{
    // TODO: Implement solution for {title}
}}

const fs = require('fs');
const lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');
if (lines.length > 0) {{
    try {{
        const parsed = lines.map(l => JSON.parse(l));
        console.log(JSON.stringify({func_name}(...parsed)));
    }} catch (e) {{
        console.log({func_name}(...lines));
    }}
}}
"""

        cpp_boilerplate = f"""#include <iostream>
#include <vector>
#include <string>
#include <sstream>
#include <algorithm>

using namespace std;

// Solution for {title}
class Solution {{
public:
    void solve() {{
        // Write your solution here
    }}
}};

int main() {{
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    // Driver reading from standard input
    string line;
    while (getline(cin, line)) {{
        if (!line.empty()) {{
            // Process input line
        }}
    }}
    return 0;
}}
"""

        java_boilerplate = f"""import java.util.*;

public class Solution {{
    // Solution for {title}
    public static void main(String[] args) {{
        Scanner sc = new Scanner(System.in);
        while (sc.hasNextLine()) {{
            String line = sc.nextLine();
            if (!line.trim().isEmpty()) {{
                // Process testcase line
            }}
        }}
        sc.close();
    }}
}}
"""

        sample_cases = [
            {
                "input": q["ex1"]["in"],
                "output": q["ex1"]["out"],
                "explanation": q["ex1"]["exp"]
            },
            {
                "input": q["ex2"]["in"],
                "output": q["ex2"]["out"],
                "explanation": q["ex2"]["exp"]
            }
        ]

        hidden_cases = [
            {
                "input": hc["in"],
                "expectedOutput": hc["out"],
                "weight": 1
            } for hc in q["hidden"]
        ]

        desc = f"{q['desc']}\\n\\n### Example 1:\\n```\\nInput: {q['ex1']['in']}\\nOutput: {q['ex1']['out']}\\nExplanation: {q['ex1']['exp']}\\n```\\n\\n### Example 2:\\n```\\nInput: {q['ex2']['in']}\\nOutput: {q['ex2']['out']}\\nExplanation: {q['ex2']['exp']}\\n```"

        prob_obj = {
            "title": q["title"],
            "slug": q["slug"],
            "description": desc,
            "difficulty": q["difficulty"],
            "category": q["category"],
            "patterns": q["patterns"],
            "topics": q["patterns"],
            "companyTags": [
                {
                    "company": "Apple",
                    "yearReported": 2025,
                    "verified": True,
                    "frequencyCount": q["freq"],
                    "sourceNote": q["source"]
                }
            ],
            "supportedLanguages": ["python", "javascript", "cpp", "java"],
            "starterCode": [
                {"language": "python", "boilerplate": py_boilerplate},
                {"language": "javascript", "boilerplate": js_boilerplate},
                {"language": "cpp", "boilerplate": cpp_boilerplate},
                {"language": "java", "boilerplate": java_boilerplate}
            ],
            "sampleTestCases": sample_cases,
            "hiddenTestCases": hidden_cases,
            "timeLimitMs": 2000,
            "memoryLimitMb": 256,
            "hints": q["hints"],
            "editorial": {
                "solutionMarkdown": f"### Optimal Solution\\n{q['ed']}",
                "complexityAnalysis": q["cpx"]
            },
            "isGlobal": True,
            "status": "PUBLISHED"
        }

        code_lines.append(f"  {json.dumps(prob_obj, indent=2)},")

    code_lines.append("];\n")
    return "\n".join(code_lines)

def main():
    batches = [
        ("p1_25.json", "appleProblems1_25.seed.ts", "apple1_25"),
        ("p26_50.json", "appleProblems26_50.seed.ts", "apple26_50"),
        ("p51_75.json", "appleProblems51_75.seed.ts", "apple51_75"),
        ("p76_100.json", "appleProblems76_100.seed.ts", "apple76_100"),
    ]

    target_dir = os.path.join("server", "src", "modules", "coding")
    for json_file, ts_file, export_name in batches:
        with open(json_file, "r", encoding="utf-8") as f:
            q_list = json.load(f)
        ts_code = generate_ts_code(q_list, export_name)
        out_path = os.path.join(target_dir, ts_file)
        with open(out_path, "w", encoding="utf-8") as f:
            f.write(ts_code)
        print(f"Generated {out_path} ({len(q_list)} problems)")

    # Aggregate file
    aggregator = """/* eslint-disable */
import { apple1_25 } from './appleProblems1_25.seed';
import { apple26_50 } from './appleProblems26_50.seed';
import { apple51_75 } from './appleProblems51_75.seed';
import { apple76_100 } from './appleProblems76_100.seed';

export const appleQuestionsList = [
  ...apple1_25,
  ...apple26_50,
  ...apple51_75,
  ...apple76_100,
];
"""
    agg_path = os.path.join(target_dir, "appleProblems.seed.ts")
    with open(agg_path, "w", encoding="utf-8") as f:
        f.write(aggregator)
    print(f"Aggregator generated at {agg_path}")

if __name__ == "__main__":
    main()
