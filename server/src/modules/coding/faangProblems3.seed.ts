export const faang3: any[] = [
  {
    "title": "Matrix Diagonal Sum",
    "slug": "matrix-diagonal-sum",
    "description": "Given a square matrix `mat`, return the sum of the matrix diagonals. Only include the sum of all the elements on the primary diagonal and all the elements on the secondary diagonal that are not part of the primary diagonal.\n\n### Example 1:\n```\nInput: [[1,2,3],[4,5,6],[7,8,9]]\nOutput: 25\nExplanation: Diagonals sum: 1 + 5 + 9 + 3 + 7 = 25 (center 5 not double counted).\n```\n\n### Example 2:\n```\nInput: [[1,1,1,1],[1,1,1,1],[1,1,1,1],[1,1,1,1]]\nOutput: 8\nExplanation: Diagonals sum: 8.\n```",
    "difficulty": "EASY",
    "category": "DSA",
    "patterns": [
      "Array",
      "Matrix"
    ],
    "topics": [
      "Array",
      "Matrix"
    ],
    "companyTags": [
      {
        "company": "TCS",
        "yearReported": 2025,
        "verified": false,
        "frequencyCount": 30,
        "sourceNote": "TCS Practice Bank #26"
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
        "boilerplate": "def matrixDiagonalSum(*args):\n    # TODO: Implement solution for Matrix Diagonal Sum\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = matrixDiagonalSum(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(matrixDiagonalSum(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function matrixDiagonalSum(...args) {\n    // TODO: Implement solution for Matrix Diagonal Sum\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(matrixDiagonalSum(...parsed)));\n    } catch (e) {\n        console.log(matrixDiagonalSum(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Matrix Diagonal Sum\n        // TODO: Read input from cin and implement solution\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        // TODO: Read from br and implement solution\n    }\n}\n"
      }
    ],
    "sampleTestCases": [
      {
        "input": "[[1,2,3],[4,5,6],[7,8,9]]",
        "output": "25",
        "explanation": "Diagonals sum: 1 + 5 + 9 + 3 + 7 = 25 (center 5 not double counted)."
      },
      {
        "input": "[[1,1,1,1],[1,1,1,1],[1,1,1,1],[1,1,1,1]]",
        "output": "8",
        "explanation": "Diagonals sum: 8."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "[[1,2,3],[4,5,6],[7,8,9]]",
        "output": "25",
        "isHidden": true
      },
      {
        "input": "[[1,1,1,1],[1,1,1,1],[1,1,1,1],[1,1,1,1]]",
        "output": "8",
        "isHidden": true
      },
      {
        "input": "[[5]]",
        "output": "5",
        "isHidden": true
      }
    ],
    "hints": [
      "Primary diagonal is mat[i][i], secondary is mat[i][n - 1 - i]. If n is odd, subtract center mat[n//2][n//2]."
    ],
    "editorial": {
      "approach": "Optimal Approach for Matrix Diagonal Sum",
      "solutionMarkdown": "### Optimal Solution\n\nSingle pass i from 0 to n-1: sum += mat[i][i] + mat[i][n - 1 - i]. If n % 2 == 1, subtract center.\n\n### Complexity\n- Time: O(N), Space: O(1)",
      "timeComplexity": "O(N)",
      "spaceComplexity": "O(1)"
    },
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0
  },
  {
    "title": "Matrix Multiplication",
    "slug": "matrix-multiplication",
    "description": "Given two matrices $A$ of dimensions $R_1 \\times C_1$ and $B$ of dimensions $R_2 \\times C_2$, compute and return their matrix product $A \\times B$. If the matrices cannot be multiplied ($C_1 \\ne R_2$), output `INVALID`.\\n\\n### Example 1:\\n```\\nInput:\\n2 2\\n1 2\\n3 4\\n2 2\\n5 6\\n7 8\\nOutput:\\n19 22\\n43 50\\nExplanation: Standard 2x2 matrix multiplication.\\n```\\n\\n### Example 2:\\n```\\nInput:\\n2 3\\n1 2 3\\n4 5 6\\n2 2\\n1 2\\n3 4\\nOutput: INVALID\\nExplanation: Columns of A (3) != Rows of B (2).\\n```\\n\\n### Constraints:\\n- $1 \\le R_1, C_1, R_2, C_2 \\le 100$\\n- $-1000 \\le A_{ij}, B_{ij} \\le 1000$",
    "difficulty": "MEDIUM",
    "category": "DSA",
    "patterns": [
      "Matrix",
      "Simulation"
    ],
    "topics": [
      "Matrix",
      "Simulation",
      "Math"
    ],
    "companyTags": [
      {
        "company": "Wipro",
        "frequencyCount": 6,
        "yearReported": 2025
      }
    ],
    "sampleTestCases": [
      {
        "input": "2 2\n1 2\n3 4\n2 2\n5 6\n7 8",
        "output": "19 22\n43 50",
        "explanation": "2x2 multiplication result."
      },
      {
        "input": "2 3\n1 2 3\n4 5 6\n2 2\n1 2\n3 4",
        "output": "INVALID",
        "explanation": "Dimension mismatch."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "1 2\n3 4\n2 1\n5\n6",
        "output": "39"
      },
      {
        "input": "1 1\n7\n1 1\n8",
        "output": "56"
      },
      {
        "input": "2 2\n1 0\n0 1\n2 2\n9 8\n7 6",
        "output": "9 8\n7 6"
      }
    ],
    "hints": [
      "Check if C1 == R2 before proceeding.",
      "Compute result[i][j] = sum(A[i][k] * B[k][j]) for k from 0 to C1-1."
    ],
    "editorial": {
      "approach": "Three-Loop Matrix Product",
      "solutionMarkdown": "### Method\nCheck condition $C_1 == R_2$. Then compute product with three nested loops.",
      "timeComplexity": "O(R_1 * C_1 * C_2)",
      "spaceComplexity": "O(R_1 * C_2)"
    },
    "starterCode": [
      {
        "language": "python",
        "boilerplate": "def matrixMultiplication(*args):\n    # TODO: Implement solution for Matrix Multiplication\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = matrixMultiplication(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(matrixMultiplication(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function matrixMultiplication(...args) {\n    // TODO: Implement solution for Matrix Multiplication\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try {\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(matrixMultiplication(...parsed)));\n    } catch (e) {\n        console.log(matrixMultiplication(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // TODO: Read input from cin and implement solution for Matrix Multiplication\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        // TODO: Read from br and implement solution for Matrix Multiplication\n    }\n}\n"
      }
    ],
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0
  },
  {
    "title": "Map a String into an r x c Matrix and Print Its Transpose",
    "slug": "matrix-string-transpose",
    "description": "Given a string `s` and dimensions `r` and `c` (`r * c == len(s)`), arrange the characters of `s` row-by-row into an `r x c` matrix, then return the string formed by reading the transpose of the matrix column-by-column.\n\n### Example 1:\n```\nInput: \"abcdef\"\n2\n3\nOutput: \"adbecf\"\nExplanation: Matrix 2x3: [[a, b, c], [d, e, f]]. Transpose read column by column: a-d, b-e, c-f -> \"adbecf\".\n```\n\n### Example 2:\n```\nInput: \"abcd\"\n2\n2\nOutput: \"acbd\"\nExplanation: Matrix 2x2: [[a, b], [c, d]]. Transpose: \"acbd\".\n```",
    "difficulty": "MEDIUM",
    "category": "DSA",
    "patterns": [
      "String",
      "Matrix",
      "Simulation"
    ],
    "topics": [
      "String",
      "Matrix",
      "Simulation"
    ],
    "companyTags": [
      {
        "company": "TCS",
        "yearReported": 2025,
        "verified": true,
        "frequencyCount": 45,
        "sourceNote": "TCS Interview Question #28"
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
        "boilerplate": "def matrixStringTranspose(*args):\n    # TODO: Implement solution for Map a String into an r x c Matrix and Print Its Transpose\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = matrixStringTranspose(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(matrixStringTranspose(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function matrixStringTranspose(...args) {\n    // TODO: Implement solution for Map a String into an r x c Matrix and Print Its Transpose\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(matrixStringTranspose(...parsed)));\n    } catch (e) {\n        console.log(matrixStringTranspose(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Map a String into an r x c Matrix and Print Its Transpose\n        // TODO: Read input from cin and implement solution\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        // TODO: Read from br and implement solution\n    }\n}\n"
      }
    ],
    "sampleTestCases": [
      {
        "input": "\"abcdef\"\n2\n3",
        "output": "\"adbecf\"",
        "explanation": "Matrix 2x3: [[a, b, c], [d, e, f]]. Transpose read column by column: a-d, b-e, c-f -> \"adbecf\"."
      },
      {
        "input": "\"abcd\"\n2\n2",
        "output": "\"acbd\"",
        "explanation": "Matrix 2x2: [[a, b], [c, d]]. Transpose: \"acbd\"."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "\"abcdef\"\n2\n3",
        "output": "\"adbecf\"",
        "isHidden": true
      },
      {
        "input": "\"abcd\"\n2\n2",
        "output": "\"acbd\"",
        "isHidden": true
      },
      {
        "input": "\"z\"\n1\n1",
        "output": "\"z\"",
        "isHidden": true
      }
    ],
    "hints": [
      "Character at row i, col j is s[i * c + j]. In transpose, read col j, row i: s[i * c + j]."
    ],
    "editorial": {
      "approach": "Optimal Approach for Map a String into an r x c Matrix and Print Its Transpose",
      "solutionMarkdown": "### Optimal Solution\n\nIterate column col from 0 to c-1 and row from 0 to r-1: append s[row * c + col].\n\n### Complexity\n- Time: O(N), Space: O(N)",
      "timeComplexity": "O(N)",
      "spaceComplexity": "O(N)"
    },
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0
  },
  {
    "title": "Max Area of Island",
    "slug": "max-area-of-island",
    "description": "You are given an `m x n` binary matrix `grid`. An island is a group of `1`'s connected 4-directionally. Return *the maximum area of an island in grid*. If there is no island, return `0`.\n\n### Example 1:\n```\nInput: [[0,0,1,0,0],[0,1,1,1,0],[0,0,1,0,0],[0,0,0,0,0]]\nOutput: 5\nExplanation: The largest connected component of 1s has area 5.\n```\n\n### Example 2:\n```\nInput: [[0,0,0,0,0]]\nOutput: 0\nExplanation: No islands exist.\n```",
    "difficulty": "MEDIUM",
    "category": "DSA",
    "patterns": [
      "Array",
      "Depth-First Search",
      "Breadth-First Search",
      "Union Find",
      "Matrix"
    ],
    "topics": [
      "Array",
      "Depth-First Search",
      "Breadth-First Search",
      "Union Find",
      "Matrix"
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
        "boilerplate": "def maxAreaOfIsland(*args):\n    # TODO: Implement solution for Max Area of Island\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = maxAreaOfIsland(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(maxAreaOfIsland(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function maxAreaOfIsland(...args) {\n    // TODO: Implement solution for Max Area of Island\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(maxAreaOfIsland(...parsed)));\n    } catch (e) {\n        console.log(maxAreaOfIsland(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Max Area of Island\n        // TODO: Read input from cin and implement solution\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        // TODO: Read from br and implement solution\n    }\n}\n"
      }
    ],
    "sampleTestCases": [
      {
        "input": "[[0,0,1,0,0],[0,1,1,1,0],[0,0,1,0,0],[0,0,0,0,0]]",
        "output": "5",
        "explanation": "The largest connected component of 1s has area 5."
      },
      {
        "input": "[[0,0,0,0,0]]",
        "output": "0",
        "explanation": "No islands exist."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "[[0,0,1,0,0],[0,1,1,1,0],[0,0,1,0,0],[0,0,0,0,0]]",
        "output": "5",
        "isHidden": true
      },
      {
        "input": "[[0,0,0,0,0]]",
        "output": "0",
        "isHidden": true
      },
      {
        "input": "[[1]]",
        "output": "1",
        "isHidden": true
      }
    ],
    "hints": [
      "Run DFS on every unvisited 1 to calculate its area and update max."
    ],
    "editorial": {
      "approach": "Optimal Approach for Max Area of Island",
      "solutionMarkdown": "### Optimal Solution\n\nStandard grid DFS. Sink visited 1s to 0 and sum 1 + dfs for each 4-directional neighbor.\n\n### Complexity\n- Time: O(M*N), Space: O(M*N)",
      "timeComplexity": "O(M*N)",
      "spaceComplexity": "O(M*N)"
    },
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0
  },
  {
    "title": "Max Consecutive Ones III",
    "slug": "max-consecutive-ones-iii",
    "description": "Given a binary array `nums` and an integer `k`, return *the maximum number of consecutive* `1`*'s in the array if you can flip at most* `k` `0`*'s*.\n\n### Example 1:\n```\nInput: [1,1,1,0,0,0,1,1,1,1,0]\n2\nOutput: 6\nExplanation: Flip 2 zeros to get 6 consecutive ones.\n```\n\n### Example 2:\n```\nInput: [0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1]\n3\nOutput: 10\nExplanation: Flip 3 zeros to get 10 consecutive ones.\n```",
    "difficulty": "MEDIUM",
    "category": "DSA",
    "patterns": [
      "Array",
      "Binary Search",
      "Sliding Window",
      "Prefix Sum"
    ],
    "topics": [
      "Array",
      "Binary Search",
      "Sliding Window",
      "Prefix Sum"
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
        "company": "Accenture",
        "yearReported": 2025,
        "verified": false,
        "frequencyCount": 25,
        "sourceNote": "Accenture Practice Bank #38"
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
        "boilerplate": "def maxConsecutiveOnesIii(*args):\n    # TODO: Implement solution for Max Consecutive Ones III\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = maxConsecutiveOnesIii(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(maxConsecutiveOnesIii(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function maxConsecutiveOnesIii(...args) {\n    // TODO: Implement solution for Max Consecutive Ones III\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(maxConsecutiveOnesIii(...parsed)));\n    } catch (e) {\n        console.log(maxConsecutiveOnesIii(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Max Consecutive Ones III\n        // TODO: Read input from cin and implement solution\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        // TODO: Read from br and implement solution\n    }\n}\n"
      }
    ],
    "sampleTestCases": [
      {
        "input": "[1,1,1,0,0,0,1,1,1,1,0]\n2",
        "output": "6",
        "explanation": "Flip 2 zeros to get 6 consecutive ones."
      },
      {
        "input": "[0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1]\n3",
        "output": "10",
        "explanation": "Flip 3 zeros to get 10 consecutive ones."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "[1,1,1,0,0,0,1,1,1,1,0]\n2",
        "output": "6",
        "isHidden": true
      },
      {
        "input": "[0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1]\n3",
        "output": "10",
        "isHidden": true
      },
      {
        "input": "[1,1,1]\n0",
        "output": "3",
        "isHidden": true
      }
    ],
    "hints": [
      "Find the longest subarray with at most k zeros using sliding window."
    ],
    "editorial": {
      "approach": "Optimal Approach for Max Consecutive Ones III",
      "solutionMarkdown": "### Optimal Solution\n\nExpand right pointer. Count zeros. If zeros > k, shrink from left until zeros <= k.\n\n### Complexity\n- Time: O(N), Space: O(1)",
      "timeComplexity": "O(N)",
      "spaceComplexity": "O(1)"
    },
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0
  },
  {
    "title": "Maximum j-i with arr[j] divisible by arr[i]",
    "slug": "max-index-diff-divisible",
    "description": "Given an integer array `arr`, find the maximum value of `j - i` such that `j >= i` and `arr[j]` is divisible by `arr[i]` (`arr[j] % arr[i] == 0`). If no such pair exists with `j > i`, return `0`.\n\n### Example 1:\n```\nInput: [3,5,4,2,9]\nOutput: 4\nExplanation: arr[4] = 9 is divisible by arr[0] = 3. j - i = 4 - 0 = 4.\n```\n\n### Example 2:\n```\nInput: [7,11,13]\nOutput: 0\nExplanation: No element divisible by any earlier element.\n```",
    "difficulty": "MEDIUM",
    "category": "DSA",
    "patterns": [
      "Array",
      "Hash Table",
      "Math"
    ],
    "topics": [
      "Array",
      "Hash Table",
      "Math"
    ],
    "companyTags": [
      {
        "company": "Infosys",
        "yearReported": 2025,
        "verified": true,
        "frequencyCount": 42,
        "sourceNote": "Infosys Interview Question #15"
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
        "boilerplate": "def maxIndexDiffDivisible(*args):\n    # TODO: Implement solution for Maximum j-i with arr[j] divisible by arr[i]\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = maxIndexDiffDivisible(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(maxIndexDiffDivisible(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function maxIndexDiffDivisible(...args) {\n    // TODO: Implement solution for Maximum j-i with arr[j] divisible by arr[i]\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(maxIndexDiffDivisible(...parsed)));\n    } catch (e) {\n        console.log(maxIndexDiffDivisible(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Maximum j-i with arr[j] divisible by arr[i]\n        // TODO: Read input from cin and implement solution\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        // TODO: Read from br and implement solution\n    }\n}\n"
      }
    ],
    "sampleTestCases": [
      {
        "input": "[3,5,4,2,9]",
        "output": "4",
        "explanation": "arr[4] = 9 is divisible by arr[0] = 3. j - i = 4 - 0 = 4."
      },
      {
        "input": "[7,11,13]",
        "output": "0",
        "explanation": "No element divisible by any earlier element."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "[3,5,4,2,9]",
        "output": "4",
        "isHidden": true
      },
      {
        "input": "[7,11,13]",
        "output": "0",
        "isHidden": true
      },
      {
        "input": "[2,4,8,16]",
        "output": "3",
        "isHidden": true
      }
    ],
    "hints": [
      "For each element arr[i], check its multiples in reverse or pre-record rightmost index of each value."
    ],
    "editorial": {
      "approach": "Optimal Approach for Maximum j-i with arr[j] divisible by arr[i]",
      "solutionMarkdown": "### Optimal Solution\n\nStore rightmost occurrence of each value in hash map. For each i, check multiples of arr[i] up to max(arr) and maximize j - i.\n\n### Complexity\n- Time: O(N * (max/val)), Space: O(N)",
      "timeComplexity": "O(N * (max/val))",
      "spaceComplexity": "O(N)"
    },
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0
  },
  {
    "title": "Find the Maximum Value in a 2D Matrix",
    "slug": "max-value-in-2d-matrix",
    "description": "Given an `m x n` integer matrix `grid`, find and return the **maximum integer value** present in the matrix.\n\n### Example 1:\n```\nInput: [[1,2,3],[4,9,6],[7,8,5]]\nOutput: 9\nExplanation: The maximum value in the matrix is 9 at (1, 1).\n```\n\n### Example 2:\n```\nInput: [[-10,-5],[-20,-1]]\nOutput: -1\nExplanation: Maximum value is -1.\n```",
    "difficulty": "EASY",
    "category": "DSA",
    "patterns": [
      "Array",
      "Matrix"
    ],
    "topics": [
      "Array",
      "Matrix"
    ],
    "companyTags": [
      {
        "company": "TCS",
        "yearReported": 2025,
        "verified": true,
        "frequencyCount": 45,
        "sourceNote": "TCS Interview Question #60"
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
        "boilerplate": "def maxValueIn2dMatrix(*args):\n    # TODO: Implement solution for Find the Maximum Value in a 2D Matrix\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = maxValueIn2dMatrix(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(maxValueIn2dMatrix(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function maxValueIn2dMatrix(...args) {\n    // TODO: Implement solution for Find the Maximum Value in a 2D Matrix\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(maxValueIn2dMatrix(...parsed)));\n    } catch (e) {\n        console.log(maxValueIn2dMatrix(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Find the Maximum Value in a 2D Matrix\n        // TODO: Read input from cin and implement solution\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        // TODO: Read from br and implement solution\n    }\n}\n"
      }
    ],
    "sampleTestCases": [
      {
        "input": "[[1,2,3],[4,9,6],[7,8,5]]",
        "output": "9",
        "explanation": "The maximum value in the matrix is 9 at (1, 1)."
      },
      {
        "input": "[[-10,-5],[-20,-1]]",
        "output": "-1",
        "explanation": "Maximum value is -1."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "[[1,2,3],[4,9,6],[7,8,5]]",
        "output": "9",
        "isHidden": true
      },
      {
        "input": "[[-10,-5],[-20,-1]]",
        "output": "-1",
        "isHidden": true
      },
      {
        "input": "[[42]]",
        "output": "42",
        "isHidden": true
      }
    ],
    "hints": [
      "Scan all rows and columns keeping running maximum."
    ],
    "editorial": {
      "approach": "Optimal Approach for Find the Maximum Value in a 2D Matrix",
      "solutionMarkdown": "### Optimal Solution\n\nLinear traversal over all rows and columns updating max_val = max(max_val, grid[r][c]).\n\n### Complexity\n- Time: O(M * N), Space: O(1)",
      "timeComplexity": "O(M * N)",
      "spaceComplexity": "O(1)"
    },
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0
  },
  {
    "title": "Maximal Rectangle",
    "slug": "maximal-rectangle",
    "description": "Given a `rows x cols` binary `matrix` filled with `0`'s and `1`'s, find the largest rectangle containing only `1`'s and return *its area*.\n\n### Example 1:\n```\nInput: [[\"1\",\"0\",\"1\",\"0\",\"0\"],[\"1\",\"0\",\"1\",\"1\",\"1\"],[\"1\",\"1\",\"1\",\"1\",\"1\"],[\"1\",\"0\",\"0\",\"1\",\"0\"]]\nOutput: 6\nExplanation: The maximal rectangle is 2x3 area = 6.\n```\n\n### Example 2:\n```\nInput: [[\"0\"]]\nOutput: 0\nExplanation: Empty rectangle.\n```",
    "difficulty": "HARD",
    "category": "DSA",
    "patterns": [
      "Array",
      "Dynamic Programming",
      "Stack",
      "Matrix",
      "Monotonic Stack"
    ],
    "topics": [
      "Array",
      "Dynamic Programming",
      "Stack",
      "Matrix",
      "Monotonic Stack"
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
        "boilerplate": "def maximalRectangle(*args):\n    # TODO: Implement solution for Maximal Rectangle\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = maximalRectangle(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(maximalRectangle(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function maximalRectangle(...args) {\n    // TODO: Implement solution for Maximal Rectangle\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(maximalRectangle(...parsed)));\n    } catch (e) {\n        console.log(maximalRectangle(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Maximal Rectangle\n        // TODO: Read input from cin and implement solution\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        // TODO: Read from br and implement solution\n    }\n}\n"
      }
    ],
    "sampleTestCases": [
      {
        "input": "[[\"1\",\"0\",\"1\",\"0\",\"0\"],[\"1\",\"0\",\"1\",\"1\",\"1\"],[\"1\",\"1\",\"1\",\"1\",\"1\"],[\"1\",\"0\",\"0\",\"1\",\"0\"]]",
        "output": "6",
        "explanation": "The maximal rectangle is 2x3 area = 6."
      },
      {
        "input": "[[\"0\"]]",
        "output": "0",
        "explanation": "Empty rectangle."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "[[\"1\",\"0\",\"1\",\"0\",\"0\"],[\"1\",\"0\",\"1\",\"1\",\"1\"],[\"1\",\"1\",\"1\",\"1\",\"1\"],[\"1\",\"0\",\"0\",\"1\",\"0\"]]",
        "output": "6",
        "isHidden": true
      },
      {
        "input": "[[\"0\"]]",
        "output": "0",
        "isHidden": true
      },
      {
        "input": "[[\"1\"]]",
        "output": "1",
        "isHidden": true
      }
    ],
    "hints": [
      "Convert each row into a histogram of consecutive 1s and apply Largest Rectangle in Histogram."
    ],
    "editorial": {
      "approach": "Optimal Approach for Maximal Rectangle",
      "solutionMarkdown": "### Optimal Solution\n\nMaintain running height array for each column. On each row, compute max area with monotonic stack.\n\n### Complexity\n- Time: O(R * C), Space: O(C)",
      "timeComplexity": "O(R * C)",
      "spaceComplexity": "O(C)"
    },
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0
  },
  {
    "title": "Maximal Square",
    "slug": "maximal-square",
    "description": "Given an $m \\times n$ binary `matrix` filled with 0's and 1's, find the largest square containing only 1's and return its area.\\n\\n### Example 1:\\n```\\nInput: matrix = [[\"1\",\"0\",\"1\",\"0\",\"0\"],[\"1\",\"0\",\"1\",\"1\",\"1\"],[\"1\",\"1\",\"1\",\"1\",\"1\"],[\"1\",\"0\",\"0\",\"1\",\"0\"]]\\nOutput: 4\\nExplanation: The maximal square has side length 2 and area 4.\\n```\\n\\n### Example 2:\\n```\\nInput: matrix = [[\"0\",\"1\"],[\"1\",\"0\"]]\\nOutput: 1\\nExplanation: Largest square has area 1.\\n```\\n\\n### Constraints:\\n- $m == matrix.length, n == matrix[i].length$\\n- $1 \\le m, n \\le 300$\\n- `matrix[i][j]` is '0' or '1'.",
    "difficulty": "MEDIUM",
    "patterns": [
      "Dynamic Programming",
      "Matrix"
    ],
    "topics": [
      "Array",
      "Dynamic Programming",
      "Matrix"
    ],
    "sampleTestCases": [
      {
        "input": "matrix = [[\"1\",\"0\",\"1\",\"0\",\"0\"],[\"1\",\"0\",\"1\",\"1\",\"1\"],[\"1\",\"1\",\"1\",\"1\",\"1\"],[\"1\",\"0\",\"0\",\"1\",\"0\"]]",
        "output": "4",
        "explanation": "2x2 square area 4."
      },
      {
        "input": "matrix = [[\"0\",\"1\"],[\"1\",\"0\"]]",
        "output": "1",
        "explanation": "Single cell square."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "matrix = [[\"0\"]]",
        "output": "0"
      },
      {
        "input": "matrix = [[\"1\"]]",
        "output": "1"
      },
      {
        "input": "matrix = [[\"1\",\"1\"],[\"1\",\"1\"]]",
        "output": "4"
      }
    ],
    "hints": [
      "dp[i][j] represents max side length of square with bottom-right corner at (i, j).",
      "dp[i][j] = min(dp[i-1][j], dp[i][j-1], dp[i-1][j-1]) + 1 if matrix[i][j] == '1'."
    ],
    "editorial": {
      "approach": "2D Grid DP Min Corner",
      "solutionMarkdown": "State represents side length of square ending at cell.",
      "timeComplexity": "O(M * N)",
      "spaceComplexity": "O(N)"
    },
    "category": "DSA",
    "starterCode": [
      {
        "language": "python",
        "boilerplate": "def maximalSquare(*args):\n    # TODO: Implement solution for Maximal Square\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = maximalSquare(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(maximalSquare(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function maximalSquare(...args) {\n    // TODO: Implement solution for Maximal Square\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try {\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(maximalSquare(...parsed)));\n    } catch (e) {\n        console.log(maximalSquare(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // TODO: Read input from cin and implement solution for Maximal Square\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        // TODO: Read from br and implement solution for Maximal Square\n    }\n}\n"
      }
    ],
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0,
    "companyTags": [
      {
        "company": "Adobe",
        "frequencyCount": 7,
        "yearReported": 2025
      }
    ]
  },
  {
    "title": "Maximum and Minimum Character Occurrences",
    "slug": "maximum-and-minimum-character-occurrences",
    "description": "Given a string `s`, find the character that appears with the maximum frequency and the character that appears with the minimum frequency (among characters that appear at least once). If there are ties, choose the lexicographically smaller character. Output both characters separated by a space.\\n\\n### Example 1:\\n```\\nInput: aabccc\\nOutput: c b\\nExplanation: 'c' appears 3 times (max), 'b' appears 1 time (min).\\n```\\n\\n### Example 2:\\n```\\nInput: abcd\\nOutput: a a\\nExplanation: All characters appear 1 time. Tied max is 'a' and tied min is 'a'.\\n```\\n\\n### Constraints:\\n- $1 \\le |s| \\le 10^5$\\n- `s` consists of lowercase English letters.",
    "difficulty": "EASY",
    "patterns": [
      "Hash Table",
      "Counting"
    ],
    "topics": [
      "Hash Table",
      "String",
      "Counting"
    ],
    "sampleTestCases": [
      {
        "input": "aabccc",
        "output": "c b",
        "explanation": "Max frequency 'c', min frequency 'b'."
      },
      {
        "input": "abcd",
        "output": "a a",
        "explanation": "Ties broken lexicographically."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "z",
        "output": "z z"
      },
      {
        "input": "ba",
        "output": "a a"
      },
      {
        "input": "mississippi",
        "output": "i m"
      }
    ],
    "hints": [
      "Count frequencies of all lowercase characters. Find max and min counts, breaking ties lexicographically."
    ],
    "editorial": {
      "approach": "Frequency Map with Lexicographical Tie-Breaking",
      "solutionMarkdown": "Count occurrences, scan characters 'a' through 'z' to find extremes.",
      "timeComplexity": "O(N)",
      "spaceComplexity": "O(1)"
    },
    "category": "DSA",
    "starterCode": [
      {
        "language": "python",
        "boilerplate": "def maximumAndMinimumCharacterOccurrences(*args):\n    # TODO: Implement solution for Maximum and Minimum Character Occurrences\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = maximumAndMinimumCharacterOccurrences(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(maximumAndMinimumCharacterOccurrences(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function maximumAndMinimumCharacterOccurrences(...args) {\n    // TODO: Implement solution for Maximum and Minimum Character Occurrences\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try {\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(maximumAndMinimumCharacterOccurrences(...parsed)));\n    } catch (e) {\n        console.log(maximumAndMinimumCharacterOccurrences(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // TODO: Read input from cin and implement solution for Maximum and Minimum Character Occurrences\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        // TODO: Read from br and implement solution for Maximum and Minimum Character Occurrences\n    }\n}\n"
      }
    ],
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0,
    "companyTags": [
      {
        "company": "Adobe",
        "frequencyCount": 7,
        "yearReported": 2025
      }
    ]
  },
  {
    "title": "Maximum Average Subarray I",
    "slug": "maximum-average-subarray-i",
    "description": "You are given an integer array `nums` consisting of `n` elements, and an integer `k`. Find a contiguous subarray whose **length is equal to** `k` that has the maximum average value and return *this value*.\n\n### Example 1:\n```\nInput: [1,12,-5,-6,50,3]\n4\nOutput: 12.75\nExplanation: Maximum average is (12 - 5 - 6 + 50) / 4 = 51 / 4 = 12.75.\n```\n\n### Example 2:\n```\nInput: [5]\n1\nOutput: 5.0\nExplanation: 5 / 1 = 5.0.\n```",
    "difficulty": "EASY",
    "category": "DSA",
    "patterns": [
      "Array",
      "Sliding Window"
    ],
    "topics": [
      "Array",
      "Sliding Window"
    ],
    "companyTags": [
      {
        "company": "Accenture",
        "yearReported": 2025,
        "verified": false,
        "frequencyCount": 25,
        "sourceNote": "Accenture Practice Bank #37"
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
        "boilerplate": "def maximumAverageSubarrayI(*args):\n    # TODO: Implement solution for Maximum Average Subarray I\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = maximumAverageSubarrayI(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(maximumAverageSubarrayI(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function maximumAverageSubarrayI(...args) {\n    // TODO: Implement solution for Maximum Average Subarray I\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(maximumAverageSubarrayI(...parsed)));\n    } catch (e) {\n        console.log(maximumAverageSubarrayI(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Maximum Average Subarray I\n        // TODO: Read input from cin and implement solution\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        // TODO: Read from br and implement solution\n    }\n}\n"
      }
    ],
    "sampleTestCases": [
      {
        "input": "[1,12,-5,-6,50,3]\n4",
        "output": "12.75",
        "explanation": "Maximum average is (12 - 5 - 6 + 50) / 4 = 51 / 4 = 12.75."
      },
      {
        "input": "[5]\n1",
        "output": "5.0",
        "explanation": "5 / 1 = 5.0."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "[1,12,-5,-6,50,3]\n4",
        "output": "12.75",
        "isHidden": true
      },
      {
        "input": "[5]\n1",
        "output": "5.0",
        "isHidden": true
      },
      {
        "input": "[0,4,0,3,2]\n1",
        "output": "4.0",
        "isHidden": true
      }
    ],
    "hints": [
      "Maintain sum of fixed sliding window of size k."
    ],
    "editorial": {
      "approach": "Optimal Approach for Maximum Average Subarray I",
      "solutionMarkdown": "### Optimal Solution\n\nCompute initial sum of first k elements. Slide window across array: add nums[i] and subtract nums[i - k]. Track max sum.\n\n### Complexity\n- Time: O(N), Space: O(1)",
      "timeComplexity": "O(N)",
      "spaceComplexity": "O(1)"
    },
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0
  },
  {
    "title": "Maximum Depth of Binary Tree",
    "slug": "maximum-depth-of-binary-tree",
    "description": "Given the `root` of a binary tree, return *its maximum depth*.\n\n### Example 1:\n```\nInput: [3,9,20,null,null,15,7]\nOutput: 3\nExplanation: Longest root-to-leaf path depth is 3.\n```\n\n### Example 2:\n```\nInput: [1,null,2]\nOutput: 2\nExplanation: Depth is 2.\n```",
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
        "sourceNote": "Accenture Practice Bank #97"
      },
      {
        "company": "Infosys",
        "yearReported": 2025,
        "verified": true,
        "frequencyCount": 42,
        "sourceNote": "Infosys Interview Question #56"
      },
      {
        "company": "TCS",
        "yearReported": 2025,
        "verified": false,
        "frequencyCount": 30,
        "sourceNote": "TCS Practice Bank #61"
      },
      {
        "company": "Capgemini",
        "frequencyCount": 7,
        "yearReported": 2024
      },
      {
        "company": "Wipro",
        "frequencyCount": 7,
        "yearReported": 2025
      },
      {
        "company": "Oracle",
        "frequencyCount": 7,
        "yearReported": 2024
      },
      {
        "company": "Adobe",
        "frequencyCount": 7,
        "yearReported": 2025
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
        "boilerplate": "def maximumDepthOfBinaryTree(*args):\n    # TODO: Implement solution for Maximum Depth of Binary Tree\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = maximumDepthOfBinaryTree(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(maximumDepthOfBinaryTree(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function maximumDepthOfBinaryTree(...args) {\n    // TODO: Implement solution for Maximum Depth of Binary Tree\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(maximumDepthOfBinaryTree(...parsed)));\n    } catch (e) {\n        console.log(maximumDepthOfBinaryTree(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Maximum Depth of Binary Tree\n        // TODO: Read input from cin and implement solution\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        // TODO: Read from br and implement solution\n    }\n}\n"
      }
    ],
    "sampleTestCases": [
      {
        "input": "[3,9,20,null,null,15,7]",
        "output": "3",
        "explanation": "Longest root-to-leaf path depth is 3."
      },
      {
        "input": "[1,null,2]",
        "output": "2",
        "explanation": "Depth is 2."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "[3,9,20,null,null,15,7]",
        "output": "3",
        "isHidden": true
      },
      {
        "input": "[1,null,2]",
        "output": "2",
        "isHidden": true
      },
      {
        "input": "[]",
        "output": "0",
        "isHidden": true
      }
    ],
    "hints": [
      "maxDepth(root) = 1 + max(maxDepth(root.left), maxDepth(root.right))."
    ],
    "editorial": {
      "approach": "Optimal Approach for Maximum Depth of Binary Tree",
      "solutionMarkdown": "### Optimal Solution\n\nRecursive post-order DFS: return 0 if null else 1 + max(left, right).\n\n### Complexity\n- Time: O(N), Space: O(H)",
      "timeComplexity": "O(N)",
      "spaceComplexity": "O(H)"
    },
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0
  },
  {
    "title": "Find the Maximum-Frequency Character",
    "slug": "maximum-frequency-character",
    "description": "Given a string `s`, find the character that occurs with the highest frequency. If there is a tie, return the character that appears earliest in the string.\n\n### Example 1:\n```\nInput: \"abcccba\"\nOutput: \"c\"\nExplanation: 'c' appears 3 times, which is the highest frequency.\n```\n\n### Example 2:\n```\nInput: \"aabb\"\nOutput: \"a\"\nExplanation: 'a' and 'b' both appear 2 times, 'a' appears earliest.\n```",
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
        "company": "TCS",
        "yearReported": 2025,
        "verified": true,
        "frequencyCount": 45,
        "sourceNote": "TCS Interview Question #9"
      },
      {
        "company": "Wipro",
        "frequencyCount": 7,
        "yearReported": 2025
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
        "boilerplate": "def maximumFrequencyCharacter(*args):\n    # TODO: Implement solution for Find the Maximum-Frequency Character\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = maximumFrequencyCharacter(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(maximumFrequencyCharacter(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function maximumFrequencyCharacter(...args) {\n    // TODO: Implement solution for Find the Maximum-Frequency Character\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(maximumFrequencyCharacter(...parsed)));\n    } catch (e) {\n        console.log(maximumFrequencyCharacter(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Find the Maximum-Frequency Character\n        // TODO: Read input from cin and implement solution\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        // TODO: Read from br and implement solution\n    }\n}\n"
      }
    ],
    "sampleTestCases": [
      {
        "input": "\"abcccba\"",
        "output": "\"c\"",
        "explanation": "'c' appears 3 times, which is the highest frequency."
      },
      {
        "input": "\"aabb\"",
        "output": "\"a\"",
        "explanation": "'a' and 'b' both appear 2 times, 'a' appears earliest."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "\"abcccba\"",
        "output": "\"c\"",
        "isHidden": true
      },
      {
        "input": "\"aabb\"",
        "output": "\"a\"",
        "isHidden": true
      },
      {
        "input": "\"z\"",
        "output": "\"z\"",
        "isHidden": true
      }
    ],
    "hints": [
      "Use a frequency array or hash map, and track maximum count with first appearance order."
    ],
    "editorial": {
      "approach": "Optimal Approach for Find the Maximum-Frequency Character",
      "solutionMarkdown": "### Optimal Solution\n\nCount frequencies using hash map. Find character maximizing frequency; preserve first-seen order on ties.\n\n### Complexity\n- Time: O(N), Space: O(1)",
      "timeComplexity": "O(N)",
      "spaceComplexity": "O(1)"
    },
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0
  },
  {
    "title": "Maximum Independent Set in a Tree",
    "slug": "maximum-independent-set-in-a-tree",
    "description": "Given a tree of $N$ nodes labeled $0$ to $N-1$, find the size of the Maximum Independent Set (MIS). A subset of nodes is an independent set if no two nodes in the subset are adjacent (connected by an edge).\\n\\n### Example 1:\\n```\\nInput:\\n5 4\\n0 1\\n0 2\\n1 3\\n1 4\\nOutput: 3\\nExplanation: The subset {0, 3, 4} or {2, 3, 4} has size 3 and no two nodes are adjacent.\\n```\\n\\n### Example 2:\\n```\\nInput:\\n3 2\\n0 1\\n1 2\\nOutput: 2\\nExplanation: Independent set {0, 2} has size 2.\\n```\\n\\n### Constraints:\\n- $1 \\le N \\le 10^5$\\n- Graph is a valid tree with $N-1$ edges.",
    "difficulty": "HARD",
    "patterns": [
      "Tree DP",
      "DFS",
      "Dynamic Programming"
    ],
    "topics": [
      "Tree",
      "Dynamic Programming",
      "Depth-First Search"
    ],
    "sampleTestCases": [
      {
        "input": "5 4\n0 1\n0 2\n1 3\n1 4",
        "output": "3",
        "explanation": "MIS size is 3."
      },
      {
        "input": "3 2\n0 1\n1 2",
        "output": "2",
        "explanation": "{0, 2} is maximum independent set."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "1 0",
        "output": "1"
      },
      {
        "input": "2 1\n0 1",
        "output": "1"
      },
      {
        "input": "4 3\n0 1\n0 2\n0 3",
        "output": "3"
      }
    ],
    "hints": [
      "Use Tree DP: for each node, compute (inc, exc) where inc includes the node and exc excludes it.",
      "If node is included, children cannot be included. If excluded, children may or may not be included."
    ],
    "editorial": {
      "approach": "Tree Dynamic Programming (Include/Exclude State)",
      "solutionMarkdown": "`inc[u] = 1 + sum(exc[v])`, `exc[u] = sum(max(inc[v], exc[v]))`.",
      "timeComplexity": "O(N)",
      "spaceComplexity": "O(N)"
    },
    "category": "DSA",
    "starterCode": [
      {
        "language": "python",
        "boilerplate": "def maximumIndependentSetInATree(*args):\n    # TODO: Implement solution for Maximum Independent Set in a Tree\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = maximumIndependentSetInATree(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(maximumIndependentSetInATree(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function maximumIndependentSetInATree(...args) {\n    // TODO: Implement solution for Maximum Independent Set in a Tree\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try {\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(maximumIndependentSetInATree(...parsed)));\n    } catch (e) {\n        console.log(maximumIndependentSetInATree(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // TODO: Read input from cin and implement solution for Maximum Independent Set in a Tree\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        // TODO: Read from br and implement solution for Maximum Independent Set in a Tree\n    }\n}\n"
      }
    ],
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0,
    "companyTags": [
      {
        "company": "Flipkart",
        "frequencyCount": 7,
        "yearReported": 2024
      }
    ]
  },
  {
    "title": "Maximum Level Sum of a Binary Tree",
    "slug": "maximum-level-sum-of-a-binary-tree",
    "description": "Given the `root` of a binary tree, the level of its root is `1`, the level of its children is `2`, and so on. Return the **smallest** level `x` such that the sum of all the values of nodes at level `x` is **maximal**.\n\n### Example 1:\n```\nInput: [1,7,0,7,-8,null,null]\nOutput: 2\nExplanation: Level 1 sum = 1, Level 2 sum = 7 + 0 = 7, Level 3 sum = 7 + -8 = -1. Max sum is at level 2.\n```\n\n### Example 2:\n```\nInput: [989,null,10250,98693,-89388,null,null,null,-32127]\nOutput: 2\nExplanation: Level 2 has maximum sum.\n```",
    "difficulty": "MEDIUM",
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
        "boilerplate": "def maximumLevelSumOfABinaryTree(*args):\n    # TODO: Implement solution for Maximum Level Sum of a Binary Tree\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = maximumLevelSumOfABinaryTree(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(maximumLevelSumOfABinaryTree(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function maximumLevelSumOfABinaryTree(...args) {\n    // TODO: Implement solution for Maximum Level Sum of a Binary Tree\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(maximumLevelSumOfABinaryTree(...parsed)));\n    } catch (e) {\n        console.log(maximumLevelSumOfABinaryTree(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Maximum Level Sum of a Binary Tree\n        // TODO: Read input from cin and implement solution\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        // TODO: Read from br and implement solution\n    }\n}\n"
      }
    ],
    "sampleTestCases": [
      {
        "input": "[1,7,0,7,-8,null,null]",
        "output": "2",
        "explanation": "Level 1 sum = 1, Level 2 sum = 7 + 0 = 7, Level 3 sum = 7 + -8 = -1. Max sum is at level 2."
      },
      {
        "input": "[989,null,10250,98693,-89388,null,null,null,-32127]",
        "output": "2",
        "explanation": "Level 2 has maximum sum."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "[1,7,0,7,-8,null,null]",
        "output": "2",
        "isHidden": true
      },
      {
        "input": "[989,null,10250,98693,-89388,null,null,null,-32127]",
        "output": "2",
        "isHidden": true
      },
      {
        "input": "[-100]",
        "output": "1",
        "isHidden": true
      }
    ],
    "hints": [
      "Perform level-order traversal (BFS) with a queue, computing sum at each depth."
    ],
    "editorial": {
      "approach": "Optimal Approach for Maximum Level Sum of a Binary Tree",
      "solutionMarkdown": "### Optimal Solution\n\nStandard BFS level by level. Sum nodes at each level; track maximum sum and lowest level index.\n\n### Complexity\n- Time: O(N), Space: O(W) where W is max width",
      "timeComplexity": "O(N)",
      "spaceComplexity": "O(W) where W is max width"
    },
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0
  },
  {
    "title": "Maximum of Two Numbers Without if-else",
    "slug": "maximum-of-two-numbers-without-if-else",
    "description": "Given two 32-bit signed integers $a$ and $b$, find the maximum of the two numbers without using any `if-else` statements, ternary operators, or comparison operators ($<, >, \\le, \\ge, ==, !=$).\\n\\n### Example 1:\\n```\\nInput: a = 5, b = 10\\nOutput: 10\\nExplanation: 10 is strictly greater than 5.\\n```\\n\\n### Example 2:\\n```\\nInput: a = -3, b = -8\\nOutput: -3\\nExplanation: -3 > -8.\\n```\\n\\n### Constraints:\\n- $-2^{31} \\le a, b \\le 2^{31} - 1$",
    "difficulty": "EASY",
    "patterns": [
      "Bit Manipulation",
      "Math"
    ],
    "topics": [
      "Math",
      "Bit Manipulation"
    ],
    "sampleTestCases": [
      {
        "input": "a = 5, b = 10",
        "output": "10",
        "explanation": "Max without conditionals."
      },
      {
        "input": "a = -3, b = -8",
        "output": "-3",
        "explanation": "Negative numbers."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "a = 0, b = 0",
        "output": "0"
      },
      {
        "input": "a = 2147483647, b = -2147483648",
        "output": "2147483647"
      },
      {
        "input": "a = -10, b = 0",
        "output": "0"
      }
    ],
    "hints": [
      "Examine the sign bit of `a - b` (or use sign differences to prevent overflow).",
      "max(a, b) = a * k + b * (1 - k) where k is 1 if a >= b and 0 otherwise."
    ],
    "editorial": {
      "approach": "Sign Bit Extraction via Bit Shifts",
      "solutionMarkdown": "Extract sign bit with arithmetic right shift `>> 31` and avoid overflow by handling opposite signs first.",
      "timeComplexity": "O(1)",
      "spaceComplexity": "O(1)"
    },
    "category": "DSA",
    "starterCode": [
      {
        "language": "python",
        "boilerplate": "def maximumOfTwoNumbersWithoutIfElse(*args):\n    # TODO: Implement solution for Maximum of Two Numbers Without if-else\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = maximumOfTwoNumbersWithoutIfElse(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(maximumOfTwoNumbersWithoutIfElse(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function maximumOfTwoNumbersWithoutIfElse(...args) {\n    // TODO: Implement solution for Maximum of Two Numbers Without if-else\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try {\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(maximumOfTwoNumbersWithoutIfElse(...parsed)));\n    } catch (e) {\n        console.log(maximumOfTwoNumbersWithoutIfElse(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // TODO: Read input from cin and implement solution for Maximum of Two Numbers Without if-else\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        // TODO: Read from br and implement solution for Maximum of Two Numbers Without if-else\n    }\n}\n"
      }
    ],
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0,
    "companyTags": [
      {
        "company": "Oracle",
        "frequencyCount": 7,
        "yearReported": 2024
      }
    ]
  },
  {
    "title": "Maximum Points Coverage with a Rectangle",
    "slug": "maximum-points-coverage-with-a-rectangle",
    "description": "Given `n` points on a 2D plane and dimensions `(w, h)` of a movable rectangle, find the maximum number of points that can be covered by the rectangle simultaneously.\n\n### Example 1:\n```\nInput: [[1,1],[2,2],[3,3],[4,4]]\n2\n2\nOutput: 3\nExplanation: Points [1,1], [2,2], [3,3] fit in a 2x2 box.\n```\n\n### Example 2:\n```\nInput: [[0,0],[10,10]]\n1\n1\nOutput: 1\nExplanation: Points are too far apart to both fit.\n```",
    "difficulty": "HARD",
    "category": "DSA",
    "patterns": [
      "Two Pointers",
      "Sorting",
      "Sliding Window",
      "Binary Search"
    ],
    "topics": [
      "Two Pointers",
      "Sorting",
      "Sliding Window",
      "Binary Search"
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
        "boilerplate": "def maximumPointsCoverageWithARectangle(*args):\n    # TODO: Implement solution for Maximum Points Coverage with a Rectangle\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = maximumPointsCoverageWithARectangle(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(maximumPointsCoverageWithARectangle(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function maximumPointsCoverageWithARectangle(...args) {\n    // TODO: Implement solution for Maximum Points Coverage with a Rectangle\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(maximumPointsCoverageWithARectangle(...parsed)));\n    } catch (e) {\n        console.log(maximumPointsCoverageWithARectangle(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Maximum Points Coverage with a Rectangle\n        // TODO: Read input from cin and implement solution\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        // TODO: Read from br and implement solution\n    }\n}\n"
      }
    ],
    "sampleTestCases": [
      {
        "input": "[[1,1],[2,2],[3,3],[4,4]]\n2\n2",
        "output": "3",
        "explanation": "Points [1,1], [2,2], [3,3] fit in a 2x2 box."
      },
      {
        "input": "[[0,0],[10,10]]\n1\n1",
        "output": "1",
        "explanation": "Points are too far apart to both fit."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "[[1,1],[2,2],[3,3],[4,4]]\n2\n2",
        "output": "3",
        "isHidden": true
      },
      {
        "input": "[[0,0],[10,10]]\n1\n1",
        "output": "1",
        "isHidden": true
      },
      {
        "input": "[[0,0],[0,1],[0,2]]\n0\n2",
        "output": "3",
        "isHidden": true
      }
    ],
    "hints": [
      "Sort points by x-coordinate and use sliding window or 2D range trees."
    ],
    "editorial": {
      "approach": "Optimal Approach for Maximum Points Coverage with a Rectangle",
      "solutionMarkdown": "### Optimal Solution\n\nSort by X coordinate. Use sliding window on X where window width <= w, and query max points within height h along Y.\n\n### Complexity\n- Time: O(N log N), Space: O(N)",
      "timeComplexity": "O(N log N)",
      "spaceComplexity": "O(N)"
    },
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0
  },
  {
    "title": "Maximum Product Subarray",
    "slug": "maximum-product-subarray",
    "description": "Given an integer array `nums`, find a subarray that has the largest product, and return *the product*.\n\n### Example 1:\n```\nInput: [2,3,-2,4]\nOutput: 6\nExplanation: [2,3] has the largest product 6.\n```\n\n### Example 2:\n```\nInput: [-2,0,-1]\nOutput: 0\nExplanation: Max product is 0.\n```",
    "difficulty": "MEDIUM",
    "category": "DP",
    "patterns": [
      "Dynamic Programming",
      "Array"
    ],
    "topics": [
      "Dynamic Programming",
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
        "sourceNote": "Accenture Practice Bank #20"
      },
      {
        "company": "Infosys",
        "yearReported": 2025,
        "verified": true,
        "frequencyCount": 42,
        "sourceNote": "Infosys Interview Question #12"
      },
      {
        "company": "Capgemini",
        "frequencyCount": 7,
        "yearReported": 2024
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
        "boilerplate": "def maximumProductSubarray(*args):\n    # TODO: Implement solution for Maximum Product Subarray\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = maximumProductSubarray(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(maximumProductSubarray(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function maximumProductSubarray(...args) {\n    // TODO: Implement solution for Maximum Product Subarray\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(maximumProductSubarray(...parsed)));\n    } catch (e) {\n        console.log(maximumProductSubarray(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Maximum Product Subarray\n        // TODO: Read input from cin and implement solution\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        // TODO: Read from br and implement solution\n    }\n}\n"
      }
    ],
    "sampleTestCases": [
      {
        "input": "[2,3,-2,4]",
        "output": "6",
        "explanation": "[2,3] has the largest product 6."
      },
      {
        "input": "[-2,0,-1]",
        "output": "0",
        "explanation": "Max product is 0."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "[2,3,-2,4]",
        "output": "6",
        "isHidden": true
      },
      {
        "input": "[-2,0,-1]",
        "output": "0",
        "isHidden": true
      },
      {
        "input": "[-2,3,-4]",
        "output": "24",
        "isHidden": true
      }
    ],
    "hints": [
      "Maintain both max_prod and min_prod because multiplying negative by negative flips to positive."
    ],
    "editorial": {
      "approach": "Optimal Approach for Maximum Product Subarray",
      "solutionMarkdown": "### Optimal Solution\n\nAt each index, if nums[i] < 0 swap max_prod and min_prod, then update max_prod = max(nums[i], max_prod * nums[i]).\n\n### Complexity\n- Time: O(N), Space: O(1)",
      "timeComplexity": "O(N)",
      "spaceComplexity": "O(1)"
    },
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0
  },
  {
    "title": "Maximum Profit from Non-Overlapping Time Slots",
    "slug": "maximum-profit-from-non-overlapping-time-slots",
    "description": "Given $N$ time slots where each slot has a start time, end time, and profit, select a subset of non-overlapping time slots to maximize total profit. If a slot ends at time $t$, another slot can start at time $t$.\\n\\n### Example 1:\\n```\\nInput:\\n4\\n1 3 50\\n2 4 10\\n3 5 40\\n3 6 70\\nOutput: 120\\nExplanation: Select slots (1, 3) profit 50 and (3, 6) profit 70 for total 120.\\n```\\n\\n### Example 2:\\n```\\nInput:\\n3\\n1 2 20\\n2 3 30\\n3 4 40\\nOutput: 90\\nExplanation: All slots are mutually non-overlapping: 20 + 30 + 40 = 90.\\n```\\n\\n### Constraints:\\n- $1 \\le N \\le 5 \\times 10^4$\\n- $0 \\le start < end \\le 10^9$\\n- $1 \\le profit \\le 10^5$",
    "difficulty": "HARD",
    "patterns": [
      "Dynamic Programming",
      "Binary Search",
      "Intervals"
    ],
    "topics": [
      "Array",
      "Binary Search",
      "Dynamic Programming",
      "Sorting"
    ],
    "sampleTestCases": [
      {
        "input": "4\n1 3 50\n2 4 10\n3 5 40\n3 6 70",
        "output": "120",
        "explanation": "Optimal choice yields 120."
      },
      {
        "input": "3\n1 2 20\n2 3 30\n3 4 40",
        "output": "90",
        "explanation": "Non-overlapping chain."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "1\n5 10 100",
        "output": "100"
      },
      {
        "input": "2\n1 5 10\n2 3 20",
        "output": "20"
      },
      {
        "input": "3\n1 4 30\n2 5 50\n4 6 40",
        "output": "70"
      }
    ],
    "hints": [
      "Sort intervals by ending time.",
      "Use DP with binary search for each interval's compatible predecessor."
    ],
    "editorial": {
      "approach": "Weighted Interval Scheduling DP + Binary Search",
      "solutionMarkdown": "Sort by end time. Binary search latest non-overlapping interval.",
      "timeComplexity": "O(N log N)",
      "spaceComplexity": "O(N)"
    },
    "category": "DSA",
    "starterCode": [
      {
        "language": "python",
        "boilerplate": "def maximumProfitFromNonOverlappingTimeSlots(*args):\n    # TODO: Implement solution for Maximum Profit from Non-Overlapping Time Slots\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = maximumProfitFromNonOverlappingTimeSlots(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(maximumProfitFromNonOverlappingTimeSlots(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function maximumProfitFromNonOverlappingTimeSlots(...args) {\n    // TODO: Implement solution for Maximum Profit from Non-Overlapping Time Slots\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try {\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(maximumProfitFromNonOverlappingTimeSlots(...parsed)));\n    } catch (e) {\n        console.log(maximumProfitFromNonOverlappingTimeSlots(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // TODO: Read input from cin and implement solution for Maximum Profit from Non-Overlapping Time Slots\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        // TODO: Read from br and implement solution for Maximum Profit from Non-Overlapping Time Slots\n    }\n}\n"
      }
    ],
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0,
    "companyTags": [
      {
        "company": "Flipkart",
        "frequencyCount": 7,
        "yearReported": 2024
      }
    ]
  },
  {
    "title": "Maximum Profit in Job Scheduling",
    "slug": "maximum-profit-in-job-scheduling",
    "description": "We have $n$ jobs, where every job is scheduled to be done from `startTime[i]` to `endTime[i]`, obtaining a profit of `profit[i]`.\\n\\nYou're given the `startTime`, `endTime` and `profit` arrays, return the maximum profit you can take such that there are no two jobs in the subset with overlapping time range.\\n\\nIf you choose a job that ends at time $X$ you will be able to start another job that starts at time $X$.\\n\\n### Example 1:\\n```\\nInput:\\nstartTime = [1,2,3,3]\\nendTime = [3,4,5,6]\\nprofit = [50,10,40,70]\\nOutput: 120\\nExplanation: The subset chosen is the first and fourth job with profit 50 + 70 = 120.\\n```\\n\\n### Example 2:\\n```\\nInput:\\nstartTime = [1,2,3,4,6]\\nendTime = [3,5,10,6,9]\\nprofit = [20,20,100,70,60]\\nOutput: 150\\nExplanation: The subset chosen is jobs 1, 4, 5 with profit 20 + 70 + 60 = 150.\\n```\\n\\n### Constraints:\\n- $1 \\le n \\le 5 \\times 10^4$\\n- $1 \\le startTime[i] < endTime[i] \\le 10^9$\\n- $1 \\le profit[i] \\le 10^4$",
    "difficulty": "HARD",
    "category": "DSA",
    "patterns": [
      "Dynamic Programming",
      "Binary Search",
      "Intervals"
    ],
    "topics": [
      "Array",
      "Binary Search",
      "Dynamic Programming",
      "Sorting"
    ],
    "companyTags": [
      {
        "company": "Capgemini",
        "frequencyCount": 5,
        "yearReported": 2024
      },
      {
        "company": "Flipkart",
        "frequencyCount": 7,
        "yearReported": 2024
      }
    ],
    "sampleTestCases": [
      {
        "input": "startTime = [1,2,3,3]\nendTime = [3,4,5,6]\nprofit = [50,10,40,70]",
        "output": "120",
        "explanation": "Jobs 1 and 4 yield max profit 120."
      },
      {
        "input": "startTime = [1,2,3,4,6]\nendTime = [3,5,10,6,9]\nprofit = [20,20,100,70,60]",
        "output": "150",
        "explanation": "Jobs 1, 4, 5 yield 150."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "startTime = [1,1,1]\nendTime = [2,3,4]\nprofit = [5,6,4]",
        "output": "6"
      },
      {
        "input": "startTime = [1]\nendTime = [2]\nprofit = [10]",
        "output": "10"
      },
      {
        "input": "startTime = [1,2,3]\nendTime = [2,3,4]\nprofit = [10,20,30]",
        "output": "60"
      }
    ],
    "hints": [
      "Sort jobs by end time.",
      "Use DP where dp[i] is the maximum profit considering first i jobs.",
      "Use binary search to find the latest job that finishes before the current job starts."
    ],
    "editorial": {
      "approach": "DP with Binary Search (Weighted Interval Scheduling)",
      "solutionMarkdown": "### DP + Binary Search\nSort jobs by `endTime`. For each job $i$, use binary search on earlier end times to find the latest non-overlapping job, then transition `dp[i] = max(dp[i-1], job.profit + dp[prev])`.",
      "timeComplexity": "O(N log N)",
      "spaceComplexity": "O(N)"
    },
    "starterCode": [
      {
        "language": "python",
        "boilerplate": "def maximumProfitInJobScheduling(*args):\n    # TODO: Implement solution for Maximum Profit in Job Scheduling\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = maximumProfitInJobScheduling(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(maximumProfitInJobScheduling(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function maximumProfitInJobScheduling(...args) {\n    // TODO: Implement solution for Maximum Profit in Job Scheduling\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try {\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(maximumProfitInJobScheduling(...parsed)));\n    } catch (e) {\n        console.log(maximumProfitInJobScheduling(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // TODO: Read input from cin and implement solution for Maximum Profit in Job Scheduling\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        // TODO: Read from br and implement solution for Maximum Profit in Job Scheduling\n    }\n}\n"
      }
    ],
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0
  },
  {
    "title": "Maximum Subarray",
    "slug": "maximum-subarray",
    "description": "Given an integer array `nums`, find the subarray with the largest sum, and return *its sum*.\n\n### Example 1:\n```\nInput: [-2,1,-3,4,-1,2,1,-5,4]\nOutput: 6\nExplanation: The subarray [4,-1,2,1] has the largest sum 6.\n```\n\n### Example 2:\n```\nInput: [1]\nOutput: 1\nExplanation: Single element subarray.\n```",
    "difficulty": "MEDIUM",
    "category": "DP",
    "patterns": [
      "Dynamic Programming",
      "Array",
      "Divide and Conquer"
    ],
    "topics": [
      "Dynamic Programming",
      "Array",
      "Divide and Conquer"
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
        "sourceNote": "Accenture Practice Bank #5"
      },
      {
        "company": "Infosys",
        "yearReported": 2025,
        "verified": true,
        "frequencyCount": 42,
        "sourceNote": "Infosys Interview Question #5"
      },
      {
        "company": "TCS",
        "yearReported": 2025,
        "verified": false,
        "frequencyCount": 30,
        "sourceNote": "TCS Practice Bank #20"
      },
      {
        "company": "Capgemini",
        "frequencyCount": 7,
        "yearReported": 2024
      },
      {
        "company": "Wipro",
        "frequencyCount": 7,
        "yearReported": 2025
      },
      {
        "company": "Flipkart",
        "frequencyCount": 7,
        "yearReported": 2024
      },
      {
        "company": "Oracle",
        "frequencyCount": 7,
        "yearReported": 2024
      },
      {
        "company": "Adobe",
        "frequencyCount": 7,
        "yearReported": 2025
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
        "boilerplate": "def maximumSubarray(*args):\n    # TODO: Implement solution for Maximum Subarray\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = maximumSubarray(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(maximumSubarray(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function maximumSubarray(...args) {\n    // TODO: Implement solution for Maximum Subarray\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(maximumSubarray(...parsed)));\n    } catch (e) {\n        console.log(maximumSubarray(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Maximum Subarray\n        // TODO: Read input from cin and implement solution\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        // TODO: Read from br and implement solution\n    }\n}\n"
      }
    ],
    "sampleTestCases": [
      {
        "input": "[-2,1,-3,4,-1,2,1,-5,4]",
        "output": "6",
        "explanation": "The subarray [4,-1,2,1] has the largest sum 6."
      },
      {
        "input": "[1]",
        "output": "1",
        "explanation": "Single element subarray."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "[-2,1,-3,4,-1,2,1,-5,4]",
        "output": "6",
        "isHidden": true
      },
      {
        "input": "[1]",
        "output": "1",
        "isHidden": true
      },
      {
        "input": "[5,4,-1,7,8]",
        "output": "23",
        "isHidden": true
      },
      {
        "input": "[-1]",
        "output": "-1",
        "isHidden": true
      }
    ],
    "hints": [
      "Kadane's algorithm: curr_sum = max(num, curr_sum + num)."
    ],
    "editorial": {
      "approach": "Optimal Approach for Maximum Subarray",
      "solutionMarkdown": "### Optimal Solution\n\nKadane's linear algorithm tracking local and global max sum.\n\n### Complexity\n- Time: O(N), Space: O(1)",
      "timeComplexity": "O(N)",
      "spaceComplexity": "O(1)"
    },
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0
  },
  {
    "title": "Maximum/Minimum Sum Subarray of Size K",
    "slug": "maximum-sum-subarray-of-size-k",
    "description": "Given an array of integers `nums` and an integer `k`, find the **maximum** contiguous subarray sum among all subarrays of exact size `k`.\n\n### Example 1:\n```\nInput: [2,1,5,1,3,2]\n3\nOutput: 9\nExplanation: Subarray [5, 1, 3] gives maximum sum 9.\n```\n\n### Example 2:\n```\nInput: [2,3,4,1,5]\n2\nOutput: 7\nExplanation: Subarray [3, 4] gives maximum sum 7.\n```",
    "difficulty": "EASY",
    "category": "DSA",
    "patterns": [
      "Array",
      "Sliding Window"
    ],
    "topics": [
      "Array",
      "Sliding Window"
    ],
    "companyTags": [
      {
        "company": "Accenture",
        "yearReported": 2025,
        "verified": true,
        "frequencyCount": 40,
        "sourceNote": "Accenture Interview Question #44 (R [S2])"
      },
      {
        "company": "Wipro",
        "frequencyCount": 7,
        "yearReported": 2025
      },
      {
        "company": "Flipkart",
        "frequencyCount": 7,
        "yearReported": 2024
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
        "boilerplate": "def maximumSumSubarrayOfSizeK(*args):\n    # TODO: Implement solution for Maximum/Minimum Sum Subarray of Size K\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = maximumSumSubarrayOfSizeK(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(maximumSumSubarrayOfSizeK(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function maximumSumSubarrayOfSizeK(...args) {\n    // TODO: Implement solution for Maximum/Minimum Sum Subarray of Size K\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(maximumSumSubarrayOfSizeK(...parsed)));\n    } catch (e) {\n        console.log(maximumSumSubarrayOfSizeK(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Maximum/Minimum Sum Subarray of Size K\n        // TODO: Read input from cin and implement solution\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        // TODO: Read from br and implement solution\n    }\n}\n"
      }
    ],
    "sampleTestCases": [
      {
        "input": "[2,1,5,1,3,2]\n3",
        "output": "9",
        "explanation": "Subarray [5, 1, 3] gives maximum sum 9."
      },
      {
        "input": "[2,3,4,1,5]\n2",
        "output": "7",
        "explanation": "Subarray [3, 4] gives maximum sum 7."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "[2,1,5,1,3,2]\n3",
        "output": "9",
        "isHidden": true
      },
      {
        "input": "[2,3,4,1,5]\n2",
        "output": "7",
        "isHidden": true
      },
      {
        "input": "[1,2]\n1",
        "output": "2",
        "isHidden": true
      }
    ],
    "hints": [
      "Fixed sliding window of size k. Add arriving element and drop departing element."
    ],
    "editorial": {
      "approach": "Optimal Approach for Maximum/Minimum Sum Subarray of Size K",
      "solutionMarkdown": "### Optimal Solution\n\nInitialize window_sum with first k elements. Advance window one step at a time, updating max_sum.\n\n### Complexity\n- Time: O(N), Space: O(1)",
      "timeComplexity": "O(N)",
      "spaceComplexity": "O(1)"
    },
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0
  },
  {
    "title": "Median of Two Sorted Arrays",
    "slug": "median-of-two-sorted-arrays",
    "description": "Given two sorted arrays `nums1` and `nums2` of size `m` and `n` respectively, return the **median** of the two sorted arrays.\n\nThe overall run time complexity should be `O(log (m+n))`.\n\n### Example 1:\n```\nInput: [1,3]\n[2]\nOutput: 2.00000\nExplanation: Merged array = [1,2,3] and median is 2.\n```\n\n### Example 2:\n```\nInput: [1,2]\n[3,4]\nOutput: 2.50000\nExplanation: Merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.\n```",
    "difficulty": "HARD",
    "category": "DSA",
    "patterns": [
      "Binary Search",
      "Divide and Conquer",
      "Array"
    ],
    "topics": [
      "Binary Search",
      "Divide and Conquer",
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
        "sourceNote": "Accenture Practice Bank #71"
      },
      {
        "company": "Infosys",
        "yearReported": 2025,
        "verified": true,
        "frequencyCount": 42,
        "sourceNote": "Infosys Interview Question #36"
      },
      {
        "company": "Capgemini",
        "frequencyCount": 7,
        "yearReported": 2024
      },
      {
        "company": "Oracle",
        "frequencyCount": 7,
        "yearReported": 2024
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
        "boilerplate": "def medianOfTwoSortedArrays(*args):\n    # TODO: Implement solution for Median of Two Sorted Arrays\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = medianOfTwoSortedArrays(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(medianOfTwoSortedArrays(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function medianOfTwoSortedArrays(...args) {\n    // TODO: Implement solution for Median of Two Sorted Arrays\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(medianOfTwoSortedArrays(...parsed)));\n    } catch (e) {\n        console.log(medianOfTwoSortedArrays(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Median of Two Sorted Arrays\n        // TODO: Read input from cin and implement solution\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        // TODO: Read from br and implement solution\n    }\n}\n"
      }
    ],
    "sampleTestCases": [
      {
        "input": "[1,3]\n[2]",
        "output": "2.00000",
        "explanation": "Merged array = [1,2,3] and median is 2."
      },
      {
        "input": "[1,2]\n[3,4]",
        "output": "2.50000",
        "explanation": "Merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "[1,3]\n[2]",
        "output": "2.00000",
        "isHidden": true
      },
      {
        "input": "[1,2]\n[3,4]",
        "output": "2.50000",
        "isHidden": true
      },
      {
        "input": "[0,0]\n[0,0]",
        "output": "0.00000",
        "isHidden": true
      },
      {
        "input": "[]\n[1]",
        "output": "1.00000",
        "isHidden": true
      }
    ],
    "hints": [
      "Binary search on the partition of the smaller array."
    ],
    "editorial": {
      "approach": "Optimal Approach for Median of Two Sorted Arrays",
      "solutionMarkdown": "### Optimal Solution\n\nPartition both arrays such that left half has (m+n+1)//2 elements and maxLeft <= minRight.\n\n### Complexity\n- Time: O(log(min(M, N))), Space: O(1)",
      "timeComplexity": "O(log(min(M",
      "spaceComplexity": "N)))"
    },
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0
  },
  {
    "title": "Meeting Rooms II",
    "slug": "meeting-rooms-ii",
    "description": "Given an array of meeting time intervals `intervals` where `intervals[i] = [starti, endi]`, return *the minimum number of conference rooms required*.\n\n### Example 1:\n```\nInput: [[0,30],[5,10],[15,20]]\nOutput: 2\nExplanation: [0,30] overlaps with [5,10] and [15,20], requiring 2 conference rooms.\n```\n\n### Example 2:\n```\nInput: [[7,10],[2,4]]\nOutput: 1\nExplanation: Meetings do not overlap, only 1 room needed.\n```",
    "difficulty": "MEDIUM",
    "category": "DSA",
    "patterns": [
      "Heaps / Priority Queue",
      "Intervals",
      "Sorting"
    ],
    "topics": [
      "Heaps / Priority Queue",
      "Intervals",
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
        "company": "Infosys",
        "yearReported": 2025,
        "verified": true,
        "frequencyCount": 42,
        "sourceNote": "Infosys Interview Question #43"
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
        "boilerplate": "def meetingRoomsIi(*args):\n    # TODO: Implement solution for Meeting Rooms II\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = meetingRoomsIi(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(meetingRoomsIi(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function meetingRoomsIi(...args) {\n    // TODO: Implement solution for Meeting Rooms II\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(meetingRoomsIi(...parsed)));\n    } catch (e) {\n        console.log(meetingRoomsIi(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Meeting Rooms II\n        // TODO: Read input from cin and implement solution\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        // TODO: Read from br and implement solution\n    }\n}\n"
      }
    ],
    "sampleTestCases": [
      {
        "input": "[[0,30],[5,10],[15,20]]",
        "output": "2",
        "explanation": "[0,30] overlaps with [5,10] and [15,20], requiring 2 conference rooms."
      },
      {
        "input": "[[7,10],[2,4]]",
        "output": "1",
        "explanation": "Meetings do not overlap, only 1 room needed."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "[[0,30],[5,10],[15,20]]",
        "output": "2",
        "isHidden": true
      },
      {
        "input": "[[7,10],[2,4]]",
        "output": "1",
        "isHidden": true
      },
      {
        "input": "[[1,5],[8,9],[8,9]]",
        "output": "2",
        "isHidden": true
      }
    ],
    "hints": [
      "Sort intervals by start time. Use a Min-Heap of meeting end times."
    ],
    "editorial": {
      "approach": "Optimal Approach for Meeting Rooms II",
      "solutionMarkdown": "### Optimal Solution\n\nMin-heap tracks earliest ending meeting. If current start >= heap root, room reused; else allocate new room.\n\n### Complexity\n- Time: O(N log N), Space: O(N)",
      "timeComplexity": "O(N log N)",
      "spaceComplexity": "O(N)"
    },
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0
  },
  {
    "title": "Merge Intervals",
    "slug": "merge-intervals",
    "description": "Given an array of `intervals` where `intervals[i] = [starti, endi]`, merge all overlapping intervals, and return *an array of the non-overlapping intervals that cover all the intervals in the input*.\n\n### Example 1:\n```\nInput: [[1,3],[2,6],[8,10],[15,18]]\nOutput: [[1, 6], [8, 10], [15, 18]]\nExplanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].\n```\n\n### Example 2:\n```\nInput: [[1,4],[4,5]]\nOutput: [[1, 5]]\nExplanation: Intervals [1,4] and [4,5] are considered overlapping.\n```",
    "difficulty": "MEDIUM",
    "category": "DSA",
    "patterns": [
      "Sorting",
      "Intervals"
    ],
    "topics": [
      "Sorting",
      "Intervals"
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
        "sourceNote": "Accenture Practice Bank #67"
      },
      {
        "company": "Infosys",
        "yearReported": 2025,
        "verified": true,
        "frequencyCount": 42,
        "sourceNote": "Infosys Interview Question #8"
      },
      {
        "company": "TCS",
        "yearReported": 2025,
        "verified": false,
        "frequencyCount": 30,
        "sourceNote": "TCS Practice Bank #48"
      },
      {
        "company": "Capgemini",
        "frequencyCount": 7,
        "yearReported": 2024
      },
      {
        "company": "Wipro",
        "frequencyCount": 7,
        "yearReported": 2025
      },
      {
        "company": "Flipkart",
        "frequencyCount": 7,
        "yearReported": 2024
      },
      {
        "company": "Oracle",
        "frequencyCount": 7,
        "yearReported": 2024
      },
      {
        "company": "Adobe",
        "frequencyCount": 7,
        "yearReported": 2025
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
        "boilerplate": "def mergeIntervals(*args):\n    # TODO: Implement solution for Merge Intervals\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = mergeIntervals(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(mergeIntervals(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function mergeIntervals(...args) {\n    // TODO: Implement solution for Merge Intervals\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(mergeIntervals(...parsed)));\n    } catch (e) {\n        console.log(mergeIntervals(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Merge Intervals\n        // TODO: Read input from cin and implement solution\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        // TODO: Read from br and implement solution\n    }\n}\n"
      }
    ],
    "sampleTestCases": [
      {
        "input": "[[1,3],[2,6],[8,10],[15,18]]",
        "output": "[[1, 6], [8, 10], [15, 18]]",
        "explanation": "Since intervals [1,3] and [2,6] overlap, merge them into [1,6]."
      },
      {
        "input": "[[1,4],[4,5]]",
        "output": "[[1, 5]]",
        "explanation": "Intervals [1,4] and [4,5] are considered overlapping."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "[[1,3],[2,6],[8,10],[15,18]]",
        "output": "[[1, 6], [8, 10], [15, 18]]",
        "isHidden": true
      },
      {
        "input": "[[1,4],[4,5]]",
        "output": "[[1, 5]]",
        "isHidden": true
      },
      {
        "input": "[[1,4],[0,4]]",
        "output": "[[0, 4]]",
        "isHidden": true
      },
      {
        "input": "[[1,4],[2,3]]",
        "output": "[[1, 4]]",
        "isHidden": true
      }
    ],
    "hints": [
      "Sort intervals by start time, then check if current start <= previous end."
    ],
    "editorial": {
      "approach": "Optimal Approach for Merge Intervals",
      "solutionMarkdown": "### Optimal Solution\n\nSort by start time. Iterate through intervals; if current overlaps with last merged, update end.\n\n### Complexity\n- Time: O(N log N), Space: O(N)",
      "timeComplexity": "O(N log N)",
      "spaceComplexity": "O(N)"
    },
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0
  },
  {
    "title": "Merge k Sorted Lists",
    "slug": "merge-k-sorted-lists",
    "description": "You are given an array of `k` linked-lists `lists`, each linked-list is sorted in ascending order. Merge all the linked-lists into one sorted linked-list and return it.\n\n### Example 1:\n```\nInput: [[1,4,5],[1,3,4],[2,6]]\nOutput: [1, 1, 2, 3, 4, 4, 5, 6]\nExplanation: Lists merged into one ascending list.\n```\n\n### Example 2:\n```\nInput: []\nOutput: []\nExplanation: Empty lists.\n```",
    "difficulty": "HARD",
    "category": "DSA",
    "patterns": [
      "Linked List",
      "Divide and Conquer",
      "Heaps / Priority Queue"
    ],
    "topics": [
      "Linked List",
      "Divide and Conquer",
      "Heaps / Priority Queue"
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
        "company": "Capgemini",
        "frequencyCount": 7,
        "yearReported": 2024
      },
      {
        "company": "Flipkart",
        "frequencyCount": 7,
        "yearReported": 2024
      },
      {
        "company": "Oracle",
        "frequencyCount": 7,
        "yearReported": 2024
      },
      {
        "company": "Adobe",
        "frequencyCount": 7,
        "yearReported": 2025
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
        "boilerplate": "def mergeKSortedLists(*args):\n    # TODO: Implement solution for Merge k Sorted Lists\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = mergeKSortedLists(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(mergeKSortedLists(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function mergeKSortedLists(...args) {\n    // TODO: Implement solution for Merge k Sorted Lists\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(mergeKSortedLists(...parsed)));\n    } catch (e) {\n        console.log(mergeKSortedLists(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Merge k Sorted Lists\n        // TODO: Read input from cin and implement solution\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        // TODO: Read from br and implement solution\n    }\n}\n"
      }
    ],
    "sampleTestCases": [
      {
        "input": "[[1,4,5],[1,3,4],[2,6]]",
        "output": "[1, 1, 2, 3, 4, 4, 5, 6]",
        "explanation": "Lists merged into one ascending list."
      },
      {
        "input": "[]",
        "output": "[]",
        "explanation": "Empty lists."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "[[1,4,5],[1,3,4],[2,6]]",
        "output": "[1, 1, 2, 3, 4, 4, 5, 6]",
        "isHidden": true
      },
      {
        "input": "[]",
        "output": "[]",
        "isHidden": true
      },
      {
        "input": "[[]]",
        "output": "[]",
        "isHidden": true
      }
    ],
    "hints": [
      "Use a Min-Heap of size k holding the current head of each list, or divide and conquer pairwise merge."
    ],
    "editorial": {
      "approach": "Optimal Approach for Merge k Sorted Lists",
      "solutionMarkdown": "### Optimal Solution\n\nMin-heap storing (val, node). Always pop smallest and advance list pointer.\n\n### Complexity\n- Time: O(N log k) where N is total nodes, Space: O(k)",
      "timeComplexity": "O(N log k) where N is total nodes",
      "spaceComplexity": "O(k)"
    },
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0
  },
  {
    "title": "Merge Sort",
    "slug": "merge-sort-array",
    "description": "Given an array of integers `nums`, sort the array in ascending order using the Merge Sort algorithm and return the sorted array.\\n\\n### Example 1:\\n```\\nInput: [5, 2, 3, 1]\\nOutput: [1, 2, 3, 5]\\nExplanation: Array sorted ascendingly.\\n```\\n\\n### Example 2:\\n```\\nInput: [5, 1, 1, 2, 0, 0]\\nOutput: [0, 0, 1, 1, 2, 5]\\nExplanation: Handles duplicates correctly.\\n```\\n\\n### Constraints:\\n- $1 \\le |nums| \\le 5 \\times 10^4$\\n- $-5 \\times 10^4 \\le nums[i] \\le 5 \\times 10^4$",
    "difficulty": "MEDIUM",
    "category": "DSA",
    "patterns": [
      "Divide and Conquer",
      "Merge Sort"
    ],
    "topics": [
      "Array",
      "Divide and Conquer",
      "Sorting"
    ],
    "companyTags": [
      {
        "company": "Wipro",
        "frequencyCount": 7,
        "yearReported": 2025
      },
      {
        "company": "Oracle",
        "frequencyCount": 7,
        "yearReported": 2024
      }
    ],
    "sampleTestCases": [
      {
        "input": "[5, 2, 3, 1]",
        "output": "[1, 2, 3, 5]",
        "explanation": "Sorted ascending."
      },
      {
        "input": "[5, 1, 1, 2, 0, 0]",
        "output": "[0, 0, 1, 1, 2, 5]",
        "explanation": "Sorted with duplicates."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "[1]",
        "output": "[1]"
      },
      {
        "input": "[-4, 0, 7, 4, 9, -5, -1, 0, -7, -1]",
        "output": "[-7, -5, -4, -1, -1, 0, 0, 4, 7, 9]"
      },
      {
        "input": "[2, 1]",
        "output": "[1, 2]"
      }
    ],
    "hints": [
      "Divide the array into halves, recursively sort both halves, then merge the two sorted halves."
    ],
    "editorial": {
      "approach": "Divide and Conquer Merge Sort",
      "solutionMarkdown": "### Merge Sort Algorithm\nSplit array at `mid = (low + high) // 2`. Recursively sort left and right, then merge with two pointers.",
      "timeComplexity": "O(N log N)",
      "spaceComplexity": "O(N)"
    },
    "starterCode": [
      {
        "language": "python",
        "boilerplate": "def mergeSortArray(*args):\n    # TODO: Implement solution for Merge Sort\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = mergeSortArray(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(mergeSortArray(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function mergeSortArray(...args) {\n    // TODO: Implement solution for Merge Sort\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try {\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(mergeSortArray(...parsed)));\n    } catch (e) {\n        console.log(mergeSortArray(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // TODO: Read input from cin and implement solution for Merge Sort\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        // TODO: Read from br and implement solution for Merge Sort\n    }\n}\n"
      }
    ],
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0
  },
  {
    "title": "Merge Sorted Array",
    "slug": "merge-sorted-array",
    "description": "You are given two integer arrays `nums1` and `nums2`, sorted in non-decreasing order, and two integers `m` and `n`. Merge `nums2` into `nums1` as one sorted array in-place.\n\n### Example 1:\n```\nInput: [1,2,3,0,0,0]\n3\n[2,5,6]\n3\nOutput: [1, 2, 2, 3, 5, 6]\nExplanation: Arrays merged into nums1.\n```\n\n### Example 2:\n```\nInput: [1]\n1\n[]\n0\nOutput: [1]\nExplanation: nums2 is empty.\n```",
    "difficulty": "EASY",
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
        "company": "Accenture",
        "yearReported": 2025,
        "verified": false,
        "frequencyCount": 25,
        "sourceNote": "Accenture Practice Bank #15"
      },
      {
        "company": "TCS",
        "yearReported": 2025,
        "verified": false,
        "frequencyCount": 30,
        "sourceNote": "TCS Practice Bank #24"
      },
      {
        "company": "Wipro",
        "frequencyCount": 7,
        "yearReported": 2025
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
        "boilerplate": "def mergeSortedArray(*args):\n    # TODO: Implement solution for Merge Sorted Array\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = mergeSortedArray(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(mergeSortedArray(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function mergeSortedArray(...args) {\n    // TODO: Implement solution for Merge Sorted Array\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(mergeSortedArray(...parsed)));\n    } catch (e) {\n        console.log(mergeSortedArray(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Merge Sorted Array\n        // TODO: Read input from cin and implement solution\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        // TODO: Read from br and implement solution\n    }\n}\n"
      }
    ],
    "sampleTestCases": [
      {
        "input": "[1,2,3,0,0,0]\n3\n[2,5,6]\n3",
        "output": "[1, 2, 2, 3, 5, 6]",
        "explanation": "Arrays merged into nums1."
      },
      {
        "input": "[1]\n1\n[]\n0",
        "output": "[1]",
        "explanation": "nums2 is empty."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "[1,2,3,0,0,0]\n3\n[2,5,6]\n3",
        "output": "[1, 2, 2, 3, 5, 6]",
        "isHidden": true
      },
      {
        "input": "[1]\n1\n[]\n0",
        "output": "[1]",
        "isHidden": true
      },
      {
        "input": "[0]\n0\n[1]\n1",
        "output": "[1]",
        "isHidden": true
      }
    ],
    "hints": [
      "Fill nums1 from the back using three pointers: p1, p2, and p."
    ],
    "editorial": {
      "approach": "Optimal Approach for Merge Sorted Array",
      "solutionMarkdown": "### Optimal Solution\n\nIterate backwards from m+n-1, placing larger of nums1[p1] and nums2[p2].\n\n### Complexity\n- Time: O(M + N), Space: O(1)",
      "timeComplexity": "O(M + N)",
      "spaceComplexity": "O(1)"
    },
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0
  },
  {
    "title": "Merge Three Sorted Lists Without Duplicates",
    "slug": "merge-three-sorted-lists-without-duplicates",
    "description": "Given three sorted integer arrays `a`, `b`, and `c`, merge them into a single sorted array containing all unique elements (no duplicates).\n\n### Example 1:\n```\nInput: [1,2,3]\n[2,3,4]\n[3,4,5]\nOutput: [1,2,3,4,5]\nExplanation: Merged unique sorted array.\n```\n\n### Example 2:\n```\nInput: [1,1]\n[1]\n[1,2]\nOutput: [1,2]\nExplanation: Duplicates across all lists eliminated.\n```",
    "difficulty": "MEDIUM",
    "category": "DSA",
    "patterns": [
      "Two Pointers",
      "Array",
      "Heap / Priority Queue"
    ],
    "topics": [
      "Two Pointers",
      "Array",
      "Heap / Priority Queue"
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
        "boilerplate": "def mergeThreeSortedListsWithoutDuplicates(*args):\n    # TODO: Implement solution for Merge Three Sorted Lists Without Duplicates\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = mergeThreeSortedListsWithoutDuplicates(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(mergeThreeSortedListsWithoutDuplicates(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function mergeThreeSortedListsWithoutDuplicates(...args) {\n    // TODO: Implement solution for Merge Three Sorted Lists Without Duplicates\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(mergeThreeSortedListsWithoutDuplicates(...parsed)));\n    } catch (e) {\n        console.log(mergeThreeSortedListsWithoutDuplicates(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Merge Three Sorted Lists Without Duplicates\n        // TODO: Read input from cin and implement solution\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        // TODO: Read from br and implement solution\n    }\n}\n"
      }
    ],
    "sampleTestCases": [
      {
        "input": "[1,2,3]\n[2,3,4]\n[3,4,5]",
        "output": "[1,2,3,4,5]",
        "explanation": "Merged unique sorted array."
      },
      {
        "input": "[1,1]\n[1]\n[1,2]",
        "output": "[1,2]",
        "explanation": "Duplicates across all lists eliminated."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "[1,2,3]\n[2,3,4]\n[3,4,5]",
        "output": "[1,2,3,4,5]",
        "isHidden": true
      },
      {
        "input": "[1,1]\n[1]\n[1,2]",
        "output": "[1,2]",
        "isHidden": true
      },
      {
        "input": "[]\n[]\n[]",
        "output": "[]",
        "isHidden": true
      }
    ],
    "hints": [
      "Use three pointers or a min-heap, skipping identical consecutive values."
    ],
    "editorial": {
      "approach": "Optimal Approach for Merge Three Sorted Lists Without Duplicates",
      "solutionMarkdown": "### Optimal Solution\n\nThree pointers tracking current position in each list. Pick minimum of the three, append if different from last element, advance matching pointers.\n\n### Complexity\n- Time: O(N1 + N2 + N3), Space: O(1) auxiliary",
      "timeComplexity": "O(N1 + N2 + N3)",
      "spaceComplexity": "O(1) auxiliary"
    },
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0
  },
  {
    "title": "Merge Two Sorted Lists",
    "slug": "merge-two-sorted-lists",
    "description": "You are given the heads of two sorted linked lists `list1` and `list2`. Merge the two lists into one **sorted** list.\n\n### Example 1:\n```\nInput: [1,2,4]\n[1,3,4]\nOutput: [1, 1, 2, 3, 4, 4]\nExplanation: Merged sorted linked list.\n```\n\n### Example 2:\n```\nInput: []\n[]\nOutput: []\nExplanation: Both lists empty.\n```",
    "difficulty": "EASY",
    "category": "DSA",
    "patterns": [
      "Linked List",
      "Recursion",
      "Two Pointers"
    ],
    "topics": [
      "Linked List",
      "Recursion",
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
        "verified": false,
        "frequencyCount": 25,
        "sourceNote": "Accenture Practice Bank #55"
      },
      {
        "company": "Infosys",
        "yearReported": 2025,
        "verified": true,
        "frequencyCount": 42,
        "sourceNote": "Infosys Interview Question #54"
      },
      {
        "company": "TCS",
        "yearReported": 2025,
        "verified": true,
        "frequencyCount": 45,
        "sourceNote": "TCS Interview Question #53"
      },
      {
        "company": "Capgemini",
        "frequencyCount": 7,
        "yearReported": 2024
      },
      {
        "company": "Wipro",
        "frequencyCount": 7,
        "yearReported": 2025
      },
      {
        "company": "Oracle",
        "frequencyCount": 7,
        "yearReported": 2024
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
        "boilerplate": "def mergeTwoSortedLists(*args):\n    # TODO: Implement solution for Merge Two Sorted Lists\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = mergeTwoSortedLists(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(mergeTwoSortedLists(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function mergeTwoSortedLists(...args) {\n    // TODO: Implement solution for Merge Two Sorted Lists\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(mergeTwoSortedLists(...parsed)));\n    } catch (e) {\n        console.log(mergeTwoSortedLists(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Merge Two Sorted Lists\n        // TODO: Read input from cin and implement solution\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        // TODO: Read from br and implement solution\n    }\n}\n"
      }
    ],
    "sampleTestCases": [
      {
        "input": "[1,2,4]\n[1,3,4]",
        "output": "[1, 1, 2, 3, 4, 4]",
        "explanation": "Merged sorted linked list."
      },
      {
        "input": "[]\n[]",
        "output": "[]",
        "explanation": "Both lists empty."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "[1,2,4]\n[1,3,4]",
        "output": "[1, 1, 2, 3, 4, 4]",
        "isHidden": true
      },
      {
        "input": "[]\n[]",
        "output": "[]",
        "isHidden": true
      },
      {
        "input": "[]\n[0]",
        "output": "[0]",
        "isHidden": true
      }
    ],
    "hints": [
      "Create dummy node and link smaller of list1.val and list2.val at each step."
    ],
    "editorial": {
      "approach": "Optimal Approach for Merge Two Sorted Lists",
      "solutionMarkdown": "### Optimal Solution\n\nDummy head iterative merge advancing pointer of smaller head.\n\n### Complexity\n- Time: O(N + M), Space: O(1)",
      "timeComplexity": "O(N + M)",
      "spaceComplexity": "O(1)"
    },
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0
  },
  {
    "title": "Middle of the Linked List",
    "slug": "middle-of-the-linked-list",
    "description": "Given the `head` of a singly linked list, return *the middle node of the linked list*. If there are two middle nodes, return **the second middle** node.\n\n### Example 1:\n```\nInput: [1,2,3,4,5]\nOutput: [3,4,5]\nExplanation: The middle node of the list is node 3.\n```\n\n### Example 2:\n```\nInput: [1,2,3,4,5,6]\nOutput: [4,5,6]\nExplanation: Since the list has two middle nodes with values 3 and 4, we return the second one.\n```",
    "difficulty": "EASY",
    "category": "DSA",
    "patterns": [
      "Linked List",
      "Two Pointers"
    ],
    "topics": [
      "Linked List",
      "Two Pointers"
    ],
    "companyTags": [
      {
        "company": "Accenture",
        "yearReported": 2025,
        "verified": false,
        "frequencyCount": 25,
        "sourceNote": "Accenture Practice Bank #54"
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
        "boilerplate": "def middleOfTheLinkedList(*args):\n    # TODO: Implement solution for Middle of the Linked List\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = middleOfTheLinkedList(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(middleOfTheLinkedList(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function middleOfTheLinkedList(...args) {\n    // TODO: Implement solution for Middle of the Linked List\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(middleOfTheLinkedList(...parsed)));\n    } catch (e) {\n        console.log(middleOfTheLinkedList(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Middle of the Linked List\n        // TODO: Read input from cin and implement solution\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        // TODO: Read from br and implement solution\n    }\n}\n"
      }
    ],
    "sampleTestCases": [
      {
        "input": "[1,2,3,4,5]",
        "output": "[3,4,5]",
        "explanation": "The middle node of the list is node 3."
      },
      {
        "input": "[1,2,3,4,5,6]",
        "output": "[4,5,6]",
        "explanation": "Since the list has two middle nodes with values 3 and 4, we return the second one."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "[1,2,3,4,5]",
        "output": "[3,4,5]",
        "isHidden": true
      },
      {
        "input": "[1,2,3,4,5,6]",
        "output": "[4,5,6]",
        "isHidden": true
      },
      {
        "input": "[1]",
        "output": "[1]",
        "isHidden": true
      }
    ],
    "hints": [
      "Use fast and slow pointers: slow moves 1 step while fast moves 2 steps."
    ],
    "editorial": {
      "approach": "Optimal Approach for Middle of the Linked List",
      "solutionMarkdown": "### Optimal Solution\n\nTortoise and Hare algorithm. When fast reaches end of list, slow is at the middle node.\n\n### Complexity\n- Time: O(N), Space: O(1)",
      "timeComplexity": "O(N)",
      "spaceComplexity": "O(1)"
    },
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0
  },
  {
    "title": "Middle Stack with O(1) Middle Operations",
    "slug": "middle-stack-with-o-middle-operations",
    "description": "Design a stack that supports `push`, `pop`, `getMiddle`, and `deleteMiddle` operations, all in $O(1)$ time complexity.\\n\\nImplement the `MiddleStack` operations:\\n- `push(x)`: pushes $x$ onto the stack.\\n- `pop()`: removes and returns the top element of the stack.\\n- `getMiddle()`: returns the middle element of the stack (for $2k$ elements, return the $k$-th element from bottom).\\n- `deleteMiddle()`: removes the middle element.\\n\\n### Example 1:\\n```\\nInput:\\npush 1\\npush 2\\npush 3\\ngetMiddle -> 2\\npush 4\\ngetMiddle -> 2\\ndeleteMiddle\\ngetMiddle -> 3\\npop -> 4\\n```\\n\\n### Constraints:\\n- Up to $10^5$ operations.\\n- $-10^9 \\le x \\le 10^9$",
    "difficulty": "HARD",
    "patterns": [
      "Doubly Linked List",
      "Design",
      "Stack"
    ],
    "topics": [
      "Linked List",
      "Stack",
      "Design",
      "Doubly-Linked List"
    ],
    "sampleTestCases": [
      {
        "input": "push 1\npush 2\npush 3\ngetMiddle\npush 4\ngetMiddle\ndeleteMiddle\ngetMiddle\npop",
        "output": "2\n2\n3\n4",
        "explanation": "O(1) middle tracking."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "push 10\ngetMiddle\npop",
        "output": "10\n10"
      },
      {
        "input": "push 1\npush 2\ndeleteMiddle\ngetMiddle",
        "output": "2"
      },
      {
        "input": "push 5\npush 6\npush 7\npop\ngetMiddle",
        "output": "7\n5"
      }
    ],
    "hints": [
      "Use a Doubly Linked List with a `mid` pointer.",
      "Update `mid` pointer on push, pop, and deleteMiddle based on whether count is odd or even."
    ],
    "editorial": {
      "approach": "Doubly Linked List with Mid Pointer",
      "solutionMarkdown": "Maintain `mid` pointer in DLL. Shift `mid` appropriately on size changes.",
      "timeComplexity": "O(1) for all operations",
      "spaceComplexity": "O(N)"
    },
    "category": "DSA",
    "starterCode": [
      {
        "language": "python",
        "boilerplate": "def middleStackWithOMiddleOperations(*args):\n    # TODO: Implement solution for Middle Stack with O(1) Middle Operations\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = middleStackWithOMiddleOperations(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(middleStackWithOMiddleOperations(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function middleStackWithOMiddleOperations(...args) {\n    // TODO: Implement solution for Middle Stack with O(1) Middle Operations\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try {\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(middleStackWithOMiddleOperations(...parsed)));\n    } catch (e) {\n        console.log(middleStackWithOMiddleOperations(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // TODO: Read input from cin and implement solution for Middle Stack with O(1) Middle Operations\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        // TODO: Read from br and implement solution for Middle Stack with O(1) Middle Operations\n    }\n}\n"
      }
    ],
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0,
    "companyTags": [
      {
        "company": "Adobe",
        "frequencyCount": 7,
        "yearReported": 2025
      }
    ]
  },
  {
    "title": "Min Cost to Connect All Points",
    "slug": "min-cost-to-connect-all-points",
    "description": "You are given an array `points` representing integer coordinates of some points on a 2D-plane. The cost of connecting two points is the Manhattan distance between them. Return *the minimum cost to make all points connected*.\n\n### Example 1:\n```\nInput: [[0,0],[2,2],[3,10],[5,2],[7,0]]\nOutput: 20\nExplanation: Connect with total Manhattan distance 20.\n```\n\n### Example 2:\n```\nInput: [[3,12],[-2,5],[-4,1]]\nOutput: 18\nExplanation: Minimum cost spanning tree.\n```",
    "difficulty": "MEDIUM",
    "category": "DSA",
    "patterns": [
      "Array",
      "Union Find",
      "Graph",
      "Minimum Spanning Tree"
    ],
    "topics": [
      "Array",
      "Union Find",
      "Graph",
      "Minimum Spanning Tree"
    ],
    "companyTags": [
      {
        "company": "Infosys",
        "yearReported": 2025,
        "verified": true,
        "frequencyCount": 42,
        "sourceNote": "Infosys Interview Question #75"
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
        "boilerplate": "def minCostToConnectAllPoints(*args):\n    # TODO: Implement solution for Min Cost to Connect All Points\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = minCostToConnectAllPoints(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(minCostToConnectAllPoints(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function minCostToConnectAllPoints(...args) {\n    // TODO: Implement solution for Min Cost to Connect All Points\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(minCostToConnectAllPoints(...parsed)));\n    } catch (e) {\n        console.log(minCostToConnectAllPoints(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Min Cost to Connect All Points\n        // TODO: Read input from cin and implement solution\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        // TODO: Read from br and implement solution\n    }\n}\n"
      }
    ],
    "sampleTestCases": [
      {
        "input": "[[0,0],[2,2],[3,10],[5,2],[7,0]]",
        "output": "20",
        "explanation": "Connect with total Manhattan distance 20."
      },
      {
        "input": "[[3,12],[-2,5],[-4,1]]",
        "output": "18",
        "explanation": "Minimum cost spanning tree."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "[[0,0],[2,2],[3,10],[5,2],[7,0]]",
        "output": "20",
        "isHidden": true
      },
      {
        "input": "[[3,12],[-2,5],[-4,1]]",
        "output": "18",
        "isHidden": true
      },
      {
        "input": "[[0,0]]",
        "output": "0",
        "isHidden": true
      }
    ],
    "hints": [
      "Use Prim's Algorithm with a min-heap or Kruskal's algorithm with Union-Find."
    ],
    "editorial": {
      "approach": "Optimal Approach for Min Cost to Connect All Points",
      "solutionMarkdown": "### Optimal Solution\n\nPrim's MST algorithm. Track min distance to visited tree. Pick closest unvisited vertex in each of the N steps.\n\n### Complexity\n- Time: O(N^2), Space: O(N)",
      "timeComplexity": "O(N^2)",
      "spaceComplexity": "O(N)"
    },
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0
  },
  {
    "title": "Min Stack",
    "slug": "min-stack",
    "description": "Design a stack that supports push, pop, top, and retrieving the minimum element in constant time `O(1)`.\n\n### Example 1:\n```\nInput: [\"MinStack\",\"push\",\"push\",\"push\",\"getMin\",\"pop\",\"top\",\"getMin\"]\n[[],[-2],[0],[-3],[],[],[],[]]\nOutput: [null, null, null, null, -3, null, 0, -2]\nExplanation: Minimums tracked accurately through push and pop operations.\n```\n\n### Example 2:\n```\nInput: [\"MinStack\",\"push\",\"getMin\"]\n[[],[1],[]]\nOutput: [null, null, 1]\nExplanation: Single element minimum.\n```",
    "difficulty": "MEDIUM",
    "category": "DSA",
    "patterns": [
      "Stack",
      "Design"
    ],
    "topics": [
      "Stack",
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
        "company": "Accenture",
        "yearReported": 2025,
        "verified": false,
        "frequencyCount": 25,
        "sourceNote": "Accenture Practice Bank #48"
      },
      {
        "company": "Infosys",
        "yearReported": 2025,
        "verified": true,
        "frequencyCount": 42,
        "sourceNote": "Infosys Interview Question #45"
      },
      {
        "company": "TCS",
        "yearReported": 2025,
        "verified": false,
        "frequencyCount": 30,
        "sourceNote": "TCS Practice Bank #43"
      },
      {
        "company": "Capgemini",
        "frequencyCount": 7,
        "yearReported": 2024
      },
      {
        "company": "Oracle",
        "frequencyCount": 7,
        "yearReported": 2024
      },
      {
        "company": "Adobe",
        "frequencyCount": 7,
        "yearReported": 2025
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
        "boilerplate": "def minStack(*args):\n    # TODO: Implement solution for Min Stack\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = minStack(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(minStack(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function minStack(...args) {\n    // TODO: Implement solution for Min Stack\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(minStack(...parsed)));\n    } catch (e) {\n        console.log(minStack(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Min Stack\n        // TODO: Read input from cin and implement solution\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        // TODO: Read from br and implement solution\n    }\n}\n"
      }
    ],
    "sampleTestCases": [
      {
        "input": "[\"MinStack\",\"push\",\"push\",\"push\",\"getMin\",\"pop\",\"top\",\"getMin\"]\n[[],[-2],[0],[-3],[],[],[],[]]",
        "output": "[null, null, null, null, -3, null, 0, -2]",
        "explanation": "Minimums tracked accurately through push and pop operations."
      },
      {
        "input": "[\"MinStack\",\"push\",\"getMin\"]\n[[],[1],[]]",
        "output": "[null, null, 1]",
        "explanation": "Single element minimum."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "[\"MinStack\",\"push\",\"push\",\"push\",\"getMin\",\"pop\",\"top\",\"getMin\"]\n[[],[-2],[0],[-3],[],[],[],[]]",
        "output": "[null, null, null, null, -3, null, 0, -2]",
        "isHidden": true
      }
    ],
    "hints": [
      "Maintain an auxiliary min_stack storing minimum value at each depth."
    ],
    "editorial": {
      "approach": "Optimal Approach for Min Stack",
      "solutionMarkdown": "### Optimal Solution\n\nPaired elements on stack (val, current_min) or secondary min_stack.\n\n### Complexity\n- Time: O(1) for all operations, Space: O(N)",
      "timeComplexity": "O(1) for all operations",
      "spaceComplexity": "O(N)"
    },
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0
  },
  {
    "title": "Minimize Array Sum with K Ceil-Halving Operations",
    "slug": "minimize-array-sum-with-k-ceil-halving-operations",
    "description": "You are given an integer array `nums` and an integer `k`. You can perform the following operation at most `k` times:\\n- Choose any element `nums[i]` and replace it with `ceil(nums[i] / 2)`.\\n\\nReturn the minimum possible sum of `nums` after applying the operation at most `k` times.\\n\\n### Example 1:\\n```\\nInput: nums = [5, 19, 8, 1], k = 3\\nOutput: 17\\nExplanation:\\n1. Halve 19: [5, 10, 8, 1]\\n2. Halve 10: [5, 5, 8, 1]\\n3. Halve 8: [5, 5, 4, 1]\\nTotal sum = 5 + 5 + 4 + 1 = 17.\\n```\\n\\n### Example 2:\\n```\\nInput: nums = [4, 3, 6, 4], k = 4\\nOutput: 9\\nExplanation: Minimum sum after 4 operations is 9.\\n```\\n\\n### Constraints:\\n- $1 \\le |nums| \\le 10^5$\\n- $1 \\le nums[i] \\le 10^4$\\n- $1 \\le k \\le 10^5$",
    "difficulty": "MEDIUM",
    "patterns": [
      "Heap",
      "Greedy"
    ],
    "topics": [
      "Array",
      "Greedy",
      "Heap (Priority Queue)"
    ],
    "sampleTestCases": [
      {
        "input": "nums = [5, 19, 8, 1]\nk = 3",
        "output": "17",
        "explanation": "Greedy reduction via Max Heap."
      },
      {
        "input": "nums = [4, 3, 6, 4]\nk = 4",
        "output": "9",
        "explanation": "Minimum sum 9."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "nums = [1]\nk = 5",
        "output": "1"
      },
      {
        "input": "nums = [10]\nk = 1",
        "output": "5"
      },
      {
        "input": "nums = [100, 100]\nk = 2",
        "output": "100"
      }
    ],
    "hints": [
      "Always halve the current maximum element in the array to maximize the reduction.",
      "Use a Max-Heap."
    ],
    "editorial": {
      "approach": "Max-Heap Greedy Reduction",
      "solutionMarkdown": "Push all numbers into a max-heap. Pop largest, replace with `ceil(val / 2)`, and push back $k$ times.",
      "timeComplexity": "O(N + k log N)",
      "spaceComplexity": "O(N)"
    },
    "category": "DSA",
    "starterCode": [
      {
        "language": "python",
        "boilerplate": "def minimizeArraySumWithKCeilHalvingOperations(*args):\n    # TODO: Implement solution for Minimize Array Sum with K Ceil-Halving Operations\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = minimizeArraySumWithKCeilHalvingOperations(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(minimizeArraySumWithKCeilHalvingOperations(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function minimizeArraySumWithKCeilHalvingOperations(...args) {\n    // TODO: Implement solution for Minimize Array Sum with K Ceil-Halving Operations\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try {\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(minimizeArraySumWithKCeilHalvingOperations(...parsed)));\n    } catch (e) {\n        console.log(minimizeArraySumWithKCeilHalvingOperations(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // TODO: Read input from cin and implement solution for Minimize Array Sum with K Ceil-Halving Operations\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        // TODO: Read from br and implement solution for Minimize Array Sum with K Ceil-Halving Operations\n    }\n}\n"
      }
    ],
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0,
    "companyTags": [
      {
        "company": "Adobe",
        "frequencyCount": 7,
        "yearReported": 2025
      }
    ]
  },
  {
    "title": "Minimum Cost Climbing Stairs",
    "slug": "minimum-cost-climbing-stairs",
    "description": "You are given an integer array `cost` where `cost[i]` is the cost of `i-th` step on a staircase. Once you pay the cost, you can either climb one or two steps. You can either start from index `0` or index `1`. Return *the minimum cost to reach the top of the floor*.\n\n### Example 1:\n```\nInput: [10,15,20]\nOutput: 15\nExplanation: Start at index 1, pay 15 and climb two steps to reach the top.\n```\n\n### Example 2:\n```\nInput: [1,100,1,1,1,100,1,1,100,1]\nOutput: 6\nExplanation: Minimum cost path pays 1 at steps 0, 2, 4, 6, 7, 9 to reach top with total cost 6.\n```",
    "difficulty": "EASY",
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
        "company": "Accenture",
        "yearReported": 2025,
        "verified": false,
        "frequencyCount": 25,
        "sourceNote": "Accenture Practice Bank #92"
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
        "boilerplate": "def minimumCostClimbingStairs(*args):\n    # TODO: Implement solution for Minimum Cost Climbing Stairs\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = minimumCostClimbingStairs(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(minimumCostClimbingStairs(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function minimumCostClimbingStairs(...args) {\n    // TODO: Implement solution for Minimum Cost Climbing Stairs\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(minimumCostClimbingStairs(...parsed)));\n    } catch (e) {\n        console.log(minimumCostClimbingStairs(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Minimum Cost Climbing Stairs\n        // TODO: Read input from cin and implement solution\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        // TODO: Read from br and implement solution\n    }\n}\n"
      }
    ],
    "sampleTestCases": [
      {
        "input": "[10,15,20]",
        "output": "15",
        "explanation": "Start at index 1, pay 15 and climb two steps to reach the top."
      },
      {
        "input": "[1,100,1,1,1,100,1,1,100,1]",
        "output": "6",
        "explanation": "Minimum cost path pays 1 at steps 0, 2, 4, 6, 7, 9 to reach top with total cost 6."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "[10,15,20]",
        "output": "15",
        "isHidden": true
      },
      {
        "input": "[1,100,1,1,1,100,1,1,100,1]",
        "output": "6",
        "isHidden": true
      },
      {
        "input": "[0,0,0,1]",
        "output": "0",
        "isHidden": true
      }
    ],
    "hints": [
      "dp[i] = cost[i] + min(dp[i - 1], dp[i - 2])."
    ],
    "editorial": {
      "approach": "Optimal Approach for Minimum Cost Climbing Stairs",
      "solutionMarkdown": "### Optimal Solution\n\nMaintain two rolling variables prev1 and prev2. curr = cost[i] + min(prev1, prev2). Return min(prev1, prev2) at top.\n\n### Complexity\n- Time: O(N), Space: O(1)",
      "timeComplexity": "O(N)",
      "spaceComplexity": "O(1)"
    },
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0
  },
  {
    "title": "Minimum Cost Shared Cab Route for Two Travellers",
    "slug": "minimum-cost-shared-cab-route-for-two-travellers-to-one-destination",
    "description": "Two passengers at points `A` and `B` want to travel to common destination `D`. They can share a cab from any intermediate vertex `X`. Given the weighted graph and cab rates, find the minimum total travel cost.\n\n### Example 1:\n```\nInput: [[0,1,10],[1,2,10],[0,2,25]]\n0\n1\n2\nOutput: 20\nExplanation: Passenger A meets B at 1, cost 10 + shared 10 = 20.\n```\n\n### Example 2:\n```\nInput: [[0,3,5],[1,3,5],[3,2,10]]\n0\n1\n2\nOutput: 20\nExplanation: Both meet at 3 (cost 5 each) then share ride to 2 (cost 10).\n```",
    "difficulty": "HARD",
    "category": "DSA",
    "patterns": [
      "Graph",
      "Shortest Path",
      "Heap / Priority Queue"
    ],
    "topics": [
      "Graph",
      "Shortest Path",
      "Heap / Priority Queue"
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
        "boilerplate": "def minimumCostSharedCabRouteForTwoTravellersToOneDestination(*args):\n    # TODO: Implement solution for Minimum Cost Shared Cab Route for Two Travellers\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = minimumCostSharedCabRouteForTwoTravellersToOneDestination(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(minimumCostSharedCabRouteForTwoTravellersToOneDestination(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function minimumCostSharedCabRouteForTwoTravellersToOneDestination(...args) {\n    // TODO: Implement solution for Minimum Cost Shared Cab Route for Two Travellers\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(minimumCostSharedCabRouteForTwoTravellersToOneDestination(...parsed)));\n    } catch (e) {\n        console.log(minimumCostSharedCabRouteForTwoTravellersToOneDestination(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Minimum Cost Shared Cab Route for Two Travellers\n        // TODO: Read input from cin and implement solution\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        // TODO: Read from br and implement solution\n    }\n}\n"
      }
    ],
    "sampleTestCases": [
      {
        "input": "[[0,1,10],[1,2,10],[0,2,25]]\n0\n1\n2",
        "output": "20",
        "explanation": "Passenger A meets B at 1, cost 10 + shared 10 = 20."
      },
      {
        "input": "[[0,3,5],[1,3,5],[3,2,10]]\n0\n1\n2",
        "output": "20",
        "explanation": "Both meet at 3 (cost 5 each) then share ride to 2 (cost 10)."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "[[0,1,10],[1,2,10],[0,2,25]]\n0\n1\n2",
        "output": "20",
        "isHidden": true
      },
      {
        "input": "[[0,3,5],[1,3,5],[3,2,10]]\n0\n1\n2",
        "output": "20",
        "isHidden": true
      },
      {
        "input": "[[0,1,1]]\n0\n0\n1",
        "output": "1",
        "isHidden": true
      }
    ],
    "hints": [
      "Run Dijkstra 3 times: from A, from B, and from destination D (or reversed)."
    ],
    "editorial": {
      "approach": "Optimal Approach for Minimum Cost Shared Cab Route for Two Travellers",
      "solutionMarkdown": "### Optimal Solution\n\nCompute shortest paths distA from A, distB from B, and distD from D. Find vertex X minimizing distA[X] + distB[X] + distD[X].\n\n### Complexity\n- Time: O((V + E) log V), Space: O(V)",
      "timeComplexity": "O((V + E) log V)",
      "spaceComplexity": "O(V)"
    },
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0
  },
  {
    "title": "Minimum Cost to Connect Ropes",
    "slug": "minimum-cost-to-connect-ropes",
    "description": "Given $N$ ropes of different lengths, connect them into a single rope with minimum total cost. The cost to connect two ropes is equal to the sum of their lengths.\\n\\n### Example 1:\\n```\\nInput: [4, 3, 2, 6]\\nOutput: 29\\nExplanation:\\n1. Connect ropes of lengths 2 and 3: cost = 5, new ropes = [4, 6, 5]\\n2. Connect ropes of lengths 4 and 5: cost = 9, new ropes = [6, 9]\\n3. Connect ropes of lengths 6 and 9: cost = 15, single rope left.\\nTotal cost = 5 + 9 + 15 = 29.\\n```\\n\\n### Example 2:\\n```\\nInput: [1, 2, 3, 4, 5]\\nOutput: 33\\nExplanation: Connecting two smallest ropes greedily yields total cost 33.\\n```\\n\\n### Constraints:\\n- $1 \\le N \\le 10^5$\\n- $1 \\le \\text{ropes}[i] \\le 10^6$",
    "difficulty": "MEDIUM",
    "category": "DSA",
    "patterns": [
      "Greedy",
      "Heap"
    ],
    "topics": [
      "Heap (Priority Queue)",
      "Greedy"
    ],
    "companyTags": [
      {
        "company": "Wipro",
        "frequencyCount": 6,
        "yearReported": 2025
      }
    ],
    "sampleTestCases": [
      {
        "input": "[4, 3, 2, 6]",
        "output": "29",
        "explanation": "Optimal greedy rope connection."
      },
      {
        "input": "[1, 2, 3, 4, 5]",
        "output": "33",
        "explanation": "Sum of merge steps is 33."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "[5]",
        "output": "0"
      },
      {
        "input": "[2, 3]",
        "output": "5"
      },
      {
        "input": "[1, 1, 1, 1]",
        "output": "8"
      }
    ],
    "hints": [
      "Always pick the two shortest ropes and merge them.",
      "Use a Min-Heap (priority queue) to efficiently extract the two smallest elements."
    ],
    "editorial": {
      "approach": "Greedy Huffman / Min-Heap Simulation",
      "solutionMarkdown": "### Min-Heap\nPush all ropes into a min-heap. While size > 1, pop two smallest, add their sum to total cost, and push their sum back.",
      "timeComplexity": "O(N log N)",
      "spaceComplexity": "O(N)"
    },
    "starterCode": [
      {
        "language": "python",
        "boilerplate": "def minimumCostToConnectRopes(*args):\n    # TODO: Implement solution for Minimum Cost to Connect Ropes\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = minimumCostToConnectRopes(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(minimumCostToConnectRopes(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function minimumCostToConnectRopes(...args) {\n    // TODO: Implement solution for Minimum Cost to Connect Ropes\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try {\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(minimumCostToConnectRopes(...parsed)));\n    } catch (e) {\n        console.log(minimumCostToConnectRopes(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // TODO: Read input from cin and implement solution for Minimum Cost to Connect Ropes\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        // TODO: Read from br and implement solution for Minimum Cost to Connect Ropes\n    }\n}\n"
      }
    ],
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0
  },
  {
    "title": "Minimum Cost to Merge Stones",
    "slug": "minimum-cost-to-merge-stones",
    "description": "There are `n` piles of stones arranged in a row. The $i$-th pile has `stones[i]` stones.\\n\\nA move consists of merging exactly `k` consecutive piles into one pile, and the cost of this move is equal to the total number of stones in these `k` piles.\\n\\nReturn the minimum cost to merge all piles of stones into one pile. If it is impossible, return `-1`.\\n\\n### Example 1:\\n```\\nInput: stones = [3,2,4,1], k = 2\\nOutput: 20\\nExplanation:\\nMerge [3, 2] -> cost 5; piles = [5, 4, 1]\\nMerge [4, 1] -> cost 5; piles = [5, 5]\\nMerge [5, 5] -> cost 10; piles = [10]\\nTotal cost = 5 + 5 + 10 = 20.\\n```\\n\\n### Example 2:\\n```\\nInput: stones = [3,2,4,1], k = 3\\nOutput: -1\\nExplanation: We cannot merge 4 piles into 1 using 3 at a time.\\n```\\n\\n### Constraints:\\n- $n == stones.length$\\n- $1 \\le n \\le 30$\\n- $1 \\le stones[i] \\le 100$\\n- $2 \\le k \\le 30$",
    "difficulty": "HARD",
    "patterns": [
      "Dynamic Programming",
      "Interval DP"
    ],
    "topics": [
      "Array",
      "Dynamic Programming",
      "Prefix Sum"
    ],
    "sampleTestCases": [
      {
        "input": "stones = [3,2,4,1]\nk = 2",
        "output": "20",
        "explanation": "Optimal merge cost 20."
      },
      {
        "input": "stones = [3,2,4,1]\nk = 3",
        "output": "-1",
        "explanation": "Impossible parity: (4 - 1) % (3 - 1) != 0."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "stones = [3,5,1,2,6]\nk = 3",
        "output": "25"
      },
      {
        "input": "stones = [1]\nk = 2",
        "output": "0"
      },
      {
        "input": "stones = [1,2,3]\nk = 3",
        "output": "6"
      }
    ],
    "hints": [
      "Check feasibility: `(n - 1) % (k - 1) == 0` must hold.",
      "3D DP or 2D DP `dp[i][j]` representing minimum cost to merge range `[i, j]` as much as possible."
    ],
    "editorial": {
      "approach": "Interval Dynamic Programming with Prefix Sums",
      "solutionMarkdown": "Interval DP with step size $k-1$. Add sum of range when interval compresses to 1 pile.",
      "timeComplexity": "O(N^3 / k)",
      "spaceComplexity": "O(N^2)"
    },
    "category": "DSA",
    "starterCode": [
      {
        "language": "python",
        "boilerplate": "def minimumCostToMergeStones(*args):\n    # TODO: Implement solution for Minimum Cost to Merge Stones\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = minimumCostToMergeStones(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(minimumCostToMergeStones(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function minimumCostToMergeStones(...args) {\n    // TODO: Implement solution for Minimum Cost to Merge Stones\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try {\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(minimumCostToMergeStones(...parsed)));\n    } catch (e) {\n        console.log(minimumCostToMergeStones(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // TODO: Read input from cin and implement solution for Minimum Cost to Merge Stones\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        // TODO: Read from br and implement solution for Minimum Cost to Merge Stones\n    }\n}\n"
      }
    ],
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0,
    "companyTags": [
      {
        "company": "Flipkart",
        "frequencyCount": 7,
        "yearReported": 2024
      }
    ]
  },
  {
    "title": "Minimum Cost to Reach a City with Fuel Constraints",
    "slug": "minimum-cost-to-reach-a-city-with-fuel-constraints",
    "description": "There are $N$ cities numbered $0$ to $N-1$ connected by bidirectional roads. Each road has a length in kilometers. A car has a maximum fuel tank capacity of $C$ liters and consumes 1 liter of fuel per kilometer. Each city has a fuel station with price $price[i]$ per liter. You can buy any amount of fuel at a city as long as the tank capacity $C$ is not exceeded.\\n\\nFind the minimum cost in dollars to travel from city $start$ to city $dest$ starting with an empty tank. If unreachable, return `-1`.\\n\\n### Example 1:\\n```\\nInput:\\nN = 4, C = 10, start = 0, dest = 3\\nprices = [10, 20, 30, 40]\\nroads = [[0, 1, 5], [1, 3, 5]]\\nOutput: 100\\nExplanation: Buy 10L at city 0 for $100. Reach city 3 with 0L remaining.\\n```\\n\\n### Constraints:\\n- $1 \\le N \\le 1000$\\n- $1 \\le C \\le 100$\\n- $1 \\le \\text{length} \\le C$",
    "difficulty": "HARD",
    "patterns": [
      "Graph",
      "Dijkstra",
      "Shortest Path"
    ],
    "topics": [
      "Graph",
      "Shortest Path",
      "Heap (Priority Queue)"
    ],
    "sampleTestCases": [
      {
        "input": "N = 4, C = 10, start = 0, dest = 3\nprices = [10, 20, 30, 40]\nroads = [[0, 1, 5], [1, 3, 5]]",
        "output": "100",
        "explanation": "Buy 10 liters at city 0 for cost 100."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "N = 2, C = 5, start = 0, dest = 1\nprices = [5, 5]\nroads = [[0, 1, 10]]",
        "output": "-1"
      },
      {
        "input": "N = 1, C = 5, start = 0, dest = 0\nprices = [10]\nroads = []",
        "output": "0"
      },
      {
        "input": "N = 3, C = 5, start = 0, dest = 2\nprices = [2, 1, 5]\nroads = [[0, 1, 3], [1, 2, 2]]",
        "output": "8"
      }
    ],
    "hints": [
      "State is `(city, fuel)`. Run Dijkstra's algorithm on graph with state space $N \\times C$."
    ],
    "editorial": {
      "approach": "Dijkstra on Augmented State Graph (Node, Fuel)",
      "solutionMarkdown": "Two transitions from `(u, f)`: buy 1L of fuel for `price[u]`, or drive to neighbor `v` using road length fuel.",
      "timeComplexity": "O(N * C log(N * C) + E * C)",
      "spaceComplexity": "O(N * C)"
    },
    "category": "DSA",
    "starterCode": [
      {
        "language": "python",
        "boilerplate": "def minimumCostToReachACityWithFuelConstraints(*args):\n    # TODO: Implement solution for Minimum Cost to Reach a City with Fuel Constraints\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = minimumCostToReachACityWithFuelConstraints(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(minimumCostToReachACityWithFuelConstraints(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function minimumCostToReachACityWithFuelConstraints(...args) {\n    // TODO: Implement solution for Minimum Cost to Reach a City with Fuel Constraints\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try {\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(minimumCostToReachACityWithFuelConstraints(...parsed)));\n    } catch (e) {\n        console.log(minimumCostToReachACityWithFuelConstraints(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // TODO: Read input from cin and implement solution for Minimum Cost to Reach a City with Fuel Constraints\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        // TODO: Read from br and implement solution for Minimum Cost to Reach a City with Fuel Constraints\n    }\n}\n"
      }
    ],
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0,
    "companyTags": [
      {
        "company": "Flipkart",
        "frequencyCount": 7,
        "yearReported": 2024
      }
    ]
  },
  {
    "title": "Minimum Depth of Binary Tree",
    "slug": "minimum-depth-of-binary-tree",
    "description": "Given a binary tree, find its minimum depth. The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.\n\n### Example 1:\n```\nInput: [3,9,20,null,null,15,7]\nOutput: 2\nExplanation: Shortest path is 3 -> 9 with depth 2.\n```\n\n### Example 2:\n```\nInput: [2,null,3,null,4,null,5,null,6]\nOutput: 5\nExplanation: Skewed tree has minimum depth 5.\n```",
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
        "boilerplate": "def minimumDepthOfBinaryTree(*args):\n    # TODO: Implement solution for Minimum Depth of Binary Tree\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = minimumDepthOfBinaryTree(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(minimumDepthOfBinaryTree(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function minimumDepthOfBinaryTree(...args) {\n    // TODO: Implement solution for Minimum Depth of Binary Tree\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(minimumDepthOfBinaryTree(...parsed)));\n    } catch (e) {\n        console.log(minimumDepthOfBinaryTree(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Minimum Depth of Binary Tree\n        // TODO: Read input from cin and implement solution\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        // TODO: Read from br and implement solution\n    }\n}\n"
      }
    ],
    "sampleTestCases": [
      {
        "input": "[3,9,20,null,null,15,7]",
        "output": "2",
        "explanation": "Shortest path is 3 -> 9 with depth 2."
      },
      {
        "input": "[2,null,3,null,4,null,5,null,6]",
        "output": "5",
        "explanation": "Skewed tree has minimum depth 5."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "[3,9,20,null,null,15,7]",
        "output": "2",
        "isHidden": true
      },
      {
        "input": "[2,null,3,null,4,null,5,null,6]",
        "output": "5",
        "isHidden": true
      },
      {
        "input": "[]",
        "output": "0",
        "isHidden": true
      }
    ],
    "hints": [
      "Watch out for skewed nodes: a node with only one child is not a leaf."
    ],
    "editorial": {
      "approach": "Optimal Approach for Minimum Depth of Binary Tree",
      "solutionMarkdown": "### Optimal Solution\n\nUse BFS to find the first leaf node (node with left == null and right == null) and return current level.\n\n### Complexity\n- Time: O(N), Space: O(N)",
      "timeComplexity": "O(N)",
      "spaceComplexity": "O(N)"
    },
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0
  },
  {
    "title": "Minimum Edge Reversals for Reachability",
    "slug": "minimum-edge-reversals-for-reachability",
    "description": "There is a directed tree with `n` nodes labeled from `0` to `n - 1`. Return an array `ans` where `ans[i]` is the **minimum number of edge reversals** required so that node `i` can reach every other node in the tree.\n\n### Example 1:\n```\nInput: 4\n[[2,0],[2,1],[1,3]]\nOutput: [1,1,0,2]\nExplanation: Node 2 can reach all without reversals (cost 0).\n```\n\n### Example 2:\n```\nInput: 3\n[[0,1],[2,0]]\nOutput: [1,2,0]\nExplanation: Minimum edge reversals for each root.\n```",
    "difficulty": "HARD",
    "category": "DSA",
    "patterns": [
      "Dynamic Programming",
      "Tree",
      "Graph",
      "Depth-First Search"
    ],
    "topics": [
      "Dynamic Programming",
      "Tree",
      "Graph",
      "Depth-First Search"
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
        "boilerplate": "def minimumEdgeReversalsForReachability(*args):\n    # TODO: Implement solution for Minimum Edge Reversals for Reachability\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = minimumEdgeReversalsForReachability(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(minimumEdgeReversalsForReachability(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function minimumEdgeReversalsForReachability(...args) {\n    // TODO: Implement solution for Minimum Edge Reversals for Reachability\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(minimumEdgeReversalsForReachability(...parsed)));\n    } catch (e) {\n        console.log(minimumEdgeReversalsForReachability(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Minimum Edge Reversals for Reachability\n        // TODO: Read input from cin and implement solution\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        // TODO: Read from br and implement solution\n    }\n}\n"
      }
    ],
    "sampleTestCases": [
      {
        "input": "4\n[[2,0],[2,1],[1,3]]",
        "output": "[1,1,0,2]",
        "explanation": "Node 2 can reach all without reversals (cost 0)."
      },
      {
        "input": "3\n[[0,1],[2,0]]",
        "output": "[1,2,0]",
        "explanation": "Minimum edge reversals for each root."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "4\n[[2,0],[2,1],[1,3]]",
        "output": "[1,1,0,2]",
        "isHidden": true
      },
      {
        "input": "3\n[[0,1],[2,0]]",
        "output": "[1,2,0]",
        "isHidden": true
      },
      {
        "input": "2\n[[0,1]]",
        "output": "[0,1]",
        "isHidden": true
      }
    ],
    "hints": [
      "Use re-rooting DP: first calculate answer for node 0, then shift root to neighbors in O(1)."
    ],
    "editorial": {
      "approach": "Optimal Approach for Minimum Edge Reversals for Reachability",
      "solutionMarkdown": "### Optimal Solution\n\nDFS from node 0 counting reversals. Second DFS re-roots tree: moving from u to v adds 1 if edge is u->v, subtracts 1 if edge is v->u.\n\n### Complexity\n- Time: O(N), Space: O(N)",
      "timeComplexity": "O(N)",
      "spaceComplexity": "O(N)"
    },
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0
  },
  {
    "title": "Minimum Elements to Preserve Full-Array LCM",
    "slug": "minimum-elements-to-preserve-full-array-lcm",
    "description": "Given an array of integers `nums`, find the **minimum size of a subset** of `nums` that has the exact same Least Common Multiple (LCM) as the entire array.\n\n### Example 1:\n```\nInput: [2,3,6]\nOutput: 1\nExplanation: Subset [6] has LCM 6, matching the full array LCM(2, 3, 6) = 6. Minimum size is 1.\n```\n\n### Example 2:\n```\nInput: [2,3,5]\nOutput: 3\nExplanation: No proper subset has LCM 30. All 3 elements required.\n```",
    "difficulty": "HARD",
    "category": "CP",
    "patterns": [
      "Math",
      "Dynamic Programming",
      "Bitmask",
      "Number Theory"
    ],
    "topics": [
      "Math",
      "Dynamic Programming",
      "Bitmask",
      "Number Theory"
    ],
    "companyTags": [
      {
        "company": "Infosys",
        "yearReported": 2025,
        "verified": true,
        "frequencyCount": 42,
        "sourceNote": "Infosys Interview Question #98"
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
        "boilerplate": "def minimumElementsToPreserveFullArrayLcm(*args):\n    # TODO: Implement solution for Minimum Elements to Preserve Full-Array LCM\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = minimumElementsToPreserveFullArrayLcm(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(minimumElementsToPreserveFullArrayLcm(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function minimumElementsToPreserveFullArrayLcm(...args) {\n    // TODO: Implement solution for Minimum Elements to Preserve Full-Array LCM\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(minimumElementsToPreserveFullArrayLcm(...parsed)));\n    } catch (e) {\n        console.log(minimumElementsToPreserveFullArrayLcm(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Minimum Elements to Preserve Full-Array LCM\n        // TODO: Read input from cin and implement solution\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        // TODO: Read from br and implement solution\n    }\n}\n"
      }
    ],
    "sampleTestCases": [
      {
        "input": "[2,3,6]",
        "output": "1",
        "explanation": "Subset [6] has LCM 6, matching the full array LCM(2, 3, 6) = 6. Minimum size is 1."
      },
      {
        "input": "[2,3,5]",
        "output": "3",
        "explanation": "No proper subset has LCM 30. All 3 elements required."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "[2,3,6]",
        "output": "1",
        "isHidden": true
      },
      {
        "input": "[2,3,5]",
        "output": "3",
        "isHidden": true
      },
      {
        "input": "[4,6,9]",
        "output": "2",
        "isHidden": true
      }
    ],
    "hints": [
      "For each prime factor of the total LCM, at least one number in the subset must contribute the maximum power of that prime factor."
    ],
    "editorial": {
      "approach": "Optimal Approach for Minimum Elements to Preserve Full-Array LCM",
      "solutionMarkdown": "### Optimal Solution\n\nIdentify prime factors achieving maximum power. Model as Set Cover problem solved via bitmask DP.\n\n### Complexity\n- Time: O(N * 2^P), Space: O(2^P)",
      "timeComplexity": "O(N * 2^P)",
      "spaceComplexity": "O(2^P)"
    },
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0
  },
  {
    "title": "Minimum Partition of a String Using Dictionary Words",
    "slug": "minimum-partition-of-a-string-using-dictionary-words",
    "description": "Given a string `s` and a list of dictionary words `wordDict`, return the **minimum number of segments** needed to partition `s` such that every segment is a word in `wordDict`. If impossible, return `-1`.\n\n### Example 1:\n```\nInput: \"leetcode\"\n[\"leet\",\"code\"]\nOutput: 2\nExplanation: Partitioned into 2 words: \"leet\" and \"code\".\n```\n\n### Example 2:\n```\nInput: \"applepie\"\n[\"apple\",\"pie\"]\nOutput: 2\nExplanation: \"apple\" + \"pie\" = 2 words.\n```",
    "difficulty": "MEDIUM",
    "category": "DSA",
    "patterns": [
      "Dynamic Programming",
      "Trie",
      "String"
    ],
    "topics": [
      "Dynamic Programming",
      "Trie",
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
        "boilerplate": "def minimumPartitionOfAStringUsingDictionaryWords(*args):\n    # TODO: Implement solution for Minimum Partition of a String Using Dictionary Words\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = minimumPartitionOfAStringUsingDictionaryWords(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(minimumPartitionOfAStringUsingDictionaryWords(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function minimumPartitionOfAStringUsingDictionaryWords(...args) {\n    // TODO: Implement solution for Minimum Partition of a String Using Dictionary Words\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(minimumPartitionOfAStringUsingDictionaryWords(...parsed)));\n    } catch (e) {\n        console.log(minimumPartitionOfAStringUsingDictionaryWords(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Minimum Partition of a String Using Dictionary Words\n        // TODO: Read input from cin and implement solution\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        // TODO: Read from br and implement solution\n    }\n}\n"
      }
    ],
    "sampleTestCases": [
      {
        "input": "\"leetcode\"\n[\"leet\",\"code\"]",
        "output": "2",
        "explanation": "Partitioned into 2 words: \"leet\" and \"code\"."
      },
      {
        "input": "\"applepie\"\n[\"apple\",\"pie\"]",
        "output": "2",
        "explanation": "\"apple\" + \"pie\" = 2 words."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "\"leetcode\"\n[\"leet\",\"code\"]",
        "output": "2",
        "isHidden": true
      },
      {
        "input": "\"applepie\"\n[\"apple\",\"pie\"]",
        "output": "2",
        "isHidden": true
      },
      {
        "input": "\"catsandog\"\n[\"cats\",\"dog\",\"sand\",\"and\",\"cat\"]",
        "output": "-1",
        "isHidden": true
      }
    ],
    "hints": [
      "Use dynamic programming: dp[i] = min(dp[j] + 1) for all j such that s[j:i] is in dict."
    ],
    "editorial": {
      "approach": "Optimal Approach for Minimum Partition of a String Using Dictionary Words",
      "solutionMarkdown": "### Optimal Solution\n\nBottom-up 1D DP array initialized to infinity. dp[i] represents min segments for s[0:i].\n\n### Complexity\n- Time: O(N * L), Space: O(N)",
      "timeComplexity": "O(N * L)",
      "spaceComplexity": "O(N)"
    },
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0
  },
  {
    "title": "Minimum Path Sum",
    "slug": "minimum-path-sum",
    "description": "Given a `m x n` `grid` filled with non-negative numbers, find a path from top left to bottom right, which minimizes the sum of all numbers along its path. You can only move either down or right.\n\n### Example 1:\n```\nInput: [[1,3,1],[1,5,1],[4,2,1]]\nOutput: 7\nExplanation: Path 1 -> 3 -> 1 -> 1 -> 1 minimizes sum to 7.\n```\n\n### Example 2:\n```\nInput: [[1,2,3],[4,5,6]]\nOutput: 12\nExplanation: Minimum path sum is 12.\n```",
    "difficulty": "MEDIUM",
    "category": "DP",
    "patterns": [
      "Dynamic Programming",
      "Grid"
    ],
    "topics": [
      "Dynamic Programming",
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
        "company": "Wipro",
        "frequencyCount": 7,
        "yearReported": 2025
      },
      {
        "company": "Adobe",
        "frequencyCount": 7,
        "yearReported": 2025
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
        "boilerplate": "def minimumPathSum(*args):\n    # TODO: Implement solution for Minimum Path Sum\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = minimumPathSum(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(minimumPathSum(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function minimumPathSum(...args) {\n    // TODO: Implement solution for Minimum Path Sum\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(minimumPathSum(...parsed)));\n    } catch (e) {\n        console.log(minimumPathSum(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Minimum Path Sum\n        // TODO: Read input from cin and implement solution\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        // TODO: Read from br and implement solution\n    }\n}\n"
      }
    ],
    "sampleTestCases": [
      {
        "input": "[[1,3,1],[1,5,1],[4,2,1]]",
        "output": "7",
        "explanation": "Path 1 -> 3 -> 1 -> 1 -> 1 minimizes sum to 7."
      },
      {
        "input": "[[1,2,3],[4,5,6]]",
        "output": "12",
        "explanation": "Minimum path sum is 12."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "[[1,3,1],[1,5,1],[4,2,1]]",
        "output": "7",
        "isHidden": true
      },
      {
        "input": "[[1,2,3],[4,5,6]]",
        "output": "12",
        "isHidden": true
      }
    ],
    "hints": [
      "grid[r][c] += min(grid[r-1][c], grid[r][c-1]) in-place."
    ],
    "editorial": {
      "approach": "Optimal Approach for Minimum Path Sum",
      "solutionMarkdown": "### Optimal Solution\n\nBottom-up 2D grid DP computing minimal cumulative cost.\n\n### Complexity\n- Time: O(M * N), Space: O(1) in-place",
      "timeComplexity": "O(M * N)",
      "spaceComplexity": "O(1) in-place"
    },
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0
  },
  {
    "title": "Minimum Remove to Make Valid Parentheses",
    "slug": "minimum-remove-to-make-valid-parentheses",
    "description": "Given a string `s` of `'('` , `')'` and lowercase English characters. Remove the minimum number of parentheses so that the resulting parentheses string is valid.\n\n### Example 1:\n```\nInput: \"lee(t(c)o)de)\"\nOutput: \"lee(t(c)o)de\"\nExplanation: Remove the last closing bracket.\n```\n\n### Example 2:\n```\nInput: \"a)b(c)d\"\nOutput: \"ab(c)d\"\nExplanation: Remove ')' at index 1.\n```",
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
        "boilerplate": "def minimumRemoveToMakeValidParentheses(*args):\n    # TODO: Implement solution for Minimum Remove to Make Valid Parentheses\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = minimumRemoveToMakeValidParentheses(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(minimumRemoveToMakeValidParentheses(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function minimumRemoveToMakeValidParentheses(...args) {\n    // TODO: Implement solution for Minimum Remove to Make Valid Parentheses\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(minimumRemoveToMakeValidParentheses(...parsed)));\n    } catch (e) {\n        console.log(minimumRemoveToMakeValidParentheses(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Minimum Remove to Make Valid Parentheses\n        // TODO: Read input from cin and implement solution\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        // TODO: Read from br and implement solution\n    }\n}\n"
      }
    ],
    "sampleTestCases": [
      {
        "input": "\"lee(t(c)o)de)\"",
        "output": "\"lee(t(c)o)de\"",
        "explanation": "Remove the last closing bracket."
      },
      {
        "input": "\"a)b(c)d\"",
        "output": "\"ab(c)d\"",
        "explanation": "Remove ')' at index 1."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "\"lee(t(c)o)de)\"",
        "output": "\"lee(t(c)o)de\"",
        "isHidden": true
      },
      {
        "input": "\"a)b(c)d\"",
        "output": "\"ab(c)d\"",
        "isHidden": true
      },
      {
        "input": "\"))((\"",
        "output": "\"\"",
        "isHidden": true
      }
    ],
    "hints": [
      "Use a stack to keep indices of unmatched '(' and ')', then filter them out."
    ],
    "editorial": {
      "approach": "Optimal Approach for Minimum Remove to Make Valid Parentheses",
      "solutionMarkdown": "### Optimal Solution\n\nPush index of '(' to stack. On ')', pop matching '(' or mark ')' for removal. Filter out unmatched indices.\n\n### Complexity\n- Time: O(N), Space: O(N)",
      "timeComplexity": "O(N)",
      "spaceComplexity": "O(N)"
    },
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0
  },
  {
    "title": "Minimum Size Subarray Sum",
    "slug": "minimum-size-subarray-sum",
    "description": "Given an array of positive integers `nums` and a positive integer `target`, return *the **minimal length** of a subarray whose sum is greater than or equal to* `target`. If there is no such subarray, return `0` instead.\n\n### Example 1:\n```\nInput: 7\n[2,3,1,2,4,3]\nOutput: 2\nExplanation: The subarray [4,3] has the minimal length under the problem constraint.\n```\n\n### Example 2:\n```\nInput: 4\n[1,4,4]\nOutput: 1\nExplanation: Single element [4] meets target.\n```",
    "difficulty": "MEDIUM",
    "category": "DSA",
    "patterns": [
      "Array",
      "Binary Search",
      "Sliding Window",
      "Prefix Sum"
    ],
    "topics": [
      "Array",
      "Binary Search",
      "Sliding Window",
      "Prefix Sum"
    ],
    "companyTags": [
      {
        "company": "Accenture",
        "yearReported": 2025,
        "verified": false,
        "frequencyCount": 25,
        "sourceNote": "Accenture Practice Bank #35"
      },
      {
        "company": "Capgemini",
        "frequencyCount": 7,
        "yearReported": 2024
      },
      {
        "company": "Flipkart",
        "frequencyCount": 7,
        "yearReported": 2024
      },
      {
        "company": "Oracle",
        "frequencyCount": 7,
        "yearReported": 2024
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
        "boilerplate": "def minimumSizeSubarraySum(*args):\n    # TODO: Implement solution for Minimum Size Subarray Sum\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = minimumSizeSubarraySum(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(minimumSizeSubarraySum(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function minimumSizeSubarraySum(...args) {\n    // TODO: Implement solution for Minimum Size Subarray Sum\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(minimumSizeSubarraySum(...parsed)));\n    } catch (e) {\n        console.log(minimumSizeSubarraySum(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Minimum Size Subarray Sum\n        // TODO: Read input from cin and implement solution\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        // TODO: Read from br and implement solution\n    }\n}\n"
      }
    ],
    "sampleTestCases": [
      {
        "input": "7\n[2,3,1,2,4,3]",
        "output": "2",
        "explanation": "The subarray [4,3] has the minimal length under the problem constraint."
      },
      {
        "input": "4\n[1,4,4]",
        "output": "1",
        "explanation": "Single element [4] meets target."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "7\n[2,3,1,2,4,3]",
        "output": "2",
        "isHidden": true
      },
      {
        "input": "4\n[1,4,4]",
        "output": "1",
        "isHidden": true
      },
      {
        "input": "11\n[1,1,1,1,1,1,1,1]",
        "output": "0",
        "isHidden": true
      }
    ],
    "hints": [
      "Use a variable sliding window: expand right pointer, then contract left pointer while window_sum >= target."
    ],
    "editorial": {
      "approach": "Optimal Approach for Minimum Size Subarray Sum",
      "solutionMarkdown": "### Optimal Solution\n\nTwo pointer sliding window. Add nums[right] to sum. While sum >= target, update min_len and subtract nums[left++].\n\n### Complexity\n- Time: O(N), Space: O(1)",
      "timeComplexity": "O(N)",
      "spaceComplexity": "O(1)"
    },
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0
  },
  {
    "title": "Minimum Spanning Tree (Kruskal's Algorithm)",
    "slug": "minimum-spanning-tree-kruskal",
    "description": "Given a weighted, undirected and connected graph with $V$ vertices and $E$ edges, find the sum of the weights of the edges in the Minimum Spanning Tree (MST) using Kruskal's algorithm.\\n\\n### Example 1:\\n```\\nInput:\\n4 5\\n0 1 10\\n0 2 6\\n0 3 5\\n1 3 15\\n2 3 4\\nOutput: 19\\nExplanation: Edges in MST are (2, 3) weight 4, (0, 3) weight 5, and (0, 1) weight 10. Total weight = 4 + 5 + 10 = 19.\\n```\\n\\n### Example 2:\\n```\\nInput:\\n3 3\\n0 1 5\\n1 2 10\\n0 2 1\\nOutput: 6\\nExplanation: Edges (0, 2) weight 1 and (0, 1) weight 5 form MST with sum 6.\\n```\\n\\n### Constraints:\\n- $1 \\le V \\le 10^4$\\n- $1 \\le E \\le 5 \\times 10^4$\\n- $1 \\le \\text{weight} \\le 10^5$",
    "difficulty": "MEDIUM",
    "category": "DSA",
    "patterns": [
      "Greedy",
      "Graph",
      "Disjoint Set"
    ],
    "topics": [
      "Graph",
      "Minimum Spanning Tree",
      "Union Find"
    ],
    "companyTags": [
      {
        "company": "Capgemini",
        "frequencyCount": 6,
        "yearReported": 2024
      },
      {
        "company": "Flipkart",
        "frequencyCount": 7,
        "yearReported": 2024
      }
    ],
    "sampleTestCases": [
      {
        "input": "4 5\n0 1 10\n0 2 6\n0 3 5\n1 3 15\n2 3 4",
        "output": "19",
        "explanation": "MST sum is 19."
      },
      {
        "input": "3 3\n0 1 5\n1 2 10\n0 2 1",
        "output": "6",
        "explanation": "Edges 1 and 5 chosen."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "2 1\n0 1 7",
        "output": "7"
      },
      {
        "input": "3 2\n0 1 3\n1 2 4",
        "output": "7"
      },
      {
        "input": "4 3\n0 1 1\n1 2 2\n2 3 3",
        "output": "6"
      }
    ],
    "hints": [
      "Sort all edges by weight in ascending order.",
      "Iterate through sorted edges and use DSU to check if adding an edge forms a cycle. If not, include its weight."
    ],
    "editorial": {
      "approach": "Kruskal's Algorithm with DSU",
      "solutionMarkdown": "### Kruskal's Method\nSort edges by weight. Greedily add edges that connect disconnected components using DSU until $V-1$ edges are added.",
      "timeComplexity": "O(E log E)",
      "spaceComplexity": "O(V)"
    },
    "starterCode": [
      {
        "language": "python",
        "boilerplate": "def minimumSpanningTreeKruskal(*args):\n    # TODO: Implement solution for Minimum Spanning Tree (Kruskal's Algorithm)\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = minimumSpanningTreeKruskal(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(minimumSpanningTreeKruskal(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function minimumSpanningTreeKruskal(...args) {\n    // TODO: Implement solution for Minimum Spanning Tree (Kruskal's Algorithm)\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try {\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(minimumSpanningTreeKruskal(...parsed)));\n    } catch (e) {\n        console.log(minimumSpanningTreeKruskal(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // TODO: Read input from cin and implement solution for Minimum Spanning Tree (Kruskal's Algorithm)\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        // TODO: Read from br and implement solution for Minimum Spanning Tree (Kruskal's Algorithm)\n    }\n}\n"
      }
    ],
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0
  },
  {
    "title": "Minimum Swaps to Sort an Array",
    "slug": "minimum-swaps-to-sort-an-array",
    "description": "Given an array of $n$ distinct integers, find the minimum number of swaps required to sort the array in ascending order.\\n\\n### Example 1:\\n```\\nInput: [2, 8, 5, 4]\\nOutput: 1\\nExplanation: Swap 8 with 4 to get [2, 4, 5, 8]. Minimum swaps = 1.\\n```\\n\\n### Example 2:\\n```\\nInput: [10, 19, 6, 3, 5]\\nOutput: 2\\nExplanation: Swap 10 with 3, then 19 with 5.\\n```\\n\\n### Constraints:\\n- $1 \\le n \\le 10^5$\\n- $1 \\le arr[i] \\le 10^9$, all elements distinct.",
    "difficulty": "MEDIUM",
    "patterns": [
      "Array",
      "Cycle Decomposition",
      "Greedy"
    ],
    "topics": [
      "Array",
      "Sorting",
      "Graph"
    ],
    "sampleTestCases": [
      {
        "input": "[2, 8, 5, 4]",
        "output": "1",
        "explanation": "1 swap required."
      },
      {
        "input": "[10, 19, 6, 3, 5]",
        "output": "2",
        "explanation": "2 swaps required."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "[1, 2, 3]",
        "output": "0"
      },
      {
        "input": "[2, 1]",
        "output": "1"
      },
      {
        "input": "[4, 3, 2, 1]",
        "output": "2"
      }
    ],
    "hints": [
      "Pair each element with its initial index and sort.",
      "Find cycle decomposition: a cycle of length $L$ requires $L - 1$ swaps."
    ],
    "editorial": {
      "approach": "Permutation Cycle Decomposition",
      "solutionMarkdown": "Sum `(cycle_size - 1)` across all disjoint cycles in the permutation graph.",
      "timeComplexity": "O(N log N)",
      "spaceComplexity": "O(N)"
    },
    "category": "DSA",
    "starterCode": [
      {
        "language": "python",
        "boilerplate": "def minimumSwapsToSortAnArray(*args):\n    # TODO: Implement solution for Minimum Swaps to Sort an Array\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = minimumSwapsToSortAnArray(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(minimumSwapsToSortAnArray(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function minimumSwapsToSortAnArray(...args) {\n    // TODO: Implement solution for Minimum Swaps to Sort an Array\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try {\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(minimumSwapsToSortAnArray(...parsed)));\n    } catch (e) {\n        console.log(minimumSwapsToSortAnArray(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // TODO: Read input from cin and implement solution for Minimum Swaps to Sort an Array\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        // TODO: Read from br and implement solution for Minimum Swaps to Sort an Array\n    }\n}\n"
      }
    ],
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0,
    "companyTags": [
      {
        "company": "Oracle",
        "frequencyCount": 7,
        "yearReported": 2024
      }
    ]
  },
  {
    "title": "Minimum Window Substring",
    "slug": "minimum-window-substring",
    "description": "Given two strings `s` and `t` of lengths `m` and `n` respectively, return the **minimum window substring** of `s` such that every character in `t` (including duplicates) is included in the window. If there is no such substring, return the empty string `\"\"`.\n\n### Example 1:\n```\nInput: ADOBECODEBANC\nABC\nOutput: \"BANC\"\nExplanation: Minimum window substring is 'BANC'.\n```\n\n### Example 2:\n```\nInput: a\na\nOutput: \"a\"\nExplanation: Single char match.\n```",
    "difficulty": "HARD",
    "category": "DSA",
    "patterns": [
      "Sliding Window",
      "Hash Table",
      "String"
    ],
    "topics": [
      "Sliding Window",
      "Hash Table",
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
        "company": "Infosys",
        "yearReported": 2025,
        "verified": true,
        "frequencyCount": 42,
        "sourceNote": "Infosys Interview Question #19"
      },
      {
        "company": "TCS",
        "yearReported": 2025,
        "verified": false,
        "frequencyCount": 30,
        "sourceNote": "TCS Practice Bank #38"
      },
      {
        "company": "Capgemini",
        "frequencyCount": 7,
        "yearReported": 2024
      },
      {
        "company": "Flipkart",
        "frequencyCount": 7,
        "yearReported": 2024
      },
      {
        "company": "Oracle",
        "frequencyCount": 7,
        "yearReported": 2024
      },
      {
        "company": "Adobe",
        "frequencyCount": 7,
        "yearReported": 2025
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
        "boilerplate": "def minimumWindowSubstring(*args):\n    # TODO: Implement solution for Minimum Window Substring\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = minimumWindowSubstring(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(minimumWindowSubstring(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function minimumWindowSubstring(...args) {\n    // TODO: Implement solution for Minimum Window Substring\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(minimumWindowSubstring(...parsed)));\n    } catch (e) {\n        console.log(minimumWindowSubstring(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Minimum Window Substring\n        // TODO: Read input from cin and implement solution\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        // TODO: Read from br and implement solution\n    }\n}\n"
      }
    ],
    "sampleTestCases": [
      {
        "input": "ADOBECODEBANC\nABC",
        "output": "\"BANC\"",
        "explanation": "Minimum window substring is 'BANC'."
      },
      {
        "input": "a\na",
        "output": "\"a\"",
        "explanation": "Single char match."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "ADOBECODEBANC\nABC",
        "output": "\"BANC\"",
        "isHidden": true
      },
      {
        "input": "a\na",
        "output": "\"a\"",
        "isHidden": true
      },
      {
        "input": "a\naa",
        "output": "\"\"",
        "isHidden": true
      }
    ],
    "hints": [
      "Sliding window with target count map and have/need match counter."
    ],
    "editorial": {
      "approach": "Optimal Approach for Minimum Window Substring",
      "solutionMarkdown": "### Optimal Solution\n\nExpand right until window is valid (have == need). Contract left to find minimal valid length.\n\n### Complexity\n- Time: O(M + N), Space: O(1) alphabet size",
      "timeComplexity": "O(M + N)",
      "spaceComplexity": "O(1) alphabet size"
    },
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0
  },
  {
    "title": "Missing Number",
    "slug": "missing-number",
    "description": "Given an array `nums` containing `n` distinct numbers in the range `[0, n]`, return *the only number in the range that is missing from the array*.\n\n### Example 1:\n```\nInput: [3,0,1]\nOutput: 2\nExplanation: n = 3, numbers are [0, 1, 3], missing 2.\n```\n\n### Example 2:\n```\nInput: [0,1]\nOutput: 2\nExplanation: n = 2, numbers are [0, 1], missing 2.\n```",
    "difficulty": "EASY",
    "category": "DSA",
    "patterns": [
      "Array",
      "Hash Table",
      "Math",
      "Binary Search",
      "Bit Manipulation",
      "Sorting"
    ],
    "topics": [
      "Array",
      "Hash Table",
      "Math",
      "Binary Search",
      "Bit Manipulation",
      "Sorting"
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
        "sourceNote": "Accenture Practice Bank #13"
      },
      {
        "company": "Wipro",
        "frequencyCount": 7,
        "yearReported": 2025
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
        "boilerplate": "def missingNumber(*args):\n    # TODO: Implement solution for Missing Number\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = missingNumber(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(missingNumber(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function missingNumber(...args) {\n    // TODO: Implement solution for Missing Number\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(missingNumber(...parsed)));\n    } catch (e) {\n        console.log(missingNumber(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Missing Number\n        // TODO: Read input from cin and implement solution\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        // TODO: Read from br and implement solution\n    }\n}\n"
      }
    ],
    "sampleTestCases": [
      {
        "input": "[3,0,1]",
        "output": "2",
        "explanation": "n = 3, numbers are [0, 1, 3], missing 2."
      },
      {
        "input": "[0,1]",
        "output": "2",
        "explanation": "n = 2, numbers are [0, 1], missing 2."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "[3,0,1]",
        "output": "2",
        "isHidden": true
      },
      {
        "input": "[0,1]",
        "output": "2",
        "isHidden": true
      },
      {
        "input": "[9,6,4,2,3,5,7,0,1]",
        "output": "8",
        "isHidden": true
      }
    ],
    "hints": [
      "XOR all numbers from 0 to n with all numbers in the array, or use Gauss formula n*(n+1)//2."
    ],
    "editorial": {
      "approach": "Optimal Approach for Missing Number",
      "solutionMarkdown": "### Optimal Solution\n\nUse bitwise XOR: missing = n ^ (nums[0] ^ 0) ^ (nums[1] ^ 1)...\n\n### Complexity\n- Time: O(N), Space: O(1)",
      "timeComplexity": "O(N)",
      "spaceComplexity": "O(1)"
    },
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0
  },
  {
    "title": "Missing Ranges",
    "slug": "missing-ranges",
    "description": "You are given an inclusive range `[lower, upper]` and a **sorted unique** integer array `nums`. Return *the shortest sorted list of ranges that cover every missing number exactly*.\n\n### Example 1:\n```\nInput: [0,1,3,50,75]\n0\n99\nOutput: [[2,2],[4,49],[51,74],[76,99]]\nExplanation: Ranges missing from [0, 99].\n```\n\n### Example 2:\n```\nInput: [-1]\n-1\n-1\nOutput: []\nExplanation: No numbers missing.\n```",
    "difficulty": "EASY",
    "category": "DSA",
    "patterns": [
      "Array"
    ],
    "topics": [
      "Array"
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
        "boilerplate": "def missingRanges(*args):\n    # TODO: Implement solution for Missing Ranges\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = missingRanges(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(missingRanges(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function missingRanges(...args) {\n    // TODO: Implement solution for Missing Ranges\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(missingRanges(...parsed)));\n    } catch (e) {\n        console.log(missingRanges(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Missing Ranges\n        // TODO: Read input from cin and implement solution\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        // TODO: Read from br and implement solution\n    }\n}\n"
      }
    ],
    "sampleTestCases": [
      {
        "input": "[0,1,3,50,75]\n0\n99",
        "output": "[[2,2],[4,49],[51,74],[76,99]]",
        "explanation": "Ranges missing from [0, 99]."
      },
      {
        "input": "[-1]\n-1\n-1",
        "output": "[]",
        "explanation": "No numbers missing."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "[0,1,3,50,75]\n0\n99",
        "output": "[[2,2],[4,49],[51,74],[76,99]]",
        "isHidden": true
      },
      {
        "input": "[-1]\n-1\n-1",
        "output": "[]",
        "isHidden": true
      },
      {
        "input": "[]\n1\n1",
        "output": "[[1,1]]",
        "isHidden": true
      }
    ],
    "hints": [
      "Iterate from lower to upper comparing with consecutive elements."
    ],
    "editorial": {
      "approach": "Optimal Approach for Missing Ranges",
      "solutionMarkdown": "### Optimal Solution\n\nTrack expected next number curr = lower. For each x in nums: if x > curr, add range [curr, x-1]. Set curr = x+1.\n\n### Complexity\n- Time: O(N), Space: O(1)",
      "timeComplexity": "O(N)",
      "spaceComplexity": "O(1)"
    },
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0
  },
  {
    "title": "Modify String (Lexicographically Largest Subsequence with Distinct Characters)",
    "slug": "modify-string-lexicographically-largest-subsequence-with-distinct-characters",
    "description": "Given a string `s`, return the lexicographically largest subsequence of `s` that contains all the distinct characters of `s` exactly once.\\n\\n### Example 1:\\n```\\nInput: s = \"abacaba\"\\nOutput: \"cba\"\\nExplanation: Distinct characters are 'a', 'b', 'c'. The lexicographically largest subsequence containing each once is \"cba\".\\n```\\n\\n### Example 2:\\n```\\nInput: s = \"cbacdcbc\"\\nOutput: \"dcb\"\\nExplanation: Subsequence containing each unique character once.\\n```\\n\\n### Constraints:\\n- $1 \\le |s| \\le 10^4$\\n- `s` consists of lowercase English letters.",
    "difficulty": "MEDIUM",
    "patterns": [
      "Monotonic Stack",
      "Greedy"
    ],
    "topics": [
      "String",
      "Stack",
      "Greedy",
      "Monotonic Stack"
    ],
    "sampleTestCases": [
      {
        "input": "s = \"abacaba\"",
        "output": "cba",
        "explanation": "Lexicographically largest distinct character subsequence."
      },
      {
        "input": "s = \"cbacdcbc\"",
        "output": "dcb",
        "explanation": "All unique characters kept once."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "s = \"a\"",
        "output": "a"
      },
      {
        "input": "s = \"xyz\"",
        "output": "xyz"
      },
      {
        "input": "s = \"bbcaac\"",
        "output": "bac"
      }
    ],
    "hints": [
      "Track last occurrence index of each character.",
      "Use a monotonic stack popping smaller characters if they appear again later in the string."
    ],
    "editorial": {
      "approach": "Greedy Monotonic Decreasing Stack",
      "solutionMarkdown": "Similar to Remove Duplicate Letters but maintaining a descending stack to maximize lexicographical rank.",
      "timeComplexity": "O(N)",
      "spaceComplexity": "O(1)"
    },
    "category": "DSA",
    "starterCode": [
      {
        "language": "python",
        "boilerplate": "def modifyStringLexicographicallyLargestSubsequenceWithDistinctCharacters(*args):\n    # TODO: Implement solution for Modify String (Lexicographically Largest Subsequence with Distinct Characters)\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = modifyStringLexicographicallyLargestSubsequenceWithDistinctCharacters(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(modifyStringLexicographicallyLargestSubsequenceWithDistinctCharacters(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function modifyStringLexicographicallyLargestSubsequenceWithDistinctCharacters(...args) {\n    // TODO: Implement solution for Modify String (Lexicographically Largest Subsequence with Distinct Characters)\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try {\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(modifyStringLexicographicallyLargestSubsequenceWithDistinctCharacters(...parsed)));\n    } catch (e) {\n        console.log(modifyStringLexicographicallyLargestSubsequenceWithDistinctCharacters(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // TODO: Read input from cin and implement solution for Modify String (Lexicographically Largest Subsequence with Distinct Characters)\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        // TODO: Read from br and implement solution for Modify String (Lexicographically Largest Subsequence with Distinct Characters)\n    }\n}\n"
      }
    ],
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0,
    "companyTags": [
      {
        "company": "Oracle",
        "frequencyCount": 7,
        "yearReported": 2024
      }
    ]
  },
  {
    "title": "Move Negative Numbers to the Left",
    "slug": "move-negative-numbers-to-the-left",
    "description": "Given an array of integers `arr`, rearrange the array so that all negative numbers appear before all positive numbers and zeroes. Order among positive or negative numbers does not need to be preserved.\\n\\nOutput the rearranged array.\\n\\n### Example 1:\\n```\\nInput: [-12, 11, -13, -5, 6, -7, 5, -3, -6]\\nOutput: [-12, -13, -5, -7, -3, -6, 11, 6, 5]\\nExplanation: All negative numbers are on the left.\\n```\\n\\n### Constraints:\\n- $1 \\le |arr| \\le 10^5$\\n- $-10^9 \\le arr[i] \\le 10^9$",
    "difficulty": "EASY",
    "patterns": [
      "Two Pointers",
      "Partition"
    ],
    "topics": [
      "Array",
      "Two Pointers"
    ],
    "sampleTestCases": [
      {
        "input": "[-12, 11, -13, -5, 6, -7, 5, -3, -6]",
        "output": "[-12, -13, -5, -7, -3, -6, 11, 6, 5]",
        "explanation": "Negatives partitioned to left."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "[1, 2, 3]",
        "output": "[1, 2, 3]"
      },
      {
        "input": "[-1, -2, -3]",
        "output": "[-1, -2, -3]"
      },
      {
        "input": "[0, -1, 1]",
        "output": "[-1, 0, 1]"
      }
    ],
    "hints": [
      "Use two pointers or Lomuto/Hoare partition scheme from Quicksort."
    ],
    "editorial": {
      "approach": "Two-Pointer In-Place Partition",
      "solutionMarkdown": "Swap negatives to left and positives to right.",
      "timeComplexity": "O(N)",
      "spaceComplexity": "O(1)"
    },
    "category": "DSA",
    "starterCode": [
      {
        "language": "python",
        "boilerplate": "def moveNegativeNumbersToTheLeft(*args):\n    # TODO: Implement solution for Move Negative Numbers to the Left\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = moveNegativeNumbersToTheLeft(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(moveNegativeNumbersToTheLeft(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function moveNegativeNumbersToTheLeft(...args) {\n    // TODO: Implement solution for Move Negative Numbers to the Left\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try {\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(moveNegativeNumbersToTheLeft(...parsed)));\n    } catch (e) {\n        console.log(moveNegativeNumbersToTheLeft(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // TODO: Read input from cin and implement solution for Move Negative Numbers to the Left\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        // TODO: Read from br and implement solution for Move Negative Numbers to the Left\n    }\n}\n"
      }
    ],
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0,
    "companyTags": [
      {
        "company": "Adobe",
        "frequencyCount": 7,
        "yearReported": 2025
      }
    ]
  },
  {
    "title": "Move Zeroes",
    "slug": "move-zeroes",
    "description": "Given an integer array `nums`, move all `0`'s to the end of it while maintaining the relative order of the non-zero elements.\n\n### Example 1:\n```\nInput: [0,1,0,3,12]\nOutput: [1,3,12,0,0]\nExplanation: All non-zeros placed in order, zeroes shifted to end.\n```\n\n### Example 2:\n```\nInput: [0]\nOutput: [0]\nExplanation: Single zero stays at index 0.\n```",
    "difficulty": "EASY",
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
        "sourceNote": "Accenture Practice Bank #7"
      },
      {
        "company": "TCS",
        "yearReported": 2025,
        "verified": false,
        "frequencyCount": 30,
        "sourceNote": "TCS Practice Bank #14"
      },
      {
        "company": "Capgemini",
        "frequencyCount": 7,
        "yearReported": 2024
      },
      {
        "company": "Wipro",
        "frequencyCount": 7,
        "yearReported": 2025
      },
      {
        "company": "Oracle",
        "frequencyCount": 7,
        "yearReported": 2024
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
        "boilerplate": "def moveZeroes(*args):\n    # TODO: Implement solution for Move Zeroes\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = moveZeroes(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(moveZeroes(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function moveZeroes(...args) {\n    // TODO: Implement solution for Move Zeroes\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(moveZeroes(...parsed)));\n    } catch (e) {\n        console.log(moveZeroes(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Move Zeroes\n        // TODO: Read input from cin and implement solution\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        // TODO: Read from br and implement solution\n    }\n}\n"
      }
    ],
    "sampleTestCases": [
      {
        "input": "[0,1,0,3,12]",
        "output": "[1,3,12,0,0]",
        "explanation": "All non-zeros placed in order, zeroes shifted to end."
      },
      {
        "input": "[0]",
        "output": "[0]",
        "explanation": "Single zero stays at index 0."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "[0,1,0,3,12]",
        "output": "[1,3,12,0,0]",
        "isHidden": true
      },
      {
        "input": "[0]",
        "output": "[0]",
        "isHidden": true
      },
      {
        "input": "[1,2,3]",
        "output": "[1,2,3]",
        "isHidden": true
      }
    ],
    "hints": [
      "Use two pointers: write_ptr increments only when a non-zero element is swapped in."
    ],
    "editorial": {
      "approach": "Optimal Approach for Move Zeroes",
      "solutionMarkdown": "### Optimal Solution\n\nTwo-pointer in-place partition. Swap nums[insert_pos] with nums[i] whenever nums[i] != 0.\n\n### Complexity\n- Time: O(N), Space: O(1)",
      "timeComplexity": "O(N)",
      "spaceComplexity": "O(1)"
    },
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0
  },
  {
    "title": "N-Queens",
    "slug": "n-queens",
    "description": "The **n-queens** puzzle is the problem of placing `n` queens on an `n x n` chessboard such that no two queens attack each other.\n\nGiven an integer `n`, return *all distinct solutions to the **n-queens puzzle***.\n\n### Example 1:\n```\nInput: 4\nOutput: [[\".Q..\", \"...Q\", \"Q...\", \"..Q.\"], [\"..Q.\", \"Q...\", \"...Q\", \".Q..\"]]\nExplanation: Two distinct 4-queens board configurations.\n```\n\n### Example 2:\n```\nInput: 1\nOutput: [[\"Q\"]]\nExplanation: Single queen on 1x1 board.\n```",
    "difficulty": "HARD",
    "category": "DSA",
    "patterns": [
      "Backtracking",
      "Recursion"
    ],
    "topics": [
      "Backtracking",
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
        "company": "Microsoft",
        "yearReported": 2025,
        "verified": true,
        "frequencyCount": 35,
        "sourceNote": "Reported in Microsoft 2021-2026 interview set"
      },
      {
        "company": "TCS",
        "yearReported": 2025,
        "verified": false,
        "frequencyCount": 30,
        "sourceNote": "TCS Practice Bank #97"
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
        "boilerplate": "def nQueens(*args):\n    # TODO: Implement solution for N-Queens\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = nQueens(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(nQueens(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function nQueens(...args) {\n    // TODO: Implement solution for N-Queens\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(nQueens(...parsed)));\n    } catch (e) {\n        console.log(nQueens(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for N-Queens\n        // TODO: Read input from cin and implement solution\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        // TODO: Read from br and implement solution\n    }\n}\n"
      }
    ],
    "sampleTestCases": [
      {
        "input": "4",
        "output": "[[\".Q..\", \"...Q\", \"Q...\", \"..Q.\"], [\"..Q.\", \"Q...\", \"...Q\", \".Q..\"]]",
        "explanation": "Two distinct 4-queens board configurations."
      },
      {
        "input": "1",
        "output": "[[\"Q\"]]",
        "explanation": "Single queen on 1x1 board."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "4",
        "output": "[[\".Q..\", \"...Q\", \"Q...\", \"..Q.\"], [\"..Q.\", \"Q...\", \"...Q\", \".Q..\"]]",
        "isHidden": true
      },
      {
        "input": "1",
        "output": "[[\"Q\"]]",
        "isHidden": true
      }
    ],
    "hints": [
      "Row by row DFS tracking sets of used columns, positive diagonals (r + c), and negative diagonals (r - c)."
    ],
    "editorial": {
      "approach": "Optimal Approach for N-Queens",
      "solutionMarkdown": "### Optimal Solution\n\nBacktracking with three hash sets: cols, pos_diag (r+c), neg_diag (r-c).\n\n### Complexity\n- Time: O(N!), Space: O(N)",
      "timeComplexity": "O(N!)",
      "spaceComplexity": "O(N)"
    },
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0
  },
  {
    "title": "N-Queens II",
    "slug": "n-queens-ii",
    "description": "The **n-queens** puzzle is the problem of placing `n` queens on an `n x n` chessboard such that no two queens attack each other. Given an integer `n`, return *the number of distinct solutions to the **n-queens puzzle***.\n\n### Example 1:\n```\nInput: 4\nOutput: 2\nExplanation: There are two distinct solutions to the 4-queens puzzle.\n```\n\n### Example 2:\n```\nInput: 1\nOutput: 1\nExplanation: One solution for 1 queen.\n```",
    "difficulty": "HARD",
    "category": "DSA",
    "patterns": [
      "Backtracking"
    ],
    "topics": [
      "Backtracking"
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
        "boilerplate": "def nQueensIi(*args):\n    # TODO: Implement solution for N-Queens II\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = nQueensIi(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(nQueensIi(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function nQueensIi(...args) {\n    // TODO: Implement solution for N-Queens II\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(nQueensIi(...parsed)));\n    } catch (e) {\n        console.log(nQueensIi(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for N-Queens II\n        // TODO: Read input from cin and implement solution\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        // TODO: Read from br and implement solution\n    }\n}\n"
      }
    ],
    "sampleTestCases": [
      {
        "input": "4",
        "output": "2",
        "explanation": "There are two distinct solutions to the 4-queens puzzle."
      },
      {
        "input": "1",
        "output": "1",
        "explanation": "One solution for 1 queen."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "4",
        "output": "2",
        "isHidden": true
      },
      {
        "input": "1",
        "output": "1",
        "isHidden": true
      },
      {
        "input": "5",
        "output": "10",
        "isHidden": true
      }
    ],
    "hints": [
      "Use bitmasks or sets for columns, main diagonals (r - c), and anti-diagonals (r + c)."
    ],
    "editorial": {
      "approach": "Optimal Approach for N-Queens II",
      "solutionMarkdown": "### Optimal Solution\n\nBacktracking row by row with boolean tracking sets for occupied columns and diagonals.\n\n### Complexity\n- Time: O(N!), Space: O(N)",
      "timeComplexity": "O(N!)",
      "spaceComplexity": "O(N)"
    },
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0
  },
  {
    "title": "Nested List Weight Sum",
    "slug": "nested-list-weight-sum",
    "description": "You are given a nested list of integers `nestedList`. Each element is either an integer or a list. The depth of an integer is the number of lists that it is inside of. Return *the sum of each integer in `nestedList` multiplied by its depth*.\n\n### Example 1:\n```\nInput: [[1,1],2,[1,1]]\nOutput: 10\nExplanation: Four 1's at depth 2, one 2 at depth 1. 4*2 + 2*1 = 10.\n```\n\n### Example 2:\n```\nInput: [1,[4,[6]]]\nOutput: 27\nExplanation: 1*1 + 4*2 + 6*3 = 27.\n```",
    "difficulty": "MEDIUM",
    "category": "DSA",
    "patterns": [
      "Depth-First Search",
      "Breadth-First Search"
    ],
    "topics": [
      "Depth-First Search",
      "Breadth-First Search"
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
        "boilerplate": "def nestedListWeightSum(*args):\n    # TODO: Implement solution for Nested List Weight Sum\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = nestedListWeightSum(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(nestedListWeightSum(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function nestedListWeightSum(...args) {\n    // TODO: Implement solution for Nested List Weight Sum\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(nestedListWeightSum(...parsed)));\n    } catch (e) {\n        console.log(nestedListWeightSum(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Nested List Weight Sum\n        // TODO: Read input from cin and implement solution\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        // TODO: Read from br and implement solution\n    }\n}\n"
      }
    ],
    "sampleTestCases": [
      {
        "input": "[[1,1],2,[1,1]]",
        "output": "10",
        "explanation": "Four 1's at depth 2, one 2 at depth 1. 4*2 + 2*1 = 10."
      },
      {
        "input": "[1,[4,[6]]]",
        "output": "27",
        "explanation": "1*1 + 4*2 + 6*3 = 27."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "[[1,1],2,[1,1]]",
        "output": "10",
        "isHidden": true
      },
      {
        "input": "[1,[4,[6]]]",
        "output": "27",
        "isHidden": true
      },
      {
        "input": "[0]",
        "output": "0",
        "isHidden": true
      }
    ],
    "hints": [
      "Pass current depth down in recursion; whenever encountering an integer, multiply by depth."
    ],
    "editorial": {
      "approach": "Optimal Approach for Nested List Weight Sum",
      "solutionMarkdown": "### Optimal Solution\n\nDFS passing depth parameter. If element is integer: sum += val * depth; else recurse on sublist with depth + 1.\n\n### Complexity\n- Time: O(N), Space: O(D) where D is max depth",
      "timeComplexity": "O(N)",
      "spaceComplexity": "O(D) where D is max depth"
    },
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0
  },
  {
    "title": "Network Delay Time",
    "slug": "network-delay-time",
    "description": "You are given a network of `n` nodes, labeled from `1` to `n`. You are also given `times`, a list of travel times as directed edges `times[i] = (ui, vi, wi)`. Return *the minimum time it takes for all the `n` nodes to receive the signal* from node `k`. If it is impossible, return `-1`.\n\n### Example 1:\n```\nInput: [[2,1,1],[2,3,1],[3,4,1]]\n4\n2\nOutput: 2\nExplanation: Signal reaches all nodes in 2 time units.\n```\n\n### Example 2:\n```\nInput: [[1,2,1]]\n2\n1\nOutput: 1\nExplanation: Direct edge delay 1.\n```",
    "difficulty": "MEDIUM",
    "category": "DSA",
    "patterns": [
      "Dijkstra",
      "Graph",
      "Heaps / Priority Queue"
    ],
    "topics": [
      "Dijkstra",
      "Graph",
      "Heaps / Priority Queue"
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
        "company": "Infosys",
        "yearReported": 2025,
        "verified": true,
        "frequencyCount": 42,
        "sourceNote": "Infosys Interview Question #73"
      },
      {
        "company": "TCS",
        "yearReported": 2025,
        "verified": false,
        "frequencyCount": 30,
        "sourceNote": "TCS Practice Bank #76"
      },
      {
        "company": "Capgemini",
        "frequencyCount": 7,
        "yearReported": 2024
      },
      {
        "company": "Flipkart",
        "frequencyCount": 7,
        "yearReported": 2024
      },
      {
        "company": "Oracle",
        "frequencyCount": 7,
        "yearReported": 2024
      },
      {
        "company": "Adobe",
        "frequencyCount": 7,
        "yearReported": 2025
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
        "boilerplate": "def networkDelayTime(*args):\n    # TODO: Implement solution for Network Delay Time\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = networkDelayTime(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(networkDelayTime(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function networkDelayTime(...args) {\n    // TODO: Implement solution for Network Delay Time\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(networkDelayTime(...parsed)));\n    } catch (e) {\n        console.log(networkDelayTime(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Network Delay Time\n        // TODO: Read input from cin and implement solution\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        // TODO: Read from br and implement solution\n    }\n}\n"
      }
    ],
    "sampleTestCases": [
      {
        "input": "[[2,1,1],[2,3,1],[3,4,1]]\n4\n2",
        "output": "2",
        "explanation": "Signal reaches all nodes in 2 time units."
      },
      {
        "input": "[[1,2,1]]\n2\n1",
        "output": "1",
        "explanation": "Direct edge delay 1."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "[[2,1,1],[2,3,1],[3,4,1]]\n4\n2",
        "output": "2",
        "isHidden": true
      },
      {
        "input": "[[1,2,1]]\n2\n1",
        "output": "1",
        "isHidden": true
      },
      {
        "input": "[[1,2,1]]\n2\n2",
        "output": "-1",
        "isHidden": true
      }
    ],
    "hints": [
      "Run Dijkstra's shortest path algorithm using a Min-Heap."
    ],
    "editorial": {
      "approach": "Optimal Approach for Network Delay Time",
      "solutionMarkdown": "### Optimal Solution\n\nDijkstra with priority queue. Return max distance in dist table or -1 if any node unreached.\n\n### Complexity\n- Time: O(E log V), Space: O(V + E)",
      "timeComplexity": "O(E log V)",
      "spaceComplexity": "O(V + E)"
    },
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0
  },
  {
    "title": "Next Greater Element I",
    "slug": "next-greater-element-i",
    "description": "The **next greater element** of some element `x` in an array is the first greater element that is to the right of `x` in the same array. Given two distinct integer arrays `nums1` and `nums2` where `nums1` is a subset of `nums2`, return *an array* `ans` *such that* `ans[i]` *is the next greater element of* `nums1[i]` *in* `nums2`, or `-1` if none exists.\n\n### Example 1:\n```\nInput: [4,1,2]\n[1,3,4,2]\nOutput: [-1,3,-1]\nExplanation: For 4: no greater element. For 1: next greater is 3. For 2: no greater element.\n```\n\n### Example 2:\n```\nInput: [2,4]\n[1,2,3,4]\nOutput: [3,-1]\nExplanation: For 2: next greater is 3. For 4: no greater element.\n```",
    "difficulty": "EASY",
    "category": "DSA",
    "patterns": [
      "Array",
      "Hash Table",
      "Stack",
      "Monotonic Stack"
    ],
    "topics": [
      "Array",
      "Hash Table",
      "Stack",
      "Monotonic Stack"
    ],
    "companyTags": [
      {
        "company": "Accenture",
        "yearReported": 2025,
        "verified": false,
        "frequencyCount": 25,
        "sourceNote": "Accenture Practice Bank #49"
      },
      {
        "company": "Infosys",
        "yearReported": 2025,
        "verified": true,
        "frequencyCount": 42,
        "sourceNote": "Infosys Interview Question #46"
      },
      {
        "company": "TCS",
        "yearReported": 2025,
        "verified": false,
        "frequencyCount": 30,
        "sourceNote": "TCS Practice Bank #45"
      },
      {
        "company": "Wipro",
        "frequencyCount": 7,
        "yearReported": 2025
      },
      {
        "company": "Oracle",
        "frequencyCount": 7,
        "yearReported": 2024
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
        "boilerplate": "def nextGreaterElementI(*args):\n    # TODO: Implement solution for Next Greater Element I\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = nextGreaterElementI(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(nextGreaterElementI(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function nextGreaterElementI(...args) {\n    // TODO: Implement solution for Next Greater Element I\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(nextGreaterElementI(...parsed)));\n    } catch (e) {\n        console.log(nextGreaterElementI(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Next Greater Element I\n        // TODO: Read input from cin and implement solution\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        // TODO: Read from br and implement solution\n    }\n}\n"
      }
    ],
    "sampleTestCases": [
      {
        "input": "[4,1,2]\n[1,3,4,2]",
        "output": "[-1,3,-1]",
        "explanation": "For 4: no greater element. For 1: next greater is 3. For 2: no greater element."
      },
      {
        "input": "[2,4]\n[1,2,3,4]",
        "output": "[3,-1]",
        "explanation": "For 2: next greater is 3. For 4: no greater element."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "[4,1,2]\n[1,3,4,2]",
        "output": "[-1,3,-1]",
        "isHidden": true
      },
      {
        "input": "[2,4]\n[1,2,3,4]",
        "output": "[3,-1]",
        "isHidden": true
      },
      {
        "input": "[1]\n[1]",
        "output": "[-1]",
        "isHidden": true
      }
    ],
    "hints": [
      "Use a monotonic decreasing stack and hash map on nums2, then map answers for nums1."
    ],
    "editorial": {
      "approach": "Optimal Approach for Next Greater Element I",
      "solutionMarkdown": "### Optimal Solution\n\nIterate nums2. While stack has element smaller than current x, pop and record next_greater[pop] = x. Lookup for nums1 in O(1).\n\n### Complexity\n- Time: O(N1 + N2), Space: O(N2)",
      "timeComplexity": "O(N1 + N2)",
      "spaceComplexity": "O(N2)"
    },
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0
  },
  {
    "title": "Next Greater Element II",
    "slug": "next-greater-element-ii",
    "description": "Given a circular integer array `nums` (i.e., the next element of `nums[nums.length - 1]` is `nums[0]`), return the next greater number for every element in `nums`.\\n\\nThe next greater number of a number $x$ is the first greater number to its traversing-order next in the array, which means you could search circularly to find its next greater number. If it doesn't exist, return `-1` for this number.\\n\\n### Example 1:\\n```\\nInput: [1, 2, 1]\\nOutput: [2, -1, 2]\\nExplanation: The first 1's next greater number is 2; The number 2 can't find next greater number; The second 1's next greater number needs to search circularly, which is also 2.\\n```\\n\\n### Example 2:\\n```\\nInput: [1, 2, 3, 4, 3]\\nOutput: [2, 3, 4, -1, 4]\\nExplanation: Next greater elements circular traversal.\\n```\\n\\n### Constraints:\\n- $1 \\le |nums| \\le 10^4$\\n- $-10^9 \\le nums[i] \\le 10^9$",
    "difficulty": "MEDIUM",
    "category": "DSA",
    "patterns": [
      "Monotonic Stack",
      "Array"
    ],
    "topics": [
      "Array",
      "Stack",
      "Monotonic Stack"
    ],
    "companyTags": [
      {
        "company": "Capgemini",
        "frequencyCount": 6,
        "yearReported": 2024
      },
      {
        "company": "Flipkart",
        "frequencyCount": 7,
        "yearReported": 2024
      }
    ],
    "sampleTestCases": [
      {
        "input": "[1, 2, 1]",
        "output": "[2, -1, 2]",
        "explanation": "Circular lookup on array."
      },
      {
        "input": "[1, 2, 3, 4, 3]",
        "output": "[2, 3, 4, -1, 4]",
        "explanation": "Elements wrap around circular boundary."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "[1]",
        "output": "[-1]"
      },
      {
        "input": "[5, 4, 3, 2, 1]",
        "output": "[-1, 5, 5, 5, 5]"
      },
      {
        "input": "[1, 1, 1]",
        "output": "[-1, -1, -1]"
      }
    ],
    "hints": [
      "Simulate circular array by iterating through the array twice (index from `2*n - 1` down to `0`), using `i % n`.",
      "Use a decreasing monotonic stack storing indices or values."
    ],
    "editorial": {
      "approach": "Monotonic Stack with 2N Modulo Traversal",
      "solutionMarkdown": "### Monotonic Stack\nTraverse from `2*N - 1` down to 0. Pop elements less than or equal to `nums[i % n]`. The stack top is the next greater element.",
      "timeComplexity": "O(N)",
      "spaceComplexity": "O(N)"
    },
    "starterCode": [
      {
        "language": "python",
        "boilerplate": "def nextGreaterElementIi(*args):\n    # TODO: Implement solution for Next Greater Element II\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = nextGreaterElementIi(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(nextGreaterElementIi(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function nextGreaterElementIi(...args) {\n    // TODO: Implement solution for Next Greater Element II\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try {\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(nextGreaterElementIi(...parsed)));\n    } catch (e) {\n        console.log(nextGreaterElementIi(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // TODO: Read input from cin and implement solution for Next Greater Element II\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        // TODO: Read from br and implement solution for Next Greater Element II\n    }\n}\n"
      }
    ],
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0
  },
  {
    "title": "Next Permutation",
    "slug": "next-permutation",
    "description": "A **permutation** of an array of integers is an arrangement of its members into a sequence or linear order. Find the next lexicographically greater permutation of numbers.\n\n### Example 1:\n```\nInput: [1,2,3]\nOutput: [1,3,2]\nExplanation: Next permutation of [1,2,3] is [1,3,2].\n```\n\n### Example 2:\n```\nInput: [3,2,1]\nOutput: [1,2,3]\nExplanation: Decreasing sequence wraps around to sorted ascending order.\n```",
    "difficulty": "MEDIUM",
    "category": "DSA",
    "patterns": [
      "Two Pointers",
      "Array"
    ],
    "topics": [
      "Two Pointers",
      "Array"
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
        "boilerplate": "def nextPermutation(*args):\n    # TODO: Implement solution for Next Permutation\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = nextPermutation(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(nextPermutation(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function nextPermutation(...args) {\n    // TODO: Implement solution for Next Permutation\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(nextPermutation(...parsed)));\n    } catch (e) {\n        console.log(nextPermutation(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Next Permutation\n        // TODO: Read input from cin and implement solution\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        // TODO: Read from br and implement solution\n    }\n}\n"
      }
    ],
    "sampleTestCases": [
      {
        "input": "[1,2,3]",
        "output": "[1,3,2]",
        "explanation": "Next permutation of [1,2,3] is [1,3,2]."
      },
      {
        "input": "[3,2,1]",
        "output": "[1,2,3]",
        "explanation": "Decreasing sequence wraps around to sorted ascending order."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "[1,2,3]",
        "output": "[1,3,2]",
        "isHidden": true
      },
      {
        "input": "[3,2,1]",
        "output": "[1,2,3]",
        "isHidden": true
      },
      {
        "input": "[1,1,5]",
        "output": "[1,5,1]",
        "isHidden": true
      }
    ],
    "hints": [
      "Find first decreasing element from the right: nums[i] < nums[i+1]. Swap with next greater element and reverse suffix."
    ],
    "editorial": {
      "approach": "Optimal Approach for Next Permutation",
      "solutionMarkdown": "### Optimal Solution\n\nSingle pass from right to find pivot i where nums[i] < nums[i+1]. Swap with smallest element in suffix larger than nums[i], then reverse suffix.\n\n### Complexity\n- Time: O(N), Space: O(1)",
      "timeComplexity": "O(N)",
      "spaceComplexity": "O(1)"
    },
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0
  },
  {
    "title": "Next Smaller Element",
    "slug": "next-smaller-element",
    "description": "Given an array `arr` of integers, find the **next smaller element** for each element in the array. The next smaller element of an element is the first smaller element to its right. If no smaller element exists, output `-1`.\n\n### Example 1:\n```\nInput: [4,8,5,2,25]\nOutput: [2,5,2,-1,-1]\nExplanation: For 4->2, 8->5, 5->2, 2->-1, 25->-1.\n```\n\n### Example 2:\n```\nInput: [13,7,6,12]\nOutput: [7,6,-1,-1]\nExplanation: For 13->7, 7->6, 6->-1, 12->-1.\n```",
    "difficulty": "MEDIUM",
    "category": "DSA",
    "patterns": [
      "Array",
      "Stack",
      "Monotonic Stack"
    ],
    "topics": [
      "Array",
      "Stack",
      "Monotonic Stack"
    ],
    "companyTags": [
      {
        "company": "Accenture",
        "yearReported": 2025,
        "verified": true,
        "frequencyCount": 40,
        "sourceNote": "Accenture Interview Question #45 (R [S2])"
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
        "boilerplate": "def nextSmallerElement(*args):\n    # TODO: Implement solution for Next Smaller Element\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = nextSmallerElement(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(nextSmallerElement(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function nextSmallerElement(...args) {\n    // TODO: Implement solution for Next Smaller Element\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(nextSmallerElement(...parsed)));\n    } catch (e) {\n        console.log(nextSmallerElement(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Next Smaller Element\n        // TODO: Read input from cin and implement solution\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        // TODO: Read from br and implement solution\n    }\n}\n"
      }
    ],
    "sampleTestCases": [
      {
        "input": "[4,8,5,2,25]",
        "output": "[2,5,2,-1,-1]",
        "explanation": "For 4->2, 8->5, 5->2, 2->-1, 25->-1."
      },
      {
        "input": "[13,7,6,12]",
        "output": "[7,6,-1,-1]",
        "explanation": "For 13->7, 7->6, 6->-1, 12->-1."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "[4,8,5,2,25]",
        "output": "[2,5,2,-1,-1]",
        "isHidden": true
      },
      {
        "input": "[13,7,6,12]",
        "output": "[7,6,-1,-1]",
        "isHidden": true
      },
      {
        "input": "[1,2,3]",
        "output": "[-1,-1,-1]",
        "isHidden": true
      }
    ],
    "hints": [
      "Traverse from right to left using a monotonic increasing stack, or left-to-right storing unresolved indices."
    ],
    "editorial": {
      "approach": "Optimal Approach for Next Smaller Element",
      "solutionMarkdown": "### Optimal Solution\n\nMonotonic increasing stack from right to left. Pop elements >= arr[i]. Stack top is next smaller element.\n\n### Complexity\n- Time: O(N), Space: O(N)",
      "timeComplexity": "O(N)",
      "spaceComplexity": "O(N)"
    },
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0
  },
  {
    "title": "Non-overlapping Intervals",
    "slug": "non-overlapping-intervals",
    "description": "Given an array of intervals `intervals` where `intervals[i] = [starti, endi]`, return *the minimum number of intervals you need to remove to make the rest of the intervals non-overlapping*.\n\n### Example 1:\n```\nInput: [[1,2],[2,3],[3,4],[1,3]]\nOutput: 1\nExplanation: Remove [1,3] to leave rest non-overlapping.\n```\n\n### Example 2:\n```\nInput: [[1,2],[1,2],[1,2]]\nOutput: 2\nExplanation: Need to remove two [1,2] intervals.\n```",
    "difficulty": "MEDIUM",
    "category": "DSA",
    "patterns": [
      "Array",
      "Dynamic Programming",
      "Greedy",
      "Sorting"
    ],
    "topics": [
      "Array",
      "Dynamic Programming",
      "Greedy",
      "Sorting"
    ],
    "companyTags": [
      {
        "company": "Infosys",
        "yearReported": 2025,
        "verified": true,
        "frequencyCount": 42,
        "sourceNote": "Infosys Interview Question #38"
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
        "boilerplate": "def nonOverlappingIntervals(*args):\n    # TODO: Implement solution for Non-overlapping Intervals\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = nonOverlappingIntervals(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(nonOverlappingIntervals(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function nonOverlappingIntervals(...args) {\n    // TODO: Implement solution for Non-overlapping Intervals\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(nonOverlappingIntervals(...parsed)));\n    } catch (e) {\n        console.log(nonOverlappingIntervals(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Non-overlapping Intervals\n        // TODO: Read input from cin and implement solution\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        // TODO: Read from br and implement solution\n    }\n}\n"
      }
    ],
    "sampleTestCases": [
      {
        "input": "[[1,2],[2,3],[3,4],[1,3]]",
        "output": "1",
        "explanation": "Remove [1,3] to leave rest non-overlapping."
      },
      {
        "input": "[[1,2],[1,2],[1,2]]",
        "output": "2",
        "explanation": "Need to remove two [1,2] intervals."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "[[1,2],[2,3],[3,4],[1,3]]",
        "output": "1",
        "isHidden": true
      },
      {
        "input": "[[1,2],[1,2],[1,2]]",
        "output": "2",
        "isHidden": true
      },
      {
        "input": "[[1,2],[2,3]]",
        "output": "0",
        "isHidden": true
      }
    ],
    "hints": [
      "Greedy interval scheduling: sort intervals by end time. Keep interval that finishes earliest."
    ],
    "editorial": {
      "approach": "Optimal Approach for Non-overlapping Intervals",
      "solutionMarkdown": "### Optimal Solution\n\nSort by end time. Maintain last_end. If current start >= last_end, keep interval; otherwise increment removed count.\n\n### Complexity\n- Time: O(N log N), Space: O(1)",
      "timeComplexity": "O(N log N)",
      "spaceComplexity": "O(1)"
    },
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0
  },
  {
    "title": "Number of Connected Components in an Undirected Graph",
    "slug": "number-of-connected-components-in-an-undirected-graph",
    "description": "You have a graph of `n` nodes labeled from `0` to `n - 1`. You are given an integer `n` and an array `edges` where `edges[i] = [ai, bi]` indicates an undirected edge between `ai` and `bi`.\\n\\nReturn the total number of connected components in the graph.\\n\\n### Example 1:\\n```\\nInput: n = 5, edges = [[0,1],[1,2],[3,4]]\\nOutput: 2\\nExplanation: Component 1: {0, 1, 2}, Component 2: {3, 4}.\\n```\\n\\n### Example 2:\\n```\\nInput: n = 5, edges = [[0,1],[1,2],[2,3],[3,4]]\\nOutput: 1\\nExplanation: The entire graph is connected.\\n```\\n\\n### Constraints:\\n- $1 \\le n \\le 2000$\\n- $0 \\le |edges| \\le 5000$",
    "difficulty": "MEDIUM",
    "patterns": [
      "Graph",
      "BFS",
      "DFS",
      "Union-Find"
    ],
    "topics": [
      "Depth-First Search",
      "Breadth-First Search",
      "Union Find",
      "Graph"
    ],
    "sampleTestCases": [
      {
        "input": "n = 5\nedges = [[0,1],[1,2],[3,4]]",
        "output": "2",
        "explanation": "2 connected components."
      },
      {
        "input": "n = 5\nedges = [[0,1],[1,2],[2,3],[3,4]]",
        "output": "1",
        "explanation": "1 connected component."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "n = 1\nedges = []",
        "output": "1"
      },
      {
        "input": "n = 4\nedges = []",
        "output": "4"
      },
      {
        "input": "n = 4\nedges = [[0,1],[2,3]]",
        "output": "2"
      }
    ],
    "hints": [
      "Use DSU initialized with `count = n`. Each successful union decrements count by 1.",
      "Alternatively, run BFS/DFS counting unvisited components."
    ],
    "editorial": {
      "approach": "Union-Find or BFS Component Counting",
      "solutionMarkdown": "Initialize components count to N. Decrement whenever two disjoint sets merge.",
      "timeComplexity": "O(N + E \\alpha(N))",
      "spaceComplexity": "O(N)"
    },
    "category": "DSA",
    "starterCode": [
      {
        "language": "python",
        "boilerplate": "def numberOfConnectedComponentsInAnUndirectedGraph(*args):\n    # TODO: Implement solution for Number of Connected Components in an Undirected Graph\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = numberOfConnectedComponentsInAnUndirectedGraph(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(numberOfConnectedComponentsInAnUndirectedGraph(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function numberOfConnectedComponentsInAnUndirectedGraph(...args) {\n    // TODO: Implement solution for Number of Connected Components in an Undirected Graph\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try {\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(numberOfConnectedComponentsInAnUndirectedGraph(...parsed)));\n    } catch (e) {\n        console.log(numberOfConnectedComponentsInAnUndirectedGraph(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // TODO: Read input from cin and implement solution for Number of Connected Components in an Undirected Graph\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        // TODO: Read from br and implement solution for Number of Connected Components in an Undirected Graph\n    }\n}\n"
      }
    ],
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0,
    "companyTags": [
      {
        "company": "Flipkart",
        "frequencyCount": 7,
        "yearReported": 2024
      },
      {
        "company": "Oracle",
        "frequencyCount": 7,
        "yearReported": 2024
      }
    ]
  },
  {
    "title": "Number of Digit One",
    "slug": "number-of-digit-one",
    "description": "Given an integer `n`, count the total number of digit `1` appearing in all non-negative integers less than or equal to `n`.\n\n### Example 1:\n```\nInput: 13\nOutput: 6\nExplanation: Digit 1 occurs in: 1, 10, 11, 12, 13 (total 6 ones).\n```\n\n### Example 2:\n```\nInput: 0\nOutput: 0\nExplanation: No ones in 0.\n```",
    "difficulty": "HARD",
    "category": "DSA",
    "patterns": [
      "Math",
      "Dynamic Programming",
      "Recursion"
    ],
    "topics": [
      "Math",
      "Dynamic Programming",
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
        "boilerplate": "def numberOfDigitOne(*args):\n    # TODO: Implement solution for Number of Digit One\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = numberOfDigitOne(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(numberOfDigitOne(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function numberOfDigitOne(...args) {\n    // TODO: Implement solution for Number of Digit One\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(numberOfDigitOne(...parsed)));\n    } catch (e) {\n        console.log(numberOfDigitOne(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Number of Digit One\n        // TODO: Read input from cin and implement solution\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        // TODO: Read from br and implement solution\n    }\n}\n"
      }
    ],
    "sampleTestCases": [
      {
        "input": "13",
        "output": "6",
        "explanation": "Digit 1 occurs in: 1, 10, 11, 12, 13 (total 6 ones)."
      },
      {
        "input": "0",
        "output": "0",
        "explanation": "No ones in 0."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "13",
        "output": "6",
        "isHidden": true
      },
      {
        "input": "0",
        "output": "0",
        "isHidden": true
      },
      {
        "input": "100",
        "output": "21",
        "isHidden": true
      }
    ],
    "hints": [
      "Count ones digit by digit place (units, tens, hundreds) by analyzing prefix, current digit, and suffix."
    ],
    "editorial": {
      "approach": "Optimal Approach for Number of Digit One",
      "solutionMarkdown": "### Optimal Solution\n\nIterate digit position m = 1, 10, 100... Count ones contributed based on current digit > 1, == 1, or == 0.\n\n### Complexity\n- Time: O(log10(N)), Space: O(1)",
      "timeComplexity": "O(log10(N))",
      "spaceComplexity": "O(1)"
    },
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0
  },
  {
    "title": "Number of Handshakes",
    "slug": "number-of-handshakes",
    "description": "There are `n` people standing in a circle (where `n` is even). Each person shakes hands with exactly one other person such that no two handshakes cross each other. Return *the total number of ways handshakes can be arranged* modulo `10^9 + 7`.\n\n### Example 1:\n```\nInput: 4\nOutput: 2\nExplanation: Two valid ways for 4 people: (1-2, 3-4) or (1-4, 2-3).\n```\n\n### Example 2:\n```\nInput: 2\nOutput: 1\nExplanation: Only one pair (1-2).\n```",
    "difficulty": "MEDIUM",
    "category": "DP",
    "patterns": [
      "Dynamic Programming",
      "Math",
      "Combinatorics"
    ],
    "topics": [
      "Dynamic Programming",
      "Math",
      "Combinatorics"
    ],
    "companyTags": [
      {
        "company": "Infosys",
        "yearReported": 2025,
        "verified": true,
        "frequencyCount": 42,
        "sourceNote": "Infosys Interview Question #97"
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
        "boilerplate": "def numberOfHandshakes(*args):\n    # TODO: Implement solution for Number of Handshakes\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = numberOfHandshakes(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(numberOfHandshakes(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function numberOfHandshakes(...args) {\n    // TODO: Implement solution for Number of Handshakes\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(numberOfHandshakes(...parsed)));\n    } catch (e) {\n        console.log(numberOfHandshakes(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Number of Handshakes\n        // TODO: Read input from cin and implement solution\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        // TODO: Read from br and implement solution\n    }\n}\n"
      }
    ],
    "sampleTestCases": [
      {
        "input": "4",
        "output": "2",
        "explanation": "Two valid ways for 4 people: (1-2, 3-4) or (1-4, 2-3)."
      },
      {
        "input": "2",
        "output": "1",
        "explanation": "Only one pair (1-2)."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "4",
        "output": "2",
        "isHidden": true
      },
      {
        "input": "2",
        "output": "1",
        "isHidden": true
      },
      {
        "input": "6",
        "output": "5",
        "isHidden": true
      },
      {
        "input": "8",
        "output": "14",
        "isHidden": true
      }
    ],
    "hints": [
      "This is Catalan Number C(n / 2). Person 1 shakes hands with person i (where i is even), splitting circle into two sub-problems."
    ],
    "editorial": {
      "approach": "Optimal Approach for Number of Handshakes",
      "solutionMarkdown": "### Optimal Solution\n\nCatalan number recurrence: dp[k] = sum(dp[i] * dp[k - 1 - i]) where k = n / 2. Compute modulo 10^9 + 7.\n\n### Complexity\n- Time: O(N^2), Space: O(N)",
      "timeComplexity": "O(N^2)",
      "spaceComplexity": "O(N)"
    },
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0
  },
  {
    "title": "Number of Islands",
    "slug": "number-of-islands",
    "description": "Given an `m x n` 2D binary grid `grid` which represents a map of `'1'`s (land) and `'0'`s (water), return the number of islands.\n\nAn island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically.\n\n### Example 1:\n```\nInput: [[\"1\",\"1\",\"1\",\"1\",\"0\"],[\"1\",\"1\",\"0\",\"1\",\"0\"],[\"1\",\"1\",\"0\",\"0\",\"0\"],[\"0\",\"0\",\"0\",\"0\",\"0\"]]\nOutput: 1\nExplanation: All land connected into 1 island.\n```\n\n### Example 2:\n```\nInput: [[\"1\",\"1\",\"0\",\"0\",\"0\"],[\"1\",\"1\",\"0\",\"0\",\"0\"],[\"0\",\"0\",\"1\",\"0\",\"0\"],[\"0\",\"0\",\"0\",\"1\",\"1\"]]\nOutput: 3\nExplanation: 3 separate connected components.\n```",
    "difficulty": "MEDIUM",
    "category": "DSA",
    "patterns": [
      "BFS / DFS",
      "Matrix",
      "Union Find"
    ],
    "topics": [
      "BFS / DFS",
      "Matrix",
      "Union Find"
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
        "sourceNote": "Accenture Practice Bank #96"
      },
      {
        "company": "Infosys",
        "yearReported": 2025,
        "verified": true,
        "frequencyCount": 42,
        "sourceNote": "Infosys Interview Question #68"
      },
      {
        "company": "TCS",
        "yearReported": 2025,
        "verified": false,
        "frequencyCount": 30,
        "sourceNote": "TCS Practice Bank #70"
      },
      {
        "company": "Capgemini",
        "frequencyCount": 7,
        "yearReported": 2024
      },
      {
        "company": "Wipro",
        "frequencyCount": 7,
        "yearReported": 2025
      },
      {
        "company": "Flipkart",
        "frequencyCount": 7,
        "yearReported": 2024
      },
      {
        "company": "Oracle",
        "frequencyCount": 7,
        "yearReported": 2024
      },
      {
        "company": "Adobe",
        "frequencyCount": 7,
        "yearReported": 2025
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
        "boilerplate": "def numberOfIslands(*args):\n    # TODO: Implement solution for Number of Islands\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = numberOfIslands(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(numberOfIslands(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function numberOfIslands(...args) {\n    // TODO: Implement solution for Number of Islands\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(numberOfIslands(...parsed)));\n    } catch (e) {\n        console.log(numberOfIslands(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Number of Islands\n        // TODO: Read input from cin and implement solution\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        // TODO: Read from br and implement solution\n    }\n}\n"
      }
    ],
    "sampleTestCases": [
      {
        "input": "[[\"1\",\"1\",\"1\",\"1\",\"0\"],[\"1\",\"1\",\"0\",\"1\",\"0\"],[\"1\",\"1\",\"0\",\"0\",\"0\"],[\"0\",\"0\",\"0\",\"0\",\"0\"]]",
        "output": "1",
        "explanation": "All land connected into 1 island."
      },
      {
        "input": "[[\"1\",\"1\",\"0\",\"0\",\"0\"],[\"1\",\"1\",\"0\",\"0\",\"0\"],[\"0\",\"0\",\"1\",\"0\",\"0\"],[\"0\",\"0\",\"0\",\"1\",\"1\"]]",
        "output": "3",
        "explanation": "3 separate connected components."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "[[\"1\",\"1\",\"1\",\"1\",\"0\"],[\"1\",\"1\",\"0\",\"1\",\"0\"],[\"1\",\"1\",\"0\",\"0\",\"0\"],[\"0\",\"0\",\"0\",\"0\",\"0\"]]",
        "output": "1",
        "isHidden": true
      },
      {
        "input": "[[\"1\",\"1\",\"0\",\"0\",\"0\"],[\"1\",\"1\",\"0\",\"0\",\"0\"],[\"0\",\"0\",\"1\",\"0\",\"0\"],[\"0\",\"0\",\"0\",\"1\",\"1\"]]",
        "output": "3",
        "isHidden": true
      },
      {
        "input": "[[\"0\"]]",
        "output": "0",
        "isHidden": true
      }
    ],
    "hints": [
      "Traverse grid. When encountering '1', increment count and run BFS/DFS to sink the island."
    ],
    "editorial": {
      "approach": "Optimal Approach for Number of Islands",
      "solutionMarkdown": "### Optimal Solution\n\nStandard BFS/DFS flood-fill. Mark visited cells as '0' to avoid visiting twice.\n\n### Complexity\n- Time: O(M * N), Space: O(M * N) recursion stack / queue",
      "timeComplexity": "O(M * N)",
      "spaceComplexity": "O(M * N) recursion stack / queue"
    },
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0
  },
  {
    "title": "Number of Islands II",
    "slug": "number-of-islands-ii",
    "description": "You are given an `m x n` grid and an array `positions` where `positions[i] = [ri, ci]` is the position where a land cell is added. Return an array of integers representing the number of islands after each operation.\n\n### Example 1:\n```\nInput: 3\n3\n[[0,0],[0,1],[1,2],[2,1]]\nOutput: [1,1,2,3]\nExplanation: Islands formed after sequentially turning water cells to land.\n```\n\n### Example 2:\n```\nInput: 1\n1\n[[0,0]]\nOutput: [1]\nExplanation: Single cell grid.\n```",
    "difficulty": "HARD",
    "category": "DSA",
    "patterns": [
      "Array",
      "Union Find"
    ],
    "topics": [
      "Array",
      "Union Find"
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
        "boilerplate": "def numberOfIslandsIi(*args):\n    # TODO: Implement solution for Number of Islands II\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = numberOfIslandsIi(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(numberOfIslandsIi(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function numberOfIslandsIi(...args) {\n    // TODO: Implement solution for Number of Islands II\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(numberOfIslandsIi(...parsed)));\n    } catch (e) {\n        console.log(numberOfIslandsIi(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Number of Islands II\n        // TODO: Read input from cin and implement solution\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        // TODO: Read from br and implement solution\n    }\n}\n"
      }
    ],
    "sampleTestCases": [
      {
        "input": "3\n3\n[[0,0],[0,1],[1,2],[2,1]]",
        "output": "[1,1,2,3]",
        "explanation": "Islands formed after sequentially turning water cells to land."
      },
      {
        "input": "1\n1\n[[0,0]]",
        "output": "[1]",
        "explanation": "Single cell grid."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "3\n3\n[[0,0],[0,1],[1,2],[2,1]]",
        "output": "[1,1,2,3]",
        "isHidden": true
      },
      {
        "input": "1\n1\n[[0,0]]",
        "output": "[1]",
        "isHidden": true
      },
      {
        "input": "3\n3\n[[0,0],[0,1],[0,2]]",
        "output": "[1,1,1]",
        "isHidden": true
      }
    ],
    "hints": [
      "Use Disjoint Set Union (DSU) mapping 2D coordinates r * n + c to 1D parent array."
    ],
    "editorial": {
      "approach": "Optimal Approach for Number of Islands II",
      "solutionMarkdown": "### Optimal Solution\n\nFor each land addition, increment count by 1. Union with adjacent land neighbors, decrementing count on successful unions.\n\n### Complexity\n- Time: O(K * alpha(M*N)), Space: O(M*N)",
      "timeComplexity": "O(K * alpha(M*N))",
      "spaceComplexity": "O(M*N)"
    },
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0
  },
  {
    "title": "Number of Provinces",
    "slug": "number-of-provinces",
    "description": "There are `n` cities. Some of them are connected, while some are not. A province is a group of directly or indirectly connected cities and no other cities outside the group.\n\nGiven an `n x n` matrix `isConnected` where `isConnected[i][j] = 1` if city `i` and `j` are directly connected, return *the total number of provinces*.\n\n### Example 1:\n```\nInput: [[1,1,0],[1,1,0],[0,0,1]]\nOutput: 2\nExplanation: Cities 0 and 1 form 1 province, city 2 forms another.\n```\n\n### Example 2:\n```\nInput: [[1,0,0],[0,1,0],[0,0,1]]\nOutput: 3\nExplanation: 3 isolated cities.\n```",
    "difficulty": "MEDIUM",
    "category": "DSA",
    "patterns": [
      "Graph",
      "BFS / DFS",
      "Union Find"
    ],
    "topics": [
      "Graph",
      "BFS / DFS",
      "Union Find"
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
        "company": "TCS",
        "yearReported": 2025,
        "verified": false,
        "frequencyCount": 30,
        "sourceNote": "TCS Practice Bank #75"
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
        "boilerplate": "def numberOfProvinces(*args):\n    # TODO: Implement solution for Number of Provinces\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = numberOfProvinces(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(numberOfProvinces(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function numberOfProvinces(...args) {\n    // TODO: Implement solution for Number of Provinces\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(numberOfProvinces(...parsed)));\n    } catch (e) {\n        console.log(numberOfProvinces(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Number of Provinces\n        // TODO: Read input from cin and implement solution\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        // TODO: Read from br and implement solution\n    }\n}\n"
      }
    ],
    "sampleTestCases": [
      {
        "input": "[[1,1,0],[1,1,0],[0,0,1]]",
        "output": "2",
        "explanation": "Cities 0 and 1 form 1 province, city 2 forms another."
      },
      {
        "input": "[[1,0,0],[0,1,0],[0,0,1]]",
        "output": "3",
        "explanation": "3 isolated cities."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "[[1,1,0],[1,1,0],[0,0,1]]",
        "output": "2",
        "isHidden": true
      },
      {
        "input": "[[1,0,0],[0,1,0],[0,0,1]]",
        "output": "3",
        "isHidden": true
      },
      {
        "input": "[[1]]",
        "output": "1",
        "isHidden": true
      }
    ],
    "hints": [
      "Count connected components using DFS/BFS or Disjoint Set Union (Union Find)."
    ],
    "editorial": {
      "approach": "Optimal Approach for Number of Provinces",
      "solutionMarkdown": "### Optimal Solution\n\nIterate nodes 0..n-1 with visited set, run DFS to mark entire province, increment count.\n\n### Complexity\n- Time: O(N^2), Space: O(N)",
      "timeComplexity": "O(N^2)",
      "spaceComplexity": "O(N)"
    },
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0
  },
  {
    "title": "One Edit Distance",
    "slug": "one-edit-distance",
    "description": "Given two strings `s` and `t`, return `true` if they are both one edit distance apart, otherwise return `false`.\\n\\nA string `s` is said to be one edit distance apart from a string `t` if you can:\\n- Insert exactly one character into `s` to get `t`\\n- Delete exactly one character from `s` to get `t`\\n- Replace exactly one character of `s` to get `t`\\n\\n### Example 1:\\n```\\nInput:\\ns = \"ab\"\nt = \"acb\"\\nOutput: true\\nExplanation: We can insert 'c' into s to get t.\\n```\\n\\n### Example 2:\\n```\\nInput:\\ns = \"\"\nt = \"\"\\nOutput: false\\nExplanation: We cannot get t from s with exactly one operation.\\n```\\n\\n### Constraints:\\n- $0 \\le |s|, |t| \\le 10^4$\\n- `s` and `t` consist of lowercase letters.",
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
        "company": "Capgemini",
        "frequencyCount": 7,
        "yearReported": 2022
      }
    ],
    "sampleTestCases": [
      {
        "input": "ab\nacb",
        "output": "true",
        "explanation": "Insert 'c' into s."
      },
      {
        "input": "\n",
        "output": "false",
        "explanation": "Zero edits != one edit."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "a\nA",
        "output": "false"
      },
      {
        "input": "abc\nab",
        "output": "true"
      },
      {
        "input": "teacher\ndetacher",
        "output": "false"
      }
    ],
    "hints": [
      "Ensure |s| <= |t| (swap if needed). If |t| - |s| > 1, return false.",
      "Find the first difference character at index i. If lengths are equal, s[i+1:] must equal t[i+1:]. If |t| > |s|, s[i:] must equal t[i+1:]."
    ],
    "editorial": {
      "approach": "Linear Scan and Suffix Comparison",
      "solutionMarkdown": "### One Pass Suffix Check\nEnsure $|s| \\le |t|$. Upon finding the first mismatch index $i$:\\n- If $|s| == |t|$, compare $s[i+1:] == t[i+1:]$\\n- If $|t| == |s| + 1$, compare $s[i:] == t[i+1:]$",
      "timeComplexity": "O(N)",
      "spaceComplexity": "O(1)"
    },
    "starterCode": [
      {
        "language": "python",
        "boilerplate": "def oneEditDistance(*args):\n    # TODO: Implement solution for One Edit Distance\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = oneEditDistance(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(oneEditDistance(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function oneEditDistance(...args) {\n    // TODO: Implement solution for One Edit Distance\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try {\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(oneEditDistance(...parsed)));\n    } catch (e) {\n        console.log(oneEditDistance(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // TODO: Read input from cin and implement solution for One Edit Distance\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        // TODO: Read from br and implement solution for One Edit Distance\n    }\n}\n"
      }
    ],
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0
  },
  {
    "title": "Ones and Zeroes",
    "slug": "ones-and-zeroes",
    "description": "You are given an array of binary strings `strs` and two integers `m` and `n`.\\n\\nReturn the size of the largest subset of `strs` such that there are at most `m` 0's and `n` 1's in the subset.\\n\\nA set `x` is a subset of a set `y` if all elements of `x` are also elements of `y`.\\n\\n### Example 1:\\n```\\nInput: strs = [\"10\",\"0001\",\"111001\",\"1\",\"0\"], m = 5, n = 3\\nOutput: 4\\nExplanation: Largest subset is {\"10\", \"0001\", \"1\", \"0\"} with total 5 zeroes and 3 ones.\\n```\\n\\n### Example 2:\\n```\\nInput: strs = [\"10\",\"0\",\"1\"], m = 1, n = 1\\nOutput: 2\\nExplanation: Largest subset is {\"0\", \"1\"}.\\n```\\n\\n### Constraints:\\n- $1 \\le |strs| \\le 600$\\n- $1 \\le m, n \\le 100$",
    "difficulty": "MEDIUM",
    "patterns": [
      "Dynamic Programming",
      "Knapsack"
    ],
    "topics": [
      "Array",
      "String",
      "Dynamic Programming"
    ],
    "sampleTestCases": [
      {
        "input": "strs = [\"10\",\"0001\",\"111001\",\"1\",\"0\"]\nm = 5, n = 3",
        "output": "4",
        "explanation": "4 strings satisfy limits."
      },
      {
        "input": "strs = [\"10\",\"0\",\"1\"]\nm = 1, n = 1",
        "output": "2",
        "explanation": "2 strings fit."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "strs = [\"111\",\"10\",\"0\"]\nm = 1, n = 1",
        "output": "1"
      },
      {
        "input": "strs = [\"0\"]\nm = 1, n = 1",
        "output": "1"
      },
      {
        "input": "strs = [\"1\"]\nm = 0, n = 1",
        "output": "1"
      }
    ],
    "hints": [
      "2D 0/1 Knapsack where the two capacities are maximum zeroes `m` and maximum ones `n`.",
      "Iterate backwards: `dp[i][j] = max(dp[i][j], 1 + dp[i - zeros][j - ones])`."
    ],
    "editorial": {
      "approach": "2D Knapsack Dynamic Programming",
      "solutionMarkdown": "For each binary string, count (zeros, ones). Update 2D DP table backwards.",
      "timeComplexity": "O(len(strs) * m * n)",
      "spaceComplexity": "O(m * n)"
    },
    "category": "DSA",
    "starterCode": [
      {
        "language": "python",
        "boilerplate": "def onesAndZeroes(*args):\n    # TODO: Implement solution for Ones and Zeroes\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = onesAndZeroes(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(onesAndZeroes(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function onesAndZeroes(...args) {\n    // TODO: Implement solution for Ones and Zeroes\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try {\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(onesAndZeroes(...parsed)));\n    } catch (e) {\n        console.log(onesAndZeroes(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // TODO: Read input from cin and implement solution for Ones and Zeroes\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        // TODO: Read from br and implement solution for Ones and Zeroes\n    }\n}\n"
      }
    ],
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0,
    "companyTags": [
      {
        "company": "Flipkart",
        "frequencyCount": 7,
        "yearReported": 2024
      }
    ]
  },
  {
    "title": "Stock Span Problem",
    "slug": "online-stock-span",
    "description": "Design an algorithm that collects daily price quotes for some stock and returns the span of that stock's price for the current day.\\n\\nThe span of the stock's price in one day is the maximum number of consecutive days (starting from that day and going backward) for which the stock price was less than or equal to the price of that day.\\n\\nInput is given as an array of daily stock prices. Output space-separated spans for each day.\\n\\n### Example 1:\\n```\\nInput: [100, 80, 60, 70, 60, 75, 85]\\nOutput: 1 1 1 2 1 4 6\\nExplanation: For 75, prices were 60, 70, 60, 75 <= 75 (span 4). For 85, prices were 80, 60, 70, 60, 75, 85 <= 85 (span 6).\\n```\\n\\n### Example 2:\\n```\\nInput: [10, 4, 5, 90, 120, 80]\\nOutput: 1 1 2 4 5 1\\nExplanation: Consecutive days going backward with price <= current day.\\n```\\n\\n### Constraints:\\n- $1 \\le |prices| \\le 10^5$\\n- $1 \\le prices[i] \\le 10^5$",
    "difficulty": "MEDIUM",
    "category": "DSA",
    "patterns": [
      "Monotonic Stack",
      "Design"
    ],
    "topics": [
      "Stack",
      "Design",
      "Monotonic Stack",
      "Data Stream"
    ],
    "companyTags": [
      {
        "company": "Wipro",
        "frequencyCount": 6,
        "yearReported": 2025
      }
    ],
    "sampleTestCases": [
      {
        "input": "[100, 80, 60, 70, 60, 75, 85]",
        "output": "1 1 1 2 1 4 6",
        "explanation": "Monotonic stack span calculation."
      },
      {
        "input": "[10, 4, 5, 90, 120, 80]",
        "output": "1 1 2 4 5 1",
        "explanation": "Span for each day."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "[10]",
        "output": "1"
      },
      {
        "input": "[10, 20, 30]",
        "output": "1 2 3"
      },
      {
        "input": "[30, 20, 10]",
        "output": "1 1 1"
      }
    ],
    "hints": [
      "Use a monotonic stack storing pairs `(price, span)`.",
      "When a new price comes, pop elements whose price <= current price and accumulate their spans."
    ],
    "editorial": {
      "approach": "Monotonic Stack with Span Aggregation",
      "solutionMarkdown": "### Monotonic Stack\nPop smaller or equal prices from the stack, adding their spans to the current day's span.",
      "timeComplexity": "O(N)",
      "spaceComplexity": "O(N)"
    },
    "starterCode": [
      {
        "language": "python",
        "boilerplate": "def onlineStockSpan(*args):\n    # TODO: Implement solution for Stock Span Problem\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = onlineStockSpan(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(onlineStockSpan(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function onlineStockSpan(...args) {\n    // TODO: Implement solution for Stock Span Problem\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try {\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(onlineStockSpan(...parsed)));\n    } catch (e) {\n        console.log(onlineStockSpan(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // TODO: Read input from cin and implement solution for Stock Span Problem\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        // TODO: Read from br and implement solution for Stock Span Problem\n    }\n}\n"
      }
    ],
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0
  },
  {
    "title": "Pacific Atlantic Water Flow",
    "slug": "pacific-atlantic-water-flow",
    "description": "There is an `m x n` rectangular island that borders both the Pacific Ocean and Atlantic Ocean. Water can only flow from cells to height equal or lower.\n\nReturn a 2D list of grid coordinates `result` where `result[i] = [ri, ci]` denotes that rain water can flow from `(ri, ci)` to **both** oceans.\n\n### Example 1:\n```\nInput: [[1,2,2,3,5],[3,2,3,4,4],[2,4,5,3,1],[6,7,1,4,5],[5,1,1,2,4]]\nOutput: [[0, 4], [1, 3], [1, 4], [2, 2], [3, 0], [3, 1], [4, 0]]\nExplanation: Coordinates that can reach both Pacific and Atlantic oceans.\n```\n\n### Example 2:\n```\nInput: [[1]]\nOutput: [[0, 0]]\nExplanation: Single cell connects to both oceans.\n```",
    "difficulty": "MEDIUM",
    "category": "DSA",
    "patterns": [
      "Matrix",
      "BFS / DFS"
    ],
    "topics": [
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
      },
      {
        "company": "Capgemini",
        "frequencyCount": 7,
        "yearReported": 2024
      },
      {
        "company": "Flipkart",
        "frequencyCount": 7,
        "yearReported": 2024
      },
      {
        "company": "Adobe",
        "frequencyCount": 7,
        "yearReported": 2025
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
        "boilerplate": "def pacificAtlanticWaterFlow(*args):\n    # TODO: Implement solution for Pacific Atlantic Water Flow\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = pacificAtlanticWaterFlow(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(pacificAtlanticWaterFlow(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function pacificAtlanticWaterFlow(...args) {\n    // TODO: Implement solution for Pacific Atlantic Water Flow\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(pacificAtlanticWaterFlow(...parsed)));\n    } catch (e) {\n        console.log(pacificAtlanticWaterFlow(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Pacific Atlantic Water Flow\n        // TODO: Read input from cin and implement solution\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        // TODO: Read from br and implement solution\n    }\n}\n"
      }
    ],
    "sampleTestCases": [
      {
        "input": "[[1,2,2,3,5],[3,2,3,4,4],[2,4,5,3,1],[6,7,1,4,5],[5,1,1,2,4]]",
        "output": "[[0, 4], [1, 3], [1, 4], [2, 2], [3, 0], [3, 1], [4, 0]]",
        "explanation": "Coordinates that can reach both Pacific and Atlantic oceans."
      },
      {
        "input": "[[1]]",
        "output": "[[0, 0]]",
        "explanation": "Single cell connects to both oceans."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "[[1,2,2,3,5],[3,2,3,4,4],[2,4,5,3,1],[6,7,1,4,5],[5,1,1,2,4]]",
        "output": "[[0, 4], [1, 3], [1, 4], [2, 2], [3, 0], [3, 1], [4, 0]]",
        "isHidden": true
      },
      {
        "input": "[[1]]",
        "output": "[[0, 0]]",
        "isHidden": true
      }
    ],
    "hints": [
      "Start DFS backwards from ocean edges: Pacific (top/left) and Atlantic (bottom/right). Find intersection of visited sets."
    ],
    "editorial": {
      "approach": "Optimal Approach for Pacific Atlantic Water Flow",
      "solutionMarkdown": "### Optimal Solution\n\nReverse water flow starting from ocean borders moving only to cells of >= height.\n\n### Complexity\n- Time: O(M * N), Space: O(M * N)",
      "timeComplexity": "O(M * N)",
      "spaceComplexity": "O(M * N)"
    },
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0
  },
  {
    "title": "Paint Fence",
    "slug": "paint-fence",
    "description": "You have a fence of `n` posts, and `k` colors. Return the number of ways you can paint the fence such that no more than two adjacent fence posts have the same color.\n\n### Example 1:\n```\nInput: 3\n2\nOutput: 6\nExplanation: 6 valid colorings for 3 posts with 2 colors.\n```\n\n### Example 2:\n```\nInput: 1\n1\nOutput: 1\nExplanation: 1 way.\n```",
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
        "boilerplate": "def paintFence(*args):\n    # TODO: Implement solution for Paint Fence\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = paintFence(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(paintFence(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function paintFence(...args) {\n    // TODO: Implement solution for Paint Fence\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(paintFence(...parsed)));\n    } catch (e) {\n        console.log(paintFence(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Paint Fence\n        // TODO: Read input from cin and implement solution\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        // TODO: Read from br and implement solution\n    }\n}\n"
      }
    ],
    "sampleTestCases": [
      {
        "input": "3\n2",
        "output": "6",
        "explanation": "6 valid colorings for 3 posts with 2 colors."
      },
      {
        "input": "1\n1",
        "output": "1",
        "explanation": "1 way."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "3\n2",
        "output": "6",
        "isHidden": true
      },
      {
        "input": "1\n1",
        "output": "1",
        "isHidden": true
      },
      {
        "input": "7\n2",
        "output": "42",
        "isHidden": true
      }
    ],
    "hints": [
      "dp[i] = same[i] + diff[i], where same[i] = diff[i-1] and diff[i] = (same[i-1] + diff[i-1]) * (k-1)."
    ],
    "editorial": {
      "approach": "Optimal Approach for Paint Fence",
      "solutionMarkdown": "### Optimal Solution\n\nMaintain same and diff counts. On step i: same = diff, diff = total * (k-1). Total = same + diff.\n\n### Complexity\n- Time: O(N), Space: O(1)",
      "timeComplexity": "O(N)",
      "spaceComplexity": "O(1)"
    },
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0
  },
  {
    "title": "Paint House",
    "slug": "paint-house",
    "description": "There is a row of `n` houses. Each house can be painted with red, blue, or green. No two adjacent houses may have the same color. Return *the minimum cost to paint all houses*.\n\n### Example 1:\n```\nInput: [[17,2,17],[16,16,5],[14,3,19]]\nOutput: 10\nExplanation: Paint house 0 blue (cost 2), house 1 green (cost 5), house 2 blue (cost 3). Total = 10.\n```\n\n### Example 2:\n```\nInput: [[7,6,2]]\nOutput: 2\nExplanation: Paint house 0 green (cost 2).\n```",
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
        "boilerplate": "def paintHouse(*args):\n    # TODO: Implement solution for Paint House\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = paintHouse(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(paintHouse(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function paintHouse(...args) {\n    // TODO: Implement solution for Paint House\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(paintHouse(...parsed)));\n    } catch (e) {\n        console.log(paintHouse(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Paint House\n        // TODO: Read input from cin and implement solution\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        // TODO: Read from br and implement solution\n    }\n}\n"
      }
    ],
    "sampleTestCases": [
      {
        "input": "[[17,2,17],[16,16,5],[14,3,19]]",
        "output": "10",
        "explanation": "Paint house 0 blue (cost 2), house 1 green (cost 5), house 2 blue (cost 3). Total = 10."
      },
      {
        "input": "[[7,6,2]]",
        "output": "2",
        "explanation": "Paint house 0 green (cost 2)."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "[[17,2,17],[16,16,5],[14,3,19]]",
        "output": "10",
        "isHidden": true
      },
      {
        "input": "[[7,6,2]]",
        "output": "2",
        "isHidden": true
      },
      {
        "input": "[[1,2,3],[1,4,6]]",
        "output": "3",
        "isHidden": true
      }
    ],
    "hints": [
      "dp[i][c] = cost[i][c] + min(dp[i-1][other colors])."
    ],
    "editorial": {
      "approach": "Optimal Approach for Paint House",
      "solutionMarkdown": "### Optimal Solution\n\nIn-place DP. Update each house cost by adding minimum cost of previous house painted in either of the other two colors.\n\n### Complexity\n- Time: O(N), Space: O(1)",
      "timeComplexity": "O(N)",
      "spaceComplexity": "O(1)"
    },
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0
  },
  {
    "title": "Pair Skills So Every Pair Has Equal Sum",
    "slug": "pair-skills-so-every-pair-has-equal-sum",
    "description": "Given an array of even length `skill`, divide the players into `n / 2` pairs such that the total skill of each pair is equal. Return *the sum of the chemistry (product of skills) of all pairs*, or `-1` if impossible.\n\n### Example 1:\n```\nInput: [3,2,5,1,3,4]\nOutput: 22\nExplanation: Pairs: (1, 5) -> 5, (2, 4) -> 8, (3, 3) -> 9. All sum to 6. Chemistry = 5 + 8 + 9 = 22.\n```\n\n### Example 2:\n```\nInput: [3,4]\nOutput: 12\nExplanation: Pair (3, 4) chemistry = 12.\n```",
    "difficulty": "MEDIUM",
    "category": "DSA",
    "patterns": [
      "Array",
      "Two Pointers",
      "Sorting",
      "Hash Table"
    ],
    "topics": [
      "Array",
      "Two Pointers",
      "Sorting",
      "Hash Table"
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
        "boilerplate": "def pairSkillsSoEveryPairHasEqualSum(*args):\n    # TODO: Implement solution for Pair Skills So Every Pair Has Equal Sum\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = pairSkillsSoEveryPairHasEqualSum(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(pairSkillsSoEveryPairHasEqualSum(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function pairSkillsSoEveryPairHasEqualSum(...args) {\n    // TODO: Implement solution for Pair Skills So Every Pair Has Equal Sum\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(pairSkillsSoEveryPairHasEqualSum(...parsed)));\n    } catch (e) {\n        console.log(pairSkillsSoEveryPairHasEqualSum(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Pair Skills So Every Pair Has Equal Sum\n        // TODO: Read input from cin and implement solution\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        // TODO: Read from br and implement solution\n    }\n}\n"
      }
    ],
    "sampleTestCases": [
      {
        "input": "[3,2,5,1,3,4]",
        "output": "22",
        "explanation": "Pairs: (1, 5) -> 5, (2, 4) -> 8, (3, 3) -> 9. All sum to 6. Chemistry = 5 + 8 + 9 = 22."
      },
      {
        "input": "[3,4]",
        "output": "12",
        "explanation": "Pair (3, 4) chemistry = 12."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "[3,2,5,1,3,4]",
        "output": "22",
        "isHidden": true
      },
      {
        "input": "[3,4]",
        "output": "12",
        "isHidden": true
      },
      {
        "input": "[1,1,2,3]",
        "output": "-1",
        "isHidden": true
      }
    ],
    "hints": [
      "Sort skills array. Target pair sum must equal skill[0] + skill[-1]. Verify all pairs."
    ],
    "editorial": {
      "approach": "Optimal Approach for Pair Skills So Every Pair Has Equal Sum",
      "solutionMarkdown": "### Optimal Solution\n\nSort array. Verify skill[i] + skill[n-1-i] == target for all i. Accumulate sum of products.\n\n### Complexity\n- Time: O(N log N), Space: O(1)",
      "timeComplexity": "O(N log N)",
      "spaceComplexity": "O(1)"
    },
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0
  },
  {
    "title": "Pair Sum with Duplicates",
    "slug": "pair-sum-with-duplicates",
    "description": "Given an array of integers `arr` and a target sum `target`, return the number of pairs $(i, j)$ with $i < j$ such that $arr[i] + arr[j] == target$.\\n\\n### Example 1:\\n```\\nInput: arr = [1, 5, 7, -1, 5], target = 6\\nOutput: 3\\nExplanation: Pairs are (arr[0], arr[1]), (arr[0], arr[4]), and (arr[2], arr[3]).\\n```\\n\\n### Example 2:\\n```\\nInput: arr = [1, 1, 1, 1], target = 2\\nOutput: 6\\nExplanation: 4 choose 2 = 6 pairs.\\n```\\n\\n### Constraints:\\n- $1 \\le |arr| \\le 10^5$\\n- $-10^9 \\le arr[i], target \\le 10^9$",
    "difficulty": "EASY",
    "patterns": [
      "Hash Table",
      "Counting"
    ],
    "topics": [
      "Array",
      "Hash Table"
    ],
    "sampleTestCases": [
      {
        "input": "arr = [1, 5, 7, -1, 5]\ntarget = 6",
        "output": "3",
        "explanation": "3 valid pairs."
      },
      {
        "input": "arr = [1, 1, 1, 1]\ntarget = 2",
        "output": "6",
        "explanation": "Combinations C(4, 2) = 6."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "arr = [1, 2, 3]\ntarget = 10",
        "output": "0"
      },
      {
        "input": "arr = [2]\ntarget = 4",
        "output": "0"
      },
      {
        "input": "arr = [0, 0, 0]\ntarget = 0",
        "output": "3"
      }
    ],
    "hints": [
      "Maintain a frequency map. For each element `x`, add `freq[target - x]` to count, then increment `freq[x]`."
    ],
    "editorial": {
      "approach": "One-Pass Frequency Hash Map",
      "solutionMarkdown": "Add `freq[target - x]` to pair count and record `freq[x]++`.",
      "timeComplexity": "O(N)",
      "spaceComplexity": "O(N)"
    },
    "category": "DSA",
    "starterCode": [
      {
        "language": "python",
        "boilerplate": "def pairSumWithDuplicates(*args):\n    # TODO: Implement solution for Pair Sum with Duplicates\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = pairSumWithDuplicates(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(pairSumWithDuplicates(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function pairSumWithDuplicates(...args) {\n    // TODO: Implement solution for Pair Sum with Duplicates\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try {\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(pairSumWithDuplicates(...parsed)));\n    } catch (e) {\n        console.log(pairSumWithDuplicates(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // TODO: Read input from cin and implement solution for Pair Sum with Duplicates\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        // TODO: Read from br and implement solution for Pair Sum with Duplicates\n    }\n}\n"
      }
    ],
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0,
    "companyTags": [
      {
        "company": "Adobe",
        "frequencyCount": 7,
        "yearReported": 2025
      }
    ]
  },
  {
    "title": "Palindrome Linked List",
    "slug": "palindrome-linked-list",
    "description": "Given the `head` of a singly linked list, return `true` *if it is a **palindrome** or* `false` *otherwise*.\n\n### Example 1:\n```\nInput: [1,2,2,1]\nOutput: true\nExplanation: List reads identically forwards and backwards.\n```\n\n### Example 2:\n```\nInput: [1,2]\nOutput: false\nExplanation: 1 != 2, not a palindrome.\n```",
    "difficulty": "EASY",
    "category": "DSA",
    "patterns": [
      "Linked List",
      "Two Pointers",
      "Stack",
      "Recursion"
    ],
    "topics": [
      "Linked List",
      "Two Pointers",
      "Stack",
      "Recursion"
    ],
    "companyTags": [
      {
        "company": "Accenture",
        "yearReported": 2025,
        "verified": false,
        "frequencyCount": 25,
        "sourceNote": "Accenture Practice Bank #58"
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
        "boilerplate": "def palindromeLinkedList(*args):\n    # TODO: Implement solution for Palindrome Linked List\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = palindromeLinkedList(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(palindromeLinkedList(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function palindromeLinkedList(...args) {\n    // TODO: Implement solution for Palindrome Linked List\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(palindromeLinkedList(...parsed)));\n    } catch (e) {\n        console.log(palindromeLinkedList(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Palindrome Linked List\n        // TODO: Read input from cin and implement solution\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        // TODO: Read from br and implement solution\n    }\n}\n"
      }
    ],
    "sampleTestCases": [
      {
        "input": "[1,2,2,1]",
        "output": "true",
        "explanation": "List reads identically forwards and backwards."
      },
      {
        "input": "[1,2]",
        "output": "false",
        "explanation": "1 != 2, not a palindrome."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "[1,2,2,1]",
        "output": "true",
        "isHidden": true
      },
      {
        "input": "[1,2]",
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
      "Find middle node using fast/slow pointers, reverse the second half, and compare both halves."
    ],
    "editorial": {
      "approach": "Optimal Approach for Palindrome Linked List",
      "solutionMarkdown": "### Optimal Solution\n\nFind middle with slow and fast pointers. Reverse second half in-place. Compare first half and second half values node by node.\n\n### Complexity\n- Time: O(N), Space: O(1)",
      "timeComplexity": "O(N)",
      "spaceComplexity": "O(1)"
    },
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0
  },
  {
    "title": "Palindrome Number",
    "slug": "palindrome-number",
    "description": "Given an integer `x`, return `true` if `x` is a palindrome, and `false` otherwise.\\n\\nAn integer is a palindrome when it reads the same forward and backward. For example, `121` is a palindrome while `123` is not.\\n\\n### Example 1:\\n```\\nInput: 121\\nOutput: true\\nExplanation: 121 reads as 121 from left to right and from right to left.\\n```\\n\\n### Example 2:\\n```\\nInput: -121\\nOutput: false\\nExplanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.\\n```\\n\\n### Constraints:\\n- $-2^{31} \\le x \\le 2^{31} - 1$",
    "difficulty": "EASY",
    "category": "DSA",
    "patterns": [
      "Math"
    ],
    "topics": [
      "Math"
    ],
    "companyTags": [
      {
        "company": "Wipro",
        "frequencyCount": 9,
        "yearReported": 2026
      }
    ],
    "sampleTestCases": [
      {
        "input": "121",
        "output": "true",
        "explanation": "121 is symmetric."
      },
      {
        "input": "-121",
        "output": "false",
        "explanation": "Negative numbers are not palindromes."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "10",
        "output": "false"
      },
      {
        "input": "0",
        "output": "true"
      },
      {
        "input": "12321",
        "output": "true"
      }
    ],
    "hints": [
      "Negative numbers cannot be palindromes.",
      "Revert half of the number to avoid 32-bit overflow."
    ],
    "editorial": {
      "approach": "Revert Half of the Number",
      "solutionMarkdown": "### Reverting Half\nReverse digits until `x <= revertedNumber`. Return `x == revertedNumber || x == revertedNumber / 10`.",
      "timeComplexity": "O(log10 x)",
      "spaceComplexity": "O(1)"
    },
    "starterCode": [
      {
        "language": "python",
        "boilerplate": "def palindromeNumber(*args):\n    # TODO: Implement solution for Palindrome Number\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = palindromeNumber(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(palindromeNumber(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function palindromeNumber(...args) {\n    // TODO: Implement solution for Palindrome Number\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try {\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(palindromeNumber(...parsed)));\n    } catch (e) {\n        console.log(palindromeNumber(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // TODO: Read input from cin and implement solution for Palindrome Number\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        // TODO: Read from br and implement solution for Palindrome Number\n    }\n}\n"
      }
    ],
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0
  },
  {
    "title": "Palindrome Partitioning",
    "slug": "palindrome-partitioning",
    "description": "Given a string `s`, partition `s` such that every substring of the partition is a **palindrome**. Return *all possible palindrome partitioning of* `s`.\n\n### Example 1:\n```\nInput: \"aab\"\nOutput: [[\"a\",\"a\",\"b\"],[\"aa\",\"b\"]]\nExplanation: Both are valid partitions where each substring is palindromic.\n```\n\n### Example 2:\n```\nInput: \"a\"\nOutput: [[\"a\"]]\nExplanation: Only one character.\n```",
    "difficulty": "MEDIUM",
    "category": "DSA",
    "patterns": [
      "String",
      "Dynamic Programming",
      "Backtracking"
    ],
    "topics": [
      "String",
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
      },
      {
        "company": "TCS",
        "yearReported": 2025,
        "verified": false,
        "frequencyCount": 30,
        "sourceNote": "TCS Practice Bank #96"
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
        "boilerplate": "def palindromePartitioning(*args):\n    # TODO: Implement solution for Palindrome Partitioning\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = palindromePartitioning(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(palindromePartitioning(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function palindromePartitioning(...args) {\n    // TODO: Implement solution for Palindrome Partitioning\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(palindromePartitioning(...parsed)));\n    } catch (e) {\n        console.log(palindromePartitioning(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Palindrome Partitioning\n        // TODO: Read input from cin and implement solution\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        // TODO: Read from br and implement solution\n    }\n}\n"
      }
    ],
    "sampleTestCases": [
      {
        "input": "\"aab\"",
        "output": "[[\"a\",\"a\",\"b\"],[\"aa\",\"b\"]]",
        "explanation": "Both are valid partitions where each substring is palindromic."
      },
      {
        "input": "\"a\"",
        "output": "[[\"a\"]]",
        "explanation": "Only one character."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "\"aab\"",
        "output": "[[\"a\",\"a\",\"b\"],[\"aa\",\"b\"]]",
        "isHidden": true
      },
      {
        "input": "\"a\"",
        "output": "[[\"a\"]]",
        "isHidden": true
      },
      {
        "input": "\"racecar\"",
        "output": "[[\"r\",\"a\",\"c\",\"e\",\"c\",\"a\",\"r\"],[\"r\",\"a\",\"cec\",\"a\",\"r\"],[\"r\",\"aceca\",\"r\"],[\"racecar\"]]",
        "isHidden": true
      }
    ],
    "hints": [
      "Precompute palindrome table with 2D DP, then backtrack through valid cuts."
    ],
    "editorial": {
      "approach": "Optimal Approach for Palindrome Partitioning",
      "solutionMarkdown": "### Optimal Solution\n\nBacktracking. For start index, find every end index where s[start:end] is a palindrome, recurse on end.\n\n### Complexity\n- Time: O(N * 2^N), Space: O(N^2)",
      "timeComplexity": "O(N * 2^N)",
      "spaceComplexity": "O(N^2)"
    },
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0
  },
  {
    "title": "Palindrome Partitioning II",
    "slug": "palindrome-partitioning-ii",
    "description": "Given a string `s`, partition `s` such that every substring of the partition is a palindrome.\\n\\nReturn the minimum cuts needed for a palindrome partitioning of `s`.\\n\\n### Example 1:\\n```\\nInput: s = \"aab\"\\nOutput: 1\\nExplanation: The palindrome partitioning [\"aa\",\"b\"] could be produced using 1 cut.\\n```\\n\\n### Example 2:\\n```\\nInput: s = \"a\"\\nOutput: 0\\nExplanation: Single character is already a palindrome.\\n```\\n\\n### Constraints:\\n- $1 \\le |s| \\le 2000$\\n- `s` consists of lowercase English letters only.",
    "difficulty": "HARD",
    "patterns": [
      "Dynamic Programming",
      "String"
    ],
    "topics": [
      "String",
      "Dynamic Programming"
    ],
    "sampleTestCases": [
      {
        "input": "s = \"aab\"",
        "output": "1",
        "explanation": "1 cut: \"aa\" | \"b\"."
      },
      {
        "input": "s = \"a\"",
        "output": "0",
        "explanation": "0 cuts."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "s = \"ab\"",
        "output": "1"
      },
      {
        "input": "s = \"racecar\"",
        "output": "0"
      },
      {
        "input": "s = \"ababbbabbababa\"",
        "output": "3"
      }
    ],
    "hints": [
      "Precompute palindrome matrix `isPal[i][j]` using center expansion or 2D DP.",
      "Let dp[i] be the minimum cuts for prefix s[:i+1]. dp[i] = min_{j <= i, isPal[j][i]} (dp[j-1] + 1)."
    ],
    "editorial": {
      "approach": "1D DP with Palindrome Table",
      "solutionMarkdown": "Expand around centers to update `min_cuts[i] = min(min_cuts[i], min_cuts[j - 1] + 1)`.",
      "timeComplexity": "O(N^2)",
      "spaceComplexity": "O(N)"
    },
    "category": "DSA",
    "starterCode": [
      {
        "language": "python",
        "boilerplate": "def palindromePartitioningIi(*args):\n    # TODO: Implement solution for Palindrome Partitioning II\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = palindromePartitioningIi(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(palindromePartitioningIi(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function palindromePartitioningIi(...args) {\n    // TODO: Implement solution for Palindrome Partitioning II\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try {\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(palindromePartitioningIi(...parsed)));\n    } catch (e) {\n        console.log(palindromePartitioningIi(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // TODO: Read input from cin and implement solution for Palindrome Partitioning II\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        // TODO: Read from br and implement solution for Palindrome Partitioning II\n    }\n}\n"
      }
    ],
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0,
    "companyTags": [
      {
        "company": "Flipkart",
        "frequencyCount": 7,
        "yearReported": 2024
      }
    ]
  },
  {
    "title": "Palindrome Permutation",
    "slug": "palindrome-permutation",
    "description": "Given a string `s`, return `true` if a permutation of the string could form a palindrome and `false` otherwise.\n\n### Example 1:\n```\nInput: \"code\"\nOutput: false\nExplanation: No permutation forms a palindrome.\n```\n\n### Example 2:\n```\nInput: \"aab\"\nOutput: true\nExplanation: \"aba\" is a valid palindrome.\n```",
    "difficulty": "EASY",
    "category": "DSA",
    "patterns": [
      "Hash Table",
      "String",
      "Bit Manipulation"
    ],
    "topics": [
      "Hash Table",
      "String",
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
        "boilerplate": "def palindromePermutation(*args):\n    # TODO: Implement solution for Palindrome Permutation\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = palindromePermutation(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(palindromePermutation(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function palindromePermutation(...args) {\n    // TODO: Implement solution for Palindrome Permutation\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(palindromePermutation(...parsed)));\n    } catch (e) {\n        console.log(palindromePermutation(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Palindrome Permutation\n        // TODO: Read input from cin and implement solution\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        // TODO: Read from br and implement solution\n    }\n}\n"
      }
    ],
    "sampleTestCases": [
      {
        "input": "\"code\"",
        "output": "false",
        "explanation": "No permutation forms a palindrome."
      },
      {
        "input": "\"aab\"",
        "output": "true",
        "explanation": "\"aba\" is a valid palindrome."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "\"code\"",
        "output": "false",
        "isHidden": true
      },
      {
        "input": "\"aab\"",
        "output": "true",
        "isHidden": true
      },
      {
        "input": "\"carerac\"",
        "output": "true",
        "isHidden": true
      }
    ],
    "hints": [
      "Count character frequencies. At most one character can have an odd count."
    ],
    "editorial": {
      "approach": "Optimal Approach for Palindrome Permutation",
      "solutionMarkdown": "### Optimal Solution\n\nUse a set or frequency array. Toggle presence for each character; return len(odd_set) <= 1.\n\n### Complexity\n- Time: O(N), Space: O(1)",
      "timeComplexity": "O(N)",
      "spaceComplexity": "O(1)"
    },
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0
  },
  {
    "title": "Palindromic Substrings",
    "slug": "palindromic-substrings",
    "description": "Given a string `s`, return *the number of **palindromic substrings** in it*.\n\n### Example 1:\n```\nInput: \"abc\"\nOutput: 3\nExplanation: Three palindromic substrings: \"a\", \"b\", \"c\".\n```\n\n### Example 2:\n```\nInput: \"aaa\"\nOutput: 6\nExplanation: Six palindromic substrings: \"a\", \"a\", \"a\", \"aa\", \"aa\", \"aaa\".\n```",
    "difficulty": "MEDIUM",
    "category": "DSA",
    "patterns": [
      "String",
      "Dynamic Programming",
      "Two Pointers"
    ],
    "topics": [
      "String",
      "Dynamic Programming",
      "Two Pointers"
    ],
    "companyTags": [
      {
        "company": "Microsoft",
        "yearReported": 2025,
        "verified": true,
        "frequencyCount": 35,
        "sourceNote": "Reported in Microsoft 2021-2026 interview set"
      },
      {
        "company": "Capgemini",
        "frequencyCount": 7,
        "yearReported": 2024
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
        "boilerplate": "def palindromicSubstrings(*args):\n    # TODO: Implement solution for Palindromic Substrings\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = palindromicSubstrings(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(palindromicSubstrings(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function palindromicSubstrings(...args) {\n    // TODO: Implement solution for Palindromic Substrings\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(palindromicSubstrings(...parsed)));\n    } catch (e) {\n        console.log(palindromicSubstrings(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Palindromic Substrings\n        // TODO: Read input from cin and implement solution\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        // TODO: Read from br and implement solution\n    }\n}\n"
      }
    ],
    "sampleTestCases": [
      {
        "input": "\"abc\"",
        "output": "3",
        "explanation": "Three palindromic substrings: \"a\", \"b\", \"c\"."
      },
      {
        "input": "\"aaa\"",
        "output": "6",
        "explanation": "Six palindromic substrings: \"a\", \"a\", \"a\", \"aa\", \"aa\", \"aaa\"."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "\"abc\"",
        "output": "3",
        "isHidden": true
      },
      {
        "input": "\"aaa\"",
        "output": "6",
        "isHidden": true
      },
      {
        "input": "\"racecar\"",
        "output": "10",
        "isHidden": true
      }
    ],
    "hints": [
      "Expand around 2N - 1 possible centers (single characters and gaps between characters)."
    ],
    "editorial": {
      "approach": "Optimal Approach for Palindromic Substrings",
      "solutionMarkdown": "### Optimal Solution\n\nExpand around center for every i (odd length: i, i; even length: i, i+1). Count matching palindrome boundaries.\n\n### Complexity\n- Time: O(N^2), Space: O(1)",
      "timeComplexity": "O(N^2)",
      "spaceComplexity": "O(1)"
    },
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0
  },
  {
    "title": "Partition Equal Subset Sum",
    "slug": "partition-equal-subset-sum",
    "description": "Given an integer array `nums`, return `true` if you can partition the array into two subsets such that the sum of the elements in both subsets is equal or `false` otherwise.\n\n### Example 1:\n```\nInput: [1,5,11,5]\nOutput: true\nExplanation: Array can be partitioned as [1, 5, 5] and [11].\n```\n\n### Example 2:\n```\nInput: [1,2,3,5]\nOutput: false\nExplanation: Total sum is 11 (odd), cannot partition.\n```",
    "difficulty": "MEDIUM",
    "category": "DP",
    "patterns": [
      "Dynamic Programming",
      "0/1 Knapsack"
    ],
    "topics": [
      "Dynamic Programming",
      "0/1 Knapsack"
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
        "sourceNote": "Accenture Practice Bank #93"
      },
      {
        "company": "Infosys",
        "yearReported": 2025,
        "verified": true,
        "frequencyCount": 42,
        "sourceNote": "Infosys Interview Question #91"
      },
      {
        "company": "TCS",
        "yearReported": 2025,
        "verified": false,
        "frequencyCount": 30,
        "sourceNote": "TCS Practice Bank #86"
      },
      {
        "company": "Capgemini",
        "frequencyCount": 7,
        "yearReported": 2024
      },
      {
        "company": "Flipkart",
        "frequencyCount": 7,
        "yearReported": 2024
      },
      {
        "company": "Oracle",
        "frequencyCount": 7,
        "yearReported": 2024
      },
      {
        "company": "Adobe",
        "frequencyCount": 7,
        "yearReported": 2025
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
        "boilerplate": "def partitionEqualSubsetSum(*args):\n    # TODO: Implement solution for Partition Equal Subset Sum\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = partitionEqualSubsetSum(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(partitionEqualSubsetSum(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function partitionEqualSubsetSum(...args) {\n    // TODO: Implement solution for Partition Equal Subset Sum\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(partitionEqualSubsetSum(...parsed)));\n    } catch (e) {\n        console.log(partitionEqualSubsetSum(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Partition Equal Subset Sum\n        // TODO: Read input from cin and implement solution\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        // TODO: Read from br and implement solution\n    }\n}\n"
      }
    ],
    "sampleTestCases": [
      {
        "input": "[1,5,11,5]",
        "output": "true",
        "explanation": "Array can be partitioned as [1, 5, 5] and [11]."
      },
      {
        "input": "[1,2,3,5]",
        "output": "false",
        "explanation": "Total sum is 11 (odd), cannot partition."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "[1,5,11,5]",
        "output": "true",
        "isHidden": true
      },
      {
        "input": "[1,2,3,5]",
        "output": "false",
        "isHidden": true
      },
      {
        "input": "[2,2]",
        "output": "true",
        "isHidden": true
      }
    ],
    "hints": [
      "If total sum is odd return false. Reduce to 0/1 knapsack subset sum with target = total / 2."
    ],
    "editorial": {
      "approach": "Optimal Approach for Partition Equal Subset Sum",
      "solutionMarkdown": "### Optimal Solution\n\n0/1 Knapsack bitset / boolean array of size target+1. Iterate backwards from target down to num.\n\n### Complexity\n- Time: O(N * Target), Space: O(Target)",
      "timeComplexity": "O(N * Target)",
      "spaceComplexity": "O(Target)"
    },
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0
  },
  {
    "title": "Pascal's Triangle",
    "slug": "pascals-triangle",
    "description": "Given an integer `numRows`, return the first numRows of **Pascal's triangle**.\n\n### Example 1:\n```\nInput: 5\nOutput: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]\nExplanation: First 5 rows of Pascal's triangle.\n```\n\n### Example 2:\n```\nInput: 1\nOutput: [[1]]\nExplanation: Only row 0.\n```",
    "difficulty": "EASY",
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
        "company": "Google",
        "yearReported": 2025,
        "verified": true,
        "frequencyCount": 50,
        "sourceNote": "Reported in Google 2021-2026 interview set"
      },
      {
        "company": "Wipro",
        "frequencyCount": 7,
        "yearReported": 2025
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
        "boilerplate": "def pascalsTriangle(*args):\n    # TODO: Implement solution for Pascal's Triangle\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = pascalsTriangle(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(pascalsTriangle(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function pascalsTriangle(...args) {\n    // TODO: Implement solution for Pascal's Triangle\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(pascalsTriangle(...parsed)));\n    } catch (e) {\n        console.log(pascalsTriangle(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Pascal's Triangle\n        // TODO: Read input from cin and implement solution\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        // TODO: Read from br and implement solution\n    }\n}\n"
      }
    ],
    "sampleTestCases": [
      {
        "input": "5",
        "output": "[[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]",
        "explanation": "First 5 rows of Pascal's triangle."
      },
      {
        "input": "1",
        "output": "[[1]]",
        "explanation": "Only row 0."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "5",
        "output": "[[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]",
        "isHidden": true
      },
      {
        "input": "1",
        "output": "[[1]]",
        "isHidden": true
      },
      {
        "input": "2",
        "output": "[[1],[1,1]]",
        "isHidden": true
      }
    ],
    "hints": [
      "Each row begins and ends with 1. Intermediate elements are row[j] = prev[j-1] + prev[j]."
    ],
    "editorial": {
      "approach": "Optimal Approach for Pascal's Triangle",
      "solutionMarkdown": "### Optimal Solution\n\nGenerate row by row, setting row[j] = prev[j-1] + prev[j] for inner entries.\n\n### Complexity\n- Time: O(numRows^2), Space: O(1) auxiliary",
      "timeComplexity": "O(numRows^2)",
      "spaceComplexity": "O(1) auxiliary"
    },
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0
  },
  {
    "title": "Path Sum III",
    "slug": "path-sum-iii",
    "description": "Given the `root` of a binary tree and an integer `targetSum`, return *the number of paths where the sum of the values in the path equals* `targetSum`. The path does not need to start or end at the root or a leaf, but it must go downwards.\n\n### Example 1:\n```\nInput: [10,5,-3,3,2,null,11,3,-2,null,1]\n8\nOutput: 3\nExplanation: Three paths sum to 8: (5, 3), (5, 2, 1), and (-3, 11).\n```\n\n### Example 2:\n```\nInput: [5,4,8,11,null,13,4,7,2,null,null,5,1]\n22\nOutput: 3\nExplanation: Three paths sum to 22.\n```",
    "difficulty": "MEDIUM",
    "category": "DSA",
    "patterns": [
      "Tree",
      "Depth-First Search",
      "Binary Tree",
      "Prefix Sum"
    ],
    "topics": [
      "Tree",
      "Depth-First Search",
      "Binary Tree",
      "Prefix Sum"
    ],
    "companyTags": [
      {
        "company": "Infosys",
        "yearReported": 2025,
        "verified": true,
        "frequencyCount": 42,
        "sourceNote": "Infosys Interview Question #64"
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
        "boilerplate": "def pathSumIii(*args):\n    # TODO: Implement solution for Path Sum III\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = pathSumIii(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(pathSumIii(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function pathSumIii(...args) {\n    // TODO: Implement solution for Path Sum III\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(pathSumIii(...parsed)));\n    } catch (e) {\n        console.log(pathSumIii(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Path Sum III\n        // TODO: Read input from cin and implement solution\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        // TODO: Read from br and implement solution\n    }\n}\n"
      }
    ],
    "sampleTestCases": [
      {
        "input": "[10,5,-3,3,2,null,11,3,-2,null,1]\n8",
        "output": "3",
        "explanation": "Three paths sum to 8: (5, 3), (5, 2, 1), and (-3, 11)."
      },
      {
        "input": "[5,4,8,11,null,13,4,7,2,null,null,5,1]\n22",
        "output": "3",
        "explanation": "Three paths sum to 22."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "[10,5,-3,3,2,null,11,3,-2,null,1]\n8",
        "output": "3",
        "isHidden": true
      },
      {
        "input": "[5,4,8,11,null,13,4,7,2,null,null,5,1]\n22",
        "output": "3",
        "isHidden": true
      },
      {
        "input": "[]\n1",
        "output": "0",
        "isHidden": true
      }
    ],
    "hints": [
      "Use prefix sum with a HashMap during tree DFS. Remember to backtrack map counts when returning from recursion."
    ],
    "editorial": {
      "approach": "Optimal Approach for Path Sum III",
      "solutionMarkdown": "### Optimal Solution\n\nTree DFS with prefix sum map. At each node, paths ending here = map[curr_sum - target]. Backtrack map count on return.\n\n### Complexity\n- Time: O(N), Space: O(H)",
      "timeComplexity": "O(N)",
      "spaceComplexity": "O(H)"
    },
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0
  },
  {
    "title": "Peeking Iterator",
    "slug": "peeking-iterator",
    "description": "Design an iterator that supports the `peek` operation on an existing iterator in addition to the `hasNext` and the `next` operations.\n\n### Example 1:\n```\nInput: [\"PeekingIterator\",\"next\",\"peek\",\"next\",\"next\",\"hasNext\"]\n[[[1,2,3]],[],[],[],[],[]]\nOutput: [null,1,2,2,3,false]\nExplanation: Peek returns the next element without advancing the iterator.\n```\n\n### Example 2:\n```\nInput: [\"PeekingIterator\",\"hasNext\",\"peek\",\"next\"]\n[[[10]],[],[],[]]\nOutput: [null,true,10,10]\nExplanation: Single element iterator.\n```",
    "difficulty": "MEDIUM",
    "category": "DSA",
    "patterns": [
      "Design",
      "Array",
      "Iterator"
    ],
    "topics": [
      "Design",
      "Array",
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
        "boilerplate": "def peekingIterator(*args):\n    # TODO: Implement solution for Peeking Iterator\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = peekingIterator(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(peekingIterator(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function peekingIterator(...args) {\n    // TODO: Implement solution for Peeking Iterator\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(peekingIterator(...parsed)));\n    } catch (e) {\n        console.log(peekingIterator(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Peeking Iterator\n        // TODO: Read input from cin and implement solution\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        // TODO: Read from br and implement solution\n    }\n}\n"
      }
    ],
    "sampleTestCases": [
      {
        "input": "[\"PeekingIterator\",\"next\",\"peek\",\"next\",\"next\",\"hasNext\"]\n[[[1,2,3]],[],[],[],[],[]]",
        "output": "[null,1,2,2,3,false]",
        "explanation": "Peek returns the next element without advancing the iterator."
      },
      {
        "input": "[\"PeekingIterator\",\"hasNext\",\"peek\",\"next\"]\n[[[10]],[],[],[]]",
        "output": "[null,true,10,10]",
        "explanation": "Single element iterator."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "[\"PeekingIterator\",\"next\",\"peek\",\"next\",\"next\",\"hasNext\"]\n[[[1,2,3]],[],[],[],[],[]]",
        "output": "[null,1,2,2,3,false]",
        "isHidden": true
      },
      {
        "input": "[\"PeekingIterator\",\"hasNext\",\"peek\",\"next\"]\n[[[10]],[],[],[]]",
        "output": "[null,true,10,10]",
        "isHidden": true
      },
      {
        "input": "[\"PeekingIterator\",\"hasNext\"]\n[[[]]]",
        "output": "[null,false]",
        "isHidden": true
      }
    ],
    "hints": [
      "Cache the next element in a variable whenever consumed."
    ],
    "editorial": {
      "approach": "Optimal Approach for Peeking Iterator",
      "solutionMarkdown": "### Optimal Solution\n\nMaintain next_val and has_next cached variable. Update cache in constructor and whenever next() is invoked.\n\n### Complexity\n- Time: O(1) per operation, Space: O(1)",
      "timeComplexity": "O(1) per operation",
      "spaceComplexity": "O(1)"
    },
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0
  },
  {
    "title": "Permutation in String",
    "slug": "permutation-in-string",
    "description": "Given two strings `s1` and `s2`, return `true` if `s2` contains a **permutation** of `s1`, or `false` otherwise.\n\n### Example 1:\n```\nInput: ab\neidbaooo\nOutput: true\nExplanation: s2 contains 'ba' which is a permutation of 'ab'.\n```\n\n### Example 2:\n```\nInput: ab\neidboaoo\nOutput: false\nExplanation: No permutation found in s2.\n```",
    "difficulty": "MEDIUM",
    "category": "DSA",
    "patterns": [
      "Sliding Window",
      "Hash Table",
      "Two Pointers"
    ],
    "topics": [
      "Sliding Window",
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
        "sourceNote": "Accenture Practice Bank #34"
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
        "boilerplate": "def permutationInString(*args):\n    # TODO: Implement solution for Permutation in String\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = permutationInString(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(permutationInString(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function permutationInString(...args) {\n    // TODO: Implement solution for Permutation in String\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(permutationInString(...parsed)));\n    } catch (e) {\n        console.log(permutationInString(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Permutation in String\n        // TODO: Read input from cin and implement solution\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        // TODO: Read from br and implement solution\n    }\n}\n"
      }
    ],
    "sampleTestCases": [
      {
        "input": "ab\neidbaooo",
        "output": "true",
        "explanation": "s2 contains 'ba' which is a permutation of 'ab'."
      },
      {
        "input": "ab\neidboaoo",
        "output": "false",
        "explanation": "No permutation found in s2."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "ab\neidbaooo",
        "output": "true",
        "isHidden": true
      },
      {
        "input": "ab\neidboaoo",
        "output": "false",
        "isHidden": true
      },
      {
        "input": "adc\ndcda",
        "output": "true",
        "isHidden": true
      }
    ],
    "hints": [
      "Maintain a fixed sliding window of size len(s1) and compare character frequency arrays."
    ],
    "editorial": {
      "approach": "Optimal Approach for Permutation in String",
      "solutionMarkdown": "### Optimal Solution\n\nRolling frequency vector of size 26 across window of length len(s1).\n\n### Complexity\n- Time: O(N), Space: O(1)",
      "timeComplexity": "O(N)",
      "spaceComplexity": "O(1)"
    },
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0
  },
  {
    "title": "Permutations",
    "slug": "permutations",
    "description": "Given an array `nums` of distinct integers, return *all the possible permutations*. You can return the answer in **any order**.\n\n### Example 1:\n```\nInput: [1,2,3]\nOutput: [[1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1]]\nExplanation: All 3! = 6 permutations.\n```\n\n### Example 2:\n```\nInput: [0,1]\nOutput: [[0, 1], [1, 0]]\nExplanation: 2 permutations.\n```",
    "difficulty": "MEDIUM",
    "category": "DSA",
    "patterns": [
      "Backtracking",
      "Recursion"
    ],
    "topics": [
      "Backtracking",
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
        "sourceNote": "Accenture Practice Bank #81"
      },
      {
        "company": "TCS",
        "yearReported": 2025,
        "verified": false,
        "frequencyCount": 30,
        "sourceNote": "TCS Practice Bank #94"
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
        "boilerplate": "def permutations(*args):\n    # TODO: Implement solution for Permutations\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = permutations(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(permutations(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function permutations(...args) {\n    // TODO: Implement solution for Permutations\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(permutations(...parsed)));\n    } catch (e) {\n        console.log(permutations(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Permutations\n        // TODO: Read input from cin and implement solution\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        // TODO: Read from br and implement solution\n    }\n}\n"
      }
    ],
    "sampleTestCases": [
      {
        "input": "[1,2,3]",
        "output": "[[1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1]]",
        "explanation": "All 3! = 6 permutations."
      },
      {
        "input": "[0,1]",
        "output": "[[0, 1], [1, 0]]",
        "explanation": "2 permutations."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "[1,2,3]",
        "output": "[[1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1]]",
        "isHidden": true
      },
      {
        "input": "[0,1]",
        "output": "[[0, 1], [1, 0]]",
        "isHidden": true
      },
      {
        "input": "[1]",
        "output": "[[1]]",
        "isHidden": true
      }
    ],
    "hints": [
      "Backtracking with in-place element swapping from index start to len(nums)."
    ],
    "editorial": {
      "approach": "Optimal Approach for Permutations",
      "solutionMarkdown": "### Optimal Solution\n\nSwap element nums[start] with nums[i] for i in range(start, n) and recurse.\n\n### Complexity\n- Time: O(N * N!), Space: O(N!)",
      "timeComplexity": "O(N * N!)",
      "spaceComplexity": "O(N!)"
    },
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0
  },
  {
    "title": "Populating Next Right Pointers in Each Node",
    "slug": "populating-next-right-pointers-in-each-node",
    "description": "You are given a **perfect binary tree** where all leaves are on the same level. Populate each next pointer to point to its next right node. If there is no next right node, the next pointer should be set to `NULL`.\n\n### Example 1:\n```\nInput: [1,2,3,4,5,6,7]\nOutput: [1,#,2,3,#,4,5,6,7,#]\nExplanation: Next pointers populated level-by-level.\n```\n\n### Example 2:\n```\nInput: []\nOutput: []\nExplanation: Empty tree.\n```",
    "difficulty": "MEDIUM",
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
        "boilerplate": "def populatingNextRightPointersInEachNode(*args):\n    # TODO: Implement solution for Populating Next Right Pointers in Each Node\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = populatingNextRightPointersInEachNode(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(populatingNextRightPointersInEachNode(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function populatingNextRightPointersInEachNode(...args) {\n    // TODO: Implement solution for Populating Next Right Pointers in Each Node\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(populatingNextRightPointersInEachNode(...parsed)));\n    } catch (e) {\n        console.log(populatingNextRightPointersInEachNode(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Populating Next Right Pointers in Each Node\n        // TODO: Read input from cin and implement solution\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        // TODO: Read from br and implement solution\n    }\n}\n"
      }
    ],
    "sampleTestCases": [
      {
        "input": "[1,2,3,4,5,6,7]",
        "output": "[1,#,2,3,#,4,5,6,7,#]",
        "explanation": "Next pointers populated level-by-level."
      },
      {
        "input": "[]",
        "output": "[]",
        "explanation": "Empty tree."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "[1,2,3,4,5,6,7]",
        "output": "[1,#,2,3,#,4,5,6,7,#]",
        "isHidden": true
      },
      {
        "input": "[]",
        "output": "[]",
        "isHidden": true
      },
      {
        "input": "[1]",
        "output": "[1,#]",
        "isHidden": true
      }
    ],
    "hints": [
      "Connect left child to right child: curr.left.next = curr.right. Connect right child across parents: curr.right.next = curr.next.left."
    ],
    "editorial": {
      "approach": "Optimal Approach for Populating Next Right Pointers in Each Node",
      "solutionMarkdown": "### Optimal Solution\n\nIterate level by level using next pointers established on the previous level, using O(1) extra memory.\n\n### Complexity\n- Time: O(N), Space: O(1)",
      "timeComplexity": "O(N)",
      "spaceComplexity": "O(1)"
    },
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0
  },
  {
    "title": "Pow(x, n)",
    "slug": "pow",
    "description": "Implement `myPow(x, n)`, which calculates `x` raised to the power `n` ($x^n$).\n\n### Example 1:\n```\nInput: 2.0\n10\nOutput: 1024.0\nExplanation: 2^10 = 1024.0.\n```\n\n### Example 2:\n```\nInput: 2.1\n3\nOutput: 9.261\nExplanation: 2.1^3 = 9.261.\n```",
    "difficulty": "MEDIUM",
    "category": "DSA",
    "patterns": [
      "Math",
      "Recursion"
    ],
    "topics": [
      "Math",
      "Recursion"
    ],
    "companyTags": [
      {
        "company": "Accenture",
        "yearReported": 2025,
        "verified": false,
        "frequencyCount": 25,
        "sourceNote": "Accenture Practice Bank #77"
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
        "boilerplate": "def pow(*args):\n    # TODO: Implement solution for Pow(x, n)\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = pow(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(pow(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function pow(...args) {\n    // TODO: Implement solution for Pow(x, n)\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(pow(...parsed)));\n    } catch (e) {\n        console.log(pow(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Pow(x, n)\n        // TODO: Read input from cin and implement solution\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        // TODO: Read from br and implement solution\n    }\n}\n"
      }
    ],
    "sampleTestCases": [
      {
        "input": "2.0\n10",
        "output": "1024.0",
        "explanation": "2^10 = 1024.0."
      },
      {
        "input": "2.1\n3",
        "output": "9.261",
        "explanation": "2.1^3 = 9.261."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "2.0\n10",
        "output": "1024.0",
        "isHidden": true
      },
      {
        "input": "2.1\n3",
        "output": "9.261",
        "isHidden": true
      },
      {
        "input": "2.0\n-2",
        "output": "0.25",
        "isHidden": true
      }
    ],
    "hints": [
      "Use binary exponentiation: if n is even, x^n = (x^2)^(n/2); if odd, x^n = x * (x^2)^((n-1)/2)."
    ],
    "editorial": {
      "approach": "Optimal Approach for Pow(x, n)",
      "solutionMarkdown": "### Optimal Solution\n\nFast power algorithm. Handle negative exponent by setting x = 1/x and n = -n. Square base at each step.\n\n### Complexity\n- Time: O(log N), Space: O(1)",
      "timeComplexity": "O(log N)",
      "spaceComplexity": "O(1)"
    },
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0
  },
  {
    "title": "Print Number and Character Patterns",
    "slug": "print-number-and-character-patterns",
    "description": "Given an integer $N$ and a pattern type `T` (either `NUM` or `CHAR`), print a right-angled triangle pattern of $N$ rows:\\n- If $T = \\text{NUM}$, row $i$ (1-indexed) contains numbers from $1$ to $i$ separated by spaces.\\n- If $T = \\text{CHAR}$, row $i$ contains characters starting from 'A' up to the $i$-th letter, separated by spaces.\\n\\n### Example 1:\\n```\\nInput:\\n4 NUM\\nOutput:\\n1\\n1 2\\n1 2 3\\n1 2 3 4\\nExplanation: Right-angled triangle of numbers.\\n```\\n\\n### Example 2:\\n```\\nInput:\\n3 CHAR\\nOutput:\\nA\\nA B\\nA B C\\nExplanation: Right-angled triangle of characters.\\n```\\n\\n### Constraints:\\n- $1 \\le N \\le 26$\\n- $T \\in \\{\\text{NUM}, \\text{CHAR}\\}$",
    "difficulty": "EASY",
    "category": "DSA",
    "patterns": [
      "Simulation",
      "Nested Loops"
    ],
    "topics": [
      "Simulation"
    ],
    "companyTags": [
      {
        "company": "Wipro",
        "frequencyCount": 6,
        "yearReported": 2025
      }
    ],
    "sampleTestCases": [
      {
        "input": "4 NUM",
        "output": "1\n1 2\n1 2 3\n1 2 3 4",
        "explanation": "Numeric triangle."
      },
      {
        "input": "3 CHAR",
        "output": "A\nA B\nA B C",
        "explanation": "Alphabetic triangle."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "1 NUM",
        "output": "1"
      },
      {
        "input": "1 CHAR",
        "output": "A"
      },
      {
        "input": "5 NUM",
        "output": "1\n1 2\n1 2 3\n1 2 3 4\n1 2 3 4 5"
      }
    ],
    "hints": [
      "Use nested loops: outer loop from 1 to N, inner loop from 1 to i."
    ],
    "editorial": {
      "approach": "Nested Loops Simulation",
      "solutionMarkdown": "### Method\nFor row $i$, generate elements from 1 to $i$ (or 'A' to chr(65 + $i - 1$)) and join with space.",
      "timeComplexity": "O(N^2)",
      "spaceComplexity": "O(N^2)"
    },
    "starterCode": [
      {
        "language": "python",
        "boilerplate": "def printNumberAndCharacterPatterns(*args):\n    # TODO: Implement solution for Print Number and Character Patterns\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = printNumberAndCharacterPatterns(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(printNumberAndCharacterPatterns(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function printNumberAndCharacterPatterns(...args) {\n    // TODO: Implement solution for Print Number and Character Patterns\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try {\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(printNumberAndCharacterPatterns(...parsed)));\n    } catch (e) {\n        console.log(printNumberAndCharacterPatterns(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // TODO: Read input from cin and implement solution for Print Number and Character Patterns\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        // TODO: Read from br and implement solution for Print Number and Character Patterns\n    }\n}\n"
      }
    ],
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0
  },
  {
    "title": "Producer-Consumer Bounded Buffer",
    "slug": "producer-consumer-bounded-buffer",
    "description": "Simulate a thread-safe Bounded Buffer (Queue) of capacity $C$ that processes sequential producer `PRODUCE x` and consumer `CONSUME` instructions. If a producer attempts to insert into a full buffer, it is blocked until an element is consumed. If a consumer attempts to read from an empty buffer, it is blocked until an item is produced.\\n\\nOutput the sequence of successfully consumed elements in order, followed by the remaining elements in the buffer at termination.\\n\\n### Example 1:\\n```\\nInput:\\n2\\nPRODUCE 10\\nPRODUCE 20\\nCONSUME\\nPRODUCE 30\\nCONSUME\\nOutput:\\nCONSUMED: 10 20\\nBUFFER: 30\\nExplanation: 10 and 20 consumed; 30 remains in buffer.\\n```\\n\\n### Constraints:\\n- $1 \\le C \\le 10^4$\\n- Up to $10^5$ operations.",
    "difficulty": "MEDIUM",
    "patterns": [
      "Queue",
      "Design",
      "Simulation"
    ],
    "topics": [
      "Queue",
      "Design",
      "Concurrency"
    ],
    "sampleTestCases": [
      {
        "input": "2\nPRODUCE 10\nPRODUCE 20\nCONSUME\nPRODUCE 30\nCONSUME",
        "output": "CONSUMED: 10 20\nBUFFER: 30",
        "explanation": "Bounded queue FIFO simulation."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "1\nPRODUCE 5\nCONSUME",
        "output": "CONSUMED: 5\nBUFFER:"
      },
      {
        "input": "3\nPRODUCE 1\nPRODUCE 2\nPRODUCE 3",
        "output": "CONSUMED:\nBUFFER: 1 2 3"
      },
      {
        "input": "2\nPRODUCE 7\nCONSUME\nPRODUCE 8",
        "output": "CONSUMED: 7\nBUFFER: 8"
      }
    ],
    "hints": [
      "Use a FIFO circular queue or standard deque.",
      "Track pending blocked producers and consumers."
    ],
    "editorial": {
      "approach": "FIFO Queue State Simulation",
      "solutionMarkdown": "Queue simulation processing produces and consumes tracking output order.",
      "timeComplexity": "O(N)",
      "spaceComplexity": "O(C)"
    },
    "category": "DSA",
    "starterCode": [
      {
        "language": "python",
        "boilerplate": "def producerConsumerBoundedBuffer(*args):\n    # TODO: Implement solution for Producer-Consumer Bounded Buffer\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = producerConsumerBoundedBuffer(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(producerConsumerBoundedBuffer(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function producerConsumerBoundedBuffer(...args) {\n    // TODO: Implement solution for Producer-Consumer Bounded Buffer\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try {\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(producerConsumerBoundedBuffer(...parsed)));\n    } catch (e) {\n        console.log(producerConsumerBoundedBuffer(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // TODO: Read input from cin and implement solution for Producer-Consumer Bounded Buffer\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        // TODO: Read from br and implement solution for Producer-Consumer Bounded Buffer\n    }\n}\n"
      }
    ],
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0,
    "companyTags": [
      {
        "company": "Adobe",
        "frequencyCount": 7,
        "yearReported": 2025
      }
    ]
  },
  {
    "title": "Product of Array Except Self",
    "slug": "product-of-array-except-self",
    "description": "Given an integer array `nums`, return an array `answer` such that `answer[i]` is equal to the product of all the elements of `nums` except `nums[i]`.\n\nYou must write an algorithm that runs in `O(n)` time and without using the division operation.\n\n### Example 1:\n```\nInput: [1,2,3,4]\nOutput: [24, 12, 8, 6]\nExplanation: 24 = 2*3*4, 12 = 1*3*4, 8 = 1*2*4, 6 = 1*2*3.\n```\n\n### Example 2:\n```\nInput: [-1,1,0,-3,3]\nOutput: [0, 0, 9, 0, 0]\nExplanation: Zero handled cleanly.\n```",
    "difficulty": "MEDIUM",
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
        "sourceNote": "Accenture Practice Bank #4"
      },
      {
        "company": "Infosys",
        "yearReported": 2025,
        "verified": true,
        "frequencyCount": 42,
        "sourceNote": "Infosys Interview Question #3"
      },
      {
        "company": "TCS",
        "yearReported": 2025,
        "verified": false,
        "frequencyCount": 30,
        "sourceNote": "TCS Practice Bank #21"
      },
      {
        "company": "Capgemini",
        "frequencyCount": 7,
        "yearReported": 2024
      },
      {
        "company": "Wipro",
        "frequencyCount": 7,
        "yearReported": 2025
      },
      {
        "company": "Oracle",
        "frequencyCount": 7,
        "yearReported": 2024
      },
      {
        "company": "Adobe",
        "frequencyCount": 7,
        "yearReported": 2025
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
        "boilerplate": "def productOfArrayExceptSelf(*args):\n    # TODO: Implement solution for Product of Array Except Self\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = productOfArrayExceptSelf(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(productOfArrayExceptSelf(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function productOfArrayExceptSelf(...args) {\n    // TODO: Implement solution for Product of Array Except Self\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(productOfArrayExceptSelf(...parsed)));\n    } catch (e) {\n        console.log(productOfArrayExceptSelf(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Product of Array Except Self\n        // TODO: Read input from cin and implement solution\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        // TODO: Read from br and implement solution\n    }\n}\n"
      }
    ],
    "sampleTestCases": [
      {
        "input": "[1,2,3,4]",
        "output": "[24, 12, 8, 6]",
        "explanation": "24 = 2*3*4, 12 = 1*3*4, 8 = 1*2*4, 6 = 1*2*3."
      },
      {
        "input": "[-1,1,0,-3,3]",
        "output": "[0, 0, 9, 0, 0]",
        "explanation": "Zero handled cleanly."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "[1,2,3,4]",
        "output": "[24, 12, 8, 6]",
        "isHidden": true
      },
      {
        "input": "[-1,1,0,-3,3]",
        "output": "[0, 0, 9, 0, 0]",
        "isHidden": true
      },
      {
        "input": "[2,3]",
        "output": "[3, 2]",
        "isHidden": true
      }
    ],
    "hints": [
      "Compute prefix products in first pass, then multiply suffix products backwards."
    ],
    "editorial": {
      "approach": "Optimal Approach for Product of Array Except Self",
      "solutionMarkdown": "### Optimal Solution\n\nResult array stores left prefix products. Second pass multiplies right running product in-place.\n\n### Complexity\n- Time: O(N), Space: O(1) extra auxiliary space",
      "timeComplexity": "O(N)",
      "spaceComplexity": "O(1) extra auxiliary space"
    },
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0
  },
  {
    "title": "Project Salaries - Minimum Tax after Contiguous Partitioning",
    "slug": "project-salaries-minimum-tax",
    "description": "Given an array of project salaries `salaries` and an integer `k` (max segment size), partition the array into contiguous segments of size at most `k` such that the sum of taxes across all segments is minimized. The tax of a segment is `(max(segment) - min(segment)) * length`.\n\n### Example 1:\n```\nInput: [10,20,30,40]\n2\nOutput: 20\nExplanation: Partition [10, 20] (tax (20-10)*2=20) and [30, 40] (tax (40-30)*2=20). Total = 40. Partitioning [10] [20] [30] [40] gives 0 tax.\n```\n\n### Example 2:\n```\nInput: [5,10,15]\n3\nOutput: 0\nExplanation: Single element segments give 0 tax.\n```",
    "difficulty": "HARD",
    "category": "DP",
    "patterns": [
      "Dynamic Programming",
      "Array"
    ],
    "topics": [
      "Dynamic Programming",
      "Array"
    ],
    "companyTags": [
      {
        "company": "Infosys",
        "yearReported": 2025,
        "verified": true,
        "frequencyCount": 42,
        "sourceNote": "Infosys Interview Question #99"
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
        "boilerplate": "def projectSalariesMinimumTax(*args):\n    # TODO: Implement solution for Project Salaries - Minimum Tax after Contiguous Partitioning\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = projectSalariesMinimumTax(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(projectSalariesMinimumTax(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function projectSalariesMinimumTax(...args) {\n    // TODO: Implement solution for Project Salaries - Minimum Tax after Contiguous Partitioning\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(projectSalariesMinimumTax(...parsed)));\n    } catch (e) {\n        console.log(projectSalariesMinimumTax(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Project Salaries - Minimum Tax after Contiguous Partitioning\n        // TODO: Read input from cin and implement solution\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        // TODO: Read from br and implement solution\n    }\n}\n"
      }
    ],
    "sampleTestCases": [
      {
        "input": "[10,20,30,40]\n2",
        "output": "20",
        "explanation": "Partition [10, 20] (tax (20-10)*2=20) and [30, 40] (tax (40-30)*2=20). Total = 40. Partitioning [10] [20] [30] [40] gives 0 tax."
      },
      {
        "input": "[5,10,15]\n3",
        "output": "0",
        "explanation": "Single element segments give 0 tax."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "[10,20,30,40]\n2",
        "output": "0",
        "isHidden": true
      },
      {
        "input": "[5,10,15]\n3",
        "output": "0",
        "isHidden": true
      },
      {
        "input": "[1,5,10]\n2",
        "output": "8",
        "isHidden": true
      }
    ],
    "hints": [
      "dp[i] is min tax for prefix i. dp[i] = min(dp[j] + tax(j+1..i)) for max(0, i-k) <= j < i."
    ],
    "editorial": {
      "approach": "Optimal Approach for Project Salaries - Minimum Tax after Contiguous Partitioning",
      "solutionMarkdown": "### Optimal Solution\n\n1D dynamic programming. dp[i] computes minimum cost for salaries[0..i] considering all partition cut points j.\n\n### Complexity\n- Time: O(N * K), Space: O(N)",
      "timeComplexity": "O(N * K)",
      "spaceComplexity": "O(N)"
    },
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0
  },
  {
    "title": "Quick Sort",
    "slug": "quick-sort-array",
    "description": "Given an array of integers `nums`, sort the array in ascending order using the Quick Sort algorithm (Lomuto or Hoare partitioning) and return the sorted array.\\n\\n### Example 1:\\n```\\nInput: [5, 2, 3, 1]\\nOutput: [1, 2, 3, 5]\\nExplanation: Array sorted in ascending order.\\n```\\n\\n### Example 2:\\n```\\nInput: [5, 1, 1, 2, 0, 0]\\nOutput: [0, 0, 1, 1, 2, 5]\\nExplanation: Duplicates handled properly.\\n```\\n\\n### Constraints:\\n- $1 \\le |nums| \\le 5 \\times 10^4$\\n- $-5 \\times 10^4 \\le nums[i] \\le 5 \\times 10^4$",
    "difficulty": "MEDIUM",
    "category": "DSA",
    "patterns": [
      "Divide and Conquer",
      "Quickselect"
    ],
    "topics": [
      "Array",
      "Divide and Conquer",
      "Sorting"
    ],
    "companyTags": [
      {
        "company": "Wipro",
        "frequencyCount": 8,
        "yearReported": 2025
      },
      {
        "company": "Oracle",
        "frequencyCount": 7,
        "yearReported": 2024
      }
    ],
    "sampleTestCases": [
      {
        "input": "[5, 2, 3, 1]",
        "output": "[1, 2, 3, 5]",
        "explanation": "Sorted ascendingly."
      },
      {
        "input": "[5, 1, 1, 2, 0, 0]",
        "output": "[0, 0, 1, 1, 2, 5]",
        "explanation": "Sorted with duplicate values."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "[1]",
        "output": "[1]"
      },
      {
        "input": "[10, 7, 8, 9, 1, 5]",
        "output": "[1, 5, 7, 8, 9, 10]"
      },
      {
        "input": "[3, 3, 3]",
        "output": "[3, 3, 3]"
      }
    ],
    "hints": [
      "Pick a pivot (e.g. median of three or random), partition elements smaller to the left and larger to the right, then recurse."
    ],
    "editorial": {
      "approach": "In-place Partitioning Quick Sort",
      "solutionMarkdown": "### Quick Sort\nPartition around pivot, place pivot at its final index, and recursively sort left and right partitions.",
      "timeComplexity": "O(N log N) average, O(N^2) worst case",
      "spaceComplexity": "O(log N) stack space"
    },
    "starterCode": [
      {
        "language": "python",
        "boilerplate": "def quickSortArray(*args):\n    # TODO: Implement solution for Quick Sort\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = quickSortArray(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(quickSortArray(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function quickSortArray(...args) {\n    // TODO: Implement solution for Quick Sort\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try {\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(quickSortArray(...parsed)));\n    } catch (e) {\n        console.log(quickSortArray(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // TODO: Read input from cin and implement solution for Quick Sort\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        // TODO: Read from br and implement solution for Quick Sort\n    }\n}\n"
      }
    ],
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0
  },
  {
    "title": "Random Pick with Weight",
    "slug": "random-pick-with-weight",
    "description": "You are given a **0-indexed** array of positive integers `w` where `w[i]` describes the weight of index `i`. Implement `pickIndex()` which randomly picks an index in proportion to its weight.\n\n### Example 1:\n```\nInput: [\"Solution\",\"pickIndex\"]\n[[[1]],[]]\nOutput: [null,0]\nExplanation: Only index 0 has weight.\n```\n\n### Example 2:\n```\nInput: [\"Solution\",\"pickIndex\",\"pickIndex\",\"pickIndex\"]\n[[[1,3]],[],[],[]]\nOutput: [null,1,1,0]\nExplanation: Index 1 is chosen ~75% of the time, index 0 ~25% of the time.\n```",
    "difficulty": "MEDIUM",
    "category": "DSA",
    "patterns": [
      "Array",
      "Math",
      "Binary Search",
      "Prefix Sum",
      "Randomized"
    ],
    "topics": [
      "Array",
      "Math",
      "Binary Search",
      "Prefix Sum",
      "Randomized"
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
        "boilerplate": "def randomPickWithWeight(*args):\n    # TODO: Implement solution for Random Pick with Weight\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = randomPickWithWeight(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(randomPickWithWeight(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function randomPickWithWeight(...args) {\n    // TODO: Implement solution for Random Pick with Weight\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(randomPickWithWeight(...parsed)));\n    } catch (e) {\n        console.log(randomPickWithWeight(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Random Pick with Weight\n        // TODO: Read input from cin and implement solution\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        // TODO: Read from br and implement solution\n    }\n}\n"
      }
    ],
    "sampleTestCases": [
      {
        "input": "[\"Solution\",\"pickIndex\"]\n[[[1]],[]]",
        "output": "[null,0]",
        "explanation": "Only index 0 has weight."
      },
      {
        "input": "[\"Solution\",\"pickIndex\",\"pickIndex\",\"pickIndex\"]\n[[[1,3]],[],[],[]]",
        "output": "[null,1,1,0]",
        "explanation": "Index 1 is chosen ~75% of the time, index 0 ~25% of the time."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "[\"Solution\",\"pickIndex\"]\n[[[1]],[]]",
        "output": "[null,0]",
        "isHidden": true
      },
      {
        "input": "[\"Solution\",\"pickIndex\",\"pickIndex\",\"pickIndex\"]\n[[[1,3]],[],[],[]]",
        "output": "[null,1,1,0]",
        "isHidden": true
      },
      {
        "input": "[\"Solution\",\"pickIndex\"]\n[[[10,20,30]],[]]",
        "output": "[null,1]",
        "isHidden": true
      }
    ],
    "hints": [
      "Build a prefix sum array and binary search for a random target between 1 and total_sum."
    ],
    "editorial": {
      "approach": "Optimal Approach for Random Pick with Weight",
      "solutionMarkdown": "### Optimal Solution\n\nPrefix sums define probability intervals. Binary search (bisect_left) on random integer in range [1, total].\n\n### Complexity\n- Time: Init O(N), Pick O(log N), Space: O(N)",
      "timeComplexity": "Init O(N)",
      "spaceComplexity": "Pick O(log N)"
    },
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0
  },
  {
    "title": "Range Sum of BST",
    "slug": "range-sum-of-bst",
    "description": "Given the `root` node of a binary search tree and two integers `low` and `high`, return *the sum of values of all nodes with a value in the **inclusive** range* `[low, high]`.\n\n### Example 1:\n```\nInput: [10,5,15,3,7,null,18]\n7\n15\nOutput: 32\nExplanation: Nodes 7, 10, and 15 are in range [7, 15]. 7 + 10 + 15 = 32.\n```\n\n### Example 2:\n```\nInput: [10,5,15,3,7,13,18,1,null,6]\n6\n10\nOutput: 23\nExplanation: Nodes 6, 7, and 10 are in range. 6 + 7 + 10 = 23.\n```",
    "difficulty": "EASY",
    "category": "DSA",
    "patterns": [
      "Tree",
      "Depth-First Search",
      "Binary Search Tree",
      "Binary Tree"
    ],
    "topics": [
      "Tree",
      "Depth-First Search",
      "Binary Search Tree",
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
        "boilerplate": "def rangeSumOfBst(*args):\n    # TODO: Implement solution for Range Sum of BST\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = rangeSumOfBst(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(rangeSumOfBst(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function rangeSumOfBst(...args) {\n    // TODO: Implement solution for Range Sum of BST\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(rangeSumOfBst(...parsed)));\n    } catch (e) {\n        console.log(rangeSumOfBst(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Range Sum of BST\n        // TODO: Read input from cin and implement solution\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        // TODO: Read from br and implement solution\n    }\n}\n"
      }
    ],
    "sampleTestCases": [
      {
        "input": "[10,5,15,3,7,null,18]\n7\n15",
        "output": "32",
        "explanation": "Nodes 7, 10, and 15 are in range [7, 15]. 7 + 10 + 15 = 32."
      },
      {
        "input": "[10,5,15,3,7,13,18,1,null,6]\n6\n10",
        "output": "23",
        "explanation": "Nodes 6, 7, and 10 are in range. 6 + 7 + 10 = 23."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "[10,5,15,3,7,null,18]\n7\n15",
        "output": "32",
        "isHidden": true
      },
      {
        "input": "[10,5,15,3,7,13,18,1,null,6]\n6\n10",
        "output": "23",
        "isHidden": true
      },
      {
        "input": "[1]\n1\n1",
        "output": "1",
        "isHidden": true
      }
    ],
    "hints": [
      "Prune branches: if node.val < low, skip left child; if node.val > high, skip right child."
    ],
    "editorial": {
      "approach": "Optimal Approach for Range Sum of BST",
      "solutionMarkdown": "### Optimal Solution\n\nDFS traversal with pruning based on BST property. Add node.val if low <= node.val <= high.\n\n### Complexity\n- Time: O(N), Space: O(H)",
      "timeComplexity": "O(N)",
      "spaceComplexity": "O(H)"
    },
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0
  },
  {
    "title": "Range Sum Query - Mutable",
    "slug": "range-sum-query-mutable",
    "description": "Given an integer array `nums`, handle multiple queries of: update the value of an element at `index`, and calculate the sum of elements between indices `left` and `right` inclusive.\n\n### Example 1:\n```\nInput: [\"NumArray\",\"sumRange\",\"update\",\"sumRange\"]\n[[[1,3,5]],[0,2],[1,2],[0,2]]\nOutput: [null,9,null,8]\nExplanation: sumRange(0, 2) -> 9. update(1, 2) makes nums = [1,2,5]. sumRange(0, 2) -> 8.\n```\n\n### Example 2:\n```\nInput: [\"NumArray\",\"update\",\"sumRange\"]\n[[[5]],[0,10],[0,0]]\nOutput: [null,null,10]\nExplanation: Single element update and query.\n```",
    "difficulty": "MEDIUM",
    "category": "DSA",
    "patterns": [
      "Design",
      "Binary Indexed Tree",
      "Segment Tree",
      "Array"
    ],
    "topics": [
      "Design",
      "Binary Indexed Tree",
      "Segment Tree",
      "Array"
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
        "company": "Infosys",
        "yearReported": 2025,
        "verified": true,
        "frequencyCount": 42,
        "sourceNote": "Infosys Interview Question #79"
      },
      {
        "company": "TCS",
        "yearReported": 2025,
        "verified": false,
        "frequencyCount": 30,
        "sourceNote": "TCS Practice Bank #99"
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
        "boilerplate": "def rangeSumQueryMutable(*args):\n    # TODO: Implement solution for Range Sum Query - Mutable\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = rangeSumQueryMutable(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(rangeSumQueryMutable(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function rangeSumQueryMutable(...args) {\n    // TODO: Implement solution for Range Sum Query - Mutable\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(rangeSumQueryMutable(...parsed)));\n    } catch (e) {\n        console.log(rangeSumQueryMutable(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Range Sum Query - Mutable\n        // TODO: Read input from cin and implement solution\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        // TODO: Read from br and implement solution\n    }\n}\n"
      }
    ],
    "sampleTestCases": [
      {
        "input": "[\"NumArray\",\"sumRange\",\"update\",\"sumRange\"]\n[[[1,3,5]],[0,2],[1,2],[0,2]]",
        "output": "[null,9,null,8]",
        "explanation": "sumRange(0, 2) -> 9. update(1, 2) makes nums = [1,2,5]. sumRange(0, 2) -> 8."
      },
      {
        "input": "[\"NumArray\",\"update\",\"sumRange\"]\n[[[5]],[0,10],[0,0]]",
        "output": "[null,null,10]",
        "explanation": "Single element update and query."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "[\"NumArray\",\"sumRange\",\"update\",\"sumRange\"]\n[[[1,3,5]],[0,2],[1,2],[0,2]]",
        "output": "[null,9,null,8]",
        "isHidden": true
      },
      {
        "input": "[\"NumArray\",\"update\",\"sumRange\"]\n[[[5]],[0,10],[0,0]]",
        "output": "[null,null,10]",
        "isHidden": true
      },
      {
        "input": "[\"NumArray\",\"sumRange\"]\n[[[1,2]],[0,1]]",
        "output": "[null,3]",
        "isHidden": true
      }
    ],
    "hints": [
      "Use a Binary Indexed Tree (Fenwick Tree) or Segment Tree for O(log N) updates and range queries."
    ],
    "editorial": {
      "approach": "Optimal Approach for Range Sum Query - Mutable",
      "solutionMarkdown": "### Optimal Solution\n\nMaintain Fenwick Tree (BIT). Update modifies tree at delta index. Query computes prefix_sum(right) - prefix_sum(left - 1).\n\n### Complexity\n- Time: Update O(log N), Query O(log N), Space: O(N)",
      "timeComplexity": "Update O(log N)",
      "spaceComplexity": "Query O(log N)"
    },
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0
  },
  {
    "title": "Ransom Note",
    "slug": "ransom-note",
    "description": "Given two strings `ransomNote` and `magazine`, return `true` *if* `ransomNote` *can be constructed by using the letters from* `magazine` *and* `false` *otherwise*. Each letter in `magazine` can only be used once in `ransomNote`.\n\n### Example 1:\n```\nInput: \"a\"\n\"b\"\nOutput: false\nExplanation: 'a' not available in magazine.\n```\n\n### Example 2:\n```\nInput: \"aa\"\n\"ab\"\nOutput: false\nExplanation: Magazine only contains one 'a'.\n```",
    "difficulty": "EASY",
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
        "company": "Accenture",
        "yearReported": 2025,
        "verified": false,
        "frequencyCount": 25,
        "sourceNote": "Accenture Practice Bank #26"
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
        "boilerplate": "def ransomNote(*args):\n    # TODO: Implement solution for Ransom Note\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = ransomNote(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(ransomNote(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function ransomNote(...args) {\n    // TODO: Implement solution for Ransom Note\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(ransomNote(...parsed)));\n    } catch (e) {\n        console.log(ransomNote(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Ransom Note\n        // TODO: Read input from cin and implement solution\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        // TODO: Read from br and implement solution\n    }\n}\n"
      }
    ],
    "sampleTestCases": [
      {
        "input": "\"a\"\n\"b\"",
        "output": "false",
        "explanation": "'a' not available in magazine."
      },
      {
        "input": "\"aa\"\n\"ab\"",
        "output": "false",
        "explanation": "Magazine only contains one 'a'."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "\"a\"\n\"b\"",
        "output": "false",
        "isHidden": true
      },
      {
        "input": "\"aa\"\n\"ab\"",
        "output": "false",
        "isHidden": true
      },
      {
        "input": "\"aa\"\n\"aab\"",
        "output": "true",
        "isHidden": true
      }
    ],
    "hints": [
      "Count character frequencies in magazine and ensure sufficient counts for all characters in ransomNote."
    ],
    "editorial": {
      "approach": "Optimal Approach for Ransom Note",
      "solutionMarkdown": "### Optimal Solution\n\nArray of size 26 tracking frequencies in magazine. Decrement for each character in ransomNote; if count < 0, return false.\n\n### Complexity\n- Time: O(M + N), Space: O(1)",
      "timeComplexity": "O(M + N)",
      "spaceComplexity": "O(1)"
    },
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0
  },
  {
    "title": "Rat in a Maze",
    "slug": "rat-in-a-maze",
    "description": "Consider a rat placed at `(0, 0)` in a square matrix `m` of order `n` where `1` represents an open cell and `0` represents a blocked cell. Find all possible paths the rat can take to reach destination `(n - 1, n - 1)` moving `D`, `L`, `R`, `U`. Return the paths sorted lexicographically.\n\n### Example 1:\n```\nInput: [[1,0,0,0],[1,1,0,1],[1,1,0,0],[0,1,1,1]]\nOutput: [\"DDRDRR\",\"DDRRDR\"]\nExplanation: Two paths from top-left to bottom-right.\n```\n\n### Example 2:\n```\nInput: [[1,0],[1,0]]\nOutput: []\nExplanation: No path exists to destination.\n```",
    "difficulty": "MEDIUM",
    "category": "DSA",
    "patterns": [
      "Backtracking",
      "Matrix",
      "Depth-First Search"
    ],
    "topics": [
      "Backtracking",
      "Matrix",
      "Depth-First Search"
    ],
    "companyTags": [
      {
        "company": "TCS",
        "yearReported": 2025,
        "verified": true,
        "frequencyCount": 45,
        "sourceNote": "TCS Interview Question #71"
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
        "boilerplate": "def ratInAMaze(*args):\n    # TODO: Implement solution for Rat in a Maze\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = ratInAMaze(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(ratInAMaze(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function ratInAMaze(...args) {\n    // TODO: Implement solution for Rat in a Maze\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(ratInAMaze(...parsed)));\n    } catch (e) {\n        console.log(ratInAMaze(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Rat in a Maze\n        // TODO: Read input from cin and implement solution\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        // TODO: Read from br and implement solution\n    }\n}\n"
      }
    ],
    "sampleTestCases": [
      {
        "input": "[[1,0,0,0],[1,1,0,1],[1,1,0,0],[0,1,1,1]]",
        "output": "[\"DDRDRR\",\"DDRRDR\"]",
        "explanation": "Two paths from top-left to bottom-right."
      },
      {
        "input": "[[1,0],[1,0]]",
        "output": "[]",
        "explanation": "No path exists to destination."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "[[1,0,0,0],[1,1,0,1],[1,1,0,0],[0,1,1,1]]",
        "output": "[\"DDRDRR\",\"DDRRDR\"]",
        "isHidden": true
      },
      {
        "input": "[[1,0],[1,0]]",
        "output": "[]",
        "isHidden": true
      },
      {
        "input": "[[1]]",
        "output": "[\"\"]",
        "isHidden": true
      }
    ],
    "hints": [
      "Recursive DFS in order D, L, R, U. Mark cell visited by setting to 0, unmark on backtrack."
    ],
    "editorial": {
      "approach": "Optimal Approach for Rat in a Maze",
      "solutionMarkdown": "### Optimal Solution\n\nBacktracking exploring directions in alphabetical order 'D', 'L', 'R', 'U'. Collect path string upon reaching (n-1, n-1).\n\n### Complexity\n- Time: O(4^(N^2)), Space: O(N^2)",
      "timeComplexity": "O(4^(N^2))",
      "spaceComplexity": "O(N^2)"
    },
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0
  },
  {
    "title": "Read N Characters Given Read4",
    "slug": "read-n-characters-given-read4",
    "description": "Given a `read4` API that reads four consecutive characters from file into buffer `buf4`, implement a function to read `n` characters into `buf`.\n\n### Example 1:\n```\nInput: \"abc\"\n4\nOutput: 3\nExplanation: File has 3 characters, reads 3 characters into buf.\n```\n\n### Example 2:\n```\nInput: \"abcde\"\n5\nOutput: 5\nExplanation: Reads all 5 characters.\n```",
    "difficulty": "EASY",
    "category": "DSA",
    "patterns": [
      "Array",
      "Simulation",
      "Interactive"
    ],
    "topics": [
      "Array",
      "Simulation",
      "Interactive"
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
        "boilerplate": "def readNCharactersGivenRead4(*args):\n    # TODO: Implement solution for Read N Characters Given Read4\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = readNCharactersGivenRead4(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(readNCharactersGivenRead4(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function readNCharactersGivenRead4(...args) {\n    // TODO: Implement solution for Read N Characters Given Read4\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(readNCharactersGivenRead4(...parsed)));\n    } catch (e) {\n        console.log(readNCharactersGivenRead4(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Read N Characters Given Read4\n        // TODO: Read input from cin and implement solution\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        // TODO: Read from br and implement solution\n    }\n}\n"
      }
    ],
    "sampleTestCases": [
      {
        "input": "\"abc\"\n4",
        "output": "3",
        "explanation": "File has 3 characters, reads 3 characters into buf."
      },
      {
        "input": "\"abcde\"\n5",
        "output": "5",
        "explanation": "Reads all 5 characters."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "\"abc\"\n4",
        "output": "3",
        "isHidden": true
      },
      {
        "input": "\"abcde\"\n5",
        "output": "5",
        "isHidden": true
      },
      {
        "input": "\"abcdefghijkl\"\n8",
        "output": "8",
        "isHidden": true
      }
    ],
    "hints": [
      "Call read4 in a loop, copying characters to buf until n characters are read or EOF."
    ],
    "editorial": {
      "approach": "Optimal Approach for Read N Characters Given Read4",
      "solutionMarkdown": "### Optimal Solution\n\nRepeatedly call read4, copy chars up to min(count, n - total_read). Break when read4 returns < 4.\n\n### Complexity\n- Time: O(N), Space: O(1)",
      "timeComplexity": "O(N)",
      "spaceComplexity": "O(1)"
    },
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0
  },
  {
    "title": "Read N Characters Given Read4 II - Call Multiple Times",
    "slug": "read-n-characters-given-read4-ii-call-multiple-times",
    "description": "Given a `read4` API, implement `read(buf, n)` that can be called **multiple times**. Internal buffer must persist unused characters between calls.\n\n### Example 1:\n```\nInput: \"abc\"\n[1,2,1]\nOutput: [1,2,0]\nExplanation: read(1) returns 'a', read(2) returns 'bc', read(1) returns 0 (EOF).\n```\n\n### Example 2:\n```\nInput: \"abc\"\n[4,1]\nOutput: [3,0]\nExplanation: read(4) returns 'abc' (3 chars), read(1) returns 0.\n```",
    "difficulty": "HARD",
    "category": "DSA",
    "patterns": [
      "Array",
      "Simulation",
      "Interactive"
    ],
    "topics": [
      "Array",
      "Simulation",
      "Interactive"
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
        "boilerplate": "def readNCharactersGivenRead4IiCallMultipleTimes(*args):\n    # TODO: Implement solution for Read N Characters Given Read4 II - Call Multiple Times\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = readNCharactersGivenRead4IiCallMultipleTimes(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(readNCharactersGivenRead4IiCallMultipleTimes(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function readNCharactersGivenRead4IiCallMultipleTimes(...args) {\n    // TODO: Implement solution for Read N Characters Given Read4 II - Call Multiple Times\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(readNCharactersGivenRead4IiCallMultipleTimes(...parsed)));\n    } catch (e) {\n        console.log(readNCharactersGivenRead4IiCallMultipleTimes(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Read N Characters Given Read4 II - Call Multiple Times\n        // TODO: Read input from cin and implement solution\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        // TODO: Read from br and implement solution\n    }\n}\n"
      }
    ],
    "sampleTestCases": [
      {
        "input": "\"abc\"\n[1,2,1]",
        "output": "[1,2,0]",
        "explanation": "read(1) returns 'a', read(2) returns 'bc', read(1) returns 0 (EOF)."
      },
      {
        "input": "\"abc\"\n[4,1]",
        "output": "[3,0]",
        "explanation": "read(4) returns 'abc' (3 chars), read(1) returns 0."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "\"abc\"\n[1,2,1]",
        "output": "[1,2,0]",
        "isHidden": true
      },
      {
        "input": "\"abc\"\n[4,1]",
        "output": "[3,0]",
        "isHidden": true
      },
      {
        "input": "\"a\"\n[1,1]",
        "output": "[1,0]",
        "isHidden": true
      }
    ],
    "hints": [
      "Maintain an internal buffer of size 4 with head pointer and count to preserve leftovers across calls."
    ],
    "editorial": {
      "approach": "Optimal Approach for Read N Characters Given Read4 II - Call Multiple Times",
      "solutionMarkdown": "### Optimal Solution\n\nPersist buf4, buf4_ptr, and buf4_size across function calls in class state. Drain leftover before calling read4.\n\n### Complexity\n- Time: O(N), Space: O(1)",
      "timeComplexity": "O(N)",
      "spaceComplexity": "O(1)"
    },
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0
  },
  {
    "title": "Reconstruct Itinerary",
    "slug": "reconstruct-itinerary",
    "description": "You are given a list of airline `tickets` where `tickets[i] = [fromi, toi]` represent the departure and the arrival airports of one flight. Reconstruct the itinerary in order and return it.\\n\\nAll of the tickets belong to a man who departs from \"JFK\", thus, the itinerary must begin with \"JFK\". If there are multiple valid itineraries, you should return the itinerary that has the smallest lexical order when read as a single string.\\n\\n### Example 1:\\n```\\nInput: tickets = [[\"MUC\",\"LHR\"],[\"JFK\",\"MUC\"],[\"SFO\",\"SJC\"],[\"LHR\",\"SFO\"]]\\nOutput: [\"JFK\",\"MUC\",\"LHR\",\"SFO\",\"SJC\"]\\nExplanation: Unique valid itinerary from JFK.\\n```\\n\\n### Example 2:\\n```\\nInput: tickets = [[\"JFK\",\"SFO\"],[\"JFK\",\"ATL\"],[\"SFO\",\"ATL\"],[\"ATL\",\"JFK\"],[\"ATL\",\"SFO\"]]\\nOutput: [\"JFK\",\"ATL\",\"JFK\",\"SFO\",\"ATL\",\"SFO\"]\\nExplanation: \"JFK\",\"ATL\",\"JFK\" is smaller than \"JFK\",\"SFO\".\\n```\\n\\n### Constraints:\\n- $1 \\le |tickets| \\le 300$\\n- `tickets[i].length == 2`",
    "difficulty": "HARD",
    "patterns": [
      "Graph",
      "Eulerian Path",
      "DFS"
    ],
    "topics": [
      "Depth-First Search",
      "Graph",
      "Eulerian Circuit"
    ],
    "sampleTestCases": [
      {
        "input": "tickets = [[\"MUC\",\"LHR\"],[\"JFK\",\"MUC\"],[\"SFO\",\"SJC\"],[\"LHR\",\"SFO\"]]",
        "output": "[\"JFK\",\"MUC\",\"LHR\",\"SFO\",\"SJC\"]",
        "explanation": "Eulerian path starting from JFK."
      },
      {
        "input": "tickets = [[\"JFK\",\"SFO\"],[\"JFK\",\"ATL\"],[\"SFO\",\"ATL\"],[\"ATL\",\"JFK\"],[\"ATL\",\"SFO\"]]",
        "output": "[\"JFK\",\"ATL\",\"JFK\",\"SFO\",\"ATL\",\"SFO\"]",
        "explanation": "Lexicographically smallest order."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "tickets = [[\"JFK\",\"KUL\"],[\"JFK\",\"NRT\"],[\"NRT\",\"JFK\"]]",
        "output": "[\"JFK\",\"NRT\",\"JFK\",\"KUL\"]"
      },
      {
        "input": "tickets = [[\"JFK\",\"AAA\"],[\"AAA\",\"JFK\"]]",
        "output": "[\"JFK\",\"AAA\",\"JFK\"]"
      },
      {
        "input": "tickets = [[\"JFK\",\"ATL\"]]",
        "output": "[\"JFK\",\"ATL\"]"
      }
    ],
    "hints": [
      "This is finding an Eulerian path in a directed graph using Hierholzer's algorithm.",
      "Store destinations in min-heaps or sorted lists, post-order DFS appends to result."
    ],
    "editorial": {
      "approach": "Hierholzer's Algorithm with Priority Queue",
      "solutionMarkdown": "Greedily traverse smallest lexical neighbor, push to result when backtracking.",
      "timeComplexity": "O(E log E)",
      "spaceComplexity": "O(V + E)"
    },
    "category": "DSA",
    "starterCode": [
      {
        "language": "python",
        "boilerplate": "def reconstructItinerary(*args):\n    # TODO: Implement solution for Reconstruct Itinerary\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = reconstructItinerary(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(reconstructItinerary(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function reconstructItinerary(...args) {\n    // TODO: Implement solution for Reconstruct Itinerary\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try {\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(reconstructItinerary(...parsed)));\n    } catch (e) {\n        console.log(reconstructItinerary(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // TODO: Read input from cin and implement solution for Reconstruct Itinerary\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        // TODO: Read from br and implement solution for Reconstruct Itinerary\n    }\n}\n"
      }
    ],
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0,
    "companyTags": [
      {
        "company": "Flipkart",
        "frequencyCount": 7,
        "yearReported": 2024
      }
    ]
  },
  {
    "title": "Redundant Connection",
    "slug": "redundant-connection",
    "description": "A tree with `n` nodes has one additional edge added. Return an edge that can be removed so that the resulting graph is a tree of `n` nodes. If multiple answers, return the one that appears last in `edges`.\n\n### Example 1:\n```\nInput: [[1,2],[1,3],[2,3]]\nOutput: [2,3]\nExplanation: [2,3] closes the cycle 1-2-3-1.\n```\n\n### Example 2:\n```\nInput: [[1,2],[2,3],[3,4],[1,4],[1,5]]\nOutput: [1,4]\nExplanation: [1,4] creates redundant cycle.\n```",
    "difficulty": "MEDIUM",
    "category": "DSA",
    "patterns": [
      "Depth-First Search",
      "Breadth-First Search",
      "Union Find",
      "Graph"
    ],
    "topics": [
      "Depth-First Search",
      "Breadth-First Search",
      "Union Find",
      "Graph"
    ],
    "companyTags": [
      {
        "company": "Microsoft",
        "yearReported": 2025,
        "verified": true,
        "frequencyCount": 35,
        "sourceNote": "Reported in Microsoft 2021-2026 interview set"
      },
      {
        "company": "Infosys",
        "yearReported": 2025,
        "verified": true,
        "frequencyCount": 42,
        "sourceNote": "Infosys Interview Question #76"
      },
      {
        "company": "Capgemini",
        "frequencyCount": 7,
        "yearReported": 2024
      },
      {
        "company": "Flipkart",
        "frequencyCount": 7,
        "yearReported": 2024
      },
      {
        "company": "Adobe",
        "frequencyCount": 7,
        "yearReported": 2025
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
        "boilerplate": "def redundantConnection(*args):\n    # TODO: Implement solution for Redundant Connection\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = redundantConnection(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(redundantConnection(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function redundantConnection(...args) {\n    // TODO: Implement solution for Redundant Connection\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(redundantConnection(...parsed)));\n    } catch (e) {\n        console.log(redundantConnection(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Redundant Connection\n        // TODO: Read input from cin and implement solution\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        // TODO: Read from br and implement solution\n    }\n}\n"
      }
    ],
    "sampleTestCases": [
      {
        "input": "[[1,2],[1,3],[2,3]]",
        "output": "[2,3]",
        "explanation": "[2,3] closes the cycle 1-2-3-1."
      },
      {
        "input": "[[1,2],[2,3],[3,4],[1,4],[1,5]]",
        "output": "[1,4]",
        "explanation": "[1,4] creates redundant cycle."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "[[1,2],[1,3],[2,3]]",
        "output": "[2,3]",
        "isHidden": true
      },
      {
        "input": "[[1,2],[2,3],[3,4],[1,4],[1,5]]",
        "output": "[1,4]",
        "isHidden": true
      },
      {
        "input": "[[1,2],[2,3],[1,3]]",
        "output": "[1,3]",
        "isHidden": true
      }
    ],
    "hints": [
      "Use Disjoint Set Union (DSU). The first edge that connects two nodes already in the same set is redundant."
    ],
    "editorial": {
      "approach": "Optimal Approach for Redundant Connection",
      "solutionMarkdown": "### Optimal Solution\n\nUnion-Find with path compression. When find(u) == find(v), edge [u, v] forms a cycle and is redundant.\n\n### Complexity\n- Time: O(N * alpha(N)), Space: O(N)",
      "timeComplexity": "O(N * alpha(N))",
      "spaceComplexity": "O(N)"
    },
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0
  },
  {
    "title": "Remove Duplicates from Sorted Array",
    "slug": "remove-duplicates-from-sorted-array",
    "description": "Given an integer array `nums` sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same. Then return the number of unique elements in `nums`.\\n\\nInput is array `nums`. Output should be the array of unique elements up to the new length.\\n\\n### Example 1:\\n```\\nInput: [1, 1, 2]\\nOutput: [1, 2]\\nExplanation: 2 unique elements: 1, 2.\\n```\\n\\n### Example 2:\\n```\\nInput: [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]\\nOutput: [0, 1, 2, 3, 4]\\nExplanation: 5 unique elements: 0, 1, 2, 3, 4.\\n```\\n\\n### Constraints:\\n- $1 \\le |nums| \\le 3 \\times 10^4$\\n- $-100 \\le nums[i] \\le 100$\\n- `nums` is sorted in non-decreasing order.",
    "difficulty": "EASY",
    "category": "DSA",
    "patterns": [
      "Two Pointers",
      "Array"
    ],
    "topics": [
      "Array",
      "Two Pointers"
    ],
    "companyTags": [
      {
        "company": "Wipro",
        "frequencyCount": 9,
        "yearReported": 2026
      }
    ],
    "sampleTestCases": [
      {
        "input": "[1, 1, 2]",
        "output": "[1, 2]",
        "explanation": "Duplicates removed in-place."
      },
      {
        "input": "[0, 0, 1, 1, 1, 2, 2, 3, 3, 4]",
        "output": "[0, 1, 2, 3, 4]",
        "explanation": "Unique prefix."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "[1]",
        "output": "[1]"
      },
      {
        "input": "[1, 2, 3]",
        "output": "[1, 2, 3]"
      },
      {
        "input": "[-5, -5, -3, 0, 0, 2]",
        "output": "[-5, -3, 0, 2]"
      }
    ],
    "hints": [
      "Use a write pointer `k = 1`. For each index `i` from 1 to n-1, if `nums[i] != nums[i-1]`, write `nums[k] = nums[i]` and increment `k`."
    ],
    "editorial": {
      "approach": "Slow and Fast Two Pointers",
      "solutionMarkdown": "### In-Place Two Pointers\nFast pointer scans elements, slow pointer writes unique values.",
      "timeComplexity": "O(N)",
      "spaceComplexity": "O(1)"
    },
    "starterCode": [
      {
        "language": "python",
        "boilerplate": "def removeDuplicatesFromSortedArray(*args):\n    # TODO: Implement solution for Remove Duplicates from Sorted Array\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = removeDuplicatesFromSortedArray(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(removeDuplicatesFromSortedArray(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function removeDuplicatesFromSortedArray(...args) {\n    // TODO: Implement solution for Remove Duplicates from Sorted Array\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try {\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(removeDuplicatesFromSortedArray(...parsed)));\n    } catch (e) {\n        console.log(removeDuplicatesFromSortedArray(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // TODO: Read input from cin and implement solution for Remove Duplicates from Sorted Array\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        // TODO: Read from br and implement solution for Remove Duplicates from Sorted Array\n    }\n}\n"
      }
    ],
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0
  },
  {
    "title": "Remove Duplicates from Sorted List II",
    "slug": "remove-duplicates-from-sorted-list-ii",
    "description": "Given the `head` of a sorted linked list, delete all nodes that have duplicate numbers, leaving only distinct numbers from the original list. Return *the linked list **sorted** as well*.\n\n### Example 1:\n```\nInput: [1,2,3,3,4,4,5]\nOutput: [1,2,5]\nExplanation: Nodes 3 and 4 have duplicates and are completely removed.\n```\n\n### Example 2:\n```\nInput: [1,1,1,2,3]\nOutput: [2,3]\nExplanation: 1 has duplicates, removed entirely.\n```",
    "difficulty": "MEDIUM",
    "category": "DSA",
    "patterns": [
      "Linked List",
      "Two Pointers"
    ],
    "topics": [
      "Linked List",
      "Two Pointers"
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
        "boilerplate": "def removeDuplicatesFromSortedListIi(*args):\n    # TODO: Implement solution for Remove Duplicates from Sorted List II\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = removeDuplicatesFromSortedListIi(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(removeDuplicatesFromSortedListIi(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function removeDuplicatesFromSortedListIi(...args) {\n    // TODO: Implement solution for Remove Duplicates from Sorted List II\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(removeDuplicatesFromSortedListIi(...parsed)));\n    } catch (e) {\n        console.log(removeDuplicatesFromSortedListIi(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Remove Duplicates from Sorted List II\n        // TODO: Read input from cin and implement solution\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        // TODO: Read from br and implement solution\n    }\n}\n"
      }
    ],
    "sampleTestCases": [
      {
        "input": "[1,2,3,3,4,4,5]",
        "output": "[1,2,5]",
        "explanation": "Nodes 3 and 4 have duplicates and are completely removed."
      },
      {
        "input": "[1,1,1,2,3]",
        "output": "[2,3]",
        "explanation": "1 has duplicates, removed entirely."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "[1,2,3,3,4,4,5]",
        "output": "[1,2,5]",
        "isHidden": true
      },
      {
        "input": "[1,1,1,2,3]",
        "output": "[2,3]",
        "isHidden": true
      },
      {
        "input": "[1,1]",
        "output": "[]",
        "isHidden": true
      }
    ],
    "hints": [
      "Use a dummy node pointing to head and a prev pointer that only advances when no duplicates were found."
    ],
    "editorial": {
      "approach": "Optimal Approach for Remove Duplicates from Sorted List II",
      "solutionMarkdown": "### Optimal Solution\n\nDummy node. While curr.next and curr.val == curr.next.val, skip all consecutive identical nodes.\n\n### Complexity\n- Time: O(N), Space: O(1)",
      "timeComplexity": "O(N)",
      "spaceComplexity": "O(1)"
    },
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0
  },
  {
    "title": "Remove Invalid Parentheses",
    "slug": "remove-invalid-parentheses",
    "description": "Given a string `s` that contains parentheses and letters, remove the minimum number of invalid parentheses to make the input string valid. Return *a list of **unique strings** that are valid with the minimum number of removals*.\n\n### Example 1:\n```\nInput: \"()())()\"\nOutput: [\"(())\",\"()()()\"]\nExplanation: Remove one ')' at either index 1 or 4.\n```\n\n### Example 2:\n```\nInput: \"(a)())()\"\nOutput: [\"(a())\",\"(a)()()\"]\nExplanation: Valid strings preserving inner letters.\n```",
    "difficulty": "HARD",
    "category": "DSA",
    "patterns": [
      "String",
      "Backtracking",
      "Breadth-First Search"
    ],
    "topics": [
      "String",
      "Backtracking",
      "Breadth-First Search"
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
        "company": "Flipkart",
        "frequencyCount": 7,
        "yearReported": 2024
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
        "boilerplate": "def removeInvalidParentheses(*args):\n    # TODO: Implement solution for Remove Invalid Parentheses\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = removeInvalidParentheses(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(removeInvalidParentheses(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function removeInvalidParentheses(...args) {\n    // TODO: Implement solution for Remove Invalid Parentheses\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(removeInvalidParentheses(...parsed)));\n    } catch (e) {\n        console.log(removeInvalidParentheses(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Remove Invalid Parentheses\n        // TODO: Read input from cin and implement solution\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        // TODO: Read from br and implement solution\n    }\n}\n"
      }
    ],
    "sampleTestCases": [
      {
        "input": "\"()())()\"",
        "output": "[\"(())\",\"()()()\"]",
        "explanation": "Remove one ')' at either index 1 or 4."
      },
      {
        "input": "\"(a)())()\"",
        "output": "[\"(a())\",\"(a)()()\"]",
        "explanation": "Valid strings preserving inner letters."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "\"()())()\"",
        "output": "[\"(())\",\"()()()\"]",
        "isHidden": true
      },
      {
        "input": "\"(a)())()\"",
        "output": "[\"(a())\",\"(a)()()\"]",
        "isHidden": true
      },
      {
        "input": "\")(\"",
        "output": "[\"\"]",
        "isHidden": true
      }
    ],
    "hints": [
      "First pass determines min number of '(' and ')' to remove. Backtrack pruning invalid prefixes."
    ],
    "editorial": {
      "approach": "Optimal Approach for Remove Invalid Parentheses",
      "solutionMarkdown": "### Optimal Solution\n\nBFS level-by-level queue of strings. When valid string found, return all valid strings at current level.\n\n### Complexity\n- Time: O(2^N), Space: O(N)",
      "timeComplexity": "O(2^N)",
      "spaceComplexity": "O(N)"
    },
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0
  },
  {
    "title": "Remove K Digits",
    "slug": "remove-k-digits",
    "description": "Given string `num` representing a non-negative integer `num`, and an integer `k`, return the smallest possible integer after removing `k` digits from `num`.\\n\\n### Example 1:\\n```\\nInput: num = \"1432219\", k = 3\\nOutput: \"1219\"\\nExplanation: Remove 4, 3, and 2 to get 1219 which is the smallest.\\n```\\n\\n### Example 2:\\n```\\nInput: num = \"10200\", k = 1\\nOutput: \"200\"\\nExplanation: Remove 1, then strip leading zeros to get 200.\\n```\\n\\n### Constraints:\\n- $1 \\le k \\le |num| \\le 10^5$\\n- `num` consists of only digits.",
    "difficulty": "MEDIUM",
    "patterns": [
      "Monotonic Stack",
      "Greedy"
    ],
    "topics": [
      "String",
      "Stack",
      "Greedy",
      "Monotonic Stack"
    ],
    "sampleTestCases": [
      {
        "input": "num = \"1432219\"\nk = 3",
        "output": "\"1219\"",
        "explanation": "Remove digits 4, 3, 2."
      },
      {
        "input": "num = \"10200\"\nk = 1",
        "output": "\"200\"",
        "explanation": "Leading zero stripped."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "num = \"10\"\nk = 2",
        "output": "\"0\""
      },
      {
        "input": "num = \"9\"\nk = 1",
        "output": "\"0\""
      },
      {
        "input": "num = \"112\"\nk = 1",
        "output": "\"11\""
      }
    ],
    "hints": [
      "Use a monotonic increasing stack.",
      "Whenever the current digit is smaller than the stack top and k > 0, pop from the stack and decrement k."
    ],
    "editorial": {
      "approach": "Monotonic Stack Greedy Reduction",
      "solutionMarkdown": "Pop larger previous digits while $k > 0$. Strip leading zeroes from resulting digits.",
      "timeComplexity": "O(N)",
      "spaceComplexity": "O(N)"
    },
    "category": "DSA",
    "starterCode": [
      {
        "language": "python",
        "boilerplate": "def removeKDigits(*args):\n    # TODO: Implement solution for Remove K Digits\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = removeKDigits(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(removeKDigits(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function removeKDigits(...args) {\n    // TODO: Implement solution for Remove K Digits\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try {\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(removeKDigits(...parsed)));\n    } catch (e) {\n        console.log(removeKDigits(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // TODO: Read input from cin and implement solution for Remove K Digits\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        // TODO: Read from br and implement solution for Remove K Digits\n    }\n}\n"
      }
    ],
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0,
    "companyTags": [
      {
        "company": "Flipkart",
        "frequencyCount": 7,
        "yearReported": 2024
      }
    ]
  },
  {
    "title": "Remove Nth Node From End of List",
    "slug": "remove-nth-node-from-end-of-list",
    "description": "Given the `head` of a linked list, remove the `n-th` node from the end of the list and return its head.\n\n### Example 1:\n```\nInput: [1,2,3,4,5]\n2\nOutput: [1, 2, 3, 5]\nExplanation: 2nd node from end (4) is removed.\n```\n\n### Example 2:\n```\nInput: [1]\n1\nOutput: []\nExplanation: Head is removed.\n```",
    "difficulty": "MEDIUM",
    "category": "DSA",
    "patterns": [
      "Linked List",
      "Two Pointers"
    ],
    "topics": [
      "Linked List",
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
        "verified": false,
        "frequencyCount": 25,
        "sourceNote": "Accenture Practice Bank #57"
      },
      {
        "company": "Infosys",
        "yearReported": 2025,
        "verified": true,
        "frequencyCount": 42,
        "sourceNote": "Infosys Interview Question #53"
      },
      {
        "company": "TCS",
        "yearReported": 2025,
        "verified": false,
        "frequencyCount": 30,
        "sourceNote": "TCS Practice Bank #55"
      },
      {
        "company": "Capgemini",
        "frequencyCount": 7,
        "yearReported": 2024
      },
      {
        "company": "Oracle",
        "frequencyCount": 7,
        "yearReported": 2024
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
        "boilerplate": "def removeNthNodeFromEndOfList(*args):\n    # TODO: Implement solution for Remove Nth Node From End of List\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = removeNthNodeFromEndOfList(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(removeNthNodeFromEndOfList(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function removeNthNodeFromEndOfList(...args) {\n    // TODO: Implement solution for Remove Nth Node From End of List\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(removeNthNodeFromEndOfList(...parsed)));\n    } catch (e) {\n        console.log(removeNthNodeFromEndOfList(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Remove Nth Node From End of List\n        // TODO: Read input from cin and implement solution\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        // TODO: Read from br and implement solution\n    }\n}\n"
      }
    ],
    "sampleTestCases": [
      {
        "input": "[1,2,3,4,5]\n2",
        "output": "[1, 2, 3, 5]",
        "explanation": "2nd node from end (4) is removed."
      },
      {
        "input": "[1]\n1",
        "output": "[]",
        "explanation": "Head is removed."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "[1,2,3,4,5]\n2",
        "output": "[1, 2, 3, 5]",
        "isHidden": true
      },
      {
        "input": "[1]\n1",
        "output": "[]",
        "isHidden": true
      },
      {
        "input": "[1,2]\n1",
        "output": "[1]",
        "isHidden": true
      }
    ],
    "hints": [
      "Two pointers with gap of n nodes. When fast reaches end, slow is just before target."
    ],
    "editorial": {
      "approach": "Optimal Approach for Remove Nth Node From End of List",
      "solutionMarkdown": "### Optimal Solution\n\nAdvance fast pointer n+1 steps from dummy head. Advance slow and fast together until fast is null.\n\n### Complexity\n- Time: O(N), Space: O(1)",
      "timeComplexity": "O(N)",
      "spaceComplexity": "O(1)"
    },
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0
  }
];
export const faangProblems3 = faang3;
