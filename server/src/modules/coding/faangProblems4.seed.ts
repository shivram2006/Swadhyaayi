/* eslint-disable */
// Auto-generated Coding Problem Catalog (Apple, Meta, Microsoft, Google, Accenture) - Chunk faang4
export const faang4 = [
  {
    "title": "Reverse Words in a String",
    "slug": "reverse-words-in-a-string",
    "description": "Given an input string `s`, reverse the order of the **words**. Return a string of the words in reverse order concatenated by a single space.\n\n### Example 1:\n```\nInput: the sky is blue\nOutput: \"blue is sky the\"\nExplanation: Words reversed with single space.\n```\n\n### Example 2:\n```\nInput:   hello world  \nOutput: \"world hello\"\nExplanation: Leading and trailing spaces stripped.\n```",
    "difficulty": "MEDIUM",
    "category": "DSA",
    "patterns": [
      "Two Pointers",
      "String"
    ],
    "topics": [
      "Two Pointers",
      "String"
    ],
    "companyTags": [
      {
        "company": "Apple",
        "yearReported": 2025,
        "verified": true,
        "frequencyCount": 45,
        "sourceNote": "Reported in Apple 2021-2026 interview set"
      },
      {
        "company": "Accenture",
        "yearReported": 2025,
        "verified": false,
        "frequencyCount": 25,
        "sourceNote": "Accenture Practice Bank #22"
      }
    ],
    "supportedLanguages": [
      "python",
      "javascript",
      "cpp",
      "java"
    ],
    "starterCode": [
      {
        "language": "python",
        "boilerplate": "def reverseWordsInAString(*args):\n    # TODO: Implement solution for Reverse Words in a String\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = reverseWordsInAString(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(reverseWordsInAString(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function reverseWordsInAString(...args) {\n    // TODO: Implement solution for Reverse Words in a String\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(reverseWordsInAString(...parsed)));\n    } catch (e) {\n        console.log(reverseWordsInAString(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Reverse Words in a String\n        string line;\n        while (getline(cin, line)) {\n            cout << line << endl;\n        }\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        String line;\n        while ((line = br.readLine()) != null) {\n            // TODO: Implement solution for Reverse Words in a String\n            System.out.println(line);\n        }\n    }\n}\n"
      }
    ],
    "sampleTestCases": [
      {
        "input": "the sky is blue",
        "output": "\"blue is sky the\"",
        "explanation": "Words reversed with single space."
      },
      {
        "input": "  hello world  ",
        "output": "\"world hello\"",
        "explanation": "Leading and trailing spaces stripped."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "the sky is blue",
        "output": "\"blue is sky the\"",
        "isHidden": true
      },
      {
        "input": "  hello world  ",
        "output": "\"world hello\"",
        "isHidden": true
      },
      {
        "input": "a good   example",
        "output": "\"example good a\"",
        "isHidden": true
      }
    ],
    "hints": [
      "Split by whitespace, filter empty, reverse and join with space."
    ],
    "editorial": {
      "approach": "Optimal Approach for Reverse Words in a String",
      "solutionMarkdown": "### Optimal Solution\n\nSplit tokens or reverse whole string then reverse individual words in-place.\n\n### Complexity\n- Time: O(N), Space: O(N)",
      "timeComplexity": "O(N)",
      "spaceComplexity": "O(N)"
    },
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0
  },
  {
    "title": "Rod Cutting",
    "slug": "rod-cutting",
    "description": "Given a rod of length `n` inches and an array of `prices` that contains prices of all pieces of size smaller than `n`, determine the maximum value obtainable by cutting up the rod and selling the pieces.\n\n### Example 1:\n```\nInput: [1,5,8,9,10,17,17,20]\n8\nOutput: 22\nExplanation: Cut into two pieces of lengths 2 and 6 (prices 5 + 17 = 22).\n```\n\n### Example 2:\n```\nInput: [3,5,8,9,10,17,17,20]\n8\nOutput: 24\nExplanation: Cut into 8 pieces of length 1 (8 * 3 = 24).\n```",
    "difficulty": "MEDIUM",
    "category": "DSA",
    "patterns": [
      "Dynamic Programming"
    ],
    "topics": [
      "Dynamic Programming"
    ],
    "companyTags": [
      {
        "company": "Microsoft",
        "yearReported": 2025,
        "verified": true,
        "frequencyCount": 35,
        "sourceNote": "Reported in Microsoft 2021-2026 interview set"
      }
    ],
    "supportedLanguages": [
      "python",
      "javascript",
      "cpp",
      "java"
    ],
    "starterCode": [
      {
        "language": "python",
        "boilerplate": "def rodCutting(*args):\n    # TODO: Implement solution for Rod Cutting\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = rodCutting(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(rodCutting(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function rodCutting(...args) {\n    // TODO: Implement solution for Rod Cutting\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(rodCutting(...parsed)));\n    } catch (e) {\n        console.log(rodCutting(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Rod Cutting\n        string line;\n        while (getline(cin, line)) {\n            cout << line << endl;\n        }\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        String line;\n        while ((line = br.readLine()) != null) {\n            // TODO: Implement solution for Rod Cutting\n            System.out.println(line);\n        }\n    }\n}\n"
      }
    ],
    "sampleTestCases": [
      {
        "input": "[1,5,8,9,10,17,17,20]\n8",
        "output": "22",
        "explanation": "Cut into two pieces of lengths 2 and 6 (prices 5 + 17 = 22)."
      },
      {
        "input": "[3,5,8,9,10,17,17,20]\n8",
        "output": "24",
        "explanation": "Cut into 8 pieces of length 1 (8 * 3 = 24)."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "[1,5,8,9,10,17,17,20]\n8",
        "output": "22",
        "isHidden": true
      },
      {
        "input": "[3,5,8,9,10,17,17,20]\n8",
        "output": "24",
        "isHidden": true
      },
      {
        "input": "[1]\n1",
        "output": "1",
        "isHidden": true
      }
    ],
    "hints": [
      "Unbounded knapsack: dp[i] = max(prices[j] + dp[i - j - 1]) for 0 <= j < i."
    ],
    "editorial": {
      "approach": "Optimal Approach for Rod Cutting",
      "solutionMarkdown": "### Optimal Solution\n\nBottom-up 1D DP. For length i from 1 to n: dp[i] = max(prices[j] + dp[i - j - 1]) over all cuts j.\n\n### Complexity\n- Time: O(N^2), Space: O(N)",
      "timeComplexity": "O(N^2)",
      "spaceComplexity": "O(N)"
    },
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0
  },
  {
    "title": "Roman to Integer",
    "slug": "roman-to-integer",
    "description": "Roman numerals are represented by seven different symbols: `I`, `V`, `X`, `L`, `C`, `D` and `M`. Given a Roman numeral, convert it to an integer.\n\n### Example 1:\n```\nInput: \"III\"\nOutput: 3\nExplanation: III = 3.\n```\n\n### Example 2:\n```\nInput: \"LVIII\"\nOutput: 58\nExplanation: L = 50, V = 5, III = 3.\n```",
    "difficulty": "EASY",
    "category": "DSA",
    "patterns": [
      "Hash Table",
      "Math",
      "String"
    ],
    "topics": [
      "Hash Table",
      "Math",
      "String"
    ],
    "companyTags": [
      {
        "company": "Accenture",
        "yearReported": 2025,
        "verified": false,
        "frequencyCount": 25,
        "sourceNote": "Accenture Practice Bank #27"
      }
    ],
    "supportedLanguages": [
      "python",
      "javascript",
      "cpp",
      "java"
    ],
    "starterCode": [
      {
        "language": "python",
        "boilerplate": "def romanToInteger(*args):\n    # TODO: Implement solution for Roman to Integer\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = romanToInteger(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(romanToInteger(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function romanToInteger(...args) {\n    // TODO: Implement solution for Roman to Integer\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(romanToInteger(...parsed)));\n    } catch (e) {\n        console.log(romanToInteger(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Roman to Integer\n        string line;\n        while (getline(cin, line)) {\n            cout << line << endl;\n        }\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        String line;\n        while ((line = br.readLine()) != null) {\n            // TODO: Implement solution for Roman to Integer\n            System.out.println(line);\n        }\n    }\n}\n"
      }
    ],
    "sampleTestCases": [
      {
        "input": "\"III\"",
        "output": "3",
        "explanation": "III = 3."
      },
      {
        "input": "\"LVIII\"",
        "output": "58",
        "explanation": "L = 50, V = 5, III = 3."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "\"III\"",
        "output": "3",
        "isHidden": true
      },
      {
        "input": "\"LVIII\"",
        "output": "58",
        "isHidden": true
      },
      {
        "input": "\"MCMXCIV\"",
        "output": "1994",
        "isHidden": true
      }
    ],
    "hints": [
      "If current Roman symbol has smaller value than next symbol, subtract it; otherwise add it."
    ],
    "editorial": {
      "approach": "Optimal Approach for Roman to Integer",
      "solutionMarkdown": "### Optimal Solution\n\nScan from left to right. If val(s[i]) < val(s[i + 1]), subtract val(s[i]), otherwise add it.\n\n### Complexity\n- Time: O(N), Space: O(1)",
      "timeComplexity": "O(N)",
      "spaceComplexity": "O(1)"
    },
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0
  },
  {
    "title": "Rotate Array",
    "slug": "rotate-array",
    "description": "Given an integer array `nums`, rotate the array to the right by `k` steps, where `k` is non-negative.\n\n### Example 1:\n```\nInput: [1,2,3,4,5,6,7]\n3\nOutput: [5, 6, 7, 1, 2, 3, 4]\nExplanation: Rotate 3 steps right.\n```\n\n### Example 2:\n```\nInput: [-1,-100,3,99]\n2\nOutput: [3, 99, -1, -100]\nExplanation: Rotate 2 steps right.\n```",
    "difficulty": "MEDIUM",
    "category": "DSA",
    "patterns": [
      "Array",
      "Two Pointers"
    ],
    "topics": [
      "Array",
      "Two Pointers"
    ],
    "companyTags": [
      {
        "company": "Apple",
        "yearReported": 2025,
        "verified": true,
        "frequencyCount": 45,
        "sourceNote": "Reported in Apple 2021-2026 interview set"
      },
      {
        "company": "Accenture",
        "yearReported": 2025,
        "verified": true,
        "frequencyCount": 40,
        "sourceNote": "Accenture Interview Question #8 (R [S7])"
      }
    ],
    "supportedLanguages": [
      "python",
      "javascript",
      "cpp",
      "java"
    ],
    "starterCode": [
      {
        "language": "python",
        "boilerplate": "def rotateArray(*args):\n    # TODO: Implement solution for Rotate Array\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = rotateArray(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(rotateArray(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function rotateArray(...args) {\n    // TODO: Implement solution for Rotate Array\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(rotateArray(...parsed)));\n    } catch (e) {\n        console.log(rotateArray(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Rotate Array\n        string line;\n        while (getline(cin, line)) {\n            cout << line << endl;\n        }\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        String line;\n        while ((line = br.readLine()) != null) {\n            // TODO: Implement solution for Rotate Array\n            System.out.println(line);\n        }\n    }\n}\n"
      }
    ],
    "sampleTestCases": [
      {
        "input": "[1,2,3,4,5,6,7]\n3",
        "output": "[5, 6, 7, 1, 2, 3, 4]",
        "explanation": "Rotate 3 steps right."
      },
      {
        "input": "[-1,-100,3,99]\n2",
        "output": "[3, 99, -1, -100]",
        "explanation": "Rotate 2 steps right."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "[1,2,3,4,5,6,7]\n3",
        "output": "[5, 6, 7, 1, 2, 3, 4]",
        "isHidden": true
      },
      {
        "input": "[-1,-100,3,99]\n2",
        "output": "[3, 99, -1, -100]",
        "isHidden": true
      },
      {
        "input": "[1,2]\n3",
        "output": "[2, 1]",
        "isHidden": true
      }
    ],
    "hints": [
      "Reverse entire array, then reverse first k, then reverse remaining n-k."
    ],
    "editorial": {
      "approach": "Optimal Approach for Rotate Array",
      "solutionMarkdown": "### Optimal Solution\n\nThree in-place reversals: reverse(0, n-1), reverse(0, k-1), reverse(k, n-1).\n\n### Complexity\n- Time: O(N), Space: O(1)",
      "timeComplexity": "O(N)",
      "spaceComplexity": "O(1)"
    },
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0
  },
  {
    "title": "Rotate Image",
    "slug": "rotate-image",
    "description": "You are given an `n x n` 2D matrix representing an image, rotate the image by **90 degrees (clockwise)** in-place.\n\n### Example 1:\n```\nInput: [[1,2,3],[4,5,6],[7,8,9]]\nOutput: [[7, 4, 1], [8, 5, 2], [9, 6, 3]]\nExplanation: Rotated 90 degrees clockwise.\n```\n\n### Example 2:\n```\nInput: [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]\nOutput: [[15, 13, 2, 5], [14, 3, 4, 1], [12, 6, 8, 9], [16, 7, 10, 11]]\nExplanation: 4x4 matrix rotated.\n```",
    "difficulty": "MEDIUM",
    "category": "DSA",
    "patterns": [
      "Matrix",
      "Math"
    ],
    "topics": [
      "Matrix",
      "Math"
    ],
    "companyTags": [
      {
        "company": "Apple",
        "yearReported": 2025,
        "verified": true,
        "frequencyCount": 45,
        "sourceNote": "Reported in Apple 2021-2026 interview set"
      },
      {
        "company": "Microsoft",
        "yearReported": 2025,
        "verified": true,
        "frequencyCount": 35,
        "sourceNote": "Reported in Microsoft 2021-2026 interview set"
      },
      {
        "company": "Google",
        "yearReported": 2025,
        "verified": true,
        "frequencyCount": 50,
        "sourceNote": "Reported in Google 2021-2026 interview set"
      }
    ],
    "supportedLanguages": [
      "python",
      "javascript",
      "cpp",
      "java"
    ],
    "starterCode": [
      {
        "language": "python",
        "boilerplate": "def rotateImage(*args):\n    # TODO: Implement solution for Rotate Image\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = rotateImage(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(rotateImage(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function rotateImage(...args) {\n    // TODO: Implement solution for Rotate Image\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(rotateImage(...parsed)));\n    } catch (e) {\n        console.log(rotateImage(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Rotate Image\n        string line;\n        while (getline(cin, line)) {\n            cout << line << endl;\n        }\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        String line;\n        while ((line = br.readLine()) != null) {\n            // TODO: Implement solution for Rotate Image\n            System.out.println(line);\n        }\n    }\n}\n"
      }
    ],
    "sampleTestCases": [
      {
        "input": "[[1,2,3],[4,5,6],[7,8,9]]",
        "output": "[[7, 4, 1], [8, 5, 2], [9, 6, 3]]",
        "explanation": "Rotated 90 degrees clockwise."
      },
      {
        "input": "[[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]",
        "output": "[[15, 13, 2, 5], [14, 3, 4, 1], [12, 6, 8, 9], [16, 7, 10, 11]]",
        "explanation": "4x4 matrix rotated."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "[[1,2,3],[4,5,6],[7,8,9]]",
        "output": "[[7, 4, 1], [8, 5, 2], [9, 6, 3]]",
        "isHidden": true
      },
      {
        "input": "[[1]]",
        "output": "[[1]]",
        "isHidden": true
      }
    ],
    "hints": [
      "Transpose matrix along main diagonal, then reverse each row horizontally."
    ],
    "editorial": {
      "approach": "Optimal Approach for Rotate Image",
      "solutionMarkdown": "### Optimal Solution\n\nTwo-step in-place transformation: matrix.transpose() followed by matrix.reverse_rows().\n\n### Complexity\n- Time: O(N^2), Space: O(1)",
      "timeComplexity": "O(N^2)",
      "spaceComplexity": "O(1)"
    },
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0
  },
  {
    "title": "Rotting Oranges",
    "slug": "rotting-oranges",
    "description": "You are given an `m x n` `grid` where each cell can have one of three values: `0` empty, `1` fresh orange, or `2` rotten orange. Every minute, any fresh orange that is 4-directionally adjacent to a rotten orange becomes rotten.\n\nReturn the minimum number of minutes that must elapse until no cell has a fresh orange. If this is impossible, return `-1`.\n\n### Example 1:\n```\nInput: [[2,1,1],[1,1,0],[0,1,1]]\nOutput: 4\nExplanation: All oranges rotten in 4 minutes.\n```\n\n### Example 2:\n```\nInput: [[2,1,1],[0,1,1],[1,0,1]]\nOutput: -1\nExplanation: Orange in bottom left corner can never rot.\n```",
    "difficulty": "MEDIUM",
    "category": "DSA",
    "patterns": [
      "BFS / DFS",
      "Matrix"
    ],
    "topics": [
      "BFS / DFS",
      "Matrix"
    ],
    "companyTags": [
      {
        "company": "Apple",
        "yearReported": 2025,
        "verified": true,
        "frequencyCount": 45,
        "sourceNote": "Reported in Apple 2021-2026 interview set"
      },
      {
        "company": "Meta",
        "yearReported": 2025,
        "verified": true,
        "frequencyCount": 40,
        "sourceNote": "Reported in Meta 2021-2026 interview set"
      },
      {
        "company": "Microsoft",
        "yearReported": 2025,
        "verified": true,
        "frequencyCount": 35,
        "sourceNote": "Reported in Microsoft 2021-2026 interview set"
      }
    ],
    "supportedLanguages": [
      "python",
      "javascript",
      "cpp",
      "java"
    ],
    "starterCode": [
      {
        "language": "python",
        "boilerplate": "def rottingOranges(*args):\n    # TODO: Implement solution for Rotting Oranges\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = rottingOranges(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(rottingOranges(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function rottingOranges(...args) {\n    // TODO: Implement solution for Rotting Oranges\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(rottingOranges(...parsed)));\n    } catch (e) {\n        console.log(rottingOranges(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Rotting Oranges\n        string line;\n        while (getline(cin, line)) {\n            cout << line << endl;\n        }\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        String line;\n        while ((line = br.readLine()) != null) {\n            // TODO: Implement solution for Rotting Oranges\n            System.out.println(line);\n        }\n    }\n}\n"
      }
    ],
    "sampleTestCases": [
      {
        "input": "[[2,1,1],[1,1,0],[0,1,1]]",
        "output": "4",
        "explanation": "All oranges rotten in 4 minutes."
      },
      {
        "input": "[[2,1,1],[0,1,1],[1,0,1]]",
        "output": "-1",
        "explanation": "Orange in bottom left corner can never rot."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "[[2,1,1],[1,1,0],[0,1,1]]",
        "output": "4",
        "isHidden": true
      },
      {
        "input": "[[2,1,1],[0,1,1],[1,0,1]]",
        "output": "-1",
        "isHidden": true
      },
      {
        "input": "[[0,2]]",
        "output": "0",
        "isHidden": true
      }
    ],
    "hints": [
      "Multi-source BFS: add all rotten oranges (2) into queue initially and track fresh orange count."
    ],
    "editorial": {
      "approach": "Optimal Approach for Rotting Oranges",
      "solutionMarkdown": "### Optimal Solution\n\nMulti-source BFS expands level by level (minutes). If fresh count > 0 at end, return -1.\n\n### Complexity\n- Time: O(M * N), Space: O(M * N)",
      "timeComplexity": "O(M * N)",
      "spaceComplexity": "O(M * N)"
    },
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0
  },
  {
    "title": "Round Number (Happy Number variant)",
    "slug": "round-number",
    "description": "Write an algorithm to determine if a number `n` is a **Round Number** (also known as Happy Number). Starting with any positive integer, replace the number by the sum of the squares of its digits, and repeat until the number equals 1, or it loops endlessly in a cycle which does not include 1. Return `true` if it reaches 1.\n\n### Example 1:\n```\nInput: 19\nOutput: true\nExplanation: 1^2 + 9^2 = 82 -> 8^2 + 2^2 = 68 -> 6^2 + 8^2 = 100 -> 1^2 + 0 + 0 = 1.\n```\n\n### Example 2:\n```\nInput: 2\nOutput: false\nExplanation: Enters endless cycle: 4 -> 16 -> 37 -> 58 -> 89 -> 145 -> 42 -> 20 -> 4.\n```",
    "difficulty": "EASY",
    "category": "DSA",
    "patterns": [
      "Hash Table",
      "Math",
      "Two Pointers"
    ],
    "topics": [
      "Hash Table",
      "Math",
      "Two Pointers"
    ],
    "companyTags": [
      {
        "company": "Accenture",
        "yearReported": 2025,
        "verified": true,
        "frequencyCount": 40,
        "sourceNote": "Accenture Interview Question #74 (R [S3])"
      }
    ],
    "supportedLanguages": [
      "python",
      "javascript",
      "cpp",
      "java"
    ],
    "starterCode": [
      {
        "language": "python",
        "boilerplate": "def roundNumber(*args):\n    # TODO: Implement solution for Round Number (Happy Number variant)\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = roundNumber(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(roundNumber(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function roundNumber(...args) {\n    // TODO: Implement solution for Round Number (Happy Number variant)\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(roundNumber(...parsed)));\n    } catch (e) {\n        console.log(roundNumber(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Round Number (Happy Number variant)\n        string line;\n        while (getline(cin, line)) {\n            cout << line << endl;\n        }\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        String line;\n        while ((line = br.readLine()) != null) {\n            // TODO: Implement solution for Round Number (Happy Number variant)\n            System.out.println(line);\n        }\n    }\n}\n"
      }
    ],
    "sampleTestCases": [
      {
        "input": "19",
        "output": "true",
        "explanation": "1^2 + 9^2 = 82 -> 8^2 + 2^2 = 68 -> 6^2 + 8^2 = 100 -> 1^2 + 0 + 0 = 1."
      },
      {
        "input": "2",
        "output": "false",
        "explanation": "Enters endless cycle: 4 -> 16 -> 37 -> 58 -> 89 -> 145 -> 42 -> 20 -> 4."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "19",
        "output": "true",
        "isHidden": true
      },
      {
        "input": "2",
        "output": "false",
        "isHidden": true
      },
      {
        "input": "1",
        "output": "true",
        "isHidden": true
      },
      {
        "input": "7",
        "output": "true",
        "isHidden": true
      }
    ],
    "hints": [
      "Use Floyd's Cycle-Finding Algorithm (slow and fast pointers) or a HashSet of seen numbers."
    ],
    "editorial": {
      "approach": "Optimal Approach for Round Number (Happy Number variant)",
      "solutionMarkdown": "### Optimal Solution\n\nCycle detection on digit-square sums. Slow moves 1 transformation, fast moves 2. If fast reaches 1 return true; if slow == fast return false.\n\n### Complexity\n- Time: O(log N), Space: O(1)",
      "timeComplexity": "O(log N)",
      "spaceComplexity": "O(1)"
    },
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0
  },
  {
    "title": "Running First Unique Character Prefix Output",
    "slug": "running-first-unique-character-prefix-output",
    "description": "Given a stream of characters, for each character read, output the **first non-repeating character** among the prefix read so far, or '#' if none exists.\n\n### Example 1:\n```\nInput: \"aabc\"\nOutput: \"a#bb\"\nExplanation: Prefixes: 'a'->'a', 'aa'->'#', 'aab'->'b', 'aabc'->'b'.\n```\n\n### Example 2:\n```\nInput: \"zz\"\nOutput: \"z#\"\nExplanation: 'z' followed by repeated 'z'.\n```",
    "difficulty": "MEDIUM",
    "category": "DSA",
    "patterns": [
      "Queue",
      "Hash Table",
      "String"
    ],
    "topics": [
      "Queue",
      "Hash Table",
      "String"
    ],
    "companyTags": [
      {
        "company": "Microsoft",
        "yearReported": 2025,
        "verified": true,
        "frequencyCount": 35,
        "sourceNote": "Reported in Microsoft 2021-2026 interview set"
      }
    ],
    "supportedLanguages": [
      "python",
      "javascript",
      "cpp",
      "java"
    ],
    "starterCode": [
      {
        "language": "python",
        "boilerplate": "def runningFirstUniqueCharacterPrefixOutput(*args):\n    # TODO: Implement solution for Running First Unique Character Prefix Output\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = runningFirstUniqueCharacterPrefixOutput(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(runningFirstUniqueCharacterPrefixOutput(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function runningFirstUniqueCharacterPrefixOutput(...args) {\n    // TODO: Implement solution for Running First Unique Character Prefix Output\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(runningFirstUniqueCharacterPrefixOutput(...parsed)));\n    } catch (e) {\n        console.log(runningFirstUniqueCharacterPrefixOutput(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Running First Unique Character Prefix Output\n        string line;\n        while (getline(cin, line)) {\n            cout << line << endl;\n        }\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        String line;\n        while ((line = br.readLine()) != null) {\n            // TODO: Implement solution for Running First Unique Character Prefix Output\n            System.out.println(line);\n        }\n    }\n}\n"
      }
    ],
    "sampleTestCases": [
      {
        "input": "\"aabc\"",
        "output": "\"a#bb\"",
        "explanation": "Prefixes: 'a'->'a', 'aa'->'#', 'aab'->'b', 'aabc'->'b'."
      },
      {
        "input": "\"zz\"",
        "output": "\"z#\"",
        "explanation": "'z' followed by repeated 'z'."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "\"aabc\"",
        "output": "\"a#bb\"",
        "isHidden": true
      },
      {
        "input": "\"zz\"",
        "output": "\"z#\"",
        "isHidden": true
      },
      {
        "input": "\"abc\"",
        "output": "\"aaa\"",
        "isHidden": true
      }
    ],
    "hints": [
      "Use a queue and frequency map. Pop front elements with count > 1."
    ],
    "editorial": {
      "approach": "Optimal Approach for Running First Unique Character Prefix Output",
      "solutionMarkdown": "### Optimal Solution\n\nEnqueue each character. When reading, pop from queue while count[front] > 1. Front is first unique.\n\n### Complexity\n- Time: O(N), Space: O(1) (26 chars)",
      "timeComplexity": "O(N)",
      "spaceComplexity": "O(1) (26 chars)"
    },
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0
  },
  {
    "title": "Running Sum of 1D Array",
    "slug": "running-sum-of-1d-array",
    "description": "Given an array `nums`. We define a running sum of an array as `runningSum[i] = sum(nums[0]\u2026nums[i])`. Return the running sum of `nums`.\n\n### Example 1:\n```\nInput: [1,2,3,4]\nOutput: [1,3,6,10]\nExplanation: Running sum is obtained as [1, 1+2, 1+2+3, 1+2+3+4].\n```\n\n### Example 2:\n```\nInput: [1,1,1,1,1]\nOutput: [1,2,3,4,5]\nExplanation: Running sum: [1, 2, 3, 4, 5].\n```",
    "difficulty": "EASY",
    "category": "DSA",
    "patterns": [
      "Array",
      "Prefix Sum"
    ],
    "topics": [
      "Array",
      "Prefix Sum"
    ],
    "companyTags": [
      {
        "company": "Accenture",
        "yearReported": 2025,
        "verified": false,
        "frequencyCount": 25,
        "sourceNote": "Accenture Practice Bank #17"
      }
    ],
    "supportedLanguages": [
      "python",
      "javascript",
      "cpp",
      "java"
    ],
    "starterCode": [
      {
        "language": "python",
        "boilerplate": "def runningSumOf1dArray(*args):\n    # TODO: Implement solution for Running Sum of 1D Array\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = runningSumOf1dArray(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(runningSumOf1dArray(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function runningSumOf1dArray(...args) {\n    // TODO: Implement solution for Running Sum of 1D Array\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(runningSumOf1dArray(...parsed)));\n    } catch (e) {\n        console.log(runningSumOf1dArray(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Running Sum of 1D Array\n        string line;\n        while (getline(cin, line)) {\n            cout << line << endl;\n        }\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        String line;\n        while ((line = br.readLine()) != null) {\n            // TODO: Implement solution for Running Sum of 1D Array\n            System.out.println(line);\n        }\n    }\n}\n"
      }
    ],
    "sampleTestCases": [
      {
        "input": "[1,2,3,4]",
        "output": "[1,3,6,10]",
        "explanation": "Running sum is obtained as [1, 1+2, 1+2+3, 1+2+3+4]."
      },
      {
        "input": "[1,1,1,1,1]",
        "output": "[1,2,3,4,5]",
        "explanation": "Running sum: [1, 2, 3, 4, 5]."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "[1,2,3,4]",
        "output": "[1,3,6,10]",
        "isHidden": true
      },
      {
        "input": "[1,1,1,1,1]",
        "output": "[1,2,3,4,5]",
        "isHidden": true
      },
      {
        "input": "[3,1,2,10,1]",
        "output": "[3,4,6,16,17]",
        "isHidden": true
      }
    ],
    "hints": [
      "In-place addition: nums[i] += nums[i - 1] for i from 1 to n - 1."
    ],
    "editorial": {
      "approach": "Optimal Approach for Running Sum of 1D Array",
      "solutionMarkdown": "### Optimal Solution\n\nIterate from index 1 to n - 1. Add previous running sum nums[i - 1] to current element nums[i].\n\n### Complexity\n- Time: O(N), Space: O(1) in-place",
      "timeComplexity": "O(N)",
      "spaceComplexity": "O(1) in-place"
    },
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0
  },
  {
    "title": "Same Tree",
    "slug": "same-tree",
    "description": "Given the roots of two binary trees `p` and `q`, write a function to check if they are the same or not.\n\n### Example 1:\n```\nInput: [1,2,3]\n[1,2,3]\nOutput: true\nExplanation: Identical structure and values.\n```\n\n### Example 2:\n```\nInput: [1,2]\n[1,null,2]\nOutput: false\nExplanation: Different structures.\n```",
    "difficulty": "EASY",
    "category": "DSA",
    "patterns": [
      "Tree",
      "BFS / DFS",
      "Recursion"
    ],
    "topics": [
      "Tree",
      "BFS / DFS",
      "Recursion"
    ],
    "companyTags": [
      {
        "company": "Apple",
        "yearReported": 2025,
        "verified": true,
        "frequencyCount": 45,
        "sourceNote": "Reported in Apple 2021-2026 interview set"
      },
      {
        "company": "Google",
        "yearReported": 2025,
        "verified": true,
        "frequencyCount": 50,
        "sourceNote": "Reported in Google 2021-2026 interview set"
      }
    ],
    "supportedLanguages": [
      "python",
      "javascript",
      "cpp",
      "java"
    ],
    "starterCode": [
      {
        "language": "python",
        "boilerplate": "def sameTree(*args):\n    # TODO: Implement solution for Same Tree\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = sameTree(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(sameTree(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function sameTree(...args) {\n    // TODO: Implement solution for Same Tree\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(sameTree(...parsed)));\n    } catch (e) {\n        console.log(sameTree(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Same Tree\n        string line;\n        while (getline(cin, line)) {\n            cout << line << endl;\n        }\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        String line;\n        while ((line = br.readLine()) != null) {\n            // TODO: Implement solution for Same Tree\n            System.out.println(line);\n        }\n    }\n}\n"
      }
    ],
    "sampleTestCases": [
      {
        "input": "[1,2,3]\n[1,2,3]",
        "output": "true",
        "explanation": "Identical structure and values."
      },
      {
        "input": "[1,2]\n[1,null,2]",
        "output": "false",
        "explanation": "Different structures."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "[1,2,3]\n[1,2,3]",
        "output": "true",
        "isHidden": true
      },
      {
        "input": "[1,2]\n[1,null,2]",
        "output": "false",
        "isHidden": true
      }
    ],
    "hints": [
      "Base cases: if both null return true; if one null or values differ return false."
    ],
    "editorial": {
      "approach": "Optimal Approach for Same Tree",
      "solutionMarkdown": "### Optimal Solution\n\nRecursive traversal: p.val == q.val && isSameTree(p.left, q.left) && isSameTree(p.right, q.right).\n\n### Complexity\n- Time: O(N), Space: O(H)",
      "timeComplexity": "O(N)",
      "spaceComplexity": "O(H)"
    },
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0
  },
  {
    "title": "Scramble String",
    "slug": "scramble-string",
    "description": "We can scramble a string `s` to get a string `t` using recursive binary splits and swaps. Given two strings `s1` and `s2` of the same length, return `true` if `s2` is a scrambled string of `s1`, and `false` otherwise.\n\n### Example 1:\n```\nInput: \"great\"\n\"rgeat\"\nOutput: true\nExplanation: Split \"great\" -> \"gr\" + \"eat\" -> swap \"g\" and \"r\".\n```\n\n### Example 2:\n```\nInput: \"abcde\"\n\"caebd\"\nOutput: false\nExplanation: Cannot be scrambled.\n```",
    "difficulty": "HARD",
    "category": "DSA",
    "patterns": [
      "String",
      "Dynamic Programming",
      "Recursion",
      "Memoization"
    ],
    "topics": [
      "String",
      "Dynamic Programming",
      "Recursion",
      "Memoization"
    ],
    "companyTags": [
      {
        "company": "Google",
        "yearReported": 2025,
        "verified": true,
        "frequencyCount": 50,
        "sourceNote": "Reported in Google 2021-2026 interview set"
      }
    ],
    "supportedLanguages": [
      "python",
      "javascript",
      "cpp",
      "java"
    ],
    "starterCode": [
      {
        "language": "python",
        "boilerplate": "def scrambleString(*args):\n    # TODO: Implement solution for Scramble String\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = scrambleString(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(scrambleString(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function scrambleString(...args) {\n    // TODO: Implement solution for Scramble String\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(scrambleString(...parsed)));\n    } catch (e) {\n        console.log(scrambleString(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Scramble String\n        string line;\n        while (getline(cin, line)) {\n            cout << line << endl;\n        }\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        String line;\n        while ((line = br.readLine()) != null) {\n            // TODO: Implement solution for Scramble String\n            System.out.println(line);\n        }\n    }\n}\n"
      }
    ],
    "sampleTestCases": [
      {
        "input": "\"great\"\n\"rgeat\"",
        "output": "true",
        "explanation": "Split \"great\" -> \"gr\" + \"eat\" -> swap \"g\" and \"r\"."
      },
      {
        "input": "\"abcde\"\n\"caebd\"",
        "output": "false",
        "explanation": "Cannot be scrambled."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "\"great\"\n\"rgeat\"",
        "output": "true",
        "isHidden": true
      },
      {
        "input": "\"abcde\"\n\"caebd\"",
        "output": "false",
        "isHidden": true
      },
      {
        "input": "\"a\"\n\"a\"",
        "output": "true",
        "isHidden": true
      }
    ],
    "hints": [
      "Memoized recursion with pruning: compare sorted character frequencies before splitting."
    ],
    "editorial": {
      "approach": "Optimal Approach for Scramble String",
      "solutionMarkdown": "### Optimal Solution\n\nCheck all split points i in 1..n-1: test unswapped (s1[:i], s2[:i]) and swapped (s1[:i], s2[n-i:]).\n\n### Complexity\n- Time: O(N^4), Space: O(N^3)",
      "timeComplexity": "O(N^4)",
      "spaceComplexity": "O(N^3)"
    },
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0
  },
  {
    "title": "Search a 2D Matrix",
    "slug": "search-a-2d-matrix",
    "description": "You are given an `m x n` integer matrix with elements sorted row-wise and first integer of each row greater than last integer of preceding row. Given an integer `target`, return `true` if `target` is in `matrix` or `false` otherwise.\n\n### Example 1:\n```\nInput: [[1,3,5,7],[10,11,16,20],[23,30,34,60]]\n3\nOutput: true\nExplanation: 3 is present at (0, 1).\n```\n\n### Example 2:\n```\nInput: [[1,3,5,7],[10,11,16,20],[23,30,34,60]]\n13\nOutput: false\nExplanation: 13 is not in the matrix.\n```",
    "difficulty": "MEDIUM",
    "category": "DSA",
    "patterns": [
      "Array",
      "Binary Search",
      "Matrix"
    ],
    "topics": [
      "Array",
      "Binary Search",
      "Matrix"
    ],
    "companyTags": [
      {
        "company": "Google",
        "yearReported": 2025,
        "verified": true,
        "frequencyCount": 50,
        "sourceNote": "Reported in Google 2021-2026 interview set"
      },
      {
        "company": "Accenture",
        "yearReported": 2025,
        "verified": false,
        "frequencyCount": 25,
        "sourceNote": "Accenture Practice Bank #65"
      }
    ],
    "supportedLanguages": [
      "python",
      "javascript",
      "cpp",
      "java"
    ],
    "starterCode": [
      {
        "language": "python",
        "boilerplate": "def searchA2dMatrix(*args):\n    # TODO: Implement solution for Search a 2D Matrix\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = searchA2dMatrix(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(searchA2dMatrix(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function searchA2dMatrix(...args) {\n    // TODO: Implement solution for Search a 2D Matrix\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(searchA2dMatrix(...parsed)));\n    } catch (e) {\n        console.log(searchA2dMatrix(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Search a 2D Matrix\n        string line;\n        while (getline(cin, line)) {\n            cout << line << endl;\n        }\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        String line;\n        while ((line = br.readLine()) != null) {\n            // TODO: Implement solution for Search a 2D Matrix\n            System.out.println(line);\n        }\n    }\n}\n"
      }
    ],
    "sampleTestCases": [
      {
        "input": "[[1,3,5,7],[10,11,16,20],[23,30,34,60]]\n3",
        "output": "true",
        "explanation": "3 is present at (0, 1)."
      },
      {
        "input": "[[1,3,5,7],[10,11,16,20],[23,30,34,60]]\n13",
        "output": "false",
        "explanation": "13 is not in the matrix."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "[[1,3,5,7],[10,11,16,20],[23,30,34,60]]\n3",
        "output": "true",
        "isHidden": true
      },
      {
        "input": "[[1,3,5,7],[10,11,16,20],[23,30,34,60]]\n13",
        "output": "false",
        "isHidden": true
      },
      {
        "input": "[[1]]\n1",
        "output": "true",
        "isHidden": true
      }
    ],
    "hints": [
      "Treat the 2D matrix as a flattened 1D sorted array of size M * N and run binary search."
    ],
    "editorial": {
      "approach": "Optimal Approach for Search a 2D Matrix",
      "solutionMarkdown": "### Optimal Solution\n\nMap 1D mid index to 2D row = mid // n, col = mid % n. Perform standard binary search.\n\n### Complexity\n- Time: O(log(M * N)), Space: O(1)",
      "timeComplexity": "O(log(M * N))",
      "spaceComplexity": "O(1)"
    },
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0
  },
  {
    "title": "Search a 2D Matrix II",
    "slug": "search-a-2d-matrix-ii",
    "description": "Write an efficient algorithm that searches for a value `target` in an `m x n` integer matrix where integers in each row are sorted left to right and integers in each column are sorted top to bottom.\n\n### Example 1:\n```\nInput: [[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]]\n5\nOutput: true\nExplanation: 5 found in matrix.\n```\n\n### Example 2:\n```\nInput: [[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]]\n20\nOutput: false\nExplanation: 20 not found.\n```",
    "difficulty": "MEDIUM",
    "category": "DSA",
    "patterns": [
      "Array",
      "Binary Search",
      "Divide and Conquer",
      "Matrix"
    ],
    "topics": [
      "Array",
      "Binary Search",
      "Divide and Conquer",
      "Matrix"
    ],
    "companyTags": [
      {
        "company": "Microsoft",
        "yearReported": 2025,
        "verified": true,
        "frequencyCount": 35,
        "sourceNote": "Reported in Microsoft 2021-2026 interview set"
      }
    ],
    "supportedLanguages": [
      "python",
      "javascript",
      "cpp",
      "java"
    ],
    "starterCode": [
      {
        "language": "python",
        "boilerplate": "def searchA2dMatrixIi(*args):\n    # TODO: Implement solution for Search a 2D Matrix II\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = searchA2dMatrixIi(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(searchA2dMatrixIi(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function searchA2dMatrixIi(...args) {\n    // TODO: Implement solution for Search a 2D Matrix II\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(searchA2dMatrixIi(...parsed)));\n    } catch (e) {\n        console.log(searchA2dMatrixIi(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Search a 2D Matrix II\n        string line;\n        while (getline(cin, line)) {\n            cout << line << endl;\n        }\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        String line;\n        while ((line = br.readLine()) != null) {\n            // TODO: Implement solution for Search a 2D Matrix II\n            System.out.println(line);\n        }\n    }\n}\n"
      }
    ],
    "sampleTestCases": [
      {
        "input": "[[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]]\n5",
        "output": "true",
        "explanation": "5 found in matrix."
      },
      {
        "input": "[[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]]\n20",
        "output": "false",
        "explanation": "20 not found."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "[[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]]\n5",
        "output": "true",
        "isHidden": true
      },
      {
        "input": "[[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]]\n20",
        "output": "false",
        "isHidden": true
      },
      {
        "input": "[[-5]]\n-5",
        "output": "true",
        "isHidden": true
      }
    ],
    "hints": [
      "Start from top-right corner (0, n - 1). If value > target move left; if value < target move down."
    ],
    "editorial": {
      "approach": "Optimal Approach for Search a 2D Matrix II",
      "solutionMarkdown": "### Optimal Solution\n\nSearch pointer starts at top right. Decrease col if value > target, increase row if value < target.\n\n### Complexity\n- Time: O(M + N), Space: O(1)",
      "timeComplexity": "O(M + N)",
      "spaceComplexity": "O(1)"
    },
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0
  },
  {
    "title": "Search in Rotated Sorted Array",
    "slug": "search-in-rotated-sorted-array",
    "description": "Given an integer array `nums` sorted in ascending order (with distinct values) and possibly rotated at an unknown pivot, return *the index of `target` if it is in `nums`, or `-1` if it is not*.\n\n### Example 1:\n```\nInput: [4,5,6,7,0,1,2]\n0\nOutput: 4\nExplanation: 0 found at index 4.\n```\n\n### Example 2:\n```\nInput: [4,5,6,7,0,1,2]\n3\nOutput: -1\nExplanation: 3 is not in array.\n```",
    "difficulty": "MEDIUM",
    "category": "DSA",
    "patterns": [
      "Array",
      "Binary Search"
    ],
    "topics": [
      "Array",
      "Binary Search"
    ],
    "companyTags": [
      {
        "company": "Meta",
        "yearReported": 2025,
        "verified": true,
        "frequencyCount": 40,
        "sourceNote": "Reported in Meta 2021-2026 interview set"
      },
      {
        "company": "Google",
        "yearReported": 2025,
        "verified": true,
        "frequencyCount": 50,
        "sourceNote": "Reported in Google 2021-2026 interview set"
      },
      {
        "company": "Accenture",
        "yearReported": 2025,
        "verified": false,
        "frequencyCount": 25,
        "sourceNote": "Accenture Practice Bank #62"
      }
    ],
    "supportedLanguages": [
      "python",
      "javascript",
      "cpp",
      "java"
    ],
    "starterCode": [
      {
        "language": "python",
        "boilerplate": "def searchInRotatedSortedArray(*args):\n    # TODO: Implement solution for Search in Rotated Sorted Array\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = searchInRotatedSortedArray(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(searchInRotatedSortedArray(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function searchInRotatedSortedArray(...args) {\n    // TODO: Implement solution for Search in Rotated Sorted Array\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(searchInRotatedSortedArray(...parsed)));\n    } catch (e) {\n        console.log(searchInRotatedSortedArray(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Search in Rotated Sorted Array\n        string line;\n        while (getline(cin, line)) {\n            cout << line << endl;\n        }\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        String line;\n        while ((line = br.readLine()) != null) {\n            // TODO: Implement solution for Search in Rotated Sorted Array\n            System.out.println(line);\n        }\n    }\n}\n"
      }
    ],
    "sampleTestCases": [
      {
        "input": "[4,5,6,7,0,1,2]\n0",
        "output": "4",
        "explanation": "0 found at index 4."
      },
      {
        "input": "[4,5,6,7,0,1,2]\n3",
        "output": "-1",
        "explanation": "3 is not in array."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "[4,5,6,7,0,1,2]\n0",
        "output": "4",
        "isHidden": true
      },
      {
        "input": "[4,5,6,7,0,1,2]\n3",
        "output": "-1",
        "isHidden": true
      },
      {
        "input": "[1]\n0",
        "output": "-1",
        "isHidden": true
      }
    ],
    "hints": [
      "In every step of binary search, at least one half (left or right) is guaranteed to be sorted."
    ],
    "editorial": {
      "approach": "Optimal Approach for Search in Rotated Sorted Array",
      "solutionMarkdown": "### Optimal Solution\n\nCheck if left half is sorted. If so, verify if target lies within; otherwise check right half.\n\n### Complexity\n- Time: O(log N), Space: O(1)",
      "timeComplexity": "O(log N)",
      "spaceComplexity": "O(1)"
    },
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0
  },
  {
    "title": "Search Insert Position",
    "slug": "search-insert-position",
    "description": "Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.\n\nYou must write an algorithm with `O(log n)` runtime complexity.\n\n### Example 1:\n```\nInput: [1,3,5,6]\n5\nOutput: 2\nExplanation: 5 is found at index 2.\n```\n\n### Example 2:\n```\nInput: [1,3,5,6]\n2\nOutput: 1\nExplanation: 2 would be inserted at index 1.\n```",
    "difficulty": "EASY",
    "category": "DSA",
    "patterns": [
      "Binary Search",
      "Array"
    ],
    "topics": [
      "Binary Search",
      "Array"
    ],
    "companyTags": [
      {
        "company": "Apple",
        "yearReported": 2025,
        "verified": true,
        "frequencyCount": 45,
        "sourceNote": "Reported in Apple 2021-2026 interview set"
      }
    ],
    "supportedLanguages": [
      "python",
      "javascript",
      "cpp",
      "java"
    ],
    "starterCode": [
      {
        "language": "python",
        "boilerplate": "def searchInsertPosition(*args):\n    # TODO: Implement solution for Search Insert Position\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = searchInsertPosition(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(searchInsertPosition(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function searchInsertPosition(...args) {\n    // TODO: Implement solution for Search Insert Position\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(searchInsertPosition(...parsed)));\n    } catch (e) {\n        console.log(searchInsertPosition(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Search Insert Position\n        string line;\n        while (getline(cin, line)) {\n            cout << line << endl;\n        }\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        String line;\n        while ((line = br.readLine()) != null) {\n            // TODO: Implement solution for Search Insert Position\n            System.out.println(line);\n        }\n    }\n}\n"
      }
    ],
    "sampleTestCases": [
      {
        "input": "[1,3,5,6]\n5",
        "output": "2",
        "explanation": "5 is found at index 2."
      },
      {
        "input": "[1,3,5,6]\n2",
        "output": "1",
        "explanation": "2 would be inserted at index 1."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "[1,3,5,6]\n5",
        "output": "2",
        "isHidden": true
      },
      {
        "input": "[1,3,5,6]\n2",
        "output": "1",
        "isHidden": true
      },
      {
        "input": "[1,3,5,6]\n7",
        "output": "4",
        "isHidden": true
      },
      {
        "input": "[1,3,5,6]\n0",
        "output": "0",
        "isHidden": true
      }
    ],
    "hints": [
      "Standard binary search lower bound: find first element >= target."
    ],
    "editorial": {
      "approach": "Optimal Approach for Search Insert Position",
      "solutionMarkdown": "### Optimal Solution\n\nBinary search with left <= right. When loop ends, left is insert position.\n\n### Complexity\n- Time: O(log N), Space: O(1)",
      "timeComplexity": "O(log N)",
      "spaceComplexity": "O(1)"
    },
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0
  },
  {
    "title": "Serialize and Deserialize Binary Tree",
    "slug": "serialize-and-deserialize-binary-tree",
    "description": "Serialization is the process of converting a data structure or object into a sequence of bits so that it can be stored in a file or memory buffer. Design an algorithm to serialize and deserialize a binary tree.\n\n### Example 1:\n```\nInput: [1,2,3,null,null,4,5]\nOutput: [1, 2, 3, null, null, 4, 5]\nExplanation: Tree preserved identically through serialize and deserialize roundtrip.\n```\n\n### Example 2:\n```\nInput: []\nOutput: []\nExplanation: Empty tree.\n```",
    "difficulty": "HARD",
    "category": "DSA",
    "patterns": [
      "Tree",
      "Design",
      "BFS / DFS"
    ],
    "topics": [
      "Tree",
      "Design",
      "BFS / DFS"
    ],
    "companyTags": [
      {
        "company": "Apple",
        "yearReported": 2025,
        "verified": true,
        "frequencyCount": 45,
        "sourceNote": "Reported in Apple 2021-2026 interview set"
      },
      {
        "company": "Meta",
        "yearReported": 2025,
        "verified": true,
        "frequencyCount": 40,
        "sourceNote": "Reported in Meta 2021-2026 interview set"
      },
      {
        "company": "Microsoft",
        "yearReported": 2025,
        "verified": true,
        "frequencyCount": 35,
        "sourceNote": "Reported in Microsoft 2021-2026 interview set"
      }
    ],
    "supportedLanguages": [
      "python",
      "javascript",
      "cpp",
      "java"
    ],
    "starterCode": [
      {
        "language": "python",
        "boilerplate": "def serializeAndDeserializeBinaryTree(*args):\n    # TODO: Implement solution for Serialize and Deserialize Binary Tree\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = serializeAndDeserializeBinaryTree(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(serializeAndDeserializeBinaryTree(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function serializeAndDeserializeBinaryTree(...args) {\n    // TODO: Implement solution for Serialize and Deserialize Binary Tree\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(serializeAndDeserializeBinaryTree(...parsed)));\n    } catch (e) {\n        console.log(serializeAndDeserializeBinaryTree(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Serialize and Deserialize Binary Tree\n        string line;\n        while (getline(cin, line)) {\n            cout << line << endl;\n        }\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        String line;\n        while ((line = br.readLine()) != null) {\n            // TODO: Implement solution for Serialize and Deserialize Binary Tree\n            System.out.println(line);\n        }\n    }\n}\n"
      }
    ],
    "sampleTestCases": [
      {
        "input": "[1,2,3,null,null,4,5]",
        "output": "[1, 2, 3, null, null, 4, 5]",
        "explanation": "Tree preserved identically through serialize and deserialize roundtrip."
      },
      {
        "input": "[]",
        "output": "[]",
        "explanation": "Empty tree."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "[1,2,3,null,null,4,5]",
        "output": "[1, 2, 3, null, null, 4, 5]",
        "isHidden": true
      },
      {
        "input": "[]",
        "output": "[]",
        "isHidden": true
      }
    ],
    "hints": [
      "Use preorder traversal with 'null' markers, or level-order BFS traversal."
    ],
    "editorial": {
      "approach": "Optimal Approach for Serialize and Deserialize Binary Tree",
      "solutionMarkdown": "### Optimal Solution\n\nPreorder string serialization using delimiter and recursive iterator reconstruction.\n\n### Complexity\n- Time: O(N), Space: O(N)",
      "timeComplexity": "O(N)",
      "spaceComplexity": "O(N)"
    },
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0
  },
  {
    "title": "Set Matrix Zeroes",
    "slug": "set-matrix-zeroes",
    "description": "Given an `m x n` integer matrix `matrix`, if an element is `0`, set its entire row and column to `0`'s in-place.\n\n### Example 1:\n```\nInput: [[1,1,1],[1,0,1],[1,1,1]]\nOutput: [[1,0,1],[0,0,0],[1,0,1]]\nExplanation: Row 1 and Column 1 set to 0.\n```\n\n### Example 2:\n```\nInput: [[0,1,2,0],[3,4,5,2],[1,3,1,5]]\nOutput: [[0,0,0,0],[0,4,5,0],[0,3,1,0]]\nExplanation: Rows and columns containing 0 zeroes out.\n```",
    "difficulty": "MEDIUM",
    "category": "DSA",
    "patterns": [
      "Array",
      "Hash Table",
      "Matrix"
    ],
    "topics": [
      "Array",
      "Hash Table",
      "Matrix"
    ],
    "companyTags": [
      {
        "company": "Microsoft",
        "yearReported": 2025,
        "verified": true,
        "frequencyCount": 35,
        "sourceNote": "Reported in Microsoft 2021-2026 interview set"
      }
    ],
    "supportedLanguages": [
      "python",
      "javascript",
      "cpp",
      "java"
    ],
    "starterCode": [
      {
        "language": "python",
        "boilerplate": "def setMatrixZeroes(*args):\n    # TODO: Implement solution for Set Matrix Zeroes\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = setMatrixZeroes(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(setMatrixZeroes(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function setMatrixZeroes(...args) {\n    // TODO: Implement solution for Set Matrix Zeroes\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(setMatrixZeroes(...parsed)));\n    } catch (e) {\n        console.log(setMatrixZeroes(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Set Matrix Zeroes\n        string line;\n        while (getline(cin, line)) {\n            cout << line << endl;\n        }\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        String line;\n        while ((line = br.readLine()) != null) {\n            // TODO: Implement solution for Set Matrix Zeroes\n            System.out.println(line);\n        }\n    }\n}\n"
      }
    ],
    "sampleTestCases": [
      {
        "input": "[[1,1,1],[1,0,1],[1,1,1]]",
        "output": "[[1,0,1],[0,0,0],[1,0,1]]",
        "explanation": "Row 1 and Column 1 set to 0."
      },
      {
        "input": "[[0,1,2,0],[3,4,5,2],[1,3,1,5]]",
        "output": "[[0,0,0,0],[0,4,5,0],[0,3,1,0]]",
        "explanation": "Rows and columns containing 0 zeroes out."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "[[1,1,1],[1,0,1],[1,1,1]]",
        "output": "[[1,0,1],[0,0,0],[1,0,1]]",
        "isHidden": true
      },
      {
        "input": "[[0,1,2,0],[3,4,5,2],[1,3,1,5]]",
        "output": "[[0,0,0,0],[0,4,5,0],[0,3,1,0]]",
        "isHidden": true
      },
      {
        "input": "[[1]]",
        "output": "[[1]]",
        "isHidden": true
      }
    ],
    "hints": [
      "Use the first row and first column as markers, with two boolean flags for row 0 and col 0 itself."
    ],
    "editorial": {
      "approach": "Optimal Approach for Set Matrix Zeroes",
      "solutionMarkdown": "### Optimal Solution\n\nScan matrix: mark matrix[i][0] = 0 and matrix[0][j] = 0 when matrix[i][j] == 0. Apply markers in reverse.\n\n### Complexity\n- Time: O(M * N), Space: O(1)",
      "timeComplexity": "O(M * N)",
      "spaceComplexity": "O(1)"
    },
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0
  },
  {
    "title": "Shortest Palindrome",
    "slug": "shortest-palindrome",
    "description": "You are given a string `s`. You can convert `s` to a **palindrome** by adding characters in front of it. Return *the shortest palindrome you can find by performing this transformation*.\n\n### Example 1:\n```\nInput: \"aacecaaa\"\nOutput: \"aaacecaaa\"\nExplanation: Add 'a' in front.\n```\n\n### Example 2:\n```\nInput: \"abcd\"\nOutput: \"dcbabcd\"\nExplanation: Add 'dcb' in front.\n```",
    "difficulty": "HARD",
    "category": "DSA",
    "patterns": [
      "String",
      "Rolling Hash",
      "String Matching",
      "Hash Function"
    ],
    "topics": [
      "String",
      "Rolling Hash",
      "String Matching",
      "Hash Function"
    ],
    "companyTags": [
      {
        "company": "Google",
        "yearReported": 2025,
        "verified": true,
        "frequencyCount": 50,
        "sourceNote": "Reported in Google 2021-2026 interview set"
      }
    ],
    "supportedLanguages": [
      "python",
      "javascript",
      "cpp",
      "java"
    ],
    "starterCode": [
      {
        "language": "python",
        "boilerplate": "def shortestPalindrome(*args):\n    # TODO: Implement solution for Shortest Palindrome\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = shortestPalindrome(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(shortestPalindrome(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function shortestPalindrome(...args) {\n    // TODO: Implement solution for Shortest Palindrome\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(shortestPalindrome(...parsed)));\n    } catch (e) {\n        console.log(shortestPalindrome(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Shortest Palindrome\n        string line;\n        while (getline(cin, line)) {\n            cout << line << endl;\n        }\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        String line;\n        while ((line = br.readLine()) != null) {\n            // TODO: Implement solution for Shortest Palindrome\n            System.out.println(line);\n        }\n    }\n}\n"
      }
    ],
    "sampleTestCases": [
      {
        "input": "\"aacecaaa\"",
        "output": "\"aaacecaaa\"",
        "explanation": "Add 'a' in front."
      },
      {
        "input": "\"abcd\"",
        "output": "\"dcbabcd\"",
        "explanation": "Add 'dcb' in front."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "\"aacecaaa\"",
        "output": "\"aaacecaaa\"",
        "isHidden": true
      },
      {
        "input": "\"abcd\"",
        "output": "\"dcbabcd\"",
        "isHidden": true
      },
      {
        "input": "\"\"",
        "output": "\"\"",
        "isHidden": true
      }
    ],
    "hints": [
      "Find the longest palindromic prefix of s using KMP table on s + '#' + reverse(s)."
    ],
    "editorial": {
      "approach": "Optimal Approach for Shortest Palindrome",
      "solutionMarkdown": "### Optimal Solution\n\nConstruct temp = s + '#' + s[::-1]. Compute KMP pi array; pi[-1] gives length of longest palindromic prefix.\n\n### Complexity\n- Time: O(N), Space: O(N)",
      "timeComplexity": "O(N)",
      "spaceComplexity": "O(N)"
    },
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0
  },
  {
    "title": "Shortest Path in Binary Matrix",
    "slug": "shortest-path-in-binary-matrix",
    "description": "Given an `n x n` binary matrix `grid`, return the length of the shortest **clear path** in the matrix from `(0, 0)` to `(n - 1, n - 1)` (8-directional). If no path exists, return `-1`.\n\n### Example 1:\n```\nInput: [[0,1],[1,0]]\nOutput: 2\nExplanation: Path: (0,0) -> (1,1), length 2.\n```\n\n### Example 2:\n```\nInput: [[0,0,0],[1,1,0],[1,1,0]]\nOutput: 4\nExplanation: Path: (0,0) -> (0,1) -> (0,2) -> (1,2) -> (2,2).\n```",
    "difficulty": "MEDIUM",
    "category": "DSA",
    "patterns": [
      "Array",
      "Breadth-First Search",
      "Matrix"
    ],
    "topics": [
      "Array",
      "Breadth-First Search",
      "Matrix"
    ],
    "companyTags": [
      {
        "company": "Meta",
        "yearReported": 2025,
        "verified": true,
        "frequencyCount": 40,
        "sourceNote": "Reported in Meta 2021-2026 interview set"
      },
      {
        "company": "Microsoft",
        "yearReported": 2025,
        "verified": true,
        "frequencyCount": 35,
        "sourceNote": "Reported in Microsoft 2021-2026 interview set"
      }
    ],
    "supportedLanguages": [
      "python",
      "javascript",
      "cpp",
      "java"
    ],
    "starterCode": [
      {
        "language": "python",
        "boilerplate": "def shortestPathInBinaryMatrix(*args):\n    # TODO: Implement solution for Shortest Path in Binary Matrix\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = shortestPathInBinaryMatrix(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(shortestPathInBinaryMatrix(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function shortestPathInBinaryMatrix(...args) {\n    // TODO: Implement solution for Shortest Path in Binary Matrix\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(shortestPathInBinaryMatrix(...parsed)));\n    } catch (e) {\n        console.log(shortestPathInBinaryMatrix(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Shortest Path in Binary Matrix\n        string line;\n        while (getline(cin, line)) {\n            cout << line << endl;\n        }\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        String line;\n        while ((line = br.readLine()) != null) {\n            // TODO: Implement solution for Shortest Path in Binary Matrix\n            System.out.println(line);\n        }\n    }\n}\n"
      }
    ],
    "sampleTestCases": [
      {
        "input": "[[0,1],[1,0]]",
        "output": "2",
        "explanation": "Path: (0,0) -> (1,1), length 2."
      },
      {
        "input": "[[0,0,0],[1,1,0],[1,1,0]]",
        "output": "4",
        "explanation": "Path: (0,0) -> (0,1) -> (0,2) -> (1,2) -> (2,2)."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "[[0,1],[1,0]]",
        "output": "2",
        "isHidden": true
      },
      {
        "input": "[[0,0,0],[1,1,0],[1,1,0]]",
        "output": "4",
        "isHidden": true
      },
      {
        "input": "[[1,0],[0,0]]",
        "output": "-1",
        "isHidden": true
      }
    ],
    "hints": [
      "Use standard 8-directional BFS queue starting from (0,0) with distance 1."
    ],
    "editorial": {
      "approach": "Optimal Approach for Shortest Path in Binary Matrix",
      "solutionMarkdown": "### Optimal Solution\n\nBFS with queue. Mark visited in grid by mutating to 1. Stop and return distance when reaching (n-1, n-1).\n\n### Complexity\n- Time: O(N^2), Space: O(N^2)",
      "timeComplexity": "O(N^2)",
      "spaceComplexity": "O(N^2)"
    },
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0
  },
  {
    "title": "Simplify Path",
    "slug": "simplify-path",
    "description": "Given an absolute path for a Unix-style file system, which begins with a slash `'/'`, transform this path into its simplified **canonical path**.\n\n### Example 1:\n```\nInput: \"/home/\"\nOutput: \"/home\"\nExplanation: Trailing slash removed.\n```\n\n### Example 2:\n```\nInput: \"/home//foo/\"\nOutput: \"/home/foo\"\nExplanation: Multiple slashes replaced with single slash.\n```",
    "difficulty": "MEDIUM",
    "category": "DSA",
    "patterns": [
      "String",
      "Stack"
    ],
    "topics": [
      "String",
      "Stack"
    ],
    "companyTags": [
      {
        "company": "Meta",
        "yearReported": 2025,
        "verified": true,
        "frequencyCount": 40,
        "sourceNote": "Reported in Meta 2021-2026 interview set"
      }
    ],
    "supportedLanguages": [
      "python",
      "javascript",
      "cpp",
      "java"
    ],
    "starterCode": [
      {
        "language": "python",
        "boilerplate": "def simplifyPath(*args):\n    # TODO: Implement solution for Simplify Path\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = simplifyPath(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(simplifyPath(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function simplifyPath(...args) {\n    // TODO: Implement solution for Simplify Path\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(simplifyPath(...parsed)));\n    } catch (e) {\n        console.log(simplifyPath(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Simplify Path\n        string line;\n        while (getline(cin, line)) {\n            cout << line << endl;\n        }\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        String line;\n        while ((line = br.readLine()) != null) {\n            // TODO: Implement solution for Simplify Path\n            System.out.println(line);\n        }\n    }\n}\n"
      }
    ],
    "sampleTestCases": [
      {
        "input": "\"/home/\"",
        "output": "\"/home\"",
        "explanation": "Trailing slash removed."
      },
      {
        "input": "\"/home//foo/\"",
        "output": "\"/home/foo\"",
        "explanation": "Multiple slashes replaced with single slash."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "\"/home/\"",
        "output": "\"/home\"",
        "isHidden": true
      },
      {
        "input": "\"/home//foo/\"",
        "output": "\"/home/foo\"",
        "isHidden": true
      },
      {
        "input": "\"/../\"",
        "output": "\"/\"",
        "isHidden": true
      }
    ],
    "hints": [
      "Split by '/' and use a stack. '..' pops, '.' and empty strings are ignored."
    ],
    "editorial": {
      "approach": "Optimal Approach for Simplify Path",
      "solutionMarkdown": "### Optimal Solution\n\nSplit string on '/'. For each part: '..' pops from stack if non-empty; append valid directory names. Join with '/'.\n\n### Complexity\n- Time: O(N), Space: O(N)",
      "timeComplexity": "O(N)",
      "spaceComplexity": "O(N)"
    },
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0
  },
  {
    "title": "Single Number",
    "slug": "single-number",
    "description": "Given a non-empty array of integers `nums`, every element appears twice except for one. Find that single one. You must implement a solution with a linear runtime complexity and use only constant extra space.\n\n### Example 1:\n```\nInput: [2,2,1]\nOutput: 1\nExplanation: 1 appears only once.\n```\n\n### Example 2:\n```\nInput: [4,1,2,1,2]\nOutput: 4\nExplanation: 4 appears once.\n```",
    "difficulty": "EASY",
    "category": "DSA",
    "patterns": [
      "Array",
      "Bit Manipulation"
    ],
    "topics": [
      "Array",
      "Bit Manipulation"
    ],
    "companyTags": [
      {
        "company": "Google",
        "yearReported": 2025,
        "verified": true,
        "frequencyCount": 50,
        "sourceNote": "Reported in Google 2021-2026 interview set"
      }
    ],
    "supportedLanguages": [
      "python",
      "javascript",
      "cpp",
      "java"
    ],
    "starterCode": [
      {
        "language": "python",
        "boilerplate": "def singleNumber(*args):\n    # TODO: Implement solution for Single Number\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = singleNumber(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(singleNumber(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function singleNumber(...args) {\n    // TODO: Implement solution for Single Number\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(singleNumber(...parsed)));\n    } catch (e) {\n        console.log(singleNumber(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Single Number\n        string line;\n        while (getline(cin, line)) {\n            cout << line << endl;\n        }\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        String line;\n        while ((line = br.readLine()) != null) {\n            // TODO: Implement solution for Single Number\n            System.out.println(line);\n        }\n    }\n}\n"
      }
    ],
    "sampleTestCases": [
      {
        "input": "[2,2,1]",
        "output": "1",
        "explanation": "1 appears only once."
      },
      {
        "input": "[4,1,2,1,2]",
        "output": "4",
        "explanation": "4 appears once."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "[2,2,1]",
        "output": "1",
        "isHidden": true
      },
      {
        "input": "[4,1,2,1,2]",
        "output": "4",
        "isHidden": true
      },
      {
        "input": "[1]",
        "output": "1",
        "isHidden": true
      }
    ],
    "hints": [
      "XOR of any number with itself is 0, and XOR with 0 is the number itself."
    ],
    "editorial": {
      "approach": "Optimal Approach for Single Number",
      "solutionMarkdown": "### Optimal Solution\n\nXOR all elements in array. Paired elements cancel to 0, leaving the unique single number.\n\n### Complexity\n- Time: O(N), Space: O(1)",
      "timeComplexity": "O(N)",
      "spaceComplexity": "O(1)"
    },
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0
  },
  {
    "title": "Sliding Window Maximum",
    "slug": "sliding-window-maximum",
    "description": "You are given an array of integers `nums`, there is a sliding window of size `k` which is moving from the very left to the very right. Return *the max sliding window*.\n\n### Example 1:\n```\nInput: [1,3,-1,-3,5,3,6,7]\n3\nOutput: [3,3,5,5,6,7]\nExplanation: Maximums in each window of size 3.\n```\n\n### Example 2:\n```\nInput: [1]\n1\nOutput: [1]\nExplanation: Window size 1.\n```",
    "difficulty": "HARD",
    "category": "DSA",
    "patterns": [
      "Array",
      "Queue",
      "Sliding Window",
      "Heap / Priority Queue",
      "Monotonic Queue"
    ],
    "topics": [
      "Array",
      "Queue",
      "Sliding Window",
      "Heap / Priority Queue",
      "Monotonic Queue"
    ],
    "companyTags": [
      {
        "company": "Meta",
        "yearReported": 2025,
        "verified": true,
        "frequencyCount": 40,
        "sourceNote": "Reported in Meta 2021-2026 interview set"
      },
      {
        "company": "Microsoft",
        "yearReported": 2025,
        "verified": true,
        "frequencyCount": 35,
        "sourceNote": "Reported in Microsoft 2021-2026 interview set"
      },
      {
        "company": "Accenture",
        "yearReported": 2025,
        "verified": false,
        "frequencyCount": 25,
        "sourceNote": "Accenture Practice Bank #46"
      }
    ],
    "supportedLanguages": [
      "python",
      "javascript",
      "cpp",
      "java"
    ],
    "starterCode": [
      {
        "language": "python",
        "boilerplate": "def slidingWindowMaximum(*args):\n    # TODO: Implement solution for Sliding Window Maximum\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = slidingWindowMaximum(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(slidingWindowMaximum(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function slidingWindowMaximum(...args) {\n    // TODO: Implement solution for Sliding Window Maximum\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(slidingWindowMaximum(...parsed)));\n    } catch (e) {\n        console.log(slidingWindowMaximum(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Sliding Window Maximum\n        string line;\n        while (getline(cin, line)) {\n            cout << line << endl;\n        }\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        String line;\n        while ((line = br.readLine()) != null) {\n            // TODO: Implement solution for Sliding Window Maximum\n            System.out.println(line);\n        }\n    }\n}\n"
      }
    ],
    "sampleTestCases": [
      {
        "input": "[1,3,-1,-3,5,3,6,7]\n3",
        "output": "[3,3,5,5,6,7]",
        "explanation": "Maximums in each window of size 3."
      },
      {
        "input": "[1]\n1",
        "output": "[1]",
        "explanation": "Window size 1."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "[1,3,-1,-3,5,3,6,7]\n3",
        "output": "[3,3,5,5,6,7]",
        "isHidden": true
      },
      {
        "input": "[1]\n1",
        "output": "[1]",
        "isHidden": true
      },
      {
        "input": "[9,11]\n2",
        "output": "[11]",
        "isHidden": true
      }
    ],
    "hints": [
      "Use a monotonic decreasing deque storing indices of candidate maximums."
    ],
    "editorial": {
      "approach": "Optimal Approach for Sliding Window Maximum",
      "solutionMarkdown": "### Optimal Solution\n\nDeque maintains indices with decreasing values. Pop front if outside window i - k; pop back if value <= nums[i].\n\n### Complexity\n- Time: O(N), Space: O(K)",
      "timeComplexity": "O(N)",
      "spaceComplexity": "O(K)"
    },
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0
  },
  {
    "title": "Sort Colors",
    "slug": "sort-colors",
    "description": "Given an array `nums` with `n` objects colored red (0), white (1), or blue (2), sort them **in-place** so that objects of the same color are adjacent, with the colors in the order red, white, and blue (Dutch National Flag problem).\n\n### Example 1:\n```\nInput: [2,0,2,1,1,0]\nOutput: [0, 0, 1, 1, 2, 2]\nExplanation: Sorted in-place.\n```\n\n### Example 2:\n```\nInput: [2,0,1]\nOutput: [0, 1, 2]\nExplanation: [0, 1, 2].\n```",
    "difficulty": "MEDIUM",
    "category": "DSA",
    "patterns": [
      "Two Pointers",
      "Sorting",
      "Array"
    ],
    "topics": [
      "Two Pointers",
      "Sorting",
      "Array"
    ],
    "companyTags": [
      {
        "company": "Apple",
        "yearReported": 2025,
        "verified": true,
        "frequencyCount": 45,
        "sourceNote": "Reported in Apple 2021-2026 interview set"
      },
      {
        "company": "Meta",
        "yearReported": 2025,
        "verified": true,
        "frequencyCount": 40,
        "sourceNote": "Reported in Meta 2021-2026 interview set"
      },
      {
        "company": "Accenture",
        "yearReported": 2025,
        "verified": false,
        "frequencyCount": 25,
        "sourceNote": "Accenture Practice Bank #42"
      }
    ],
    "supportedLanguages": [
      "python",
      "javascript",
      "cpp",
      "java"
    ],
    "starterCode": [
      {
        "language": "python",
        "boilerplate": "def sortColors(*args):\n    # TODO: Implement solution for Sort Colors\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = sortColors(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(sortColors(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function sortColors(...args) {\n    // TODO: Implement solution for Sort Colors\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(sortColors(...parsed)));\n    } catch (e) {\n        console.log(sortColors(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Sort Colors\n        string line;\n        while (getline(cin, line)) {\n            cout << line << endl;\n        }\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        String line;\n        while ((line = br.readLine()) != null) {\n            // TODO: Implement solution for Sort Colors\n            System.out.println(line);\n        }\n    }\n}\n"
      }
    ],
    "sampleTestCases": [
      {
        "input": "[2,0,2,1,1,0]",
        "output": "[0, 0, 1, 1, 2, 2]",
        "explanation": "Sorted in-place."
      },
      {
        "input": "[2,0,1]",
        "output": "[0, 1, 2]",
        "explanation": "[0, 1, 2]."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "[2,0,2,1,1,0]",
        "output": "[0, 0, 1, 1, 2, 2]",
        "isHidden": true
      },
      {
        "input": "[2,0,1]",
        "output": "[0, 1, 2]",
        "isHidden": true
      },
      {
        "input": "[0]",
        "output": "[0]",
        "isHidden": true
      }
    ],
    "hints": [
      "Dutch National Flag: three pointers low, mid, high. Swap 0 to low, 2 to high."
    ],
    "editorial": {
      "approach": "Optimal Approach for Sort Colors",
      "solutionMarkdown": "### Optimal Solution\n\nOne-pass three-way partitioning placing 0s at front and 2s at back.\n\n### Complexity\n- Time: O(N), Space: O(1)",
      "timeComplexity": "O(N)",
      "spaceComplexity": "O(1)"
    },
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0
  },
  {
    "title": "Spiral Matrix",
    "slug": "spiral-matrix",
    "description": "Given an `m x n` matrix, return all elements of the `matrix` in spiral order.\n\n### Example 1:\n```\nInput: [[1,2,3],[4,5,6],[7,8,9]]\nOutput: [1, 2, 3, 6, 9, 8, 7, 4, 5]\nExplanation: Spiral traversal clockwise.\n```\n\n### Example 2:\n```\nInput: [[1,2,3,4],[5,6,7,8],[9,10,11,12]]\nOutput: [1, 2, 3, 4, 8, 12, 11, 10, 9, 5, 6, 7]\nExplanation: Rectangular matrix spiral.\n```",
    "difficulty": "MEDIUM",
    "category": "DSA",
    "patterns": [
      "Matrix",
      "Simulation"
    ],
    "topics": [
      "Matrix",
      "Simulation"
    ],
    "companyTags": [
      {
        "company": "Apple",
        "yearReported": 2025,
        "verified": true,
        "frequencyCount": 45,
        "sourceNote": "Reported in Apple 2021-2026 interview set"
      },
      {
        "company": "Microsoft",
        "yearReported": 2025,
        "verified": true,
        "frequencyCount": 35,
        "sourceNote": "Reported in Microsoft 2021-2026 interview set"
      }
    ],
    "supportedLanguages": [
      "python",
      "javascript",
      "cpp",
      "java"
    ],
    "starterCode": [
      {
        "language": "python",
        "boilerplate": "def spiralMatrix(*args):\n    # TODO: Implement solution for Spiral Matrix\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = spiralMatrix(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(spiralMatrix(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function spiralMatrix(...args) {\n    // TODO: Implement solution for Spiral Matrix\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(spiralMatrix(...parsed)));\n    } catch (e) {\n        console.log(spiralMatrix(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Spiral Matrix\n        string line;\n        while (getline(cin, line)) {\n            cout << line << endl;\n        }\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        String line;\n        while ((line = br.readLine()) != null) {\n            // TODO: Implement solution for Spiral Matrix\n            System.out.println(line);\n        }\n    }\n}\n"
      }
    ],
    "sampleTestCases": [
      {
        "input": "[[1,2,3],[4,5,6],[7,8,9]]",
        "output": "[1, 2, 3, 6, 9, 8, 7, 4, 5]",
        "explanation": "Spiral traversal clockwise."
      },
      {
        "input": "[[1,2,3,4],[5,6,7,8],[9,10,11,12]]",
        "output": "[1, 2, 3, 4, 8, 12, 11, 10, 9, 5, 6, 7]",
        "explanation": "Rectangular matrix spiral."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "[[1,2,3],[4,5,6],[7,8,9]]",
        "output": "[1, 2, 3, 6, 9, 8, 7, 4, 5]",
        "isHidden": true
      },
      {
        "input": "[[1]]",
        "output": "[1]",
        "isHidden": true
      }
    ],
    "hints": [
      "Maintain four boundaries: top, bottom, left, right. Increment/decrement after each border traversal."
    ],
    "editorial": {
      "approach": "Optimal Approach for Spiral Matrix",
      "solutionMarkdown": "### Optimal Solution\n\nShrink four pointers top, bottom, left, right inward until they cross.\n\n### Complexity\n- Time: O(M * N), Space: O(1) auxiliary",
      "timeComplexity": "O(M * N)",
      "spaceComplexity": "O(1) auxiliary"
    },
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0
  },
  {
    "title": "Spiral Matrix II",
    "slug": "spiral-matrix-ii",
    "description": "Given a positive integer `n`, generate an `n x n` matrix filled with elements from `1` to `n^2` in **spiral order**.\n\n### Example 1:\n```\nInput: 3\nOutput: [[1,2,3],[8,9,4],[7,6,5]]\nExplanation: Spiral fill of 3x3 matrix.\n```\n\n### Example 2:\n```\nInput: 1\nOutput: [[1]]\nExplanation: 1x1 matrix.\n```",
    "difficulty": "MEDIUM",
    "category": "DSA",
    "patterns": [
      "Array",
      "Matrix",
      "Simulation"
    ],
    "topics": [
      "Array",
      "Matrix",
      "Simulation"
    ],
    "companyTags": [
      {
        "company": "Google",
        "yearReported": 2025,
        "verified": true,
        "frequencyCount": 50,
        "sourceNote": "Reported in Google 2021-2026 interview set"
      }
    ],
    "supportedLanguages": [
      "python",
      "javascript",
      "cpp",
      "java"
    ],
    "starterCode": [
      {
        "language": "python",
        "boilerplate": "def spiralMatrixIi(*args):\n    # TODO: Implement solution for Spiral Matrix II\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = spiralMatrixIi(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(spiralMatrixIi(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function spiralMatrixIi(...args) {\n    // TODO: Implement solution for Spiral Matrix II\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(spiralMatrixIi(...parsed)));\n    } catch (e) {\n        console.log(spiralMatrixIi(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Spiral Matrix II\n        string line;\n        while (getline(cin, line)) {\n            cout << line << endl;\n        }\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        String line;\n        while ((line = br.readLine()) != null) {\n            // TODO: Implement solution for Spiral Matrix II\n            System.out.println(line);\n        }\n    }\n}\n"
      }
    ],
    "sampleTestCases": [
      {
        "input": "3",
        "output": "[[1,2,3],[8,9,4],[7,6,5]]",
        "explanation": "Spiral fill of 3x3 matrix."
      },
      {
        "input": "1",
        "output": "[[1]]",
        "explanation": "1x1 matrix."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "3",
        "output": "[[1,2,3],[8,9,4],[7,6,5]]",
        "isHidden": true
      },
      {
        "input": "1",
        "output": "[[1]]",
        "isHidden": true
      },
      {
        "input": "2",
        "output": "[[1,2],[4,3]]",
        "isHidden": true
      }
    ],
    "hints": [
      "Maintain four boundaries: top, bottom, left, right. Traverse edges clockwise and shrink boundaries."
    ],
    "editorial": {
      "approach": "Optimal Approach for Spiral Matrix II",
      "solutionMarkdown": "### Optimal Solution\n\nSimulate spiral traversal updating top, bottom, left, right bounds, filling values from 1 to n^2.\n\n### Complexity\n- Time: O(N^2), Space: O(1) auxiliary",
      "timeComplexity": "O(N^2)",
      "spaceComplexity": "O(1) auxiliary"
    },
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0
  },
  {
    "title": "Sqrt(x)",
    "slug": "sqrt",
    "description": "Given a non-negative integer `x`, return *the square root of* `x` *rounded down to the nearest integer*. The returned integer should be **non-negative** as well.\n\n### Example 1:\n```\nInput: 4\nOutput: 2\nExplanation: The square root of 4 is 2, so we return 2.\n```\n\n### Example 2:\n```\nInput: 8\nOutput: 2\nExplanation: The square root of 8 is 2.82842..., and since we round down to the nearest integer, 2 is returned.\n```",
    "difficulty": "EASY",
    "category": "DSA",
    "patterns": [
      "Math",
      "Binary Search"
    ],
    "topics": [
      "Math",
      "Binary Search"
    ],
    "companyTags": [
      {
        "company": "Accenture",
        "yearReported": 2025,
        "verified": false,
        "frequencyCount": 25,
        "sourceNote": "Accenture Practice Bank #70"
      }
    ],
    "supportedLanguages": [
      "python",
      "javascript",
      "cpp",
      "java"
    ],
    "starterCode": [
      {
        "language": "python",
        "boilerplate": "def sqrt(*args):\n    # TODO: Implement solution for Sqrt(x)\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = sqrt(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(sqrt(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function sqrt(...args) {\n    // TODO: Implement solution for Sqrt(x)\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(sqrt(...parsed)));\n    } catch (e) {\n        console.log(sqrt(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Sqrt(x)\n        string line;\n        while (getline(cin, line)) {\n            cout << line << endl;\n        }\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        String line;\n        while ((line = br.readLine()) != null) {\n            // TODO: Implement solution for Sqrt(x)\n            System.out.println(line);\n        }\n    }\n}\n"
      }
    ],
    "sampleTestCases": [
      {
        "input": "4",
        "output": "2",
        "explanation": "The square root of 4 is 2, so we return 2."
      },
      {
        "input": "8",
        "output": "2",
        "explanation": "The square root of 8 is 2.82842..., and since we round down to the nearest integer, 2 is returned."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "4",
        "output": "2",
        "isHidden": true
      },
      {
        "input": "8",
        "output": "2",
        "isHidden": true
      },
      {
        "input": "0",
        "output": "0",
        "isHidden": true
      },
      {
        "input": "1",
        "output": "1",
        "isHidden": true
      }
    ],
    "hints": [
      "Binary search on range [0, x]. Check if mid * mid <= x."
    ],
    "editorial": {
      "approach": "Optimal Approach for Sqrt(x)",
      "solutionMarkdown": "### Optimal Solution\n\nBinary search on integer domain [0, x // 2 + 1]. If mid * mid <= x, ans = mid and low = mid + 1; else high = mid - 1.\n\n### Complexity\n- Time: O(log x), Space: O(1)",
      "timeComplexity": "O(log x)",
      "spaceComplexity": "O(1)"
    },
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0
  },
  {
    "title": "String Compression",
    "slug": "string-compression",
    "description": "Given an array of characters `chars`, compress it in-place using the following algorithm: For each group of consecutive repeating characters in `chars`, if group length is 1 append char; if > 1 append char followed by group's length. Return the new length of the array.\n\n### Example 1:\n```\nInput: [\"a\",\"a\",\"b\",\"b\",\"c\",\"c\",\"c\"]\nOutput: 6\nExplanation: The groups are \"aa\", \"bb\", and \"ccc\". This compresses to \"a2b2c3\" with length 6.\n```\n\n### Example 2:\n```\nInput: [\"a\"]\nOutput: 1\nExplanation: Single character remains \"a\" length 1.\n```",
    "difficulty": "MEDIUM",
    "category": "DSA",
    "patterns": [
      "Two Pointers",
      "String"
    ],
    "topics": [
      "Two Pointers",
      "String"
    ],
    "companyTags": [
      {
        "company": "Accenture",
        "yearReported": 2025,
        "verified": false,
        "frequencyCount": 25,
        "sourceNote": "Accenture Practice Bank #29"
      }
    ],
    "supportedLanguages": [
      "python",
      "javascript",
      "cpp",
      "java"
    ],
    "starterCode": [
      {
        "language": "python",
        "boilerplate": "def stringCompression(*args):\n    # TODO: Implement solution for String Compression\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = stringCompression(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(stringCompression(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function stringCompression(...args) {\n    // TODO: Implement solution for String Compression\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(stringCompression(...parsed)));\n    } catch (e) {\n        console.log(stringCompression(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for String Compression\n        string line;\n        while (getline(cin, line)) {\n            cout << line << endl;\n        }\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        String line;\n        while ((line = br.readLine()) != null) {\n            // TODO: Implement solution for String Compression\n            System.out.println(line);\n        }\n    }\n}\n"
      }
    ],
    "sampleTestCases": [
      {
        "input": "[\"a\",\"a\",\"b\",\"b\",\"c\",\"c\",\"c\"]",
        "output": "6",
        "explanation": "The groups are \"aa\", \"bb\", and \"ccc\". This compresses to \"a2b2c3\" with length 6."
      },
      {
        "input": "[\"a\"]",
        "output": "1",
        "explanation": "Single character remains \"a\" length 1."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "[\"a\",\"a\",\"b\",\"b\",\"c\",\"c\",\"c\"]",
        "output": "6",
        "isHidden": true
      },
      {
        "input": "[\"a\"]",
        "output": "1",
        "isHidden": true
      },
      {
        "input": "[\"a\",\"b\",\"b\",\"b\",\"b\",\"b\",\"b\",\"b\",\"b\",\"b\",\"b\",\"b\",\"b\"]",
        "output": "4",
        "isHidden": true
      }
    ],
    "hints": [
      "Use two pointers: write_ptr for writing compressed output, read_ptr for counting identical consecutive characters."
    ],
    "editorial": {
      "approach": "Optimal Approach for String Compression",
      "solutionMarkdown": "### Optimal Solution\n\nWhile read < n, count group length. Write chars[read], and if count > 1, write each digit of count string.\n\n### Complexity\n- Time: O(N), Space: O(1) in-place",
      "timeComplexity": "O(N)",
      "spaceComplexity": "O(1) in-place"
    },
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0
  },
  {
    "title": "String Reconstruction in a Grid",
    "slug": "string-reconstruction-in-a-grid",
    "description": "Given partial path clues and character transitions across rows and columns of a hidden grid, reconstruct the unique target string using topological order.\n\n### Example 1:\n```\nInput: [\"abc\",\"bce\",\"ced\"]\nOutput: \"abced\"\nExplanation: Overlapping sequences reconstruct into unique string \"abced\".\n```\n\n### Example 2:\n```\nInput: [\"ab\",\"bc\"]\nOutput: \"abc\"\nExplanation: Topological order 'a' -> 'b' -> 'c'.\n```",
    "difficulty": "HARD",
    "category": "DSA",
    "patterns": [
      "Graph",
      "Topological Sort",
      "Matrix",
      "Array"
    ],
    "topics": [
      "Graph",
      "Topological Sort",
      "Matrix",
      "Array"
    ],
    "companyTags": [
      {
        "company": "Microsoft",
        "yearReported": 2025,
        "verified": true,
        "frequencyCount": 35,
        "sourceNote": "Reported in Microsoft 2021-2026 interview set"
      }
    ],
    "supportedLanguages": [
      "python",
      "javascript",
      "cpp",
      "java"
    ],
    "starterCode": [
      {
        "language": "python",
        "boilerplate": "def stringReconstructionInAGrid(*args):\n    # TODO: Implement solution for String Reconstruction in a Grid\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = stringReconstructionInAGrid(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(stringReconstructionInAGrid(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function stringReconstructionInAGrid(...args) {\n    // TODO: Implement solution for String Reconstruction in a Grid\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(stringReconstructionInAGrid(...parsed)));\n    } catch (e) {\n        console.log(stringReconstructionInAGrid(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for String Reconstruction in a Grid\n        string line;\n        while (getline(cin, line)) {\n            cout << line << endl;\n        }\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        String line;\n        while ((line = br.readLine()) != null) {\n            // TODO: Implement solution for String Reconstruction in a Grid\n            System.out.println(line);\n        }\n    }\n}\n"
      }
    ],
    "sampleTestCases": [
      {
        "input": "[\"abc\",\"bce\",\"ced\"]",
        "output": "\"abced\"",
        "explanation": "Overlapping sequences reconstruct into unique string \"abced\"."
      },
      {
        "input": "[\"ab\",\"bc\"]",
        "output": "\"abc\"",
        "explanation": "Topological order 'a' -> 'b' -> 'c'."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "[\"abc\",\"bce\",\"ced\"]",
        "output": "\"abced\"",
        "isHidden": true
      },
      {
        "input": "[\"ab\",\"bc\"]",
        "output": "\"abc\"",
        "isHidden": true
      },
      {
        "input": "[\"xy\"]",
        "output": "\"xy\"",
        "isHidden": true
      }
    ],
    "hints": [
      "Build a directed acyclic graph (DAG) of adjacent characters and perform Kahn's Topological Sort."
    ],
    "editorial": {
      "approach": "Optimal Approach for String Reconstruction in a Grid",
      "solutionMarkdown": "### Optimal Solution\n\nAdd directed edges between consecutive characters. Use Kahn's algorithm; ensure in-degree queue size is always 1.\n\n### Complexity\n- Time: O(V + E), Space: O(V + E)",
      "timeComplexity": "O(V + E)",
      "spaceComplexity": "O(V + E)"
    },
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0
  },
  {
    "title": "String to Integer (atoi)",
    "slug": "string-to-integer",
    "description": "Implement the `myAtoi(string s)` function, which converts a string to a 32-bit signed integer. Clamp within `[-2^31, 2^31 - 1]`.\n\n### Example 1:\n```\nInput: \"42\"\nOutput: 42\nExplanation: Parsed integer 42.\n```\n\n### Example 2:\n```\nInput: \" -042\"\nOutput: -42\nExplanation: Leading whitespace ignored, '-' sign read, '042' read as 42.\n```",
    "difficulty": "MEDIUM",
    "category": "DSA",
    "patterns": [
      "String"
    ],
    "topics": [
      "String"
    ],
    "companyTags": [
      {
        "company": "Meta",
        "yearReported": 2025,
        "verified": true,
        "frequencyCount": 40,
        "sourceNote": "Reported in Meta 2021-2026 interview set"
      },
      {
        "company": "Google",
        "yearReported": 2025,
        "verified": true,
        "frequencyCount": 50,
        "sourceNote": "Reported in Google 2021-2026 interview set"
      }
    ],
    "supportedLanguages": [
      "python",
      "javascript",
      "cpp",
      "java"
    ],
    "starterCode": [
      {
        "language": "python",
        "boilerplate": "def stringToInteger(*args):\n    # TODO: Implement solution for String to Integer (atoi)\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = stringToInteger(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(stringToInteger(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function stringToInteger(...args) {\n    // TODO: Implement solution for String to Integer (atoi)\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(stringToInteger(...parsed)));\n    } catch (e) {\n        console.log(stringToInteger(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for String to Integer (atoi)\n        string line;\n        while (getline(cin, line)) {\n            cout << line << endl;\n        }\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        String line;\n        while ((line = br.readLine()) != null) {\n            // TODO: Implement solution for String to Integer (atoi)\n            System.out.println(line);\n        }\n    }\n}\n"
      }
    ],
    "sampleTestCases": [
      {
        "input": "\"42\"",
        "output": "42",
        "explanation": "Parsed integer 42."
      },
      {
        "input": "\" -042\"",
        "output": "-42",
        "explanation": "Leading whitespace ignored, '-' sign read, '042' read as 42."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "\"42\"",
        "output": "42",
        "isHidden": true
      },
      {
        "input": "\" -042\"",
        "output": "-42",
        "isHidden": true
      },
      {
        "input": "\"1337c0d3\"",
        "output": "1337",
        "isHidden": true
      }
    ],
    "hints": [
      "Skip whitespace, check optional +/- sign, parse digits, clamp between INT_MIN and INT_MAX."
    ],
    "editorial": {
      "approach": "Optimal Approach for String to Integer (atoi)",
      "solutionMarkdown": "### Optimal Solution\n\nStep-by-step state machine: strip whitespace, check sign, convert digits checking overflow at each step.\n\n### Complexity\n- Time: O(N), Space: O(1)",
      "timeComplexity": "O(N)",
      "spaceComplexity": "O(1)"
    },
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0
  },
  {
    "title": "Strobogrammatic Number",
    "slug": "strobogrammatic-number",
    "description": "Given a string `num` which represents an integer, return `true` *if `num` is a **strobogrammatic number*** (a number that looks the same when rotated 180 degrees).\n\n### Example 1:\n```\nInput: \"69\"\nOutput: true\nExplanation: Rotated 180 degrees, '6' becomes '9' and '9' becomes '6'.\n```\n\n### Example 2:\n```\nInput: \"88\"\nOutput: true\nExplanation: '88' rotated 180 degrees is '88'.\n```",
    "difficulty": "EASY",
    "category": "DSA",
    "patterns": [
      "Hash Table",
      "Two Pointers",
      "String"
    ],
    "topics": [
      "Hash Table",
      "Two Pointers",
      "String"
    ],
    "companyTags": [
      {
        "company": "Google",
        "yearReported": 2025,
        "verified": true,
        "frequencyCount": 50,
        "sourceNote": "Reported in Google 2021-2026 interview set"
      }
    ],
    "supportedLanguages": [
      "python",
      "javascript",
      "cpp",
      "java"
    ],
    "starterCode": [
      {
        "language": "python",
        "boilerplate": "def strobogrammaticNumber(*args):\n    # TODO: Implement solution for Strobogrammatic Number\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = strobogrammaticNumber(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(strobogrammaticNumber(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function strobogrammaticNumber(...args) {\n    // TODO: Implement solution for Strobogrammatic Number\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(strobogrammaticNumber(...parsed)));\n    } catch (e) {\n        console.log(strobogrammaticNumber(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Strobogrammatic Number\n        string line;\n        while (getline(cin, line)) {\n            cout << line << endl;\n        }\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        String line;\n        while ((line = br.readLine()) != null) {\n            // TODO: Implement solution for Strobogrammatic Number\n            System.out.println(line);\n        }\n    }\n}\n"
      }
    ],
    "sampleTestCases": [
      {
        "input": "\"69\"",
        "output": "true",
        "explanation": "Rotated 180 degrees, '6' becomes '9' and '9' becomes '6'."
      },
      {
        "input": "\"88\"",
        "output": "true",
        "explanation": "'88' rotated 180 degrees is '88'."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "\"69\"",
        "output": "true",
        "isHidden": true
      },
      {
        "input": "\"88\"",
        "output": "true",
        "isHidden": true
      },
      {
        "input": "\"962\"",
        "output": "false",
        "isHidden": true
      }
    ],
    "hints": [
      "Valid pairs: (0,0), (1,1), (8,8), (6,9), (9,6). Use two pointers comparing opposite ends."
    ],
    "editorial": {
      "approach": "Optimal Approach for Strobogrammatic Number",
      "solutionMarkdown": "### Optimal Solution\n\nTwo pointers left and right. Verify pair (num[left], num[right]) matches strobogrammatic dictionary.\n\n### Complexity\n- Time: O(N), Space: O(1)",
      "timeComplexity": "O(N)",
      "spaceComplexity": "O(1)"
    },
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0
  },
  {
    "title": "Subarray Sum Equals K",
    "slug": "subarray-sum-equals-k",
    "description": "Given an array of integers `nums` and an integer `k`, return *the total number of subarrays whose sum equals to `k`*.\n\n### Example 1:\n```\nInput: [1,1,1]\n2\nOutput: 2\nExplanation: [1,1] at [0,1] and [1,2].\n```\n\n### Example 2:\n```\nInput: [1,2,3]\n3\nOutput: 2\nExplanation: [1,2] and [3].\n```",
    "difficulty": "MEDIUM",
    "category": "DSA",
    "patterns": [
      "Prefix Sum",
      "Hash Table"
    ],
    "topics": [
      "Prefix Sum",
      "Hash Table"
    ],
    "companyTags": [
      {
        "company": "Apple",
        "yearReported": 2025,
        "verified": true,
        "frequencyCount": 45,
        "sourceNote": "Reported in Apple 2021-2026 interview set"
      },
      {
        "company": "Meta",
        "yearReported": 2025,
        "verified": true,
        "frequencyCount": 40,
        "sourceNote": "Reported in Meta 2021-2026 interview set"
      },
      {
        "company": "Microsoft",
        "yearReported": 2025,
        "verified": true,
        "frequencyCount": 35,
        "sourceNote": "Reported in Microsoft 2021-2026 interview set"
      },
      {
        "company": "Accenture",
        "yearReported": 2025,
        "verified": false,
        "frequencyCount": 25,
        "sourceNote": "Accenture Practice Bank #36"
      }
    ],
    "supportedLanguages": [
      "python",
      "javascript",
      "cpp",
      "java"
    ],
    "starterCode": [
      {
        "language": "python",
        "boilerplate": "def subarraySumEqualsK(*args):\n    # TODO: Implement solution for Subarray Sum Equals K\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = subarraySumEqualsK(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(subarraySumEqualsK(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function subarraySumEqualsK(...args) {\n    // TODO: Implement solution for Subarray Sum Equals K\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(subarraySumEqualsK(...parsed)));\n    } catch (e) {\n        console.log(subarraySumEqualsK(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Subarray Sum Equals K\n        string line;\n        while (getline(cin, line)) {\n            cout << line << endl;\n        }\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        String line;\n        while ((line = br.readLine()) != null) {\n            // TODO: Implement solution for Subarray Sum Equals K\n            System.out.println(line);\n        }\n    }\n}\n"
      }
    ],
    "sampleTestCases": [
      {
        "input": "[1,1,1]\n2",
        "output": "2",
        "explanation": "[1,1] at [0,1] and [1,2]."
      },
      {
        "input": "[1,2,3]\n3",
        "output": "2",
        "explanation": "[1,2] and [3]."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "[1,1,1]\n2",
        "output": "2",
        "isHidden": true
      },
      {
        "input": "[1,2,3]\n3",
        "output": "2",
        "isHidden": true
      },
      {
        "input": "[1,-1,0]\n0",
        "output": "3",
        "isHidden": true
      }
    ],
    "hints": [
      "Track prefix sum frequencies in a hash map. Subarray sum(i, j) = pref[j] - pref[i-1] == k."
    ],
    "editorial": {
      "approach": "Optimal Approach for Subarray Sum Equals K",
      "solutionMarkdown": "### Optimal Solution\n\nAt each index, count += pref_map.get(curr_sum - k, 0). Record curr_sum in map.\n\n### Complexity\n- Time: O(N), Space: O(N)",
      "timeComplexity": "O(N)",
      "spaceComplexity": "O(N)"
    },
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0
  },
  {
    "title": "Subsets",
    "slug": "subsets",
    "description": "Given an integer array `nums` of **unique** elements, return *all possible subsets (the power set)*. The solution set must not contain duplicate subsets. Return the solution in **any order**.\n\n### Example 1:\n```\nInput: [1,2,3]\nOutput: [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]]\nExplanation: All 2^3 = 8 subsets.\n```\n\n### Example 2:\n```\nInput: [0]\nOutput: [[], [0]]\nExplanation: 2 subsets.\n```",
    "difficulty": "MEDIUM",
    "category": "DSA",
    "patterns": [
      "Backtracking",
      "Bitmask",
      "Recursion"
    ],
    "topics": [
      "Backtracking",
      "Bitmask",
      "Recursion"
    ],
    "companyTags": [
      {
        "company": "Apple",
        "yearReported": 2025,
        "verified": true,
        "frequencyCount": 45,
        "sourceNote": "Reported in Apple 2021-2026 interview set"
      },
      {
        "company": "Meta",
        "yearReported": 2025,
        "verified": true,
        "frequencyCount": 40,
        "sourceNote": "Reported in Meta 2021-2026 interview set"
      },
      {
        "company": "Microsoft",
        "yearReported": 2025,
        "verified": true,
        "frequencyCount": 35,
        "sourceNote": "Reported in Microsoft 2021-2026 interview set"
      },
      {
        "company": "Accenture",
        "yearReported": 2025,
        "verified": false,
        "frequencyCount": 25,
        "sourceNote": "Accenture Practice Bank #80"
      }
    ],
    "supportedLanguages": [
      "python",
      "javascript",
      "cpp",
      "java"
    ],
    "starterCode": [
      {
        "language": "python",
        "boilerplate": "def subsets(*args):\n    # TODO: Implement solution for Subsets\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = subsets(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(subsets(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function subsets(...args) {\n    // TODO: Implement solution for Subsets\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(subsets(...parsed)));\n    } catch (e) {\n        console.log(subsets(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Subsets\n        string line;\n        while (getline(cin, line)) {\n            cout << line << endl;\n        }\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        String line;\n        while ((line = br.readLine()) != null) {\n            // TODO: Implement solution for Subsets\n            System.out.println(line);\n        }\n    }\n}\n"
      }
    ],
    "sampleTestCases": [
      {
        "input": "[1,2,3]",
        "output": "[[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]]",
        "explanation": "All 2^3 = 8 subsets."
      },
      {
        "input": "[0]",
        "output": "[[], [0]]",
        "explanation": "2 subsets."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "[1,2,3]",
        "output": "[[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]]",
        "isHidden": true
      },
      {
        "input": "[0]",
        "output": "[[], [0]]",
        "isHidden": true
      }
    ],
    "hints": [
      "Backtrack: at index i, choose to include nums[i] or exclude nums[i], or use bit manipulation from 0 to 2^n - 1."
    ],
    "editorial": {
      "approach": "Optimal Approach for Subsets",
      "solutionMarkdown": "### Optimal Solution\n\nBacktracking decision tree exploring 2^N states.\n\n### Complexity\n- Time: O(N * 2^N), Space: O(N * 2^N)",
      "timeComplexity": "O(N * 2^N)",
      "spaceComplexity": "O(N * 2^N)"
    },
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0
  },
  {
    "title": "Subsets II",
    "slug": "subsets-ii",
    "description": "Given an integer array `nums` that may contain duplicates, return *all possible subsets (the power set)* without duplicate subsets.\n\n### Example 1:\n```\nInput: [1,2,2]\nOutput: [[],[1],[1,2],[1,2,2],[2],[2,2]]\nExplanation: All unique subsets generated.\n```\n\n### Example 2:\n```\nInput: [0]\nOutput: [[],[0]]\nExplanation: Subsets of single element.\n```",
    "difficulty": "MEDIUM",
    "category": "DSA",
    "patterns": [
      "Array",
      "Backtracking",
      "Bit Manipulation"
    ],
    "topics": [
      "Array",
      "Backtracking",
      "Bit Manipulation"
    ],
    "companyTags": [
      {
        "company": "Google",
        "yearReported": 2025,
        "verified": true,
        "frequencyCount": 50,
        "sourceNote": "Reported in Google 2021-2026 interview set"
      }
    ],
    "supportedLanguages": [
      "python",
      "javascript",
      "cpp",
      "java"
    ],
    "starterCode": [
      {
        "language": "python",
        "boilerplate": "def subsetsIi(*args):\n    # TODO: Implement solution for Subsets II\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = subsetsIi(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(subsetsIi(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function subsetsIi(...args) {\n    // TODO: Implement solution for Subsets II\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(subsetsIi(...parsed)));\n    } catch (e) {\n        console.log(subsetsIi(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Subsets II\n        string line;\n        while (getline(cin, line)) {\n            cout << line << endl;\n        }\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        String line;\n        while ((line = br.readLine()) != null) {\n            // TODO: Implement solution for Subsets II\n            System.out.println(line);\n        }\n    }\n}\n"
      }
    ],
    "sampleTestCases": [
      {
        "input": "[1,2,2]",
        "output": "[[],[1],[1,2],[1,2,2],[2],[2,2]]",
        "explanation": "All unique subsets generated."
      },
      {
        "input": "[0]",
        "output": "[[],[0]]",
        "explanation": "Subsets of single element."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "[1,2,2]",
        "output": "[[],[1],[1,2],[1,2,2],[2],[2,2]]",
        "isHidden": true
      },
      {
        "input": "[0]",
        "output": "[[],[0]]",
        "isHidden": true
      },
      {
        "input": "[]",
        "output": "[[]]",
        "isHidden": true
      }
    ],
    "hints": [
      "Sort nums. During backtracking, skip nums[i] if i > start and nums[i] == nums[i-1]."
    ],
    "editorial": {
      "approach": "Optimal Approach for Subsets II",
      "solutionMarkdown": "### Optimal Solution\n\nSort array. Recursive backtrack: skip duplicate branches when element equals preceding element at same recursion level.\n\n### Complexity\n- Time: O(2^N), Space: O(N)",
      "timeComplexity": "O(2^N)",
      "spaceComplexity": "O(N)"
    },
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0
  },
  {
    "title": "Subtree of Another Tree",
    "slug": "subtree-of-another-tree",
    "description": "Given the roots of two binary trees `root` and `subRoot`, return `true` if there is a subtree of `root` with the same structure and node values of `subRoot` and `false` otherwise.\n\n### Example 1:\n```\nInput: [3,4,5,1,2]\n[4,1,2]\nOutput: true\nExplanation: subRoot matches subtree rooted at node 4.\n```\n\n### Example 2:\n```\nInput: [3,4,5,1,2,null,null,null,null,0]\n[4,1,2]\nOutput: false\nExplanation: Extra node 0 prevents match.\n```",
    "difficulty": "EASY",
    "category": "DSA",
    "patterns": [
      "Tree",
      "BFS / DFS",
      "Recursion"
    ],
    "topics": [
      "Tree",
      "BFS / DFS",
      "Recursion"
    ],
    "companyTags": [
      {
        "company": "Apple",
        "yearReported": 2025,
        "verified": true,
        "frequencyCount": 45,
        "sourceNote": "Reported in Apple 2021-2026 interview set"
      },
      {
        "company": "Meta",
        "yearReported": 2025,
        "verified": true,
        "frequencyCount": 40,
        "sourceNote": "Reported in Meta 2021-2026 interview set"
      }
    ],
    "supportedLanguages": [
      "python",
      "javascript",
      "cpp",
      "java"
    ],
    "starterCode": [
      {
        "language": "python",
        "boilerplate": "def subtreeOfAnotherTree(*args):\n    # TODO: Implement solution for Subtree of Another Tree\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = subtreeOfAnotherTree(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(subtreeOfAnotherTree(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function subtreeOfAnotherTree(...args) {\n    // TODO: Implement solution for Subtree of Another Tree\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(subtreeOfAnotherTree(...parsed)));\n    } catch (e) {\n        console.log(subtreeOfAnotherTree(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Subtree of Another Tree\n        string line;\n        while (getline(cin, line)) {\n            cout << line << endl;\n        }\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        String line;\n        while ((line = br.readLine()) != null) {\n            // TODO: Implement solution for Subtree of Another Tree\n            System.out.println(line);\n        }\n    }\n}\n"
      }
    ],
    "sampleTestCases": [
      {
        "input": "[3,4,5,1,2]\n[4,1,2]",
        "output": "true",
        "explanation": "subRoot matches subtree rooted at node 4."
      },
      {
        "input": "[3,4,5,1,2,null,null,null,null,0]\n[4,1,2]",
        "output": "false",
        "explanation": "Extra node 0 prevents match."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "[3,4,5,1,2]\n[4,1,2]",
        "output": "true",
        "isHidden": true
      },
      {
        "input": "[3,4,5,1,2,null,null,null,null,0]\n[4,1,2]",
        "output": "false",
        "isHidden": true
      }
    ],
    "hints": [
      "isSameTree(s, t) helper called at root, or recurse on root.left and root.right."
    ],
    "editorial": {
      "approach": "Optimal Approach for Subtree of Another Tree",
      "solutionMarkdown": "### Optimal Solution\n\nTree matching recursion with isSameTree verification.\n\n### Complexity\n- Time: O(M * N), Space: O(H)",
      "timeComplexity": "O(M * N)",
      "spaceComplexity": "O(H)"
    },
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0
  },
  {
    "title": "Sum of All Array Elements",
    "slug": "sum-of-all-array-elements",
    "description": "Given an array of integers `nums`, compute and return the total sum of all elements in the array.\n\n### Example 1:\n```\nInput: [1,2,3,4,5]\nOutput: 15\nExplanation: 1 + 2 + 3 + 4 + 5 = 15.\n```\n\n### Example 2:\n```\nInput: [-1,-2,3]\nOutput: 0\nExplanation: -1 + -2 + 3 = 0.\n```",
    "difficulty": "EASY",
    "category": "DSA",
    "patterns": [
      "Array",
      "Math"
    ],
    "topics": [
      "Array",
      "Math"
    ],
    "companyTags": [
      {
        "company": "Accenture",
        "yearReported": 2025,
        "verified": false,
        "frequencyCount": 25,
        "sourceNote": "Accenture Practice Bank #19"
      }
    ],
    "supportedLanguages": [
      "python",
      "javascript",
      "cpp",
      "java"
    ],
    "starterCode": [
      {
        "language": "python",
        "boilerplate": "def sumOfAllArrayElements(*args):\n    # TODO: Implement solution for Sum of All Array Elements\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = sumOfAllArrayElements(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(sumOfAllArrayElements(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function sumOfAllArrayElements(...args) {\n    // TODO: Implement solution for Sum of All Array Elements\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(sumOfAllArrayElements(...parsed)));\n    } catch (e) {\n        console.log(sumOfAllArrayElements(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Sum of All Array Elements\n        string line;\n        while (getline(cin, line)) {\n            cout << line << endl;\n        }\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        String line;\n        while ((line = br.readLine()) != null) {\n            // TODO: Implement solution for Sum of All Array Elements\n            System.out.println(line);\n        }\n    }\n}\n"
      }
    ],
    "sampleTestCases": [
      {
        "input": "[1,2,3,4,5]",
        "output": "15",
        "explanation": "1 + 2 + 3 + 4 + 5 = 15."
      },
      {
        "input": "[-1,-2,3]",
        "output": "0",
        "explanation": "-1 + -2 + 3 = 0."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "[1,2,3,4,5]",
        "output": "15",
        "isHidden": true
      },
      {
        "input": "[-1,-2,3]",
        "output": "0",
        "isHidden": true
      },
      {
        "input": "[100]",
        "output": "100",
        "isHidden": true
      }
    ],
    "hints": [
      "Linear scan accumulating running total in a 64-bit integer."
    ],
    "editorial": {
      "approach": "Optimal Approach for Sum of All Array Elements",
      "solutionMarkdown": "### Optimal Solution\n\nIterate through elements adding each to an accumulator variable. Return total sum.\n\n### Complexity\n- Time: O(N), Space: O(1)",
      "timeComplexity": "O(N)",
      "spaceComplexity": "O(1)"
    },
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0
  },
  {
    "title": "Sum Root to Leaf Numbers",
    "slug": "sum-root-to-leaf-numbers",
    "description": "You are given the `root` of a binary tree containing digits from `0` to `9` only. Each root-to-leaf path represents a number. Return *the total sum of all root-to-leaf numbers*.\n\n### Example 1:\n```\nInput: [1,2,3]\nOutput: 25\nExplanation: 1->2 represents 12, 1->3 represents 13. Sum = 12 + 13 = 25.\n```\n\n### Example 2:\n```\nInput: [4,9,0,5,1]\nOutput: 1026\nExplanation: Paths: 495 + 491 + 40 = 1026.\n```",
    "difficulty": "MEDIUM",
    "category": "DSA",
    "patterns": [
      "Tree",
      "Depth-First Search",
      "Binary Tree"
    ],
    "topics": [
      "Tree",
      "Depth-First Search",
      "Binary Tree"
    ],
    "companyTags": [
      {
        "company": "Meta",
        "yearReported": 2025,
        "verified": true,
        "frequencyCount": 40,
        "sourceNote": "Reported in Meta 2021-2026 interview set"
      }
    ],
    "supportedLanguages": [
      "python",
      "javascript",
      "cpp",
      "java"
    ],
    "starterCode": [
      {
        "language": "python",
        "boilerplate": "def sumRootToLeafNumbers(*args):\n    # TODO: Implement solution for Sum Root to Leaf Numbers\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = sumRootToLeafNumbers(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(sumRootToLeafNumbers(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function sumRootToLeafNumbers(...args) {\n    // TODO: Implement solution for Sum Root to Leaf Numbers\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(sumRootToLeafNumbers(...parsed)));\n    } catch (e) {\n        console.log(sumRootToLeafNumbers(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Sum Root to Leaf Numbers\n        string line;\n        while (getline(cin, line)) {\n            cout << line << endl;\n        }\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        String line;\n        while ((line = br.readLine()) != null) {\n            // TODO: Implement solution for Sum Root to Leaf Numbers\n            System.out.println(line);\n        }\n    }\n}\n"
      }
    ],
    "sampleTestCases": [
      {
        "input": "[1,2,3]",
        "output": "25",
        "explanation": "1->2 represents 12, 1->3 represents 13. Sum = 12 + 13 = 25."
      },
      {
        "input": "[4,9,0,5,1]",
        "output": "1026",
        "explanation": "Paths: 495 + 491 + 40 = 1026."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "[1,2,3]",
        "output": "25",
        "isHidden": true
      },
      {
        "input": "[4,9,0,5,1]",
        "output": "1026",
        "isHidden": true
      },
      {
        "input": "[9]",
        "output": "9",
        "isHidden": true
      }
    ],
    "hints": [
      "Accumulate path value as curr_val * 10 + node.val. Add to total sum when reaching a leaf."
    ],
    "editorial": {
      "approach": "Optimal Approach for Sum Root to Leaf Numbers",
      "solutionMarkdown": "### Optimal Solution\n\nPre-order DFS. At leaf, return accumulated number. Sum results of left and right child recursive calls.\n\n### Complexity\n- Time: O(N), Space: O(H)",
      "timeComplexity": "O(N)",
      "spaceComplexity": "O(H)"
    },
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0
  },
  {
    "title": "Symmetric Tree",
    "slug": "symmetric-tree",
    "description": "Given the `root` of a binary tree, *check whether it is a mirror of itself* (i.e., symmetric around its center).\n\n### Example 1:\n```\nInput: [1,2,2,3,4,4,3]\nOutput: true\nExplanation: Binary tree is symmetric across center.\n```\n\n### Example 2:\n```\nInput: [1,2,2,null,3,null,3]\nOutput: false\nExplanation: Tree is asymmetric.\n```",
    "difficulty": "EASY",
    "category": "DSA",
    "patterns": [
      "Tree",
      "Depth-First Search",
      "Breadth-First Search",
      "Binary Tree"
    ],
    "topics": [
      "Tree",
      "Depth-First Search",
      "Breadth-First Search",
      "Binary Tree"
    ],
    "companyTags": [
      {
        "company": "Google",
        "yearReported": 2025,
        "verified": true,
        "frequencyCount": 50,
        "sourceNote": "Reported in Google 2021-2026 interview set"
      }
    ],
    "supportedLanguages": [
      "python",
      "javascript",
      "cpp",
      "java"
    ],
    "starterCode": [
      {
        "language": "python",
        "boilerplate": "def symmetricTree(*args):\n    # TODO: Implement solution for Symmetric Tree\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = symmetricTree(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(symmetricTree(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function symmetricTree(...args) {\n    // TODO: Implement solution for Symmetric Tree\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(symmetricTree(...parsed)));\n    } catch (e) {\n        console.log(symmetricTree(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Symmetric Tree\n        string line;\n        while (getline(cin, line)) {\n            cout << line << endl;\n        }\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        String line;\n        while ((line = br.readLine()) != null) {\n            // TODO: Implement solution for Symmetric Tree\n            System.out.println(line);\n        }\n    }\n}\n"
      }
    ],
    "sampleTestCases": [
      {
        "input": "[1,2,2,3,4,4,3]",
        "output": "true",
        "explanation": "Binary tree is symmetric across center."
      },
      {
        "input": "[1,2,2,null,3,null,3]",
        "output": "false",
        "explanation": "Tree is asymmetric."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "[1,2,2,3,4,4,3]",
        "output": "true",
        "isHidden": true
      },
      {
        "input": "[1,2,2,null,3,null,3]",
        "output": "false",
        "isHidden": true
      },
      {
        "input": "[1]",
        "output": "true",
        "isHidden": true
      }
    ],
    "hints": [
      "Compare left child of left subtree with right child of right subtree recursively."
    ],
    "editorial": {
      "approach": "Optimal Approach for Symmetric Tree",
      "solutionMarkdown": "### Optimal Solution\n\nHelper isMirror(t1, t2) checks t1.val == t2.val, isMirror(t1.left, t2.right), and isMirror(t1.right, t2.left).\n\n### Complexity\n- Time: O(N), Space: O(H)",
      "timeComplexity": "O(N)",
      "spaceComplexity": "O(H)"
    },
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0
  },
  {
    "title": "Target Sum",
    "slug": "target-sum",
    "description": "You are given an integer array `nums` and an integer `target`. Build an expression using `+` and `-` before each integer to evaluate to `target`. Return *the number of different expressions you can build*.\n\n### Example 1:\n```\nInput: [1,1,1,1,1]\n3\nOutput: 5\nExplanation: 5 ways to assign signs to reach sum 3.\n```\n\n### Example 2:\n```\nInput: [1]\n1\nOutput: 1\nExplanation: +1 = 1.\n```",
    "difficulty": "MEDIUM",
    "category": "DSA",
    "patterns": [
      "Array",
      "Dynamic Programming",
      "Backtracking"
    ],
    "topics": [
      "Array",
      "Dynamic Programming",
      "Backtracking"
    ],
    "companyTags": [
      {
        "company": "Microsoft",
        "yearReported": 2025,
        "verified": true,
        "frequencyCount": 35,
        "sourceNote": "Reported in Microsoft 2021-2026 interview set"
      }
    ],
    "supportedLanguages": [
      "python",
      "javascript",
      "cpp",
      "java"
    ],
    "starterCode": [
      {
        "language": "python",
        "boilerplate": "def targetSum(*args):\n    # TODO: Implement solution for Target Sum\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = targetSum(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(targetSum(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function targetSum(...args) {\n    // TODO: Implement solution for Target Sum\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(targetSum(...parsed)));\n    } catch (e) {\n        console.log(targetSum(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Target Sum\n        string line;\n        while (getline(cin, line)) {\n            cout << line << endl;\n        }\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        String line;\n        while ((line = br.readLine()) != null) {\n            // TODO: Implement solution for Target Sum\n            System.out.println(line);\n        }\n    }\n}\n"
      }
    ],
    "sampleTestCases": [
      {
        "input": "[1,1,1,1,1]\n3",
        "output": "5",
        "explanation": "5 ways to assign signs to reach sum 3."
      },
      {
        "input": "[1]\n1",
        "output": "1",
        "explanation": "+1 = 1."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "[1,1,1,1,1]\n3",
        "output": "5",
        "isHidden": true
      },
      {
        "input": "[1]\n1",
        "output": "1",
        "isHidden": true
      },
      {
        "input": "[1,2,3]\n0",
        "output": "2",
        "isHidden": true
      }
    ],
    "hints": [
      "Reduce to Subset Sum problem: P - N = target => 2P = target + sum(nums)."
    ],
    "editorial": {
      "approach": "Optimal Approach for Target Sum",
      "solutionMarkdown": "### Optimal Solution\n\nSubset sum DP. Target subset sum s = (sum + target) / 2. Count subsets with sum s using 1D DP.\n\n### Complexity\n- Time: O(N * Sum), Space: O(Sum)",
      "timeComplexity": "O(N * Sum)",
      "spaceComplexity": "O(Sum)"
    },
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0
  },
  {
    "title": "Task Scheduler",
    "slug": "task-scheduler",
    "description": "Given a characters array `tasks`, representing the tasks a CPU needs to do, and a non-negative integer `n` cooling time between identical tasks. Return the least number of units of times that the CPU will take to finish all the given tasks.\n\n### Example 1:\n```\nInput: [\"A\",\"A\",\"A\",\"B\",\"B\",\"B\"]\n2\nOutput: 8\nExplanation: A -> B -> idle -> A -> B -> idle -> A -> B.\n```\n\n### Example 2:\n```\nInput: [\"A\",\"A\",\"A\",\"B\",\"B\",\"B\"]\n0\nOutput: 6\nExplanation: No cooldown needed, duration is 6.\n```",
    "difficulty": "MEDIUM",
    "category": "DSA",
    "patterns": [
      "Greedy",
      "Heaps / Priority Queue",
      "Counting"
    ],
    "topics": [
      "Greedy",
      "Heaps / Priority Queue",
      "Counting"
    ],
    "companyTags": [
      {
        "company": "Apple",
        "yearReported": 2025,
        "verified": true,
        "frequencyCount": 45,
        "sourceNote": "Reported in Apple 2021-2026 interview set"
      }
    ],
    "supportedLanguages": [
      "python",
      "javascript",
      "cpp",
      "java"
    ],
    "starterCode": [
      {
        "language": "python",
        "boilerplate": "def taskScheduler(*args):\n    # TODO: Implement solution for Task Scheduler\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = taskScheduler(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(taskScheduler(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function taskScheduler(...args) {\n    // TODO: Implement solution for Task Scheduler\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(taskScheduler(...parsed)));\n    } catch (e) {\n        console.log(taskScheduler(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Task Scheduler\n        string line;\n        while (getline(cin, line)) {\n            cout << line << endl;\n        }\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        String line;\n        while ((line = br.readLine()) != null) {\n            // TODO: Implement solution for Task Scheduler\n            System.out.println(line);\n        }\n    }\n}\n"
      }
    ],
    "sampleTestCases": [
      {
        "input": "[\"A\",\"A\",\"A\",\"B\",\"B\",\"B\"]\n2",
        "output": "8",
        "explanation": "A -> B -> idle -> A -> B -> idle -> A -> B."
      },
      {
        "input": "[\"A\",\"A\",\"A\",\"B\",\"B\",\"B\"]\n0",
        "output": "6",
        "explanation": "No cooldown needed, duration is 6."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "[\"A\",\"A\",\"A\",\"B\",\"B\",\"B\"]\n2",
        "output": "8",
        "isHidden": true
      },
      {
        "input": "[\"A\",\"A\",\"A\",\"B\",\"B\",\"B\"]\n0",
        "output": "6",
        "isHidden": true
      },
      {
        "input": "[\"A\",\"A\",\"A\",\"A\",\"A\",\"A\",\"B\",\"C\",\"D\",\"E\",\"F\",\"G\"]\n2",
        "output": "16",
        "isHidden": true
      }
    ],
    "hints": [
      "Formula based on most frequent task: max_time = max(len(tasks), (max_freq - 1) * (n + 1) + count_of_max_freq)."
    ],
    "editorial": {
      "approach": "Optimal Approach for Task Scheduler",
      "solutionMarkdown": "### Optimal Solution\n\nGreedy formula: schedule most frequent task first with (max_freq - 1) chunks of size (n+1).\n\n### Complexity\n- Time: O(N), Space: O(1) 26 tasks",
      "timeComplexity": "O(N)",
      "spaceComplexity": "O(1) 26 tasks"
    },
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0
  },
  {
    "title": "Text Justification",
    "slug": "text-justification",
    "description": "Given an array of strings `words` and a width `maxWidth`, format the text such that each line has exactly `maxWidth` characters and is fully (left and right) justified.\n\n### Example 1:\n```\nInput: [\"This\",\"is\",\"an\",\"example\",\"of\",\"text\",\"justification.\"]\n16\nOutput: [\"This    is    an\",\"example  of text\",\"justification.  \"]\nExplanation: Each line padded to 16 characters. Last line is left-justified.\n```\n\n### Example 2:\n```\nInput: [\"What\",\"must\",\"be\",\"acknowledgment\",\"shall\",\"be\"]\n16\nOutput: [\"What   must   be\",\"acknowledgment  \",\"shall be        \"]\nExplanation: Evenly distributed spaces.\n```",
    "difficulty": "HARD",
    "category": "DSA",
    "patterns": [
      "Array",
      "String",
      "Simulation"
    ],
    "topics": [
      "Array",
      "String",
      "Simulation"
    ],
    "companyTags": [
      {
        "company": "Google",
        "yearReported": 2025,
        "verified": true,
        "frequencyCount": 50,
        "sourceNote": "Reported in Google 2021-2026 interview set"
      }
    ],
    "supportedLanguages": [
      "python",
      "javascript",
      "cpp",
      "java"
    ],
    "starterCode": [
      {
        "language": "python",
        "boilerplate": "def textJustification(*args):\n    # TODO: Implement solution for Text Justification\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = textJustification(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(textJustification(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function textJustification(...args) {\n    // TODO: Implement solution for Text Justification\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(textJustification(...parsed)));\n    } catch (e) {\n        console.log(textJustification(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Text Justification\n        string line;\n        while (getline(cin, line)) {\n            cout << line << endl;\n        }\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        String line;\n        while ((line = br.readLine()) != null) {\n            // TODO: Implement solution for Text Justification\n            System.out.println(line);\n        }\n    }\n}\n"
      }
    ],
    "sampleTestCases": [
      {
        "input": "[\"This\",\"is\",\"an\",\"example\",\"of\",\"text\",\"justification.\"]\n16",
        "output": "[\"This    is    an\",\"example  of text\",\"justification.  \"]",
        "explanation": "Each line padded to 16 characters. Last line is left-justified."
      },
      {
        "input": "[\"What\",\"must\",\"be\",\"acknowledgment\",\"shall\",\"be\"]\n16",
        "output": "[\"What   must   be\",\"acknowledgment  \",\"shall be        \"]",
        "explanation": "Evenly distributed spaces."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "[\"This\",\"is\",\"an\",\"example\",\"of\",\"text\",\"justification.\"]\n16",
        "output": "[\"This    is    an\",\"example  of text\",\"justification.  \"]",
        "isHidden": true
      },
      {
        "input": "[\"What\",\"must\",\"be\",\"acknowledgment\",\"shall\",\"be\"]\n16",
        "output": "[\"What   must   be\",\"acknowledgment  \",\"shall be        \"]",
        "isHidden": true
      },
      {
        "input": "[\"a\"]\n1",
        "output": "[\"a\"]",
        "isHidden": true
      }
    ],
    "hints": [
      "Pack as many words as possible per line. Distribute spaces evenly among slots, with extra spaces going to left slots."
    ],
    "editorial": {
      "approach": "Optimal Approach for Text Justification",
      "solutionMarkdown": "### Optimal Solution\n\nGreedy word selection per line. Even space distribution for normal lines; left-justify single-word or last lines.\n\n### Complexity\n- Time: O(Total Chars), Space: O(Total Chars)",
      "timeComplexity": "O(Total Chars)",
      "spaceComplexity": "O(Total Chars)"
    },
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0
  },
  {
    "title": "Find the Celebrity",
    "slug": "the-celebrity-problem",
    "description": "In a party of `n` people, a **celebrity** is someone known by everyone, but who knows nobody. Given `knows(a, b)` API, find the celebrity or return `-1`.\n\n### Example 1:\n```\nInput: [[1,1,0],[0,1,0],[1,1,1]]\nOutput: 1\nExplanation: Person 1 is known by 0 and 2, and knows neither. Celebrity = 1.\n```\n\n### Example 2:\n```\nInput: [[1,0,1],[1,1,0],[0,1,1]]\nOutput: -1\nExplanation: No celebrity exists.\n```",
    "difficulty": "MEDIUM",
    "category": "DSA",
    "patterns": [
      "Two Pointers",
      "Greedy",
      "Graph",
      "Interactive"
    ],
    "topics": [
      "Two Pointers",
      "Greedy",
      "Graph",
      "Interactive"
    ],
    "companyTags": [
      {
        "company": "Microsoft",
        "yearReported": 2025,
        "verified": true,
        "frequencyCount": 35,
        "sourceNote": "Reported in Microsoft 2021-2026 interview set"
      }
    ],
    "supportedLanguages": [
      "python",
      "javascript",
      "cpp",
      "java"
    ],
    "starterCode": [
      {
        "language": "python",
        "boilerplate": "def theCelebrityProblem(*args):\n    # TODO: Implement solution for Find the Celebrity\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = theCelebrityProblem(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(theCelebrityProblem(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function theCelebrityProblem(...args) {\n    // TODO: Implement solution for Find the Celebrity\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(theCelebrityProblem(...parsed)));\n    } catch (e) {\n        console.log(theCelebrityProblem(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Find the Celebrity\n        string line;\n        while (getline(cin, line)) {\n            cout << line << endl;\n        }\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        String line;\n        while ((line = br.readLine()) != null) {\n            // TODO: Implement solution for Find the Celebrity\n            System.out.println(line);\n        }\n    }\n}\n"
      }
    ],
    "sampleTestCases": [
      {
        "input": "[[1,1,0],[0,1,0],[1,1,1]]",
        "output": "1",
        "explanation": "Person 1 is known by 0 and 2, and knows neither. Celebrity = 1."
      },
      {
        "input": "[[1,0,1],[1,1,0],[0,1,1]]",
        "output": "-1",
        "explanation": "No celebrity exists."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "[[1,1,0],[0,1,0],[1,1,1]]",
        "output": "1",
        "isHidden": true
      },
      {
        "input": "[[1,0,1],[1,1,0],[0,1,1]]",
        "output": "-1",
        "isHidden": true
      },
      {
        "input": "[[1]]",
        "output": "0",
        "isHidden": true
      }
    ],
    "hints": [
      "Eliminate candidates with knows(a, b): if knows(a, b), a cannot be celebrity; else b cannot."
    ],
    "editorial": {
      "approach": "Optimal Approach for Find the Celebrity",
      "solutionMarkdown": "### Optimal Solution\n\nSingle pass to identify candidate: if knows(cand, i), cand = i. Verify candidate knows nobody and everyone knows candidate.\n\n### Complexity\n- Time: O(N), Space: O(1)",
      "timeComplexity": "O(N)",
      "spaceComplexity": "O(1)"
    },
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0
  },
  {
    "title": "The Skyline Problem",
    "slug": "the-skyline-problem",
    "description": "A city's skyline is the outer contour of the silhouette formed by all the buildings. Given the locations of buildings `[left, right, height]`, return *the skyline formed by these buildings collectively*.\n\n### Example 1:\n```\nInput: [[2,9,10],[3,7,15],[5,12,12],[15,20,10],[19,24,8]]\nOutput: [[2,10],[3,15],[7,12],[12,0],[15,10],[20,8],[24,0]]\nExplanation: Key contour points marking critical height changes.\n```\n\n### Example 2:\n```\nInput: [[0,2,3],[2,5,3]]\nOutput: [[0,3],[5,0]]\nExplanation: Continuous flat roof.\n```",
    "difficulty": "HARD",
    "category": "DSA",
    "patterns": [
      "Array",
      "Divide and Conquer",
      "Heap / Priority Queue",
      "Segment Tree",
      "Line Sweep"
    ],
    "topics": [
      "Array",
      "Divide and Conquer",
      "Heap / Priority Queue",
      "Segment Tree",
      "Line Sweep"
    ],
    "companyTags": [
      {
        "company": "Google",
        "yearReported": 2025,
        "verified": true,
        "frequencyCount": 50,
        "sourceNote": "Reported in Google 2021-2026 interview set"
      }
    ],
    "supportedLanguages": [
      "python",
      "javascript",
      "cpp",
      "java"
    ],
    "starterCode": [
      {
        "language": "python",
        "boilerplate": "def theSkylineProblem(*args):\n    # TODO: Implement solution for The Skyline Problem\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = theSkylineProblem(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(theSkylineProblem(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function theSkylineProblem(...args) {\n    // TODO: Implement solution for The Skyline Problem\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(theSkylineProblem(...parsed)));\n    } catch (e) {\n        console.log(theSkylineProblem(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for The Skyline Problem\n        string line;\n        while (getline(cin, line)) {\n            cout << line << endl;\n        }\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        String line;\n        while ((line = br.readLine()) != null) {\n            // TODO: Implement solution for The Skyline Problem\n            System.out.println(line);\n        }\n    }\n}\n"
      }
    ],
    "sampleTestCases": [
      {
        "input": "[[2,9,10],[3,7,15],[5,12,12],[15,20,10],[19,24,8]]",
        "output": "[[2,10],[3,15],[7,12],[12,0],[15,10],[20,8],[24,0]]",
        "explanation": "Key contour points marking critical height changes."
      },
      {
        "input": "[[0,2,3],[2,5,3]]",
        "output": "[[0,3],[5,0]]",
        "explanation": "Continuous flat roof."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "[[2,9,10],[3,7,15],[5,12,12],[15,20,10],[19,24,8]]",
        "output": "[[2,10],[3,15],[7,12],[12,0],[15,10],[20,8],[24,0]]",
        "isHidden": true
      },
      {
        "input": "[[0,2,3],[2,5,3]]",
        "output": "[[0,3],[5,0]]",
        "isHidden": true
      },
      {
        "input": "[[1,2,1]]",
        "output": "[[1,1],[2,0]]",
        "isHidden": true
      }
    ],
    "hints": [
      "Use line sweep on building start and end edges with a max-heap tracking active building heights."
    ],
    "editorial": {
      "approach": "Optimal Approach for The Skyline Problem",
      "solutionMarkdown": "### Optimal Solution\n\nSort critical points (x, -h for start, x, h for end). Max-heap tracks active heights. Record [x, max_h] when max height changes.\n\n### Complexity\n- Time: O(N log N), Space: O(N)",
      "timeComplexity": "O(N log N)",
      "spaceComplexity": "O(N)"
    },
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0
  },
  {
    "title": "Time Based Key-Value Store",
    "slug": "time-based-key-value-store",
    "description": "Design a time-based key-value data structure that can store multiple values for the same key at different time stamps and retrieve the key's value at a certain timestamp.\n\n### Example 1:\n```\nInput: [\"TimeMap\",\"set\",\"get\",\"get\",\"set\",\"get\",\"get\"]\n[[],[\"foo\",\"bar\",1],[\"foo\",1],[\"foo\",3],[\"foo\",\"bar2\",4],[\"foo\",4],[\"foo\",5]]\nOutput: [null, null, \"bar\", \"bar\", null, \"bar2\", \"bar2\"]\nExplanation: TimeMap correctly fetches closest timestamp <= target.\n```\n\n### Example 2:\n```\nInput: [\"TimeMap\",\"set\",\"get\"]\n[[],[\"love\",\"high\",10],[\"love\",5]]\nOutput: [null, null, \"\"]\nExplanation: No timestamp <= 5 exists.\n```",
    "difficulty": "MEDIUM",
    "category": "DSA",
    "patterns": [
      "Hash Table",
      "Binary Search",
      "Design"
    ],
    "topics": [
      "Hash Table",
      "Binary Search",
      "Design"
    ],
    "companyTags": [
      {
        "company": "Apple",
        "yearReported": 2025,
        "verified": true,
        "frequencyCount": 45,
        "sourceNote": "Reported in Apple 2021-2026 interview set"
      },
      {
        "company": "Meta",
        "yearReported": 2025,
        "verified": true,
        "frequencyCount": 40,
        "sourceNote": "Reported in Meta 2021-2026 interview set"
      },
      {
        "company": "Microsoft",
        "yearReported": 2025,
        "verified": true,
        "frequencyCount": 35,
        "sourceNote": "Reported in Microsoft 2021-2026 interview set"
      }
    ],
    "supportedLanguages": [
      "python",
      "javascript",
      "cpp",
      "java"
    ],
    "starterCode": [
      {
        "language": "python",
        "boilerplate": "def timeBasedKeyValueStore(*args):\n    # TODO: Implement solution for Time Based Key-Value Store\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = timeBasedKeyValueStore(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(timeBasedKeyValueStore(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function timeBasedKeyValueStore(...args) {\n    // TODO: Implement solution for Time Based Key-Value Store\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(timeBasedKeyValueStore(...parsed)));\n    } catch (e) {\n        console.log(timeBasedKeyValueStore(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Time Based Key-Value Store\n        string line;\n        while (getline(cin, line)) {\n            cout << line << endl;\n        }\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        String line;\n        while ((line = br.readLine()) != null) {\n            // TODO: Implement solution for Time Based Key-Value Store\n            System.out.println(line);\n        }\n    }\n}\n"
      }
    ],
    "sampleTestCases": [
      {
        "input": "[\"TimeMap\",\"set\",\"get\",\"get\",\"set\",\"get\",\"get\"]\n[[],[\"foo\",\"bar\",1],[\"foo\",1],[\"foo\",3],[\"foo\",\"bar2\",4],[\"foo\",4],[\"foo\",5]]",
        "output": "[null, null, \"bar\", \"bar\", null, \"bar2\", \"bar2\"]",
        "explanation": "TimeMap correctly fetches closest timestamp <= target."
      },
      {
        "input": "[\"TimeMap\",\"set\",\"get\"]\n[[],[\"love\",\"high\",10],[\"love\",5]]",
        "output": "[null, null, \"\"]",
        "explanation": "No timestamp <= 5 exists."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "[\"TimeMap\",\"set\",\"get\",\"get\",\"set\",\"get\",\"get\"]\n[[],[\"foo\",\"bar\",1],[\"foo\",1],[\"foo\",3],[\"foo\",\"bar2\",4],[\"foo\",4],[\"foo\",5]]",
        "output": "[null, null, \"bar\", \"bar\", null, \"bar2\", \"bar2\"]",
        "isHidden": true
      }
    ],
    "hints": [
      "Map key to sorted list of (timestamp, value) pairs. Use binary search (upper_bound / bisect_right) to find largest timestamp <= target."
    ],
    "editorial": {
      "approach": "Optimal Approach for Time Based Key-Value Store",
      "solutionMarkdown": "### Optimal Solution\n\nHash map storing timestamp-value vectors per key; query uses binary search.\n\n### Complexity\n- Time: set O(1), get O(log N), Space: O(N)",
      "timeComplexity": "set O(1)",
      "spaceComplexity": "get O(log N)"
    },
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0
  },
  {
    "title": "Top K Frequent Elements",
    "slug": "top-k-frequent-elements",
    "description": "Given an integer array `nums` and an integer `k`, return the `k` most frequent elements. You may return the answer in any order.\n\n### Example 1:\n```\nInput: [1,1,1,2,2,3]\n2\nOutput: [1, 2]\nExplanation: 1 appears 3 times, 2 appears 2 times.\n```\n\n### Example 2:\n```\nInput: [1]\n1\nOutput: [1]\nExplanation: Single element is most frequent.\n```",
    "difficulty": "MEDIUM",
    "category": "DSA",
    "patterns": [
      "Hash Table",
      "Heaps / Priority Queue",
      "Bucket Sort"
    ],
    "topics": [
      "Hash Table",
      "Heaps / Priority Queue",
      "Bucket Sort"
    ],
    "companyTags": [
      {
        "company": "Apple",
        "yearReported": 2025,
        "verified": true,
        "frequencyCount": 45,
        "sourceNote": "Reported in Apple 2021-2026 interview set"
      },
      {
        "company": "Meta",
        "yearReported": 2025,
        "verified": true,
        "frequencyCount": 40,
        "sourceNote": "Reported in Meta 2021-2026 interview set"
      },
      {
        "company": "Microsoft",
        "yearReported": 2025,
        "verified": true,
        "frequencyCount": 35,
        "sourceNote": "Reported in Microsoft 2021-2026 interview set"
      },
      {
        "company": "Accenture",
        "yearReported": 2025,
        "verified": false,
        "frequencyCount": 25,
        "sourceNote": "Accenture Practice Bank #11"
      }
    ],
    "supportedLanguages": [
      "python",
      "javascript",
      "cpp",
      "java"
    ],
    "starterCode": [
      {
        "language": "python",
        "boilerplate": "def topKFrequentElements(*args):\n    # TODO: Implement solution for Top K Frequent Elements\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = topKFrequentElements(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(topKFrequentElements(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function topKFrequentElements(...args) {\n    // TODO: Implement solution for Top K Frequent Elements\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(topKFrequentElements(...parsed)));\n    } catch (e) {\n        console.log(topKFrequentElements(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Top K Frequent Elements\n        string line;\n        while (getline(cin, line)) {\n            cout << line << endl;\n        }\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        String line;\n        while ((line = br.readLine()) != null) {\n            // TODO: Implement solution for Top K Frequent Elements\n            System.out.println(line);\n        }\n    }\n}\n"
      }
    ],
    "sampleTestCases": [
      {
        "input": "[1,1,1,2,2,3]\n2",
        "output": "[1, 2]",
        "explanation": "1 appears 3 times, 2 appears 2 times."
      },
      {
        "input": "[1]\n1",
        "output": "[1]",
        "explanation": "Single element is most frequent."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "[1,1,1,2,2,3]\n2",
        "output": "[1, 2]",
        "isHidden": true
      },
      {
        "input": "[1]\n1",
        "output": "[1]",
        "isHidden": true
      },
      {
        "input": "[4,1,-1,2,-1,2,3]\n2",
        "output": "[-1, 2]",
        "isHidden": true
      }
    ],
    "hints": [
      "Count frequencies with map, then use Bucket Sort or Min-Heap of size k."
    ],
    "editorial": {
      "approach": "Optimal Approach for Top K Frequent Elements",
      "solutionMarkdown": "### Optimal Solution\n\nBucket sort by frequency in O(N) or Min-Heap of size k in O(N log k).\n\n### Complexity\n- Time: O(N), Space: O(N)",
      "timeComplexity": "O(N)",
      "spaceComplexity": "O(N)"
    },
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0
  },
  {
    "title": "Transfer a Tree Between Programs (Serialize and Deserialize)",
    "slug": "transfer-a-tree-between-programs",
    "description": "Design an algorithm to serialize and deserialize a binary tree so it can be transmitted between separate programs without loss of structure.\n\n### Example 1:\n```\nInput: [1,2,3,null,null,4,5]\nOutput: [1,2,3,null,null,4,5]\nExplanation: Binary tree serialized into string representation and faithfully reconstructed.\n```\n\n### Example 2:\n```\nInput: []\nOutput: []\nExplanation: Empty tree.\n```",
    "difficulty": "HARD",
    "category": "DSA",
    "patterns": [
      "Tree",
      "Depth-First Search",
      "Breadth-First Search",
      "Design",
      "String",
      "Binary Tree"
    ],
    "topics": [
      "Tree",
      "Depth-First Search",
      "Breadth-First Search",
      "Design",
      "String",
      "Binary Tree"
    ],
    "companyTags": [
      {
        "company": "Microsoft",
        "yearReported": 2025,
        "verified": true,
        "frequencyCount": 35,
        "sourceNote": "Reported in Microsoft 2021-2026 interview set"
      }
    ],
    "supportedLanguages": [
      "python",
      "javascript",
      "cpp",
      "java"
    ],
    "starterCode": [
      {
        "language": "python",
        "boilerplate": "def transferATreeBetweenPrograms(*args):\n    # TODO: Implement solution for Transfer a Tree Between Programs (Serialize and Deserialize)\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = transferATreeBetweenPrograms(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(transferATreeBetweenPrograms(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function transferATreeBetweenPrograms(...args) {\n    // TODO: Implement solution for Transfer a Tree Between Programs (Serialize and Deserialize)\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(transferATreeBetweenPrograms(...parsed)));\n    } catch (e) {\n        console.log(transferATreeBetweenPrograms(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Transfer a Tree Between Programs (Serialize and Deserialize)\n        string line;\n        while (getline(cin, line)) {\n            cout << line << endl;\n        }\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        String line;\n        while ((line = br.readLine()) != null) {\n            // TODO: Implement solution for Transfer a Tree Between Programs (Serialize and Deserialize)\n            System.out.println(line);\n        }\n    }\n}\n"
      }
    ],
    "sampleTestCases": [
      {
        "input": "[1,2,3,null,null,4,5]",
        "output": "[1,2,3,null,null,4,5]",
        "explanation": "Binary tree serialized into string representation and faithfully reconstructed."
      },
      {
        "input": "[]",
        "output": "[]",
        "explanation": "Empty tree."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "[1,2,3,null,null,4,5]",
        "output": "[1,2,3,null,null,4,5]",
        "isHidden": true
      },
      {
        "input": "[]",
        "output": "[]",
        "isHidden": true
      },
      {
        "input": "[1]",
        "output": "[1]",
        "isHidden": true
      }
    ],
    "hints": [
      "Preorder traversal with sentinel value (e.g. '#') for null nodes uniquely specifies tree structure."
    ],
    "editorial": {
      "approach": "Optimal Approach for Transfer a Tree Between Programs (Serialize and Deserialize)",
      "solutionMarkdown": "### Optimal Solution\n\nSerialize: pre-order DFS appending 'val,' or '#,'. Deserialize: consume tokens recursively to reconstruct tree.\n\n### Complexity\n- Time: O(N), Space: O(N)",
      "timeComplexity": "O(N)",
      "spaceComplexity": "O(N)"
    },
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0
  },
  {
    "title": "Trapping Rain Water",
    "slug": "trapping-rain-water",
    "description": "Given `n` non-negative integers representing an elevation map where the width of each bar is `1`, compute how much water it can trap after raining.\n\n### Example 1:\n```\nInput: [0,1,0,2,1,0,1,3,2,1,2,1]\nOutput: 6\nExplanation: The elevation map traps 6 units of rain water.\n```\n\n### Example 2:\n```\nInput: [4,2,0,3,2,5]\nOutput: 9\nExplanation: The map traps 9 units of rain water.\n```",
    "difficulty": "HARD",
    "category": "DSA",
    "patterns": [
      "Two Pointers",
      "Monotonic Stack",
      "Dynamic Programming"
    ],
    "topics": [
      "Two Pointers",
      "Monotonic Stack",
      "Dynamic Programming"
    ],
    "companyTags": [
      {
        "company": "Apple",
        "yearReported": 2025,
        "verified": true,
        "frequencyCount": 45,
        "sourceNote": "Reported in Apple 2021-2026 interview set"
      },
      {
        "company": "Meta",
        "yearReported": 2025,
        "verified": true,
        "frequencyCount": 40,
        "sourceNote": "Reported in Meta 2021-2026 interview set"
      },
      {
        "company": "Microsoft",
        "yearReported": 2025,
        "verified": true,
        "frequencyCount": 35,
        "sourceNote": "Reported in Microsoft 2021-2026 interview set"
      },
      {
        "company": "Google",
        "yearReported": 2025,
        "verified": true,
        "frequencyCount": 50,
        "sourceNote": "Reported in Google 2021-2026 interview set"
      },
      {
        "company": "Accenture",
        "yearReported": 2025,
        "verified": false,
        "frequencyCount": 25,
        "sourceNote": "Accenture Practice Bank #43"
      }
    ],
    "supportedLanguages": [
      "python",
      "javascript",
      "cpp",
      "java"
    ],
    "starterCode": [
      {
        "language": "python",
        "boilerplate": "def trappingRainWater(*args):\n    # TODO: Implement solution for Trapping Rain Water\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = trappingRainWater(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(trappingRainWater(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function trappingRainWater(...args) {\n    // TODO: Implement solution for Trapping Rain Water\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(trappingRainWater(...parsed)));\n    } catch (e) {\n        console.log(trappingRainWater(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Trapping Rain Water\n        string line;\n        while (getline(cin, line)) {\n            cout << line << endl;\n        }\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        String line;\n        while ((line = br.readLine()) != null) {\n            // TODO: Implement solution for Trapping Rain Water\n            System.out.println(line);\n        }\n    }\n}\n"
      }
    ],
    "sampleTestCases": [
      {
        "input": "[0,1,0,2,1,0,1,3,2,1,2,1]",
        "output": "6",
        "explanation": "The elevation map traps 6 units of rain water."
      },
      {
        "input": "[4,2,0,3,2,5]",
        "output": "9",
        "explanation": "The map traps 9 units of rain water."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "[0,1,0,2,1,0,1,3,2,1,2,1]",
        "output": "6",
        "isHidden": true
      },
      {
        "input": "[4,2,0,3,2,5]",
        "output": "9",
        "isHidden": true
      },
      {
        "input": "[3,0,2,0,4]",
        "output": "7",
        "isHidden": true
      },
      {
        "input": "[1,1,1]",
        "output": "0",
        "isHidden": true
      }
    ],
    "hints": [
      "Water trapped above index i is min(maxLeft, maxRight) - height[i]. Use two pointers."
    ],
    "editorial": {
      "approach": "Optimal Approach for Trapping Rain Water",
      "solutionMarkdown": "### Optimal Solution\n\nMaintain left and right pointers with leftMax and rightMax. Process smaller side inward.\n\n### Complexity\n- Time: O(N), Space: O(1)",
      "timeComplexity": "O(N)",
      "spaceComplexity": "O(1)"
    },
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0
  },
  {
    "title": "Count Complete Tree Nodes",
    "slug": "tree-size-count-nodes",
    "description": "Given the `root` of a **complete** binary tree, return the number of the nodes in the tree in less than `O(n)` time.\n\n### Example 1:\n```\nInput: [1,2,3,4,5,6]\nOutput: 6\nExplanation: Complete binary tree with 6 nodes.\n```\n\n### Example 2:\n```\nInput: []\nOutput: 0\nExplanation: Empty tree has 0 nodes.\n```",
    "difficulty": "EASY",
    "category": "DSA",
    "patterns": [
      "Binary Search",
      "Bit Manipulation",
      "Tree",
      "Binary Tree"
    ],
    "topics": [
      "Binary Search",
      "Bit Manipulation",
      "Tree",
      "Binary Tree"
    ],
    "companyTags": [
      {
        "company": "Microsoft",
        "yearReported": 2025,
        "verified": true,
        "frequencyCount": 35,
        "sourceNote": "Reported in Microsoft 2021-2026 interview set"
      }
    ],
    "supportedLanguages": [
      "python",
      "javascript",
      "cpp",
      "java"
    ],
    "starterCode": [
      {
        "language": "python",
        "boilerplate": "def treeSizeCountNodes(*args):\n    # TODO: Implement solution for Count Complete Tree Nodes\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = treeSizeCountNodes(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(treeSizeCountNodes(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function treeSizeCountNodes(...args) {\n    // TODO: Implement solution for Count Complete Tree Nodes\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(treeSizeCountNodes(...parsed)));\n    } catch (e) {\n        console.log(treeSizeCountNodes(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Count Complete Tree Nodes\n        string line;\n        while (getline(cin, line)) {\n            cout << line << endl;\n        }\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        String line;\n        while ((line = br.readLine()) != null) {\n            // TODO: Implement solution for Count Complete Tree Nodes\n            System.out.println(line);\n        }\n    }\n}\n"
      }
    ],
    "sampleTestCases": [
      {
        "input": "[1,2,3,4,5,6]",
        "output": "6",
        "explanation": "Complete binary tree with 6 nodes."
      },
      {
        "input": "[]",
        "output": "0",
        "explanation": "Empty tree has 0 nodes."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "[1,2,3,4,5,6]",
        "output": "6",
        "isHidden": true
      },
      {
        "input": "[]",
        "output": "0",
        "isHidden": true
      },
      {
        "input": "[1]",
        "output": "1",
        "isHidden": true
      }
    ],
    "hints": [
      "Compare left depth and right depth. If equal, left subtree is full 2^d - 1 nodes; otherwise right is full."
    ],
    "editorial": {
      "approach": "Optimal Approach for Count Complete Tree Nodes",
      "solutionMarkdown": "### Optimal Solution\n\nCompute left height and right height. If equal, return 2^h - 1. Otherwise return 1 + count(left) + count(right).\n\n### Complexity\n- Time: O(log^2 N), Space: O(log N)",
      "timeComplexity": "O(log^2 N)",
      "spaceComplexity": "O(log N)"
    },
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0
  },
  {
    "title": "Two Sum",
    "slug": "two-sum",
    "description": "Given an array of integers `nums` and an integer `target`, return *indices of the two numbers such that they add up to `target`*.\n\nYou may assume that each input would have ***exactly one solution***, and you may not use the same element twice.\n\n### Example 1:\n```\nInput: [2,7,11,15]\n9\nOutput: [0, 1]\nExplanation: nums[0] + nums[1] == 9, we return [0, 1].\n```\n\n### Example 2:\n```\nInput: [3,2,4]\n6\nOutput: [1, 2]\nExplanation: nums[1] + nums[2] == 6, we return [1, 2].\n```",
    "difficulty": "EASY",
    "category": "DSA",
    "patterns": [
      "Array",
      "Hash Table",
      "Two Pointers"
    ],
    "topics": [
      "Array",
      "Hash Table",
      "Two Pointers"
    ],
    "companyTags": [
      {
        "company": "Apple",
        "yearReported": 2025,
        "verified": true,
        "frequencyCount": 45,
        "sourceNote": "Reported in Apple 2021-2026 interview set"
      },
      {
        "company": "Microsoft",
        "yearReported": 2025,
        "verified": true,
        "frequencyCount": 35,
        "sourceNote": "Reported in Microsoft 2021-2026 interview set"
      },
      {
        "company": "Google",
        "yearReported": 2025,
        "verified": true,
        "frequencyCount": 50,
        "sourceNote": "Reported in Google 2021-2026 interview set"
      },
      {
        "company": "Accenture",
        "yearReported": 2025,
        "verified": false,
        "frequencyCount": 25,
        "sourceNote": "Accenture Practice Bank #1"
      }
    ],
    "supportedLanguages": [
      "python",
      "javascript",
      "cpp",
      "java"
    ],
    "starterCode": [
      {
        "language": "python",
        "boilerplate": "def twoSum(*args):\n    # TODO: Implement solution for Two Sum\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = twoSum(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(twoSum(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function twoSum(...args) {\n    // TODO: Implement solution for Two Sum\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(twoSum(...parsed)));\n    } catch (e) {\n        console.log(twoSum(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Two Sum\n        string line;\n        while (getline(cin, line)) {\n            cout << line << endl;\n        }\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        String line;\n        while ((line = br.readLine()) != null) {\n            // TODO: Implement solution for Two Sum\n            System.out.println(line);\n        }\n    }\n}\n"
      }
    ],
    "sampleTestCases": [
      {
        "input": "[2,7,11,15]\n9",
        "output": "[0, 1]",
        "explanation": "nums[0] + nums[1] == 9, we return [0, 1]."
      },
      {
        "input": "[3,2,4]\n6",
        "output": "[1, 2]",
        "explanation": "nums[1] + nums[2] == 6, we return [1, 2]."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "[2,7,11,15]\n9",
        "output": "[0, 1]",
        "isHidden": true
      },
      {
        "input": "[3,2,4]\n6",
        "output": "[1, 2]",
        "isHidden": true
      },
      {
        "input": "[3,3]\n6",
        "output": "[0, 1]",
        "isHidden": true
      },
      {
        "input": "[-1,-2,-3,-4,-5]\n-8",
        "output": "[2, 4]",
        "isHidden": true
      }
    ],
    "hints": [
      "Can we use a Hash Map to store seen complements in O(1)?"
    ],
    "editorial": {
      "approach": "Optimal Approach for Two Sum",
      "solutionMarkdown": "### Optimal Solution\n\nStore visited elements in a map: complement = target - num. If complement in map, return indices.\n\n### Complexity\n- Time: O(N), Space: O(N)",
      "timeComplexity": "O(N)",
      "spaceComplexity": "O(N)"
    },
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0
  },
  {
    "title": "Unbounded Combinations to Target N (Combination Sum IV)",
    "slug": "unbounded-combinations-to-target-n",
    "description": "Given an array of **distinct** integers `nums` and a target integer `target`, return *the number of possible combinations that add up to* `target` (different orders count as distinct).\n\n### Example 1:\n```\nInput: [1,2,3]\n4\nOutput: 7\nExplanation: (1,1,1,1), (1,1,2), (1,2,1), (2,1,1), (1,3), (3,1), (2,2) -> 7 combinations.\n```\n\n### Example 2:\n```\nInput: [9]\n3\nOutput: 0\nExplanation: Impossible to reach 3 with [9].\n```",
    "difficulty": "MEDIUM",
    "category": "DSA",
    "patterns": [
      "Array",
      "Dynamic Programming"
    ],
    "topics": [
      "Array",
      "Dynamic Programming"
    ],
    "companyTags": [
      {
        "company": "Microsoft",
        "yearReported": 2025,
        "verified": true,
        "frequencyCount": 35,
        "sourceNote": "Reported in Microsoft 2021-2026 interview set"
      }
    ],
    "supportedLanguages": [
      "python",
      "javascript",
      "cpp",
      "java"
    ],
    "starterCode": [
      {
        "language": "python",
        "boilerplate": "def unboundedCombinationsToTargetN(*args):\n    # TODO: Implement solution for Unbounded Combinations to Target N (Combination Sum IV)\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = unboundedCombinationsToTargetN(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(unboundedCombinationsToTargetN(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function unboundedCombinationsToTargetN(...args) {\n    // TODO: Implement solution for Unbounded Combinations to Target N (Combination Sum IV)\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(unboundedCombinationsToTargetN(...parsed)));\n    } catch (e) {\n        console.log(unboundedCombinationsToTargetN(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Unbounded Combinations to Target N (Combination Sum IV)\n        string line;\n        while (getline(cin, line)) {\n            cout << line << endl;\n        }\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        String line;\n        while ((line = br.readLine()) != null) {\n            // TODO: Implement solution for Unbounded Combinations to Target N (Combination Sum IV)\n            System.out.println(line);\n        }\n    }\n}\n"
      }
    ],
    "sampleTestCases": [
      {
        "input": "[1,2,3]\n4",
        "output": "7",
        "explanation": "(1,1,1,1), (1,1,2), (1,2,1), (2,1,1), (1,3), (3,1), (2,2) -> 7 combinations."
      },
      {
        "input": "[9]\n3",
        "output": "0",
        "explanation": "Impossible to reach 3 with [9]."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "[1,2,3]\n4",
        "output": "7",
        "isHidden": true
      },
      {
        "input": "[9]\n3",
        "output": "0",
        "isHidden": true
      },
      {
        "input": "[1,2]\n3",
        "output": "3",
        "isHidden": true
      }
    ],
    "hints": [
      "dp[i] = sum(dp[i - num]) for num in nums where i >= num."
    ],
    "editorial": {
      "approach": "Optimal Approach for Unbounded Combinations to Target N (Combination Sum IV)",
      "solutionMarkdown": "### Optimal Solution\n\n1D DP array dp[i] storing count of combinations summing to i. Loop outer over sum, inner over nums.\n\n### Complexity\n- Time: O(target * len(nums)), Space: O(target)",
      "timeComplexity": "O(target * len(nums))",
      "spaceComplexity": "O(target)"
    },
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0
  },
  {
    "title": "Unique Paths",
    "slug": "unique-paths",
    "description": "There is a robot on an `m x n` grid. The robot is initially located at the top-left corner (`grid[0][0]`). The robot tries to move to the bottom-right corner (`grid[m - 1][n - 1]`). The robot can only move either down or right at any point in time.\n\nGiven the two integers `m` and `n`, return *the number of possible unique paths*.\n\n### Example 1:\n```\nInput: 3\n7\nOutput: 28\nExplanation: 28 unique paths from (0,0) to (2,6).\n```\n\n### Example 2:\n```\nInput: 3\n2\nOutput: 3\nExplanation: Right->Down->Down, Down->Down->Right, Down->Right->Down.\n```",
    "difficulty": "MEDIUM",
    "category": "DP",
    "patterns": [
      "Dynamic Programming",
      "Math",
      "Grid"
    ],
    "topics": [
      "Dynamic Programming",
      "Math",
      "Grid"
    ],
    "companyTags": [
      {
        "company": "Apple",
        "yearReported": 2025,
        "verified": true,
        "frequencyCount": 45,
        "sourceNote": "Reported in Apple 2021-2026 interview set"
      },
      {
        "company": "Meta",
        "yearReported": 2025,
        "verified": true,
        "frequencyCount": 40,
        "sourceNote": "Reported in Meta 2021-2026 interview set"
      },
      {
        "company": "Microsoft",
        "yearReported": 2025,
        "verified": true,
        "frequencyCount": 35,
        "sourceNote": "Reported in Microsoft 2021-2026 interview set"
      },
      {
        "company": "Accenture",
        "yearReported": 2025,
        "verified": false,
        "frequencyCount": 25,
        "sourceNote": "Accenture Practice Bank #95"
      }
    ],
    "supportedLanguages": [
      "python",
      "javascript",
      "cpp",
      "java"
    ],
    "starterCode": [
      {
        "language": "python",
        "boilerplate": "def uniquePaths(*args):\n    # TODO: Implement solution for Unique Paths\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = uniquePaths(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(uniquePaths(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function uniquePaths(...args) {\n    // TODO: Implement solution for Unique Paths\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(uniquePaths(...parsed)));\n    } catch (e) {\n        console.log(uniquePaths(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Unique Paths\n        string line;\n        while (getline(cin, line)) {\n            cout << line << endl;\n        }\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        String line;\n        while ((line = br.readLine()) != null) {\n            // TODO: Implement solution for Unique Paths\n            System.out.println(line);\n        }\n    }\n}\n"
      }
    ],
    "sampleTestCases": [
      {
        "input": "3\n7",
        "output": "28",
        "explanation": "28 unique paths from (0,0) to (2,6)."
      },
      {
        "input": "3\n2",
        "output": "3",
        "explanation": "Right->Down->Down, Down->Down->Right, Down->Right->Down."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "3\n7",
        "output": "28",
        "isHidden": true
      },
      {
        "input": "3\n2",
        "output": "3",
        "isHidden": true
      },
      {
        "input": "1\n1",
        "output": "1",
        "isHidden": true
      }
    ],
    "hints": [
      "dp[r][c] = dp[r-1][c] + dp[r][c-1], or combinations (m+n-2) choose (m-1)."
    ],
    "editorial": {
      "approach": "Optimal Approach for Unique Paths",
      "solutionMarkdown": "### Optimal Solution\n\n1D rolling DP row or combinatorial calculation C(m+n-2, m-1).\n\n### Complexity\n- Time: O(M * N) or O(min(M, N)), Space: O(N)",
      "timeComplexity": "O(M * N) or O(min(M",
      "spaceComplexity": "N))"
    },
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0
  },
  {
    "title": "Unique Word Abbreviation",
    "slug": "unique-word-abbreviation",
    "description": "An abbreviation of a word is `first_letter + (length - 2) + last_letter`. Given a dictionary of words, implement a class to check if a word's abbreviation is unique in the dictionary.\n\n### Example 1:\n```\nInput: [\"ValidWordAbbr\",\"isUnique\",\"isUnique\",\"isUnique\",\"isUnique\"]\n[[[\"deer\",\"door\",\"cake\",\"card\"]],[\"dear\"],[\"cart\"],[\"cane\"],[\"make\"]]\nOutput: [null,false,true,false,true]\nExplanation: \"dear\" has abbr \"d2r\" shared with \"deer\" and \"door\" -> false.\n```\n\n### Example 2:\n```\nInput: [\"ValidWordAbbr\",\"isUnique\"]\n[[[\"hello\"]],[\"hello\"]]\nOutput: [null,true]\nExplanation: Exact match to unique dictionary word -> true.\n```",
    "difficulty": "MEDIUM",
    "category": "DSA",
    "patterns": [
      "Array",
      "Hash Table",
      "String",
      "Design"
    ],
    "topics": [
      "Array",
      "Hash Table",
      "String",
      "Design"
    ],
    "companyTags": [
      {
        "company": "Google",
        "yearReported": 2025,
        "verified": true,
        "frequencyCount": 50,
        "sourceNote": "Reported in Google 2021-2026 interview set"
      }
    ],
    "supportedLanguages": [
      "python",
      "javascript",
      "cpp",
      "java"
    ],
    "starterCode": [
      {
        "language": "python",
        "boilerplate": "def uniqueWordAbbreviation(*args):\n    # TODO: Implement solution for Unique Word Abbreviation\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = uniqueWordAbbreviation(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(uniqueWordAbbreviation(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function uniqueWordAbbreviation(...args) {\n    // TODO: Implement solution for Unique Word Abbreviation\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(uniqueWordAbbreviation(...parsed)));\n    } catch (e) {\n        console.log(uniqueWordAbbreviation(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Unique Word Abbreviation\n        string line;\n        while (getline(cin, line)) {\n            cout << line << endl;\n        }\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        String line;\n        while ((line = br.readLine()) != null) {\n            // TODO: Implement solution for Unique Word Abbreviation\n            System.out.println(line);\n        }\n    }\n}\n"
      }
    ],
    "sampleTestCases": [
      {
        "input": "[\"ValidWordAbbr\",\"isUnique\",\"isUnique\",\"isUnique\",\"isUnique\"]\n[[[\"deer\",\"door\",\"cake\",\"card\"]],[\"dear\"],[\"cart\"],[\"cane\"],[\"make\"]]",
        "output": "[null,false,true,false,true]",
        "explanation": "\"dear\" has abbr \"d2r\" shared with \"deer\" and \"door\" -> false."
      },
      {
        "input": "[\"ValidWordAbbr\",\"isUnique\"]\n[[[\"hello\"]],[\"hello\"]]",
        "output": "[null,true]",
        "explanation": "Exact match to unique dictionary word -> true."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "[\"ValidWordAbbr\",\"isUnique\",\"isUnique\",\"isUnique\",\"isUnique\"]\n[[[\"deer\",\"door\",\"cake\",\"card\"]],[\"dear\"],[\"cart\"],[\"cane\"],[\"make\"]]",
        "output": "[null,false,true,false,true]",
        "isHidden": true
      },
      {
        "input": "[\"ValidWordAbbr\",\"isUnique\"]\n[[[\"hello\"]],[\"hello\"]]",
        "output": "[null,true]",
        "isHidden": true
      },
      {
        "input": "[\"ValidWordAbbr\",\"isUnique\"]\n[[[\"a\",\"a\"]],[\"a\"]]",
        "output": "[null,true]",
        "isHidden": true
      }
    ],
    "hints": [
      "Map abbreviation -> set of distinct words that produce that abbreviation."
    ],
    "editorial": {
      "approach": "Optimal Approach for Unique Word Abbreviation",
      "solutionMarkdown": "### Optimal Solution\n\nDict maps abbr -> set of words. Word is unique if abbr not in dict, or dict[abbr] == {word}.\n\n### Complexity\n- Time: O(1) query, Space: O(Total words)",
      "timeComplexity": "O(1) query",
      "spaceComplexity": "O(Total words)"
    },
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0
  },
  {
    "title": "Valid Anagram",
    "slug": "valid-anagram",
    "description": "Given two strings `s` and `t`, return `true` if `t` is an **anagram** of `s`, and `false` otherwise.\n\n### Example 1:\n```\nInput: anagram\nnagaram\nOutput: true\nExplanation: Same character frequencies.\n```\n\n### Example 2:\n```\nInput: rat\ncar\nOutput: false\nExplanation: 'r', 'a', 't' != 'c', 'a', 'r'.\n```",
    "difficulty": "EASY",
    "category": "DSA",
    "patterns": [
      "Hash Table",
      "String",
      "Sorting"
    ],
    "topics": [
      "Hash Table",
      "String",
      "Sorting"
    ],
    "companyTags": [
      {
        "company": "Apple",
        "yearReported": 2025,
        "verified": true,
        "frequencyCount": 45,
        "sourceNote": "Reported in Apple 2021-2026 interview set"
      },
      {
        "company": "Meta",
        "yearReported": 2025,
        "verified": true,
        "frequencyCount": 40,
        "sourceNote": "Reported in Meta 2021-2026 interview set"
      },
      {
        "company": "Google",
        "yearReported": 2025,
        "verified": true,
        "frequencyCount": 50,
        "sourceNote": "Reported in Google 2021-2026 interview set"
      },
      {
        "company": "Accenture",
        "yearReported": 2025,
        "verified": true,
        "frequencyCount": 40,
        "sourceNote": "Accenture Interview Question #9 (R [S7])"
      }
    ],
    "supportedLanguages": [
      "python",
      "javascript",
      "cpp",
      "java"
    ],
    "starterCode": [
      {
        "language": "python",
        "boilerplate": "def validAnagram(*args):\n    # TODO: Implement solution for Valid Anagram\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = validAnagram(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(validAnagram(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function validAnagram(...args) {\n    // TODO: Implement solution for Valid Anagram\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(validAnagram(...parsed)));\n    } catch (e) {\n        console.log(validAnagram(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Valid Anagram\n        string line;\n        while (getline(cin, line)) {\n            cout << line << endl;\n        }\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        String line;\n        while ((line = br.readLine()) != null) {\n            // TODO: Implement solution for Valid Anagram\n            System.out.println(line);\n        }\n    }\n}\n"
      }
    ],
    "sampleTestCases": [
      {
        "input": "anagram\nnagaram",
        "output": "true",
        "explanation": "Same character frequencies."
      },
      {
        "input": "rat\ncar",
        "output": "false",
        "explanation": "'r', 'a', 't' != 'c', 'a', 'r'."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "anagram\nnagaram",
        "output": "true",
        "isHidden": true
      },
      {
        "input": "rat\ncar",
        "output": "false",
        "isHidden": true
      },
      {
        "input": "a\nab",
        "output": "false",
        "isHidden": true
      }
    ],
    "hints": [
      "Count character frequencies using an array of size 26 or a hash map."
    ],
    "editorial": {
      "approach": "Optimal Approach for Valid Anagram",
      "solutionMarkdown": "### Optimal Solution\n\nCompare 26-character frequency histograms or hash maps.\n\n### Complexity\n- Time: O(N), Space: O(1) for fixed alphabet",
      "timeComplexity": "O(N)",
      "spaceComplexity": "O(1) for fixed alphabet"
    },
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0
  },
  {
    "title": "Valid Number",
    "slug": "valid-number",
    "description": "Given a string `s`, return `true` if `s` is a **valid number** (integer, decimal, or scientific notation with 'e'/'E').\n\n### Example 1:\n```\nInput: \"0\"\nOutput: true\nExplanation: Standard integer.\n```\n\n### Example 2:\n```\nInput: \"e\"\nOutput: false\nExplanation: 'e' requires mantissa and exponent digits.\n```",
    "difficulty": "HARD",
    "category": "DSA",
    "patterns": [
      "String"
    ],
    "topics": [
      "String"
    ],
    "companyTags": [
      {
        "company": "Google",
        "yearReported": 2025,
        "verified": true,
        "frequencyCount": 50,
        "sourceNote": "Reported in Google 2021-2026 interview set"
      }
    ],
    "supportedLanguages": [
      "python",
      "javascript",
      "cpp",
      "java"
    ],
    "starterCode": [
      {
        "language": "python",
        "boilerplate": "def validNumber(*args):\n    # TODO: Implement solution for Valid Number\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = validNumber(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(validNumber(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function validNumber(...args) {\n    // TODO: Implement solution for Valid Number\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(validNumber(...parsed)));\n    } catch (e) {\n        console.log(validNumber(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Valid Number\n        string line;\n        while (getline(cin, line)) {\n            cout << line << endl;\n        }\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        String line;\n        while ((line = br.readLine()) != null) {\n            // TODO: Implement solution for Valid Number\n            System.out.println(line);\n        }\n    }\n}\n"
      }
    ],
    "sampleTestCases": [
      {
        "input": "\"0\"",
        "output": "true",
        "explanation": "Standard integer."
      },
      {
        "input": "\"e\"",
        "output": "false",
        "explanation": "'e' requires mantissa and exponent digits."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "\"0\"",
        "output": "true",
        "isHidden": true
      },
      {
        "input": "\"e\"",
        "output": "false",
        "isHidden": true
      },
      {
        "input": "\"-0.1e+10\"",
        "output": "true",
        "isHidden": true
      }
    ],
    "hints": [
      "Use a Deterministic Finite Automaton (DFA) or track seen_digit, seen_dot, seen_exponent flags."
    ],
    "editorial": {
      "approach": "Optimal Approach for Valid Number",
      "solutionMarkdown": "### Optimal Solution\n\nTrack boolean flags: seen_digit, seen_dot, seen_e. Reset seen_digit after 'e' and validate character transitions.\n\n### Complexity\n- Time: O(N), Space: O(1)",
      "timeComplexity": "O(N)",
      "spaceComplexity": "O(1)"
    },
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0
  },
  {
    "title": "Valid Palindrome",
    "slug": "valid-palindrome",
    "description": "A phrase is a **palindrome** if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward.\n\n### Example 1:\n```\nInput: A man, a plan, a canal: Panama\nOutput: true\nExplanation: 'amanaplanacanalpanama' is a palindrome.\n```\n\n### Example 2:\n```\nInput: race a car\nOutput: false\nExplanation: 'raceacar' is not a palindrome.\n```",
    "difficulty": "EASY",
    "category": "DSA",
    "patterns": [
      "Two Pointers",
      "String"
    ],
    "topics": [
      "Two Pointers",
      "String"
    ],
    "companyTags": [
      {
        "company": "Apple",
        "yearReported": 2025,
        "verified": true,
        "frequencyCount": 45,
        "sourceNote": "Reported in Apple 2021-2026 interview set"
      },
      {
        "company": "Accenture",
        "yearReported": 2025,
        "verified": false,
        "frequencyCount": 25,
        "sourceNote": "Accenture Practice Bank #28"
      }
    ],
    "supportedLanguages": [
      "python",
      "javascript",
      "cpp",
      "java"
    ],
    "starterCode": [
      {
        "language": "python",
        "boilerplate": "def validPalindrome(*args):\n    # TODO: Implement solution for Valid Palindrome\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = validPalindrome(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(validPalindrome(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function validPalindrome(...args) {\n    // TODO: Implement solution for Valid Palindrome\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(validPalindrome(...parsed)));\n    } catch (e) {\n        console.log(validPalindrome(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Valid Palindrome\n        string line;\n        while (getline(cin, line)) {\n            cout << line << endl;\n        }\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        String line;\n        while ((line = br.readLine()) != null) {\n            // TODO: Implement solution for Valid Palindrome\n            System.out.println(line);\n        }\n    }\n}\n"
      }
    ],
    "sampleTestCases": [
      {
        "input": "A man, a plan, a canal: Panama",
        "output": "true",
        "explanation": "'amanaplanacanalpanama' is a palindrome."
      },
      {
        "input": "race a car",
        "output": "false",
        "explanation": "'raceacar' is not a palindrome."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "A man, a plan, a canal: Panama",
        "output": "true",
        "isHidden": true
      },
      {
        "input": "race a car",
        "output": "false",
        "isHidden": true
      },
      {
        "input": " ",
        "output": "true",
        "isHidden": true
      },
      {
        "input": "0P",
        "output": "false",
        "isHidden": true
      }
    ],
    "hints": [
      "Two pointers from left and right skipping non-alphanumeric chars."
    ],
    "editorial": {
      "approach": "Optimal Approach for Valid Palindrome",
      "solutionMarkdown": "### Optimal Solution\n\nTwo pointer inward scan skipping non-alphanumeric and comparing lowercased chars.\n\n### Complexity\n- Time: O(N), Space: O(1)",
      "timeComplexity": "O(N)",
      "spaceComplexity": "O(1)"
    },
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0
  },
  {
    "title": "Valid Palindrome II",
    "slug": "valid-palindrome-ii",
    "description": "Given a string `s`, return `true` if the `s` can be palindrome after deleting **at most one** character from it.\n\n### Example 1:\n```\nInput: \"aba\"\nOutput: true\nExplanation: Already a palindrome.\n```\n\n### Example 2:\n```\nInput: \"abca\"\nOutput: true\nExplanation: Delete 'c' to get \"aba\".\n```",
    "difficulty": "EASY",
    "category": "DSA",
    "patterns": [
      "Two Pointers",
      "String"
    ],
    "topics": [
      "Two Pointers",
      "String"
    ],
    "companyTags": [
      {
        "company": "Meta",
        "yearReported": 2025,
        "verified": true,
        "frequencyCount": 40,
        "sourceNote": "Reported in Meta 2021-2026 interview set"
      }
    ],
    "supportedLanguages": [
      "python",
      "javascript",
      "cpp",
      "java"
    ],
    "starterCode": [
      {
        "language": "python",
        "boilerplate": "def validPalindromeIi(*args):\n    # TODO: Implement solution for Valid Palindrome II\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = validPalindromeIi(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(validPalindromeIi(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function validPalindromeIi(...args) {\n    // TODO: Implement solution for Valid Palindrome II\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(validPalindromeIi(...parsed)));\n    } catch (e) {\n        console.log(validPalindromeIi(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Valid Palindrome II\n        string line;\n        while (getline(cin, line)) {\n            cout << line << endl;\n        }\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        String line;\n        while ((line = br.readLine()) != null) {\n            // TODO: Implement solution for Valid Palindrome II\n            System.out.println(line);\n        }\n    }\n}\n"
      }
    ],
    "sampleTestCases": [
      {
        "input": "\"aba\"",
        "output": "true",
        "explanation": "Already a palindrome."
      },
      {
        "input": "\"abca\"",
        "output": "true",
        "explanation": "Delete 'c' to get \"aba\"."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "\"aba\"",
        "output": "true",
        "isHidden": true
      },
      {
        "input": "\"abca\"",
        "output": "true",
        "isHidden": true
      },
      {
        "input": "\"abc\"",
        "output": "false",
        "isHidden": true
      }
    ],
    "hints": [
      "When characters mismatch at left and right, check if either s[left+1..right] or s[left..right-1] is a palindrome."
    ],
    "editorial": {
      "approach": "Optimal Approach for Valid Palindrome II",
      "solutionMarkdown": "### Optimal Solution\n\nTwo pointers. On first mismatch, test palindrome condition on s[i+1:j+1] and s[i:j].\n\n### Complexity\n- Time: O(N), Space: O(1)",
      "timeComplexity": "O(N)",
      "spaceComplexity": "O(1)"
    },
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0
  },
  {
    "title": "Valid Parentheses",
    "slug": "valid-parentheses",
    "description": "Given a string `s` containing just the characters `'('`, `')'`, `'{'`, `'}'`, `'['` and `']'`, determine if the input string is valid.\n\nAn input string is valid if open brackets are closed by the same type of brackets in the correct order.\n\n### Example 1:\n```\nInput: ()[]{}\nOutput: true\nExplanation: All brackets matched correctly.\n```\n\n### Example 2:\n```\nInput: (]\nOutput: false\nExplanation: Mismatched bracket types.\n```",
    "difficulty": "EASY",
    "category": "DSA",
    "patterns": [
      "Stack",
      "String"
    ],
    "topics": [
      "Stack",
      "String"
    ],
    "companyTags": [
      {
        "company": "Apple",
        "yearReported": 2025,
        "verified": true,
        "frequencyCount": 45,
        "sourceNote": "Reported in Apple 2021-2026 interview set"
      },
      {
        "company": "Meta",
        "yearReported": 2025,
        "verified": true,
        "frequencyCount": 40,
        "sourceNote": "Reported in Meta 2021-2026 interview set"
      },
      {
        "company": "Microsoft",
        "yearReported": 2025,
        "verified": true,
        "frequencyCount": 35,
        "sourceNote": "Reported in Microsoft 2021-2026 interview set"
      },
      {
        "company": "Google",
        "yearReported": 2025,
        "verified": true,
        "frequencyCount": 50,
        "sourceNote": "Reported in Google 2021-2026 interview set"
      },
      {
        "company": "Accenture",
        "yearReported": 2025,
        "verified": false,
        "frequencyCount": 25,
        "sourceNote": "Accenture Practice Bank #47"
      }
    ],
    "supportedLanguages": [
      "python",
      "javascript",
      "cpp",
      "java"
    ],
    "starterCode": [
      {
        "language": "python",
        "boilerplate": "def validParentheses(*args):\n    # TODO: Implement solution for Valid Parentheses\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = validParentheses(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(validParentheses(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function validParentheses(...args) {\n    // TODO: Implement solution for Valid Parentheses\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(validParentheses(...parsed)));\n    } catch (e) {\n        console.log(validParentheses(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Valid Parentheses\n        string line;\n        while (getline(cin, line)) {\n            cout << line << endl;\n        }\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        String line;\n        while ((line = br.readLine()) != null) {\n            // TODO: Implement solution for Valid Parentheses\n            System.out.println(line);\n        }\n    }\n}\n"
      }
    ],
    "sampleTestCases": [
      {
        "input": "()[]{}",
        "output": "true",
        "explanation": "All brackets matched correctly."
      },
      {
        "input": "(]",
        "output": "false",
        "explanation": "Mismatched bracket types."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "()[]{}",
        "output": "true",
        "isHidden": true
      },
      {
        "input": "(]",
        "output": "false",
        "isHidden": true
      },
      {
        "input": "([{}])",
        "output": "true",
        "isHidden": true
      },
      {
        "input": "((",
        "output": "false",
        "isHidden": true
      },
      {
        "input": "){",
        "output": "false",
        "isHidden": true
      }
    ],
    "hints": [
      "Use a LIFO Stack to match closing brackets with recent opening bracket."
    ],
    "editorial": {
      "approach": "Optimal Approach for Valid Parentheses",
      "solutionMarkdown": "### Optimal Solution\n\nPush opening brackets. On closing bracket, pop stack and check if matches.\n\n### Complexity\n- Time: O(N), Space: O(N)",
      "timeComplexity": "O(N)",
      "spaceComplexity": "O(N)"
    },
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0
  },
  {
    "title": "Valid Parenthesis String",
    "slug": "valid-parenthesis-string",
    "description": "Given a string `s` containing `'('`, `')'` and `'*'`, return `true` if `s` is **valid**. A `'*'` can be treated as `'('`, `')'` or an empty string.\n\n### Example 1:\n```\nInput: \"()\"\nOutput: true\nExplanation: Valid standard pair.\n```\n\n### Example 2:\n```\nInput: \"(*)\"\nOutput: true\nExplanation: '*' treated as empty string.\n```",
    "difficulty": "MEDIUM",
    "category": "DSA",
    "patterns": [
      "String",
      "Dynamic Programming",
      "Stack",
      "Greedy"
    ],
    "topics": [
      "String",
      "Dynamic Programming",
      "Stack",
      "Greedy"
    ],
    "companyTags": [
      {
        "company": "Microsoft",
        "yearReported": 2025,
        "verified": true,
        "frequencyCount": 35,
        "sourceNote": "Reported in Microsoft 2021-2026 interview set"
      }
    ],
    "supportedLanguages": [
      "python",
      "javascript",
      "cpp",
      "java"
    ],
    "starterCode": [
      {
        "language": "python",
        "boilerplate": "def validParenthesisString(*args):\n    # TODO: Implement solution for Valid Parenthesis String\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = validParenthesisString(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(validParenthesisString(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function validParenthesisString(...args) {\n    // TODO: Implement solution for Valid Parenthesis String\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(validParenthesisString(...parsed)));\n    } catch (e) {\n        console.log(validParenthesisString(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Valid Parenthesis String\n        string line;\n        while (getline(cin, line)) {\n            cout << line << endl;\n        }\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        String line;\n        while ((line = br.readLine()) != null) {\n            // TODO: Implement solution for Valid Parenthesis String\n            System.out.println(line);\n        }\n    }\n}\n"
      }
    ],
    "sampleTestCases": [
      {
        "input": "\"()\"",
        "output": "true",
        "explanation": "Valid standard pair."
      },
      {
        "input": "\"(*)\"",
        "output": "true",
        "explanation": "'*' treated as empty string."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "\"()\"",
        "output": "true",
        "isHidden": true
      },
      {
        "input": "\"(*)\"",
        "output": "true",
        "isHidden": true
      },
      {
        "input": "\"(*))\"",
        "output": "true",
        "isHidden": true
      }
    ],
    "hints": [
      "Track min_open and max_open possible open parentheses count."
    ],
    "editorial": {
      "approach": "Optimal Approach for Valid Parenthesis String",
      "solutionMarkdown": "### Optimal Solution\n\nGreedy range tracking: cmax increments on '(' or '*', decrements on ')'. cmin increments on '(', decrements on ')' or '*'.\n\n### Complexity\n- Time: O(N), Space: O(1)",
      "timeComplexity": "O(N)",
      "spaceComplexity": "O(1)"
    },
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0
  },
  {
    "title": "Valid String Frequency Constraint",
    "slug": "valid-string-frequency-constraint",
    "description": "Given a string `s`, determine if all characters have the same frequency, or if removing exactly one character can make all character frequencies equal.\n\n### Example 1:\n```\nInput: \"abcc\"\nOutput: true\nExplanation: Remove one 'c' so all frequencies become 1.\n```\n\n### Example 2:\n```\nInput: \"abccc\"\nOutput: false\nExplanation: Removing one character cannot equalize frequencies.\n```",
    "difficulty": "MEDIUM",
    "category": "DSA",
    "patterns": [
      "Hash Table",
      "String",
      "Counting"
    ],
    "topics": [
      "Hash Table",
      "String",
      "Counting"
    ],
    "companyTags": [
      {
        "company": "Microsoft",
        "yearReported": 2025,
        "verified": true,
        "frequencyCount": 35,
        "sourceNote": "Reported in Microsoft 2021-2026 interview set"
      }
    ],
    "supportedLanguages": [
      "python",
      "javascript",
      "cpp",
      "java"
    ],
    "starterCode": [
      {
        "language": "python",
        "boilerplate": "def validStringFrequencyConstraint(*args):\n    # TODO: Implement solution for Valid String Frequency Constraint\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = validStringFrequencyConstraint(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(validStringFrequencyConstraint(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function validStringFrequencyConstraint(...args) {\n    // TODO: Implement solution for Valid String Frequency Constraint\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(validStringFrequencyConstraint(...parsed)));\n    } catch (e) {\n        console.log(validStringFrequencyConstraint(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Valid String Frequency Constraint\n        string line;\n        while (getline(cin, line)) {\n            cout << line << endl;\n        }\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        String line;\n        while ((line = br.readLine()) != null) {\n            // TODO: Implement solution for Valid String Frequency Constraint\n            System.out.println(line);\n        }\n    }\n}\n"
      }
    ],
    "sampleTestCases": [
      {
        "input": "\"abcc\"",
        "output": "true",
        "explanation": "Remove one 'c' so all frequencies become 1."
      },
      {
        "input": "\"abccc\"",
        "output": "false",
        "explanation": "Removing one character cannot equalize frequencies."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "\"abcc\"",
        "output": "true",
        "isHidden": true
      },
      {
        "input": "\"abccc\"",
        "output": "false",
        "isHidden": true
      },
      {
        "input": "\"aabbcc\"",
        "output": "true",
        "isHidden": true
      }
    ],
    "hints": [
      "Count frequencies of characters, then count frequencies of those frequencies."
    ],
    "editorial": {
      "approach": "Optimal Approach for Valid String Frequency Constraint",
      "solutionMarkdown": "### Optimal Solution\n\nMap char frequencies to their occurrence counts. Allowable if only 1 frequency exists, or 2 frequencies where one can be reduced to match.\n\n### Complexity\n- Time: O(N), Space: O(1)",
      "timeComplexity": "O(N)",
      "spaceComplexity": "O(1)"
    },
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0
  },
  {
    "title": "Valid Sudoku",
    "slug": "valid-sudoku",
    "description": "Determine if a `9 x 9` Sudoku board is valid. Only the filled cells need to be validated according to standard Sudoku rules: each row, column, and 3x3 sub-box must contain digits 1-9 without repetition.\n\n### Example 1:\n```\nInput: [[\"5\",\"3\",\".\",\".\",\"7\",\".\",\".\",\".\",\".\"],[\"6\",\".\",\".\",\"1\",\"9\",\"5\",\".\",\".\",\".\"],[\".\",\"9\",\"8\",\".\",\".\",\".\",\".\",\"6\",\".\"],[\"8\",\".\",\".\",\".\",\"6\",\".\",\".\",\".\",\"3\"],[\"4\",\".\",\".\",\"8\",\".\",\"3\",\".\",\".\",\"1\"],[\"7\",\".\",\".\",\".\",\"2\",\".\",\".\",\".\",\"6\"],[\".\",\"6\",\".\",\".\",\".\",\".\",\"2\",\"8\",\".\"],[\".\",\".\",\".\",\"4\",\"1\",\"9\",\".\",\".\",\"5\"],[\".\",\".\",\".\",\".\",\"8\",\".\",\".\",\"7\",\"9\"]]\nOutput: true\nExplanation: Valid Sudoku configuration.\n```\n\n### Example 2:\n```\nInput: [[\"8\",\"3\",\".\",\".\",\"7\",\".\",\".\",\".\",\".\"],[\"6\",\".\",\".\",\"1\",\"9\",\"5\",\".\",\".\",\".\"],[\".\",\"9\",\"8\",\".\",\".\",\".\",\".\",\"6\",\".\"],[\"8\",\".\",\".\",\".\",\"6\",\".\",\".\",\".\",\"3\"],[\"4\",\".\",\".\",\"8\",\".\",\"3\",\".\",\".\",\"1\"],[\"7\",\".\",\".\",\".\",\"2\",\".\",\".\",\".\",\"6\"],[\".\",\"6\",\".\",\".\",\".\",\".\",\"2\",\"8\",\".\"],[\".\",\".\",\".\",\"4\",\"1\",\"9\",\".\",\".\",\"5\"],[\".\",\".\",\".\",\".\",\"8\",\".\",\".\",\"7\",\"9\"]]\nOutput: false\nExplanation: Two 8s in the first column.\n```",
    "difficulty": "MEDIUM",
    "category": "DSA",
    "patterns": [
      "Hash Table",
      "Matrix"
    ],
    "topics": [
      "Hash Table",
      "Matrix"
    ],
    "companyTags": [
      {
        "company": "Apple",
        "yearReported": 2025,
        "verified": true,
        "frequencyCount": 45,
        "sourceNote": "Reported in Apple 2021-2026 interview set"
      }
    ],
    "supportedLanguages": [
      "python",
      "javascript",
      "cpp",
      "java"
    ],
    "starterCode": [
      {
        "language": "python",
        "boilerplate": "def validSudoku(*args):\n    # TODO: Implement solution for Valid Sudoku\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = validSudoku(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(validSudoku(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function validSudoku(...args) {\n    // TODO: Implement solution for Valid Sudoku\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(validSudoku(...parsed)));\n    } catch (e) {\n        console.log(validSudoku(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Valid Sudoku\n        string line;\n        while (getline(cin, line)) {\n            cout << line << endl;\n        }\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        String line;\n        while ((line = br.readLine()) != null) {\n            // TODO: Implement solution for Valid Sudoku\n            System.out.println(line);\n        }\n    }\n}\n"
      }
    ],
    "sampleTestCases": [
      {
        "input": "[[\"5\",\"3\",\".\",\".\",\"7\",\".\",\".\",\".\",\".\"],[\"6\",\".\",\".\",\"1\",\"9\",\"5\",\".\",\".\",\".\"],[\".\",\"9\",\"8\",\".\",\".\",\".\",\".\",\"6\",\".\"],[\"8\",\".\",\".\",\".\",\"6\",\".\",\".\",\".\",\"3\"],[\"4\",\".\",\".\",\"8\",\".\",\"3\",\".\",\".\",\"1\"],[\"7\",\".\",\".\",\".\",\"2\",\".\",\".\",\".\",\"6\"],[\".\",\"6\",\".\",\".\",\".\",\".\",\"2\",\"8\",\".\"],[\".\",\".\",\".\",\"4\",\"1\",\"9\",\".\",\".\",\"5\"],[\".\",\".\",\".\",\".\",\"8\",\".\",\".\",\"7\",\"9\"]]",
        "output": "true",
        "explanation": "Valid Sudoku configuration."
      },
      {
        "input": "[[\"8\",\"3\",\".\",\".\",\"7\",\".\",\".\",\".\",\".\"],[\"6\",\".\",\".\",\"1\",\"9\",\"5\",\".\",\".\",\".\"],[\".\",\"9\",\"8\",\".\",\".\",\".\",\".\",\"6\",\".\"],[\"8\",\".\",\".\",\".\",\"6\",\".\",\".\",\".\",\"3\"],[\"4\",\".\",\".\",\"8\",\".\",\"3\",\".\",\".\",\"1\"],[\"7\",\".\",\".\",\".\",\"2\",\".\",\".\",\".\",\"6\"],[\".\",\"6\",\".\",\".\",\".\",\".\",\"2\",\"8\",\".\"],[\".\",\".\",\".\",\"4\",\"1\",\"9\",\".\",\".\",\"5\"],[\".\",\".\",\".\",\".\",\"8\",\".\",\".\",\"7\",\"9\"]]",
        "output": "false",
        "explanation": "Two 8s in the first column."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "[[\"5\",\"3\",\".\",\".\",\"7\",\".\",\".\",\".\",\".\"],[\"6\",\".\",\".\",\"1\",\"9\",\"5\",\".\",\".\",\".\"],[\".\",\"9\",\"8\",\".\",\".\",\".\",\".\",\"6\",\".\"],[\"8\",\".\",\".\",\".\",\"6\",\".\",\".\",\".\",\"3\"],[\"4\",\".\",\".\",\"8\",\".\",\"3\",\".\",\".\",\"1\"],[\"7\",\".\",\".\",\".\",\"2\",\".\",\".\",\".\",\"6\"],[\".\",\"6\",\".\",\".\",\".\",\".\",\"2\",\"8\",\".\"],[\".\",\".\",\".\",\"4\",\"1\",\"9\",\".\",\".\",\"5\"],[\".\",\".\",\".\",\".\",\"8\",\".\",\".\",\"7\",\"9\"]]",
        "output": "true",
        "isHidden": true
      }
    ],
    "hints": [
      "Use sets for rows, cols, and 3x3 blocks indexed by (r//3, c//3)."
    ],
    "editorial": {
      "approach": "Optimal Approach for Valid Sudoku",
      "solutionMarkdown": "### Optimal Solution\n\nTrack seen digits using 9 row sets, 9 col sets, and 9 box sets.\n\n### Complexity\n- Time: O(1) for fixed 9x9 board, Space: O(1)",
      "timeComplexity": "O(1) for fixed 9x9 board",
      "spaceComplexity": "O(1)"
    },
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0
  },
  {
    "title": "Valid Word Abbreviation",
    "slug": "valid-word-abbreviation",
    "description": "Given a non-empty string `word` and an abbreviation `abbr`, return whether the string matches the given abbreviation (digits denote skipped character counts without leading zeros).\n\n### Example 1:\n```\nInput: \"internationalization\"\n\"i12iz4n\"\nOutput: true\nExplanation: 'i' + 12 skipped chars + 'iz' + 4 skipped chars + 'n' matches exactly.\n```\n\n### Example 2:\n```\nInput: \"apple\"\n\"a2e\"\nOutput: false\nExplanation: \"a2e\" matches 'a' + 2 skipped + 'e' length 4, but apple is 5 chars.\n```",
    "difficulty": "EASY",
    "category": "DSA",
    "patterns": [
      "Two Pointers",
      "String"
    ],
    "topics": [
      "Two Pointers",
      "String"
    ],
    "companyTags": [
      {
        "company": "Meta",
        "yearReported": 2025,
        "verified": true,
        "frequencyCount": 40,
        "sourceNote": "Reported in Meta 2021-2026 interview set"
      }
    ],
    "supportedLanguages": [
      "python",
      "javascript",
      "cpp",
      "java"
    ],
    "starterCode": [
      {
        "language": "python",
        "boilerplate": "def validWordAbbreviation(*args):\n    # TODO: Implement solution for Valid Word Abbreviation\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = validWordAbbreviation(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(validWordAbbreviation(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function validWordAbbreviation(...args) {\n    // TODO: Implement solution for Valid Word Abbreviation\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(validWordAbbreviation(...parsed)));\n    } catch (e) {\n        console.log(validWordAbbreviation(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Valid Word Abbreviation\n        string line;\n        while (getline(cin, line)) {\n            cout << line << endl;\n        }\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        String line;\n        while ((line = br.readLine()) != null) {\n            // TODO: Implement solution for Valid Word Abbreviation\n            System.out.println(line);\n        }\n    }\n}\n"
      }
    ],
    "sampleTestCases": [
      {
        "input": "\"internationalization\"\n\"i12iz4n\"",
        "output": "true",
        "explanation": "'i' + 12 skipped chars + 'iz' + 4 skipped chars + 'n' matches exactly."
      },
      {
        "input": "\"apple\"\n\"a2e\"",
        "output": "false",
        "explanation": "\"a2e\" matches 'a' + 2 skipped + 'e' length 4, but apple is 5 chars."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "\"internationalization\"\n\"i12iz4n\"",
        "output": "true",
        "isHidden": true
      },
      {
        "input": "\"apple\"\n\"a2e\"",
        "output": "false",
        "isHidden": true
      },
      {
        "input": "\"a\"\n\"2\"",
        "output": "false",
        "isHidden": true
      }
    ],
    "hints": [
      "Use two pointers. Parse numbers carefully; leading zero like '01' is invalid."
    ],
    "editorial": {
      "approach": "Optimal Approach for Valid Word Abbreviation",
      "solutionMarkdown": "### Optimal Solution\n\nTwo pointers i on word, j on abbr. If abbr[j] is digit, parse full integer (check no leading zero) and advance i by parsed number.\n\n### Complexity\n- Time: O(N), Space: O(1)",
      "timeComplexity": "O(N)",
      "spaceComplexity": "O(1)"
    },
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0
  },
  {
    "title": "Validate Binary Search Tree",
    "slug": "validate-binary-search-tree",
    "description": "Given the `root` of a binary tree, *determine if it is a valid binary search tree (BST)*.\n\n### Example 1:\n```\nInput: [2,1,3]\nOutput: true\nExplanation: Left child 1 < 2 < right child 3.\n```\n\n### Example 2:\n```\nInput: [5,1,4,null,null,3,6]\nOutput: false\nExplanation: The root node's value is 5 but its right child's value is 4.\n```",
    "difficulty": "MEDIUM",
    "category": "DSA",
    "patterns": [
      "Tree",
      "Binary Search",
      "BFS / DFS"
    ],
    "topics": [
      "Tree",
      "Binary Search",
      "BFS / DFS"
    ],
    "companyTags": [
      {
        "company": "Apple",
        "yearReported": 2025,
        "verified": true,
        "frequencyCount": 45,
        "sourceNote": "Reported in Apple 2021-2026 interview set"
      },
      {
        "company": "Meta",
        "yearReported": 2025,
        "verified": true,
        "frequencyCount": 40,
        "sourceNote": "Reported in Meta 2021-2026 interview set"
      },
      {
        "company": "Accenture",
        "yearReported": 2025,
        "verified": false,
        "frequencyCount": 25,
        "sourceNote": "Accenture Practice Bank #99"
      }
    ],
    "supportedLanguages": [
      "python",
      "javascript",
      "cpp",
      "java"
    ],
    "starterCode": [
      {
        "language": "python",
        "boilerplate": "def validateBinarySearchTree(*args):\n    # TODO: Implement solution for Validate Binary Search Tree\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = validateBinarySearchTree(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(validateBinarySearchTree(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function validateBinarySearchTree(...args) {\n    // TODO: Implement solution for Validate Binary Search Tree\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(validateBinarySearchTree(...parsed)));\n    } catch (e) {\n        console.log(validateBinarySearchTree(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Validate Binary Search Tree\n        string line;\n        while (getline(cin, line)) {\n            cout << line << endl;\n        }\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        String line;\n        while ((line = br.readLine()) != null) {\n            // TODO: Implement solution for Validate Binary Search Tree\n            System.out.println(line);\n        }\n    }\n}\n"
      }
    ],
    "sampleTestCases": [
      {
        "input": "[2,1,3]",
        "output": "true",
        "explanation": "Left child 1 < 2 < right child 3."
      },
      {
        "input": "[5,1,4,null,null,3,6]",
        "output": "false",
        "explanation": "The root node's value is 5 but its right child's value is 4."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "[2,1,3]",
        "output": "true",
        "isHidden": true
      },
      {
        "input": "[5,1,4,null,null,3,6]",
        "output": "false",
        "isHidden": true
      },
      {
        "input": "[2,2,2]",
        "output": "false",
        "isHidden": true
      }
    ],
    "hints": [
      "Pass down valid range (minVal, maxVal) recursively, or verify that Inorder traversal is strictly increasing."
    ],
    "editorial": {
      "approach": "Optimal Approach for Validate Binary Search Tree",
      "solutionMarkdown": "### Optimal Solution\n\nRecursively check low < node.val < high, updating bounds for left and right subtrees.\n\n### Complexity\n- Time: O(N), Space: O(H) where H is tree height",
      "timeComplexity": "O(N)",
      "spaceComplexity": "O(H) where H is tree height"
    },
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0
  },
  {
    "title": "Walls and Gates",
    "slug": "walls-and-gates",
    "description": "You are given an `m x n` grid initialized with `-1` (wall), `0` (gate), and `INF` (empty room). Fill each empty room with the distance to its nearest gate.\n\n### Example 1:\n```\nInput: [[2147483647,-1,0,2147483647],[2147483647,2147483647,2147483647,-1],[2147483647,-1,2147483647,-1],[0,-1,2147483647,2147483647]]\nOutput: [[3,-1,0,1],[2,2,1,-1],[1,-1,2,-1],[0,-1,3,4]]\nExplanation: Distances to nearest gates computed.\n```\n\n### Example 2:\n```\nInput: [[0,-1],[2147483647,2147483647]]\nOutput: [[0,-1],[1,2]]\nExplanation: Rooms filled with shortest gate distance.\n```",
    "difficulty": "MEDIUM",
    "category": "DSA",
    "patterns": [
      "Array",
      "Breadth-First Search",
      "Matrix"
    ],
    "topics": [
      "Array",
      "Breadth-First Search",
      "Matrix"
    ],
    "companyTags": [
      {
        "company": "Google",
        "yearReported": 2025,
        "verified": true,
        "frequencyCount": 50,
        "sourceNote": "Reported in Google 2021-2026 interview set"
      }
    ],
    "supportedLanguages": [
      "python",
      "javascript",
      "cpp",
      "java"
    ],
    "starterCode": [
      {
        "language": "python",
        "boilerplate": "def wallsAndGates(*args):\n    # TODO: Implement solution for Walls and Gates\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = wallsAndGates(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(wallsAndGates(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function wallsAndGates(...args) {\n    // TODO: Implement solution for Walls and Gates\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(wallsAndGates(...parsed)));\n    } catch (e) {\n        console.log(wallsAndGates(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Walls and Gates\n        string line;\n        while (getline(cin, line)) {\n            cout << line << endl;\n        }\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        String line;\n        while ((line = br.readLine()) != null) {\n            // TODO: Implement solution for Walls and Gates\n            System.out.println(line);\n        }\n    }\n}\n"
      }
    ],
    "sampleTestCases": [
      {
        "input": "[[2147483647,-1,0,2147483647],[2147483647,2147483647,2147483647,-1],[2147483647,-1,2147483647,-1],[0,-1,2147483647,2147483647]]",
        "output": "[[3,-1,0,1],[2,2,1,-1],[1,-1,2,-1],[0,-1,3,4]]",
        "explanation": "Distances to nearest gates computed."
      },
      {
        "input": "[[0,-1],[2147483647,2147483647]]",
        "output": "[[0,-1],[1,2]]",
        "explanation": "Rooms filled with shortest gate distance."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "[[2147483647,-1,0,2147483647],[2147483647,2147483647,2147483647,-1],[2147483647,-1,2147483647,-1],[0,-1,2147483647,2147483647]]",
        "output": "[[3,-1,0,1],[2,2,1,-1],[1,-1,2,-1],[0,-1,3,4]]",
        "isHidden": true
      },
      {
        "input": "[[0,-1],[2147483647,2147483647]]",
        "output": "[[0,-1],[1,2]]",
        "isHidden": true
      },
      {
        "input": "[[0]]",
        "output": "[[0]]",
        "isHidden": true
      }
    ],
    "hints": [
      "Multi-source BFS starting simultaneously from all gates (cells with value 0)."
    ],
    "editorial": {
      "approach": "Optimal Approach for Walls and Gates",
      "solutionMarkdown": "### Optimal Solution\n\nPush all gate coordinates into BFS queue. For each room reached with dist + 1, set value and enqueue.\n\n### Complexity\n- Time: O(M * N), Space: O(M * N)",
      "timeComplexity": "O(M * N)",
      "spaceComplexity": "O(M * N)"
    },
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0
  },
  {
    "title": "Wiggle Sort",
    "slug": "wiggle-sort",
    "description": "Given an integer array `nums`, reorder it such that `nums[0] <= nums[1] >= nums[2] <= nums[3]...` in-place.\n\n### Example 1:\n```\nInput: [3,5,2,1,6,4]\nOutput: [3,5,1,6,2,4]\nExplanation: One possible wiggle sorted array.\n```\n\n### Example 2:\n```\nInput: [1,2,3,4]\nOutput: [1,3,2,4]\nExplanation: 1 <= 3 >= 2 <= 4.\n```",
    "difficulty": "MEDIUM",
    "category": "DSA",
    "patterns": [
      "Array",
      "Greedy",
      "Sorting"
    ],
    "topics": [
      "Array",
      "Greedy",
      "Sorting"
    ],
    "companyTags": [
      {
        "company": "Google",
        "yearReported": 2025,
        "verified": true,
        "frequencyCount": 50,
        "sourceNote": "Reported in Google 2021-2026 interview set"
      }
    ],
    "supportedLanguages": [
      "python",
      "javascript",
      "cpp",
      "java"
    ],
    "starterCode": [
      {
        "language": "python",
        "boilerplate": "def wiggleSort(*args):\n    # TODO: Implement solution for Wiggle Sort\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = wiggleSort(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(wiggleSort(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function wiggleSort(...args) {\n    // TODO: Implement solution for Wiggle Sort\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(wiggleSort(...parsed)));\n    } catch (e) {\n        console.log(wiggleSort(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Wiggle Sort\n        string line;\n        while (getline(cin, line)) {\n            cout << line << endl;\n        }\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        String line;\n        while ((line = br.readLine()) != null) {\n            // TODO: Implement solution for Wiggle Sort\n            System.out.println(line);\n        }\n    }\n}\n"
      }
    ],
    "sampleTestCases": [
      {
        "input": "[3,5,2,1,6,4]",
        "output": "[3,5,1,6,2,4]",
        "explanation": "One possible wiggle sorted array."
      },
      {
        "input": "[1,2,3,4]",
        "output": "[1,3,2,4]",
        "explanation": "1 <= 3 >= 2 <= 4."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "[3,5,2,1,6,4]",
        "output": "[3,5,1,6,2,4]",
        "isHidden": true
      },
      {
        "input": "[1,2,3,4]",
        "output": "[1,3,2,4]",
        "isHidden": true
      },
      {
        "input": "[1]",
        "output": "[1]",
        "isHidden": true
      }
    ],
    "hints": [
      "Single pass: if i is odd, nums[i] >= nums[i-1]; if even, nums[i] <= nums[i-1]. Swap if violated."
    ],
    "editorial": {
      "approach": "Optimal Approach for Wiggle Sort",
      "solutionMarkdown": "### Optimal Solution\n\nSingle linear pass. Whenever parity rule is violated, swap nums[i] with nums[i-1].\n\n### Complexity\n- Time: O(N), Space: O(1)",
      "timeComplexity": "O(N)",
      "spaceComplexity": "O(1)"
    },
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0
  },
  {
    "title": "Wildcard Matching",
    "slug": "wildcard-matching",
    "description": "Given an input string `s` and a pattern `p`, implement wildcard pattern matching with support for `'?'` (matches any single character) and `'*'` (matches any sequence of characters, including empty).\n\n### Example 1:\n```\nInput: \"aa\"\n\"a\"\nOutput: false\nExplanation: \"a\" does not match entire \"aa\".\n```\n\n### Example 2:\n```\nInput: \"aa\"\n\"*\"\nOutput: true\nExplanation: '*' matches any sequence.\n```",
    "difficulty": "HARD",
    "category": "DSA",
    "patterns": [
      "String",
      "Dynamic Programming",
      "Greedy",
      "Recursion"
    ],
    "topics": [
      "String",
      "Dynamic Programming",
      "Greedy",
      "Recursion"
    ],
    "companyTags": [
      {
        "company": "Google",
        "yearReported": 2025,
        "verified": true,
        "frequencyCount": 50,
        "sourceNote": "Reported in Google 2021-2026 interview set"
      }
    ],
    "supportedLanguages": [
      "python",
      "javascript",
      "cpp",
      "java"
    ],
    "starterCode": [
      {
        "language": "python",
        "boilerplate": "def wildcardMatching(*args):\n    # TODO: Implement solution for Wildcard Matching\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = wildcardMatching(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(wildcardMatching(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function wildcardMatching(...args) {\n    // TODO: Implement solution for Wildcard Matching\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(wildcardMatching(...parsed)));\n    } catch (e) {\n        console.log(wildcardMatching(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Wildcard Matching\n        string line;\n        while (getline(cin, line)) {\n            cout << line << endl;\n        }\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        String line;\n        while ((line = br.readLine()) != null) {\n            // TODO: Implement solution for Wildcard Matching\n            System.out.println(line);\n        }\n    }\n}\n"
      }
    ],
    "sampleTestCases": [
      {
        "input": "\"aa\"\n\"a\"",
        "output": "false",
        "explanation": "\"a\" does not match entire \"aa\"."
      },
      {
        "input": "\"aa\"\n\"*\"",
        "output": "true",
        "explanation": "'*' matches any sequence."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "\"aa\"\n\"a\"",
        "output": "false",
        "isHidden": true
      },
      {
        "input": "\"aa\"\n\"*\"",
        "output": "true",
        "isHidden": true
      },
      {
        "input": "\"cb\"\n\"?a\"",
        "output": "false",
        "isHidden": true
      }
    ],
    "hints": [
      "2D DP or two-pointer greedy with star index rollback."
    ],
    "editorial": {
      "approach": "Optimal Approach for Wildcard Matching",
      "solutionMarkdown": "### Optimal Solution\n\nTwo-pointer approach. When encountering '*', record star index and current s pointer; rollback on mismatch.\n\n### Complexity\n- Time: O(M * N), Space: O(1)",
      "timeComplexity": "O(M * N)",
      "spaceComplexity": "O(1)"
    },
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0
  },
  {
    "title": "Word Break",
    "slug": "word-break",
    "description": "Given a string `s` and a dictionary of strings `wordDict`, return `true` if `s` can be segmented into a space-separated sequence of one or more dictionary words.\n\n### Example 1:\n```\nInput: leetcode\n[\"leet\",\"code\"]\nOutput: true\nExplanation: 'leetcode' can be segmented as 'leet code'.\n```\n\n### Example 2:\n```\nInput: applepenapple\n[\"apple\",\"pen\"]\nOutput: true\nExplanation: 'apple pen apple'.\n```",
    "difficulty": "MEDIUM",
    "category": "DP",
    "patterns": [
      "Dynamic Programming",
      "Hash Table",
      "Trie"
    ],
    "topics": [
      "Dynamic Programming",
      "Hash Table",
      "Trie"
    ],
    "companyTags": [
      {
        "company": "Apple",
        "yearReported": 2025,
        "verified": true,
        "frequencyCount": 45,
        "sourceNote": "Reported in Apple 2021-2026 interview set"
      },
      {
        "company": "Meta",
        "yearReported": 2025,
        "verified": true,
        "frequencyCount": 40,
        "sourceNote": "Reported in Meta 2021-2026 interview set"
      },
      {
        "company": "Accenture",
        "yearReported": 2025,
        "verified": false,
        "frequencyCount": 25,
        "sourceNote": "Accenture Practice Bank #91"
      }
    ],
    "supportedLanguages": [
      "python",
      "javascript",
      "cpp",
      "java"
    ],
    "starterCode": [
      {
        "language": "python",
        "boilerplate": "def wordBreak(*args):\n    # TODO: Implement solution for Word Break\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = wordBreak(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(wordBreak(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function wordBreak(...args) {\n    // TODO: Implement solution for Word Break\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(wordBreak(...parsed)));\n    } catch (e) {\n        console.log(wordBreak(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Word Break\n        string line;\n        while (getline(cin, line)) {\n            cout << line << endl;\n        }\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        String line;\n        while ((line = br.readLine()) != null) {\n            // TODO: Implement solution for Word Break\n            System.out.println(line);\n        }\n    }\n}\n"
      }
    ],
    "sampleTestCases": [
      {
        "input": "leetcode\n[\"leet\",\"code\"]",
        "output": "true",
        "explanation": "'leetcode' can be segmented as 'leet code'."
      },
      {
        "input": "applepenapple\n[\"apple\",\"pen\"]",
        "output": "true",
        "explanation": "'apple pen apple'."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "leetcode\n[\"leet\",\"code\"]",
        "output": "true",
        "isHidden": true
      },
      {
        "input": "applepenapple\n[\"apple\",\"pen\"]",
        "output": "true",
        "isHidden": true
      },
      {
        "input": "catsandog\n[\"cats\",\"dog\",\"sand\",\"and\",\"cat\"]",
        "output": "false",
        "isHidden": true
      }
    ],
    "hints": [
      "dp[i] = true if dp[j] == true and s[j:i] in wordDict."
    ],
    "editorial": {
      "approach": "Optimal Approach for Word Break",
      "solutionMarkdown": "### Optimal Solution\n\n1D DP array of size n+1. dp[0] = true. Check valid prefix splits.\n\n### Complexity\n- Time: O(N^2 * K) or O(N^3), Space: O(N)",
      "timeComplexity": "O(N^2 * K) or O(N^3)",
      "spaceComplexity": "O(N)"
    },
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0
  },
  {
    "title": "Word Ladder",
    "slug": "word-ladder",
    "description": "A transformation sequence from word `beginWord` to word `endWord` using a dictionary `wordList` is a sequence of words `beginWord -> s1 -> s2 -> ... -> sk` such that each adjacent pair differs by a single letter.\n\nReturn *the number of words in the shortest transformation sequence*, or `0` if no such sequence exists.\n\n### Example 1:\n```\nInput: hit\ncog\n[\"hot\",\"dot\",\"dog\",\"lot\",\"log\",\"cog\"]\nOutput: 5\nExplanation: hit -> hot -> dot -> dog -> cog (5 words).\n```\n\n### Example 2:\n```\nInput: hit\ncog\n[\"hot\",\"dot\",\"dog\",\"lot\",\"log\"]\nOutput: 0\nExplanation: endWord 'cog' is not in wordList.\n```",
    "difficulty": "HARD",
    "category": "DSA",
    "patterns": [
      "Graph",
      "BFS / DFS",
      "Hash Table"
    ],
    "topics": [
      "Graph",
      "BFS / DFS",
      "Hash Table"
    ],
    "companyTags": [
      {
        "company": "Apple",
        "yearReported": 2025,
        "verified": true,
        "frequencyCount": 45,
        "sourceNote": "Reported in Apple 2021-2026 interview set"
      },
      {
        "company": "Meta",
        "yearReported": 2025,
        "verified": true,
        "frequencyCount": 40,
        "sourceNote": "Reported in Meta 2021-2026 interview set"
      },
      {
        "company": "Microsoft",
        "yearReported": 2025,
        "verified": true,
        "frequencyCount": 35,
        "sourceNote": "Reported in Microsoft 2021-2026 interview set"
      }
    ],
    "supportedLanguages": [
      "python",
      "javascript",
      "cpp",
      "java"
    ],
    "starterCode": [
      {
        "language": "python",
        "boilerplate": "def wordLadder(*args):\n    # TODO: Implement solution for Word Ladder\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = wordLadder(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(wordLadder(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function wordLadder(...args) {\n    // TODO: Implement solution for Word Ladder\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(wordLadder(...parsed)));\n    } catch (e) {\n        console.log(wordLadder(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Word Ladder\n        string line;\n        while (getline(cin, line)) {\n            cout << line << endl;\n        }\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        String line;\n        while ((line = br.readLine()) != null) {\n            // TODO: Implement solution for Word Ladder\n            System.out.println(line);\n        }\n    }\n}\n"
      }
    ],
    "sampleTestCases": [
      {
        "input": "hit\ncog\n[\"hot\",\"dot\",\"dog\",\"lot\",\"log\",\"cog\"]",
        "output": "5",
        "explanation": "hit -> hot -> dot -> dog -> cog (5 words)."
      },
      {
        "input": "hit\ncog\n[\"hot\",\"dot\",\"dog\",\"lot\",\"log\"]",
        "output": "0",
        "explanation": "endWord 'cog' is not in wordList."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "hit\ncog\n[\"hot\",\"dot\",\"dog\",\"lot\",\"log\",\"cog\"]",
        "output": "5",
        "isHidden": true
      },
      {
        "input": "hit\ncog\n[\"hot\",\"dot\",\"dog\",\"lot\",\"log\"]",
        "output": "0",
        "isHidden": true
      }
    ],
    "hints": [
      "Bidirectional BFS or BFS with wildcard intermediate states like 'h*t'."
    ],
    "editorial": {
      "approach": "Optimal Approach for Word Ladder",
      "solutionMarkdown": "### Optimal Solution\n\nBFS shortest path on word graph. Intermediate generic patterns optimize neighbor generation.\n\n### Complexity\n- Time: O(M^2 * N) where M is word length and N is dictionary size, Space: O(M * N)",
      "timeComplexity": "O(M^2 * N) where M is word length and N is dictionary size",
      "spaceComplexity": "O(M * N)"
    },
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0
  },
  {
    "title": "Word Ladder II",
    "slug": "word-ladder-ii",
    "description": "A **transformation sequence** from `beginWord` to `endWord` using a dictionary `wordList` is a sequence of words where each differs by one letter. Return *all the **shortest transformation sequences***.\n\n### Example 1:\n```\nInput: \"hit\"\n\"cog\"\n[\"hot\",\"dot\",\"dog\",\"lot\",\"log\",\"cog\"]\nOutput: [[\"hit\",\"hot\",\"dot\",\"dog\",\"cog\"],[\"hit\",\"hot\",\"lot\",\"log\",\"cog\"]]\nExplanation: Two shortest transformation sequences of length 5.\n```\n\n### Example 2:\n```\nInput: \"hit\"\n\"cog\"\n[\"hot\",\"dot\",\"dog\",\"lot\",\"log\"]\nOutput: []\nExplanation: \"cog\" is not in wordList.\n```",
    "difficulty": "HARD",
    "category": "DSA",
    "patterns": [
      "Hash Table",
      "String",
      "Backtracking",
      "Breadth-First Search"
    ],
    "topics": [
      "Hash Table",
      "String",
      "Backtracking",
      "Breadth-First Search"
    ],
    "companyTags": [
      {
        "company": "Microsoft",
        "yearReported": 2025,
        "verified": true,
        "frequencyCount": 35,
        "sourceNote": "Reported in Microsoft 2021-2026 interview set"
      }
    ],
    "supportedLanguages": [
      "python",
      "javascript",
      "cpp",
      "java"
    ],
    "starterCode": [
      {
        "language": "python",
        "boilerplate": "def wordLadderIi(*args):\n    # TODO: Implement solution for Word Ladder II\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = wordLadderIi(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(wordLadderIi(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function wordLadderIi(...args) {\n    // TODO: Implement solution for Word Ladder II\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(wordLadderIi(...parsed)));\n    } catch (e) {\n        console.log(wordLadderIi(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Word Ladder II\n        string line;\n        while (getline(cin, line)) {\n            cout << line << endl;\n        }\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        String line;\n        while ((line = br.readLine()) != null) {\n            // TODO: Implement solution for Word Ladder II\n            System.out.println(line);\n        }\n    }\n}\n"
      }
    ],
    "sampleTestCases": [
      {
        "input": "\"hit\"\n\"cog\"\n[\"hot\",\"dot\",\"dog\",\"lot\",\"log\",\"cog\"]",
        "output": "[[\"hit\",\"hot\",\"dot\",\"dog\",\"cog\"],[\"hit\",\"hot\",\"lot\",\"log\",\"cog\"]]",
        "explanation": "Two shortest transformation sequences of length 5."
      },
      {
        "input": "\"hit\"\n\"cog\"\n[\"hot\",\"dot\",\"dog\",\"lot\",\"log\"]",
        "output": "[]",
        "explanation": "\"cog\" is not in wordList."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "\"hit\"\n\"cog\"\n[\"hot\",\"dot\",\"dog\",\"lot\",\"log\",\"cog\"]",
        "output": "[[\"hit\",\"hot\",\"dot\",\"dog\",\"cog\"],[\"hit\",\"hot\",\"lot\",\"log\",\"cog\"]]",
        "isHidden": true
      },
      {
        "input": "\"hit\"\n\"cog\"\n[\"hot\",\"dot\",\"dog\",\"lot\",\"log\"]",
        "output": "[]",
        "isHidden": true
      },
      {
        "input": "\"a\"\n\"c\"\n[\"a\",\"b\",\"c\"]",
        "output": "[[\"a\",\"c\"]]",
        "isHidden": true
      }
    ],
    "hints": [
      "BFS to build shortest-path DAG of predecessors, then DFS/backtracking to reconstruct paths."
    ],
    "editorial": {
      "approach": "Optimal Approach for Word Ladder II",
      "solutionMarkdown": "### Optimal Solution\n\nBFS level-by-level tracking predecessor map for each word at distance d. DFS backtrack from endWord to beginWord.\n\n### Complexity\n- Time: O(N * 26 * L + Paths), Space: O(N * L)",
      "timeComplexity": "O(N * 26 * L + Paths)",
      "spaceComplexity": "O(N * L)"
    },
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0
  },
  {
    "title": "Word Pattern",
    "slug": "word-pattern",
    "description": "Given a `pattern` and a string `s`, find if `s` follows the same pattern. A **bijection** must exist between each letter in `pattern` and a non-empty word in `s`.\n\n### Example 1:\n```\nInput: \"abba\"\n\"dog cat cat dog\"\nOutput: true\nExplanation: 'a' -> 'dog', 'b' -> 'cat'.\n```\n\n### Example 2:\n```\nInput: \"abba\"\n\"dog cat cat fish\"\nOutput: false\nExplanation: 'a' maps to both 'dog' and 'fish', contradiction.\n```",
    "difficulty": "EASY",
    "category": "DSA",
    "patterns": [
      "Hash Table",
      "String"
    ],
    "topics": [
      "Hash Table",
      "String"
    ],
    "companyTags": [
      {
        "company": "Google",
        "yearReported": 2025,
        "verified": true,
        "frequencyCount": 50,
        "sourceNote": "Reported in Google 2021-2026 interview set"
      }
    ],
    "supportedLanguages": [
      "python",
      "javascript",
      "cpp",
      "java"
    ],
    "starterCode": [
      {
        "language": "python",
        "boilerplate": "def wordPattern(*args):\n    # TODO: Implement solution for Word Pattern\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = wordPattern(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(wordPattern(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function wordPattern(...args) {\n    // TODO: Implement solution for Word Pattern\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(wordPattern(...parsed)));\n    } catch (e) {\n        console.log(wordPattern(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Word Pattern\n        string line;\n        while (getline(cin, line)) {\n            cout << line << endl;\n        }\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        String line;\n        while ((line = br.readLine()) != null) {\n            // TODO: Implement solution for Word Pattern\n            System.out.println(line);\n        }\n    }\n}\n"
      }
    ],
    "sampleTestCases": [
      {
        "input": "\"abba\"\n\"dog cat cat dog\"",
        "output": "true",
        "explanation": "'a' -> 'dog', 'b' -> 'cat'."
      },
      {
        "input": "\"abba\"\n\"dog cat cat fish\"",
        "output": "false",
        "explanation": "'a' maps to both 'dog' and 'fish', contradiction."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "\"abba\"\n\"dog cat cat dog\"",
        "output": "true",
        "isHidden": true
      },
      {
        "input": "\"abba\"\n\"dog cat cat fish\"",
        "output": "false",
        "isHidden": true
      },
      {
        "input": "\"aaaa\"\n\"dog dog dog dog\"",
        "output": "true",
        "isHidden": true
      }
    ],
    "hints": [
      "Check bijective mapping: pattern[i] -> word and word -> pattern[i]."
    ],
    "editorial": {
      "approach": "Optimal Approach for Word Pattern",
      "solutionMarkdown": "### Optimal Solution\n\nSplit s by spaces. If lengths differ, return false. Use two maps char_to_word and word_to_char.\n\n### Complexity\n- Time: O(N), Space: O(N)",
      "timeComplexity": "O(N)",
      "spaceComplexity": "O(N)"
    },
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0
  },
  {
    "title": "Word Search",
    "slug": "word-search",
    "description": "Given an `m x n` grid of characters `board` and a string `word`, return `true` if `word` exists in the grid. The word can be constructed from letters of sequentially adjacent cells (horizontally or vertically neighboring). The same letter cell may not be used more than once.\n\n### Example 1:\n```\nInput: [[\"A\",\"B\",\"C\",\"E\"],[\"S\",\"F\",\"C\",\"S\"],[\"A\",\"D\",\"E\",\"E\"]]\nABCCED\nOutput: true\nExplanation: The word 'ABCCED' exists.\n```\n\n### Example 2:\n```\nInput: [[\"A\",\"B\",\"C\",\"E\"],[\"S\",\"F\",\"C\",\"S\"],[\"A\",\"D\",\"E\",\"E\"]]\nABCB\nOutput: false\nExplanation: 'ABCB' cannot be formed without reusing cell 'B'.\n```",
    "difficulty": "MEDIUM",
    "category": "DSA",
    "patterns": [
      "Backtracking",
      "Matrix",
      "BFS / DFS"
    ],
    "topics": [
      "Backtracking",
      "Matrix",
      "BFS / DFS"
    ],
    "companyTags": [
      {
        "company": "Apple",
        "yearReported": 2025,
        "verified": true,
        "frequencyCount": 45,
        "sourceNote": "Reported in Apple 2021-2026 interview set"
      },
      {
        "company": "Meta",
        "yearReported": 2025,
        "verified": true,
        "frequencyCount": 40,
        "sourceNote": "Reported in Meta 2021-2026 interview set"
      }
    ],
    "supportedLanguages": [
      "python",
      "javascript",
      "cpp",
      "java"
    ],
    "starterCode": [
      {
        "language": "python",
        "boilerplate": "def wordSearch(*args):\n    # TODO: Implement solution for Word Search\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = wordSearch(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(wordSearch(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function wordSearch(...args) {\n    // TODO: Implement solution for Word Search\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(wordSearch(...parsed)));\n    } catch (e) {\n        console.log(wordSearch(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Word Search\n        string line;\n        while (getline(cin, line)) {\n            cout << line << endl;\n        }\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        String line;\n        while ((line = br.readLine()) != null) {\n            // TODO: Implement solution for Word Search\n            System.out.println(line);\n        }\n    }\n}\n"
      }
    ],
    "sampleTestCases": [
      {
        "input": "[[\"A\",\"B\",\"C\",\"E\"],[\"S\",\"F\",\"C\",\"S\"],[\"A\",\"D\",\"E\",\"E\"]]\nABCCED",
        "output": "true",
        "explanation": "The word 'ABCCED' exists."
      },
      {
        "input": "[[\"A\",\"B\",\"C\",\"E\"],[\"S\",\"F\",\"C\",\"S\"],[\"A\",\"D\",\"E\",\"E\"]]\nABCB",
        "output": "false",
        "explanation": "'ABCB' cannot be formed without reusing cell 'B'."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "[[\"A\",\"B\",\"C\",\"E\"],[\"S\",\"F\",\"C\",\"S\"],[\"A\",\"D\",\"E\",\"E\"]]\nABCCED",
        "output": "true",
        "isHidden": true
      },
      {
        "input": "[[\"A\",\"B\",\"C\",\"E\"],[\"S\",\"F\",\"C\",\"S\"],[\"A\",\"D\",\"E\",\"E\"]]\nABCB",
        "output": "false",
        "isHidden": true
      }
    ],
    "hints": [
      "Start DFS from each matching first character. Temporarily modify board[r][c] to '#' to mark visited."
    ],
    "editorial": {
      "approach": "Optimal Approach for Word Search",
      "solutionMarkdown": "### Optimal Solution\n\nDFS backtracking in 4 directions. Restore cell character upon backtrack.\n\n### Complexity\n- Time: O(M * N * 3^L) where L is word length, Space: O(L)",
      "timeComplexity": "O(M * N * 3^L) where L is word length",
      "spaceComplexity": "O(L)"
    },
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0
  },
  {
    "title": "Word Search II",
    "slug": "word-search-ii",
    "description": "Given an `m x n` `board` of characters and a list of strings `words`, return *all words on the board*.\n\nEach word must be constructed from letters of sequentially adjacent cells (horizontally or vertically).\n\n### Example 1:\n```\nInput: [[\"o\",\"a\",\"a\",\"n\"],[\"e\",\"t\",\"a\",\"e\"],[\"i\",\"h\",\"k\",\"r\"],[\"i\",\"f\",\"l\",\"v\"]]\n[\"oath\",\"pea\",\"eat\",\"rain\"]\nOutput: [\"eat\", \"oath\"]\nExplanation: The words 'eat' and 'oath' exist on the board.\n```\n\n### Example 2:\n```\nInput: [[\"a\",\"b\"],[\"c\",\"d\"]]\n[\"abcb\"]\nOutput: []\nExplanation: 'abcb' cannot be formed without reusing 'b'.\n```",
    "difficulty": "HARD",
    "category": "DSA",
    "patterns": [
      "Trie",
      "Backtracking",
      "Matrix"
    ],
    "topics": [
      "Trie",
      "Backtracking",
      "Matrix"
    ],
    "companyTags": [
      {
        "company": "Apple",
        "yearReported": 2025,
        "verified": true,
        "frequencyCount": 45,
        "sourceNote": "Reported in Apple 2021-2026 interview set"
      },
      {
        "company": "Microsoft",
        "yearReported": 2025,
        "verified": true,
        "frequencyCount": 35,
        "sourceNote": "Reported in Microsoft 2021-2026 interview set"
      },
      {
        "company": "Google",
        "yearReported": 2025,
        "verified": true,
        "frequencyCount": 50,
        "sourceNote": "Reported in Google 2021-2026 interview set"
      }
    ],
    "supportedLanguages": [
      "python",
      "javascript",
      "cpp",
      "java"
    ],
    "starterCode": [
      {
        "language": "python",
        "boilerplate": "def wordSearchIi(*args):\n    # TODO: Implement solution for Word Search II\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = wordSearchIi(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(wordSearchIi(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function wordSearchIi(...args) {\n    // TODO: Implement solution for Word Search II\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(wordSearchIi(...parsed)));\n    } catch (e) {\n        console.log(wordSearchIi(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Word Search II\n        string line;\n        while (getline(cin, line)) {\n            cout << line << endl;\n        }\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        String line;\n        while ((line = br.readLine()) != null) {\n            // TODO: Implement solution for Word Search II\n            System.out.println(line);\n        }\n    }\n}\n"
      }
    ],
    "sampleTestCases": [
      {
        "input": "[[\"o\",\"a\",\"a\",\"n\"],[\"e\",\"t\",\"a\",\"e\"],[\"i\",\"h\",\"k\",\"r\"],[\"i\",\"f\",\"l\",\"v\"]]\n[\"oath\",\"pea\",\"eat\",\"rain\"]",
        "output": "[\"eat\", \"oath\"]",
        "explanation": "The words 'eat' and 'oath' exist on the board."
      },
      {
        "input": "[[\"a\",\"b\"],[\"c\",\"d\"]]\n[\"abcb\"]",
        "output": "[]",
        "explanation": "'abcb' cannot be formed without reusing 'b'."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "[[\"o\",\"a\",\"a\",\"n\"],[\"e\",\"t\",\"a\",\"e\"],[\"i\",\"h\",\"k\",\"r\"],[\"i\",\"f\",\"l\",\"v\"]]\n[\"oath\",\"pea\",\"eat\",\"rain\"]",
        "output": "[\"eat\", \"oath\"]",
        "isHidden": true
      },
      {
        "input": "[[\"a\",\"b\"],[\"c\",\"d\"]]\n[\"abcb\"]",
        "output": "[]",
        "isHidden": true
      }
    ],
    "hints": [
      "Insert all words into a Prefix Trie, then run DFS on board matching against Trie nodes."
    ],
    "editorial": {
      "approach": "Optimal Approach for Word Search II",
      "solutionMarkdown": "### Optimal Solution\n\nTrie pruning: prune trie branches as words are matched to prevent redundant searches.\n\n### Complexity\n- Time: O(M * N * 4 * 3^(L-1)), Space: O(Total characters in words)",
      "timeComplexity": "O(M * N * 4 * 3^(L-1))",
      "spaceComplexity": "O(Total characters in words)"
    },
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0
  },
  {
    "title": "Zigzag Iterator",
    "slug": "zigzag-iterator",
    "description": "Given two 1D vectors `v1` and `v2`, implement an iterator to return their elements alternately (zigzag order).\n\n### Example 1:\n```\nInput: [1,2]\n[3,4,5,6]\nOutput: [1,3,2,4,5,6]\nExplanation: Interleaved elements: 1, 3, 2, 4, then remaining 5, 6.\n```\n\n### Example 2:\n```\nInput: [1]\n[]\nOutput: [1]\nExplanation: Single vector non-empty.\n```",
    "difficulty": "MEDIUM",
    "category": "DSA",
    "patterns": [
      "Array",
      "Design",
      "Queue",
      "Iterator"
    ],
    "topics": [
      "Array",
      "Design",
      "Queue",
      "Iterator"
    ],
    "companyTags": [
      {
        "company": "Google",
        "yearReported": 2025,
        "verified": true,
        "frequencyCount": 50,
        "sourceNote": "Reported in Google 2021-2026 interview set"
      }
    ],
    "supportedLanguages": [
      "python",
      "javascript",
      "cpp",
      "java"
    ],
    "starterCode": [
      {
        "language": "python",
        "boilerplate": "def zigzagIterator(*args):\n    # TODO: Implement solution for Zigzag Iterator\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = zigzagIterator(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(zigzagIterator(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function zigzagIterator(...args) {\n    // TODO: Implement solution for Zigzag Iterator\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(zigzagIterator(...parsed)));\n    } catch (e) {\n        console.log(zigzagIterator(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Zigzag Iterator\n        string line;\n        while (getline(cin, line)) {\n            cout << line << endl;\n        }\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        String line;\n        while ((line = br.readLine()) != null) {\n            // TODO: Implement solution for Zigzag Iterator\n            System.out.println(line);\n        }\n    }\n}\n"
      }
    ],
    "sampleTestCases": [
      {
        "input": "[1,2]\n[3,4,5,6]",
        "output": "[1,3,2,4,5,6]",
        "explanation": "Interleaved elements: 1, 3, 2, 4, then remaining 5, 6."
      },
      {
        "input": "[1]\n[]",
        "output": "[1]",
        "explanation": "Single vector non-empty."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "[1,2]\n[3,4,5,6]",
        "output": "[1,3,2,4,5,6]",
        "isHidden": true
      },
      {
        "input": "[1]\n[]",
        "output": "[1]",
        "isHidden": true
      },
      {
        "input": "[]\n[]",
        "output": "[]",
        "isHidden": true
      }
    ],
    "hints": [
      "Use a queue of iterators or (vector_index, element_index) pairs."
    ],
    "editorial": {
      "approach": "Optimal Approach for Zigzag Iterator",
      "solutionMarkdown": "### Optimal Solution\n\nQueue stores non-empty lists/iterators. In next(), pop front iterator, extract element, and re-enqueue if elements remain.\n\n### Complexity\n- Time: O(1) per next, Space: O(K)",
      "timeComplexity": "O(1) per next",
      "spaceComplexity": "O(K)"
    },
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0
  }
];
