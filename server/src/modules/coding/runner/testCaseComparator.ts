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
    return normActual === normExpected;
  }
}
