/* eslint-disable */
// Auto-generated FAANG (Apple, Meta, Microsoft, Google) - Chunk faang2
export const faang2 = [
  {
    "title": "Find Peak Element",
    "slug": "find-peak-element",
    "description": "A peak element is an element that is strictly greater than its neighbors. Given a 0-indexed integer array `nums`, find a peak element, and return its index in `O(log n)` time.\n\n### Example 1:\n```\nInput: [1,2,3,1]\nOutput: 2\nExplanation: 3 is a peak element at index 2.\n```\n\n### Example 2:\n```\nInput: [1,2,1,3,5,6,4]\nOutput: 5\nExplanation: Index 5 (value 6) is a peak.\n```",
    "difficulty": "MEDIUM",
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
        "boilerplate": "def findPeakElement(*args):\n    # TODO: Implement solution for Find Peak Element\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = findPeakElement(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(findPeakElement(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function findPeakElement(...args) {\n    // TODO: Implement solution for Find Peak Element\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(findPeakElement(...parsed)));\n    } catch (e) {\n        console.log(findPeakElement(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Find Peak Element\n        string line;\n        while (getline(cin, line)) {\n            cout << line << endl;\n        }\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        String line;\n        while ((line = br.readLine()) != null) {\n            // TODO: Implement solution for Find Peak Element\n            System.out.println(line);\n        }\n    }\n}\n"
      }
    ],
    "sampleTestCases": [
      {
        "input": "[1,2,3,1]",
        "output": "2",
        "explanation": "3 is a peak element at index 2."
      },
      {
        "input": "[1,2,1,3,5,6,4]",
        "output": "5",
        "explanation": "Index 5 (value 6) is a peak."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "[1,2,3,1]",
        "output": "2",
        "isHidden": true
      },
      {
        "input": "[1,2,1,3,5,6,4]",
        "output": "5",
        "isHidden": true
      },
      {
        "input": "[1]",
        "output": "0",
        "isHidden": true
      }
    ],
    "hints": [
      "If nums[mid] < nums[mid + 1], peak must exist on right half; else peak on left half."
    ],
    "editorial": {
      "approach": "Optimal Approach for Find Peak Element",
      "solutionMarkdown": "### Optimal Solution\n\nBinary search on slope: if nums[mid] < nums[mid+1] left = mid + 1 else right = mid.\n\n### Complexity\n- Time: O(log N), Space: O(1)",
      "timeComplexity": "O(log N)",
      "spaceComplexity": "O(1)"
    },
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0
  },
  {
    "title": "Find the Celebrity",
    "slug": "find-the-celebrity",
    "description": "In a party of `n` people, there is one person known as the **celebrity** who is known by everyone, but knows nobody. Given a helper function `knows(a, b)`, find the celebrity or return `-1`.\n\n### Example 1:\n```\nInput: [[1,1,0],[0,1,0],[1,1,1]]\nOutput: 1\nExplanation: Person 1 is known by 0 and 2, and knows nobody.\n```\n\n### Example 2:\n```\nInput: [[1,0,1],[1,1,0],[0,1,1]]\nOutput: -1\nExplanation: No celebrity exists.\n```",
    "difficulty": "MEDIUM",
    "category": "DSA",
    "patterns": [
      "Two Pointers",
      "Graph",
      "Greedy"
    ],
    "topics": [
      "Two Pointers",
      "Graph",
      "Greedy"
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
        "boilerplate": "def findTheCelebrity(*args):\n    # TODO: Implement solution for Find the Celebrity\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = findTheCelebrity(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(findTheCelebrity(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function findTheCelebrity(...args) {\n    // TODO: Implement solution for Find the Celebrity\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(findTheCelebrity(...parsed)));\n    } catch (e) {\n        console.log(findTheCelebrity(...lines));\n    }\n}\n"
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
        "explanation": "Person 1 is known by 0 and 2, and knows nobody."
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
      }
    ],
    "hints": [
      "Candidate elimination: if knows(a, b) is true, a cannot be celebrity; else b cannot."
    ],
    "editorial": {
      "approach": "Optimal Approach for Find the Celebrity",
      "solutionMarkdown": "### Optimal Solution\n\nPass 1: find candidate in O(N). Pass 2: verify candidate knows nobody and everyone knows candidate.\n\n### Complexity\n- Time: O(N), Space: O(1)",
      "timeComplexity": "O(N)",
      "spaceComplexity": "O(1)"
    },
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0
  },
  {
    "title": "Find the Closest Palindrome",
    "slug": "find-the-closest-palindrome",
    "description": "Given a string `n` representing an integer, return *the closest integer (not including itself), which is a palindrome*. If there is a tie, return the **smaller one**.\n\n### Example 1:\n```\nInput: 123\nOutput: \"121\"\nExplanation: 121 is the closest palindrome to 123.\n```\n\n### Example 2:\n```\nInput: 1\nOutput: \"0\"\nExplanation: 0 is closest non-self palindrome.\n```",
    "difficulty": "HARD",
    "category": "DSA",
    "patterns": [
      "String",
      "Math"
    ],
    "topics": [
      "String",
      "Math"
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
        "boilerplate": "def findTheClosestPalindrome(*args):\n    # TODO: Implement solution for Find the Closest Palindrome\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = findTheClosestPalindrome(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(findTheClosestPalindrome(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function findTheClosestPalindrome(...args) {\n    // TODO: Implement solution for Find the Closest Palindrome\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(findTheClosestPalindrome(...parsed)));\n    } catch (e) {\n        console.log(findTheClosestPalindrome(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Find the Closest Palindrome\n        string line;\n        while (getline(cin, line)) {\n            cout << line << endl;\n        }\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        String line;\n        while ((line = br.readLine()) != null) {\n            // TODO: Implement solution for Find the Closest Palindrome\n            System.out.println(line);\n        }\n    }\n}\n"
      }
    ],
    "sampleTestCases": [
      {
        "input": "123",
        "output": "\"121\"",
        "explanation": "121 is the closest palindrome to 123."
      },
      {
        "input": "1",
        "output": "\"0\"",
        "explanation": "0 is closest non-self palindrome."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "123",
        "output": "\"121\"",
        "isHidden": true
      },
      {
        "input": "1",
        "output": "\"0\"",
        "isHidden": true
      },
      {
        "input": "10",
        "output": "\"9\"",
        "isHidden": true
      }
    ],
    "hints": [
      "Generate candidates: prefix-1, prefix, prefix+1 mirrored, plus 10^(L-1) - 1 and 10^L + 1."
    ],
    "editorial": {
      "approach": "Optimal Approach for Find the Closest Palindrome",
      "solutionMarkdown": "### Optimal Solution\n\nPrefix mirroring with 5 candidates, selecting closest with minimum absolute difference.\n\n### Complexity\n- Time: O(L), Space: O(L)",
      "timeComplexity": "O(L)",
      "spaceComplexity": "O(L)"
    },
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0
  },
  {
    "title": "Find the Duplicate Number",
    "slug": "find-the-duplicate-number",
    "description": "Given an array of integers `nums` containing `n + 1` integers where each integer is in the range `[1, n]` inclusive, return *the duplicate number* without modifying the array and using only constant extra space.\n\n### Example 1:\n```\nInput: [1,3,4,2,2]\nOutput: 2\nExplanation: 2 is the duplicate number.\n```\n\n### Example 2:\n```\nInput: [3,1,3,4,2]\nOutput: 3\nExplanation: 3 is duplicate.\n```",
    "difficulty": "MEDIUM",
    "category": "DSA",
    "patterns": [
      "Binary Search",
      "Two Pointers",
      "Fast & Slow Pointers"
    ],
    "topics": [
      "Binary Search",
      "Two Pointers",
      "Fast & Slow Pointers"
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
        "boilerplate": "def findTheDuplicateNumber(*args):\n    # TODO: Implement solution for Find the Duplicate Number\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = findTheDuplicateNumber(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(findTheDuplicateNumber(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function findTheDuplicateNumber(...args) {\n    // TODO: Implement solution for Find the Duplicate Number\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(findTheDuplicateNumber(...parsed)));\n    } catch (e) {\n        console.log(findTheDuplicateNumber(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Find the Duplicate Number\n        string line;\n        while (getline(cin, line)) {\n            cout << line << endl;\n        }\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        String line;\n        while ((line = br.readLine()) != null) {\n            // TODO: Implement solution for Find the Duplicate Number\n            System.out.println(line);\n        }\n    }\n}\n"
      }
    ],
    "sampleTestCases": [
      {
        "input": "[1,3,4,2,2]",
        "output": "2",
        "explanation": "2 is the duplicate number."
      },
      {
        "input": "[3,1,3,4,2]",
        "output": "3",
        "explanation": "3 is duplicate."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "[1,3,4,2,2]",
        "output": "2",
        "isHidden": true
      },
      {
        "input": "[3,1,3,4,2]",
        "output": "3",
        "isHidden": true
      },
      {
        "input": "[2,2,2,2,2]",
        "output": "2",
        "isHidden": true
      }
    ],
    "hints": [
      "Floyd's Cycle Finding algorithm treating array values as pointers: f(x) = nums[x]."
    ],
    "editorial": {
      "approach": "Optimal Approach for Find the Duplicate Number",
      "solutionMarkdown": "### Optimal Solution\n\nFast & slow pointer cycle detection. When pointers meet, find cycle entry point.\n\n### Complexity\n- Time: O(N), Space: O(1)",
      "timeComplexity": "O(N)",
      "spaceComplexity": "O(1)"
    },
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0
  },
  {
    "title": "Find the First 1 in a Sorted Binary Matrix",
    "slug": "find-the-first-1-in-a-sorted-binary-matrix",
    "description": "Given an `m x n` binary matrix `mat` where each row is sorted in non-decreasing order (0s followed by 1s), return the index of the first column that contains a `1`. If no 1 exists, return `-1`.\n\n### Example 1:\n```\nInput: [[0,0,0,1],[0,0,1,1],[0,1,1,1]]\nOutput: 1\nExplanation: First 1 appears at column 1 (row 2).\n```\n\n### Example 2:\n```\nInput: [[0,0],[0,0]]\nOutput: -1\nExplanation: No 1s exist.\n```",
    "difficulty": "MEDIUM",
    "category": "DSA",
    "patterns": [
      "Matrix",
      "Binary Search"
    ],
    "topics": [
      "Matrix",
      "Binary Search"
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
        "boilerplate": "def findTheFirst1InASortedBinaryMatrix(*args):\n    # TODO: Implement solution for Find the First 1 in a Sorted Binary Matrix\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = findTheFirst1InASortedBinaryMatrix(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(findTheFirst1InASortedBinaryMatrix(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function findTheFirst1InASortedBinaryMatrix(...args) {\n    // TODO: Implement solution for Find the First 1 in a Sorted Binary Matrix\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(findTheFirst1InASortedBinaryMatrix(...parsed)));\n    } catch (e) {\n        console.log(findTheFirst1InASortedBinaryMatrix(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Find the First 1 in a Sorted Binary Matrix\n        string line;\n        while (getline(cin, line)) {\n            cout << line << endl;\n        }\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        String line;\n        while ((line = br.readLine()) != null) {\n            // TODO: Implement solution for Find the First 1 in a Sorted Binary Matrix\n            System.out.println(line);\n        }\n    }\n}\n"
      }
    ],
    "sampleTestCases": [
      {
        "input": "[[0,0,0,1],[0,0,1,1],[0,1,1,1]]",
        "output": "1",
        "explanation": "First 1 appears at column 1 (row 2)."
      },
      {
        "input": "[[0,0],[0,0]]",
        "output": "-1",
        "explanation": "No 1s exist."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "[[0,0,0,1],[0,0,1,1],[0,1,1,1]]",
        "output": "1",
        "isHidden": true
      },
      {
        "input": "[[0,0],[0,0]]",
        "output": "-1",
        "isHidden": true
      }
    ],
    "hints": [
      "Start at top-right corner (0, n-1). If 1, move left; if 0, move down."
    ],
    "editorial": {
      "approach": "Optimal Approach for Find the First 1 in a Sorted Binary Matrix",
      "solutionMarkdown": "### Optimal Solution\n\nStaircase search starting at top-right: if mat[r][c] == 1, update best_col = c, c--; else r++.\n\n### Complexity\n- Time: O(M + N), Space: O(1)",
      "timeComplexity": "O(M + N)",
      "spaceComplexity": "O(1)"
    },
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0
  },
  {
    "title": "Find the Index of the First Occurrence in a String",
    "slug": "find-the-index-of-the-first-occurrence-in-a-string",
    "description": "Given two strings `needle` and `haystack`, return the index of the first occurrence of `needle` in `haystack`, or `-1` if `needle` is not part of `haystack`.\n\n### Example 1:\n```\nInput: sadbutsad\nsad\nOutput: 0\nExplanation: 'sad' occurs at index 0 and 6. First is 0.\n```\n\n### Example 2:\n```\nInput: leetcode\nleeto\nOutput: -1\nExplanation: 'leeto' did not occur in 'leetcode'.\n```",
    "difficulty": "EASY",
    "category": "DSA",
    "patterns": [
      "String",
      "Two Pointers",
      "KMP"
    ],
    "topics": [
      "String",
      "Two Pointers",
      "KMP"
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
        "boilerplate": "def findTheIndexOfTheFirstOccurrenceInAString(*args):\n    # TODO: Implement solution for Find the Index of the First Occurrence in a String\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = findTheIndexOfTheFirstOccurrenceInAString(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(findTheIndexOfTheFirstOccurrenceInAString(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function findTheIndexOfTheFirstOccurrenceInAString(...args) {\n    // TODO: Implement solution for Find the Index of the First Occurrence in a String\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(findTheIndexOfTheFirstOccurrenceInAString(...parsed)));\n    } catch (e) {\n        console.log(findTheIndexOfTheFirstOccurrenceInAString(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Find the Index of the First Occurrence in a String\n        string line;\n        while (getline(cin, line)) {\n            cout << line << endl;\n        }\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        String line;\n        while ((line = br.readLine()) != null) {\n            // TODO: Implement solution for Find the Index of the First Occurrence in a String\n            System.out.println(line);\n        }\n    }\n}\n"
      }
    ],
    "sampleTestCases": [
      {
        "input": "sadbutsad\nsad",
        "output": "0",
        "explanation": "'sad' occurs at index 0 and 6. First is 0."
      },
      {
        "input": "leetcode\nleeto",
        "output": "-1",
        "explanation": "'leeto' did not occur in 'leetcode'."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "sadbutsad\nsad",
        "output": "0",
        "isHidden": true
      },
      {
        "input": "leetcode\nleeto",
        "output": "-1",
        "isHidden": true
      },
      {
        "input": "a\na",
        "output": "0",
        "isHidden": true
      }
    ],
    "hints": [
      "Sliding window substring check or KMP LPS prefix table."
    ],
    "editorial": {
      "approach": "Optimal Approach for Find the Index of the First Occurrence in a String",
      "solutionMarkdown": "### Optimal Solution\n\nKMP pattern matching or sliding window check in O(N).\n\n### Complexity\n- Time: O(N), Space: O(M)",
      "timeComplexity": "O(N)",
      "spaceComplexity": "O(M)"
    },
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0
  },
  {
    "title": "First Missing Positive",
    "slug": "first-missing-positive",
    "description": "Given an unsorted integer array `nums`, return the smallest missing positive integer.\n\nYou must implement an algorithm that runs in `O(n)` time and uses `O(1)` auxiliary space.\n\n### Example 1:\n```\nInput: [1,2,0]\nOutput: 3\nExplanation: Numbers 1 and 2 are present, 3 is the smallest missing.\n```\n\n### Example 2:\n```\nInput: [3,4,-1,1]\nOutput: 2\nExplanation: 1 is in array, 2 is missing.\n```",
    "difficulty": "HARD",
    "category": "DSA",
    "patterns": [
      "Array",
      "Hash Table"
    ],
    "topics": [
      "Array",
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
        "boilerplate": "def firstMissingPositive(*args):\n    # TODO: Implement solution for First Missing Positive\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = firstMissingPositive(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(firstMissingPositive(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function firstMissingPositive(...args) {\n    // TODO: Implement solution for First Missing Positive\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(firstMissingPositive(...parsed)));\n    } catch (e) {\n        console.log(firstMissingPositive(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for First Missing Positive\n        string line;\n        while (getline(cin, line)) {\n            cout << line << endl;\n        }\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        String line;\n        while ((line = br.readLine()) != null) {\n            // TODO: Implement solution for First Missing Positive\n            System.out.println(line);\n        }\n    }\n}\n"
      }
    ],
    "sampleTestCases": [
      {
        "input": "[1,2,0]",
        "output": "3",
        "explanation": "Numbers 1 and 2 are present, 3 is the smallest missing."
      },
      {
        "input": "[3,4,-1,1]",
        "output": "2",
        "explanation": "1 is in array, 2 is missing."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "[1,2,0]",
        "output": "3",
        "isHidden": true
      },
      {
        "input": "[3,4,-1,1]",
        "output": "2",
        "isHidden": true
      },
      {
        "input": "[7,8,9,11,12]",
        "output": "1",
        "isHidden": true
      },
      {
        "input": "[1]",
        "output": "2",
        "isHidden": true
      }
    ],
    "hints": [
      "Place each number x in its bucket index x-1 if 1 <= x <= n using cyclic swap."
    ],
    "editorial": {
      "approach": "Optimal Approach for First Missing Positive",
      "solutionMarkdown": "### Optimal Solution\n\nCyclic sort: while 1 <= nums[i] <= n and nums[nums[i]-1] != nums[i], swap(nums[i], nums[nums[i]-1]). First index i where nums[i] != i+1 is answer i+1.\n\n### Complexity\n- Time: O(N), Space: O(1)",
      "timeComplexity": "O(N)",
      "spaceComplexity": "O(1)"
    },
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0
  },
  {
    "title": "First Unique Character in a String",
    "slug": "first-unique-character-in-a-string",
    "description": "Given a string `s`, *find the first non-repeating character in it and return its index*. If it does not exist, return `-1`.\n\n### Example 1:\n```\nInput: leetcode\nOutput: 0\nExplanation: Character 'l' at index 0 is first non-repeating.\n```\n\n### Example 2:\n```\nInput: loveleetcode\nOutput: 2\nExplanation: Character 'v' at index 2 is first non-repeating.\n```",
    "difficulty": "EASY",
    "category": "DSA",
    "patterns": [
      "Hash Table",
      "String",
      "Queue"
    ],
    "topics": [
      "Hash Table",
      "String",
      "Queue"
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
        "boilerplate": "def firstUniqueCharacterInAString(*args):\n    # TODO: Implement solution for First Unique Character in a String\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = firstUniqueCharacterInAString(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(firstUniqueCharacterInAString(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function firstUniqueCharacterInAString(...args) {\n    // TODO: Implement solution for First Unique Character in a String\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(firstUniqueCharacterInAString(...parsed)));\n    } catch (e) {\n        console.log(firstUniqueCharacterInAString(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for First Unique Character in a String\n        string line;\n        while (getline(cin, line)) {\n            cout << line << endl;\n        }\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        String line;\n        while ((line = br.readLine()) != null) {\n            // TODO: Implement solution for First Unique Character in a String\n            System.out.println(line);\n        }\n    }\n}\n"
      }
    ],
    "sampleTestCases": [
      {
        "input": "leetcode",
        "output": "0",
        "explanation": "Character 'l' at index 0 is first non-repeating."
      },
      {
        "input": "loveleetcode",
        "output": "2",
        "explanation": "Character 'v' at index 2 is first non-repeating."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "leetcode",
        "output": "0",
        "isHidden": true
      },
      {
        "input": "loveleetcode",
        "output": "2",
        "isHidden": true
      },
      {
        "input": "aabb",
        "output": "-1",
        "isHidden": true
      }
    ],
    "hints": [
      "Pass 1: count character frequencies. Pass 2: find first index where count == 1."
    ],
    "editorial": {
      "approach": "Optimal Approach for First Unique Character in a String",
      "solutionMarkdown": "### Optimal Solution\n\nTwo-pass algorithm with hash map / 26-size array.\n\n### Complexity\n- Time: O(N), Space: O(1)",
      "timeComplexity": "O(N)",
      "spaceComplexity": "O(1)"
    },
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0
  },
  {
    "title": "Flatten 2D Vector",
    "slug": "flatten-2d-vector",
    "description": "Design an iterator to flatten a 2D vector. It should support `next()` and `hasNext()` operations.\n\n### Example 1:\n```\nInput: [\"Vector2D\",\"next\",\"next\",\"next\",\"hasNext\",\"hasNext\",\"next\",\"hasNext\"]\n[[[[1,2],[3],[4]]],[],[],[],[],[],[],[]]\nOutput: [null, 1, 2, 3, true, true, 4, false]\nExplanation: Elements 1, 2, 3, 4 traversed sequentially.\n```\n\n### Example 2:\n```\nInput: [\"Vector2D\",\"hasNext\"]\n[[[]],[]]\nOutput: [null, false]\nExplanation: Empty 2D vector.\n```",
    "difficulty": "MEDIUM",
    "category": "DSA",
    "patterns": [
      "Design",
      "Two Pointers",
      "Array"
    ],
    "topics": [
      "Design",
      "Two Pointers",
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
        "boilerplate": "def flatten2dVector(*args):\n    # TODO: Implement solution for Flatten 2D Vector\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = flatten2dVector(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(flatten2dVector(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function flatten2dVector(...args) {\n    // TODO: Implement solution for Flatten 2D Vector\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(flatten2dVector(...parsed)));\n    } catch (e) {\n        console.log(flatten2dVector(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Flatten 2D Vector\n        string line;\n        while (getline(cin, line)) {\n            cout << line << endl;\n        }\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        String line;\n        while ((line = br.readLine()) != null) {\n            // TODO: Implement solution for Flatten 2D Vector\n            System.out.println(line);\n        }\n    }\n}\n"
      }
    ],
    "sampleTestCases": [
      {
        "input": "[\"Vector2D\",\"next\",\"next\",\"next\",\"hasNext\",\"hasNext\",\"next\",\"hasNext\"]\n[[[[1,2],[3],[4]]],[],[],[],[],[],[],[]]",
        "output": "[null, 1, 2, 3, true, true, 4, false]",
        "explanation": "Elements 1, 2, 3, 4 traversed sequentially."
      },
      {
        "input": "[\"Vector2D\",\"hasNext\"]\n[[[]],[]]",
        "output": "[null, false]",
        "explanation": "Empty 2D vector."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "[\"Vector2D\",\"next\",\"next\",\"next\",\"hasNext\",\"hasNext\",\"next\",\"hasNext\"]\n[[[[1,2],[3],[4]]],[],[],[],[],[],[],[]]",
        "output": "[null, 1, 2, 3, true, true, 4, false]",
        "isHidden": true
      }
    ],
    "hints": [
      "Maintain outer index (row) and inner index (col). Advance outer index over empty rows in hasNext."
    ],
    "editorial": {
      "approach": "Optimal Approach for Flatten 2D Vector",
      "solutionMarkdown": "### Optimal Solution\n\nTwo pointer iterator tracking row and col, skipping empty sub-arrays.\n\n### Complexity\n- Time: O(1) amortized, Space: O(1)",
      "timeComplexity": "O(1) amortized",
      "spaceComplexity": "O(1)"
    },
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0
  },
  {
    "title": "Flatten Binary Tree to Linked List",
    "slug": "flatten-binary-tree-to-linked-list",
    "description": "Given the `root` of a binary tree, flatten the tree into a \"linked list\" in-place following preorder traversal, where right child points to next node and left child is always null.\n\n### Example 1:\n```\nInput: [1,2,5,3,4,null,6]\nOutput: [1, null, 2, null, 3, null, 4, null, 5, null, 6]\nExplanation: Preorder flattened tree.\n```\n\n### Example 2:\n```\nInput: []\nOutput: []\nExplanation: Empty tree.\n```",
    "difficulty": "MEDIUM",
    "category": "DSA",
    "patterns": [
      "Tree",
      "DFS / BFS",
      "Linked List"
    ],
    "topics": [
      "Tree",
      "DFS / BFS",
      "Linked List"
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
        "boilerplate": "def flattenBinaryTreeToLinkedList(*args):\n    # TODO: Implement solution for Flatten Binary Tree to Linked List\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = flattenBinaryTreeToLinkedList(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(flattenBinaryTreeToLinkedList(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function flattenBinaryTreeToLinkedList(...args) {\n    // TODO: Implement solution for Flatten Binary Tree to Linked List\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(flattenBinaryTreeToLinkedList(...parsed)));\n    } catch (e) {\n        console.log(flattenBinaryTreeToLinkedList(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Flatten Binary Tree to Linked List\n        string line;\n        while (getline(cin, line)) {\n            cout << line << endl;\n        }\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        String line;\n        while ((line = br.readLine()) != null) {\n            // TODO: Implement solution for Flatten Binary Tree to Linked List\n            System.out.println(line);\n        }\n    }\n}\n"
      }
    ],
    "sampleTestCases": [
      {
        "input": "[1,2,5,3,4,null,6]",
        "output": "[1, null, 2, null, 3, null, 4, null, 5, null, 6]",
        "explanation": "Preorder flattened tree."
      },
      {
        "input": "[]",
        "output": "[]",
        "explanation": "Empty tree."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "[1,2,5,3,4,null,6]",
        "output": "[1, null, 2, null, 3, null, 4, null, 5, null, 6]",
        "isHidden": true
      },
      {
        "input": "[]",
        "output": "[]",
        "isHidden": true
      }
    ],
    "hints": [
      "Morris traversal: find predecessor of right subtree on left subtree, link, then move left to right."
    ],
    "editorial": {
      "approach": "Optimal Approach for Flatten Binary Tree to Linked List",
      "solutionMarkdown": "### Optimal Solution\n\nMorris-style in-place rewiring: attach right subtree to rightmost node of left subtree.\n\n### Complexity\n- Time: O(N), Space: O(1)",
      "timeComplexity": "O(N)",
      "spaceComplexity": "O(1)"
    },
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0
  },
  {
    "title": "Flip Game",
    "slug": "flip-game",
    "description": "You are playing a Flip Game with your friend. You are given a string `currentState` which contains only `+` and `-`. You and your friend take turns to flip two consecutive `\"++\"` into `\"--\"`. Return all possible states of the string after one valid move.\n\n### Example 1:\n```\nInput: ++++\nOutput: [\"--++\", \"+--+\", \"++--\"]\nExplanation: Three valid single-move flips.\n```\n\n### Example 2:\n```\nInput: +\nOutput: []\nExplanation: Cannot flip consecutive ++.\n```",
    "difficulty": "EASY",
    "category": "DSA",
    "patterns": [
      "String",
      "Simulation"
    ],
    "topics": [
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
        "boilerplate": "def flipGame(*args):\n    # TODO: Implement solution for Flip Game\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = flipGame(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(flipGame(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function flipGame(...args) {\n    // TODO: Implement solution for Flip Game\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(flipGame(...parsed)));\n    } catch (e) {\n        console.log(flipGame(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Flip Game\n        string line;\n        while (getline(cin, line)) {\n            cout << line << endl;\n        }\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        String line;\n        while ((line = br.readLine()) != null) {\n            // TODO: Implement solution for Flip Game\n            System.out.println(line);\n        }\n    }\n}\n"
      }
    ],
    "sampleTestCases": [
      {
        "input": "++++",
        "output": "[\"--++\", \"+--+\", \"++--\"]",
        "explanation": "Three valid single-move flips."
      },
      {
        "input": "+",
        "output": "[]",
        "explanation": "Cannot flip consecutive ++."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "++++",
        "output": "[\"--++\", \"+--+\", \"++--\"]",
        "isHidden": true
      },
      {
        "input": "+",
        "output": "[]",
        "isHidden": true
      }
    ],
    "hints": [
      "Scan string from 0 to len-2. Whenever s[i:i+2] == '++', create state with '--' substituted."
    ],
    "editorial": {
      "approach": "Optimal Approach for Flip Game",
      "solutionMarkdown": "### Optimal Solution\n\nLinear scan checking consecutive matching pluses and generating modified states.\n\n### Complexity\n- Time: O(N^2), Space: O(N^2)",
      "timeComplexity": "O(N^2)",
      "spaceComplexity": "O(N^2)"
    },
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0
  },
  {
    "title": "Flip Game II",
    "slug": "flip-game-ii",
    "description": "You are playing a Flip Game with your friend. Starting with a string `currentState`, determine if the starting player can guarantee a win.\n\n### Example 1:\n```\nInput: ++++\nOutput: true\nExplanation: Flipping middle '++' leaves '+--+', opponent cannot make any move.\n```\n\n### Example 2:\n```\nInput: +\nOutput: false\nExplanation: No valid moves.\n```",
    "difficulty": "MEDIUM",
    "category": "DSA",
    "patterns": [
      "Game Theory",
      "Backtracking",
      "Dynamic Programming"
    ],
    "topics": [
      "Game Theory",
      "Backtracking",
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
        "boilerplate": "def flipGameIi(*args):\n    # TODO: Implement solution for Flip Game II\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = flipGameIi(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(flipGameIi(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function flipGameIi(...args) {\n    // TODO: Implement solution for Flip Game II\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(flipGameIi(...parsed)));\n    } catch (e) {\n        console.log(flipGameIi(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Flip Game II\n        string line;\n        while (getline(cin, line)) {\n            cout << line << endl;\n        }\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        String line;\n        while ((line = br.readLine()) != null) {\n            // TODO: Implement solution for Flip Game II\n            System.out.println(line);\n        }\n    }\n}\n"
      }
    ],
    "sampleTestCases": [
      {
        "input": "++++",
        "output": "true",
        "explanation": "Flipping middle '++' leaves '+--+', opponent cannot make any move."
      },
      {
        "input": "+",
        "output": "false",
        "explanation": "No valid moves."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "++++",
        "output": "true",
        "isHidden": true
      },
      {
        "input": "+",
        "output": "false",
        "isHidden": true
      },
      {
        "input": "+++++",
        "output": "false",
        "isHidden": true
      }
    ],
    "hints": [
      "Minimax with memoization: if any move leads to opponent losing (!canWin(nextState)), you win."
    ],
    "editorial": {
      "approach": "Optimal Approach for Flip Game II",
      "solutionMarkdown": "### Optimal Solution\n\nGame theory backtracking with memoization map tracking winning/losing states.\n\n### Complexity\n- Time: O(2^N), Space: O(2^N)",
      "timeComplexity": "O(2^N)",
      "spaceComplexity": "O(2^N)"
    },
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0
  },
  {
    "title": "Fraction to Recurring Decimal",
    "slug": "fraction-to-recurring-decimal",
    "description": "Given two integers representing the `numerator` and `denominator` of a fraction, return *the fraction in string format*. If the fractional part is repeating, enclose the repeating part in parentheses.\n\n### Example 1:\n```\nInput: 1\n2\nOutput: \"0.5\"\nExplanation: 1 / 2 = 0.5 with no repeating part.\n```\n\n### Example 2:\n```\nInput: 2\n3\nOutput: \"0.(6)\"\nExplanation: 2 / 3 = 0.6666... with 6 repeating.\n```",
    "difficulty": "MEDIUM",
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
        "boilerplate": "def fractionToRecurringDecimal(*args):\n    # TODO: Implement solution for Fraction to Recurring Decimal\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = fractionToRecurringDecimal(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(fractionToRecurringDecimal(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function fractionToRecurringDecimal(...args) {\n    // TODO: Implement solution for Fraction to Recurring Decimal\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(fractionToRecurringDecimal(...parsed)));\n    } catch (e) {\n        console.log(fractionToRecurringDecimal(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Fraction to Recurring Decimal\n        string line;\n        while (getline(cin, line)) {\n            cout << line << endl;\n        }\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        String line;\n        while ((line = br.readLine()) != null) {\n            // TODO: Implement solution for Fraction to Recurring Decimal\n            System.out.println(line);\n        }\n    }\n}\n"
      }
    ],
    "sampleTestCases": [
      {
        "input": "1\n2",
        "output": "\"0.5\"",
        "explanation": "1 / 2 = 0.5 with no repeating part."
      },
      {
        "input": "2\n3",
        "output": "\"0.(6)\"",
        "explanation": "2 / 3 = 0.6666... with 6 repeating."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "1\n2",
        "output": "\"0.5\"",
        "isHidden": true
      },
      {
        "input": "2\n3",
        "output": "\"0.(6)\"",
        "isHidden": true
      },
      {
        "input": "4\n333",
        "output": "\"0.(012)\"",
        "isHidden": true
      }
    ],
    "hints": [
      "Use a hash map to store the remainder and its index in the result string to detect repeating cycles."
    ],
    "editorial": {
      "approach": "Optimal Approach for Fraction to Recurring Decimal",
      "solutionMarkdown": "### Optimal Solution\n\nPerform long division. Track seen remainders and positions in the fractional string to insert parentheses upon cycle detection.\n\n### Complexity\n- Time: O(denominator), Space: O(denominator)",
      "timeComplexity": "O(denominator)",
      "spaceComplexity": "O(denominator)"
    },
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0
  },
  {
    "title": "Game of Life",
    "slug": "game-of-life",
    "description": "According to Conway's Game of Life, the board is made up of an `m x n` grid of cells, where each cell is either 0 (dead) or 1 (live). Return the next state of the board.\n\n### Example 1:\n```\nInput: [[0,1,0],[0,0,1],[1,1,1],[0,0,0]]\nOutput: [[0,0,0],[1,0,1],[0,1,1],[0,1,0]]\nExplanation: Each cell transitions based on the 8 neighbor rules.\n```\n\n### Example 2:\n```\nInput: [[1,1],[1,0]]\nOutput: [[1,1],[1,1]]\nExplanation: All live cells have 2 or 3 live neighbors.\n```",
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
        "boilerplate": "def gameOfLife(*args):\n    # TODO: Implement solution for Game of Life\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = gameOfLife(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(gameOfLife(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function gameOfLife(...args) {\n    // TODO: Implement solution for Game of Life\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(gameOfLife(...parsed)));\n    } catch (e) {\n        console.log(gameOfLife(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Game of Life\n        string line;\n        while (getline(cin, line)) {\n            cout << line << endl;\n        }\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        String line;\n        while ((line = br.readLine()) != null) {\n            // TODO: Implement solution for Game of Life\n            System.out.println(line);\n        }\n    }\n}\n"
      }
    ],
    "sampleTestCases": [
      {
        "input": "[[0,1,0],[0,0,1],[1,1,1],[0,0,0]]",
        "output": "[[0,0,0],[1,0,1],[0,1,1],[0,1,0]]",
        "explanation": "Each cell transitions based on the 8 neighbor rules."
      },
      {
        "input": "[[1,1],[1,0]]",
        "output": "[[1,1],[1,1]]",
        "explanation": "All live cells have 2 or 3 live neighbors."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "[[0,1,0],[0,0,1],[1,1,1],[0,0,0]]",
        "output": "[[0,0,0],[1,0,1],[0,1,1],[0,1,0]]",
        "isHidden": true
      },
      {
        "input": "[[1,1],[1,0]]",
        "output": "[[1,1],[1,1]]",
        "isHidden": true
      },
      {
        "input": "[[0]]",
        "output": "[[0]]",
        "isHidden": true
      }
    ],
    "hints": [
      "Use 2-bit states to encode old state and new state in-place without extra space."
    ],
    "editorial": {
      "approach": "Optimal Approach for Game of Life",
      "solutionMarkdown": "### Optimal Solution\n\nEncode transitions using bit manipulation: state 0->1 as 2, 1->0 as -1, then finalize with modulo.\n\n### Complexity\n- Time: O(M*N), Space: O(1)",
      "timeComplexity": "O(M*N)",
      "spaceComplexity": "O(1)"
    },
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0
  },
  {
    "title": "Gas Station",
    "slug": "gas-station",
    "description": "There are `n` gas stations along a circular route. You are given two integer arrays `gas` and `cost`. Return the starting gas station's index if you can travel around the circuit once in the clockwise direction, otherwise return `-1`.\n\n### Example 1:\n```\nInput: [1,2,3,4,5]\n[3,4,5,1,2]\nOutput: 3\nExplanation: Start at station 3 (index 3) and fill up with 4 unit of gas. Complete the circuit successfully.\n```\n\n### Example 2:\n```\nInput: [2,3,4]\n[3,4,3]\nOutput: -1\nExplanation: Total gas is less than total cost, impossible to complete.\n```",
    "difficulty": "MEDIUM",
    "category": "DSA",
    "patterns": [
      "Greedy",
      "Array"
    ],
    "topics": [
      "Greedy",
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
        "boilerplate": "def gasStation(*args):\n    # TODO: Implement solution for Gas Station\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = gasStation(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(gasStation(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function gasStation(...args) {\n    // TODO: Implement solution for Gas Station\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(gasStation(...parsed)));\n    } catch (e) {\n        console.log(gasStation(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Gas Station\n        string line;\n        while (getline(cin, line)) {\n            cout << line << endl;\n        }\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        String line;\n        while ((line = br.readLine()) != null) {\n            // TODO: Implement solution for Gas Station\n            System.out.println(line);\n        }\n    }\n}\n"
      }
    ],
    "sampleTestCases": [
      {
        "input": "[1,2,3,4,5]\n[3,4,5,1,2]",
        "output": "3",
        "explanation": "Start at station 3 (index 3) and fill up with 4 unit of gas. Complete the circuit successfully."
      },
      {
        "input": "[2,3,4]\n[3,4,3]",
        "output": "-1",
        "explanation": "Total gas is less than total cost, impossible to complete."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "[1,2,3,4,5]\n[3,4,5,1,2]",
        "output": "3",
        "isHidden": true
      },
      {
        "input": "[2,3,4]\n[3,4,3]",
        "output": "-1",
        "isHidden": true
      },
      {
        "input": "[5,1,2,3,4]\n[4,4,1,5,1]",
        "output": "4",
        "isHidden": true
      }
    ],
    "hints": [
      "If total gas < total cost, return -1. Otherwise a unique solution is guaranteed."
    ],
    "editorial": {
      "approach": "Optimal Approach for Gas Station",
      "solutionMarkdown": "### Optimal Solution\n\nGreedy single pass. If running tank drops below 0, reset start to next station and reset tank to 0.\n\n### Complexity\n- Time: O(N), Space: O(1)",
      "timeComplexity": "O(N)",
      "spaceComplexity": "O(1)"
    },
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0
  },
  {
    "title": "Generate Parentheses",
    "slug": "generate-parentheses",
    "description": "Given `n` pairs of parentheses, write a function to *generate all combinations of well-formed parentheses*.\n\n### Example 1:\n```\nInput: 3\nOutput: [\"((()))\",\"(()())\",\"(())()\",\"()(())\",\"()()()\"]\nExplanation: All 5 valid combinations for n=3.\n```\n\n### Example 2:\n```\nInput: 1\nOutput: [\"()\"]\nExplanation: Only one pair.\n```",
    "difficulty": "MEDIUM",
    "category": "DSA",
    "patterns": [
      "Backtracking",
      "Dynamic Programming",
      "String"
    ],
    "topics": [
      "Backtracking",
      "Dynamic Programming",
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
        "boilerplate": "def generateParentheses(*args):\n    # TODO: Implement solution for Generate Parentheses\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = generateParentheses(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(generateParentheses(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function generateParentheses(...args) {\n    // TODO: Implement solution for Generate Parentheses\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(generateParentheses(...parsed)));\n    } catch (e) {\n        console.log(generateParentheses(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Generate Parentheses\n        string line;\n        while (getline(cin, line)) {\n            cout << line << endl;\n        }\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        String line;\n        while ((line = br.readLine()) != null) {\n            // TODO: Implement solution for Generate Parentheses\n            System.out.println(line);\n        }\n    }\n}\n"
      }
    ],
    "sampleTestCases": [
      {
        "input": "3",
        "output": "[\"((()))\",\"(()())\",\"(())()\",\"()(())\",\"()()()\"]",
        "explanation": "All 5 valid combinations for n=3."
      },
      {
        "input": "1",
        "output": "[\"()\"]",
        "explanation": "Only one pair."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "3",
        "output": "[\"((()))\",\"(()())\",\"(())()\",\"()(())\",\"()()()\"]",
        "isHidden": true
      },
      {
        "input": "1",
        "output": "[\"()\"]",
        "isHidden": true
      },
      {
        "input": "2",
        "output": "[\"(())\",\"()()\"]",
        "isHidden": true
      }
    ],
    "hints": [
      "Only add '(' if open < n, and ')' if close < open."
    ],
    "editorial": {
      "approach": "Optimal Approach for Generate Parentheses",
      "solutionMarkdown": "### Optimal Solution\n\nBacktracking maintaining counts of open and closed brackets placed so far.\n\n### Complexity\n- Time: O(4^n / sqrt(n)), Space: O(n)",
      "timeComplexity": "O(4^n / sqrt(n))",
      "spaceComplexity": "O(n)"
    },
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0
  },
  {
    "title": "Graph Valid Tree",
    "slug": "graph-valid-tree",
    "description": "You have a graph of `n` nodes labeled from `0` to `n - 1`. Given an integer `n` and a list of `edges` where `edges[i] = [ai, bi]`, return `true` if the edges of the given graph make up a valid tree, and `false` otherwise.\n\n### Example 1:\n```\nInput: 5\n[[0,1],[0,2],[0,3],[1,4]]\nOutput: true\nExplanation: Graph has 5 nodes, 4 edges, connected with no cycles.\n```\n\n### Example 2:\n```\nInput: 5\n[[0,1],[1,2],[2,3],[1,3],[1,4]]\nOutput: false\nExplanation: Cycle exists between 1, 2, and 3.\n```",
    "difficulty": "MEDIUM",
    "category": "DSA",
    "patterns": [
      "Graph",
      "Union Find",
      "Depth-First Search",
      "Breadth-First Search"
    ],
    "topics": [
      "Graph",
      "Union Find",
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
        "boilerplate": "def graphValidTree(*args):\n    # TODO: Implement solution for Graph Valid Tree\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = graphValidTree(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(graphValidTree(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function graphValidTree(...args) {\n    // TODO: Implement solution for Graph Valid Tree\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(graphValidTree(...parsed)));\n    } catch (e) {\n        console.log(graphValidTree(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Graph Valid Tree\n        string line;\n        while (getline(cin, line)) {\n            cout << line << endl;\n        }\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        String line;\n        while ((line = br.readLine()) != null) {\n            // TODO: Implement solution for Graph Valid Tree\n            System.out.println(line);\n        }\n    }\n}\n"
      }
    ],
    "sampleTestCases": [
      {
        "input": "5\n[[0,1],[0,2],[0,3],[1,4]]",
        "output": "true",
        "explanation": "Graph has 5 nodes, 4 edges, connected with no cycles."
      },
      {
        "input": "5\n[[0,1],[1,2],[2,3],[1,3],[1,4]]",
        "output": "false",
        "explanation": "Cycle exists between 1, 2, and 3."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "5\n[[0,1],[0,2],[0,3],[1,4]]",
        "output": "true",
        "isHidden": true
      },
      {
        "input": "5\n[[0,1],[1,2],[2,3],[1,3],[1,4]]",
        "output": "false",
        "isHidden": true
      },
      {
        "input": "4\n[[0,1],[2,3]]",
        "output": "false",
        "isHidden": true
      }
    ],
    "hints": [
      "A tree with n nodes must have exactly n - 1 edges and be fully connected."
    ],
    "editorial": {
      "approach": "Optimal Approach for Graph Valid Tree",
      "solutionMarkdown": "### Optimal Solution\n\nCheck if len(edges) == n - 1, then use Union-Find or BFS to ensure all nodes are connected without cycles.\n\n### Complexity\n- Time: O(N * alpha(N)), Space: O(N)",
      "timeComplexity": "O(N * alpha(N))",
      "spaceComplexity": "O(N)"
    },
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0
  },
  {
    "title": "Gray Code",
    "slug": "gray-code",
    "description": "An **n-bit Gray code sequence** is a sequence of `2^n` integers where every consecutive pair differs by exactly one bit. Given `n`, return *any valid n-bit gray code sequence*.\n\n### Example 1:\n```\nInput: 2\nOutput: [0,1,3,2]\nExplanation: Binary representations: 00, 01, 11, 10. Each differs by 1 bit.\n```\n\n### Example 2:\n```\nInput: 1\nOutput: [0,1]\nExplanation: Binary: 0, 1.\n```",
    "difficulty": "MEDIUM",
    "category": "DSA",
    "patterns": [
      "Math",
      "Backtracking",
      "Bit Manipulation"
    ],
    "topics": [
      "Math",
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
        "boilerplate": "def grayCode(*args):\n    # TODO: Implement solution for Gray Code\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = grayCode(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(grayCode(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function grayCode(...args) {\n    // TODO: Implement solution for Gray Code\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(grayCode(...parsed)));\n    } catch (e) {\n        console.log(grayCode(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Gray Code\n        string line;\n        while (getline(cin, line)) {\n            cout << line << endl;\n        }\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        String line;\n        while ((line = br.readLine()) != null) {\n            // TODO: Implement solution for Gray Code\n            System.out.println(line);\n        }\n    }\n}\n"
      }
    ],
    "sampleTestCases": [
      {
        "input": "2",
        "output": "[0,1,3,2]",
        "explanation": "Binary representations: 00, 01, 11, 10. Each differs by 1 bit."
      },
      {
        "input": "1",
        "output": "[0,1]",
        "explanation": "Binary: 0, 1."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "2",
        "output": "[0,1,3,2]",
        "isHidden": true
      },
      {
        "input": "1",
        "output": "[0,1]",
        "isHidden": true
      },
      {
        "input": "3",
        "output": "[0,1,3,2,6,7,5,4]",
        "isHidden": true
      }
    ],
    "hints": [
      "The i-th Gray code can be directly computed as i ^ (i >> 1)."
    ],
    "editorial": {
      "approach": "Optimal Approach for Gray Code",
      "solutionMarkdown": "### Optimal Solution\n\nGenerate sequence by formula G(i) = i ^ (i >> 1) for i in range 0 to 2^n - 1.\n\n### Complexity\n- Time: O(2^n), Space: O(1)",
      "timeComplexity": "O(2^n)",
      "spaceComplexity": "O(1)"
    },
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0
  },
  {
    "title": "Grid Navigation with Directional Tiles",
    "slug": "grid-navigation-with-directional-tiles",
    "description": "Given an `m x n` grid where each cell has a sign indicating the direction to move ('L', 'R', 'U', 'D'), you can modify a cell's direction with cost 1. Return the minimum cost to reach the bottom-right cell `(m-1, n-1)` starting from `(0, 0)`.\n\n### Example 1:\n```\nInput: [[1,1,1,1],[2,2,2,2],[1,1,1,1],[2,2,2,2]]\nOutput: 3\nExplanation: At most 3 modifications needed.\n```\n\n### Example 2:\n```\nInput: [[1,1,3],[3,2,2],[1,1,4]]\nOutput: 0\nExplanation: Follow path directly with 0 cost.\n```",
    "difficulty": "HARD",
    "category": "DSA",
    "patterns": [
      "Breadth-First Search",
      "Graph",
      "Heap / Priority Queue"
    ],
    "topics": [
      "Breadth-First Search",
      "Graph",
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
        "boilerplate": "def gridNavigationWithDirectionalTiles(*args):\n    # TODO: Implement solution for Grid Navigation with Directional Tiles\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = gridNavigationWithDirectionalTiles(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(gridNavigationWithDirectionalTiles(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function gridNavigationWithDirectionalTiles(...args) {\n    // TODO: Implement solution for Grid Navigation with Directional Tiles\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(gridNavigationWithDirectionalTiles(...parsed)));\n    } catch (e) {\n        console.log(gridNavigationWithDirectionalTiles(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Grid Navigation with Directional Tiles\n        string line;\n        while (getline(cin, line)) {\n            cout << line << endl;\n        }\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        String line;\n        while ((line = br.readLine()) != null) {\n            // TODO: Implement solution for Grid Navigation with Directional Tiles\n            System.out.println(line);\n        }\n    }\n}\n"
      }
    ],
    "sampleTestCases": [
      {
        "input": "[[1,1,1,1],[2,2,2,2],[1,1,1,1],[2,2,2,2]]",
        "output": "3",
        "explanation": "At most 3 modifications needed."
      },
      {
        "input": "[[1,1,3],[3,2,2],[1,1,4]]",
        "output": "0",
        "explanation": "Follow path directly with 0 cost."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "[[1,1,1,1],[2,2,2,2],[1,1,1,1],[2,2,2,2]]",
        "output": "3",
        "isHidden": true
      },
      {
        "input": "[[1,1,3],[3,2,2],[1,1,4]]",
        "output": "0",
        "isHidden": true
      },
      {
        "input": "[[1,2],[4,3]]",
        "output": "1",
        "isHidden": true
      }
    ],
    "hints": [
      "Model as 0-1 BFS or Dijkstra where moving in existing direction costs 0, changing direction costs 1."
    ],
    "editorial": {
      "approach": "Optimal Approach for Grid Navigation with Directional Tiles",
      "solutionMarkdown": "### Optimal Solution\n\nUse 0-1 BFS with deque. If neighbor matches cell direction, push front with weight 0, else push back with weight 1.\n\n### Complexity\n- Time: O(M*N), Space: O(M*N)",
      "timeComplexity": "O(M*N)",
      "spaceComplexity": "O(M*N)"
    },
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0
  },
  {
    "title": "Group Anagrams",
    "slug": "group-anagrams",
    "description": "Given an array of strings `strs`, group **the anagrams** together. You can return the answer in **any order**.\n\n### Example 1:\n```\nInput: [\"eat\",\"tea\",\"tan\",\"ate\",\"nat\",\"bat\"]\nOutput: [[\"bat\"], [\"nat\", \"tan\"], [\"ate\", \"eat\", \"tea\"]]\nExplanation: Words with identical character counts are grouped together.\n```\n\n### Example 2:\n```\nInput: [\"\"]\nOutput: [[\"\"]]\nExplanation: Single empty string.\n```",
    "difficulty": "MEDIUM",
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
        "boilerplate": "def groupAnagrams(*args):\n    # TODO: Implement solution for Group Anagrams\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = groupAnagrams(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(groupAnagrams(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function groupAnagrams(...args) {\n    // TODO: Implement solution for Group Anagrams\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(groupAnagrams(...parsed)));\n    } catch (e) {\n        console.log(groupAnagrams(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Group Anagrams\n        string line;\n        while (getline(cin, line)) {\n            cout << line << endl;\n        }\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        String line;\n        while ((line = br.readLine()) != null) {\n            // TODO: Implement solution for Group Anagrams\n            System.out.println(line);\n        }\n    }\n}\n"
      }
    ],
    "sampleTestCases": [
      {
        "input": "[\"eat\",\"tea\",\"tan\",\"ate\",\"nat\",\"bat\"]",
        "output": "[[\"bat\"], [\"nat\", \"tan\"], [\"ate\", \"eat\", \"tea\"]]",
        "explanation": "Words with identical character counts are grouped together."
      },
      {
        "input": "[\"\"]",
        "output": "[[\"\"]]",
        "explanation": "Single empty string."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "[\"eat\",\"tea\",\"tan\",\"ate\",\"nat\",\"bat\"]",
        "output": "[[\"bat\"], [\"nat\", \"tan\"], [\"ate\", \"eat\", \"tea\"]]",
        "isHidden": true
      },
      {
        "input": "[\"\"]",
        "output": "[[\"\"]]",
        "isHidden": true
      },
      {
        "input": "[\"a\"]",
        "output": "[[\"a\"]]",
        "isHidden": true
      }
    ],
    "hints": [
      "Use sorted string or 26-element character count tuple as map key."
    ],
    "editorial": {
      "approach": "Optimal Approach for Group Anagrams",
      "solutionMarkdown": "### Optimal Solution\n\nHash each word by sorted letters or count array. Return values of map.\n\n### Complexity\n- Time: O(N * K log K) or O(N * K), Space: O(N * K)",
      "timeComplexity": "O(N * K log K) or O(N * K)",
      "spaceComplexity": "O(N * K)"
    },
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0
  },
  {
    "title": "Group Shifted Strings",
    "slug": "group-shifted-strings",
    "description": "Given an array of strings `strings`, group all strings that belong to the same shifting sequence. You may return the answer in **any order**.\n\n### Example 1:\n```\nInput: [\"abc\",\"bcd\",\"acef\",\"xyz\",\"az\",\"ba\",\"a\",\"z\"]\nOutput: [[\"acef\"],[\"a\",\"z\"],[\"abc\",\"bcd\",\"xyz\"],[\"az\",\"ba\"]]\nExplanation: Strings with identical rotational differences between consecutive letters group together.\n```\n\n### Example 2:\n```\nInput: [\"a\"]\nOutput: [[\"a\"]]\nExplanation: Single character.\n```",
    "difficulty": "MEDIUM",
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
        "boilerplate": "def groupShiftedStrings(*args):\n    # TODO: Implement solution for Group Shifted Strings\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = groupShiftedStrings(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(groupShiftedStrings(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function groupShiftedStrings(...args) {\n    // TODO: Implement solution for Group Shifted Strings\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(groupShiftedStrings(...parsed)));\n    } catch (e) {\n        console.log(groupShiftedStrings(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Group Shifted Strings\n        string line;\n        while (getline(cin, line)) {\n            cout << line << endl;\n        }\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        String line;\n        while ((line = br.readLine()) != null) {\n            // TODO: Implement solution for Group Shifted Strings\n            System.out.println(line);\n        }\n    }\n}\n"
      }
    ],
    "sampleTestCases": [
      {
        "input": "[\"abc\",\"bcd\",\"acef\",\"xyz\",\"az\",\"ba\",\"a\",\"z\"]",
        "output": "[[\"acef\"],[\"a\",\"z\"],[\"abc\",\"bcd\",\"xyz\"],[\"az\",\"ba\"]]",
        "explanation": "Strings with identical rotational differences between consecutive letters group together."
      },
      {
        "input": "[\"a\"]",
        "output": "[[\"a\"]]",
        "explanation": "Single character."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "[\"abc\",\"bcd\",\"acef\",\"xyz\",\"az\",\"ba\",\"a\",\"z\"]",
        "output": "[[\"acef\"],[\"a\",\"z\"],[\"abc\",\"bcd\",\"xyz\"],[\"az\",\"ba\"]]\n",
        "isHidden": true
      },
      {
        "input": "[\"a\"]",
        "output": "[[\"a\"]]",
        "isHidden": true
      },
      {
        "input": "[\"ab\",\"ba\"]",
        "output": "[[\"ab\"],[\"ba\"]]",
        "isHidden": true
      }
    ],
    "hints": [
      "Generate a normalized key for each string using circular differences: (s[i] - s[i-1]) % 26."
    ],
    "editorial": {
      "approach": "Optimal Approach for Group Shifted Strings",
      "solutionMarkdown": "### Optimal Solution\n\nCreate tuple key of pairwise differences modulo 26. Store in dictionary and collect values.\n\n### Complexity\n- Time: O(Total chars), Space: O(Total chars)",
      "timeComplexity": "O(Total chars)",
      "spaceComplexity": "O(Total chars)"
    },
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0
  },
  {
    "title": "House Robber",
    "slug": "house-robber",
    "description": "You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security systems connected.\n\nReturn the maximum amount of money you can rob tonight without alerting the police.\n\n### Example 1:\n```\nInput: [1,2,3,1]\nOutput: 4\nExplanation: Rob house 1 (money = 1) and house 3 (money = 3), total = 4.\n```\n\n### Example 2:\n```\nInput: [2,7,9,3,1]\nOutput: 12\nExplanation: Rob house 1 (2), house 3 (9) and house 5 (1), total = 12.\n```",
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
        "boilerplate": "def houseRobber(*args):\n    # TODO: Implement solution for House Robber\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = houseRobber(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(houseRobber(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function houseRobber(...args) {\n    // TODO: Implement solution for House Robber\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(houseRobber(...parsed)));\n    } catch (e) {\n        console.log(houseRobber(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for House Robber\n        string line;\n        while (getline(cin, line)) {\n            cout << line << endl;\n        }\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        String line;\n        while ((line = br.readLine()) != null) {\n            // TODO: Implement solution for House Robber\n            System.out.println(line);\n        }\n    }\n}\n"
      }
    ],
    "sampleTestCases": [
      {
        "input": "[1,2,3,1]",
        "output": "4",
        "explanation": "Rob house 1 (money = 1) and house 3 (money = 3), total = 4."
      },
      {
        "input": "[2,7,9,3,1]",
        "output": "12",
        "explanation": "Rob house 1 (2), house 3 (9) and house 5 (1), total = 12."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "[1,2,3,1]",
        "output": "4",
        "isHidden": true
      },
      {
        "input": "[2,7,9,3,1]",
        "output": "12",
        "isHidden": true
      },
      {
        "input": "[0]",
        "output": "0",
        "isHidden": true
      },
      {
        "input": "[2,1,1,2]",
        "output": "4",
        "isHidden": true
      }
    ],
    "hints": [
      "dp[i] = max(dp[i-1], dp[i-2] + nums[i])."
    ],
    "editorial": {
      "approach": "Optimal Approach for House Robber",
      "solutionMarkdown": "### Optimal Solution\n\nTwo variables rob1, rob2 tracking max loot without robbing adjacent houses.\n\n### Complexity\n- Time: O(N), Space: O(1)",
      "timeComplexity": "O(N)",
      "spaceComplexity": "O(1)"
    },
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0
  },
  {
    "title": "House Robber II",
    "slug": "house-robber-ii",
    "description": "All houses at this place are arranged in a circle. That means the first house is the neighbor of the last one. Return the maximum amount of money you can rob tonight without alerting the police.\n\n### Example 1:\n```\nInput: [2,3,2]\nOutput: 3\nExplanation: You cannot rob house 1 (2) and house 3 (2) because they are neighbors.\n```\n\n### Example 2:\n```\nInput: [1,2,3,1]\nOutput: 4\nExplanation: Rob house 1 (1) and house 3 (3), total = 4.\n```",
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
        "boilerplate": "def houseRobberIi(*args):\n    # TODO: Implement solution for House Robber II\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = houseRobberIi(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(houseRobberIi(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function houseRobberIi(...args) {\n    // TODO: Implement solution for House Robber II\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(houseRobberIi(...parsed)));\n    } catch (e) {\n        console.log(houseRobberIi(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for House Robber II\n        string line;\n        while (getline(cin, line)) {\n            cout << line << endl;\n        }\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        String line;\n        while ((line = br.readLine()) != null) {\n            // TODO: Implement solution for House Robber II\n            System.out.println(line);\n        }\n    }\n}\n"
      }
    ],
    "sampleTestCases": [
      {
        "input": "[2,3,2]",
        "output": "3",
        "explanation": "You cannot rob house 1 (2) and house 3 (2) because they are neighbors."
      },
      {
        "input": "[1,2,3,1]",
        "output": "4",
        "explanation": "Rob house 1 (1) and house 3 (3), total = 4."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "[2,3,2]",
        "output": "3",
        "isHidden": true
      },
      {
        "input": "[1,2,3,1]",
        "output": "4",
        "isHidden": true
      },
      {
        "input": "[1,2,3]",
        "output": "3",
        "isHidden": true
      }
    ],
    "hints": [
      "Max of robbing nums[0:n-1] or nums[1:n]."
    ],
    "editorial": {
      "approach": "Optimal Approach for House Robber II",
      "solutionMarkdown": "### Optimal Solution\n\nDecompose circular array into two linear subproblems: excluding first house or excluding last house.\n\n### Complexity\n- Time: O(N), Space: O(1)",
      "timeComplexity": "O(N)",
      "spaceComplexity": "O(1)"
    },
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0
  },
  {
    "title": "Implement a Queue",
    "slug": "implement-a-queue",
    "description": "Implement a FIFO queue supporting `enqueue(x)`, `dequeue()`, `peek()`, and `isEmpty()` operations with O(1) time complexity.\n\n### Example 1:\n```\nInput: [\"Queue\",\"push\",\"push\",\"peek\",\"pop\",\"empty\"]\n[[],[1],[2],[],[],[]]\nOutput: [null,null,null,1,1,false]\nExplanation: Queue operations executed in FIFO order.\n```\n\n### Example 2:\n```\nInput: [\"Queue\",\"push\",\"pop\",\"empty\"]\n[[],[5],[],[]]\nOutput: [null,null,5,true]\nExplanation: Queue becomes empty after popping the only element.\n```",
    "difficulty": "EASY",
    "category": "DSA",
    "patterns": [
      "Queue",
      "Design",
      "Array"
    ],
    "topics": [
      "Queue",
      "Design",
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
        "boilerplate": "def implementAQueue(*args):\n    # TODO: Implement solution for Implement a Queue\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = implementAQueue(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(implementAQueue(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function implementAQueue(...args) {\n    // TODO: Implement solution for Implement a Queue\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(implementAQueue(...parsed)));\n    } catch (e) {\n        console.log(implementAQueue(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Implement a Queue\n        string line;\n        while (getline(cin, line)) {\n            cout << line << endl;\n        }\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        String line;\n        while ((line = br.readLine()) != null) {\n            // TODO: Implement solution for Implement a Queue\n            System.out.println(line);\n        }\n    }\n}\n"
      }
    ],
    "sampleTestCases": [
      {
        "input": "[\"Queue\",\"push\",\"push\",\"peek\",\"pop\",\"empty\"]\n[[],[1],[2],[],[],[]]",
        "output": "[null,null,null,1,1,false]",
        "explanation": "Queue operations executed in FIFO order."
      },
      {
        "input": "[\"Queue\",\"push\",\"pop\",\"empty\"]\n[[],[5],[],[]]",
        "output": "[null,null,5,true]",
        "explanation": "Queue becomes empty after popping the only element."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "[\"Queue\",\"push\",\"push\",\"peek\",\"pop\",\"empty\"]\n[[],[1],[2],[],[],[]]",
        "output": "[null,null,null,1,1,false]",
        "isHidden": true
      },
      {
        "input": "[\"Queue\",\"push\",\"pop\",\"empty\"]\n[[],[5],[],[]]",
        "output": "[null,null,5,true]",
        "isHidden": true
      },
      {
        "input": "[\"Queue\",\"empty\"]\n[[]]",
        "output": "[true]",
        "isHidden": true
      }
    ],
    "hints": [
      "Use a dynamic array or doubly linked list with head and tail pointers."
    ],
    "editorial": {
      "approach": "Optimal Approach for Implement a Queue",
      "solutionMarkdown": "### Optimal Solution\n\nMaintain head and tail index pointers on an underlying array or linked list.\n\n### Complexity\n- Time: O(1) per operation, Space: O(N)",
      "timeComplexity": "O(1) per operation",
      "spaceComplexity": "O(N)"
    },
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0
  },
  {
    "title": "Implement Stack using Queues",
    "slug": "implement-stack-using-queues",
    "description": "Implement a last-in-first-out (LIFO) stack using only two queues. The implemented stack should support `push`, `top`, `pop`, and `empty`.\n\n### Example 1:\n```\nInput: [\"MyStack\",\"push\",\"push\",\"top\",\"pop\",\"empty\"]\n[[],[1],[2],[],[],[]]\nOutput: [null,null,null,2,2,false]\nExplanation: LIFO behavior maintained.\n```\n\n### Example 2:\n```\nInput: [\"MyStack\",\"push\",\"empty\"]\n[[],[1],[]]\nOutput: [null,null,false]\nExplanation: Stack has one element.\n```",
    "difficulty": "EASY",
    "category": "DSA",
    "patterns": [
      "Stack",
      "Queue",
      "Design"
    ],
    "topics": [
      "Stack",
      "Queue",
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
        "boilerplate": "def implementStackUsingQueues(*args):\n    # TODO: Implement solution for Implement Stack using Queues\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = implementStackUsingQueues(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(implementStackUsingQueues(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function implementStackUsingQueues(...args) {\n    // TODO: Implement solution for Implement Stack using Queues\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(implementStackUsingQueues(...parsed)));\n    } catch (e) {\n        console.log(implementStackUsingQueues(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Implement Stack using Queues\n        string line;\n        while (getline(cin, line)) {\n            cout << line << endl;\n        }\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        String line;\n        while ((line = br.readLine()) != null) {\n            // TODO: Implement solution for Implement Stack using Queues\n            System.out.println(line);\n        }\n    }\n}\n"
      }
    ],
    "sampleTestCases": [
      {
        "input": "[\"MyStack\",\"push\",\"push\",\"top\",\"pop\",\"empty\"]\n[[],[1],[2],[],[],[]]",
        "output": "[null,null,null,2,2,false]",
        "explanation": "LIFO behavior maintained."
      },
      {
        "input": "[\"MyStack\",\"push\",\"empty\"]\n[[],[1],[]]",
        "output": "[null,null,false]",
        "explanation": "Stack has one element."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "[\"MyStack\",\"push\",\"push\",\"top\",\"pop\",\"empty\"]\n[[],[1],[2],[],[],[]]",
        "output": "[null,null,null,2,2,false]",
        "isHidden": true
      },
      {
        "input": "[\"MyStack\",\"push\",\"empty\"]\n[[],[1],[]]",
        "output": "[null,null,false]",
        "isHidden": true
      },
      {
        "input": "[\"MyStack\",\"empty\"]\n[[]]",
        "output": "[true]",
        "isHidden": true
      }
    ],
    "hints": [
      "On push, add the element and rotate the queue len-1 times so newly added element is in front."
    ],
    "editorial": {
      "approach": "Optimal Approach for Implement Stack using Queues",
      "solutionMarkdown": "### Optimal Solution\n\nSingle queue approach: enqueue element, then rotate existing elements behind it.\n\n### Complexity\n- Time: Push O(N), Pop/Top O(1), Space: O(N)",
      "timeComplexity": "Push O(N)",
      "spaceComplexity": "Pop/Top O(1)"
    },
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0
  },
  {
    "title": "Implement Trie (Prefix Tree)",
    "slug": "implement-trie",
    "description": "A **trie** (pronounced as 'try') or **prefix tree** is a tree data structure used to efficiently store and retrieve keys in a dataset of strings. Implement the `Trie` class with `insert`, `search`, and `startsWith` methods.\n\n### Example 1:\n```\nInput: [\"Trie\",\"insert\",\"search\",\"search\",\"startsWith\",\"insert\",\"search\"]\n[[],[\"apple\"],[\"apple\"],[\"app\"],[\"app\"],[\"app\"],[\"app\"]]\nOutput: [null,null,true,false,true,null,true]\nExplanation: Search and prefix lookup in Trie.\n```\n\n### Example 2:\n```\nInput: [\"Trie\",\"insert\",\"search\"]\n[[],[\"hello\"],[\"hell\"]]\nOutput: [null,null,false]\nExplanation: Prefix exists but not complete word.\n```",
    "difficulty": "MEDIUM",
    "category": "DSA",
    "patterns": [
      "Trie",
      "Design",
      "String",
      "Hash Table"
    ],
    "topics": [
      "Trie",
      "Design",
      "String",
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
        "boilerplate": "def implementTrie(*args):\n    # TODO: Implement solution for Implement Trie (Prefix Tree)\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = implementTrie(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(implementTrie(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function implementTrie(...args) {\n    // TODO: Implement solution for Implement Trie (Prefix Tree)\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(implementTrie(...parsed)));\n    } catch (e) {\n        console.log(implementTrie(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Implement Trie (Prefix Tree)\n        string line;\n        while (getline(cin, line)) {\n            cout << line << endl;\n        }\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        String line;\n        while ((line = br.readLine()) != null) {\n            // TODO: Implement solution for Implement Trie (Prefix Tree)\n            System.out.println(line);\n        }\n    }\n}\n"
      }
    ],
    "sampleTestCases": [
      {
        "input": "[\"Trie\",\"insert\",\"search\",\"search\",\"startsWith\",\"insert\",\"search\"]\n[[],[\"apple\"],[\"apple\"],[\"app\"],[\"app\"],[\"app\"],[\"app\"]]",
        "output": "[null,null,true,false,true,null,true]",
        "explanation": "Search and prefix lookup in Trie."
      },
      {
        "input": "[\"Trie\",\"insert\",\"search\"]\n[[],[\"hello\"],[\"hell\"]]",
        "output": "[null,null,false]",
        "explanation": "Prefix exists but not complete word."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "[\"Trie\",\"insert\",\"search\",\"search\",\"startsWith\",\"insert\",\"search\"]\n[[],[\"apple\"],[\"apple\"],[\"app\"],[\"app\"],[\"app\"],[\"app\"]]",
        "output": "[null,null,true,false,true,null,true]",
        "isHidden": true
      },
      {
        "input": "[\"Trie\",\"insert\",\"search\"]\n[[],[\"hello\"],[\"hell\"]]",
        "output": "[null,null,false]",
        "isHidden": true
      },
      {
        "input": "[\"Trie\",\"startsWith\"]\n[[],[\"a\"]]",
        "output": "[false]",
        "isHidden": true
      }
    ],
    "hints": [
      "Each TrieNode has children array/map and an isEndOfWord boolean flag."
    ],
    "editorial": {
      "approach": "Optimal Approach for Implement Trie (Prefix Tree)",
      "solutionMarkdown": "### Optimal Solution\n\nTraverse tree character by character. Mark end-of-word when inserting.\n\n### Complexity\n- Time: O(L) per operation, Space: O(Total characters * 26)",
      "timeComplexity": "O(L) per operation",
      "spaceComplexity": "O(Total characters * 26)"
    },
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0
  },
  {
    "title": "Implement Trie (Prefix Tree)",
    "slug": "implement-trie-prefix-tree",
    "description": "A **trie** (pronounced as \"try\") or **prefix tree** is a tree data structure used to efficiently store and retrieve keys in a dataset of strings. Implement the `Trie` class with `insert`, `search`, and `startsWith`.\n\n### Example 1:\n```\nInput: [\"Trie\",\"insert\",\"search\",\"search\",\"startsWith\",\"insert\",\"search\"]\n[[],[\"apple\"],[\"apple\"],[\"app\"],[\"app\"],[\"app\"],[\"app\"]]\nOutput: [null, null, true, false, true, null, true]\nExplanation: Prefix tree correctly verifies words and prefixes.\n```\n\n### Example 2:\n```\nInput: [\"Trie\",\"search\"]\n[[],[\"a\"]]\nOutput: [null, false]\nExplanation: Search in empty trie.\n```",
    "difficulty": "MEDIUM",
    "category": "DSA",
    "patterns": [
      "Trie",
      "Design",
      "String"
    ],
    "topics": [
      "Trie",
      "Design",
      "String"
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
        "boilerplate": "def implementTriePrefixTree(*args):\n    # TODO: Implement solution for Implement Trie (Prefix Tree)\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = implementTriePrefixTree(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(implementTriePrefixTree(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function implementTriePrefixTree(...args) {\n    // TODO: Implement solution for Implement Trie (Prefix Tree)\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(implementTriePrefixTree(...parsed)));\n    } catch (e) {\n        console.log(implementTriePrefixTree(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Implement Trie (Prefix Tree)\n        string line;\n        while (getline(cin, line)) {\n            cout << line << endl;\n        }\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        String line;\n        while ((line = br.readLine()) != null) {\n            // TODO: Implement solution for Implement Trie (Prefix Tree)\n            System.out.println(line);\n        }\n    }\n}\n"
      }
    ],
    "sampleTestCases": [
      {
        "input": "[\"Trie\",\"insert\",\"search\",\"search\",\"startsWith\",\"insert\",\"search\"]\n[[],[\"apple\"],[\"apple\"],[\"app\"],[\"app\"],[\"app\"],[\"app\"]]",
        "output": "[null, null, true, false, true, null, true]",
        "explanation": "Prefix tree correctly verifies words and prefixes."
      },
      {
        "input": "[\"Trie\",\"search\"]\n[[],[\"a\"]]",
        "output": "[null, false]",
        "explanation": "Search in empty trie."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "[\"Trie\",\"insert\",\"search\",\"search\",\"startsWith\",\"insert\",\"search\"]\n[[],[\"apple\"],[\"apple\"],[\"app\"],[\"app\"],[\"app\"],[\"app\"]]",
        "output": "[null, null, true, false, true, null, true]",
        "isHidden": true
      }
    ],
    "hints": [
      "Each TrieNode contains a dictionary or 26-size array of child nodes and an isEnd boolean."
    ],
    "editorial": {
      "approach": "Optimal Approach for Implement Trie (Prefix Tree)",
      "solutionMarkdown": "### Optimal Solution\n\nTrie nodes store child maps and word termination flags. All three operations run in O(L).\n\n### Complexity\n- Time: O(L) where L is string length, Space: O(N * L * Alphabet)",
      "timeComplexity": "O(L) where L is string length",
      "spaceComplexity": "O(N * L * Alphabet)"
    },
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0
  },
  {
    "title": "Insert Delete GetRandom O(1)",
    "slug": "insert-delete-getrandom-o1",
    "description": "Implement the `RandomizedSet` class: `insert(val)`, `remove(val)`, and `getRandom()` each executing with average `O(1)` time complexity.\n\n### Example 1:\n```\nInput: [\"RandomizedSet\",\"insert\",\"remove\",\"insert\",\"getRandom\",\"remove\",\"insert\",\"getRandom\"]\n[[],[1],[2],[2],[],[1],[2],[]]\nOutput: [null, true, false, true, 2, true, false, 2]\nExplanation: Elements inserted, removed in O(1) with uniform random access.\n```\n\n### Example 2:\n```\nInput: [\"RandomizedSet\",\"insert\",\"getRandom\"]\n[[],[10],[]]\nOutput: [null, true, 10]\nExplanation: Single item.\n```",
    "difficulty": "MEDIUM",
    "category": "DSA",
    "patterns": [
      "Hash Table",
      "Array",
      "Design"
    ],
    "topics": [
      "Hash Table",
      "Array",
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
        "boilerplate": "def insertDeleteGetrandomO1(*args):\n    # TODO: Implement solution for Insert Delete GetRandom O(1)\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = insertDeleteGetrandomO1(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(insertDeleteGetrandomO1(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function insertDeleteGetrandomO1(...args) {\n    // TODO: Implement solution for Insert Delete GetRandom O(1)\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(insertDeleteGetrandomO1(...parsed)));\n    } catch (e) {\n        console.log(insertDeleteGetrandomO1(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Insert Delete GetRandom O(1)\n        string line;\n        while (getline(cin, line)) {\n            cout << line << endl;\n        }\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        String line;\n        while ((line = br.readLine()) != null) {\n            // TODO: Implement solution for Insert Delete GetRandom O(1)\n            System.out.println(line);\n        }\n    }\n}\n"
      }
    ],
    "sampleTestCases": [
      {
        "input": "[\"RandomizedSet\",\"insert\",\"remove\",\"insert\",\"getRandom\",\"remove\",\"insert\",\"getRandom\"]\n[[],[1],[2],[2],[],[1],[2],[]]",
        "output": "[null, true, false, true, 2, true, false, 2]",
        "explanation": "Elements inserted, removed in O(1) with uniform random access."
      },
      {
        "input": "[\"RandomizedSet\",\"insert\",\"getRandom\"]\n[[],[10],[]]",
        "output": "[null, true, 10]",
        "explanation": "Single item."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "[\"RandomizedSet\",\"insert\",\"remove\",\"insert\",\"getRandom\",\"remove\",\"insert\",\"getRandom\"]\n[[],[1],[2],[2],[],[1],[2],[]]",
        "output": "[null, true, false, true, 2, true, false, 2]",
        "isHidden": true
      }
    ],
    "hints": [
      "Use a dynamic array (list) for O(1) random index access and a hash map {val: index} for O(1) lookups. In remove, swap with last element."
    ],
    "editorial": {
      "approach": "Optimal Approach for Insert Delete GetRandom O(1)",
      "solutionMarkdown": "### Optimal Solution\n\nArray + Hash Map. Removal swaps target element with last element, pops array, and updates index map.\n\n### Complexity\n- Time: O(1) average for all operations, Space: O(N)",
      "timeComplexity": "O(1) average for all operations",
      "spaceComplexity": "O(N)"
    },
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0
  },
  {
    "title": "Insert Interval",
    "slug": "insert-interval",
    "description": "You are given an array of non-overlapping intervals `intervals` sorted by `starti` and `newInterval = [start, end]`. Insert `newInterval` into `intervals` such that `intervals` is still sorted and non-overlapping (merge overlapping intervals).\n\n### Example 1:\n```\nInput: [[1,3],[6,9]]\n[2,5]\nOutput: [[1, 5], [6, 9]]\nExplanation: [2,5] merges with [1,3] into [1,5].\n```\n\n### Example 2:\n```\nInput: [[1,2],[3,5],[6,7],[8,10],[12,16]]\n[4,8]\nOutput: [[1, 2], [3, 10], [12, 16]]\nExplanation: Merges multiple intervals.\n```",
    "difficulty": "MEDIUM",
    "category": "DSA",
    "patterns": [
      "Intervals",
      "Array"
    ],
    "topics": [
      "Intervals",
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
        "boilerplate": "def insertInterval(*args):\n    # TODO: Implement solution for Insert Interval\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = insertInterval(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(insertInterval(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function insertInterval(...args) {\n    // TODO: Implement solution for Insert Interval\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(insertInterval(...parsed)));\n    } catch (e) {\n        console.log(insertInterval(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Insert Interval\n        string line;\n        while (getline(cin, line)) {\n            cout << line << endl;\n        }\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        String line;\n        while ((line = br.readLine()) != null) {\n            // TODO: Implement solution for Insert Interval\n            System.out.println(line);\n        }\n    }\n}\n"
      }
    ],
    "sampleTestCases": [
      {
        "input": "[[1,3],[6,9]]\n[2,5]",
        "output": "[[1, 5], [6, 9]]",
        "explanation": "[2,5] merges with [1,3] into [1,5]."
      },
      {
        "input": "[[1,2],[3,5],[6,7],[8,10],[12,16]]\n[4,8]",
        "output": "[[1, 2], [3, 10], [12, 16]]",
        "explanation": "Merges multiple intervals."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "[[1,3],[6,9]]\n[2,5]",
        "output": "[[1, 5], [6, 9]]",
        "isHidden": true
      },
      {
        "input": "[[1,2],[3,5],[6,7],[8,10],[12,16]]\n[4,8]",
        "output": "[[1, 2], [3, 10], [12, 16]]",
        "isHidden": true
      },
      {
        "input": "[]\n[5,7]",
        "output": "[[5, 7]]",
        "isHidden": true
      }
    ],
    "hints": [
      "Three phases: 1. Add all intervals ending before newInterval. 2. Merge overlapping intervals. 3. Add remaining."
    ],
    "editorial": {
      "approach": "Optimal Approach for Insert Interval",
      "solutionMarkdown": "### Optimal Solution\n\nLinear scan partitioning into left disjoint, overlapping merge, and right disjoint sections.\n\n### Complexity\n- Time: O(N), Space: O(N)",
      "timeComplexity": "O(N)",
      "spaceComplexity": "O(N)"
    },
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0
  },
  {
    "title": "Insertion Sort List",
    "slug": "insertion-sort-list",
    "description": "Given the `head` of a singly linked list, sort the list using **insertion sort**, and return *the sorted list's head*.\n\n### Example 1:\n```\nInput: [4,2,1,3]\nOutput: [1,2,3,4]\nExplanation: Nodes rearranged in ascending order.\n```\n\n### Example 2:\n```\nInput: [-1,5,3,4,0]\nOutput: [-1,0,3,4,5]\nExplanation: Sorted list.\n```",
    "difficulty": "MEDIUM",
    "category": "DSA",
    "patterns": [
      "Linked List",
      "Sorting"
    ],
    "topics": [
      "Linked List",
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
        "boilerplate": "def insertionSortList(*args):\n    # TODO: Implement solution for Insertion Sort List\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = insertionSortList(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(insertionSortList(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function insertionSortList(...args) {\n    // TODO: Implement solution for Insertion Sort List\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(insertionSortList(...parsed)));\n    } catch (e) {\n        console.log(insertionSortList(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Insertion Sort List\n        string line;\n        while (getline(cin, line)) {\n            cout << line << endl;\n        }\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        String line;\n        while ((line = br.readLine()) != null) {\n            // TODO: Implement solution for Insertion Sort List\n            System.out.println(line);\n        }\n    }\n}\n"
      }
    ],
    "sampleTestCases": [
      {
        "input": "[4,2,1,3]",
        "output": "[1,2,3,4]",
        "explanation": "Nodes rearranged in ascending order."
      },
      {
        "input": "[-1,5,3,4,0]",
        "output": "[-1,0,3,4,5]",
        "explanation": "Sorted list."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "[4,2,1,3]",
        "output": "[1,2,3,4]",
        "isHidden": true
      },
      {
        "input": "[-1,5,3,4,0]",
        "output": "[-1,0,3,4,5]",
        "isHidden": true
      },
      {
        "input": "[1]",
        "output": "[1]",
        "isHidden": true
      }
    ],
    "hints": [
      "Maintain a dummy node before head and insert current element into sorted prefix."
    ],
    "editorial": {
      "approach": "Optimal Approach for Insertion Sort List",
      "solutionMarkdown": "### Optimal Solution\n\nIterate list with pointer. Find insertion slot from dummy, splice node into place.\n\n### Complexity\n- Time: O(N^2), Space: O(1)",
      "timeComplexity": "O(N^2)",
      "spaceComplexity": "O(1)"
    },
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0
  },
  {
    "title": "Integer to Roman",
    "slug": "integer-to-roman",
    "description": "Seven different symbols represent Roman numerals. Given an integer `num`, convert it to a **Roman numeral** string.\n\n### Example 1:\n```\nInput: 3749\nOutput: \"MMMDCCXLIX\"\nExplanation: 3000 = MMM, 700 = DCC, 40 = XL, 9 = IX.\n```\n\n### Example 2:\n```\nInput: 58\nOutput: \"LVIII\"\nExplanation: 50 = L, 8 = VIII.\n```",
    "difficulty": "MEDIUM",
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
        "boilerplate": "def integerToRoman(*args):\n    # TODO: Implement solution for Integer to Roman\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = integerToRoman(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(integerToRoman(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function integerToRoman(...args) {\n    // TODO: Implement solution for Integer to Roman\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(integerToRoman(...parsed)));\n    } catch (e) {\n        console.log(integerToRoman(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Integer to Roman\n        string line;\n        while (getline(cin, line)) {\n            cout << line << endl;\n        }\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        String line;\n        while ((line = br.readLine()) != null) {\n            // TODO: Implement solution for Integer to Roman\n            System.out.println(line);\n        }\n    }\n}\n"
      }
    ],
    "sampleTestCases": [
      {
        "input": "3749",
        "output": "\"MMMDCCXLIX\"",
        "explanation": "3000 = MMM, 700 = DCC, 40 = XL, 9 = IX."
      },
      {
        "input": "58",
        "output": "\"LVIII\"",
        "explanation": "50 = L, 8 = VIII."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "3749",
        "output": "\"MMMDCCXLIX\"",
        "isHidden": true
      },
      {
        "input": "58",
        "output": "\"LVIII\"",
        "isHidden": true
      },
      {
        "input": "1994",
        "output": "\"MCMXCIV\"",
        "isHidden": true
      }
    ],
    "hints": [
      "Greedily subtract largest Roman numeral value possible from pre-mapped pairs table."
    ],
    "editorial": {
      "approach": "Optimal Approach for Integer to Roman",
      "solutionMarkdown": "### Optimal Solution\n\nStore values [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1] with corresponding Roman representations.\n\n### Complexity\n- Time: O(1) (fixed digits), Space: O(1)",
      "timeComplexity": "O(1) (fixed digits)",
      "spaceComplexity": "O(1)"
    },
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0
  },
  {
    "title": "Interleaving String",
    "slug": "interleaving-string",
    "description": "Given strings `s1`, `s2`, and `s3`, find whether `s3` is formed by an **interleaving** of `s1` and `s2`.\n\n### Example 1:\n```\nInput: aabcc\ndbbca\naadbbcbcac\nOutput: true\nExplanation: 'aabcc' and 'dbbca' interleave to form 'aadbbcbcac'.\n```\n\n### Example 2:\n```\nInput: aabcc\ndbbca\naadbbbaccc\nOutput: false\nExplanation: Characters cannot be interleaved in order.\n```",
    "difficulty": "MEDIUM",
    "category": "DP",
    "patterns": [
      "Dynamic Programming",
      "String"
    ],
    "topics": [
      "Dynamic Programming",
      "String"
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
        "boilerplate": "def interleavingString(*args):\n    # TODO: Implement solution for Interleaving String\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = interleavingString(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(interleavingString(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function interleavingString(...args) {\n    // TODO: Implement solution for Interleaving String\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(interleavingString(...parsed)));\n    } catch (e) {\n        console.log(interleavingString(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Interleaving String\n        string line;\n        while (getline(cin, line)) {\n            cout << line << endl;\n        }\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        String line;\n        while ((line = br.readLine()) != null) {\n            // TODO: Implement solution for Interleaving String\n            System.out.println(line);\n        }\n    }\n}\n"
      }
    ],
    "sampleTestCases": [
      {
        "input": "aabcc\ndbbca\naadbbcbcac",
        "output": "true",
        "explanation": "'aabcc' and 'dbbca' interleave to form 'aadbbcbcac'."
      },
      {
        "input": "aabcc\ndbbca\naadbbbaccc",
        "output": "false",
        "explanation": "Characters cannot be interleaved in order."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "aabcc\ndbbca\naadbbcbcac",
        "output": "true",
        "isHidden": true
      },
      {
        "input": "aabcc\ndbbca\naadbbbaccc",
        "output": "false",
        "isHidden": true
      },
      {
        "input": "\n\n",
        "output": "true",
        "isHidden": true
      }
    ],
    "hints": [
      "dp[i][j] = (dp[i-1][j] and s1[i-1] == s3[i+j-1]) or (dp[i][j-1] and s2[j-1] == s3[i+j-1])."
    ],
    "editorial": {
      "approach": "Optimal Approach for Interleaving String",
      "solutionMarkdown": "### Optimal Solution\n\n2D grid state tracking valid character matching prefixes from s1 and s2.\n\n### Complexity\n- Time: O(M * N), Space: O(min(M, N))",
      "timeComplexity": "O(M * N)",
      "spaceComplexity": "O(min(M"
    },
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0
  },
  {
    "title": "Invert Binary Tree",
    "slug": "invert-binary-tree",
    "description": "Given the `root` of a binary tree, invert the tree, and return *its root*.\n\n### Example 1:\n```\nInput: [4,2,7,1,3,6,9]\nOutput: [4, 7, 2, 9, 6, 3, 1]\nExplanation: Binary tree mirrored horizontally.\n```\n\n### Example 2:\n```\nInput: [2,1,3]\nOutput: [2, 3, 1]\nExplanation: Inverted tree.\n```",
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
        "boilerplate": "def invertBinaryTree(*args):\n    # TODO: Implement solution for Invert Binary Tree\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = invertBinaryTree(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(invertBinaryTree(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function invertBinaryTree(...args) {\n    // TODO: Implement solution for Invert Binary Tree\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(invertBinaryTree(...parsed)));\n    } catch (e) {\n        console.log(invertBinaryTree(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Invert Binary Tree\n        string line;\n        while (getline(cin, line)) {\n            cout << line << endl;\n        }\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        String line;\n        while ((line = br.readLine()) != null) {\n            // TODO: Implement solution for Invert Binary Tree\n            System.out.println(line);\n        }\n    }\n}\n"
      }
    ],
    "sampleTestCases": [
      {
        "input": "[4,2,7,1,3,6,9]",
        "output": "[4, 7, 2, 9, 6, 3, 1]",
        "explanation": "Binary tree mirrored horizontally."
      },
      {
        "input": "[2,1,3]",
        "output": "[2, 3, 1]",
        "explanation": "Inverted tree."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "[4,2,7,1,3,6,9]",
        "output": "[4, 7, 2, 9, 6, 3, 1]",
        "isHidden": true
      },
      {
        "input": "[2,1,3]",
        "output": "[2, 3, 1]",
        "isHidden": true
      },
      {
        "input": "[]",
        "output": "[]",
        "isHidden": true
      }
    ],
    "hints": [
      "Swap root.left and root.right, then recursively invert left and right subtrees."
    ],
    "editorial": {
      "approach": "Optimal Approach for Invert Binary Tree",
      "solutionMarkdown": "### Optimal Solution\n\nPost-order or pre-order recursive swap of left and right pointers.\n\n### Complexity\n- Time: O(N), Space: O(H)",
      "timeComplexity": "O(N)",
      "spaceComplexity": "O(H)"
    },
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0
  },
  {
    "title": "Is Graph Bipartite?",
    "slug": "is-graph-bipartite",
    "description": "There is an **undirected** graph with `n` nodes. Return `true` if and only if it is **bipartite** (nodes can be partitioned into two independent sets A and B such that every edge connects a node in A and a node in B).\n\n### Example 1:\n```\nInput: [[1,2,3],[0,2],[0,1,3],[0,2]]\nOutput: false\nExplanation: Cannot divide nodes into 2 independent sets due to odd cycle.\n```\n\n### Example 2:\n```\nInput: [[1,3],[0,2],[1,3],[0,2]]\nOutput: true\nExplanation: Nodes can be partitioned into sets {0, 2} and {1, 3}.\n```",
    "difficulty": "MEDIUM",
    "category": "DSA",
    "patterns": [
      "Graph",
      "Depth-First Search",
      "Breadth-First Search",
      "Union Find"
    ],
    "topics": [
      "Graph",
      "Depth-First Search",
      "Breadth-First Search",
      "Union Find"
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
        "boilerplate": "def isGraphBipartite(*args):\n    # TODO: Implement solution for Is Graph Bipartite?\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = isGraphBipartite(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(isGraphBipartite(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function isGraphBipartite(...args) {\n    // TODO: Implement solution for Is Graph Bipartite?\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(isGraphBipartite(...parsed)));\n    } catch (e) {\n        console.log(isGraphBipartite(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Is Graph Bipartite?\n        string line;\n        while (getline(cin, line)) {\n            cout << line << endl;\n        }\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        String line;\n        while ((line = br.readLine()) != null) {\n            // TODO: Implement solution for Is Graph Bipartite?\n            System.out.println(line);\n        }\n    }\n}\n"
      }
    ],
    "sampleTestCases": [
      {
        "input": "[[1,2,3],[0,2],[0,1,3],[0,2]]",
        "output": "false",
        "explanation": "Cannot divide nodes into 2 independent sets due to odd cycle."
      },
      {
        "input": "[[1,3],[0,2],[1,3],[0,2]]",
        "output": "true",
        "explanation": "Nodes can be partitioned into sets {0, 2} and {1, 3}."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "[[1,2,3],[0,2],[0,1,3],[0,2]]",
        "output": "false",
        "isHidden": true
      },
      {
        "input": "[[1,3],[0,2],[1,3],[0,2]]",
        "output": "true",
        "isHidden": true
      },
      {
        "input": "[[]]",
        "output": "true",
        "isHidden": true
      }
    ],
    "hints": [
      "2-color the graph using BFS or DFS. If an adjacent neighbor already has the same color, return false."
    ],
    "editorial": {
      "approach": "Optimal Approach for Is Graph Bipartite?",
      "solutionMarkdown": "### Optimal Solution\n\nColor graph nodes with 0 and 1. If any edge connects two nodes of the same color, it is not bipartite.\n\n### Complexity\n- Time: O(V + E), Space: O(V)",
      "timeComplexity": "O(V + E)",
      "spaceComplexity": "O(V)"
    },
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0
  },
  {
    "title": "Isomorphic Strings",
    "slug": "isomorphic-strings",
    "description": "Given two strings `s` and `t`, determine if they are **isomorphic**. Two strings `s` and `t` are isomorphic if the characters in `s` can be replaced to get `t`.\n\n### Example 1:\n```\nInput: egg\nadd\nOutput: true\nExplanation: 'e' -> 'a', 'g' -> 'd'.\n```\n\n### Example 2:\n```\nInput: foo\nbar\nOutput: false\nExplanation: 'o' maps to both 'a' and 'r', which is invalid.\n```",
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
        "boilerplate": "def isomorphicStrings(*args):\n    # TODO: Implement solution for Isomorphic Strings\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = isomorphicStrings(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(isomorphicStrings(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function isomorphicStrings(...args) {\n    // TODO: Implement solution for Isomorphic Strings\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(isomorphicStrings(...parsed)));\n    } catch (e) {\n        console.log(isomorphicStrings(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Isomorphic Strings\n        string line;\n        while (getline(cin, line)) {\n            cout << line << endl;\n        }\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        String line;\n        while ((line = br.readLine()) != null) {\n            // TODO: Implement solution for Isomorphic Strings\n            System.out.println(line);\n        }\n    }\n}\n"
      }
    ],
    "sampleTestCases": [
      {
        "input": "egg\nadd",
        "output": "true",
        "explanation": "'e' -> 'a', 'g' -> 'd'."
      },
      {
        "input": "foo\nbar",
        "output": "false",
        "explanation": "'o' maps to both 'a' and 'r', which is invalid."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "egg\nadd",
        "output": "true",
        "isHidden": true
      },
      {
        "input": "foo\nbar",
        "output": "false",
        "isHidden": true
      },
      {
        "input": "paper\ntitle",
        "output": "true",
        "isHidden": true
      }
    ],
    "hints": [
      "Map each character from s to t and vice versa, or compare previous occurrence indices."
    ],
    "editorial": {
      "approach": "Optimal Approach for Isomorphic Strings",
      "solutionMarkdown": "### Optimal Solution\n\nUse two hash maps or arrays of size 256 tracking last seen positions of each char.\n\n### Complexity\n- Time: O(N), Space: O(1)",
      "timeComplexity": "O(N)",
      "spaceComplexity": "O(1)"
    },
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0
  },
  {
    "title": "Jump Game",
    "slug": "jump-game",
    "description": "You are given an integer array `nums`. You are initially positioned at the array's **first index**, and each element in the array represents your maximum jump length at that position.\n\nReturn `true` if you can reach the last index, or `false` otherwise.\n\n### Example 1:\n```\nInput: [2,3,1,1,4]\nOutput: true\nExplanation: Jump 1 step from index 0 to 1, then 3 steps to last index.\n```\n\n### Example 2:\n```\nInput: [3,2,1,0,4]\nOutput: false\nExplanation: Always arrive at index 3 with jump length 0.\n```",
    "difficulty": "MEDIUM",
    "category": "DSA",
    "patterns": [
      "Greedy",
      "Array",
      "Dynamic Programming"
    ],
    "topics": [
      "Greedy",
      "Array",
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
        "boilerplate": "def jumpGame(*args):\n    # TODO: Implement solution for Jump Game\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = jumpGame(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(jumpGame(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function jumpGame(...args) {\n    // TODO: Implement solution for Jump Game\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(jumpGame(...parsed)));\n    } catch (e) {\n        console.log(jumpGame(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Jump Game\n        string line;\n        while (getline(cin, line)) {\n            cout << line << endl;\n        }\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        String line;\n        while ((line = br.readLine()) != null) {\n            // TODO: Implement solution for Jump Game\n            System.out.println(line);\n        }\n    }\n}\n"
      }
    ],
    "sampleTestCases": [
      {
        "input": "[2,3,1,1,4]",
        "output": "true",
        "explanation": "Jump 1 step from index 0 to 1, then 3 steps to last index."
      },
      {
        "input": "[3,2,1,0,4]",
        "output": "false",
        "explanation": "Always arrive at index 3 with jump length 0."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "[2,3,1,1,4]",
        "output": "true",
        "isHidden": true
      },
      {
        "input": "[3,2,1,0,4]",
        "output": "false",
        "isHidden": true
      },
      {
        "input": "[0]",
        "output": "true",
        "isHidden": true
      },
      {
        "input": "[2,0,0]",
        "output": "true",
        "isHidden": true
      }
    ],
    "hints": [
      "Track maxReach index. If current index i > maxReach, return false."
    ],
    "editorial": {
      "approach": "Optimal Approach for Jump Game",
      "solutionMarkdown": "### Optimal Solution\n\nGreedy scan: maxReach = max(maxReach, i + nums[i]). If maxReach >= n-1, return true.\n\n### Complexity\n- Time: O(N), Space: O(1)",
      "timeComplexity": "O(N)",
      "spaceComplexity": "O(1)"
    },
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0
  },
  {
    "title": "Jump Game II",
    "slug": "jump-game-ii",
    "description": "You are given a 0-indexed array of integers `nums` of length `n`. Return *the minimum number of jumps to reach* `nums[n - 1]`.\n\n### Example 1:\n```\nInput: [2,3,1,1,4]\nOutput: 2\nExplanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.\n```\n\n### Example 2:\n```\nInput: [2,3,0,1,4]\nOutput: 2\nExplanation: Minimum jumps needed is 2.\n```",
    "difficulty": "MEDIUM",
    "category": "DSA",
    "patterns": [
      "Array",
      "Dynamic Programming",
      "Greedy"
    ],
    "topics": [
      "Array",
      "Dynamic Programming",
      "Greedy"
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
        "boilerplate": "def jumpGameIi(*args):\n    # TODO: Implement solution for Jump Game II\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = jumpGameIi(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(jumpGameIi(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function jumpGameIi(...args) {\n    // TODO: Implement solution for Jump Game II\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(jumpGameIi(...parsed)));\n    } catch (e) {\n        console.log(jumpGameIi(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Jump Game II\n        string line;\n        while (getline(cin, line)) {\n            cout << line << endl;\n        }\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        String line;\n        while ((line = br.readLine()) != null) {\n            // TODO: Implement solution for Jump Game II\n            System.out.println(line);\n        }\n    }\n}\n"
      }
    ],
    "sampleTestCases": [
      {
        "input": "[2,3,1,1,4]",
        "output": "2",
        "explanation": "Jump 1 step from index 0 to 1, then 3 steps to the last index."
      },
      {
        "input": "[2,3,0,1,4]",
        "output": "2",
        "explanation": "Minimum jumps needed is 2."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "[2,3,1,1,4]",
        "output": "2",
        "isHidden": true
      },
      {
        "input": "[2,3,0,1,4]",
        "output": "2",
        "isHidden": true
      },
      {
        "input": "[1,2,3]",
        "output": "2",
        "isHidden": true
      }
    ],
    "hints": [
      "Track farthest reachable index in current window. Increment jumps when reaching end of window."
    ],
    "editorial": {
      "approach": "Optimal Approach for Jump Game II",
      "solutionMarkdown": "### Optimal Solution\n\nBFS / Greedy in layers. Track current_end and max_reach. Increment jumps when i == current_end.\n\n### Complexity\n- Time: O(N), Space: O(1)",
      "timeComplexity": "O(N)",
      "spaceComplexity": "O(1)"
    },
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0
  },
  {
    "title": "K Closest Points to Origin",
    "slug": "k-closest-points-to-origin",
    "description": "Given an array of `points` where `points[i] = [xi, yi]` and an integer `k`, return the `k` closest points to the origin `(0, 0)` on the X-Y plane.\n\n### Example 1:\n```\nInput: [[1,3],[-2,2]]\n1\nOutput: [[-2,2]]\nExplanation: Distance of [-2,2] is sqrt(8) < sqrt(10).\n```\n\n### Example 2:\n```\nInput: [[3,3],[5,-1],[-2,4]]\n2\nOutput: [[3,3],[-2,4]]\nExplanation: Two closest points returned.\n```",
    "difficulty": "MEDIUM",
    "category": "DSA",
    "patterns": [
      "Array",
      "Math",
      "Divide and Conquer",
      "Heap / Priority Queue",
      "Sorting"
    ],
    "topics": [
      "Array",
      "Math",
      "Divide and Conquer",
      "Heap / Priority Queue",
      "Sorting"
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
        "boilerplate": "def kClosestPointsToOrigin(*args):\n    # TODO: Implement solution for K Closest Points to Origin\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = kClosestPointsToOrigin(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(kClosestPointsToOrigin(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function kClosestPointsToOrigin(...args) {\n    // TODO: Implement solution for K Closest Points to Origin\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(kClosestPointsToOrigin(...parsed)));\n    } catch (e) {\n        console.log(kClosestPointsToOrigin(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for K Closest Points to Origin\n        string line;\n        while (getline(cin, line)) {\n            cout << line << endl;\n        }\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        String line;\n        while ((line = br.readLine()) != null) {\n            // TODO: Implement solution for K Closest Points to Origin\n            System.out.println(line);\n        }\n    }\n}\n"
      }
    ],
    "sampleTestCases": [
      {
        "input": "[[1,3],[-2,2]]\n1",
        "output": "[[-2,2]]",
        "explanation": "Distance of [-2,2] is sqrt(8) < sqrt(10)."
      },
      {
        "input": "[[3,3],[5,-1],[-2,4]]\n2",
        "output": "[[3,3],[-2,4]]",
        "explanation": "Two closest points returned."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "[[1,3],[-2,2]]\n1",
        "output": "[[-2,2]]",
        "isHidden": true
      },
      {
        "input": "[[3,3],[5,-1],[-2,4]]\n2",
        "output": "[[3,3],[-2,4]]",
        "isHidden": true
      },
      {
        "input": "[[0,1],[1,0]]\n2",
        "output": "[[0,1],[1,0]]",
        "isHidden": true
      }
    ],
    "hints": [
      "Use a Max-Heap of size k storing points by Euclidean distance x^2 + y^2."
    ],
    "editorial": {
      "approach": "Optimal Approach for K Closest Points to Origin",
      "solutionMarkdown": "### Optimal Solution\n\nMaintain max heap of size k. Alternatively use QuickSelect for O(N) average time.\n\n### Complexity\n- Time: O(N log K), Space: O(K)",
      "timeComplexity": "O(N log K)",
      "spaceComplexity": "O(K)"
    },
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0
  },
  {
    "title": "Kth Largest Element in an Array",
    "slug": "kth-largest-element-in-an-array",
    "description": "Given an integer array `nums` and an integer `k`, return the `k-th` largest element in the array.\n\nNote that it is the `k-th` largest element in the sorted order, not the `k-th` distinct element.\n\n### Example 1:\n```\nInput: [3,2,1,5,6,4]\n2\nOutput: 5\nExplanation: 2nd largest element is 5.\n```\n\n### Example 2:\n```\nInput: [3,2,3,1,2,4,5,5,6]\n4\nOutput: 4\nExplanation: 4th largest element is 4.\n```",
    "difficulty": "MEDIUM",
    "category": "DSA",
    "patterns": [
      "Heaps / Priority Queue",
      "Divide and Conquer",
      "Quickselect"
    ],
    "topics": [
      "Heaps / Priority Queue",
      "Divide and Conquer",
      "Quickselect"
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
        "boilerplate": "def kthLargestElementInAnArray(*args):\n    # TODO: Implement solution for Kth Largest Element in an Array\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = kthLargestElementInAnArray(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(kthLargestElementInAnArray(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function kthLargestElementInAnArray(...args) {\n    // TODO: Implement solution for Kth Largest Element in an Array\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(kthLargestElementInAnArray(...parsed)));\n    } catch (e) {\n        console.log(kthLargestElementInAnArray(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Kth Largest Element in an Array\n        string line;\n        while (getline(cin, line)) {\n            cout << line << endl;\n        }\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        String line;\n        while ((line = br.readLine()) != null) {\n            // TODO: Implement solution for Kth Largest Element in an Array\n            System.out.println(line);\n        }\n    }\n}\n"
      }
    ],
    "sampleTestCases": [
      {
        "input": "[3,2,1,5,6,4]\n2",
        "output": "5",
        "explanation": "2nd largest element is 5."
      },
      {
        "input": "[3,2,3,1,2,4,5,5,6]\n4",
        "output": "4",
        "explanation": "4th largest element is 4."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "[3,2,1,5,6,4]\n2",
        "output": "5",
        "isHidden": true
      },
      {
        "input": "[3,2,3,1,2,4,5,5,6]\n4",
        "output": "4",
        "isHidden": true
      },
      {
        "input": "[1]\n1",
        "output": "1",
        "isHidden": true
      }
    ],
    "hints": [
      "Use a Min-Heap of size k or the Quickselect algorithm."
    ],
    "editorial": {
      "approach": "Optimal Approach for Kth Largest Element in an Array",
      "solutionMarkdown": "### Optimal Solution\n\nMin-heap of capacity k maintains the k largest items, heap root is kth largest.\n\n### Complexity\n- Time: O(N log k) with heap or O(N) average Quickselect, Space: O(k)",
      "timeComplexity": "O(N log k) with heap or O(N) average Quickselect",
      "spaceComplexity": "O(k)"
    },
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0
  },
  {
    "title": "Kth Smallest Element in a BST",
    "slug": "kth-smallest-element-in-a-bst",
    "description": "Given the `root` of a binary search tree, and an integer `k`, return *the `k-th` smallest value (**1-indexed**) of all the values of the nodes in the tree*.\n\n### Example 1:\n```\nInput: [3,1,4,null,2]\n1\nOutput: 1\nExplanation: Smallest element is 1.\n```\n\n### Example 2:\n```\nInput: [5,3,6,2,4,null,null,1]\n3\nOutput: 3\nExplanation: 3rd smallest element is 3.\n```",
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
        "boilerplate": "def kthSmallestElementInABst(*args):\n    # TODO: Implement solution for Kth Smallest Element in a BST\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = kthSmallestElementInABst(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(kthSmallestElementInABst(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function kthSmallestElementInABst(...args) {\n    // TODO: Implement solution for Kth Smallest Element in a BST\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(kthSmallestElementInABst(...parsed)));\n    } catch (e) {\n        console.log(kthSmallestElementInABst(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Kth Smallest Element in a BST\n        string line;\n        while (getline(cin, line)) {\n            cout << line << endl;\n        }\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        String line;\n        while ((line = br.readLine()) != null) {\n            // TODO: Implement solution for Kth Smallest Element in a BST\n            System.out.println(line);\n        }\n    }\n}\n"
      }
    ],
    "sampleTestCases": [
      {
        "input": "[3,1,4,null,2]\n1",
        "output": "1",
        "explanation": "Smallest element is 1."
      },
      {
        "input": "[5,3,6,2,4,null,null,1]\n3",
        "output": "3",
        "explanation": "3rd smallest element is 3."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "[3,1,4,null,2]\n1",
        "output": "1",
        "isHidden": true
      },
      {
        "input": "[5,3,6,2,4,null,null,1]\n3",
        "output": "3",
        "isHidden": true
      }
    ],
    "hints": [
      "Inorder traversal of a BST visits nodes in strictly ascending order."
    ],
    "editorial": {
      "approach": "Optimal Approach for Kth Smallest Element in a BST",
      "solutionMarkdown": "### Optimal Solution\n\nIterative Inorder traversal using stack; return value when k reaches 0.\n\n### Complexity\n- Time: O(H + k), Space: O(H)",
      "timeComplexity": "O(H + k)",
      "spaceComplexity": "O(H)"
    },
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0
  },
  {
    "title": "Largest Rectangle in Histogram",
    "slug": "largest-rectangle-in-histogram",
    "description": "Given an array of integers `heights` representing the histogram's bar height where the width of each bar is `1`, return *the area of the largest rectangle in the histogram*.\n\n### Example 1:\n```\nInput: [2,1,5,6,2,3]\nOutput: 10\nExplanation: The largest rectangle is formed by heights 5 and 6: area = 2 * 5 = 10.\n```\n\n### Example 2:\n```\nInput: [2,4]\nOutput: 4\nExplanation: Max area = 4.\n```",
    "difficulty": "HARD",
    "category": "DSA",
    "patterns": [
      "Monotonic Stack",
      "Array"
    ],
    "topics": [
      "Monotonic Stack",
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
        "boilerplate": "def largestRectangleInHistogram(*args):\n    # TODO: Implement solution for Largest Rectangle in Histogram\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = largestRectangleInHistogram(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(largestRectangleInHistogram(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function largestRectangleInHistogram(...args) {\n    // TODO: Implement solution for Largest Rectangle in Histogram\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(largestRectangleInHistogram(...parsed)));\n    } catch (e) {\n        console.log(largestRectangleInHistogram(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Largest Rectangle in Histogram\n        string line;\n        while (getline(cin, line)) {\n            cout << line << endl;\n        }\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        String line;\n        while ((line = br.readLine()) != null) {\n            // TODO: Implement solution for Largest Rectangle in Histogram\n            System.out.println(line);\n        }\n    }\n}\n"
      }
    ],
    "sampleTestCases": [
      {
        "input": "[2,1,5,6,2,3]",
        "output": "10",
        "explanation": "The largest rectangle is formed by heights 5 and 6: area = 2 * 5 = 10."
      },
      {
        "input": "[2,4]",
        "output": "4",
        "explanation": "Max area = 4."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "[2,1,5,6,2,3]",
        "output": "10",
        "isHidden": true
      },
      {
        "input": "[2,4]",
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
      "Monotonic Increasing Stack of indices. When popping height h, width is right_boundary - left_boundary - 1."
    ],
    "editorial": {
      "approach": "Optimal Approach for Largest Rectangle in Histogram",
      "solutionMarkdown": "### Optimal Solution\n\nMonotonic increasing stack computes left and right lower boundaries in linear time.\n\n### Complexity\n- Time: O(N), Space: O(N)",
      "timeComplexity": "O(N)",
      "spaceComplexity": "O(N)"
    },
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0
  },
  {
    "title": "Letter Combinations of a Phone Number",
    "slug": "letter-combinations-of-a-phone-number",
    "description": "Given a string containing digits from `2-9` inclusive, return all possible letter combinations that the number could represent. Return the answer in **any order**.\n\n### Example 1:\n```\nInput: \"23\"\nOutput: [\"ad\",\"ae\",\"af\",\"bd\",\"be\",\"bf\",\"cd\",\"ce\",\"cf\"]\nExplanation: All mappings for '2' (abc) and '3' (def).\n```\n\n### Example 2:\n```\nInput: \"\"\nOutput: []\nExplanation: Empty digits return empty list.\n```",
    "difficulty": "MEDIUM",
    "category": "DSA",
    "patterns": [
      "Hash Table",
      "String",
      "Backtracking"
    ],
    "topics": [
      "Hash Table",
      "String",
      "Backtracking"
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
        "boilerplate": "def letterCombinationsOfAPhoneNumber(*args):\n    # TODO: Implement solution for Letter Combinations of a Phone Number\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = letterCombinationsOfAPhoneNumber(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(letterCombinationsOfAPhoneNumber(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function letterCombinationsOfAPhoneNumber(...args) {\n    // TODO: Implement solution for Letter Combinations of a Phone Number\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(letterCombinationsOfAPhoneNumber(...parsed)));\n    } catch (e) {\n        console.log(letterCombinationsOfAPhoneNumber(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Letter Combinations of a Phone Number\n        string line;\n        while (getline(cin, line)) {\n            cout << line << endl;\n        }\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        String line;\n        while ((line = br.readLine()) != null) {\n            // TODO: Implement solution for Letter Combinations of a Phone Number\n            System.out.println(line);\n        }\n    }\n}\n"
      }
    ],
    "sampleTestCases": [
      {
        "input": "\"23\"",
        "output": "[\"ad\",\"ae\",\"af\",\"bd\",\"be\",\"bf\",\"cd\",\"ce\",\"cf\"]",
        "explanation": "All mappings for '2' (abc) and '3' (def)."
      },
      {
        "input": "\"\"",
        "output": "[]",
        "explanation": "Empty digits return empty list."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "\"23\"",
        "output": "[\"ad\",\"ae\",\"af\",\"bd\",\"be\",\"bf\",\"cd\",\"ce\",\"cf\"]",
        "isHidden": true
      },
      {
        "input": "\"\"",
        "output": "[]",
        "isHidden": true
      },
      {
        "input": "\"2\"",
        "output": "[\"a\",\"b\",\"c\"]",
        "isHidden": true
      }
    ],
    "hints": [
      "Backtrack recursively through each digit matching character possibilities."
    ],
    "editorial": {
      "approach": "Optimal Approach for Letter Combinations of a Phone Number",
      "solutionMarkdown": "### Optimal Solution\n\nMap digits to keypad characters. Use recursion to branch for each letter at index i.\n\n### Complexity\n- Time: O(4^N), Space: O(N)",
      "timeComplexity": "O(4^N)",
      "spaceComplexity": "O(N)"
    },
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0
  },
  {
    "title": "Linked List Cycle",
    "slug": "linked-list-cycle",
    "description": "Given `head`, the head of a linked list, determine if the linked list has a cycle in it.\n\n### Example 1:\n```\nInput: [3,2,0,-4]\n1\nOutput: true\nExplanation: Tail connects to the 1st node (0-indexed).\n```\n\n### Example 2:\n```\nInput: [1,2]\n0\nOutput: true\nExplanation: Tail connects to the 0th node.\n```",
    "difficulty": "EASY",
    "category": "DSA",
    "patterns": [
      "Linked List",
      "Two Pointers",
      "Fast & Slow Pointers"
    ],
    "topics": [
      "Linked List",
      "Two Pointers",
      "Fast & Slow Pointers"
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
        "boilerplate": "def linkedListCycle(*args):\n    # TODO: Implement solution for Linked List Cycle\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = linkedListCycle(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(linkedListCycle(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function linkedListCycle(...args) {\n    // TODO: Implement solution for Linked List Cycle\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(linkedListCycle(...parsed)));\n    } catch (e) {\n        console.log(linkedListCycle(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Linked List Cycle\n        string line;\n        while (getline(cin, line)) {\n            cout << line << endl;\n        }\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        String line;\n        while ((line = br.readLine()) != null) {\n            // TODO: Implement solution for Linked List Cycle\n            System.out.println(line);\n        }\n    }\n}\n"
      }
    ],
    "sampleTestCases": [
      {
        "input": "[3,2,0,-4]\n1",
        "output": "true",
        "explanation": "Tail connects to the 1st node (0-indexed)."
      },
      {
        "input": "[1,2]\n0",
        "output": "true",
        "explanation": "Tail connects to the 0th node."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "[3,2,0,-4]\n1",
        "output": "true",
        "isHidden": true
      },
      {
        "input": "[1,2]\n0",
        "output": "true",
        "isHidden": true
      },
      {
        "input": "[1]\n-1",
        "output": "false",
        "isHidden": true
      }
    ],
    "hints": [
      "Floyd's Tortoise and Hare: slow moves 1 step, fast moves 2 steps."
    ],
    "editorial": {
      "approach": "Optimal Approach for Linked List Cycle",
      "solutionMarkdown": "### Optimal Solution\n\nFast & slow pointers meet if cycle exists; fast reaching null indicates acyclic list.\n\n### Complexity\n- Time: O(N), Space: O(1)",
      "timeComplexity": "O(N)",
      "spaceComplexity": "O(1)"
    },
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0
  },
  {
    "title": "Longest Common Prefix",
    "slug": "longest-common-prefix",
    "description": "Write a function to find the longest common prefix string amongst an array of strings.\n\nIf there is no common prefix, return an empty string `\"\"`.\n\n### Example 1:\n```\nInput: [\"flower\",\"flow\",\"flight\"]\nOutput: \"fl\"\nExplanation: Common prefix is 'fl'.\n```\n\n### Example 2:\n```\nInput: [\"dog\",\"racecar\",\"car\"]\nOutput: \"\"\nExplanation: There is no common prefix.\n```",
    "difficulty": "EASY",
    "category": "DSA",
    "patterns": [
      "String",
      "Trie"
    ],
    "topics": [
      "String",
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
        "boilerplate": "def longestCommonPrefix(*args):\n    # TODO: Implement solution for Longest Common Prefix\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = longestCommonPrefix(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(longestCommonPrefix(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function longestCommonPrefix(...args) {\n    // TODO: Implement solution for Longest Common Prefix\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(longestCommonPrefix(...parsed)));\n    } catch (e) {\n        console.log(longestCommonPrefix(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Longest Common Prefix\n        string line;\n        while (getline(cin, line)) {\n            cout << line << endl;\n        }\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        String line;\n        while ((line = br.readLine()) != null) {\n            // TODO: Implement solution for Longest Common Prefix\n            System.out.println(line);\n        }\n    }\n}\n"
      }
    ],
    "sampleTestCases": [
      {
        "input": "[\"flower\",\"flow\",\"flight\"]",
        "output": "\"fl\"",
        "explanation": "Common prefix is 'fl'."
      },
      {
        "input": "[\"dog\",\"racecar\",\"car\"]",
        "output": "\"\"",
        "explanation": "There is no common prefix."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "[\"flower\",\"flow\",\"flight\"]",
        "output": "\"fl\"",
        "isHidden": true
      },
      {
        "input": "[\"dog\",\"racecar\",\"car\"]",
        "output": "\"\"",
        "isHidden": true
      },
      {
        "input": "[\"interspecies\",\"interstellar\",\"interstate\"]",
        "output": "\"inters\"",
        "isHidden": true
      },
      {
        "input": "[\"a\"]",
        "output": "\"a\"",
        "isHidden": true
      }
    ],
    "hints": [
      "Sort the strings or compare character by character across all words."
    ],
    "editorial": {
      "approach": "Optimal Approach for Longest Common Prefix",
      "solutionMarkdown": "### Optimal Solution\n\nVertical scanning or comparing prefix of first and last strings after sorting.\n\n### Complexity\n- Time: O(S) where S is sum of all characters, Space: O(1)",
      "timeComplexity": "O(S) where S is sum of all characters",
      "spaceComplexity": "O(1)"
    },
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0
  },
  {
    "title": "Longest Common Subsequence",
    "slug": "longest-common-subsequence",
    "description": "Given two strings `text1` and `text2`, return the length of their longest common subsequence. If there is no common subsequence, return `0`.\n\n### Example 1:\n```\nInput: abcde\nace\nOutput: 3\nExplanation: The longest common subsequence is 'ace' and its length is 3.\n```\n\n### Example 2:\n```\nInput: abc\nabc\nOutput: 3\nExplanation: The longest common subsequence is 'abc'.\n```",
    "difficulty": "MEDIUM",
    "category": "DP",
    "patterns": [
      "Dynamic Programming",
      "String"
    ],
    "topics": [
      "Dynamic Programming",
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
        "boilerplate": "def longestCommonSubsequence(*args):\n    # TODO: Implement solution for Longest Common Subsequence\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = longestCommonSubsequence(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(longestCommonSubsequence(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function longestCommonSubsequence(...args) {\n    // TODO: Implement solution for Longest Common Subsequence\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(longestCommonSubsequence(...parsed)));\n    } catch (e) {\n        console.log(longestCommonSubsequence(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Longest Common Subsequence\n        string line;\n        while (getline(cin, line)) {\n            cout << line << endl;\n        }\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        String line;\n        while ((line = br.readLine()) != null) {\n            // TODO: Implement solution for Longest Common Subsequence\n            System.out.println(line);\n        }\n    }\n}\n"
      }
    ],
    "sampleTestCases": [
      {
        "input": "abcde\nace",
        "output": "3",
        "explanation": "The longest common subsequence is 'ace' and its length is 3."
      },
      {
        "input": "abc\nabc",
        "output": "3",
        "explanation": "The longest common subsequence is 'abc'."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "abcde\nace",
        "output": "3",
        "isHidden": true
      },
      {
        "input": "abc\nabc",
        "output": "3",
        "isHidden": true
      },
      {
        "input": "abc\ndef",
        "output": "0",
        "isHidden": true
      },
      {
        "input": "bsbininm\njmjkbkjkv",
        "output": "1",
        "isHidden": true
      }
    ],
    "hints": [
      "2D DP table: dp[i][j] = 1 + dp[i-1][j-1] if match, else max(dp[i-1][j], dp[i][j-1])."
    ],
    "editorial": {
      "approach": "Optimal Approach for Longest Common Subsequence",
      "solutionMarkdown": "### Optimal Solution\n\nStandard 2D DP LCS state matrix with 1D rolling array optimization.\n\n### Complexity\n- Time: O(M * N), Space: O(min(M, N))",
      "timeComplexity": "O(M * N)",
      "spaceComplexity": "O(min(M"
    },
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0
  },
  {
    "title": "Longest Consecutive Sequence",
    "slug": "longest-consecutive-sequence",
    "description": "Given an unsorted array of integers `nums`, return *the length of the longest consecutive elements sequence*. You must write an algorithm that runs in `O(n)` time.\n\n### Example 1:\n```\nInput: [100,4,200,1,3,2]\nOutput: 4\nExplanation: The longest consecutive sequence is [1, 2, 3, 4], length 4.\n```\n\n### Example 2:\n```\nInput: [0,3,7,2,5,8,4,6,0,1]\nOutput: 9\nExplanation: Sequence from 0 to 8 has length 9.\n```",
    "difficulty": "MEDIUM",
    "category": "DSA",
    "patterns": [
      "Array",
      "Hash Table",
      "Union Find"
    ],
    "topics": [
      "Array",
      "Hash Table",
      "Union Find"
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
        "boilerplate": "def longestConsecutiveSequence(*args):\n    # TODO: Implement solution for Longest Consecutive Sequence\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = longestConsecutiveSequence(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(longestConsecutiveSequence(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function longestConsecutiveSequence(...args) {\n    // TODO: Implement solution for Longest Consecutive Sequence\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(longestConsecutiveSequence(...parsed)));\n    } catch (e) {\n        console.log(longestConsecutiveSequence(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Longest Consecutive Sequence\n        string line;\n        while (getline(cin, line)) {\n            cout << line << endl;\n        }\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        String line;\n        while ((line = br.readLine()) != null) {\n            // TODO: Implement solution for Longest Consecutive Sequence\n            System.out.println(line);\n        }\n    }\n}\n"
      }
    ],
    "sampleTestCases": [
      {
        "input": "[100,4,200,1,3,2]",
        "output": "4",
        "explanation": "The longest consecutive sequence is [1, 2, 3, 4], length 4."
      },
      {
        "input": "[0,3,7,2,5,8,4,6,0,1]",
        "output": "9",
        "explanation": "Sequence from 0 to 8 has length 9."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "[100,4,200,1,3,2]",
        "output": "4",
        "isHidden": true
      },
      {
        "input": "[0,3,7,2,5,8,4,6,0,1]",
        "output": "9",
        "isHidden": true
      },
      {
        "input": "[]",
        "output": "0",
        "isHidden": true
      }
    ],
    "hints": [
      "Insert all numbers into a HashSet. Only start counting if num - 1 is not in the set."
    ],
    "editorial": {
      "approach": "Optimal Approach for Longest Consecutive Sequence",
      "solutionMarkdown": "### Optimal Solution\n\nStore numbers in a hash set. For each x where x-1 is absent, count consecutive sequence x, x+1, x+2...\n\n### Complexity\n- Time: O(N), Space: O(N)",
      "timeComplexity": "O(N)",
      "spaceComplexity": "O(N)"
    },
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0
  },
  {
    "title": "Longest Continuous Subarray With Absolute Diff Less Than or Equal to Limit",
    "slug": "longest-continuous-subarray-with-absolute-diff-less-than-or-equal-to-limit",
    "description": "Given an array of integers `nums` and an integer `limit`, return the size of the longest **non-empty** subarray such that the absolute difference between any two elements of this subarray is less than or equal to `limit`.\n\n### Example 1:\n```\nInput: [8,2,4,7]\n4\nOutput: 2\nExplanation: [2,4] or [4,7] have diff <= 4, maximum size 2.\n```\n\n### Example 2:\n```\nInput: [10,1,2,4,7,2]\n5\nOutput: 4\nExplanation: Subarray [2,4,7,2] has max 7, min 2, diff 5 <= 5.\n```",
    "difficulty": "MEDIUM",
    "category": "DSA",
    "patterns": [
      "Array",
      "Queue",
      "Sliding Window",
      "Monotonic Queue"
    ],
    "topics": [
      "Array",
      "Queue",
      "Sliding Window",
      "Monotonic Queue"
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
        "boilerplate": "def longestContinuousSubarrayWithAbsoluteDiffLessThanOrEqualToLimit(*args):\n    # TODO: Implement solution for Longest Continuous Subarray With Absolute Diff Less Than or Equal to Limit\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = longestContinuousSubarrayWithAbsoluteDiffLessThanOrEqualToLimit(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(longestContinuousSubarrayWithAbsoluteDiffLessThanOrEqualToLimit(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function longestContinuousSubarrayWithAbsoluteDiffLessThanOrEqualToLimit(...args) {\n    // TODO: Implement solution for Longest Continuous Subarray With Absolute Diff Less Than or Equal to Limit\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(longestContinuousSubarrayWithAbsoluteDiffLessThanOrEqualToLimit(...parsed)));\n    } catch (e) {\n        console.log(longestContinuousSubarrayWithAbsoluteDiffLessThanOrEqualToLimit(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Longest Continuous Subarray With Absolute Diff Less Than or Equal to Limit\n        string line;\n        while (getline(cin, line)) {\n            cout << line << endl;\n        }\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        String line;\n        while ((line = br.readLine()) != null) {\n            // TODO: Implement solution for Longest Continuous Subarray With Absolute Diff Less Than or Equal to Limit\n            System.out.println(line);\n        }\n    }\n}\n"
      }
    ],
    "sampleTestCases": [
      {
        "input": "[8,2,4,7]\n4",
        "output": "2",
        "explanation": "[2,4] or [4,7] have diff <= 4, maximum size 2."
      },
      {
        "input": "[10,1,2,4,7,2]\n5",
        "output": "4",
        "explanation": "Subarray [2,4,7,2] has max 7, min 2, diff 5 <= 5."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "[8,2,4,7]\n4",
        "output": "2",
        "isHidden": true
      },
      {
        "input": "[10,1,2,4,7,2]\n5",
        "output": "4",
        "isHidden": true
      },
      {
        "input": "[4,2,2,2,4,4,2,2]\n0",
        "output": "3",
        "isHidden": true
      }
    ],
    "hints": [
      "Maintain two monotonic deques for maximum and minimum of the current sliding window."
    ],
    "editorial": {
      "approach": "Optimal Approach for Longest Continuous Subarray With Absolute Diff Less Than or Equal to Limit",
      "solutionMarkdown": "### Optimal Solution\n\nExpand right pointer, maintain min_deque and max_deque. If max - min > limit, advance left pointer.\n\n### Complexity\n- Time: O(N), Space: O(N)",
      "timeComplexity": "O(N)",
      "spaceComplexity": "O(N)"
    },
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0
  },
  {
    "title": "Longest Increasing Subsequence",
    "slug": "longest-increasing-subsequence",
    "description": "Given an integer array `nums`, return the length of the longest strictly increasing subsequence.\n\n### Example 1:\n```\nInput: [10,9,2,5,3,7,101,18]\nOutput: 4\nExplanation: The longest increasing subsequence is [2,3,7,101], length 4.\n```\n\n### Example 2:\n```\nInput: [0,1,0,3,2,3]\nOutput: 4\nExplanation: [0,1,2,3] has length 4.\n```",
    "difficulty": "MEDIUM",
    "category": "DP",
    "patterns": [
      "Dynamic Programming",
      "Binary Search"
    ],
    "topics": [
      "Dynamic Programming",
      "Binary Search"
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
        "boilerplate": "def longestIncreasingSubsequence(*args):\n    # TODO: Implement solution for Longest Increasing Subsequence\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = longestIncreasingSubsequence(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(longestIncreasingSubsequence(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function longestIncreasingSubsequence(...args) {\n    // TODO: Implement solution for Longest Increasing Subsequence\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(longestIncreasingSubsequence(...parsed)));\n    } catch (e) {\n        console.log(longestIncreasingSubsequence(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Longest Increasing Subsequence\n        string line;\n        while (getline(cin, line)) {\n            cout << line << endl;\n        }\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        String line;\n        while ((line = br.readLine()) != null) {\n            // TODO: Implement solution for Longest Increasing Subsequence\n            System.out.println(line);\n        }\n    }\n}\n"
      }
    ],
    "sampleTestCases": [
      {
        "input": "[10,9,2,5,3,7,101,18]",
        "output": "4",
        "explanation": "The longest increasing subsequence is [2,3,7,101], length 4."
      },
      {
        "input": "[0,1,0,3,2,3]",
        "output": "4",
        "explanation": "[0,1,2,3] has length 4."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "[10,9,2,5,3,7,101,18]",
        "output": "4",
        "isHidden": true
      },
      {
        "input": "[0,1,0,3,2,3]",
        "output": "4",
        "isHidden": true
      },
      {
        "input": "[7,7,7,7,7,7,7]",
        "output": "1",
        "isHidden": true
      }
    ],
    "hints": [
      "Patience sorting using binary search (bisect_left) runs in O(N log N)."
    ],
    "editorial": {
      "approach": "Optimal Approach for Longest Increasing Subsequence",
      "solutionMarkdown": "### Optimal Solution\n\nTails array where tails[i] stores smallest tail of all increasing subsequences of length i+1.\n\n### Complexity\n- Time: O(N log N), Space: O(N)",
      "timeComplexity": "O(N log N)",
      "spaceComplexity": "O(N)"
    },
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0
  },
  {
    "title": "Longest Palindromic Substring",
    "slug": "longest-palindromic-substring",
    "description": "Given a string `s`, return the *longest palindromic substring* in `s`.\n\n### Example 1:\n```\nInput: babad\nOutput: \"bab\"\nExplanation: 'aba' is also a valid answer.\n```\n\n### Example 2:\n```\nInput: cbbd\nOutput: \"bb\"\nExplanation: 'bb' is the longest palindromic substring.\n```",
    "difficulty": "MEDIUM",
    "category": "DP",
    "patterns": [
      "Dynamic Programming",
      "Two Pointers",
      "String"
    ],
    "topics": [
      "Dynamic Programming",
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
        "boilerplate": "def longestPalindromicSubstring(*args):\n    # TODO: Implement solution for Longest Palindromic Substring\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = longestPalindromicSubstring(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(longestPalindromicSubstring(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function longestPalindromicSubstring(...args) {\n    // TODO: Implement solution for Longest Palindromic Substring\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(longestPalindromicSubstring(...parsed)));\n    } catch (e) {\n        console.log(longestPalindromicSubstring(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Longest Palindromic Substring\n        string line;\n        while (getline(cin, line)) {\n            cout << line << endl;\n        }\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        String line;\n        while ((line = br.readLine()) != null) {\n            // TODO: Implement solution for Longest Palindromic Substring\n            System.out.println(line);\n        }\n    }\n}\n"
      }
    ],
    "sampleTestCases": [
      {
        "input": "babad",
        "output": "\"bab\"",
        "explanation": "'aba' is also a valid answer."
      },
      {
        "input": "cbbd",
        "output": "\"bb\"",
        "explanation": "'bb' is the longest palindromic substring."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "babad",
        "output": "\"bab\"",
        "isHidden": true
      },
      {
        "input": "cbbd",
        "output": "\"bb\"",
        "isHidden": true
      },
      {
        "input": "a",
        "output": "\"a\"",
        "isHidden": true
      },
      {
        "input": "ac",
        "output": "\"a\"",
        "isHidden": true
      }
    ],
    "hints": [
      "Expand around center for each index i (odd center) and (i, i+1) (even center)."
    ],
    "editorial": {
      "approach": "Optimal Approach for Longest Palindromic Substring",
      "solutionMarkdown": "### Optimal Solution\n\nExpand around center checks 2n-1 centers in O(N^2) time and O(1) extra space.\n\n### Complexity\n- Time: O(N^2), Space: O(1)",
      "timeComplexity": "O(N^2)",
      "spaceComplexity": "O(1)"
    },
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0
  },
  {
    "title": "Longest Path With Different Adjacent Characters",
    "slug": "longest-path-with-different-adjacent-characters",
    "description": "You are given a **tree** rooted at node `0` consisting of `n` nodes. You are given an array `parent` and a string `s`. Return *the length of the longest path in the tree such that no pair of adjacent nodes on the path have the same character assigned to them*.\n\n### Example 1:\n```\nInput: [-1,0,0,1,1,2]\n\"abacbe\"\nOutput: 3\nExplanation: The longest path is 0 -> 1 -> 3 (chars 'a'-'b'-'c') with length 3.\n```\n\n### Example 2:\n```\nInput: [-1,0,0,0]\n\"aabc\"\nOutput: 3\nExplanation: Longest path is 2 -> 0 -> 3.\n```",
    "difficulty": "HARD",
    "category": "DSA",
    "patterns": [
      "Tree",
      "Depth-First Search",
      "Graph",
      "String"
    ],
    "topics": [
      "Tree",
      "Depth-First Search",
      "Graph",
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
        "boilerplate": "def longestPathWithDifferentAdjacentCharacters(*args):\n    # TODO: Implement solution for Longest Path With Different Adjacent Characters\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = longestPathWithDifferentAdjacentCharacters(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(longestPathWithDifferentAdjacentCharacters(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function longestPathWithDifferentAdjacentCharacters(...args) {\n    // TODO: Implement solution for Longest Path With Different Adjacent Characters\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(longestPathWithDifferentAdjacentCharacters(...parsed)));\n    } catch (e) {\n        console.log(longestPathWithDifferentAdjacentCharacters(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Longest Path With Different Adjacent Characters\n        string line;\n        while (getline(cin, line)) {\n            cout << line << endl;\n        }\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        String line;\n        while ((line = br.readLine()) != null) {\n            // TODO: Implement solution for Longest Path With Different Adjacent Characters\n            System.out.println(line);\n        }\n    }\n}\n"
      }
    ],
    "sampleTestCases": [
      {
        "input": "[-1,0,0,1,1,2]\n\"abacbe\"",
        "output": "3",
        "explanation": "The longest path is 0 -> 1 -> 3 (chars 'a'-'b'-'c') with length 3."
      },
      {
        "input": "[-1,0,0,0]\n\"aabc\"",
        "output": "3",
        "explanation": "Longest path is 2 -> 0 -> 3."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "[-1,0,0,1,1,2]\n\"abacbe\"",
        "output": "3",
        "isHidden": true
      },
      {
        "input": "[-1,0,0,0]\n\"aabc\"",
        "output": "3",
        "isHidden": true
      },
      {
        "input": "[-1]\n\"z\"",
        "output": "1",
        "isHidden": true
      }
    ],
    "hints": [
      "For each node, compute the top two longest branches among valid children where child char != node char."
    ],
    "editorial": {
      "approach": "Optimal Approach for Longest Path With Different Adjacent Characters",
      "solutionMarkdown": "### Optimal Solution\n\nPost-order DFS returning the longest valid single chain down. Update global diameter using top two chains.\n\n### Complexity\n- Time: O(N), Space: O(N)",
      "timeComplexity": "O(N)",
      "spaceComplexity": "O(N)"
    },
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0
  },
  {
    "title": "Longest Repeating Character Replacement",
    "slug": "longest-repeating-character-replacement",
    "description": "You are given a string `s` and an integer `k`. You can choose any character of the string and change it to any other uppercase English character at most `k` times. Return *the length of the longest substring containing the same letter you can get after performing the above operations*.\n\n### Example 1:\n```\nInput: \"ABAB\"\n2\nOutput: 4\nExplanation: Replace two 'A's with 'B's or vice versa to get \"AAAA\" or \"BBBB\".\n```\n\n### Example 2:\n```\nInput: \"AABABBA\"\n1\nOutput: 4\nExplanation: Replace middle 'A' to get \"AABBBBA\", substring \"BBBB\" length 4.\n```",
    "difficulty": "MEDIUM",
    "category": "DSA",
    "patterns": [
      "Hash Table",
      "String",
      "Sliding Window"
    ],
    "topics": [
      "Hash Table",
      "String",
      "Sliding Window"
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
        "boilerplate": "def longestRepeatingCharacterReplacement(*args):\n    # TODO: Implement solution for Longest Repeating Character Replacement\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = longestRepeatingCharacterReplacement(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(longestRepeatingCharacterReplacement(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function longestRepeatingCharacterReplacement(...args) {\n    // TODO: Implement solution for Longest Repeating Character Replacement\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(longestRepeatingCharacterReplacement(...parsed)));\n    } catch (e) {\n        console.log(longestRepeatingCharacterReplacement(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Longest Repeating Character Replacement\n        string line;\n        while (getline(cin, line)) {\n            cout << line << endl;\n        }\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        String line;\n        while ((line = br.readLine()) != null) {\n            // TODO: Implement solution for Longest Repeating Character Replacement\n            System.out.println(line);\n        }\n    }\n}\n"
      }
    ],
    "sampleTestCases": [
      {
        "input": "\"ABAB\"\n2",
        "output": "4",
        "explanation": "Replace two 'A's with 'B's or vice versa to get \"AAAA\" or \"BBBB\"."
      },
      {
        "input": "\"AABABBA\"\n1",
        "output": "4",
        "explanation": "Replace middle 'A' to get \"AABBBBA\", substring \"BBBB\" length 4."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "\"ABAB\"\n2",
        "output": "4",
        "isHidden": true
      },
      {
        "input": "\"AABABBA\"\n1",
        "output": "4",
        "isHidden": true
      },
      {
        "input": "\"AAAA\"\n2",
        "output": "4",
        "isHidden": true
      }
    ],
    "hints": [
      "Condition for valid window: (window_length - max_frequency) <= k."
    ],
    "editorial": {
      "approach": "Optimal Approach for Longest Repeating Character Replacement",
      "solutionMarkdown": "### Optimal Solution\n\nSliding window with frequency array. If window_len - max_freq > k, shrink window from left.\n\n### Complexity\n- Time: O(N), Space: O(1)",
      "timeComplexity": "O(N)",
      "spaceComplexity": "O(1)"
    },
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0
  },
  {
    "title": "Longest Substring with At Most Two Distinct Characters",
    "slug": "longest-substring-with-at-most-two-distinct-characters",
    "description": "Given a string `s`, return *the length of the longest substring that contains at most **two distinct characters***.\n\n### Example 1:\n```\nInput: \"eceba\"\nOutput: 3\nExplanation: Substring \"ece\" has length 3.\n```\n\n### Example 2:\n```\nInput: \"ccaabbb\"\nOutput: 5\nExplanation: \"aabbb\" has length 5 with characters 'a' and 'b'.\n```",
    "difficulty": "MEDIUM",
    "category": "DSA",
    "patterns": [
      "Hash Table",
      "String",
      "Sliding Window"
    ],
    "topics": [
      "Hash Table",
      "String",
      "Sliding Window"
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
        "boilerplate": "def longestSubstringWithAtMostTwoDistinctCharacters(*args):\n    # TODO: Implement solution for Longest Substring with At Most Two Distinct Characters\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = longestSubstringWithAtMostTwoDistinctCharacters(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(longestSubstringWithAtMostTwoDistinctCharacters(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function longestSubstringWithAtMostTwoDistinctCharacters(...args) {\n    // TODO: Implement solution for Longest Substring with At Most Two Distinct Characters\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(longestSubstringWithAtMostTwoDistinctCharacters(...parsed)));\n    } catch (e) {\n        console.log(longestSubstringWithAtMostTwoDistinctCharacters(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Longest Substring with At Most Two Distinct Characters\n        string line;\n        while (getline(cin, line)) {\n            cout << line << endl;\n        }\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        String line;\n        while ((line = br.readLine()) != null) {\n            // TODO: Implement solution for Longest Substring with At Most Two Distinct Characters\n            System.out.println(line);\n        }\n    }\n}\n"
      }
    ],
    "sampleTestCases": [
      {
        "input": "\"eceba\"",
        "output": "3",
        "explanation": "Substring \"ece\" has length 3."
      },
      {
        "input": "\"ccaabbb\"",
        "output": "5",
        "explanation": "\"aabbb\" has length 5 with characters 'a' and 'b'."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "\"eceba\"",
        "output": "3",
        "isHidden": true
      },
      {
        "input": "\"ccaabbb\"",
        "output": "5",
        "isHidden": true
      },
      {
        "input": "\"a\"",
        "output": "1",
        "isHidden": true
      }
    ],
    "hints": [
      "Maintain a frequency map of characters in the sliding window. Shrink left when map size > 2."
    ],
    "editorial": {
      "approach": "Optimal Approach for Longest Substring with At Most Two Distinct Characters",
      "solutionMarkdown": "### Optimal Solution\n\nSliding window with frequency hash map. When len(map) > 2, remove leftmost characters until len(map) == 2.\n\n### Complexity\n- Time: O(N), Space: O(1)",
      "timeComplexity": "O(N)",
      "spaceComplexity": "O(1)"
    },
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0
  },
  {
    "title": "Longest Substring Without Repeating Characters",
    "slug": "longest-substring-without-repeating-characters",
    "description": "Given a string `s`, find the length of the **longest substring** without repeating characters.\n\n### Example 1:\n```\nInput: abcabcbb\nOutput: 3\nExplanation: The answer is 'abc', with length 3.\n```\n\n### Example 2:\n```\nInput: bbbbb\nOutput: 1\nExplanation: The answer is 'b', with length 1.\n```",
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
        "boilerplate": "def longestSubstringWithoutRepeatingCharacters(*args):\n    # TODO: Implement solution for Longest Substring Without Repeating Characters\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = longestSubstringWithoutRepeatingCharacters(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(longestSubstringWithoutRepeatingCharacters(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function longestSubstringWithoutRepeatingCharacters(...args) {\n    // TODO: Implement solution for Longest Substring Without Repeating Characters\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(longestSubstringWithoutRepeatingCharacters(...parsed)));\n    } catch (e) {\n        console.log(longestSubstringWithoutRepeatingCharacters(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Longest Substring Without Repeating Characters\n        string line;\n        while (getline(cin, line)) {\n            cout << line << endl;\n        }\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        String line;\n        while ((line = br.readLine()) != null) {\n            // TODO: Implement solution for Longest Substring Without Repeating Characters\n            System.out.println(line);\n        }\n    }\n}\n"
      }
    ],
    "sampleTestCases": [
      {
        "input": "abcabcbb",
        "output": "3",
        "explanation": "The answer is 'abc', with length 3."
      },
      {
        "input": "bbbbb",
        "output": "1",
        "explanation": "The answer is 'b', with length 1."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "abcabcbb",
        "output": "3",
        "isHidden": true
      },
      {
        "input": "bbbbb",
        "output": "1",
        "isHidden": true
      },
      {
        "input": "pwwkew",
        "output": "3",
        "isHidden": true
      },
      {
        "input": "",
        "output": "0",
        "isHidden": true
      },
      {
        "input": "dvdf",
        "output": "3",
        "isHidden": true
      }
    ],
    "hints": [
      "Use a dynamic sliding window [left, right] with last seen index map."
    ],
    "editorial": {
      "approach": "Optimal Approach for Longest Substring Without Repeating Characters",
      "solutionMarkdown": "### Optimal Solution\n\nTrack last seen positions of each char. Advance left pointer past previous occurrence.\n\n### Complexity\n- Time: O(N), Space: O(min(N, M)) where M is alphabet size",
      "timeComplexity": "O(N)",
      "spaceComplexity": "O(min(N"
    },
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0
  },
  {
    "title": "Lowest Common Ancestor of a Binary Tree",
    "slug": "lowest-common-ancestor-of-a-binary-tree",
    "description": "Given a binary tree, find the lowest common ancestor (LCA) of two given nodes `p` and `q`.\n\n### Example 1:\n```\nInput: [3,5,1,6,2,0,8,null,null,7,4]\n5\n1\nOutput: 3\nExplanation: The LCA of nodes 5 and 1 is 3.\n```\n\n### Example 2:\n```\nInput: [3,5,1,6,2,0,8,null,null,7,4]\n5\n4\nOutput: 5\nExplanation: The LCA of nodes 5 and 4 is 5, since a node can be a descendant of itself.\n```",
    "difficulty": "MEDIUM",
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
        "boilerplate": "def lowestCommonAncestorOfABinaryTree(*args):\n    # TODO: Implement solution for Lowest Common Ancestor of a Binary Tree\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = lowestCommonAncestorOfABinaryTree(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(lowestCommonAncestorOfABinaryTree(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function lowestCommonAncestorOfABinaryTree(...args) {\n    // TODO: Implement solution for Lowest Common Ancestor of a Binary Tree\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(lowestCommonAncestorOfABinaryTree(...parsed)));\n    } catch (e) {\n        console.log(lowestCommonAncestorOfABinaryTree(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Lowest Common Ancestor of a Binary Tree\n        string line;\n        while (getline(cin, line)) {\n            cout << line << endl;\n        }\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        String line;\n        while ((line = br.readLine()) != null) {\n            // TODO: Implement solution for Lowest Common Ancestor of a Binary Tree\n            System.out.println(line);\n        }\n    }\n}\n"
      }
    ],
    "sampleTestCases": [
      {
        "input": "[3,5,1,6,2,0,8,null,null,7,4]\n5\n1",
        "output": "3",
        "explanation": "The LCA of nodes 5 and 1 is 3."
      },
      {
        "input": "[3,5,1,6,2,0,8,null,null,7,4]\n5\n4",
        "output": "5",
        "explanation": "The LCA of nodes 5 and 4 is 5, since a node can be a descendant of itself."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "[3,5,1,6,2,0,8,null,null,7,4]\n5\n1",
        "output": "3",
        "isHidden": true
      },
      {
        "input": "[3,5,1,6,2,0,8,null,null,7,4]\n5\n4",
        "output": "5",
        "isHidden": true
      }
    ],
    "hints": [
      "If root is p or q or null return root. If both left and right recursion return non-null, root is LCA."
    ],
    "editorial": {
      "approach": "Optimal Approach for Lowest Common Ancestor of a Binary Tree",
      "solutionMarkdown": "### Optimal Solution\n\nPost-order DFS returning matching nodes. If both subtrees return targets, current node is LCA.\n\n### Complexity\n- Time: O(N), Space: O(H)",
      "timeComplexity": "O(N)",
      "spaceComplexity": "O(H)"
    },
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0
  },
  {
    "title": "Lowest Common Ancestor of a Binary Tree III",
    "slug": "lowest-common-ancestor-of-a-binary-tree-iii",
    "description": "Given two nodes of a binary tree `p` and `q`, return their **lowest common ancestor (LCA)**. In this problem, each node has a reference to its `parent` node.\n\n### Example 1:\n```\nInput: [3,5,1,6,2,0,8,null,null,7,4]\n5\n1\nOutput: 3\nExplanation: LCA of 5 and 1 is 3.\n```\n\n### Example 2:\n```\nInput: [3,5,1,6,2,0,8,null,null,7,4]\n5\n4\nOutput: 5\nExplanation: LCA of 5 and 4 is 5.\n```",
    "difficulty": "MEDIUM",
    "category": "DSA",
    "patterns": [
      "Tree",
      "Hash Table",
      "Two Pointers"
    ],
    "topics": [
      "Tree",
      "Hash Table",
      "Two Pointers"
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
        "boilerplate": "def lowestCommonAncestorOfABinaryTreeIii(*args):\n    # TODO: Implement solution for Lowest Common Ancestor of a Binary Tree III\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = lowestCommonAncestorOfABinaryTreeIii(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(lowestCommonAncestorOfABinaryTreeIii(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function lowestCommonAncestorOfABinaryTreeIii(...args) {\n    // TODO: Implement solution for Lowest Common Ancestor of a Binary Tree III\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(lowestCommonAncestorOfABinaryTreeIii(...parsed)));\n    } catch (e) {\n        console.log(lowestCommonAncestorOfABinaryTreeIii(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Lowest Common Ancestor of a Binary Tree III\n        string line;\n        while (getline(cin, line)) {\n            cout << line << endl;\n        }\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        String line;\n        while ((line = br.readLine()) != null) {\n            // TODO: Implement solution for Lowest Common Ancestor of a Binary Tree III\n            System.out.println(line);\n        }\n    }\n}\n"
      }
    ],
    "sampleTestCases": [
      {
        "input": "[3,5,1,6,2,0,8,null,null,7,4]\n5\n1",
        "output": "3",
        "explanation": "LCA of 5 and 1 is 3."
      },
      {
        "input": "[3,5,1,6,2,0,8,null,null,7,4]\n5\n4",
        "output": "5",
        "explanation": "LCA of 5 and 4 is 5."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "[3,5,1,6,2,0,8,null,null,7,4]\n5\n1",
        "output": "3",
        "isHidden": true
      },
      {
        "input": "[3,5,1,6,2,0,8,null,null,7,4]\n5\n4",
        "output": "5",
        "isHidden": true
      },
      {
        "input": "[1,2]\n1\n2",
        "output": "1",
        "isHidden": true
      }
    ],
    "hints": [
      "This is equivalent to finding the intersection of two linked lists using parent pointers."
    ],
    "editorial": {
      "approach": "Optimal Approach for Lowest Common Ancestor of a Binary Tree III",
      "solutionMarkdown": "### Optimal Solution\n\nTraverse upward: pointer a starts at p, pointer b starts at q. When reaching root, switch to the other node.\n\n### Complexity\n- Time: O(H), Space: O(1)",
      "timeComplexity": "O(H)",
      "spaceComplexity": "O(1)"
    },
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0
  },
  {
    "title": "Lowest Common Ancestor of a Binary Search Tree",
    "slug": "lowest-common-ancestor-of-a-bst",
    "description": "Given a binary search tree (BST), find the lowest common ancestor (LCA) node of two given nodes `p` and `q`.\n\n### Example 1:\n```\nInput: [6,2,8,0,4,7,9,null,null,3,5]\n2\n8\nOutput: 6\nExplanation: LCA of nodes 2 and 8 is 6.\n```\n\n### Example 2:\n```\nInput: [6,2,8,0,4,7,9,null,null,3,5]\n2\n4\nOutput: 2\nExplanation: LCA of nodes 2 and 4 is 2.\n```",
    "difficulty": "MEDIUM",
    "category": "DSA",
    "patterns": [
      "Tree",
      "Binary Search Tree",
      "Depth-First Search",
      "Binary Tree"
    ],
    "topics": [
      "Tree",
      "Binary Search Tree",
      "Depth-First Search",
      "Binary Tree"
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
        "boilerplate": "def lowestCommonAncestorOfABst(*args):\n    # TODO: Implement solution for Lowest Common Ancestor of a Binary Search Tree\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = lowestCommonAncestorOfABst(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(lowestCommonAncestorOfABst(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function lowestCommonAncestorOfABst(...args) {\n    // TODO: Implement solution for Lowest Common Ancestor of a Binary Search Tree\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(lowestCommonAncestorOfABst(...parsed)));\n    } catch (e) {\n        console.log(lowestCommonAncestorOfABst(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Lowest Common Ancestor of a Binary Search Tree\n        string line;\n        while (getline(cin, line)) {\n            cout << line << endl;\n        }\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        String line;\n        while ((line = br.readLine()) != null) {\n            // TODO: Implement solution for Lowest Common Ancestor of a Binary Search Tree\n            System.out.println(line);\n        }\n    }\n}\n"
      }
    ],
    "sampleTestCases": [
      {
        "input": "[6,2,8,0,4,7,9,null,null,3,5]\n2\n8",
        "output": "6",
        "explanation": "LCA of nodes 2 and 8 is 6."
      },
      {
        "input": "[6,2,8,0,4,7,9,null,null,3,5]\n2\n4",
        "output": "2",
        "explanation": "LCA of nodes 2 and 4 is 2."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "[6,2,8,0,4,7,9,null,null,3,5]\n2\n8",
        "output": "6",
        "isHidden": true
      },
      {
        "input": "[6,2,8,0,4,7,9,null,null,3,5]\n2\n4",
        "output": "2",
        "isHidden": true
      },
      {
        "input": "[2,1]\n2\n1",
        "output": "2",
        "isHidden": true
      }
    ],
    "hints": [
      "Leverage BST ordering: if both values are smaller, go left; if both larger, go right; else split."
    ],
    "editorial": {
      "approach": "Optimal Approach for Lowest Common Ancestor of a Binary Search Tree",
      "solutionMarkdown": "### Optimal Solution\n\nIf p and q are on opposite sides of root (or one equals root), root is the LCA.\n\n### Complexity\n- Time: O(H), Space: O(1)",
      "timeComplexity": "O(H)",
      "spaceComplexity": "O(1)"
    },
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0
  },
  {
    "title": "LRU Cache",
    "slug": "lru-cache",
    "description": "Design a data structure that follows the constraints of a **Least Recently Used (LRU) cache**.\n\nImplement the `LRUCache` class with `get(key)` and `put(key, value)` both running in `O(1)` average time complexity.\n\n### Example 1:\n```\nInput: [\"LRUCache\",\"put\",\"put\",\"get\",\"put\",\"get\",\"put\",\"get\",\"get\",\"get\"]\n[[2],[1,1],[2,2],[1],[3,3],[2],[4,4],[1],[3],[4]]\nOutput: [null, null, null, 1, null, -1, null, -1, 3, 4]\nExplanation: Key 2 evicted when key 3 is added; key 1 evicted when key 4 is added.\n```\n\n### Example 2:\n```\nInput: [\"LRUCache\",\"put\",\"get\"]\n[[1],[2,1],[2]]\nOutput: [null, null, 1]\nExplanation: Single capacity LRU.\n```",
    "difficulty": "MEDIUM",
    "category": "DSA",
    "patterns": [
      "Hash Table",
      "Doubly Linked List",
      "Design"
    ],
    "topics": [
      "Hash Table",
      "Doubly Linked List",
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
        "boilerplate": "def lruCache(*args):\n    # TODO: Implement solution for LRU Cache\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = lruCache(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(lruCache(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function lruCache(...args) {\n    // TODO: Implement solution for LRU Cache\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(lruCache(...parsed)));\n    } catch (e) {\n        console.log(lruCache(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for LRU Cache\n        string line;\n        while (getline(cin, line)) {\n            cout << line << endl;\n        }\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        String line;\n        while ((line = br.readLine()) != null) {\n            // TODO: Implement solution for LRU Cache\n            System.out.println(line);\n        }\n    }\n}\n"
      }
    ],
    "sampleTestCases": [
      {
        "input": "[\"LRUCache\",\"put\",\"put\",\"get\",\"put\",\"get\",\"put\",\"get\",\"get\",\"get\"]\n[[2],[1,1],[2,2],[1],[3,3],[2],[4,4],[1],[3],[4]]",
        "output": "[null, null, null, 1, null, -1, null, -1, 3, 4]",
        "explanation": "Key 2 evicted when key 3 is added; key 1 evicted when key 4 is added."
      },
      {
        "input": "[\"LRUCache\",\"put\",\"get\"]\n[[1],[2,1],[2]]",
        "output": "[null, null, 1]",
        "explanation": "Single capacity LRU."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "[\"LRUCache\",\"put\",\"put\",\"get\",\"put\",\"get\",\"put\",\"get\",\"get\",\"get\"]\n[[2],[1,1],[2,2],[1],[3,3],[2],[4,4],[1],[3],[4]]",
        "output": "[null, null, null, 1, null, -1, null, -1, 3, 4]",
        "isHidden": true
      }
    ],
    "hints": [
      "Combine a Hash Map with a Doubly Linked List with dummy head and tail."
    ],
    "editorial": {
      "approach": "Optimal Approach for LRU Cache",
      "solutionMarkdown": "### Optimal Solution\n\nHash map maps keys to DLL nodes. Accessing moves node to head; eviction removes node from tail.\n\n### Complexity\n- Time: O(1) for both get and put, Space: O(capacity)",
      "timeComplexity": "O(1) for both get and put",
      "spaceComplexity": "O(capacity)"
    },
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0
  },
  {
    "title": "Majority Element",
    "slug": "majority-element",
    "description": "Given an array `nums` of size `n`, return *the majority element*. The majority element is the element that appears more than `\u230an / 2\u230b` times.\n\n### Example 1:\n```\nInput: [3,2,3]\nOutput: 3\nExplanation: 3 appears 2 times (> 3/2).\n```\n\n### Example 2:\n```\nInput: [2,2,1,1,1,2,2]\nOutput: 2\nExplanation: 2 appears 4 times (> 7/2).\n```",
    "difficulty": "EASY",
    "category": "DSA",
    "patterns": [
      "Array",
      "Hash Table",
      "Divide and Conquer",
      "Counting"
    ],
    "topics": [
      "Array",
      "Hash Table",
      "Divide and Conquer",
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
        "boilerplate": "def majorityElement(*args):\n    # TODO: Implement solution for Majority Element\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = majorityElement(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(majorityElement(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function majorityElement(...args) {\n    // TODO: Implement solution for Majority Element\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(majorityElement(...parsed)));\n    } catch (e) {\n        console.log(majorityElement(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Majority Element\n        string line;\n        while (getline(cin, line)) {\n            cout << line << endl;\n        }\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        String line;\n        while ((line = br.readLine()) != null) {\n            // TODO: Implement solution for Majority Element\n            System.out.println(line);\n        }\n    }\n}\n"
      }
    ],
    "sampleTestCases": [
      {
        "input": "[3,2,3]",
        "output": "3",
        "explanation": "3 appears 2 times (> 3/2)."
      },
      {
        "input": "[2,2,1,1,1,2,2]",
        "output": "2",
        "explanation": "2 appears 4 times (> 7/2)."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "[3,2,3]",
        "output": "3",
        "isHidden": true
      },
      {
        "input": "[2,2,1,1,1,2,2]",
        "output": "2",
        "isHidden": true
      },
      {
        "input": "[1]",
        "output": "1",
        "isHidden": true
      }
    ],
    "hints": [
      "Boyer-Moore Voting Algorithm achieves O(N) time and O(1) space."
    ],
    "editorial": {
      "approach": "Optimal Approach for Majority Element",
      "solutionMarkdown": "### Optimal Solution\n\nMaintain candidate and count. Increment count if current matches candidate, else decrement.\n\n### Complexity\n- Time: O(N), Space: O(1)",
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
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Making A Large Island\n        string line;\n        while (getline(cin, line)) {\n            cout << line << endl;\n        }\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        String line;\n        while ((line = br.readLine()) != null) {\n            // TODO: Implement solution for Making A Large Island\n            System.out.println(line);\n        }\n    }\n}\n"
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
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Max Area of Island\n        string line;\n        while (getline(cin, line)) {\n            cout << line << endl;\n        }\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        String line;\n        while ((line = br.readLine()) != null) {\n            // TODO: Implement solution for Max Area of Island\n            System.out.println(line);\n        }\n    }\n}\n"
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
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Max Consecutive Ones III\n        string line;\n        while (getline(cin, line)) {\n            cout << line << endl;\n        }\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        String line;\n        while ((line = br.readLine()) != null) {\n            // TODO: Implement solution for Max Consecutive Ones III\n            System.out.println(line);\n        }\n    }\n}\n"
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
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Maximal Rectangle\n        string line;\n        while (getline(cin, line)) {\n            cout << line << endl;\n        }\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        String line;\n        while ((line = br.readLine()) != null) {\n            // TODO: Implement solution for Maximal Rectangle\n            System.out.println(line);\n        }\n    }\n}\n"
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
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Maximum Depth of Binary Tree\n        string line;\n        while (getline(cin, line)) {\n            cout << line << endl;\n        }\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        String line;\n        while ((line = br.readLine()) != null) {\n            // TODO: Implement solution for Maximum Depth of Binary Tree\n            System.out.println(line);\n        }\n    }\n}\n"
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
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Maximum Level Sum of a Binary Tree\n        string line;\n        while (getline(cin, line)) {\n            cout << line << endl;\n        }\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        String line;\n        while ((line = br.readLine()) != null) {\n            // TODO: Implement solution for Maximum Level Sum of a Binary Tree\n            System.out.println(line);\n        }\n    }\n}\n"
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
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Maximum Points Coverage with a Rectangle\n        string line;\n        while (getline(cin, line)) {\n            cout << line << endl;\n        }\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        String line;\n        while ((line = br.readLine()) != null) {\n            // TODO: Implement solution for Maximum Points Coverage with a Rectangle\n            System.out.println(line);\n        }\n    }\n}\n"
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
  }
];
