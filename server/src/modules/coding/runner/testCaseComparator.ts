export class TestCaseComparator {
  /**
   * Normalizes code output and expected output:
   * 1. Replaces Windows CRLF with standard Unix LF (\r\n -> \n)
   * 2. Trims trailing whitespace per line
   * 3. Trims leading/trailing empty lines
   */
  static normalize(text: string): string {
    if (!text) return '';
    return text
      .replace(/\r\n/g, '\n')
      .replace(/\r/g, '\n')
      .split('\n')
      .map((line) => line.trimEnd())
      .join('\n')
      .trim();
  }

  /**
   * Strips a single pair of matching outer quotes if present ("..." or '...')
   */
  private static stripOuterQuotes(text: string): string {
    if (
      (text.startsWith('"') && text.endsWith('"') && text.length >= 2) ||
      (text.startsWith("'") && text.endsWith("'") && text.length >= 2)
    ) {
      return text.slice(1, -1).trim();
    }
    return text;
  }

  /**
   * Normalizes punctuation, newlines, and whitespace for human-readable outputs
   * e.g. "Digit sum = 29, digital root = 2" vs "Digit sum = 29\nDigital root = 2"
   */
  private static normalizeFlexible(text: string): string {
    return this.stripOuterQuotes(this.normalize(text))
      .toLowerCase()
      .replace(/[\r\n,;]+/g, ' ')
      .replace(/\s*([=:])\s*/g, '$1')
      .replace(/\s+/g, ' ')
      .trim();
  }

  /**
   * Tokenizes array/matrix-like outputs for language-agnostic comparison
   * e.g. "[4, 5, 1, 2, 3]" vs "4 5 1 2 3"
   */
  private static tokenizeStructure(text: string): string[] {
    return this.normalize(text)
      .replace(/[\[\]\(\)\{\},;]/g, ' ')
      .split(/\s+/)
      .map((t) => this.stripOuterQuotes(t).toLowerCase())
      .filter((t) => t.length > 0);
  }

  static compare(actual: string, expected: string): boolean {
    const normActual = this.normalize(actual);
    const normExpected = this.normalize(expected);
    if (normActual === normExpected) return true;
    if (!normActual && normExpected) return false;

    // 1. Case-insensitive & quote-stripped match (e.g. "True" vs "true", '"abc"' vs 'abc')
    const strippedActual = this.stripOuterQuotes(normActual).toLowerCase();
    const strippedExpected = this.stripOuterQuotes(normExpected).toLowerCase();
    if (strippedActual === strippedExpected) {
      return true;
    }

    // 2. Numeric floating point tolerance matching (e.g. "2.0" vs "2.00000")
    const numActual = Number(strippedActual);
    const numExpected = Number(strippedExpected);
    if (!isNaN(numActual) && !isNaN(numExpected) && strippedActual !== '' && strippedExpected !== '') {
      if (Math.abs(numActual - numExpected) < 1e-5) {
        return true;
      }
    }

    // 3. Structural JSON equivalence (e.g. "[0, 1]" vs "[0,1]")
    try {
      const parsedActual = JSON.parse(normActual);
      const parsedExpected = JSON.parse(normExpected);
      if (JSON.stringify(parsedActual) === JSON.stringify(parsedExpected)) {
        return true;
      }
    } catch {}

    // 4. Flexible punctuation/newline/case-insensitive match
    //    e.g. "Digit sum = 29, digital root = 2" === "Digit sum = 29\nDigital root = 2"
    const flexActual = this.normalizeFlexible(normActual);
    const flexExpected = this.normalizeFlexible(normExpected);
    if (flexActual && flexActual === flexExpected) {
      return true;
    }

    // 5. Token-sequence equivalence for bracketed vs space-separated outputs
    //    e.g. "[4, 5, 1, 2, 3]" === "4 5 1 2 3"
    const actualTokens = this.tokenizeStructure(normActual);
    const expectedTokens = this.tokenizeStructure(normExpected);
    if (
      actualTokens.length > 0 &&
      actualTokens.length === expectedTokens.length &&
      actualTokens.every((tok, idx) => tok === expectedTokens[idx])
    ) {
      return true;
    }

    return false;
  }
}
