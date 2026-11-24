/* eslint-disable */
// Auto-generated Coding Problem Catalog (Apple, Meta, Microsoft, Google, Accenture, Infosys, TCS) - Chunk faang3
export const faang3 = [
  {
    "title": "Majority Element II (more than n/3 occurrences)",
    "slug": "majority-element-ii",
    "description": "Given an integer array of size `n`, find all elements that appear more than `\u230a n/3 \u230b` times in `O(n)` time and `O(1)` space.\n\n### Example 1:\n```\nInput: [3,2,3]\nOutput: [3]\nExplanation: 3 appears 2 times (> 3/3).\n```\n\n### Example 2:\n```\nInput: [1]\nOutput: [1]\nExplanation: 1 appears 1 time (> 1/3).\n```",
    "difficulty": "MEDIUM",
    "category": "DSA",
    "patterns": [
      "Array",
      "Hash Table",
      "Sorting",
      "Counting"
    ],
    "topics": [
      "Array",
      "Hash Table",
      "Sorting",
      "Counting"
    ],
    "companyTags": [
      {
        "company": "TCS",
        "yearReported": 2025,
        "verified": true,
        "frequencyCount": 45,
        "sourceNote": "TCS Interview Question #17"
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
        "boilerplate": "def majorityElementIi(*args):\n    # TODO: Implement solution for Majority Element II (more than n/3 occurrences)\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = majorityElementIi(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(majorityElementIi(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function majorityElementIi(...args) {\n    // TODO: Implement solution for Majority Element II (more than n/3 occurrences)\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(majorityElementIi(...parsed)));\n    } catch (e) {\n        console.log(majorityElementIi(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Majority Element II (more than n/3 occurrences)\n        // TODO: Read input from cin and implement solution\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        // TODO: Read from br and implement solution\n    }\n}\n"
      }
    ],
    "sampleTestCases": [
      {
        "input": "[3,2,3]",
        "output": "[3]",
        "explanation": "3 appears 2 times (> 3/3)."
      },
      {
        "input": "[1]",
        "output": "[1]",
        "explanation": "1 appears 1 time (> 1/3)."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "[3,2,3]",
        "output": "[3]",
        "isHidden": true
      },
      {
        "input": "[1]",
        "output": "[1]",
        "isHidden": true
      },
      {
        "input": "[1,2]",
        "output": "[1,2]",
        "isHidden": true
      },
      {
        "input": "[2,2,1,1,1,2,2]",
        "output": "[1,2]",
        "isHidden": true
      }
    ],
    "hints": [
      "There can be at most two majority elements. Use Boyer-Moore Voting algorithm with 2 candidates and 2 counters."
    ],
    "editorial": {
      "approach": "Optimal Approach for Majority Element II (more than n/3 occurrences)",
      "solutionMarkdown": "### Optimal Solution\n\nMaintain two candidates and two counts. Second pass confirms each candidate's actual frequency > n // 3.\n\n### Complexity\n- Time: O(N), Space: O(1)",
      "timeComplexity": "O(N)",
      "spaceComplexity": "O(1)"
    },
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0
  },
  {
    "title": "Making A Large Island",
    "slug": "making-a-large-island",
    "description": "You are given an `n x n` binary matrix `grid`. You are allowed to change **at most one** `0` to be `1`. Return *the size of the largest island in grid after applying this operation*.\n\n### Example 1:\n```\nInput: [[1,0],[0,1]]\nOutput: 3\nExplanation: Change one 0 to 1 to connect the two islands.\n```\n\n### Example 2:\n```\nInput: [[1,1],[1,0]]\nOutput: 4\nExplanation: Change the 0 to 1 to make the island cover the whole grid.\n```",
    "difficulty": "HARD",
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
        "boilerplate": "def makingALargeIsland(*args):\n    # TODO: Implement solution for Making A Large Island\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = makingALargeIsland(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(makingALargeIsland(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function makingALargeIsland(...args) {\n    // TODO: Implement solution for Making A Large Island\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(makingALargeIsland(...parsed)));\n    } catch (e) {\n        console.log(makingALargeIsland(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Making A Large Island\n        // TODO: Read input from cin and implement solution\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        // TODO: Read from br and implement solution\n    }\n}\n"
      }
    ],
    "sampleTestCases": [
      {
        "input": "[[1,0],[0,1]]",
        "output": "3",
        "explanation": "Change one 0 to 1 to connect the two islands."
      },
      {
        "input": "[[1,1],[1,0]]",
        "output": "4",
        "explanation": "Change the 0 to 1 to make the island cover the whole grid."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "[[1,0],[0,1]]",
        "output": "3",
        "isHidden": true
      },
      {
        "input": "[[1,1],[1,0]]",
        "output": "4",
        "isHidden": true
      },
      {
        "input": "[[1,1],[1,1]]",
        "output": "4",
        "isHidden": true
      }
    ],
    "hints": [
      "Label each connected component with a unique ID and store its area. For each 0, sum areas of distinct neighboring island IDs + 1."
    ],
    "editorial": {
      "approach": "Optimal Approach for Making A Large Island",
      "solutionMarkdown": "### Optimal Solution\n\nDFS to index islands (ID starting at 2) and record area in a map. Check each 0 cell to find maximum merged area.\n\n### Complexity\n- Time: O(N^2), Space: O(N^2)",
      "timeComplexity": "O(N^2)",
      "spaceComplexity": "O(N^2)"
    },
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0
  },
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
