/* eslint-disable */
// Auto-generated Apple Interview Catalog - 100 DSA/CP/DP Problems
export const apple76_100 = [
  {
  "title": "Add Two Numbers",
  "slug": "add-two-numbers",
  "description": "You are given two **non-empty** linked lists representing two non-negative integers. The digits are stored in **reverse order**, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.\n\n### Example 1:\n```\nInput: [2,4,3]\n[5,6,4]\nOutput: [7, 0, 8]\nExplanation: 342 + 465 = 807.\n```\n\n### Example 2:\n```\nInput: [0]\n[0]\nOutput: [0]\nExplanation: 0 + 0 = 0.\n```",
  "difficulty": "MEDIUM",
  "category": "DSA",
  "patterns": [
    "Linked List",
    "Math"
  ],
  "topics": [
    "Linked List",
    "Math"
  ],
  "companyTags": [
    {
      "company": "Apple",
      "yearReported": 2025,
      "verified": true,
      "frequencyCount": 47,
      "sourceNote": "Apple Practice Bank #76"
    }
  ],
  "supportedLanguages": [
    "python",
    "javascript",
    "cpp",
    "java"
  ],
  "starterCode": [
    {
      "language": "python",
      "boilerplate": "def addTwoNumbers(*args):\n    # TODO: Implement solution for Add Two Numbers\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = addTwoNumbers(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(addTwoNumbers(*input_data))\n"
    },
    {
      "language": "javascript",
      "boilerplate": "function addTwoNumbers(...args) {\n    // TODO: Implement solution for Add Two Numbers\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try {\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(addTwoNumbers(...parsed)));\n    } catch (e) {\n        console.log(addTwoNumbers(...lines));\n    }\n}\n"
    },
    {
      "language": "cpp",
      "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\n// Solution for Add Two Numbers\nclass Solution {\npublic:\n    void solve() {\n        // Write your solution here\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    // Driver reading from standard input\n    string line;\n    while (getline(cin, line)) {\n        if (!line.empty()) {\n            // Process input line\n        }\n    }\n    return 0;\n}\n"
    },
    {
      "language": "java",
      "boilerplate": "import java.util.*;\n\npublic class Solution {\n    // Solution for Add Two Numbers\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        while (sc.hasNextLine()) {\n            String line = sc.nextLine();\n            if (!line.trim().isEmpty()) {\n                // Process testcase line\n            }\n        }\n        sc.close();\n    }\n}\n"
    }
  ],
  "sampleTestCases": [
    {
      "input": "[2,4,3]\n[5,6,4]",
      "output": "[7, 0, 8]",
      "explanation": "342 + 465 = 807."
    },
    {
      "input": "[0]\n[0]",
      "output": "[0]",
      "explanation": "0 + 0 = 0."
    }
  ],
  "hiddenTestCases": [
    {
      "input": "[2,4,3]\n[5,6,4]",
      "expectedOutput": "[7, 0, 8]",
      "weight": 1
    },
    {
      "input": "[9,9,9,9,9,9,9]\n[9,9,9,9]",
      "expectedOutput": "[8, 9, 9, 9, 0, 0, 0, 1]",
      "weight": 1
    }
  ],
  "timeLimitMs": 2000,
  "memoryLimitMb": 256,
  "hints": [
    "Simulate digit by digit addition with a carry variable."
  ],
  "editorial": {
    "solutionMarkdown": "### Optimal Solution\nIterate both lists simultaneously while l1 or l2 or carry > 0. Link sum % 10 and propagate sum // 10.",
    "complexityAnalysis": "Time: O(max(N, M)), Space: O(max(N, M))"
  },
  "isGlobal": true,
  "status": "PUBLISHED"
},
  {
  "title": "Reorder List",
  "slug": "reorder-list",
  "description": "You are given the head of a singly linked-list: `L0 -> L1 -> ... -> Ln - 1 -> Ln`. Reorder the list to be on the following form: `L0 -> Ln -> L1 -> Ln - 1 -> L2 -> Ln - 2 -> ...` in-place.\n\n### Example 1:\n```\nInput: [1,2,3,4]\nOutput: [1, 4, 2, 3]\nExplanation: List reordered from ends inward.\n```\n\n### Example 2:\n```\nInput: [1,2,3,4,5]\nOutput: [1, 5, 2, 4, 3]\nExplanation: 5-node list reordered.\n```",
  "difficulty": "MEDIUM",
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
      "frequencyCount": 38,
      "sourceNote": "Apple Practice Bank #77"
    }
  ],
  "supportedLanguages": [
    "python",
    "javascript",
    "cpp",
    "java"
  ],
  "starterCode": [
    {
      "language": "python",
      "boilerplate": "def reorderList(*args):\n    # TODO: Implement solution for Reorder List\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = reorderList(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(reorderList(*input_data))\n"
    },
    {
      "language": "javascript",
      "boilerplate": "function reorderList(...args) {\n    // TODO: Implement solution for Reorder List\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try {\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(reorderList(...parsed)));\n    } catch (e) {\n        console.log(reorderList(...lines));\n    }\n}\n"
    },
    {
      "language": "cpp",
      "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\n// Solution for Reorder List\nclass Solution {\npublic:\n    void solve() {\n        // Write your solution here\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    // Driver reading from standard input\n    string line;\n    while (getline(cin, line)) {\n        if (!line.empty()) {\n            // Process input line\n        }\n    }\n    return 0;\n}\n"
    },
    {
      "language": "java",
      "boilerplate": "import java.util.*;\n\npublic class Solution {\n    // Solution for Reorder List\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        while (sc.hasNextLine()) {\n            String line = sc.nextLine();\n            if (!line.trim().isEmpty()) {\n                // Process testcase line\n            }\n        }\n        sc.close();\n    }\n}\n"
    }
  ],
  "sampleTestCases": [
    {
      "input": "[1,2,3,4]",
      "output": "[1, 4, 2, 3]",
      "explanation": "List reordered from ends inward."
    },
    {
      "input": "[1,2,3,4,5]",
      "output": "[1, 5, 2, 4, 3]",
      "explanation": "5-node list reordered."
    }
  ],
  "hiddenTestCases": [
    {
      "input": "[1,2,3,4]",
      "expectedOutput": "[1, 4, 2, 3]",
      "weight": 1
    },
    {
      "input": "[1,2,3,4,5]",
      "expectedOutput": "[1, 5, 2, 4, 3]",
      "weight": 1
    },
    {
      "input": "[1]",
      "expectedOutput": "[1]",
      "weight": 1
    }
  ],
  "timeLimitMs": 2000,
  "memoryLimitMb": 256,
  "hints": [
    "1. Find middle with slow/fast. 2. Reverse second half. 3. Merge two halves alternatingly."
  ],
  "editorial": {
    "solutionMarkdown": "### Optimal Solution\nThree-step in-place transformation: middle finding, reversal of second half, and interweaving merge.",
    "complexityAnalysis": "Time: O(N), Space: O(1)"
  },
  "isGlobal": true,
  "status": "PUBLISHED"
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
      "sourceNote": "Apple Practice Bank #78"
    }
  ],
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
      "boilerplate": "function validAnagram(...args) {\n    // TODO: Implement solution for Valid Anagram\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try {\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(validAnagram(...parsed)));\n    } catch (e) {\n        console.log(validAnagram(...lines));\n    }\n}\n"
    },
    {
      "language": "cpp",
      "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\n// Solution for Valid Anagram\nclass Solution {\npublic:\n    void solve() {\n        // Write your solution here\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    // Driver reading from standard input\n    string line;\n    while (getline(cin, line)) {\n        if (!line.empty()) {\n            // Process input line\n        }\n    }\n    return 0;\n}\n"
    },
    {
      "language": "java",
      "boilerplate": "import java.util.*;\n\npublic class Solution {\n    // Solution for Valid Anagram\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        while (sc.hasNextLine()) {\n            String line = sc.nextLine();\n            if (!line.trim().isEmpty()) {\n                // Process testcase line\n            }\n        }\n        sc.close();\n    }\n}\n"
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
      "expectedOutput": "true",
      "weight": 1
    },
    {
      "input": "rat\ncar",
      "expectedOutput": "false",
      "weight": 1
    },
    {
      "input": "a\nab",
      "expectedOutput": "false",
      "weight": 1
    }
  ],
  "timeLimitMs": 2000,
  "memoryLimitMb": 256,
  "hints": [
    "Count character frequencies using an array of size 26 or a hash map."
  ],
  "editorial": {
    "solutionMarkdown": "### Optimal Solution\nCompare 26-character frequency histograms or hash maps.",
    "complexityAnalysis": "Time: O(N), Space: O(1) for fixed alphabet"
  },
  "isGlobal": true,
  "status": "PUBLISHED"
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
      "frequencyCount": 49,
      "sourceNote": "Apple Practice Bank #79"
    }
  ],
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
      "boilerplate": "function minimumWindowSubstring(...args) {\n    // TODO: Implement solution for Minimum Window Substring\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try {\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(minimumWindowSubstring(...parsed)));\n    } catch (e) {\n        console.log(minimumWindowSubstring(...lines));\n    }\n}\n"
    },
    {
      "language": "cpp",
      "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\n// Solution for Minimum Window Substring\nclass Solution {\npublic:\n    void solve() {\n        // Write your solution here\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    // Driver reading from standard input\n    string line;\n    while (getline(cin, line)) {\n        if (!line.empty()) {\n            // Process input line\n        }\n    }\n    return 0;\n}\n"
    },
    {
      "language": "java",
      "boilerplate": "import java.util.*;\n\npublic class Solution {\n    // Solution for Minimum Window Substring\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        while (sc.hasNextLine()) {\n            String line = sc.nextLine();\n            if (!line.trim().isEmpty()) {\n                // Process testcase line\n            }\n        }\n        sc.close();\n    }\n}\n"
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
      "expectedOutput": "\"BANC\"",
      "weight": 1
    },
    {
      "input": "a\na",
      "expectedOutput": "\"a\"",
      "weight": 1
    },
    {
      "input": "a\naa",
      "expectedOutput": "\"\"",
      "weight": 1
    }
  ],
  "timeLimitMs": 2000,
  "memoryLimitMb": 256,
  "hints": [
    "Sliding window with target count map and have/need match counter."
  ],
  "editorial": {
    "solutionMarkdown": "### Optimal Solution\nExpand right until window is valid (have == need). Contract left to find minimal valid length.",
    "complexityAnalysis": "Time: O(M + N), Space: O(1) alphabet size"
  },
  "isGlobal": true,
  "status": "PUBLISHED"
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
      "frequencyCount": 39,
      "sourceNote": "Apple Practice Bank #80"
    }
  ],
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
      "boilerplate": "function permutationInString(...args) {\n    // TODO: Implement solution for Permutation in String\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try {\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(permutationInString(...parsed)));\n    } catch (e) {\n        console.log(permutationInString(...lines));\n    }\n}\n"
    },
    {
      "language": "cpp",
      "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\n// Solution for Permutation in String\nclass Solution {\npublic:\n    void solve() {\n        // Write your solution here\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    // Driver reading from standard input\n    string line;\n    while (getline(cin, line)) {\n        if (!line.empty()) {\n            // Process input line\n        }\n    }\n    return 0;\n}\n"
    },
    {
      "language": "java",
      "boilerplate": "import java.util.*;\n\npublic class Solution {\n    // Solution for Permutation in String\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        while (sc.hasNextLine()) {\n            String line = sc.nextLine();\n            if (!line.trim().isEmpty()) {\n                // Process testcase line\n            }\n        }\n        sc.close();\n    }\n}\n"
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
      "expectedOutput": "true",
      "weight": 1
    },
    {
      "input": "ab\neidboaoo",
      "expectedOutput": "false",
      "weight": 1
    },
    {
      "input": "adc\ndcda",
      "expectedOutput": "true",
      "weight": 1
    }
  ],
  "timeLimitMs": 2000,
  "memoryLimitMb": 256,
  "hints": [
    "Maintain a fixed sliding window of size len(s1) and compare character frequency arrays."
  ],
  "editorial": {
    "solutionMarkdown": "### Optimal Solution\nRolling frequency vector of size 26 across window of length len(s1).",
    "complexityAnalysis": "Time: O(N), Space: O(1)"
  },
  "isGlobal": true,
  "status": "PUBLISHED"
},
  {
  "title": "Find All Anagrams in a String",
  "slug": "find-all-anagrams-in-a-string",
  "description": "Given two strings `s` and `p`, return *an array of all the start indices of `p`'s **anagrams** in `s`*.\n\n### Example 1:\n```\nInput: cbaebabacd\nabc\nOutput: [0, 6]\nExplanation: The substrings with start index = 0 is 'cba', and at index = 6 is 'bac'.\n```\n\n### Example 2:\n```\nInput: abab\nab\nOutput: [0, 1, 2]\nExplanation: Substrings at 0, 1, 2 are anagrams.\n```",
  "difficulty": "MEDIUM",
  "category": "DSA",
  "patterns": [
    "Sliding Window",
    "Hash Table"
  ],
  "topics": [
    "Sliding Window",
    "Hash Table"
  ],
  "companyTags": [
    {
      "company": "Apple",
      "yearReported": 2025,
      "verified": true,
      "frequencyCount": 41,
      "sourceNote": "Apple Practice Bank #81"
    }
  ],
  "supportedLanguages": [
    "python",
    "javascript",
    "cpp",
    "java"
  ],
  "starterCode": [
    {
      "language": "python",
      "boilerplate": "def findAllAnagramsInAString(*args):\n    # TODO: Implement solution for Find All Anagrams in a String\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = findAllAnagramsInAString(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(findAllAnagramsInAString(*input_data))\n"
    },
    {
      "language": "javascript",
      "boilerplate": "function findAllAnagramsInAString(...args) {\n    // TODO: Implement solution for Find All Anagrams in a String\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try {\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(findAllAnagramsInAString(...parsed)));\n    } catch (e) {\n        console.log(findAllAnagramsInAString(...lines));\n    }\n}\n"
    },
    {
      "language": "cpp",
      "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\n// Solution for Find All Anagrams in a String\nclass Solution {\npublic:\n    void solve() {\n        // Write your solution here\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    // Driver reading from standard input\n    string line;\n    while (getline(cin, line)) {\n        if (!line.empty()) {\n            // Process input line\n        }\n    }\n    return 0;\n}\n"
    },
    {
      "language": "java",
      "boilerplate": "import java.util.*;\n\npublic class Solution {\n    // Solution for Find All Anagrams in a String\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        while (sc.hasNextLine()) {\n            String line = sc.nextLine();\n            if (!line.trim().isEmpty()) {\n                // Process testcase line\n            }\n        }\n        sc.close();\n    }\n}\n"
    }
  ],
  "sampleTestCases": [
    {
      "input": "cbaebabacd\nabc",
      "output": "[0, 6]",
      "explanation": "The substrings with start index = 0 is 'cba', and at index = 6 is 'bac'."
    },
    {
      "input": "abab\nab",
      "output": "[0, 1, 2]",
      "explanation": "Substrings at 0, 1, 2 are anagrams."
    }
  ],
  "hiddenTestCases": [
    {
      "input": "cbaebabacd\nabc",
      "expectedOutput": "[0, 6]",
      "weight": 1
    },
    {
      "input": "abab\nab",
      "expectedOutput": "[0, 1, 2]",
      "weight": 1
    }
  ],
  "timeLimitMs": 2000,
  "memoryLimitMb": 256,
  "hints": [
    "Sliding window of length len(p) tracking character matches."
  ],
  "editorial": {
    "solutionMarkdown": "### Optimal Solution\nMaintain frequency map comparison over fixed window of size len(p).",
    "complexityAnalysis": "Time: O(N), Space: O(1)"
  },
  "isGlobal": true,
  "status": "PUBLISHED"
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
      "frequencyCount": 47,
      "sourceNote": "Apple Practice Bank #82"
    }
  ],
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
      "boilerplate": "function subarraySumEqualsK(...args) {\n    // TODO: Implement solution for Subarray Sum Equals K\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try {\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(subarraySumEqualsK(...parsed)));\n    } catch (e) {\n        console.log(subarraySumEqualsK(...lines));\n    }\n}\n"
    },
    {
      "language": "cpp",
      "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\n// Solution for Subarray Sum Equals K\nclass Solution {\npublic:\n    void solve() {\n        // Write your solution here\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    // Driver reading from standard input\n    string line;\n    while (getline(cin, line)) {\n        if (!line.empty()) {\n            // Process input line\n        }\n    }\n    return 0;\n}\n"
    },
    {
      "language": "java",
      "boilerplate": "import java.util.*;\n\npublic class Solution {\n    // Solution for Subarray Sum Equals K\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        while (sc.hasNextLine()) {\n            String line = sc.nextLine();\n            if (!line.trim().isEmpty()) {\n                // Process testcase line\n            }\n        }\n        sc.close();\n    }\n}\n"
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
      "expectedOutput": "2",
      "weight": 1
    },
    {
      "input": "[1,2,3]\n3",
      "expectedOutput": "2",
      "weight": 1
    },
    {
      "input": "[1,-1,0]\n0",
      "expectedOutput": "3",
      "weight": 1
    }
  ],
  "timeLimitMs": 2000,
  "memoryLimitMb": 256,
  "hints": [
    "Track prefix sum frequencies in a hash map. Subarray sum(i, j) = pref[j] - pref[i-1] == k."
  ],
  "editorial": {
    "solutionMarkdown": "### Optimal Solution\nAt each index, count += pref_map.get(curr_sum - k, 0). Record curr_sum in map.",
    "complexityAnalysis": "Time: O(N), Space: O(N)"
  },
  "isGlobal": true,
  "status": "PUBLISHED"
},
  {
  "title": "3Sum",
  "slug": "3sum",
  "description": "Given an integer array nums, return all the triplets `[nums[i], nums[j], nums[k]]` such that `i != j`, `i != k`, and `j != k`, and `nums[i] + nums[j] + nums[k] == 0`. Notice that the solution set must not contain duplicate triplets.\n\n### Example 1:\n```\nInput: [-1,0,1,2,-1,-4]\nOutput: [[-1, -1, 2], [-1, 0, 1]]\nExplanation: Distinct triplets summing to 0.\n```\n\n### Example 2:\n```\nInput: [0,1,1]\nOutput: []\nExplanation: No triplet sums to 0.\n```",
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
      "frequencyCount": 52,
      "sourceNote": "Apple Practice Bank #83"
    }
  ],
  "supportedLanguages": [
    "python",
    "javascript",
    "cpp",
    "java"
  ],
  "starterCode": [
    {
      "language": "python",
      "boilerplate": "def 3sum(*args):\n    # TODO: Implement solution for 3Sum\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = 3sum(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(3sum(*input_data))\n"
    },
    {
      "language": "javascript",
      "boilerplate": "function 3sum(...args) {\n    // TODO: Implement solution for 3Sum\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try {\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(3sum(...parsed)));\n    } catch (e) {\n        console.log(3sum(...lines));\n    }\n}\n"
    },
    {
      "language": "cpp",
      "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\n// Solution for 3Sum\nclass Solution {\npublic:\n    void solve() {\n        // Write your solution here\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    // Driver reading from standard input\n    string line;\n    while (getline(cin, line)) {\n        if (!line.empty()) {\n            // Process input line\n        }\n    }\n    return 0;\n}\n"
    },
    {
      "language": "java",
      "boilerplate": "import java.util.*;\n\npublic class Solution {\n    // Solution for 3Sum\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        while (sc.hasNextLine()) {\n            String line = sc.nextLine();\n            if (!line.trim().isEmpty()) {\n                // Process testcase line\n            }\n        }\n        sc.close();\n    }\n}\n"
    }
  ],
  "sampleTestCases": [
    {
      "input": "[-1,0,1,2,-1,-4]",
      "output": "[[-1, -1, 2], [-1, 0, 1]]",
      "explanation": "Distinct triplets summing to 0."
    },
    {
      "input": "[0,1,1]",
      "output": "[]",
      "explanation": "No triplet sums to 0."
    }
  ],
  "hiddenTestCases": [
    {
      "input": "[-1,0,1,2,-1,-4]",
      "expectedOutput": "[[-1, -1, 2], [-1, 0, 1]]",
      "weight": 1
    },
    {
      "input": "[0,1,1]",
      "expectedOutput": "[]",
      "weight": 1
    },
    {
      "input": "[0,0,0]",
      "expectedOutput": "[[0, 0, 0]]",
      "weight": 1
    }
  ],
  "timeLimitMs": 2000,
  "memoryLimitMb": 256,
  "hints": [
    "Sort array. For each i, use two pointers left and right to find nums[left] + nums[right] == -nums[i]. Skip duplicates."
  ],
  "editorial": {
    "solutionMarkdown": "### Optimal Solution\nSort + two pointers. Skip adjacent duplicate values to avoid duplicate triplets.",
    "complexityAnalysis": "Time: O(N^2), Space: O(1) or O(N) for sorting"
  },
  "isGlobal": true,
  "status": "PUBLISHED"
},
  {
  "title": "Container With Most Water",
  "slug": "container-with-most-water",
  "description": "You are given an integer array `height` of length `n`. Find two lines that together with the x-axis form a container, such that the container contains the most water. Return the maximum amount of water a container can store.\n\n### Example 1:\n```\nInput: [1,8,6,2,5,4,8,3,7]\nOutput: 49\nExplanation: Max water between height[1]=8 and height[8]=7 is 7 * (8-1) = 49.\n```\n\n### Example 2:\n```\nInput: [1,1]\nOutput: 1\nExplanation: Area is 1 * 1 = 1.\n```",
  "difficulty": "MEDIUM",
  "category": "DSA",
  "patterns": [
    "Two Pointers",
    "Greedy",
    "Array"
  ],
  "topics": [
    "Two Pointers",
    "Greedy",
    "Array"
  ],
  "companyTags": [
    {
      "company": "Apple",
      "yearReported": 2025,
      "verified": true,
      "frequencyCount": 48,
      "sourceNote": "Apple Practice Bank #84"
    }
  ],
  "supportedLanguages": [
    "python",
    "javascript",
    "cpp",
    "java"
  ],
  "starterCode": [
    {
      "language": "python",
      "boilerplate": "def containerWithMostWater(*args):\n    # TODO: Implement solution for Container With Most Water\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = containerWithMostWater(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(containerWithMostWater(*input_data))\n"
    },
    {
      "language": "javascript",
      "boilerplate": "function containerWithMostWater(...args) {\n    // TODO: Implement solution for Container With Most Water\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try {\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(containerWithMostWater(...parsed)));\n    } catch (e) {\n        console.log(containerWithMostWater(...lines));\n    }\n}\n"
    },
    {
      "language": "cpp",
      "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\n// Solution for Container With Most Water\nclass Solution {\npublic:\n    void solve() {\n        // Write your solution here\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    // Driver reading from standard input\n    string line;\n    while (getline(cin, line)) {\n        if (!line.empty()) {\n            // Process input line\n        }\n    }\n    return 0;\n}\n"
    },
    {
      "language": "java",
      "boilerplate": "import java.util.*;\n\npublic class Solution {\n    // Solution for Container With Most Water\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        while (sc.hasNextLine()) {\n            String line = sc.nextLine();\n            if (!line.trim().isEmpty()) {\n                // Process testcase line\n            }\n        }\n        sc.close();\n    }\n}\n"
    }
  ],
  "sampleTestCases": [
    {
      "input": "[1,8,6,2,5,4,8,3,7]",
      "output": "49",
      "explanation": "Max water between height[1]=8 and height[8]=7 is 7 * (8-1) = 49."
    },
    {
      "input": "[1,1]",
      "output": "1",
      "explanation": "Area is 1 * 1 = 1."
    }
  ],
  "hiddenTestCases": [
    {
      "input": "[1,8,6,2,5,4,8,3,7]",
      "expectedOutput": "49",
      "weight": 1
    },
    {
      "input": "[1,1]",
      "expectedOutput": "1",
      "weight": 1
    },
    {
      "input": "[4,3,2,1,4]",
      "expectedOutput": "16",
      "weight": 1
    }
  ],
  "timeLimitMs": 2000,
  "memoryLimitMb": 256,
  "hints": [
    "Start pointers at ends: left=0, right=n-1. Move pointer with smaller height inward."
  ],
  "editorial": {
    "solutionMarkdown": "### Optimal Solution\nTwo pointer greedy inward search moving smaller bar.",
    "complexityAnalysis": "Time: O(N), Space: O(1)"
  },
  "isGlobal": true,
  "status": "PUBLISHED"
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
      "frequencyCount": 43,
      "sourceNote": "Apple Practice Bank #85"
    }
  ],
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
      "boilerplate": "function sortColors(...args) {\n    // TODO: Implement solution for Sort Colors\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try {\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(sortColors(...parsed)));\n    } catch (e) {\n        console.log(sortColors(...lines));\n    }\n}\n"
    },
    {
      "language": "cpp",
      "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\n// Solution for Sort Colors\nclass Solution {\npublic:\n    void solve() {\n        // Write your solution here\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    // Driver reading from standard input\n    string line;\n    while (getline(cin, line)) {\n        if (!line.empty()) {\n            // Process input line\n        }\n    }\n    return 0;\n}\n"
    },
    {
      "language": "java",
      "boilerplate": "import java.util.*;\n\npublic class Solution {\n    // Solution for Sort Colors\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        while (sc.hasNextLine()) {\n            String line = sc.nextLine();\n            if (!line.trim().isEmpty()) {\n                // Process testcase line\n            }\n        }\n        sc.close();\n    }\n}\n"
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
      "expectedOutput": "[0, 0, 1, 1, 2, 2]",
      "weight": 1
    },
    {
      "input": "[2,0,1]",
      "expectedOutput": "[0, 1, 2]",
      "weight": 1
    },
    {
      "input": "[0]",
      "expectedOutput": "[0]",
      "weight": 1
    }
  ],
  "timeLimitMs": 2000,
  "memoryLimitMb": 256,
  "hints": [
    "Dutch National Flag: three pointers low, mid, high. Swap 0 to low, 2 to high."
  ],
  "editorial": {
    "solutionMarkdown": "### Optimal Solution\nOne-pass three-way partitioning placing 0s at front and 2s at back.",
    "complexityAnalysis": "Time: O(N), Space: O(1)"
  },
  "isGlobal": true,
  "status": "PUBLISHED"
},
  {
  "title": "Daily Temperatures",
  "slug": "daily-temperatures",
  "description": "Given an array of integers `temperatures` represents the daily temperatures, return *an array `answer` such that `answer[i]` is the number of days you have to wait after the `i-th` day to get a warmer temperature*.\n\n### Example 1:\n```\nInput: [73,74,75,71,69,72,76,73]\nOutput: [1, 1, 4, 2, 1, 1, 0, 0]\nExplanation: Days until next warmer temperature.\n```\n\n### Example 2:\n```\nInput: [30,40,50,60]\nOutput: [1, 1, 1, 0]\nExplanation: Monotonically increasing temperatures.\n```",
  "difficulty": "MEDIUM",
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
      "sourceNote": "Apple Practice Bank #86 / #77"
    }
  ],
  "supportedLanguages": [
    "python",
    "javascript",
    "cpp",
    "java"
  ],
  "starterCode": [
    {
      "language": "python",
      "boilerplate": "def dailyTemperatures(*args):\n    # TODO: Implement solution for Daily Temperatures\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = dailyTemperatures(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(dailyTemperatures(*input_data))\n"
    },
    {
      "language": "javascript",
      "boilerplate": "function dailyTemperatures(...args) {\n    // TODO: Implement solution for Daily Temperatures\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try {\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(dailyTemperatures(...parsed)));\n    } catch (e) {\n        console.log(dailyTemperatures(...lines));\n    }\n}\n"
    },
    {
      "language": "cpp",
      "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\n// Solution for Daily Temperatures\nclass Solution {\npublic:\n    void solve() {\n        // Write your solution here\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    // Driver reading from standard input\n    string line;\n    while (getline(cin, line)) {\n        if (!line.empty()) {\n            // Process input line\n        }\n    }\n    return 0;\n}\n"
    },
    {
      "language": "java",
      "boilerplate": "import java.util.*;\n\npublic class Solution {\n    // Solution for Daily Temperatures\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        while (sc.hasNextLine()) {\n            String line = sc.nextLine();\n            if (!line.trim().isEmpty()) {\n                // Process testcase line\n            }\n        }\n        sc.close();\n    }\n}\n"
    }
  ],
  "sampleTestCases": [
    {
      "input": "[73,74,75,71,69,72,76,73]",
      "output": "[1, 1, 4, 2, 1, 1, 0, 0]",
      "explanation": "Days until next warmer temperature."
    },
    {
      "input": "[30,40,50,60]",
      "output": "[1, 1, 1, 0]",
      "explanation": "Monotonically increasing temperatures."
    }
  ],
  "hiddenTestCases": [
    {
      "input": "[73,74,75,71,69,72,76,73]",
      "expectedOutput": "[1, 1, 4, 2, 1, 1, 0, 0]",
      "weight": 1
    },
    {
      "input": "[30,40,50,60]",
      "expectedOutput": "[1, 1, 1, 0]",
      "weight": 1
    },
    {
      "input": "[30,60,90]",
      "expectedOutput": "[1, 1, 0]",
      "weight": 1
    }
  ],
  "timeLimitMs": 2000,
  "memoryLimitMb": 256,
  "hints": [
    "Monotonic Decreasing Stack storing day indices."
  ],
  "editorial": {
    "solutionMarkdown": "### Optimal Solution\nMaintain indices of unresolved cooler days on stack. Pop when warmer day is encountered.",
    "complexityAnalysis": "Time: O(N), Space: O(N)"
  },
  "isGlobal": true,
  "status": "PUBLISHED"
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
      "frequencyCount": 44,
      "sourceNote": "Apple Practice Bank #87"
    }
  ],
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
      "boilerplate": "function largestRectangleInHistogram(...args) {\n    // TODO: Implement solution for Largest Rectangle in Histogram\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try {\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(largestRectangleInHistogram(...parsed)));\n    } catch (e) {\n        console.log(largestRectangleInHistogram(...lines));\n    }\n}\n"
    },
    {
      "language": "cpp",
      "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\n// Solution for Largest Rectangle in Histogram\nclass Solution {\npublic:\n    void solve() {\n        // Write your solution here\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    // Driver reading from standard input\n    string line;\n    while (getline(cin, line)) {\n        if (!line.empty()) {\n            // Process input line\n        }\n    }\n    return 0;\n}\n"
    },
    {
      "language": "java",
      "boilerplate": "import java.util.*;\n\npublic class Solution {\n    // Solution for Largest Rectangle in Histogram\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        while (sc.hasNextLine()) {\n            String line = sc.nextLine();\n            if (!line.trim().isEmpty()) {\n                // Process testcase line\n            }\n        }\n        sc.close();\n    }\n}\n"
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
      "expectedOutput": "10",
      "weight": 1
    },
    {
      "input": "[2,4]",
      "expectedOutput": "4",
      "weight": 1
    },
    {
      "input": "[1]",
      "expectedOutput": "1",
      "weight": 1
    }
  ],
  "timeLimitMs": 2000,
  "memoryLimitMb": 256,
  "hints": [
    "Monotonic Increasing Stack of indices. When popping height h, width is right_boundary - left_boundary - 1."
  ],
  "editorial": {
    "solutionMarkdown": "### Optimal Solution\nMonotonic increasing stack computes left and right lower boundaries in linear time.",
    "complexityAnalysis": "Time: O(N), Space: O(N)"
  },
  "isGlobal": true,
  "status": "PUBLISHED"
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
      "frequencyCount": 46,
      "sourceNote": "Apple Practice Bank #88"
    }
  ],
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
      "boilerplate": "function minStack(...args) {\n    // TODO: Implement solution for Min Stack\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try {\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(minStack(...parsed)));\n    } catch (e) {\n        console.log(minStack(...lines));\n    }\n}\n"
    },
    {
      "language": "cpp",
      "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\n// Solution for Min Stack\nclass Solution {\npublic:\n    void solve() {\n        // Write your solution here\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    // Driver reading from standard input\n    string line;\n    while (getline(cin, line)) {\n        if (!line.empty()) {\n            // Process input line\n        }\n    }\n    return 0;\n}\n"
    },
    {
      "language": "java",
      "boilerplate": "import java.util.*;\n\npublic class Solution {\n    // Solution for Min Stack\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        while (sc.hasNextLine()) {\n            String line = sc.nextLine();\n            if (!line.trim().isEmpty()) {\n                // Process testcase line\n            }\n        }\n        sc.close();\n    }\n}\n"
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
      "expectedOutput": "[null, null, null, null, -3, null, 0, -2]",
      "weight": 1
    }
  ],
  "timeLimitMs": 2000,
  "memoryLimitMb": 256,
  "hints": [
    "Maintain an auxiliary min_stack storing minimum value at each depth."
  ],
  "editorial": {
    "solutionMarkdown": "### Optimal Solution\nPaired elements on stack (val, current_min) or secondary min_stack.",
    "complexityAnalysis": "Time: O(1) for all operations, Space: O(N)"
  },
  "isGlobal": true,
  "status": "PUBLISHED"
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
      "frequencyCount": 65,
      "sourceNote": "Apple Candidate Report S01 & S09"
    }
  ],
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
      "boilerplate": "function meetingRoomsIi(...args) {\n    // TODO: Implement solution for Meeting Rooms II\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try {\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(meetingRoomsIi(...parsed)));\n    } catch (e) {\n        console.log(meetingRoomsIi(...lines));\n    }\n}\n"
    },
    {
      "language": "cpp",
      "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\n// Solution for Meeting Rooms II\nclass Solution {\npublic:\n    void solve() {\n        // Write your solution here\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    // Driver reading from standard input\n    string line;\n    while (getline(cin, line)) {\n        if (!line.empty()) {\n            // Process input line\n        }\n    }\n    return 0;\n}\n"
    },
    {
      "language": "java",
      "boilerplate": "import java.util.*;\n\npublic class Solution {\n    // Solution for Meeting Rooms II\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        while (sc.hasNextLine()) {\n            String line = sc.nextLine();\n            if (!line.trim().isEmpty()) {\n                // Process testcase line\n            }\n        }\n        sc.close();\n    }\n}\n"
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
      "expectedOutput": "2",
      "weight": 1
    },
    {
      "input": "[[7,10],[2,4]]",
      "expectedOutput": "1",
      "weight": 1
    },
    {
      "input": "[[1,5],[8,9],[8,9]]",
      "expectedOutput": "2",
      "weight": 1
    }
  ],
  "timeLimitMs": 2000,
  "memoryLimitMb": 256,
  "hints": [
    "Sort intervals by start time. Use a Min-Heap of meeting end times."
  ],
  "editorial": {
    "solutionMarkdown": "### Optimal Solution\nMin-heap tracks earliest ending meeting. If current start >= heap root, room reused; else allocate new room.",
    "complexityAnalysis": "Time: O(N log N), Space: O(N)"
  },
  "isGlobal": true,
  "status": "PUBLISHED"
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
      "frequencyCount": 40,
      "sourceNote": "Apple Practice Bank #90"
    }
  ],
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
      "boilerplate": "function insertInterval(...args) {\n    // TODO: Implement solution for Insert Interval\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try {\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(insertInterval(...parsed)));\n    } catch (e) {\n        console.log(insertInterval(...lines));\n    }\n}\n"
    },
    {
      "language": "cpp",
      "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\n// Solution for Insert Interval\nclass Solution {\npublic:\n    void solve() {\n        // Write your solution here\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    // Driver reading from standard input\n    string line;\n    while (getline(cin, line)) {\n        if (!line.empty()) {\n            // Process input line\n        }\n    }\n    return 0;\n}\n"
    },
    {
      "language": "java",
      "boilerplate": "import java.util.*;\n\npublic class Solution {\n    // Solution for Insert Interval\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        while (sc.hasNextLine()) {\n            String line = sc.nextLine();\n            if (!line.trim().isEmpty()) {\n                // Process testcase line\n            }\n        }\n        sc.close();\n    }\n}\n"
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
      "expectedOutput": "[[1, 5], [6, 9]]",
      "weight": 1
    },
    {
      "input": "[[1,2],[3,5],[6,7],[8,10],[12,16]]\n[4,8]",
      "expectedOutput": "[[1, 2], [3, 10], [12, 16]]",
      "weight": 1
    },
    {
      "input": "[]\n[5,7]",
      "expectedOutput": "[[5, 7]]",
      "weight": 1
    }
  ],
  "timeLimitMs": 2000,
  "memoryLimitMb": 256,
  "hints": [
    "Three phases: 1. Add all intervals ending before newInterval. 2. Merge overlapping intervals. 3. Add remaining."
  ],
  "editorial": {
    "solutionMarkdown": "### Optimal Solution\nLinear scan partitioning into left disjoint, overlapping merge, and right disjoint sections.",
    "complexityAnalysis": "Time: O(N), Space: O(N)"
  },
  "isGlobal": true,
  "status": "PUBLISHED"
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
      "frequencyCount": 41,
      "sourceNote": "Apple Practice Bank #91"
    }
  ],
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
      "boilerplate": "function taskScheduler(...args) {\n    // TODO: Implement solution for Task Scheduler\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try {\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(taskScheduler(...parsed)));\n    } catch (e) {\n        console.log(taskScheduler(...lines));\n    }\n}\n"
    },
    {
      "language": "cpp",
      "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\n// Solution for Task Scheduler\nclass Solution {\npublic:\n    void solve() {\n        // Write your solution here\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    // Driver reading from standard input\n    string line;\n    while (getline(cin, line)) {\n        if (!line.empty()) {\n            // Process input line\n        }\n    }\n    return 0;\n}\n"
    },
    {
      "language": "java",
      "boilerplate": "import java.util.*;\n\npublic class Solution {\n    // Solution for Task Scheduler\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        while (sc.hasNextLine()) {\n            String line = sc.nextLine();\n            if (!line.trim().isEmpty()) {\n                // Process testcase line\n            }\n        }\n        sc.close();\n    }\n}\n"
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
      "expectedOutput": "8",
      "weight": 1
    },
    {
      "input": "[\"A\",\"A\",\"A\",\"B\",\"B\",\"B\"]\n0",
      "expectedOutput": "6",
      "weight": 1
    },
    {
      "input": "[\"A\",\"A\",\"A\",\"A\",\"A\",\"A\",\"B\",\"C\",\"D\",\"E\",\"F\",\"G\"]\n2",
      "expectedOutput": "16",
      "weight": 1
    }
  ],
  "timeLimitMs": 2000,
  "memoryLimitMb": 256,
  "hints": [
    "Formula based on most frequent task: max_time = max(len(tasks), (max_freq - 1) * (n + 1) + count_of_max_freq)."
  ],
  "editorial": {
    "solutionMarkdown": "### Optimal Solution\nGreedy formula: schedule most frequent task first with (max_freq - 1) chunks of size (n+1).",
    "complexityAnalysis": "Time: O(N), Space: O(1) 26 tasks"
  },
  "isGlobal": true,
  "status": "PUBLISHED"
},
  {
  "title": "Design Twitter",
  "slug": "design-twitter",
  "description": "Design a simplified version of Twitter where users can post tweets, follow/unfollow another user, and see the `10` most recent tweets in the user's news feed.\n\n### Example 1:\n```\nInput: [\"Twitter\",\"postTweet\",\"getNewsFeed\",\"follow\",\"postTweet\",\"getNewsFeed\",\"unfollow\",\"getNewsFeed\"]\n[[],[1,5],[1],[1,2],[2,6],[1],[1,2],[1]]\nOutput: [null, null, [5], null, null, [6, 5], null, [5]]\nExplanation: Newsfeed returns 10 most recent tweets across followed users.\n```\n\n### Example 2:\n```\nInput: [\"Twitter\",\"postTweet\",\"getNewsFeed\"]\n[[],[1,10],[1]]\nOutput: [null, null, [10]]\nExplanation: Single post.\n```",
  "difficulty": "MEDIUM",
  "category": "DSA",
  "patterns": [
    "Design",
    "Hash Table",
    "Heaps / Priority Queue"
  ],
  "topics": [
    "Design",
    "Hash Table",
    "Heaps / Priority Queue"
  ],
  "companyTags": [
    {
      "company": "Apple",
      "yearReported": 2025,
      "verified": true,
      "frequencyCount": 36,
      "sourceNote": "Apple Practice Bank #92"
    }
  ],
  "supportedLanguages": [
    "python",
    "javascript",
    "cpp",
    "java"
  ],
  "starterCode": [
    {
      "language": "python",
      "boilerplate": "def designTwitter(*args):\n    # TODO: Implement solution for Design Twitter\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = designTwitter(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(designTwitter(*input_data))\n"
    },
    {
      "language": "javascript",
      "boilerplate": "function designTwitter(...args) {\n    // TODO: Implement solution for Design Twitter\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try {\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(designTwitter(...parsed)));\n    } catch (e) {\n        console.log(designTwitter(...lines));\n    }\n}\n"
    },
    {
      "language": "cpp",
      "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\n// Solution for Design Twitter\nclass Solution {\npublic:\n    void solve() {\n        // Write your solution here\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    // Driver reading from standard input\n    string line;\n    while (getline(cin, line)) {\n        if (!line.empty()) {\n            // Process input line\n        }\n    }\n    return 0;\n}\n"
    },
    {
      "language": "java",
      "boilerplate": "import java.util.*;\n\npublic class Solution {\n    // Solution for Design Twitter\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        while (sc.hasNextLine()) {\n            String line = sc.nextLine();\n            if (!line.trim().isEmpty()) {\n                // Process testcase line\n            }\n        }\n        sc.close();\n    }\n}\n"
    }
  ],
  "sampleTestCases": [
    {
      "input": "[\"Twitter\",\"postTweet\",\"getNewsFeed\",\"follow\",\"postTweet\",\"getNewsFeed\",\"unfollow\",\"getNewsFeed\"]\n[[],[1,5],[1],[1,2],[2,6],[1],[1,2],[1]]",
      "output": "[null, null, [5], null, null, [6, 5], null, [5]]",
      "explanation": "Newsfeed returns 10 most recent tweets across followed users."
    },
    {
      "input": "[\"Twitter\",\"postTweet\",\"getNewsFeed\"]\n[[],[1,10],[1]]",
      "output": "[null, null, [10]]",
      "explanation": "Single post."
    }
  ],
  "hiddenTestCases": [
    {
      "input": "[\"Twitter\",\"postTweet\",\"getNewsFeed\",\"follow\",\"postTweet\",\"getNewsFeed\",\"unfollow\",\"getNewsFeed\"]\n[[],[1,5],[1],[1,2],[2,6],[1],[1,2],[1]]",
      "expectedOutput": "[null, null, [5], null, null, [6, 5], null, [5]]",
      "weight": 1
    }
  ],
  "timeLimitMs": 2000,
  "memoryLimitMb": 256,
  "hints": [
    "Map user to set of followees and list of tweets with timestamp. Use a Max-Heap to merge the top 10 tweets across all followees."
  ],
  "editorial": {
    "solutionMarkdown": "### Optimal Solution\nK-way merge of tweets from user's followees using a Priority Queue.",
    "complexityAnalysis": "Time: postTweet O(1), follow O(1), getNewsFeed O(F log F), Space: O(U + T)"
  },
  "isGlobal": true,
  "status": "PUBLISHED"
},
  {
  "title": "Find Median from Data Stream",
  "slug": "find-median-from-data-stream",
  "description": "The **median** is the middle value in an ordered integer list. Design a data structure that supports adding numbers from a data stream and finding the median of the current numbers in `O(1)` time.\n\n### Example 1:\n```\nInput: [\"MedianFinder\",\"addNum\",\"addNum\",\"findMedian\",\"addNum\",\"findMedian\"]\n[[],[1],[2],[],[3],[]]\nOutput: [null, null, null, 1.50000, null, 2.00000]\nExplanation: Medians computed dynamically.\n```\n\n### Example 2:\n```\nInput: [\"MedianFinder\",\"addNum\",\"findMedian\"]\n[[],[5],[]]\nOutput: [null, null, 5.00000]\nExplanation: Single element median.\n```",
  "difficulty": "HARD",
  "category": "DSA",
  "patterns": [
    "Two Heaps",
    "Heaps / Priority Queue",
    "Design"
  ],
  "topics": [
    "Two Heaps",
    "Heaps / Priority Queue",
    "Design"
  ],
  "companyTags": [
    {
      "company": "Apple",
      "yearReported": 2025,
      "verified": true,
      "frequencyCount": 54,
      "sourceNote": "Apple Practice Bank #93"
    }
  ],
  "supportedLanguages": [
    "python",
    "javascript",
    "cpp",
    "java"
  ],
  "starterCode": [
    {
      "language": "python",
      "boilerplate": "def findMedianFromDataStream(*args):\n    # TODO: Implement solution for Find Median from Data Stream\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = findMedianFromDataStream(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(findMedianFromDataStream(*input_data))\n"
    },
    {
      "language": "javascript",
      "boilerplate": "function findMedianFromDataStream(...args) {\n    // TODO: Implement solution for Find Median from Data Stream\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try {\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(findMedianFromDataStream(...parsed)));\n    } catch (e) {\n        console.log(findMedianFromDataStream(...lines));\n    }\n}\n"
    },
    {
      "language": "cpp",
      "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\n// Solution for Find Median from Data Stream\nclass Solution {\npublic:\n    void solve() {\n        // Write your solution here\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    // Driver reading from standard input\n    string line;\n    while (getline(cin, line)) {\n        if (!line.empty()) {\n            // Process input line\n        }\n    }\n    return 0;\n}\n"
    },
    {
      "language": "java",
      "boilerplate": "import java.util.*;\n\npublic class Solution {\n    // Solution for Find Median from Data Stream\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        while (sc.hasNextLine()) {\n            String line = sc.nextLine();\n            if (!line.trim().isEmpty()) {\n                // Process testcase line\n            }\n        }\n        sc.close();\n    }\n}\n"
    }
  ],
  "sampleTestCases": [
    {
      "input": "[\"MedianFinder\",\"addNum\",\"addNum\",\"findMedian\",\"addNum\",\"findMedian\"]\n[[],[1],[2],[],[3],[]]",
      "output": "[null, null, null, 1.50000, null, 2.00000]",
      "explanation": "Medians computed dynamically."
    },
    {
      "input": "[\"MedianFinder\",\"addNum\",\"findMedian\"]\n[[],[5],[]]",
      "output": "[null, null, 5.00000]",
      "explanation": "Single element median."
    }
  ],
  "hiddenTestCases": [
    {
      "input": "[\"MedianFinder\",\"addNum\",\"addNum\",\"findMedian\",\"addNum\",\"findMedian\"]\n[[],[1],[2],[],[3],[]]",
      "expectedOutput": "[null, null, null, 1.50000, null, 2.00000]",
      "weight": 1
    }
  ],
  "timeLimitMs": 2000,
  "memoryLimitMb": 256,
  "hints": [
    "Maintain two heaps: max-heap for lower half and min-heap for upper half."
  ],
  "editorial": {
    "solutionMarkdown": "### Optimal Solution\nBalance sizes so len(small) == len(large) or len(small) == len(large) + 1.",
    "complexityAnalysis": "Time: addNum O(log N), findMedian O(1), Space: O(N)"
  },
  "isGlobal": true,
  "status": "PUBLISHED"
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
      "frequencyCount": 47,
      "sourceNote": "Apple Practice Bank #94"
    }
  ],
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
      "boilerplate": "function implementTriePrefixTree(...args) {\n    // TODO: Implement solution for Implement Trie (Prefix Tree)\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try {\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(implementTriePrefixTree(...parsed)));\n    } catch (e) {\n        console.log(implementTriePrefixTree(...lines));\n    }\n}\n"
    },
    {
      "language": "cpp",
      "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\n// Solution for Implement Trie (Prefix Tree)\nclass Solution {\npublic:\n    void solve() {\n        // Write your solution here\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    // Driver reading from standard input\n    string line;\n    while (getline(cin, line)) {\n        if (!line.empty()) {\n            // Process input line\n        }\n    }\n    return 0;\n}\n"
    },
    {
      "language": "java",
      "boilerplate": "import java.util.*;\n\npublic class Solution {\n    // Solution for Implement Trie (Prefix Tree)\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        while (sc.hasNextLine()) {\n            String line = sc.nextLine();\n            if (!line.trim().isEmpty()) {\n                // Process testcase line\n            }\n        }\n        sc.close();\n    }\n}\n"
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
      "expectedOutput": "[null, null, true, false, true, null, true]",
      "weight": 1
    }
  ],
  "timeLimitMs": 2000,
  "memoryLimitMb": 256,
  "hints": [
    "Each TrieNode contains a dictionary or 26-size array of child nodes and an isEnd boolean."
  ],
  "editorial": {
    "solutionMarkdown": "### Optimal Solution\nTrie nodes store child maps and word termination flags. All three operations run in O(L).",
    "complexityAnalysis": "Time: O(L) where L is string length, Space: O(N * L * Alphabet)"
  },
  "isGlobal": true,
  "status": "PUBLISHED"
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
      "sourceNote": "Apple Practice Bank #95"
    }
  ],
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
      "boilerplate": "function wordSearchIi(...args) {\n    // TODO: Implement solution for Word Search II\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try {\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(wordSearchIi(...parsed)));\n    } catch (e) {\n        console.log(wordSearchIi(...lines));\n    }\n}\n"
    },
    {
      "language": "cpp",
      "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\n// Solution for Word Search II\nclass Solution {\npublic:\n    void solve() {\n        // Write your solution here\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    // Driver reading from standard input\n    string line;\n    while (getline(cin, line)) {\n        if (!line.empty()) {\n            // Process input line\n        }\n    }\n    return 0;\n}\n"
    },
    {
      "language": "java",
      "boilerplate": "import java.util.*;\n\npublic class Solution {\n    // Solution for Word Search II\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        while (sc.hasNextLine()) {\n            String line = sc.nextLine();\n            if (!line.trim().isEmpty()) {\n                // Process testcase line\n            }\n        }\n        sc.close();\n    }\n}\n"
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
      "expectedOutput": "[\"eat\", \"oath\"]",
      "weight": 1
    },
    {
      "input": "[[\"a\",\"b\"],[\"c\",\"d\"]]\n[\"abcb\"]",
      "expectedOutput": "[]",
      "weight": 1
    }
  ],
  "timeLimitMs": 2000,
  "memoryLimitMb": 256,
  "hints": [
    "Insert all words into a Prefix Trie, then run DFS on board matching against Trie nodes."
  ],
  "editorial": {
    "solutionMarkdown": "### Optimal Solution\nTrie pruning: prune trie branches as words are matched to prevent redundant searches.",
    "complexityAnalysis": "Time: O(M * N * 4 * 3^(L-1)), Space: O(Total characters in words)"
  },
  "isGlobal": true,
  "status": "PUBLISHED"
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
      "frequencyCount": 44,
      "sourceNote": "Apple Practice Bank #96"
    }
  ],
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
      "boilerplate": "function subsets(...args) {\n    // TODO: Implement solution for Subsets\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try {\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(subsets(...parsed)));\n    } catch (e) {\n        console.log(subsets(...lines));\n    }\n}\n"
    },
    {
      "language": "cpp",
      "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\n// Solution for Subsets\nclass Solution {\npublic:\n    void solve() {\n        // Write your solution here\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    // Driver reading from standard input\n    string line;\n    while (getline(cin, line)) {\n        if (!line.empty()) {\n            // Process input line\n        }\n    }\n    return 0;\n}\n"
    },
    {
      "language": "java",
      "boilerplate": "import java.util.*;\n\npublic class Solution {\n    // Solution for Subsets\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        while (sc.hasNextLine()) {\n            String line = sc.nextLine();\n            if (!line.trim().isEmpty()) {\n                // Process testcase line\n            }\n        }\n        sc.close();\n    }\n}\n"
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
      "expectedOutput": "[[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]]",
      "weight": 1
    },
    {
      "input": "[0]",
      "expectedOutput": "[[], [0]]",
      "weight": 1
    }
  ],
  "timeLimitMs": 2000,
  "memoryLimitMb": 256,
  "hints": [
    "Backtrack: at index i, choose to include nums[i] or exclude nums[i], or use bit manipulation from 0 to 2^n - 1."
  ],
  "editorial": {
    "solutionMarkdown": "### Optimal Solution\nBacktracking decision tree exploring 2^N states.",
    "complexityAnalysis": "Time: O(N * 2^N), Space: O(N * 2^N)"
  },
  "isGlobal": true,
  "status": "PUBLISHED"
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
      "frequencyCount": 43,
      "sourceNote": "Apple Practice Bank #97"
    }
  ],
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
      "boilerplate": "function permutations(...args) {\n    // TODO: Implement solution for Permutations\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try {\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(permutations(...parsed)));\n    } catch (e) {\n        console.log(permutations(...lines));\n    }\n}\n"
    },
    {
      "language": "cpp",
      "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\n// Solution for Permutations\nclass Solution {\npublic:\n    void solve() {\n        // Write your solution here\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    // Driver reading from standard input\n    string line;\n    while (getline(cin, line)) {\n        if (!line.empty()) {\n            // Process input line\n        }\n    }\n    return 0;\n}\n"
    },
    {
      "language": "java",
      "boilerplate": "import java.util.*;\n\npublic class Solution {\n    // Solution for Permutations\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        while (sc.hasNextLine()) {\n            String line = sc.nextLine();\n            if (!line.trim().isEmpty()) {\n                // Process testcase line\n            }\n        }\n        sc.close();\n    }\n}\n"
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
      "expectedOutput": "[[1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1]]",
      "weight": 1
    },
    {
      "input": "[0,1]",
      "expectedOutput": "[[0, 1], [1, 0]]",
      "weight": 1
    },
    {
      "input": "[1]",
      "expectedOutput": "[[1]]",
      "weight": 1
    }
  ],
  "timeLimitMs": 2000,
  "memoryLimitMb": 256,
  "hints": [
    "Backtracking with in-place element swapping from index start to len(nums)."
  ],
  "editorial": {
    "solutionMarkdown": "### Optimal Solution\nSwap element nums[start] with nums[i] for i in range(start, n) and recurse.",
    "complexityAnalysis": "Time: O(N * N!), Space: O(N!)"
  },
  "isGlobal": true,
  "status": "PUBLISHED"
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
      "sourceNote": "Apple Candidate Report S04"
    }
  ],
  "supportedLanguages": [
    "python",
    "javascript",
    "cpp",
    "java"
  ],
  "starterCode": [
    {
      "language": "python",
      "boilerplate": "def nqueens(*args):\n    # TODO: Implement solution for N-Queens\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = nqueens(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(nqueens(*input_data))\n"
    },
    {
      "language": "javascript",
      "boilerplate": "function nqueens(...args) {\n    // TODO: Implement solution for N-Queens\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try {\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(nqueens(...parsed)));\n    } catch (e) {\n        console.log(nqueens(...lines));\n    }\n}\n"
    },
    {
      "language": "cpp",
      "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\n// Solution for N-Queens\nclass Solution {\npublic:\n    void solve() {\n        // Write your solution here\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    // Driver reading from standard input\n    string line;\n    while (getline(cin, line)) {\n        if (!line.empty()) {\n            // Process input line\n        }\n    }\n    return 0;\n}\n"
    },
    {
      "language": "java",
      "boilerplate": "import java.util.*;\n\npublic class Solution {\n    // Solution for N-Queens\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        while (sc.hasNextLine()) {\n            String line = sc.nextLine();\n            if (!line.trim().isEmpty()) {\n                // Process testcase line\n            }\n        }\n        sc.close();\n    }\n}\n"
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
      "expectedOutput": "[[\".Q..\", \"...Q\", \"Q...\", \"..Q.\"], [\"..Q.\", \"Q...\", \"...Q\", \".Q..\"]]",
      "weight": 1
    },
    {
      "input": "1",
      "expectedOutput": "[[\"Q\"]]",
      "weight": 1
    }
  ],
  "timeLimitMs": 2000,
  "memoryLimitMb": 256,
  "hints": [
    "Row by row DFS tracking sets of used columns, positive diagonals (r + c), and negative diagonals (r - c)."
  ],
  "editorial": {
    "solutionMarkdown": "### Optimal Solution\nBacktracking with three hash sets: cols, pos_diag (r+c), neg_diag (r-c).",
    "complexityAnalysis": "Time: O(N!), Space: O(N)"
  },
  "isGlobal": true,
  "status": "PUBLISHED"
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
      "frequencyCount": 52,
      "sourceNote": "Apple Candidate Report S16"
    }
  ],
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
      "boilerplate": "function insertDeleteGetrandomO1(...args) {\n    // TODO: Implement solution for Insert Delete GetRandom O(1)\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try {\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(insertDeleteGetrandomO1(...parsed)));\n    } catch (e) {\n        console.log(insertDeleteGetrandomO1(...lines));\n    }\n}\n"
    },
    {
      "language": "cpp",
      "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\n// Solution for Insert Delete GetRandom O(1)\nclass Solution {\npublic:\n    void solve() {\n        // Write your solution here\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    // Driver reading from standard input\n    string line;\n    while (getline(cin, line)) {\n        if (!line.empty()) {\n            // Process input line\n        }\n    }\n    return 0;\n}\n"
    },
    {
      "language": "java",
      "boilerplate": "import java.util.*;\n\npublic class Solution {\n    // Solution for Insert Delete GetRandom O(1)\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        while (sc.hasNextLine()) {\n            String line = sc.nextLine();\n            if (!line.trim().isEmpty()) {\n                // Process testcase line\n            }\n        }\n        sc.close();\n    }\n}\n"
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
      "expectedOutput": "[null, true, false, true, 2, true, false, 2]",
      "weight": 1
    }
  ],
  "timeLimitMs": 2000,
  "memoryLimitMb": 256,
  "hints": [
    "Use a dynamic array (list) for O(1) random index access and a hash map {val: index} for O(1) lookups. In remove, swap with last element."
  ],
  "editorial": {
    "solutionMarkdown": "### Optimal Solution\nArray + Hash Map. Removal swaps target element with last element, pops array, and updates index map.",
    "complexityAnalysis": "Time: O(1) average for all operations, Space: O(N)"
  },
  "isGlobal": true,
  "status": "PUBLISHED"
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
      "frequencyCount": 50,
      "sourceNote": "Apple Practice Bank #100"
    }
  ],
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
      "boilerplate": "function longestPalindromicSubstring(...args) {\n    // TODO: Implement solution for Longest Palindromic Substring\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try {\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(longestPalindromicSubstring(...parsed)));\n    } catch (e) {\n        console.log(longestPalindromicSubstring(...lines));\n    }\n}\n"
    },
    {
      "language": "cpp",
      "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\n// Solution for Longest Palindromic Substring\nclass Solution {\npublic:\n    void solve() {\n        // Write your solution here\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    // Driver reading from standard input\n    string line;\n    while (getline(cin, line)) {\n        if (!line.empty()) {\n            // Process input line\n        }\n    }\n    return 0;\n}\n"
    },
    {
      "language": "java",
      "boilerplate": "import java.util.*;\n\npublic class Solution {\n    // Solution for Longest Palindromic Substring\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        while (sc.hasNextLine()) {\n            String line = sc.nextLine();\n            if (!line.trim().isEmpty()) {\n                // Process testcase line\n            }\n        }\n        sc.close();\n    }\n}\n"
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
      "expectedOutput": "\"bab\"",
      "weight": 1
    },
    {
      "input": "cbbd",
      "expectedOutput": "\"bb\"",
      "weight": 1
    },
    {
      "input": "a",
      "expectedOutput": "\"a\"",
      "weight": 1
    },
    {
      "input": "ac",
      "expectedOutput": "\"a\"",
      "weight": 1
    }
  ],
  "timeLimitMs": 2000,
  "memoryLimitMb": 256,
  "hints": [
    "Expand around center for each index i (odd center) and (i, i+1) (even center)."
  ],
  "editorial": {
    "solutionMarkdown": "### Optimal Solution\nExpand around center checks 2n-1 centers in O(N^2) time and O(1) extra space.",
    "complexityAnalysis": "Time: O(N^2), Space: O(1)"
  },
  "isGlobal": true,
  "status": "PUBLISHED"
},
];
