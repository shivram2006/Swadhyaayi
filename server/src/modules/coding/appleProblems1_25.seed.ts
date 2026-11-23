/* eslint-disable */
// Auto-generated Apple Interview Catalog - 100 DSA/CP/DP Problems
export const apple1_25 = [
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
      "sourceNote": "Apple Practice Bank #1"
    }
  ],
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
      "boilerplate": "function twoSum(...args) {\n    // TODO: Implement solution for Two Sum\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try {\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(twoSum(...parsed)));\n    } catch (e) {\n        console.log(twoSum(...lines));\n    }\n}\n"
    },
    {
      "language": "cpp",
      "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\n// Solution for Two Sum\nclass Solution {\npublic:\n    void solve() {\n        // Write your solution here\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    // Driver reading from standard input\n    string line;\n    while (getline(cin, line)) {\n        if (!line.empty()) {\n            // Process input line\n        }\n    }\n    return 0;\n}\n"
    },
    {
      "language": "java",
      "boilerplate": "import java.util.*;\n\npublic class Solution {\n    // Solution for Two Sum\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        while (sc.hasNextLine()) {\n            String line = sc.nextLine();\n            if (!line.trim().isEmpty()) {\n                // Process testcase line\n            }\n        }\n        sc.close();\n    }\n}\n"
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
      "expectedOutput": "[0, 1]",
      "weight": 1
    },
    {
      "input": "[3,2,4]\n6",
      "expectedOutput": "[1, 2]",
      "weight": 1
    },
    {
      "input": "[3,3]\n6",
      "expectedOutput": "[0, 1]",
      "weight": 1
    },
    {
      "input": "[-1,-2,-3,-4,-5]\n-8",
      "expectedOutput": "[2, 4]",
      "weight": 1
    }
  ],
  "timeLimitMs": 2000,
  "memoryLimitMb": 256,
  "hints": [
    "Can we use a Hash Map to store seen complements in O(1)?"
  ],
  "editorial": {
    "solutionMarkdown": "### Optimal Solution\nStore visited elements in a map: complement = target - num. If complement in map, return indices.",
    "complexityAnalysis": "Time: O(N), Space: O(N)"
  },
  "isGlobal": true,
  "status": "PUBLISHED"
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
      "frequencyCount": 40,
      "sourceNote": "Apple Practice Bank #2"
    }
  ],
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
      "boilerplate": "function longestSubstringWithoutRepeatingCharacters(...args) {\n    // TODO: Implement solution for Longest Substring Without Repeating Characters\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try {\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(longestSubstringWithoutRepeatingCharacters(...parsed)));\n    } catch (e) {\n        console.log(longestSubstringWithoutRepeatingCharacters(...lines));\n    }\n}\n"
    },
    {
      "language": "cpp",
      "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\n// Solution for Longest Substring Without Repeating Characters\nclass Solution {\npublic:\n    void solve() {\n        // Write your solution here\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    // Driver reading from standard input\n    string line;\n    while (getline(cin, line)) {\n        if (!line.empty()) {\n            // Process input line\n        }\n    }\n    return 0;\n}\n"
    },
    {
      "language": "java",
      "boilerplate": "import java.util.*;\n\npublic class Solution {\n    // Solution for Longest Substring Without Repeating Characters\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        while (sc.hasNextLine()) {\n            String line = sc.nextLine();\n            if (!line.trim().isEmpty()) {\n                // Process testcase line\n            }\n        }\n        sc.close();\n    }\n}\n"
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
      "expectedOutput": "3",
      "weight": 1
    },
    {
      "input": "bbbbb",
      "expectedOutput": "1",
      "weight": 1
    },
    {
      "input": "pwwkew",
      "expectedOutput": "3",
      "weight": 1
    },
    {
      "input": "",
      "expectedOutput": "0",
      "weight": 1
    },
    {
      "input": "dvdf",
      "expectedOutput": "3",
      "weight": 1
    }
  ],
  "timeLimitMs": 2000,
  "memoryLimitMb": 256,
  "hints": [
    "Use a dynamic sliding window [left, right] with last seen index map."
  ],
  "editorial": {
    "solutionMarkdown": "### Optimal Solution\nTrack last seen positions of each char. Advance left pointer past previous occurrence.",
    "complexityAnalysis": "Time: O(N), Space: O(min(N, M)) where M is alphabet size"
  },
  "isGlobal": true,
  "status": "PUBLISHED"
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
      "frequencyCount": 32,
      "sourceNote": "Apple Practice Bank #3"
    }
  ],
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
      "boilerplate": "function longestCommonPrefix(...args) {\n    // TODO: Implement solution for Longest Common Prefix\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try {\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(longestCommonPrefix(...parsed)));\n    } catch (e) {\n        console.log(longestCommonPrefix(...lines));\n    }\n}\n"
    },
    {
      "language": "cpp",
      "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\n// Solution for Longest Common Prefix\nclass Solution {\npublic:\n    void solve() {\n        // Write your solution here\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    // Driver reading from standard input\n    string line;\n    while (getline(cin, line)) {\n        if (!line.empty()) {\n            // Process input line\n        }\n    }\n    return 0;\n}\n"
    },
    {
      "language": "java",
      "boilerplate": "import java.util.*;\n\npublic class Solution {\n    // Solution for Longest Common Prefix\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        while (sc.hasNextLine()) {\n            String line = sc.nextLine();\n            if (!line.trim().isEmpty()) {\n                // Process testcase line\n            }\n        }\n        sc.close();\n    }\n}\n"
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
      "expectedOutput": "\"fl\"",
      "weight": 1
    },
    {
      "input": "[\"dog\",\"racecar\",\"car\"]",
      "expectedOutput": "\"\"",
      "weight": 1
    },
    {
      "input": "[\"interspecies\",\"interstellar\",\"interstate\"]",
      "expectedOutput": "\"inters\"",
      "weight": 1
    },
    {
      "input": "[\"a\"]",
      "expectedOutput": "\"a\"",
      "weight": 1
    }
  ],
  "timeLimitMs": 2000,
  "memoryLimitMb": 256,
  "hints": [
    "Sort the strings or compare character by character across all words."
  ],
  "editorial": {
    "solutionMarkdown": "### Optimal Solution\nVertical scanning or comparing prefix of first and last strings after sorting.",
    "complexityAnalysis": "Time: O(S) where S is sum of all characters, Space: O(1)"
  },
  "isGlobal": true,
  "status": "PUBLISHED"
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
      "frequencyCount": 50,
      "sourceNote": "Apple Practice Bank #4"
    }
  ],
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
      "boilerplate": "function validParentheses(...args) {\n    // TODO: Implement solution for Valid Parentheses\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try {\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(validParentheses(...parsed)));\n    } catch (e) {\n        console.log(validParentheses(...lines));\n    }\n}\n"
    },
    {
      "language": "cpp",
      "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\n// Solution for Valid Parentheses\nclass Solution {\npublic:\n    void solve() {\n        // Write your solution here\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    // Driver reading from standard input\n    string line;\n    while (getline(cin, line)) {\n        if (!line.empty()) {\n            // Process input line\n        }\n    }\n    return 0;\n}\n"
    },
    {
      "language": "java",
      "boilerplate": "import java.util.*;\n\npublic class Solution {\n    // Solution for Valid Parentheses\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        while (sc.hasNextLine()) {\n            String line = sc.nextLine();\n            if (!line.trim().isEmpty()) {\n                // Process testcase line\n            }\n        }\n        sc.close();\n    }\n}\n"
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
      "expectedOutput": "true",
      "weight": 1
    },
    {
      "input": "(]",
      "expectedOutput": "false",
      "weight": 1
    },
    {
      "input": "([{}])",
      "expectedOutput": "true",
      "weight": 1
    },
    {
      "input": "((",
      "expectedOutput": "false",
      "weight": 1
    },
    {
      "input": "){",
      "expectedOutput": "false",
      "weight": 1
    }
  ],
  "timeLimitMs": 2000,
  "memoryLimitMb": 256,
  "hints": [
    "Use a LIFO Stack to match closing brackets with recent opening bracket."
  ],
  "editorial": {
    "solutionMarkdown": "### Optimal Solution\nPush opening brackets. On closing bracket, pop stack and check if matches.",
    "complexityAnalysis": "Time: O(N), Space: O(N)"
  },
  "isGlobal": true,
  "status": "PUBLISHED"
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
      "frequencyCount": 35,
      "sourceNote": "Apple Candidate Report S01 (ICT3)"
    }
  ],
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
      "boilerplate": "function medianOfTwoSortedArrays(...args) {\n    // TODO: Implement solution for Median of Two Sorted Arrays\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try {\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(medianOfTwoSortedArrays(...parsed)));\n    } catch (e) {\n        console.log(medianOfTwoSortedArrays(...lines));\n    }\n}\n"
    },
    {
      "language": "cpp",
      "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\n// Solution for Median of Two Sorted Arrays\nclass Solution {\npublic:\n    void solve() {\n        // Write your solution here\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    // Driver reading from standard input\n    string line;\n    while (getline(cin, line)) {\n        if (!line.empty()) {\n            // Process input line\n        }\n    }\n    return 0;\n}\n"
    },
    {
      "language": "java",
      "boilerplate": "import java.util.*;\n\npublic class Solution {\n    // Solution for Median of Two Sorted Arrays\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        while (sc.hasNextLine()) {\n            String line = sc.nextLine();\n            if (!line.trim().isEmpty()) {\n                // Process testcase line\n            }\n        }\n        sc.close();\n    }\n}\n"
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
      "expectedOutput": "2.00000",
      "weight": 1
    },
    {
      "input": "[1,2]\n[3,4]",
      "expectedOutput": "2.50000",
      "weight": 1
    },
    {
      "input": "[0,0]\n[0,0]",
      "expectedOutput": "0.00000",
      "weight": 1
    },
    {
      "input": "[]\n[1]",
      "expectedOutput": "1.00000",
      "weight": 1
    }
  ],
  "timeLimitMs": 2000,
  "memoryLimitMb": 256,
  "hints": [
    "Binary search on the partition of the smaller array."
  ],
  "editorial": {
    "solutionMarkdown": "### Optimal Solution\nPartition both arrays such that left half has (m+n+1)//2 elements and maxLeft <= minRight.",
    "complexityAnalysis": "Time: O(log(min(M, N))), Space: O(1)"
  },
  "isGlobal": true,
  "status": "PUBLISHED"
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
      "frequencyCount": 48,
      "sourceNote": "Apple Candidate Report S12 & S15"
    }
  ],
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
      "boilerplate": "function mergeIntervals(...args) {\n    // TODO: Implement solution for Merge Intervals\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try {\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(mergeIntervals(...parsed)));\n    } catch (e) {\n        console.log(mergeIntervals(...lines));\n    }\n}\n"
    },
    {
      "language": "cpp",
      "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\n// Solution for Merge Intervals\nclass Solution {\npublic:\n    void solve() {\n        // Write your solution here\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    // Driver reading from standard input\n    string line;\n    while (getline(cin, line)) {\n        if (!line.empty()) {\n            // Process input line\n        }\n    }\n    return 0;\n}\n"
    },
    {
      "language": "java",
      "boilerplate": "import java.util.*;\n\npublic class Solution {\n    // Solution for Merge Intervals\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        while (sc.hasNextLine()) {\n            String line = sc.nextLine();\n            if (!line.trim().isEmpty()) {\n                // Process testcase line\n            }\n        }\n        sc.close();\n    }\n}\n"
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
      "expectedOutput": "[[1, 6], [8, 10], [15, 18]]",
      "weight": 1
    },
    {
      "input": "[[1,4],[4,5]]",
      "expectedOutput": "[[1, 5]]",
      "weight": 1
    },
    {
      "input": "[[1,4],[0,4]]",
      "expectedOutput": "[[0, 4]]",
      "weight": 1
    },
    {
      "input": "[[1,4],[2,3]]",
      "expectedOutput": "[[1, 4]]",
      "weight": 1
    }
  ],
  "timeLimitMs": 2000,
  "memoryLimitMb": 256,
  "hints": [
    "Sort intervals by start time, then check if current start <= previous end."
  ],
  "editorial": {
    "solutionMarkdown": "### Optimal Solution\nSort by start time. Iterate through intervals; if current overlaps with last merged, update end.",
    "complexityAnalysis": "Time: O(N log N), Space: O(N)"
  },
  "isGlobal": true,
  "status": "PUBLISHED"
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
      "frequencyCount": 38,
      "sourceNote": "Apple Practice Bank #7 / S02"
    }
  ],
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
      "boilerplate": "function groupAnagrams(...args) {\n    // TODO: Implement solution for Group Anagrams\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try {\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(groupAnagrams(...parsed)));\n    } catch (e) {\n        console.log(groupAnagrams(...lines));\n    }\n}\n"
    },
    {
      "language": "cpp",
      "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\n// Solution for Group Anagrams\nclass Solution {\npublic:\n    void solve() {\n        // Write your solution here\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    // Driver reading from standard input\n    string line;\n    while (getline(cin, line)) {\n        if (!line.empty()) {\n            // Process input line\n        }\n    }\n    return 0;\n}\n"
    },
    {
      "language": "java",
      "boilerplate": "import java.util.*;\n\npublic class Solution {\n    // Solution for Group Anagrams\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        while (sc.hasNextLine()) {\n            String line = sc.nextLine();\n            if (!line.trim().isEmpty()) {\n                // Process testcase line\n            }\n        }\n        sc.close();\n    }\n}\n"
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
      "expectedOutput": "[[\"bat\"], [\"nat\", \"tan\"], [\"ate\", \"eat\", \"tea\"]]",
      "weight": 1
    },
    {
      "input": "[\"\"]",
      "expectedOutput": "[[\"\"]]",
      "weight": 1
    },
    {
      "input": "[\"a\"]",
      "expectedOutput": "[[\"a\"]]",
      "weight": 1
    }
  ],
  "timeLimitMs": 2000,
  "memoryLimitMb": 256,
  "hints": [
    "Use sorted string or 26-element character count tuple as map key."
  ],
  "editorial": {
    "solutionMarkdown": "### Optimal Solution\nHash each word by sorted letters or count array. Return values of map.",
    "complexityAnalysis": "Time: O(N * K log K) or O(N * K), Space: O(N * K)"
  },
  "isGlobal": true,
  "status": "PUBLISHED"
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
      "frequencyCount": 34,
      "sourceNote": "Apple Practice Bank #8"
    }
  ],
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
      "boilerplate": "function mergeSortedArray(...args) {\n    // TODO: Implement solution for Merge Sorted Array\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try {\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(mergeSortedArray(...parsed)));\n    } catch (e) {\n        console.log(mergeSortedArray(...lines));\n    }\n}\n"
    },
    {
      "language": "cpp",
      "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\n// Solution for Merge Sorted Array\nclass Solution {\npublic:\n    void solve() {\n        // Write your solution here\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    // Driver reading from standard input\n    string line;\n    while (getline(cin, line)) {\n        if (!line.empty()) {\n            // Process input line\n        }\n    }\n    return 0;\n}\n"
    },
    {
      "language": "java",
      "boilerplate": "import java.util.*;\n\npublic class Solution {\n    // Solution for Merge Sorted Array\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        while (sc.hasNextLine()) {\n            String line = sc.nextLine();\n            if (!line.trim().isEmpty()) {\n                // Process testcase line\n            }\n        }\n        sc.close();\n    }\n}\n"
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
      "expectedOutput": "[1, 2, 2, 3, 5, 6]",
      "weight": 1
    },
    {
      "input": "[1]\n1\n[]\n0",
      "expectedOutput": "[1]",
      "weight": 1
    },
    {
      "input": "[0]\n0\n[1]\n1",
      "expectedOutput": "[1]",
      "weight": 1
    }
  ],
  "timeLimitMs": 2000,
  "memoryLimitMb": 256,
  "hints": [
    "Fill nums1 from the back using three pointers: p1, p2, and p."
  ],
  "editorial": {
    "solutionMarkdown": "### Optimal Solution\nIterate backwards from m+n-1, placing larger of nums1[p1] and nums2[p2].",
    "complexityAnalysis": "Time: O(M + N), Space: O(1)"
  },
  "isGlobal": true,
  "status": "PUBLISHED"
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
      "frequencyCount": 55,
      "sourceNote": "Apple Practice Bank #9"
    }
  ],
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
      "boilerplate": "function trappingRainWater(...args) {\n    // TODO: Implement solution for Trapping Rain Water\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try {\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(trappingRainWater(...parsed)));\n    } catch (e) {\n        console.log(trappingRainWater(...lines));\n    }\n}\n"
    },
    {
      "language": "cpp",
      "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\n// Solution for Trapping Rain Water\nclass Solution {\npublic:\n    void solve() {\n        // Write your solution here\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    // Driver reading from standard input\n    string line;\n    while (getline(cin, line)) {\n        if (!line.empty()) {\n            // Process input line\n        }\n    }\n    return 0;\n}\n"
    },
    {
      "language": "java",
      "boilerplate": "import java.util.*;\n\npublic class Solution {\n    // Solution for Trapping Rain Water\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        while (sc.hasNextLine()) {\n            String line = sc.nextLine();\n            if (!line.trim().isEmpty()) {\n                // Process testcase line\n            }\n        }\n        sc.close();\n    }\n}\n"
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
      "expectedOutput": "6",
      "weight": 1
    },
    {
      "input": "[4,2,0,3,2,5]",
      "expectedOutput": "9",
      "weight": 1
    },
    {
      "input": "[3,0,2,0,4]",
      "expectedOutput": "7",
      "weight": 1
    },
    {
      "input": "[1,1,1]",
      "expectedOutput": "0",
      "weight": 1
    }
  ],
  "timeLimitMs": 2000,
  "memoryLimitMb": 256,
  "hints": [
    "Water trapped above index i is min(maxLeft, maxRight) - height[i]. Use two pointers."
  ],
  "editorial": {
    "solutionMarkdown": "### Optimal Solution\nMaintain left and right pointers with leftMax and rightMax. Process smaller side inward.",
    "complexityAnalysis": "Time: O(N), Space: O(1)"
  },
  "isGlobal": true,
  "status": "PUBLISHED"
},
  {
  "title": "Reverse Integer",
  "slug": "reverse-integer",
  "description": "Given a signed 32-bit integer `x`, return `x` with its digits reversed. If reversing `x` causes the value to go outside the signed 32-bit integer range `[-2^31, 2^31 - 1]`, then return `0`.\n\n### Example 1:\n```\nInput: 123\nOutput: 321\nExplanation: Reverse of 123 is 321.\n```\n\n### Example 2:\n```\nInput: -123\nOutput: -321\nExplanation: Negative sign preserved.\n```",
  "difficulty": "MEDIUM",
  "category": "DSA",
  "patterns": [
    "Math",
    "Digit Processing"
  ],
  "topics": [
    "Math",
    "Digit Processing"
  ],
  "companyTags": [
    {
      "company": "Apple",
      "yearReported": 2025,
      "verified": true,
      "frequencyCount": 28,
      "sourceNote": "Apple Practice Bank #10"
    }
  ],
  "supportedLanguages": [
    "python",
    "javascript",
    "cpp",
    "java"
  ],
  "starterCode": [
    {
      "language": "python",
      "boilerplate": "def reverseInteger(*args):\n    # TODO: Implement solution for Reverse Integer\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = reverseInteger(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(reverseInteger(*input_data))\n"
    },
    {
      "language": "javascript",
      "boilerplate": "function reverseInteger(...args) {\n    // TODO: Implement solution for Reverse Integer\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try {\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(reverseInteger(...parsed)));\n    } catch (e) {\n        console.log(reverseInteger(...lines));\n    }\n}\n"
    },
    {
      "language": "cpp",
      "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\n// Solution for Reverse Integer\nclass Solution {\npublic:\n    void solve() {\n        // Write your solution here\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    // Driver reading from standard input\n    string line;\n    while (getline(cin, line)) {\n        if (!line.empty()) {\n            // Process input line\n        }\n    }\n    return 0;\n}\n"
    },
    {
      "language": "java",
      "boilerplate": "import java.util.*;\n\npublic class Solution {\n    // Solution for Reverse Integer\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        while (sc.hasNextLine()) {\n            String line = sc.nextLine();\n            if (!line.trim().isEmpty()) {\n                // Process testcase line\n            }\n        }\n        sc.close();\n    }\n}\n"
    }
  ],
  "sampleTestCases": [
    {
      "input": "123",
      "output": "321",
      "explanation": "Reverse of 123 is 321."
    },
    {
      "input": "-123",
      "output": "-321",
      "explanation": "Negative sign preserved."
    }
  ],
  "hiddenTestCases": [
    {
      "input": "123",
      "expectedOutput": "321",
      "weight": 1
    },
    {
      "input": "-123",
      "expectedOutput": "-321",
      "weight": 1
    },
    {
      "input": "120",
      "expectedOutput": "21",
      "weight": 1
    },
    {
      "input": "1534236469",
      "expectedOutput": "0",
      "weight": 1
    }
  ],
  "timeLimitMs": 2000,
  "memoryLimitMb": 256,
  "hints": [
    "Extract last digit using x % 10. Check for 32-bit signed overflow before multiplying by 10."
  ],
  "editorial": {
    "solutionMarkdown": "### Optimal Solution\nPop digit using % 10, push onto rev * 10 + pop. Guard against 32-bit INT_MAX and INT_MIN boundaries.",
    "complexityAnalysis": "Time: O(log10(X)), Space: O(1)"
  },
  "isGlobal": true,
  "status": "PUBLISHED"
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
      "frequencyCount": 36,
      "sourceNote": "Apple Candidate Report S15"
    }
  ],
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
      "boilerplate": "function validSudoku(...args) {\n    // TODO: Implement solution for Valid Sudoku\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try {\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(validSudoku(...parsed)));\n    } catch (e) {\n        console.log(validSudoku(...lines));\n    }\n}\n"
    },
    {
      "language": "cpp",
      "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\n// Solution for Valid Sudoku\nclass Solution {\npublic:\n    void solve() {\n        // Write your solution here\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    // Driver reading from standard input\n    string line;\n    while (getline(cin, line)) {\n        if (!line.empty()) {\n            // Process input line\n        }\n    }\n    return 0;\n}\n"
    },
    {
      "language": "java",
      "boilerplate": "import java.util.*;\n\npublic class Solution {\n    // Solution for Valid Sudoku\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        while (sc.hasNextLine()) {\n            String line = sc.nextLine();\n            if (!line.trim().isEmpty()) {\n                // Process testcase line\n            }\n        }\n        sc.close();\n    }\n}\n"
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
      "expectedOutput": "true",
      "weight": 1
    }
  ],
  "timeLimitMs": 2000,
  "memoryLimitMb": 256,
  "hints": [
    "Use sets for rows, cols, and 3x3 blocks indexed by (r//3, c//3)."
  ],
  "editorial": {
    "solutionMarkdown": "### Optimal Solution\nTrack seen digits using 9 row sets, 9 col sets, and 9 box sets.",
    "complexityAnalysis": "Time: O(1) for fixed 9x9 board, Space: O(1)"
  },
  "isGlobal": true,
  "status": "PUBLISHED"
},
  {
  "title": "Climbing Stairs",
  "slug": "climbing-stairs",
  "description": "You are climbing a staircase. It takes `n` steps to reach the top. Each time you can either climb `1` or `2` steps. In how many distinct ways can you climb to the top?\n\n### Example 1:\n```\nInput: 2\nOutput: 2\nExplanation: 1 step + 1 step, or 2 steps.\n```\n\n### Example 2:\n```\nInput: 3\nOutput: 3\nExplanation: 1+1+1, 1+2, or 2+1.\n```",
  "difficulty": "EASY",
  "category": "DP",
  "patterns": [
    "Dynamic Programming",
    "Math"
  ],
  "topics": [
    "Dynamic Programming",
    "Math"
  ],
  "companyTags": [
    {
      "company": "Apple",
      "yearReported": 2025,
      "verified": true,
      "frequencyCount": 42,
      "sourceNote": "Apple Practice Bank #12"
    }
  ],
  "supportedLanguages": [
    "python",
    "javascript",
    "cpp",
    "java"
  ],
  "starterCode": [
    {
      "language": "python",
      "boilerplate": "def climbingStairs(*args):\n    # TODO: Implement solution for Climbing Stairs\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = climbingStairs(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(climbingStairs(*input_data))\n"
    },
    {
      "language": "javascript",
      "boilerplate": "function climbingStairs(...args) {\n    // TODO: Implement solution for Climbing Stairs\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try {\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(climbingStairs(...parsed)));\n    } catch (e) {\n        console.log(climbingStairs(...lines));\n    }\n}\n"
    },
    {
      "language": "cpp",
      "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\n// Solution for Climbing Stairs\nclass Solution {\npublic:\n    void solve() {\n        // Write your solution here\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    // Driver reading from standard input\n    string line;\n    while (getline(cin, line)) {\n        if (!line.empty()) {\n            // Process input line\n        }\n    }\n    return 0;\n}\n"
    },
    {
      "language": "java",
      "boilerplate": "import java.util.*;\n\npublic class Solution {\n    // Solution for Climbing Stairs\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        while (sc.hasNextLine()) {\n            String line = sc.nextLine();\n            if (!line.trim().isEmpty()) {\n                // Process testcase line\n            }\n        }\n        sc.close();\n    }\n}\n"
    }
  ],
  "sampleTestCases": [
    {
      "input": "2",
      "output": "2",
      "explanation": "1 step + 1 step, or 2 steps."
    },
    {
      "input": "3",
      "output": "3",
      "explanation": "1+1+1, 1+2, or 2+1."
    }
  ],
  "hiddenTestCases": [
    {
      "input": "2",
      "expectedOutput": "2",
      "weight": 1
    },
    {
      "input": "3",
      "expectedOutput": "3",
      "weight": 1
    },
    {
      "input": "4",
      "expectedOutput": "5",
      "weight": 1
    },
    {
      "input": "5",
      "expectedOutput": "8",
      "weight": 1
    },
    {
      "input": "10",
      "expectedOutput": "89",
      "weight": 1
    }
  ],
  "timeLimitMs": 2000,
  "memoryLimitMb": 256,
  "hints": [
    "dp[i] = dp[i-1] + dp[i-2], equivalent to Fibonacci numbers."
  ],
  "editorial": {
    "solutionMarkdown": "### Optimal Solution\nMaintain two variables prev1 and prev2 for constant space Fibonacci sequence.",
    "complexityAnalysis": "Time: O(N), Space: O(1)"
  },
  "isGlobal": true,
  "status": "PUBLISHED"
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
      "frequencyCount": 35,
      "sourceNote": "Apple Practice Bank #13"
    }
  ],
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
      "boilerplate": "function rotateArray(...args) {\n    // TODO: Implement solution for Rotate Array\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try {\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(rotateArray(...parsed)));\n    } catch (e) {\n        console.log(rotateArray(...lines));\n    }\n}\n"
    },
    {
      "language": "cpp",
      "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\n// Solution for Rotate Array\nclass Solution {\npublic:\n    void solve() {\n        // Write your solution here\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    // Driver reading from standard input\n    string line;\n    while (getline(cin, line)) {\n        if (!line.empty()) {\n            // Process input line\n        }\n    }\n    return 0;\n}\n"
    },
    {
      "language": "java",
      "boilerplate": "import java.util.*;\n\npublic class Solution {\n    // Solution for Rotate Array\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        while (sc.hasNextLine()) {\n            String line = sc.nextLine();\n            if (!line.trim().isEmpty()) {\n                // Process testcase line\n            }\n        }\n        sc.close();\n    }\n}\n"
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
      "expectedOutput": "[5, 6, 7, 1, 2, 3, 4]",
      "weight": 1
    },
    {
      "input": "[-1,-100,3,99]\n2",
      "expectedOutput": "[3, 99, -1, -100]",
      "weight": 1
    },
    {
      "input": "[1,2]\n3",
      "expectedOutput": "[2, 1]",
      "weight": 1
    }
  ],
  "timeLimitMs": 2000,
  "memoryLimitMb": 256,
  "hints": [
    "Reverse entire array, then reverse first k, then reverse remaining n-k."
  ],
  "editorial": {
    "solutionMarkdown": "### Optimal Solution\nThree in-place reversals: reverse(0, n-1), reverse(0, k-1), reverse(k, n-1).",
    "complexityAnalysis": "Time: O(N), Space: O(1)"
  },
  "isGlobal": true,
  "status": "PUBLISHED"
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
      "frequencyCount": 52,
      "sourceNote": "Apple Candidate Report S11"
    }
  ],
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
      "boilerplate": "function numberOfIslands(...args) {\n    // TODO: Implement solution for Number of Islands\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try {\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(numberOfIslands(...parsed)));\n    } catch (e) {\n        console.log(numberOfIslands(...lines));\n    }\n}\n"
    },
    {
      "language": "cpp",
      "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\n// Solution for Number of Islands\nclass Solution {\npublic:\n    void solve() {\n        // Write your solution here\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    // Driver reading from standard input\n    string line;\n    while (getline(cin, line)) {\n        if (!line.empty()) {\n            // Process input line\n        }\n    }\n    return 0;\n}\n"
    },
    {
      "language": "java",
      "boilerplate": "import java.util.*;\n\npublic class Solution {\n    // Solution for Number of Islands\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        while (sc.hasNextLine()) {\n            String line = sc.nextLine();\n            if (!line.trim().isEmpty()) {\n                // Process testcase line\n            }\n        }\n        sc.close();\n    }\n}\n"
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
      "expectedOutput": "1",
      "weight": 1
    },
    {
      "input": "[[\"1\",\"1\",\"0\",\"0\",\"0\"],[\"1\",\"1\",\"0\",\"0\",\"0\"],[\"0\",\"0\",\"1\",\"0\",\"0\"],[\"0\",\"0\",\"0\",\"1\",\"1\"]]",
      "expectedOutput": "3",
      "weight": 1
    },
    {
      "input": "[[\"0\"]]",
      "expectedOutput": "0",
      "weight": 1
    }
  ],
  "timeLimitMs": 2000,
  "memoryLimitMb": 256,
  "hints": [
    "Traverse grid. When encountering '1', increment count and run BFS/DFS to sink the island."
  ],
  "editorial": {
    "solutionMarkdown": "### Optimal Solution\nStandard BFS/DFS flood-fill. Mark visited cells as '0' to avoid visiting twice.",
    "complexityAnalysis": "Time: O(M * N), Space: O(M * N) recursion stack / queue"
  },
  "isGlobal": true,
  "status": "PUBLISHED"
},
  {
  "title": "Best Time to Buy and Sell Stock",
  "slug": "best-time-to-buy-and-sell-stock",
  "description": "You are given an array `prices` where `prices[i]` is the price of a given stock on the `i-th` day. Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return `0`.\n\n### Example 1:\n```\nInput: [7,1,5,3,6,4]\nOutput: 5\nExplanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6 - 1 = 5.\n```\n\n### Example 2:\n```\nInput: [7,6,4,3,1]\nOutput: 0\nExplanation: In this case, no transactions are done and max profit = 0.\n```",
  "difficulty": "EASY",
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
      "company": "Apple",
      "yearReported": 2025,
      "verified": true,
      "frequencyCount": 45,
      "sourceNote": "Apple Practice Bank #15"
    }
  ],
  "supportedLanguages": [
    "python",
    "javascript",
    "cpp",
    "java"
  ],
  "starterCode": [
    {
      "language": "python",
      "boilerplate": "def bestTimeToBuyAndSellStock(*args):\n    # TODO: Implement solution for Best Time to Buy and Sell Stock\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = bestTimeToBuyAndSellStock(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(bestTimeToBuyAndSellStock(*input_data))\n"
    },
    {
      "language": "javascript",
      "boilerplate": "function bestTimeToBuyAndSellStock(...args) {\n    // TODO: Implement solution for Best Time to Buy and Sell Stock\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try {\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(bestTimeToBuyAndSellStock(...parsed)));\n    } catch (e) {\n        console.log(bestTimeToBuyAndSellStock(...lines));\n    }\n}\n"
    },
    {
      "language": "cpp",
      "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\n// Solution for Best Time to Buy and Sell Stock\nclass Solution {\npublic:\n    void solve() {\n        // Write your solution here\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    // Driver reading from standard input\n    string line;\n    while (getline(cin, line)) {\n        if (!line.empty()) {\n            // Process input line\n        }\n    }\n    return 0;\n}\n"
    },
    {
      "language": "java",
      "boilerplate": "import java.util.*;\n\npublic class Solution {\n    // Solution for Best Time to Buy and Sell Stock\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        while (sc.hasNextLine()) {\n            String line = sc.nextLine();\n            if (!line.trim().isEmpty()) {\n                // Process testcase line\n            }\n        }\n        sc.close();\n    }\n}\n"
    }
  ],
  "sampleTestCases": [
    {
      "input": "[7,1,5,3,6,4]",
      "output": "5",
      "explanation": "Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6 - 1 = 5."
    },
    {
      "input": "[7,6,4,3,1]",
      "output": "0",
      "explanation": "In this case, no transactions are done and max profit = 0."
    }
  ],
  "hiddenTestCases": [
    {
      "input": "[7,1,5,3,6,4]",
      "expectedOutput": "5",
      "weight": 1
    },
    {
      "input": "[7,6,4,3,1]",
      "expectedOutput": "0",
      "weight": 1
    },
    {
      "input": "[1,2]",
      "expectedOutput": "1",
      "weight": 1
    },
    {
      "input": "[2,4,1]",
      "expectedOutput": "2",
      "weight": 1
    }
  ],
  "timeLimitMs": 2000,
  "memoryLimitMb": 256,
  "hints": [
    "Track minPrice seen so far, and compute profit at current price."
  ],
  "editorial": {
    "solutionMarkdown": "### Optimal Solution\nOne-pass: min_price = min(min_price, price), max_profit = max(max_profit, price - min_price).",
    "complexityAnalysis": "Time: O(N), Space: O(1)"
  },
  "isGlobal": true,
  "status": "PUBLISHED"
},
  {
  "title": "Design Hit Counter",
  "slug": "design-hit-counter",
  "description": "Design a hit counter which counts the number of hits received in the past 5 minutes (i.e., the past 300 seconds).\n\nYour system should accept timestamp parameter (in seconds granularity) and calls are made in chronological order.\n\n### Example 1:\n```\nInput: [\"HitCounter\",\"hit\",\"hit\",\"hit\",\"getHits\",\"hit\",\"getHits\",\"getHits\"]\n[[],[1],[2],[3],[4],[300],[300],[301]]\nOutput: [null, null, null, null, 3, null, 4, 3]\nExplanation: Hits at 1, 2, 3 counted within 300 seconds.\n```\n\n### Example 2:\n```\nInput: [\"HitCounter\",\"hit\",\"getHits\"]\n[[],[1],[301]]\nOutput: [null, null, 0]\nExplanation: Timestamp 1 is expired at 301.\n```",
  "difficulty": "MEDIUM",
  "category": "DSA",
  "patterns": [
    "Queue",
    "Binary Search",
    "Design"
  ],
  "topics": [
    "Queue",
    "Binary Search",
    "Design"
  ],
  "companyTags": [
    {
      "company": "Apple",
      "yearReported": 2025,
      "verified": true,
      "frequencyCount": 30,
      "sourceNote": "Apple Practice Bank #16"
    }
  ],
  "supportedLanguages": [
    "python",
    "javascript",
    "cpp",
    "java"
  ],
  "starterCode": [
    {
      "language": "python",
      "boilerplate": "def designHitCounter(*args):\n    # TODO: Implement solution for Design Hit Counter\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = designHitCounter(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(designHitCounter(*input_data))\n"
    },
    {
      "language": "javascript",
      "boilerplate": "function designHitCounter(...args) {\n    // TODO: Implement solution for Design Hit Counter\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try {\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(designHitCounter(...parsed)));\n    } catch (e) {\n        console.log(designHitCounter(...lines));\n    }\n}\n"
    },
    {
      "language": "cpp",
      "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\n// Solution for Design Hit Counter\nclass Solution {\npublic:\n    void solve() {\n        // Write your solution here\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    // Driver reading from standard input\n    string line;\n    while (getline(cin, line)) {\n        if (!line.empty()) {\n            // Process input line\n        }\n    }\n    return 0;\n}\n"
    },
    {
      "language": "java",
      "boilerplate": "import java.util.*;\n\npublic class Solution {\n    // Solution for Design Hit Counter\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        while (sc.hasNextLine()) {\n            String line = sc.nextLine();\n            if (!line.trim().isEmpty()) {\n                // Process testcase line\n            }\n        }\n        sc.close();\n    }\n}\n"
    }
  ],
  "sampleTestCases": [
    {
      "input": "[\"HitCounter\",\"hit\",\"hit\",\"hit\",\"getHits\",\"hit\",\"getHits\",\"getHits\"]\n[[],[1],[2],[3],[4],[300],[300],[301]]",
      "output": "[null, null, null, null, 3, null, 4, 3]",
      "explanation": "Hits at 1, 2, 3 counted within 300 seconds."
    },
    {
      "input": "[\"HitCounter\",\"hit\",\"getHits\"]\n[[],[1],[301]]",
      "output": "[null, null, 0]",
      "explanation": "Timestamp 1 is expired at 301."
    }
  ],
  "hiddenTestCases": [
    {
      "input": "[\"HitCounter\",\"hit\",\"hit\",\"hit\",\"getHits\",\"hit\",\"getHits\",\"getHits\"]\n[[],[1],[2],[3],[4],[300],[300],[301]]",
      "expectedOutput": "[null, null, null, null, 3, null, 4, 3]",
      "weight": 1
    }
  ],
  "timeLimitMs": 2000,
  "memoryLimitMb": 256,
  "hints": [
    "Use a queue to store timestamps and evict timestamps <= timestamp - 300, or use circular array of size 300."
  ],
  "editorial": {
    "solutionMarkdown": "### Optimal Solution\nMaintain queue or 300-bucket circular buffer with timestamps and counts.",
    "complexityAnalysis": "Time: O(1) amortized, Space: O(1) fixed size 300"
  },
  "isGlobal": true,
  "status": "PUBLISHED"
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
      "frequencyCount": 44,
      "sourceNote": "Apple Practice Bank #17"
    }
  ],
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
      "boilerplate": "function topKFrequentElements(...args) {\n    // TODO: Implement solution for Top K Frequent Elements\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try {\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(topKFrequentElements(...parsed)));\n    } catch (e) {\n        console.log(topKFrequentElements(...lines));\n    }\n}\n"
    },
    {
      "language": "cpp",
      "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\n// Solution for Top K Frequent Elements\nclass Solution {\npublic:\n    void solve() {\n        // Write your solution here\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    // Driver reading from standard input\n    string line;\n    while (getline(cin, line)) {\n        if (!line.empty()) {\n            // Process input line\n        }\n    }\n    return 0;\n}\n"
    },
    {
      "language": "java",
      "boilerplate": "import java.util.*;\n\npublic class Solution {\n    // Solution for Top K Frequent Elements\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        while (sc.hasNextLine()) {\n            String line = sc.nextLine();\n            if (!line.trim().isEmpty()) {\n                // Process testcase line\n            }\n        }\n        sc.close();\n    }\n}\n"
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
      "expectedOutput": "[1, 2]",
      "weight": 1
    },
    {
      "input": "[1]\n1",
      "expectedOutput": "[1]",
      "weight": 1
    },
    {
      "input": "[4,1,-1,2,-1,2,3]\n2",
      "expectedOutput": "[-1, 2]",
      "weight": 1
    }
  ],
  "timeLimitMs": 2000,
  "memoryLimitMb": 256,
  "hints": [
    "Count frequencies with map, then use Bucket Sort or Min-Heap of size k."
  ],
  "editorial": {
    "solutionMarkdown": "### Optimal Solution\nBucket sort by frequency in O(N) or Min-Heap of size k in O(N log k).",
    "complexityAnalysis": "Time: O(N), Space: O(N)"
  },
  "isGlobal": true,
  "status": "PUBLISHED"
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
      "frequencyCount": 39,
      "sourceNote": "Apple Practice Bank #18"
    }
  ],
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
      "boilerplate": "function longestCommonSubsequence(...args) {\n    // TODO: Implement solution for Longest Common Subsequence\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try {\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(longestCommonSubsequence(...parsed)));\n    } catch (e) {\n        console.log(longestCommonSubsequence(...lines));\n    }\n}\n"
    },
    {
      "language": "cpp",
      "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\n// Solution for Longest Common Subsequence\nclass Solution {\npublic:\n    void solve() {\n        // Write your solution here\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    // Driver reading from standard input\n    string line;\n    while (getline(cin, line)) {\n        if (!line.empty()) {\n            // Process input line\n        }\n    }\n    return 0;\n}\n"
    },
    {
      "language": "java",
      "boilerplate": "import java.util.*;\n\npublic class Solution {\n    // Solution for Longest Common Subsequence\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        while (sc.hasNextLine()) {\n            String line = sc.nextLine();\n            if (!line.trim().isEmpty()) {\n                // Process testcase line\n            }\n        }\n        sc.close();\n    }\n}\n"
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
      "expectedOutput": "3",
      "weight": 1
    },
    {
      "input": "abc\nabc",
      "expectedOutput": "3",
      "weight": 1
    },
    {
      "input": "abc\ndef",
      "expectedOutput": "0",
      "weight": 1
    },
    {
      "input": "bsbininm\njmjkbkjkv",
      "expectedOutput": "1",
      "weight": 1
    }
  ],
  "timeLimitMs": 2000,
  "memoryLimitMb": 256,
  "hints": [
    "2D DP table: dp[i][j] = 1 + dp[i-1][j-1] if match, else max(dp[i-1][j], dp[i][j-1])."
  ],
  "editorial": {
    "solutionMarkdown": "### Optimal Solution\nStandard 2D DP LCS state matrix with 1D rolling array optimization.",
    "complexityAnalysis": "Time: O(M * N), Space: O(min(M, N))"
  },
  "isGlobal": true,
  "status": "PUBLISHED"
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
      "frequencyCount": 47,
      "sourceNote": "Apple Practice Bank #19"
    }
  ],
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
      "boilerplate": "function productOfArrayExceptSelf(...args) {\n    // TODO: Implement solution for Product of Array Except Self\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try {\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(productOfArrayExceptSelf(...parsed)));\n    } catch (e) {\n        console.log(productOfArrayExceptSelf(...lines));\n    }\n}\n"
    },
    {
      "language": "cpp",
      "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\n// Solution for Product of Array Except Self\nclass Solution {\npublic:\n    void solve() {\n        // Write your solution here\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    // Driver reading from standard input\n    string line;\n    while (getline(cin, line)) {\n        if (!line.empty()) {\n            // Process input line\n        }\n    }\n    return 0;\n}\n"
    },
    {
      "language": "java",
      "boilerplate": "import java.util.*;\n\npublic class Solution {\n    // Solution for Product of Array Except Self\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        while (sc.hasNextLine()) {\n            String line = sc.nextLine();\n            if (!line.trim().isEmpty()) {\n                // Process testcase line\n            }\n        }\n        sc.close();\n    }\n}\n"
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
      "expectedOutput": "[24, 12, 8, 6]",
      "weight": 1
    },
    {
      "input": "[-1,1,0,-3,3]",
      "expectedOutput": "[0, 0, 9, 0, 0]",
      "weight": 1
    },
    {
      "input": "[2,3]",
      "expectedOutput": "[3, 2]",
      "weight": 1
    }
  ],
  "timeLimitMs": 2000,
  "memoryLimitMb": 256,
  "hints": [
    "Compute prefix products in first pass, then multiply suffix products backwards."
  ],
  "editorial": {
    "solutionMarkdown": "### Optimal Solution\nResult array stores left prefix products. Second pass multiplies right running product in-place.",
    "complexityAnalysis": "Time: O(N), Space: O(1) extra auxiliary space"
  },
  "isGlobal": true,
  "status": "PUBLISHED"
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
      "frequencyCount": 48,
      "sourceNote": "Apple Practice Bank #20"
    }
  ],
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
      "boilerplate": "function maximumSubarray(...args) {\n    // TODO: Implement solution for Maximum Subarray\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try {\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(maximumSubarray(...parsed)));\n    } catch (e) {\n        console.log(maximumSubarray(...lines));\n    }\n}\n"
    },
    {
      "language": "cpp",
      "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\n// Solution for Maximum Subarray\nclass Solution {\npublic:\n    void solve() {\n        // Write your solution here\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    // Driver reading from standard input\n    string line;\n    while (getline(cin, line)) {\n        if (!line.empty()) {\n            // Process input line\n        }\n    }\n    return 0;\n}\n"
    },
    {
      "language": "java",
      "boilerplate": "import java.util.*;\n\npublic class Solution {\n    // Solution for Maximum Subarray\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        while (sc.hasNextLine()) {\n            String line = sc.nextLine();\n            if (!line.trim().isEmpty()) {\n                // Process testcase line\n            }\n        }\n        sc.close();\n    }\n}\n"
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
      "expectedOutput": "6",
      "weight": 1
    },
    {
      "input": "[1]",
      "expectedOutput": "1",
      "weight": 1
    },
    {
      "input": "[5,4,-1,7,8]",
      "expectedOutput": "23",
      "weight": 1
    },
    {
      "input": "[-1]",
      "expectedOutput": "-1",
      "weight": 1
    }
  ],
  "timeLimitMs": 2000,
  "memoryLimitMb": 256,
  "hints": [
    "Kadane's algorithm: curr_sum = max(num, curr_sum + num)."
  ],
  "editorial": {
    "solutionMarkdown": "### Optimal Solution\nKadane's linear algorithm tracking local and global max sum.",
    "complexityAnalysis": "Time: O(N), Space: O(1)"
  },
  "isGlobal": true,
  "status": "PUBLISHED"
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
      "frequencyCount": 34,
      "sourceNote": "Apple Practice Bank #21"
    }
  ],
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
      "boilerplate": "function spiralMatrix(...args) {\n    // TODO: Implement solution for Spiral Matrix\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try {\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(spiralMatrix(...parsed)));\n    } catch (e) {\n        console.log(spiralMatrix(...lines));\n    }\n}\n"
    },
    {
      "language": "cpp",
      "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\n// Solution for Spiral Matrix\nclass Solution {\npublic:\n    void solve() {\n        // Write your solution here\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    // Driver reading from standard input\n    string line;\n    while (getline(cin, line)) {\n        if (!line.empty()) {\n            // Process input line\n        }\n    }\n    return 0;\n}\n"
    },
    {
      "language": "java",
      "boilerplate": "import java.util.*;\n\npublic class Solution {\n    // Solution for Spiral Matrix\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        while (sc.hasNextLine()) {\n            String line = sc.nextLine();\n            if (!line.trim().isEmpty()) {\n                // Process testcase line\n            }\n        }\n        sc.close();\n    }\n}\n"
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
      "expectedOutput": "[1, 2, 3, 6, 9, 8, 7, 4, 5]",
      "weight": 1
    },
    {
      "input": "[[1]]",
      "expectedOutput": "[1]",
      "weight": 1
    }
  ],
  "timeLimitMs": 2000,
  "memoryLimitMb": 256,
  "hints": [
    "Maintain four boundaries: top, bottom, left, right. Increment/decrement after each border traversal."
  ],
  "editorial": {
    "solutionMarkdown": "### Optimal Solution\nShrink four pointers top, bottom, left, right inward until they cross.",
    "complexityAnalysis": "Time: O(M * N), Space: O(1) auxiliary"
  },
  "isGlobal": true,
  "status": "PUBLISHED"
},
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
      "frequencyCount": 37,
      "sourceNote": "Apple Practice Bank #22"
    }
  ],
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
      "boilerplate": "function reverseWordsInAString(...args) {\n    // TODO: Implement solution for Reverse Words in a String\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try {\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(reverseWordsInAString(...parsed)));\n    } catch (e) {\n        console.log(reverseWordsInAString(...lines));\n    }\n}\n"
    },
    {
      "language": "cpp",
      "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\n// Solution for Reverse Words in a String\nclass Solution {\npublic:\n    void solve() {\n        // Write your solution here\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    // Driver reading from standard input\n    string line;\n    while (getline(cin, line)) {\n        if (!line.empty()) {\n            // Process input line\n        }\n    }\n    return 0;\n}\n"
    },
    {
      "language": "java",
      "boilerplate": "import java.util.*;\n\npublic class Solution {\n    // Solution for Reverse Words in a String\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        while (sc.hasNextLine()) {\n            String line = sc.nextLine();\n            if (!line.trim().isEmpty()) {\n                // Process testcase line\n            }\n        }\n        sc.close();\n    }\n}\n"
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
      "expectedOutput": "\"blue is sky the\"",
      "weight": 1
    },
    {
      "input": "  hello world  ",
      "expectedOutput": "\"world hello\"",
      "weight": 1
    },
    {
      "input": "a good   example",
      "expectedOutput": "\"example good a\"",
      "weight": 1
    }
  ],
  "timeLimitMs": 2000,
  "memoryLimitMb": 256,
  "hints": [
    "Split by whitespace, filter empty, reverse and join with space."
  ],
  "editorial": {
    "solutionMarkdown": "### Optimal Solution\nSplit tokens or reverse whole string then reverse individual words in-place.",
    "complexityAnalysis": "Time: O(N), Space: O(N)"
  },
  "isGlobal": true,
  "status": "PUBLISHED"
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
      "frequencyCount": 42,
      "sourceNote": "Apple Practice Bank #23"
    }
  ],
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
      "boilerplate": "function kthLargestElementInAnArray(...args) {\n    // TODO: Implement solution for Kth Largest Element in an Array\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try {\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(kthLargestElementInAnArray(...parsed)));\n    } catch (e) {\n        console.log(kthLargestElementInAnArray(...lines));\n    }\n}\n"
    },
    {
      "language": "cpp",
      "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\n// Solution for Kth Largest Element in an Array\nclass Solution {\npublic:\n    void solve() {\n        // Write your solution here\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    // Driver reading from standard input\n    string line;\n    while (getline(cin, line)) {\n        if (!line.empty()) {\n            // Process input line\n        }\n    }\n    return 0;\n}\n"
    },
    {
      "language": "java",
      "boilerplate": "import java.util.*;\n\npublic class Solution {\n    // Solution for Kth Largest Element in an Array\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        while (sc.hasNextLine()) {\n            String line = sc.nextLine();\n            if (!line.trim().isEmpty()) {\n                // Process testcase line\n            }\n        }\n        sc.close();\n    }\n}\n"
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
      "expectedOutput": "5",
      "weight": 1
    },
    {
      "input": "[3,2,3,1,2,4,5,5,6]\n4",
      "expectedOutput": "4",
      "weight": 1
    },
    {
      "input": "[1]\n1",
      "expectedOutput": "1",
      "weight": 1
    }
  ],
  "timeLimitMs": 2000,
  "memoryLimitMb": 256,
  "hints": [
    "Use a Min-Heap of size k or the Quickselect algorithm."
  ],
  "editorial": {
    "solutionMarkdown": "### Optimal Solution\nMin-heap of capacity k maintains the k largest items, heap root is kth largest.",
    "complexityAnalysis": "Time: O(N log k) with heap or O(N) average Quickselect, Space: O(k)"
  },
  "isGlobal": true,
  "status": "PUBLISHED"
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
      "frequencyCount": 31,
      "sourceNote": "Apple Practice Bank #24"
    }
  ],
  "supportedLanguages": [
    "python",
    "javascript",
    "cpp",
    "java"
  ],
  "starterCode": [
    {
      "language": "python",
      "boilerplate": "def timeBasedKeyvalueStore(*args):\n    # TODO: Implement solution for Time Based Key-Value Store\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = timeBasedKeyvalueStore(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(timeBasedKeyvalueStore(*input_data))\n"
    },
    {
      "language": "javascript",
      "boilerplate": "function timeBasedKeyvalueStore(...args) {\n    // TODO: Implement solution for Time Based Key-Value Store\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try {\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(timeBasedKeyvalueStore(...parsed)));\n    } catch (e) {\n        console.log(timeBasedKeyvalueStore(...lines));\n    }\n}\n"
    },
    {
      "language": "cpp",
      "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\n// Solution for Time Based Key-Value Store\nclass Solution {\npublic:\n    void solve() {\n        // Write your solution here\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    // Driver reading from standard input\n    string line;\n    while (getline(cin, line)) {\n        if (!line.empty()) {\n            // Process input line\n        }\n    }\n    return 0;\n}\n"
    },
    {
      "language": "java",
      "boilerplate": "import java.util.*;\n\npublic class Solution {\n    // Solution for Time Based Key-Value Store\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        while (sc.hasNextLine()) {\n            String line = sc.nextLine();\n            if (!line.trim().isEmpty()) {\n                // Process testcase line\n            }\n        }\n        sc.close();\n    }\n}\n"
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
      "expectedOutput": "[null, null, \"bar\", \"bar\", null, \"bar2\", \"bar2\"]",
      "weight": 1
    }
  ],
  "timeLimitMs": 2000,
  "memoryLimitMb": 256,
  "hints": [
    "Map key to sorted list of (timestamp, value) pairs. Use binary search (upper_bound / bisect_right) to find largest timestamp <= target."
  ],
  "editorial": {
    "solutionMarkdown": "### Optimal Solution\nHash map storing timestamp-value vectors per key; query uses binary search.",
    "complexityAnalysis": "Time: set O(1), get O(log N), Space: O(N)"
  },
  "isGlobal": true,
  "status": "PUBLISHED"
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
      "frequencyCount": 46,
      "sourceNote": "Apple Candidate Report S10"
    }
  ],
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
      "boilerplate": "function mergeKSortedLists(...args) {\n    // TODO: Implement solution for Merge k Sorted Lists\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try {\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(mergeKSortedLists(...parsed)));\n    } catch (e) {\n        console.log(mergeKSortedLists(...lines));\n    }\n}\n"
    },
    {
      "language": "cpp",
      "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\n// Solution for Merge k Sorted Lists\nclass Solution {\npublic:\n    void solve() {\n        // Write your solution here\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    // Driver reading from standard input\n    string line;\n    while (getline(cin, line)) {\n        if (!line.empty()) {\n            // Process input line\n        }\n    }\n    return 0;\n}\n"
    },
    {
      "language": "java",
      "boilerplate": "import java.util.*;\n\npublic class Solution {\n    // Solution for Merge k Sorted Lists\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        while (sc.hasNextLine()) {\n            String line = sc.nextLine();\n            if (!line.trim().isEmpty()) {\n                // Process testcase line\n            }\n        }\n        sc.close();\n    }\n}\n"
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
      "expectedOutput": "[1, 1, 2, 3, 4, 4, 5, 6]",
      "weight": 1
    },
    {
      "input": "[]",
      "expectedOutput": "[]",
      "weight": 1
    },
    {
      "input": "[[]]",
      "expectedOutput": "[]",
      "weight": 1
    }
  ],
  "timeLimitMs": 2000,
  "memoryLimitMb": 256,
  "hints": [
    "Use a Min-Heap of size k holding the current head of each list, or divide and conquer pairwise merge."
  ],
  "editorial": {
    "solutionMarkdown": "### Optimal Solution\nMin-heap storing (val, node). Always pop smallest and advance list pointer.",
    "complexityAnalysis": "Time: O(N log k) where N is total nodes, Space: O(k)"
  },
  "isGlobal": true,
  "status": "PUBLISHED"
},
];
