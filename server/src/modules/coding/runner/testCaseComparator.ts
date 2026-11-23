export class TestCaseComparator {
  /**
   * Normalizes code output and expected output:
   * 1. Replaces Windows CRLF with standard Unix LF (\r\n -> \n)
   * 2. Trims leading and trailing whitespace per line
   * 3. Trims trailing empty lines
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

  static compare(actual: string, expected: string): boolean {
    const normActual = this.normalize(actual);
    const normExpected = this.normalize(expected);
    if (normActual === normExpected) return true;

    // 1. Case-insensitive boolean matching (e.g. Python "True" vs JSON "true")
    const lowerActual = normActual.toLowerCase();
    const lowerExpected = normExpected.toLowerCase();
    if (
      (lowerExpected === 'true' && lowerActual === 'true') ||
      (lowerExpected === 'false' && lowerActual === 'false')
    ) {
      return true;
    }

    // 2. Numeric floating point tolerance matching (e.g. "2.0" vs "2.00000")
    const numActual = Number(normActual);
    const numExpected = Number(normExpected);
    if (!isNaN(numActual) && !isNaN(numExpected) && normActual !== '' && normExpected !== '') {
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

    return false;
  }
}
