/* eslint-disable */
// Auto-generated Coding Problem Catalog (Apple, Meta, Microsoft, Google, Accenture, Infosys, TCS) - Chunk faang1
export const faang1 = [
  {
    "title": "0/1 Knapsack",
    "slug": "0-1-knapsack",
    "description": "Given `n` items each with a weight and a value, determine the maximum value of items that can be placed in a knapsack of capacity `W`. Each item can either be picked once or not picked (0/1 choice).\n\n### Example 1:\n```\nInput: [60,100,120]\n[10,20,30]\n50\nOutput: 220\nExplanation: Pick item 2 (wt 20, val 100) and item 3 (wt 30, val 120) for total weight 50 and value 220.\n```\n\n### Example 2:\n```\nInput: [10,20,30]\n[1,1,1]\n2\nOutput: 50\nExplanation: Pick items with values 20 and 30 for weight 2.\n```",
    "difficulty": "MEDIUM",
    "category": "DP",
    "patterns": [
      "Dynamic Programming"
    ],
    "topics": [
      "Dynamic Programming"
    ],
    "companyTags": [
      {
        "company": "Infosys",
        "yearReported": 2025,
        "verified": false,
        "frequencyCount": 28,
        "sourceNote": "Infosys Practice Bank #92"
      }
    ],
    "supportedLanguages": [
      "python",
      "javascript",
      "cpp",
      "java"
    ],
    "starterCode": [
      {
        "language": "python",
        "boilerplate": "def 01Knapsack(*args):\n    # TODO: Implement solution for 0/1 Knapsack\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = 01Knapsack(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(01Knapsack(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function 01Knapsack(...args) {\n    // TODO: Implement solution for 0/1 Knapsack\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(01Knapsack(...parsed)));\n    } catch (e) {\n        console.log(01Knapsack(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for 0/1 Knapsack\n        // TODO: Read input from cin and implement solution\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        // TODO: Read from br and implement solution\n    }\n}\n"
      }
    ],
    "sampleTestCases": [
      {
        "input": "[60,100,120]\n[10,20,30]\n50",
        "output": "220",
        "explanation": "Pick item 2 (wt 20, val 100) and item 3 (wt 30, val 120) for total weight 50 and value 220."
      },
      {
        "input": "[10,20,30]\n[1,1,1]\n2",
        "output": "50",
        "explanation": "Pick items with values 20 and 30 for weight 2."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "[60,100,120]\n[10,20,30]\n50",
        "output": "220",
        "isHidden": true
      },
      {
        "input": "[10,20,30]\n[1,1,1]\n2",
        "output": "50",
        "isHidden": true
      },
      {
        "input": "[10]\n[5]\n3",
        "output": "0",
        "isHidden": true
      }
    ],
    "hints": [
      "dp[w] represents maximum value with weight capacity w. Iterate weights backwards."
    ],
    "editorial": {
      "approach": "Optimal Approach for 0/1 Knapsack",
      "solutionMarkdown": "### Optimal Solution\n\nClassic 0/1 knapsack using 1D space optimization: dp[w] = max(dp[w], dp[w - wt[i]] + val[i]).\n\n### Complexity\n- Time: O(N * W), Space: O(W)",
      "timeComplexity": "O(N * W)",
      "spaceComplexity": "O(W)"
    },
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0
  },
  {
    "title": "1-D Candy Crush (Interview Variant)",
    "slug": "1-d-candy-crush",
    "description": "Given a string `s`, repeatedly remove adjacent groups of 3 or more identical characters until no such groups remain. Return the resulting string.\n\n### Example 1:\n```\nInput: aaabbbc\nOutput: \"c\"\nExplanation: Both 'aaa' and 'bbb' are removed, leaving 'c'.\n```\n\n### Example 2:\n```\nInput: aabbbacd\nOutput: \"cd\"\nExplanation: 'bbb' is removed -> 'aaacd' -> 'aaa' is removed -> 'cd'.\n```",
    "difficulty": "MEDIUM",
    "category": "DSA",
    "patterns": [
      "Stack",
      "String",
      "Two Pointers"
    ],
    "topics": [
      "Stack",
      "String",
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
        "boilerplate": "def 1DCandyCrush(*args):\n    # TODO: Implement solution for 1-D Candy Crush (Interview Variant)\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = 1DCandyCrush(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(1DCandyCrush(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function 1DCandyCrush(...args) {\n    // TODO: Implement solution for 1-D Candy Crush (Interview Variant)\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(1DCandyCrush(...parsed)));\n    } catch (e) {\n        console.log(1DCandyCrush(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for 1-D Candy Crush (Interview Variant)\n        // TODO: Read input from cin and implement solution\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        // TODO: Read from br and implement solution\n    }\n}\n"
      }
    ],
    "sampleTestCases": [
      {
        "input": "aaabbbc",
        "output": "\"c\"",
        "explanation": "Both 'aaa' and 'bbb' are removed, leaving 'c'."
      },
      {
        "input": "aabbbacd",
        "output": "\"cd\"",
        "explanation": "'bbb' is removed -> 'aaacd' -> 'aaa' is removed -> 'cd'."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "aaabbbc",
        "output": "\"c\"",
        "isHidden": true
      },
      {
        "input": "aabbbacd",
        "output": "\"cd\"",
        "isHidden": true
      },
      {
        "input": "baaabbbabbccccd",
        "output": "\"abbd\"",
        "isHidden": true
      }
    ],
    "hints": [
      "Use a stack storing pairs: (character, consecutive_count)."
    ],
    "editorial": {
      "approach": "Optimal Approach for 1-D Candy Crush (Interview Variant)",
      "solutionMarkdown": "### Optimal Solution\n\nMaintain a stack of [char, count]. When current char matches top, increment count; if count reaches 3, pop.\n\n### Complexity\n- Time: O(N), Space: O(N)",
      "timeComplexity": "O(N)",
      "spaceComplexity": "O(N)"
    },
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0
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
        "sourceNote": "Accenture Practice Bank #40"
      },
      {
        "company": "Infosys",
        "yearReported": 2025,
        "verified": true,
        "frequencyCount": 42,
        "sourceNote": "Infosys Interview Question #25"
      }
    ],
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
        "boilerplate": "function 3sum(...args) {\n    // TODO: Implement solution for 3Sum\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(3sum(...parsed)));\n    } catch (e) {\n        console.log(3sum(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for 3Sum\n        // TODO: Read input from cin and implement solution\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        // TODO: Read from br and implement solution\n    }\n}\n"
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
        "output": "[[-1, -1, 2], [-1, 0, 1]]",
        "isHidden": true
      },
      {
        "input": "[0,1,1]",
        "output": "[]",
        "isHidden": true
      },
      {
        "input": "[0,0,0]",
        "output": "[[0, 0, 0]]",
        "isHidden": true
      }
    ],
    "hints": [
      "Sort array. For each i, use two pointers left and right to find nums[left] + nums[right] == -nums[i]. Skip duplicates."
    ],
    "editorial": {
      "approach": "Optimal Approach for 3Sum",
      "solutionMarkdown": "### Optimal Solution\n\nSort + two pointers. Skip adjacent duplicate values to avoid duplicate triplets.\n\n### Complexity\n- Time: O(N^2), Space: O(1) or O(N) for sorting",
      "timeComplexity": "O(N^2)",
      "spaceComplexity": "O(1) or O(N) for sorting"
    },
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0
  },
  {
    "title": "3Sum Closest",
    "slug": "3sum-closest",
    "description": "Given an integer array `nums` of length `n` and an integer `target`, find three integers in `nums` such that the sum is closest to `target`. Return *the sum of the three integers*.\n\n### Example 1:\n```\nInput: [-1,2,1,-4]\n1\nOutput: 2\nExplanation: The sum that is closest to the target is 2 (-1 + 2 + 1 = 2).\n```\n\n### Example 2:\n```\nInput: [0,0,0]\n1\nOutput: 0\nExplanation: Sum is 0.\n```",
    "difficulty": "MEDIUM",
    "category": "DSA",
    "patterns": [
      "Sorting",
      "Two Pointers",
      "Array"
    ],
    "topics": [
      "Sorting",
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
        "boilerplate": "def 3sumClosest(*args):\n    # TODO: Implement solution for 3Sum Closest\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = 3sumClosest(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(3sumClosest(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function 3sumClosest(...args) {\n    // TODO: Implement solution for 3Sum Closest\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(3sumClosest(...parsed)));\n    } catch (e) {\n        console.log(3sumClosest(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for 3Sum Closest\n        // TODO: Read input from cin and implement solution\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        // TODO: Read from br and implement solution\n    }\n}\n"
      }
    ],
    "sampleTestCases": [
      {
        "input": "[-1,2,1,-4]\n1",
        "output": "2",
        "explanation": "The sum that is closest to the target is 2 (-1 + 2 + 1 = 2)."
      },
      {
        "input": "[0,0,0]\n1",
        "output": "0",
        "explanation": "Sum is 0."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "[-1,2,1,-4]\n1",
        "output": "2",
        "isHidden": true
      },
      {
        "input": "[0,0,0]\n1",
        "output": "0",
        "isHidden": true
      },
      {
        "input": "[1,1,1,0]\n-100",
        "output": "2",
        "isHidden": true
      }
    ],
    "hints": [
      "Sort array and use two pointers for each element i."
    ],
    "editorial": {
      "approach": "Optimal Approach for 3Sum Closest",
      "solutionMarkdown": "### Optimal Solution\n\nSort array. For each i, sweep left and right pointers updating closest_sum if abs(curr_sum - target) < abs(closest_sum - target).\n\n### Complexity\n- Time: O(N^2), Space: O(1) auxiliary",
      "timeComplexity": "O(N^2)",
      "spaceComplexity": "O(1) auxiliary"
    },
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0
  },
  {
    "title": "3Sum Smaller",
    "slug": "3sum-smaller",
    "description": "Given an array of `n` integers `nums` and an integer `target`, find the number of index triplets `i, j, k` with `0 <= i < j < k < n` that satisfy the condition `nums[i] + nums[j] + nums[k] < target`.\n\n### Example 1:\n```\nInput: [-2,0,1,3]\n2\nOutput: 2\nExplanation: Triplets: [-2,0,1] and [-2,0,3].\n```\n\n### Example 2:\n```\nInput: []\n0\nOutput: 0\nExplanation: Empty array.\n```",
    "difficulty": "MEDIUM",
    "category": "DSA",
    "patterns": [
      "Sorting",
      "Two Pointers",
      "Array"
    ],
    "topics": [
      "Sorting",
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
        "boilerplate": "def 3sumSmaller(*args):\n    # TODO: Implement solution for 3Sum Smaller\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = 3sumSmaller(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(3sumSmaller(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function 3sumSmaller(...args) {\n    // TODO: Implement solution for 3Sum Smaller\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(3sumSmaller(...parsed)));\n    } catch (e) {\n        console.log(3sumSmaller(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for 3Sum Smaller\n        // TODO: Read input from cin and implement solution\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        // TODO: Read from br and implement solution\n    }\n}\n"
      }
    ],
    "sampleTestCases": [
      {
        "input": "[-2,0,1,3]\n2",
        "output": "2",
        "explanation": "Triplets: [-2,0,1] and [-2,0,3]."
      },
      {
        "input": "[]\n0",
        "output": "0",
        "explanation": "Empty array."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "[-2,0,1,3]\n2",
        "output": "2",
        "isHidden": true
      },
      {
        "input": "[]\n0",
        "output": "0",
        "isHidden": true
      },
      {
        "input": "[0]\n0",
        "output": "0",
        "isHidden": true
      }
    ],
    "hints": [
      "Sort array. When nums[i] + nums[left] + nums[right] < target, then all indices from left to right-1 also form valid triplets."
    ],
    "editorial": {
      "approach": "Optimal Approach for 3Sum Smaller",
      "solutionMarkdown": "### Optimal Solution\n\nIf sum < target, count += (right - left) and left++; else right--.\n\n### Complexity\n- Time: O(N^2), Space: O(1)",
      "timeComplexity": "O(N^2)",
      "spaceComplexity": "O(1)"
    },
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0
  },
  {
    "title": "4Sum",
    "slug": "4sum",
    "description": "Given an array `nums` of `n` integers, return an array of all the **unique** quadruplets `[nums[a], nums[b], nums[c], nums[d]]` such that `a, b, c, d` are distinct and sum to `target`.\n\n### Example 1:\n```\nInput: [1,0,-1,0,-2,2]\n0\nOutput: [[-2, -1, 1, 2], [-2, 0, 0, 2], [-1, 0, 0, 1]]\nExplanation: Unique quadruplets summing to 0.\n```\n\n### Example 2:\n```\nInput: [2,2,2,2,2]\n8\nOutput: [[2, 2, 2, 2]]\nExplanation: Single unique quadruplet.\n```",
    "difficulty": "MEDIUM",
    "category": "DSA",
    "patterns": [
      "Sorting",
      "Two Pointers",
      "Array"
    ],
    "topics": [
      "Sorting",
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
      },
      {
        "company": "Accenture",
        "yearReported": 2025,
        "verified": false,
        "frequencyCount": 25,
        "sourceNote": "Accenture Practice Bank #41"
      }
    ],
    "supportedLanguages": [
      "python",
      "javascript",
      "cpp",
      "java"
    ],
    "starterCode": [
      {
        "language": "python",
        "boilerplate": "def 4sum(*args):\n    # TODO: Implement solution for 4Sum\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = 4sum(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(4sum(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function 4sum(...args) {\n    // TODO: Implement solution for 4Sum\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(4sum(...parsed)));\n    } catch (e) {\n        console.log(4sum(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for 4Sum\n        // TODO: Read input from cin and implement solution\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        // TODO: Read from br and implement solution\n    }\n}\n"
      }
    ],
    "sampleTestCases": [
      {
        "input": "[1,0,-1,0,-2,2]\n0",
        "output": "[[-2, -1, 1, 2], [-2, 0, 0, 2], [-1, 0, 0, 1]]",
        "explanation": "Unique quadruplets summing to 0."
      },
      {
        "input": "[2,2,2,2,2]\n8",
        "output": "[[2, 2, 2, 2]]",
        "explanation": "Single unique quadruplet."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "[1,0,-1,0,-2,2]\n0",
        "output": "[[-2, -1, 1, 2], [-2, 0, 0, 2], [-1, 0, 0, 1]]",
        "isHidden": true
      },
      {
        "input": "[2,2,2,2,2]\n8",
        "output": "[[2, 2, 2, 2]]",
        "isHidden": true
      }
    ],
    "hints": [
      "Generalized kSum: two nested loops reducing to 2Sum with two pointers. Skip duplicates."
    ],
    "editorial": {
      "approach": "Optimal Approach for 4Sum",
      "solutionMarkdown": "### Optimal Solution\n\nSort array. Nested loops for first two numbers, then two-pointer scan for remaining two.\n\n### Complexity\n- Time: O(N^3), Space: O(1)",
      "timeComplexity": "O(N^3)",
      "spaceComplexity": "O(1)"
    },
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0
  },
  {
    "title": "Accounts Merge",
    "slug": "accounts-merge",
    "description": "Given a list of `accounts` where each element `accounts[i]` is a list of strings, the first element `accounts[i][0]` is a name, and the rest are emails representing that account. Merge accounts that share common emails.\n\n### Example 1:\n```\nInput: [[\"John\",\"johnsmith@mail.com\",\"john_newyork@mail.com\"],[\"John\",\"johnsmith@mail.com\",\"john00@mail.com\"],[\"Mary\",\"mary@mail.com\"],[\"John\",\"johnnybravo@mail.com\"]]\nOutput: [[\"John\", \"john00@mail.com\", \"john_newyork@mail.com\", \"johnsmith@mail.com\"], [\"Mary\", \"mary@mail.com\"], [\"John\", \"johnnybravo@mail.com\"]]\nExplanation: The two Johns with johnsmith@mail.com are merged.\n```\n\n### Example 2:\n```\nInput: [[\"Gabe\",\"Gabe0@m.co\",\"Gabe3@m.co\",\"Gabe1@m.co\"],[\"Kevin\",\"Kevin3@m.co\",\"Kevin5@m.co\",\"Kevin0@m.co\"],[\"Ethan\",\"Ethan5@m.co\",\"Ethan4@m.co\",\"Ethan0@m.co\"],[\"Hanzo\",\"Hanzo3@m.co\",\"Hanzo1@m.co\",\"Hanzo0@m.co\"],[\"Fern\",\"Fern5@m.co\",\"Fern1@m.co\",\"Fern0@m.co\"]]\nOutput: [[\"Ethan\", \"Ethan0@m.co\", \"Ethan4@m.co\", \"Ethan5@m.co\"], [\"Fern\", \"Fern0@m.co\", \"Fern1@m.co\", \"Fern5@m.co\"], [\"Gabe\", \"Gabe0@m.co\", \"Gabe1@m.co\", \"Gabe3@m.co\"], [\"Hanzo\", \"Hanzo0@m.co\", \"Hanzo1@m.co\", \"Hanzo3@m.co\"], [\"Kevin\", \"Kevin0@m.co\", \"Kevin3@m.co\", \"Kevin5@m.co\"]]\nExplanation: Accounts with disjoint emails kept separate.\n```",
    "difficulty": "MEDIUM",
    "category": "DSA",
    "patterns": [
      "Union Find",
      "Graph",
      "DFS / BFS"
    ],
    "topics": [
      "Union Find",
      "Graph",
      "DFS / BFS"
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
        "sourceNote": "Infosys Interview Question #77"
      }
    ],
    "supportedLanguages": [
      "python",
      "javascript",
      "cpp",
      "java"
    ],
    "starterCode": [
      {
        "language": "python",
        "boilerplate": "def accountsMerge(*args):\n    # TODO: Implement solution for Accounts Merge\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = accountsMerge(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(accountsMerge(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function accountsMerge(...args) {\n    // TODO: Implement solution for Accounts Merge\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(accountsMerge(...parsed)));\n    } catch (e) {\n        console.log(accountsMerge(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Accounts Merge\n        // TODO: Read input from cin and implement solution\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        // TODO: Read from br and implement solution\n    }\n}\n"
      }
    ],
    "sampleTestCases": [
      {
        "input": "[[\"John\",\"johnsmith@mail.com\",\"john_newyork@mail.com\"],[\"John\",\"johnsmith@mail.com\",\"john00@mail.com\"],[\"Mary\",\"mary@mail.com\"],[\"John\",\"johnnybravo@mail.com\"]]",
        "output": "[[\"John\", \"john00@mail.com\", \"john_newyork@mail.com\", \"johnsmith@mail.com\"], [\"Mary\", \"mary@mail.com\"], [\"John\", \"johnnybravo@mail.com\"]]",
        "explanation": "The two Johns with johnsmith@mail.com are merged."
      },
      {
        "input": "[[\"Gabe\",\"Gabe0@m.co\",\"Gabe3@m.co\",\"Gabe1@m.co\"],[\"Kevin\",\"Kevin3@m.co\",\"Kevin5@m.co\",\"Kevin0@m.co\"],[\"Ethan\",\"Ethan5@m.co\",\"Ethan4@m.co\",\"Ethan0@m.co\"],[\"Hanzo\",\"Hanzo3@m.co\",\"Hanzo1@m.co\",\"Hanzo0@m.co\"],[\"Fern\",\"Fern5@m.co\",\"Fern1@m.co\",\"Fern0@m.co\"]]",
        "output": "[[\"Ethan\", \"Ethan0@m.co\", \"Ethan4@m.co\", \"Ethan5@m.co\"], [\"Fern\", \"Fern0@m.co\", \"Fern1@m.co\", \"Fern5@m.co\"], [\"Gabe\", \"Gabe0@m.co\", \"Gabe1@m.co\", \"Gabe3@m.co\"], [\"Hanzo\", \"Hanzo0@m.co\", \"Hanzo1@m.co\", \"Hanzo3@m.co\"], [\"Kevin\", \"Kevin0@m.co\", \"Kevin3@m.co\", \"Kevin5@m.co\"]]",
        "explanation": "Accounts with disjoint emails kept separate."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "[[\"John\",\"johnsmith@mail.com\",\"john_newyork@mail.com\"],[\"John\",\"johnsmith@mail.com\",\"john00@mail.com\"],[\"Mary\",\"mary@mail.com\"],[\"John\",\"johnnybravo@mail.com\"]]",
        "output": "[[\"John\", \"john00@mail.com\", \"john_newyork@mail.com\", \"johnsmith@mail.com\"], [\"Mary\", \"mary@mail.com\"], [\"John\", \"johnnybravo@mail.com\"]]",
        "isHidden": true
      }
    ],
    "hints": [
      "Use Disjoint Set Union (DSU) to union emails belonging to the same account."
    ],
    "editorial": {
      "approach": "Optimal Approach for Accounts Merge",
      "solutionMarkdown": "### Optimal Solution\n\nUnion-find connects email parents. Group emails by root and sort lexicographically.\n\n### Complexity\n- Time: O(N * K log(N * K)), Space: O(N * K)",
      "timeComplexity": "O(N * K log(N * K))",
      "spaceComplexity": "O(N * K)"
    },
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0
  },
  {
    "title": "Add Binary",
    "slug": "add-binary",
    "description": "Given two binary strings `a` and `b`, return *their sum as a binary string*.\n\n### Example 1:\n```\nInput: 11\n1\nOutput: \"100\"\nExplanation: 3 + 1 = 4 in binary (100).\n```\n\n### Example 2:\n```\nInput: 1010\n1011\nOutput: \"10101\"\nExplanation: 10 + 11 = 21 in binary (10101).\n```",
    "difficulty": "EASY",
    "category": "DSA",
    "patterns": [
      "String",
      "Math",
      "Bit Manipulation"
    ],
    "topics": [
      "String",
      "Math",
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
        "boilerplate": "def addBinary(*args):\n    # TODO: Implement solution for Add Binary\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = addBinary(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(addBinary(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function addBinary(...args) {\n    // TODO: Implement solution for Add Binary\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(addBinary(...parsed)));\n    } catch (e) {\n        console.log(addBinary(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Add Binary\n        // TODO: Read input from cin and implement solution\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        // TODO: Read from br and implement solution\n    }\n}\n"
      }
    ],
    "sampleTestCases": [
      {
        "input": "11\n1",
        "output": "\"100\"",
        "explanation": "3 + 1 = 4 in binary (100)."
      },
      {
        "input": "1010\n1011",
        "output": "\"10101\"",
        "explanation": "10 + 11 = 21 in binary (10101)."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "11\n1",
        "output": "\"100\"",
        "isHidden": true
      },
      {
        "input": "1010\n1011",
        "output": "\"10101\"",
        "isHidden": true
      },
      {
        "input": "0\n0",
        "output": "\"0\"",
        "isHidden": true
      }
    ],
    "hints": [
      "Iterate from right to left with a carry variable."
    ],
    "editorial": {
      "approach": "Optimal Approach for Add Binary",
      "solutionMarkdown": "### Optimal Solution\n\nTwo-pointer backwards scan accumulating sum % 2 and carry // 2.\n\n### Complexity\n- Time: O(max(N, M)), Space: O(max(N, M))",
      "timeComplexity": "O(max(N",
      "spaceComplexity": "M))"
    },
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0
  },
  {
    "title": "Add Strings",
    "slug": "add-strings",
    "description": "Given two non-negative integers, `num1` and `num2` represented as string, return *the sum of `num1` and `num2` as a string* without using any built-in BigInteger library.\n\n### Example 1:\n```\nInput: 11\n123\nOutput: \"134\"\nExplanation: 11 + 123 = 134.\n```\n\n### Example 2:\n```\nInput: 456\n77\nOutput: \"533\"\nExplanation: 456 + 77 = 533.\n```",
    "difficulty": "EASY",
    "category": "DSA",
    "patterns": [
      "String",
      "Math",
      "Two Pointers"
    ],
    "topics": [
      "String",
      "Math",
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
        "boilerplate": "def addStrings(*args):\n    # TODO: Implement solution for Add Strings\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = addStrings(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(addStrings(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function addStrings(...args) {\n    // TODO: Implement solution for Add Strings\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(addStrings(...parsed)));\n    } catch (e) {\n        console.log(addStrings(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Add Strings\n        // TODO: Read input from cin and implement solution\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        // TODO: Read from br and implement solution\n    }\n}\n"
      }
    ],
    "sampleTestCases": [
      {
        "input": "11\n123",
        "output": "\"134\"",
        "explanation": "11 + 123 = 134."
      },
      {
        "input": "456\n77",
        "output": "\"533\"",
        "explanation": "456 + 77 = 533."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "11\n123",
        "output": "\"134\"",
        "isHidden": true
      },
      {
        "input": "456\n77",
        "output": "\"533\"",
        "isHidden": true
      },
      {
        "input": "0\n0",
        "output": "\"0\"",
        "isHidden": true
      }
    ],
    "hints": [
      "Add digit by digit from right to left keeping track of carry."
    ],
    "editorial": {
      "approach": "Optimal Approach for Add Strings",
      "solutionMarkdown": "### Optimal Solution\n\nTwo pointers traversing backwards, appending sum % 10, then reversing final string.\n\n### Complexity\n- Time: O(max(N, M)), Space: O(max(N, M))",
      "timeComplexity": "O(max(N",
      "spaceComplexity": "M))"
    },
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0
  },
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
        "company": "TCS",
        "yearReported": 2025,
        "verified": false,
        "frequencyCount": 30,
        "sourceNote": "TCS Practice Bank #56"
      }
    ],
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
        "boilerplate": "function addTwoNumbers(...args) {\n    // TODO: Implement solution for Add Two Numbers\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(addTwoNumbers(...parsed)));\n    } catch (e) {\n        console.log(addTwoNumbers(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Add Two Numbers\n        // TODO: Read input from cin and implement solution\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        // TODO: Read from br and implement solution\n    }\n}\n"
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
        "output": "[7, 0, 8]",
        "isHidden": true
      },
      {
        "input": "[9,9,9,9,9,9,9]\n[9,9,9,9]",
        "output": "[8, 9, 9, 9, 0, 0, 0, 1]",
        "isHidden": true
      }
    ],
    "hints": [
      "Simulate digit by digit addition with a carry variable."
    ],
    "editorial": {
      "approach": "Optimal Approach for Add Two Numbers",
      "solutionMarkdown": "### Optimal Solution\n\nIterate both lists simultaneously while l1 or l2 or carry > 0. Link sum % 10 and propagate sum // 10.\n\n### Complexity\n- Time: O(max(N, M)), Space: O(max(N, M))",
      "timeComplexity": "O(max(N",
      "spaceComplexity": "M))"
    },
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0
  },
  {
    "title": "Aggressive Cows",
    "slug": "aggressive-cows",
    "description": "You are given an array `stalls` representing stall positions on a line and an integer `k` (number of cows). Assign stalls to `k` cows such that the minimum distance between any two cows is as large as possible. Return that largest minimum distance.\n\n### Example 1:\n```\nInput: [1,2,4,8,9]\n3\nOutput: 3\nExplanation: Place cows at stalls 1, 4, and 8 or 9. Minimum distance is 3.\n```\n\n### Example 2:\n```\nInput: [10,1,2,7,5]\n3\nOutput: 4\nExplanation: Stalls sorted: [1, 2, 5, 7, 10]. Place cows at 1, 5, 10. Distance min(4, 5) = 4.\n```",
    "difficulty": "MEDIUM",
    "category": "DSA",
    "patterns": [
      "Binary Search",
      "Greedy"
    ],
    "topics": [
      "Binary Search",
      "Greedy"
    ],
    "companyTags": [
      {
        "company": "Infosys",
        "yearReported": 2025,
        "verified": true,
        "frequencyCount": 42,
        "sourceNote": "Infosys Interview Question #34"
      }
    ],
    "supportedLanguages": [
      "python",
      "javascript",
      "cpp",
      "java"
    ],
    "starterCode": [
      {
        "language": "python",
        "boilerplate": "def aggressiveCows(*args):\n    # TODO: Implement solution for Aggressive Cows\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = aggressiveCows(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(aggressiveCows(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function aggressiveCows(...args) {\n    // TODO: Implement solution for Aggressive Cows\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(aggressiveCows(...parsed)));\n    } catch (e) {\n        console.log(aggressiveCows(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Aggressive Cows\n        // TODO: Read input from cin and implement solution\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        // TODO: Read from br and implement solution\n    }\n}\n"
      }
    ],
    "sampleTestCases": [
      {
        "input": "[1,2,4,8,9]\n3",
        "output": "3",
        "explanation": "Place cows at stalls 1, 4, and 8 or 9. Minimum distance is 3."
      },
      {
        "input": "[10,1,2,7,5]\n3",
        "output": "4",
        "explanation": "Stalls sorted: [1, 2, 5, 7, 10]. Place cows at 1, 5, 10. Distance min(4, 5) = 4."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "[1,2,4,8,9]\n3",
        "output": "3",
        "isHidden": true
      },
      {
        "input": "[10,1,2,7,5]\n3",
        "output": "4",
        "isHidden": true
      },
      {
        "input": "[1,5]\n2",
        "output": "4",
        "isHidden": true
      }
    ],
    "hints": [
      "Sort stalls. Binary search on minimum distance d. Greedily place next cow if distance >= d."
    ],
    "editorial": {
      "approach": "Optimal Approach for Aggressive Cows",
      "solutionMarkdown": "### Optimal Solution\n\nBinary search on distance answer range [1, stalls[-1] - stalls[0]]. Greedy check canPlace(d).\n\n### Complexity\n- Time: O(N log(max_dist)), Space: O(1)",
      "timeComplexity": "O(N log(max_dist))",
      "spaceComplexity": "O(1)"
    },
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0
  },
  {
    "title": "All Nodes Distance K in Binary Tree",
    "slug": "all-nodes-distance-k-in-binary-tree",
    "description": "Given the `root` of a binary tree, the value of a target node `target`, and an integer `k`, return an array of the values of all nodes that have a distance `k` from the target node.\n\n### Example 1:\n```\nInput: [3,5,1,6,2,0,8,null,null,7,4]\n5\n2\nOutput: [7, 4, 1]\nExplanation: Nodes at distance 2 from node 5 are 7, 4, and 1.\n```\n\n### Example 2:\n```\nInput: [1]\n1\n3\nOutput: []\nExplanation: No node at distance 3.\n```",
    "difficulty": "MEDIUM",
    "category": "DSA",
    "patterns": [
      "Tree",
      "BFS / DFS",
      "Graph"
    ],
    "topics": [
      "Tree",
      "BFS / DFS",
      "Graph"
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
        "boilerplate": "def allNodesDistanceKInBinaryTree(*args):\n    # TODO: Implement solution for All Nodes Distance K in Binary Tree\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = allNodesDistanceKInBinaryTree(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(allNodesDistanceKInBinaryTree(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function allNodesDistanceKInBinaryTree(...args) {\n    // TODO: Implement solution for All Nodes Distance K in Binary Tree\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(allNodesDistanceKInBinaryTree(...parsed)));\n    } catch (e) {\n        console.log(allNodesDistanceKInBinaryTree(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for All Nodes Distance K in Binary Tree\n        // TODO: Read input from cin and implement solution\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        // TODO: Read from br and implement solution\n    }\n}\n"
      }
    ],
    "sampleTestCases": [
      {
        "input": "[3,5,1,6,2,0,8,null,null,7,4]\n5\n2",
        "output": "[7, 4, 1]",
        "explanation": "Nodes at distance 2 from node 5 are 7, 4, and 1."
      },
      {
        "input": "[1]\n1\n3",
        "output": "[]",
        "explanation": "No node at distance 3."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "[3,5,1,6,2,0,8,null,null,7,4]\n5\n2",
        "output": "[7, 4, 1]",
        "isHidden": true
      },
      {
        "input": "[1]\n1\n3",
        "output": "[]",
        "isHidden": true
      }
    ],
    "hints": [
      "Build parent pointers with DFS, converting tree into an undirected graph, then run BFS from target."
    ],
    "editorial": {
      "approach": "Optimal Approach for All Nodes Distance K in Binary Tree",
      "solutionMarkdown": "### Optimal Solution\n\nMap child -> parent using preorder DFS. Queue BFS from target node up to level k.\n\n### Complexity\n- Time: O(N), Space: O(N)",
      "timeComplexity": "O(N)",
      "spaceComplexity": "O(N)"
    },
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0
  },
  {
    "title": "Arithmetic Expression Validation",
    "slug": "arithmetic-expression-validation",
    "description": "Given a string representing an arithmetic expression containing numbers, operators (`+`, `-`, `*`, `/`), and parentheses `(` and `)`, determine if the expression has valid syntax.\n\n### Example 1:\n```\nInput: (3+2)*5\nOutput: true\nExplanation: Valid arithmetic expression.\n```\n\n### Example 2:\n```\nInput: (3+*2)\nOutput: false\nExplanation: Operator immediately follows another operator.\n```",
    "difficulty": "MEDIUM",
    "category": "DSA",
    "patterns": [
      "Stack",
      "String",
      "Parsing"
    ],
    "topics": [
      "Stack",
      "String",
      "Parsing"
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
        "boilerplate": "def arithmeticExpressionValidation(*args):\n    # TODO: Implement solution for Arithmetic Expression Validation\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = arithmeticExpressionValidation(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(arithmeticExpressionValidation(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function arithmeticExpressionValidation(...args) {\n    // TODO: Implement solution for Arithmetic Expression Validation\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(arithmeticExpressionValidation(...parsed)));\n    } catch (e) {\n        console.log(arithmeticExpressionValidation(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Arithmetic Expression Validation\n        // TODO: Read input from cin and implement solution\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        // TODO: Read from br and implement solution\n    }\n}\n"
      }
    ],
    "sampleTestCases": [
      {
        "input": "(3+2)*5",
        "output": "true",
        "explanation": "Valid arithmetic expression."
      },
      {
        "input": "(3+*2)",
        "output": "false",
        "explanation": "Operator immediately follows another operator."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "(3+2)*5",
        "output": "true",
        "isHidden": true
      },
      {
        "input": "(3+*2)",
        "output": "false",
        "isHidden": true
      },
      {
        "input": "((1+2)",
        "output": "false",
        "isHidden": true
      }
    ],
    "hints": [
      "Track expected token states: whether an operand or operator is expected next."
    ],
    "editorial": {
      "approach": "Optimal Approach for Arithmetic Expression Validation",
      "solutionMarkdown": "### Optimal Solution\n\nState machine parsing tracking parenthesis depth and valid preceding token type.\n\n### Complexity\n- Time: O(N), Space: O(N)",
      "timeComplexity": "O(N)",
      "spaceComplexity": "O(N)"
    },
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0
  },
  {
    "title": "Armstrong Number",
    "slug": "armstrong-number",
    "description": "Given an integer `n`, return `true` if and only if it is an **Armstrong number**. An Armstrong number of `k` digits is an integer such that the sum of its digits each raised to the power of `k` equals `n`.\n\n### Example 1:\n```\nInput: 153\nOutput: true\nExplanation: 153 is a 3-digit number, and 153 = 1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153.\n```\n\n### Example 2:\n```\nInput: 123\nOutput: false\nExplanation: 123 is a 3-digit number, and 123 != 1^3 + 2^3 + 3^3 = 1 + 8 + 27 = 36.\n```",
    "difficulty": "EASY",
    "category": "DSA",
    "patterns": [
      "Math",
      "Simulation"
    ],
    "topics": [
      "Math",
      "Simulation"
    ],
    "companyTags": [
      {
        "company": "Accenture",
        "yearReported": 2025,
        "verified": true,
        "frequencyCount": 40,
        "sourceNote": "Accenture Interview Question #73 (R [S3])"
      },
      {
        "company": "TCS",
        "yearReported": 2025,
        "verified": false,
        "frequencyCount": 30,
        "sourceNote": "TCS Practice Bank #3"
      }
    ],
    "supportedLanguages": [
      "python",
      "javascript",
      "cpp",
      "java"
    ],
    "starterCode": [
      {
        "language": "python",
        "boilerplate": "def armstrongNumber(*args):\n    # TODO: Implement solution for Armstrong Number\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = armstrongNumber(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(armstrongNumber(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function armstrongNumber(...args) {\n    // TODO: Implement solution for Armstrong Number\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(armstrongNumber(...parsed)));\n    } catch (e) {\n        console.log(armstrongNumber(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Armstrong Number\n        // TODO: Read input from cin and implement solution\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        // TODO: Read from br and implement solution\n    }\n}\n"
      }
    ],
    "sampleTestCases": [
      {
        "input": "153",
        "output": "true",
        "explanation": "153 is a 3-digit number, and 153 = 1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153."
      },
      {
        "input": "123",
        "output": "false",
        "explanation": "123 is a 3-digit number, and 123 != 1^3 + 2^3 + 3^3 = 1 + 8 + 27 = 36."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "153",
        "output": "true",
        "isHidden": true
      },
      {
        "input": "123",
        "output": "false",
        "isHidden": true
      },
      {
        "input": "370",
        "output": "true",
        "isHidden": true
      },
      {
        "input": "9474",
        "output": "true",
        "isHidden": true
      }
    ],
    "hints": [
      "First count the number of digits k, then compute the sum of each digit raised to power k."
    ],
    "editorial": {
      "approach": "Optimal Approach for Armstrong Number",
      "solutionMarkdown": "### Optimal Solution\n\nExtract digits repeatedly modulo 10. Compute d^k for each digit and sum them up. Compare with original number n.\n\n### Complexity\n- Time: O(log10 N), Space: O(1)",
      "timeComplexity": "O(log10 N)",
      "spaceComplexity": "O(1)"
    },
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0
  },
  {
    "title": "Array + HashMap + String Rotation Task",
    "slug": "array-hashmap-string-rotation",
    "description": "Given an array of strings, group together all strings that are rotations of each other. Two strings `s` and `t` are rotations of each other if `s` and `t` have the same length and `s` is a substring of `t + t`.\n\n### Example 1:\n```\nInput: [\"abc\",\"bca\",\"cab\",\"xyz\",\"yzx\"]\nOutput: [[\"abc\",\"bca\",\"cab\"],[\"xyz\",\"yzx\"]]\nExplanation: \"abc\", \"bca\", \"cab\" are cyclic rotations of each other.\n```\n\n### Example 2:\n```\nInput: [\"a\",\"b\",\"a\"]\nOutput: [[\"a\",\"a\"],[\"b\"]]\nExplanation: \"a\" and \"a\" are identical rotations.\n```",
    "difficulty": "MEDIUM",
    "category": "DSA",
    "patterns": [
      "Hash Table",
      "String",
      "Two Pointers"
    ],
    "topics": [
      "Hash Table",
      "String",
      "Two Pointers"
    ],
    "companyTags": [
      {
        "company": "Infosys",
        "yearReported": 2025,
        "verified": false,
        "frequencyCount": 28,
        "sourceNote": "Infosys Practice Bank #67"
      }
    ],
    "supportedLanguages": [
      "python",
      "javascript",
      "cpp",
      "java"
    ],
    "starterCode": [
      {
        "language": "python",
        "boilerplate": "def arrayHashmapStringRotation(*args):\n    # TODO: Implement solution for Array + HashMap + String Rotation Task\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = arrayHashmapStringRotation(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(arrayHashmapStringRotation(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function arrayHashmapStringRotation(...args) {\n    // TODO: Implement solution for Array + HashMap + String Rotation Task\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(arrayHashmapStringRotation(...parsed)));\n    } catch (e) {\n        console.log(arrayHashmapStringRotation(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Array + HashMap + String Rotation Task\n        // TODO: Read input from cin and implement solution\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        // TODO: Read from br and implement solution\n    }\n}\n"
      }
    ],
    "sampleTestCases": [
      {
        "input": "[\"abc\",\"bca\",\"cab\",\"xyz\",\"yzx\"]",
        "output": "[[\"abc\",\"bca\",\"cab\"],[\"xyz\",\"yzx\"]]",
        "explanation": "\"abc\", \"bca\", \"cab\" are cyclic rotations of each other."
      },
      {
        "input": "[\"a\",\"b\",\"a\"]",
        "output": "[[\"a\",\"a\"],[\"b\"]]",
        "explanation": "\"a\" and \"a\" are identical rotations."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "[\"abc\",\"bca\",\"cab\",\"xyz\",\"yzx\"]",
        "output": "[[\"abc\",\"bca\",\"cab\"],[\"xyz\",\"yzx\"]]",
        "isHidden": true
      },
      {
        "input": "[\"a\",\"b\",\"a\"]",
        "output": "[[\"a\",\"a\"],[\"b\"]]",
        "isHidden": true
      },
      {
        "input": "[\"hello\"]",
        "output": "[[\"hello\"]]",
        "isHidden": true
      }
    ],
    "hints": [
      "Find the lexicographically smallest rotation of each string as its canonical signature in a HashMap."
    ],
    "editorial": {
      "approach": "Optimal Approach for Array + HashMap + String Rotation Task",
      "solutionMarkdown": "### Optimal Solution\n\nGenerate all n rotations or compute minimal cyclic shift (Booth's algorithm) as HashMap key.\n\n### Complexity\n- Time: O(Total Chars), Space: O(Total Chars)",
      "timeComplexity": "O(Total Chars)",
      "spaceComplexity": "O(Total Chars)"
    },
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0
  },
  {
    "title": "Assign Cookies with Same-Parity Constraint",
    "slug": "assign-cookies-parity-constrained",
    "description": "Assume you are an awesome parent and want to give your children some cookies. Each child `i` has a greed factor `g[i]`, and each cookie `j` has a size `s[j]`. You can assign cookie `j` to child `i` if `s[j] >= g[i]` AND `s[j]` and `g[i]` have the **same parity** (both even or both odd). Maximize the number of satisfied children.\n\n### Example 1:\n```\nInput: [1,2,3]\n[1,1]\nOutput: 1\nExplanation: Child 1 (greed 1) gets cookie of size 1 (both odd). Child 2 (greed 2) cannot get odd cookie. Child 3 cannot get remaining cookie.\n```\n\n### Example 2:\n```\nInput: [1,2]\n[1,2,3]\nOutput: 2\nExplanation: Child 1 (greed 1, odd) gets cookie 1. Child 2 (greed 2, even) gets cookie 2.\n```",
    "difficulty": "MEDIUM",
    "category": "DSA",
    "patterns": [
      "Greedy",
      "Sorting",
      "Two Pointers"
    ],
    "topics": [
      "Greedy",
      "Sorting",
      "Two Pointers"
    ],
    "companyTags": [
      {
        "company": "Infosys",
        "yearReported": 2025,
        "verified": true,
        "frequencyCount": 42,
        "sourceNote": "Infosys Interview Question #40"
      }
    ],
    "supportedLanguages": [
      "python",
      "javascript",
      "cpp",
      "java"
    ],
    "starterCode": [
      {
        "language": "python",
        "boilerplate": "def assignCookiesParityConstrained(*args):\n    # TODO: Implement solution for Assign Cookies with Same-Parity Constraint\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = assignCookiesParityConstrained(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(assignCookiesParityConstrained(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function assignCookiesParityConstrained(...args) {\n    // TODO: Implement solution for Assign Cookies with Same-Parity Constraint\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(assignCookiesParityConstrained(...parsed)));\n    } catch (e) {\n        console.log(assignCookiesParityConstrained(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Assign Cookies with Same-Parity Constraint\n        // TODO: Read input from cin and implement solution\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        // TODO: Read from br and implement solution\n    }\n}\n"
      }
    ],
    "sampleTestCases": [
      {
        "input": "[1,2,3]\n[1,1]",
        "output": "1",
        "explanation": "Child 1 (greed 1) gets cookie of size 1 (both odd). Child 2 (greed 2) cannot get odd cookie. Child 3 cannot get remaining cookie."
      },
      {
        "input": "[1,2]\n[1,2,3]",
        "output": "2",
        "explanation": "Child 1 (greed 1, odd) gets cookie 1. Child 2 (greed 2, even) gets cookie 2."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "[1,2,3]\n[1,1]",
        "output": "1",
        "isHidden": true
      },
      {
        "input": "[1,2]\n[1,2,3]",
        "output": "2",
        "isHidden": true
      },
      {
        "input": "[2,4]\n[1,3,5]",
        "output": "0",
        "isHidden": true
      }
    ],
    "hints": [
      "Split children and cookies into even and odd groups. Sort each and greedily match independently."
    ],
    "editorial": {
      "approach": "Optimal Approach for Assign Cookies with Same-Parity Constraint",
      "solutionMarkdown": "### Optimal Solution\n\nSeparate children and cookies by parity. Solve standard Assign Cookies greedy two-pointer for even and odd separately.\n\n### Complexity\n- Time: O(N log N + M log M), Space: O(N + M)",
      "timeComplexity": "O(N log N + M log M)",
      "spaceComplexity": "O(N + M)"
    },
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0
  },
  {
    "title": "Balanced Binary Tree",
    "slug": "balanced-binary-tree",
    "description": "Given a binary tree, determine if it is **height-balanced** (a binary tree in which the depth of the two subtrees of every node never differs by more than one).\n\n### Example 1:\n```\nInput: [3,9,20,null,null,15,7]\nOutput: true\nExplanation: Balanced binary tree.\n```\n\n### Example 2:\n```\nInput: [1,2,2,3,3,null,null,4,4]\nOutput: false\nExplanation: Left subtree height is 4, right subtree height is 2, diff > 1.\n```",
    "difficulty": "EASY",
    "category": "DSA",
    "patterns": [
      "Tree",
      "DFS / BFS",
      "Recursion"
    ],
    "topics": [
      "Tree",
      "DFS / BFS",
      "Recursion"
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
        "boilerplate": "def balancedBinaryTree(*args):\n    # TODO: Implement solution for Balanced Binary Tree\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = balancedBinaryTree(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(balancedBinaryTree(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function balancedBinaryTree(...args) {\n    // TODO: Implement solution for Balanced Binary Tree\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(balancedBinaryTree(...parsed)));\n    } catch (e) {\n        console.log(balancedBinaryTree(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Balanced Binary Tree\n        // TODO: Read input from cin and implement solution\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        // TODO: Read from br and implement solution\n    }\n}\n"
      }
    ],
    "sampleTestCases": [
      {
        "input": "[3,9,20,null,null,15,7]",
        "output": "true",
        "explanation": "Balanced binary tree."
      },
      {
        "input": "[1,2,2,3,3,null,null,4,4]",
        "output": "false",
        "explanation": "Left subtree height is 4, right subtree height is 2, diff > 1."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "[3,9,20,null,null,15,7]",
        "output": "true",
        "isHidden": true
      },
      {
        "input": "[1,2,2,3,3,null,null,4,4]",
        "output": "false",
        "isHidden": true
      },
      {
        "input": "[]",
        "output": "true",
        "isHidden": true
      }
    ],
    "hints": [
      "Bottom-up DFS returning height if balanced, or -1 if unbalanced."
    ],
    "editorial": {
      "approach": "Optimal Approach for Balanced Binary Tree",
      "solutionMarkdown": "### Optimal Solution\n\nPostorder traversal: if abs(leftHeight - rightHeight) > 1 return -1 immediately.\n\n### Complexity\n- Time: O(N), Space: O(H)",
      "timeComplexity": "O(N)",
      "spaceComplexity": "O(H)"
    },
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0
  },
  {
    "title": "Basic Calculator",
    "slug": "basic-calculator",
    "description": "Given a string `s` representing a valid expression, implement a basic calculator to evaluate it. The expression string may contain `+`, `-`, non-negative integers, parentheses `(`, `)`, and empty spaces.\n\n### Example 1:\n```\nInput: 1 + 1\nOutput: 2\nExplanation: 1 + 1 = 2.\n```\n\n### Example 2:\n```\nInput: (1+(4+5+2)-3)+(6+8)\nOutput: 23\nExplanation: Evaluates to 23.\n```",
    "difficulty": "HARD",
    "category": "DSA",
    "patterns": [
      "Stack",
      "Math",
      "String"
    ],
    "topics": [
      "Stack",
      "Math",
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
        "boilerplate": "def basicCalculator(*args):\n    # TODO: Implement solution for Basic Calculator\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = basicCalculator(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(basicCalculator(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function basicCalculator(...args) {\n    // TODO: Implement solution for Basic Calculator\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(basicCalculator(...parsed)));\n    } catch (e) {\n        console.log(basicCalculator(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Basic Calculator\n        // TODO: Read input from cin and implement solution\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        // TODO: Read from br and implement solution\n    }\n}\n"
      }
    ],
    "sampleTestCases": [
      {
        "input": "1 + 1",
        "output": "2",
        "explanation": "1 + 1 = 2."
      },
      {
        "input": "(1+(4+5+2)-3)+(6+8)",
        "output": "23",
        "explanation": "Evaluates to 23."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "1 + 1",
        "output": "2",
        "isHidden": true
      },
      {
        "input": "(1+(4+5+2)-3)+(6+8)",
        "output": "23",
        "isHidden": true
      },
      {
        "input": " 2-1 + 2 ",
        "output": "3",
        "isHidden": true
      }
    ],
    "hints": [
      "Use a stack to save running result and current sign when entering parentheses '('."
    ],
    "editorial": {
      "approach": "Optimal Approach for Basic Calculator",
      "solutionMarkdown": "### Optimal Solution\n\nIterate chars: on '(', push result and sign to stack; on ')', pop sign and add to prev result.\n\n### Complexity\n- Time: O(N), Space: O(N)",
      "timeComplexity": "O(N)",
      "spaceComplexity": "O(N)"
    },
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0
  },
  {
    "title": "Basic Calculator II",
    "slug": "basic-calculator-ii",
    "description": "Given a string `s` which represents an expression, *evaluate this expression and return its value*. The expression string contains non-negative integers, `+`, `-`, `*`, `/` operators and empty spaces. Integer division should truncate toward zero.\n\n### Example 1:\n```\nInput: 3+2*2\nOutput: 7\nExplanation: Multiplication takes precedence: 3 + 4 = 7.\n```\n\n### Example 2:\n```\nInput:  3/2 \nOutput: 1\nExplanation: Integer division truncated to 1.\n```",
    "difficulty": "MEDIUM",
    "category": "DSA",
    "patterns": [
      "Stack",
      "Math",
      "String"
    ],
    "topics": [
      "Stack",
      "Math",
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
        "boilerplate": "def basicCalculatorIi(*args):\n    # TODO: Implement solution for Basic Calculator II\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = basicCalculatorIi(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(basicCalculatorIi(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function basicCalculatorIi(...args) {\n    // TODO: Implement solution for Basic Calculator II\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(basicCalculatorIi(...parsed)));\n    } catch (e) {\n        console.log(basicCalculatorIi(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Basic Calculator II\n        // TODO: Read input from cin and implement solution\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        // TODO: Read from br and implement solution\n    }\n}\n"
      }
    ],
    "sampleTestCases": [
      {
        "input": "3+2*2",
        "output": "7",
        "explanation": "Multiplication takes precedence: 3 + 4 = 7."
      },
      {
        "input": " 3/2 ",
        "output": "1",
        "explanation": "Integer division truncated to 1."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "3+2*2",
        "output": "7",
        "isHidden": true
      },
      {
        "input": " 3/2 ",
        "output": "1",
        "isHidden": true
      },
      {
        "input": " 3+5 / 2 ",
        "output": "5",
        "isHidden": true
      }
    ],
    "hints": [
      "Process * and / immediately onto the top of the stack, and push + and - values to sum at the end."
    ],
    "editorial": {
      "approach": "Optimal Approach for Basic Calculator II",
      "solutionMarkdown": "### Optimal Solution\n\nMaintain last operator. If last was '*' or '/', pop stack, compute and push result. Sum stack at end.\n\n### Complexity\n- Time: O(N), Space: O(N)",
      "timeComplexity": "O(N)",
      "spaceComplexity": "O(N)"
    },
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0
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
        "sourceNote": "Accenture Practice Bank #2"
      },
      {
        "company": "TCS",
        "yearReported": 2025,
        "verified": false,
        "frequencyCount": 30,
        "sourceNote": "TCS Practice Bank #15"
      }
    ],
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
        "boilerplate": "function bestTimeToBuyAndSellStock(...args) {\n    // TODO: Implement solution for Best Time to Buy and Sell Stock\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(bestTimeToBuyAndSellStock(...parsed)));\n    } catch (e) {\n        console.log(bestTimeToBuyAndSellStock(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Best Time to Buy and Sell Stock\n        // TODO: Read input from cin and implement solution\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        // TODO: Read from br and implement solution\n    }\n}\n"
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
        "output": "5",
        "isHidden": true
      },
      {
        "input": "[7,6,4,3,1]",
        "output": "0",
        "isHidden": true
      },
      {
        "input": "[1,2]",
        "output": "1",
        "isHidden": true
      },
      {
        "input": "[2,4,1]",
        "output": "2",
        "isHidden": true
      }
    ],
    "hints": [
      "Track minPrice seen so far, and compute profit at current price."
    ],
    "editorial": {
      "approach": "Optimal Approach for Best Time to Buy and Sell Stock",
      "solutionMarkdown": "### Optimal Solution\n\nOne-pass: min_price = min(min_price, price), max_profit = max(max_profit, price - min_price).\n\n### Complexity\n- Time: O(N), Space: O(1)",
      "timeComplexity": "O(N)",
      "spaceComplexity": "O(1)"
    },
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0
  },
  {
    "title": "Best Time to Buy and Sell Stock IV",
    "slug": "best-time-to-buy-and-sell-stock-iv",
    "description": "You are given an integer array `prices` where `prices[i]` is the price of a given stock on the `i-th` day, and an integer `k`. Find the maximum profit you can achieve with at most `k` transactions.\n\n### Example 1:\n```\nInput: 2\n[2,4,1]\nOutput: 2\nExplanation: Buy on day 1 (price 2) and sell on day 2 (price 4), profit = 2.\n```\n\n### Example 2:\n```\nInput: 2\n[3,2,6,5,0,3]\nOutput: 7\nExplanation: Buy day 2 (2) sell day 3 (6) -> 4. Buy day 5 (0) sell day 6 (3) -> 3. Total = 7.\n```",
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
        "boilerplate": "def bestTimeToBuyAndSellStockIv(*args):\n    # TODO: Implement solution for Best Time to Buy and Sell Stock IV\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = bestTimeToBuyAndSellStockIv(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(bestTimeToBuyAndSellStockIv(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function bestTimeToBuyAndSellStockIv(...args) {\n    // TODO: Implement solution for Best Time to Buy and Sell Stock IV\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(bestTimeToBuyAndSellStockIv(...parsed)));\n    } catch (e) {\n        console.log(bestTimeToBuyAndSellStockIv(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Best Time to Buy and Sell Stock IV\n        // TODO: Read input from cin and implement solution\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        // TODO: Read from br and implement solution\n    }\n}\n"
      }
    ],
    "sampleTestCases": [
      {
        "input": "2\n[2,4,1]",
        "output": "2",
        "explanation": "Buy on day 1 (price 2) and sell on day 2 (price 4), profit = 2."
      },
      {
        "input": "2\n[3,2,6,5,0,3]",
        "output": "7",
        "explanation": "Buy day 2 (2) sell day 3 (6) -> 4. Buy day 5 (0) sell day 6 (3) -> 3. Total = 7."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "2\n[2,4,1]",
        "output": "2",
        "isHidden": true
      },
      {
        "input": "2\n[3,2,6,5,0,3]",
        "output": "7",
        "isHidden": true
      }
    ],
    "hints": [
      "dp[t][d] = max(dp[t][d-1], prices[d] + max_diff). If k >= n//2, greedy unlimited transactions."
    ],
    "editorial": {
      "approach": "Optimal Approach for Best Time to Buy and Sell Stock IV",
      "solutionMarkdown": "### Optimal Solution\n\nDP state tracking max profit with t transactions. Rolling array optimization.\n\n### Complexity\n- Time: O(K * N), Space: O(K)",
      "timeComplexity": "O(K * N)",
      "spaceComplexity": "O(K)"
    },
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0
  },
  {
    "title": "Best Time to Buy and Sell Stock with Cooldown",
    "slug": "best-time-to-buy-and-sell-stock-with-cooldown",
    "description": "You are given an array `prices` where `prices[i]` is the price of a stock on day `i`. After you sell your stock, you cannot buy stock on the next day (i.e., cooldown one day). Find the maximum profit.\n\n### Example 1:\n```\nInput: [1,2,3,0,2]\nOutput: 3\nExplanation: transactions = [buy, sell, cooldown, buy, sell]. Max profit = 3.\n```\n\n### Example 2:\n```\nInput: [1]\nOutput: 0\nExplanation: No transaction possible.\n```",
    "difficulty": "MEDIUM",
    "category": "DP",
    "patterns": [
      "Dynamic Programming",
      "State Machine"
    ],
    "topics": [
      "Dynamic Programming",
      "State Machine"
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
        "sourceNote": "Infosys Interview Question #96"
      }
    ],
    "supportedLanguages": [
      "python",
      "javascript",
      "cpp",
      "java"
    ],
    "starterCode": [
      {
        "language": "python",
        "boilerplate": "def bestTimeToBuyAndSellStockWithCooldown(*args):\n    # TODO: Implement solution for Best Time to Buy and Sell Stock with Cooldown\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = bestTimeToBuyAndSellStockWithCooldown(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(bestTimeToBuyAndSellStockWithCooldown(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function bestTimeToBuyAndSellStockWithCooldown(...args) {\n    // TODO: Implement solution for Best Time to Buy and Sell Stock with Cooldown\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(bestTimeToBuyAndSellStockWithCooldown(...parsed)));\n    } catch (e) {\n        console.log(bestTimeToBuyAndSellStockWithCooldown(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Best Time to Buy and Sell Stock with Cooldown\n        // TODO: Read input from cin and implement solution\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        // TODO: Read from br and implement solution\n    }\n}\n"
      }
    ],
    "sampleTestCases": [
      {
        "input": "[1,2,3,0,2]",
        "output": "3",
        "explanation": "transactions = [buy, sell, cooldown, buy, sell]. Max profit = 3."
      },
      {
        "input": "[1]",
        "output": "0",
        "explanation": "No transaction possible."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "[1,2,3,0,2]",
        "output": "3",
        "isHidden": true
      },
      {
        "input": "[1]",
        "output": "0",
        "isHidden": true
      }
    ],
    "hints": [
      "Three states: held, sold, and rest (cooldown)."
    ],
    "editorial": {
      "approach": "Optimal Approach for Best Time to Buy and Sell Stock with Cooldown",
      "solutionMarkdown": "### Optimal Solution\n\nState machine DP: held = max(held, rest - price), sold = held + price, rest = max(rest, prev_sold).\n\n### Complexity\n- Time: O(N), Space: O(1)",
      "timeComplexity": "O(N)",
      "spaceComplexity": "O(1)"
    },
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0
  },
  {
    "title": "Binary Search",
    "slug": "binary-search",
    "description": "Given an array of integers `nums` which is sorted in ascending order, and an integer `target`, write a function to search `target` in `nums`. If `target` exists, then return its index. Otherwise, return `-1`.\n\n### Example 1:\n```\nInput: [-1,0,3,5,9,12]\n9\nOutput: 4\nExplanation: 9 exists in nums and its index is 4.\n```\n\n### Example 2:\n```\nInput: [-1,0,3,5,9,12]\n2\nOutput: -1\nExplanation: 2 does not exist in nums so return -1.\n```",
    "difficulty": "EASY",
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
        "company": "Accenture",
        "yearReported": 2025,
        "verified": false,
        "frequencyCount": 25,
        "sourceNote": "Accenture Practice Bank #61"
      },
      {
        "company": "Infosys",
        "yearReported": 2025,
        "verified": true,
        "frequencyCount": 42,
        "sourceNote": "Infosys Interview Question #31"
      },
      {
        "company": "TCS",
        "yearReported": 2025,
        "verified": false,
        "frequencyCount": 30,
        "sourceNote": "TCS Practice Bank #31"
      }
    ],
    "supportedLanguages": [
      "python",
      "javascript",
      "cpp",
      "java"
    ],
    "starterCode": [
      {
        "language": "python",
        "boilerplate": "def binarySearch(*args):\n    # TODO: Implement solution for Binary Search\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = binarySearch(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(binarySearch(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function binarySearch(...args) {\n    // TODO: Implement solution for Binary Search\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(binarySearch(...parsed)));\n    } catch (e) {\n        console.log(binarySearch(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Binary Search\n        // TODO: Read input from cin and implement solution\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        // TODO: Read from br and implement solution\n    }\n}\n"
      }
    ],
    "sampleTestCases": [
      {
        "input": "[-1,0,3,5,9,12]\n9",
        "output": "4",
        "explanation": "9 exists in nums and its index is 4."
      },
      {
        "input": "[-1,0,3,5,9,12]\n2",
        "output": "-1",
        "explanation": "2 does not exist in nums so return -1."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "[-1,0,3,5,9,12]\n9",
        "output": "4",
        "isHidden": true
      },
      {
        "input": "[-1,0,3,5,9,12]\n2",
        "output": "-1",
        "isHidden": true
      },
      {
        "input": "[5]\n5",
        "output": "0",
        "isHidden": true
      }
    ],
    "hints": [
      "Compare middle element with target. If equal return mid; if less search right half, else search left half."
    ],
    "editorial": {
      "approach": "Optimal Approach for Binary Search",
      "solutionMarkdown": "### Optimal Solution\n\nMaintain low and high pointers. Compute mid = low + (high - low) // 2. Narrow search space logarithmically.\n\n### Complexity\n- Time: O(log N), Space: O(1)",
      "timeComplexity": "O(log N)",
      "spaceComplexity": "O(1)"
    },
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0
  },
  {
    "title": "Binary Tree Inorder Traversal",
    "slug": "binary-tree-inorder-traversal",
    "description": "Given the `root` of a binary tree, return *the inorder traversal of its nodes' values* (Left -> Root -> Right).\n\n### Example 1:\n```\nInput: [1,null,2,3]\nOutput: [1,3,2]\nExplanation: Inorder traversal visits left subtree, root, then right subtree.\n```\n\n### Example 2:\n```\nInput: []\nOutput: []\nExplanation: Empty tree returns empty list.\n```",
    "difficulty": "EASY",
    "category": "DSA",
    "patterns": [
      "Tree",
      "Depth-First Search",
      "Binary Tree",
      "Stack"
    ],
    "topics": [
      "Tree",
      "Depth-First Search",
      "Binary Tree",
      "Stack"
    ],
    "companyTags": [
      {
        "company": "Accenture",
        "yearReported": 2025,
        "verified": false,
        "frequencyCount": 25,
        "sourceNote": "Accenture Practice Bank #98"
      }
    ],
    "supportedLanguages": [
      "python",
      "javascript",
      "cpp",
      "java"
    ],
    "starterCode": [
      {
        "language": "python",
        "boilerplate": "def binaryTreeInorderTraversal(*args):\n    # TODO: Implement solution for Binary Tree Inorder Traversal\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = binaryTreeInorderTraversal(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(binaryTreeInorderTraversal(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function binaryTreeInorderTraversal(...args) {\n    // TODO: Implement solution for Binary Tree Inorder Traversal\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(binaryTreeInorderTraversal(...parsed)));\n    } catch (e) {\n        console.log(binaryTreeInorderTraversal(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Binary Tree Inorder Traversal\n        // TODO: Read input from cin and implement solution\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        // TODO: Read from br and implement solution\n    }\n}\n"
      }
    ],
    "sampleTestCases": [
      {
        "input": "[1,null,2,3]",
        "output": "[1,3,2]",
        "explanation": "Inorder traversal visits left subtree, root, then right subtree."
      },
      {
        "input": "[]",
        "output": "[]",
        "explanation": "Empty tree returns empty list."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "[1,null,2,3]",
        "output": "[1,3,2]",
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
      "Recursively traverse left subtree, process root, then recursively traverse right subtree, or use explicit stack."
    ],
    "editorial": {
      "approach": "Optimal Approach for Binary Tree Inorder Traversal",
      "solutionMarkdown": "### Optimal Solution\n\nPerform recursive DFS or iterative stack traversal visiting node.left, appending node.val, then node.right.\n\n### Complexity\n- Time: O(N), Space: O(N)",
      "timeComplexity": "O(N)",
      "spaceComplexity": "O(N)"
    },
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0
  },
  {
    "title": "Binary Tree Level Order Traversal",
    "slug": "binary-tree-level-order-traversal",
    "description": "Given the `root` of a binary tree, return *the level order traversal of its nodes' values*. (i.e., from left to right, level by level).\n\n### Example 1:\n```\nInput: [3,9,20,null,null,15,7]\nOutput: [[3], [9, 20], [15, 7]]\nExplanation: Level 0: [3], Level 1: [9,20], Level 2: [15,7].\n```\n\n### Example 2:\n```\nInput: [1]\nOutput: [[1]]\nExplanation: Single node tree.\n```",
    "difficulty": "MEDIUM",
    "category": "DSA",
    "patterns": [
      "Tree",
      "BFS / DFS",
      "Queue"
    ],
    "topics": [
      "Tree",
      "BFS / DFS",
      "Queue"
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
        "sourceNote": "Accenture Practice Bank #100"
      },
      {
        "company": "Infosys",
        "yearReported": 2025,
        "verified": true,
        "frequencyCount": 42,
        "sourceNote": "Infosys Interview Question #57"
      },
      {
        "company": "TCS",
        "yearReported": 2025,
        "verified": false,
        "frequencyCount": 30,
        "sourceNote": "TCS Practice Bank #64"
      }
    ],
    "supportedLanguages": [
      "python",
      "javascript",
      "cpp",
      "java"
    ],
    "starterCode": [
      {
        "language": "python",
        "boilerplate": "def binaryTreeLevelOrderTraversal(*args):\n    # TODO: Implement solution for Binary Tree Level Order Traversal\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = binaryTreeLevelOrderTraversal(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(binaryTreeLevelOrderTraversal(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function binaryTreeLevelOrderTraversal(...args) {\n    // TODO: Implement solution for Binary Tree Level Order Traversal\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(binaryTreeLevelOrderTraversal(...parsed)));\n    } catch (e) {\n        console.log(binaryTreeLevelOrderTraversal(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Binary Tree Level Order Traversal\n        // TODO: Read input from cin and implement solution\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        // TODO: Read from br and implement solution\n    }\n}\n"
      }
    ],
    "sampleTestCases": [
      {
        "input": "[3,9,20,null,null,15,7]",
        "output": "[[3], [9, 20], [15, 7]]",
        "explanation": "Level 0: [3], Level 1: [9,20], Level 2: [15,7]."
      },
      {
        "input": "[1]",
        "output": "[[1]]",
        "explanation": "Single node tree."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "[3,9,20,null,null,15,7]",
        "output": "[[3], [9, 20], [15, 7]]",
        "isHidden": true
      },
      {
        "input": "[1]",
        "output": "[[1]]",
        "isHidden": true
      },
      {
        "input": "[]",
        "output": "[]",
        "isHidden": true
      }
    ],
    "hints": [
      "Queue BFS: iterate level by level using queue length."
    ],
    "editorial": {
      "approach": "Optimal Approach for Binary Tree Level Order Traversal",
      "solutionMarkdown": "### Optimal Solution\n\nBFS queue processing node count at each level before pushing children.\n\n### Complexity\n- Time: O(N), Space: O(N)",
      "timeComplexity": "O(N)",
      "spaceComplexity": "O(N)"
    },
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0
  },
  {
    "title": "Binary Tree Level Order Traversal II",
    "slug": "binary-tree-level-order-traversal-ii",
    "description": "Given the `root` of a binary tree, return the *bottom-up level order traversal of its nodes' values*. (i.e., from left to right, level by level from leaf to root).\n\n### Example 1:\n```\nInput: [3,9,20,null,null,15,7]\nOutput: [[15, 7], [9, 20], [3]]\nExplanation: Levels listed from bottom to top.\n```\n\n### Example 2:\n```\nInput: [1]\nOutput: [[1]]\nExplanation: Single node.\n```",
    "difficulty": "MEDIUM",
    "category": "DSA",
    "patterns": [
      "Tree",
      "BFS / DFS",
      "Queue"
    ],
    "topics": [
      "Tree",
      "BFS / DFS",
      "Queue"
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
        "boilerplate": "def binaryTreeLevelOrderTraversalIi(*args):\n    # TODO: Implement solution for Binary Tree Level Order Traversal II\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = binaryTreeLevelOrderTraversalIi(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(binaryTreeLevelOrderTraversalIi(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function binaryTreeLevelOrderTraversalIi(...args) {\n    // TODO: Implement solution for Binary Tree Level Order Traversal II\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(binaryTreeLevelOrderTraversalIi(...parsed)));\n    } catch (e) {\n        console.log(binaryTreeLevelOrderTraversalIi(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Binary Tree Level Order Traversal II\n        // TODO: Read input from cin and implement solution\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        // TODO: Read from br and implement solution\n    }\n}\n"
      }
    ],
    "sampleTestCases": [
      {
        "input": "[3,9,20,null,null,15,7]",
        "output": "[[15, 7], [9, 20], [3]]",
        "explanation": "Levels listed from bottom to top."
      },
      {
        "input": "[1]",
        "output": "[[1]]",
        "explanation": "Single node."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "[3,9,20,null,null,15,7]",
        "output": "[[15, 7], [9, 20], [3]]",
        "isHidden": true
      },
      {
        "input": "[1]",
        "output": "[[1]]",
        "isHidden": true
      }
    ],
    "hints": [
      "Run standard level-order BFS and reverse the result array at the end."
    ],
    "editorial": {
      "approach": "Optimal Approach for Binary Tree Level Order Traversal II",
      "solutionMarkdown": "### Optimal Solution\n\nQueue BFS collecting levels, followed by result.reverse().\n\n### Complexity\n- Time: O(N), Space: O(N)",
      "timeComplexity": "O(N)",
      "spaceComplexity": "O(N)"
    },
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0
  },
  {
    "title": "Binary Tree Maximum Path Sum",
    "slug": "binary-tree-maximum-path-sum",
    "description": "A **path** in a binary tree is a sequence of nodes where each pair of adjacent nodes in the sequence has an edge connecting them. Return the **maximum path sum** of any non-empty path.\n\n### Example 1:\n```\nInput: [1,2,3]\nOutput: 6\nExplanation: The optimal path is 2 -> 1 -> 3 with a path sum of 2 + 1 + 3 = 6.\n```\n\n### Example 2:\n```\nInput: [-10,9,20,null,null,15,7]\nOutput: 42\nExplanation: The optimal path is 15 -> 20 -> 7 with a path sum of 15 + 20 + 7 = 42.\n```",
    "difficulty": "HARD",
    "category": "DSA",
    "patterns": [
      "Tree",
      "DFS / BFS",
      "Recursion",
      "Dynamic Programming"
    ],
    "topics": [
      "Tree",
      "DFS / BFS",
      "Recursion",
      "Dynamic Programming"
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
        "company": "Infosys",
        "yearReported": 2025,
        "verified": true,
        "frequencyCount": 42,
        "sourceNote": "Infosys Interview Question #61"
      },
      {
        "company": "TCS",
        "yearReported": 2025,
        "verified": true,
        "frequencyCount": 45,
        "sourceNote": "TCS Interview Question #68"
      }
    ],
    "supportedLanguages": [
      "python",
      "javascript",
      "cpp",
      "java"
    ],
    "starterCode": [
      {
        "language": "python",
        "boilerplate": "def binaryTreeMaximumPathSum(*args):\n    # TODO: Implement solution for Binary Tree Maximum Path Sum\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = binaryTreeMaximumPathSum(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(binaryTreeMaximumPathSum(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function binaryTreeMaximumPathSum(...args) {\n    // TODO: Implement solution for Binary Tree Maximum Path Sum\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(binaryTreeMaximumPathSum(...parsed)));\n    } catch (e) {\n        console.log(binaryTreeMaximumPathSum(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Binary Tree Maximum Path Sum\n        // TODO: Read input from cin and implement solution\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        // TODO: Read from br and implement solution\n    }\n}\n"
      }
    ],
    "sampleTestCases": [
      {
        "input": "[1,2,3]",
        "output": "6",
        "explanation": "The optimal path is 2 -> 1 -> 3 with a path sum of 2 + 1 + 3 = 6."
      },
      {
        "input": "[-10,9,20,null,null,15,7]",
        "output": "42",
        "explanation": "The optimal path is 15 -> 20 -> 7 with a path sum of 15 + 20 + 7 = 42."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "[1,2,3]",
        "output": "6",
        "isHidden": true
      },
      {
        "input": "[-10,9,20,null,null,15,7]",
        "output": "42",
        "isHidden": true
      },
      {
        "input": "[-3]",
        "output": "-3",
        "isHidden": true
      }
    ],
    "hints": [
      "At each node, compute max gain from left and right subtrees (ignoring negatives with max(0, gain)). Update global max with node.val + leftGain + rightGain."
    ],
    "editorial": {
      "approach": "Optimal Approach for Binary Tree Maximum Path Sum",
      "solutionMarkdown": "### Optimal Solution\n\nPostorder DFS: returns node.val + max(leftGain, rightGain) to parent; updates global max with full path through node.\n\n### Complexity\n- Time: O(N), Space: O(H)",
      "timeComplexity": "O(N)",
      "spaceComplexity": "O(H)"
    },
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0
  },
  {
    "title": "Binary Tree Paths",
    "slug": "binary-tree-paths",
    "description": "Given the `root` of a binary tree, return *all root-to-leaf paths in **any order***.\n\n### Example 1:\n```\nInput: [1,2,3,null,5]\nOutput: [\"1->2->5\", \"1->3\"]\nExplanation: Root to leaf paths formatted with '->'.\n```\n\n### Example 2:\n```\nInput: [1]\nOutput: [\"1\"]\nExplanation: Single node path.\n```",
    "difficulty": "EASY",
    "category": "DSA",
    "patterns": [
      "Tree",
      "DFS / BFS",
      "Backtracking"
    ],
    "topics": [
      "Tree",
      "DFS / BFS",
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
        "boilerplate": "def binaryTreePaths(*args):\n    # TODO: Implement solution for Binary Tree Paths\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = binaryTreePaths(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(binaryTreePaths(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function binaryTreePaths(...args) {\n    // TODO: Implement solution for Binary Tree Paths\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(binaryTreePaths(...parsed)));\n    } catch (e) {\n        console.log(binaryTreePaths(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Binary Tree Paths\n        // TODO: Read input from cin and implement solution\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        // TODO: Read from br and implement solution\n    }\n}\n"
      }
    ],
    "sampleTestCases": [
      {
        "input": "[1,2,3,null,5]",
        "output": "[\"1->2->5\", \"1->3\"]",
        "explanation": "Root to leaf paths formatted with '->'."
      },
      {
        "input": "[1]",
        "output": "[\"1\"]",
        "explanation": "Single node path."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "[1,2,3,null,5]",
        "output": "[\"1->2->5\", \"1->3\"]",
        "isHidden": true
      },
      {
        "input": "[1]",
        "output": "[\"1\"]",
        "isHidden": true
      }
    ],
    "hints": [
      "DFS preorder traversal tracking path string. When at leaf, add to output."
    ],
    "editorial": {
      "approach": "Optimal Approach for Binary Tree Paths",
      "solutionMarkdown": "### Optimal Solution\n\nRecursive DFS accumulating path. If node.left is None and node.right is None, append path to results.\n\n### Complexity\n- Time: O(N), Space: O(H)",
      "timeComplexity": "O(N)",
      "spaceComplexity": "O(H)"
    },
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0
  },
  {
    "title": "Binary Tree Postorder Traversal",
    "slug": "binary-tree-postorder-traversal",
    "description": "Given the `root` of a binary tree, return the **postorder traversal** of its nodes' values.\n\n### Example 1:\n```\nInput: [1,null,2,3]\nOutput: [3, 2, 1]\nExplanation: Postorder visits left, right, root.\n```\n\n### Example 2:\n```\nInput: []\nOutput: []\nExplanation: Empty tree.\n```",
    "difficulty": "EASY",
    "category": "DSA",
    "patterns": [
      "Tree",
      "Stack",
      "Recursion"
    ],
    "topics": [
      "Tree",
      "Stack",
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
        "boilerplate": "def binaryTreePostorderTraversal(*args):\n    # TODO: Implement solution for Binary Tree Postorder Traversal\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = binaryTreePostorderTraversal(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(binaryTreePostorderTraversal(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function binaryTreePostorderTraversal(...args) {\n    // TODO: Implement solution for Binary Tree Postorder Traversal\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(binaryTreePostorderTraversal(...parsed)));\n    } catch (e) {\n        console.log(binaryTreePostorderTraversal(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Binary Tree Postorder Traversal\n        // TODO: Read input from cin and implement solution\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        // TODO: Read from br and implement solution\n    }\n}\n"
      }
    ],
    "sampleTestCases": [
      {
        "input": "[1,null,2,3]",
        "output": "[3, 2, 1]",
        "explanation": "Postorder visits left, right, root."
      },
      {
        "input": "[]",
        "output": "[]",
        "explanation": "Empty tree."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "[1,null,2,3]",
        "output": "[3, 2, 1]",
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
      "Left -> Right -> Root. Can be done with recursion or iterative stack."
    ],
    "editorial": {
      "approach": "Optimal Approach for Binary Tree Postorder Traversal",
      "solutionMarkdown": "### Optimal Solution\n\nRecursive postorder or iterative traversal reversing preorder (Root -> Right -> Left).\n\n### Complexity\n- Time: O(N), Space: O(H)",
      "timeComplexity": "O(N)",
      "spaceComplexity": "O(H)"
    },
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0
  },
  {
    "title": "Binary Tree Right Side View",
    "slug": "binary-tree-right-side-view",
    "description": "Given the `root` of a binary tree, imagine yourself standing on the **right side** of it, return *the values of the nodes you can see ordered from top to bottom*.\n\n### Example 1:\n```\nInput: [1,2,3,null,5,null,4]\nOutput: [1, 3, 4]\nExplanation: Right-most visible nodes at each level.\n```\n\n### Example 2:\n```\nInput: [1,null,3]\nOutput: [1, 3]\nExplanation: Right nodes [1, 3].\n```",
    "difficulty": "MEDIUM",
    "category": "DSA",
    "patterns": [
      "Tree",
      "BFS / DFS",
      "Queue"
    ],
    "topics": [
      "Tree",
      "BFS / DFS",
      "Queue"
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
        "boilerplate": "def binaryTreeRightSideView(*args):\n    # TODO: Implement solution for Binary Tree Right Side View\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = binaryTreeRightSideView(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(binaryTreeRightSideView(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function binaryTreeRightSideView(...args) {\n    // TODO: Implement solution for Binary Tree Right Side View\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(binaryTreeRightSideView(...parsed)));\n    } catch (e) {\n        console.log(binaryTreeRightSideView(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Binary Tree Right Side View\n        // TODO: Read input from cin and implement solution\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        // TODO: Read from br and implement solution\n    }\n}\n"
      }
    ],
    "sampleTestCases": [
      {
        "input": "[1,2,3,null,5,null,4]",
        "output": "[1, 3, 4]",
        "explanation": "Right-most visible nodes at each level."
      },
      {
        "input": "[1,null,3]",
        "output": "[1, 3]",
        "explanation": "Right nodes [1, 3]."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "[1,2,3,null,5,null,4]",
        "output": "[1, 3, 4]",
        "isHidden": true
      },
      {
        "input": "[1,null,3]",
        "output": "[1, 3]",
        "isHidden": true
      },
      {
        "input": "[]",
        "output": "[]",
        "isHidden": true
      }
    ],
    "hints": [
      "BFS level order taking the last element at each level, or DFS right-child first tracking seen depth."
    ],
    "editorial": {
      "approach": "Optimal Approach for Binary Tree Right Side View",
      "solutionMarkdown": "### Optimal Solution\n\nLevel-order BFS recording the rightmost node at each depth.\n\n### Complexity\n- Time: O(N), Space: O(D) where D is max tree width",
      "timeComplexity": "O(N)",
      "spaceComplexity": "O(D) where D is max tree width"
    },
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0
  },
  {
    "title": "Binary Tree Vertical Order Traversal",
    "slug": "binary-tree-vertical-order-traversal",
    "description": "Given the `root` of a binary tree, return the *vertical order traversal* of its nodes' values (top-to-bottom, column by column). If two nodes are in the same row and column, order them from left to right.\n\n### Example 1:\n```\nInput: [3,9,20,null,null,15,7]\nOutput: [[9], [3, 15], [20], [7]]\nExplanation: Columns from -1 to 2.\n```\n\n### Example 2:\n```\nInput: [3,9,8,4,0,1,7]\nOutput: [[4], [9], [3, 0, 1], [8], [7]]\nExplanation: Vertical columns grouped.\n```",
    "difficulty": "HARD",
    "category": "DSA",
    "patterns": [
      "Tree",
      "BFS / DFS",
      "Hash Table"
    ],
    "topics": [
      "Tree",
      "BFS / DFS",
      "Hash Table"
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
        "boilerplate": "def binaryTreeVerticalOrderTraversal(*args):\n    # TODO: Implement solution for Binary Tree Vertical Order Traversal\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = binaryTreeVerticalOrderTraversal(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(binaryTreeVerticalOrderTraversal(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function binaryTreeVerticalOrderTraversal(...args) {\n    // TODO: Implement solution for Binary Tree Vertical Order Traversal\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(binaryTreeVerticalOrderTraversal(...parsed)));\n    } catch (e) {\n        console.log(binaryTreeVerticalOrderTraversal(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Binary Tree Vertical Order Traversal\n        // TODO: Read input from cin and implement solution\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        // TODO: Read from br and implement solution\n    }\n}\n"
      }
    ],
    "sampleTestCases": [
      {
        "input": "[3,9,20,null,null,15,7]",
        "output": "[[9], [3, 15], [20], [7]]",
        "explanation": "Columns from -1 to 2."
      },
      {
        "input": "[3,9,8,4,0,1,7]",
        "output": "[[4], [9], [3, 0, 1], [8], [7]]",
        "explanation": "Vertical columns grouped."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "[3,9,20,null,null,15,7]",
        "output": "[[9], [3, 15], [20], [7]]",
        "isHidden": true
      },
      {
        "input": "[3,9,8,4,0,1,7]",
        "output": "[[4], [9], [3, 0, 1], [8], [7]]",
        "isHidden": true
      }
    ],
    "hints": [
      "Use BFS with (node, col) pairs and store nodes in a dictionary mapping col -> list of values."
    ],
    "editorial": {
      "approach": "Optimal Approach for Binary Tree Vertical Order Traversal",
      "solutionMarkdown": "### Optimal Solution\n\nBFS maintains top-to-bottom row order naturally. Group by horizontal distance col.\n\n### Complexity\n- Time: O(N), Space: O(N)",
      "timeComplexity": "O(N)",
      "spaceComplexity": "O(N)"
    },
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0
  },
  {
    "title": "Binary Tree Zigzag Level Order Traversal",
    "slug": "binary-tree-zigzag-level-order-traversal",
    "description": "Given the `root` of a binary tree, return the *zigzag level order traversal of its nodes' values*. (i.e., from left to right, then right to left for the next level and alternate between).\n\n### Example 1:\n```\nInput: [3,9,20,null,null,15,7]\nOutput: [[3], [20, 9], [15, 7]]\nExplanation: Level 0: [3], Level 1 reversed: [20, 9], Level 2: [15, 7].\n```\n\n### Example 2:\n```\nInput: [1]\nOutput: [[1]]\nExplanation: Single node.\n```",
    "difficulty": "MEDIUM",
    "category": "DSA",
    "patterns": [
      "Tree",
      "BFS / DFS",
      "Queue"
    ],
    "topics": [
      "Tree",
      "BFS / DFS",
      "Queue"
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
        "boilerplate": "def binaryTreeZigzagLevelOrderTraversal(*args):\n    # TODO: Implement solution for Binary Tree Zigzag Level Order Traversal\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = binaryTreeZigzagLevelOrderTraversal(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(binaryTreeZigzagLevelOrderTraversal(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function binaryTreeZigzagLevelOrderTraversal(...args) {\n    // TODO: Implement solution for Binary Tree Zigzag Level Order Traversal\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(binaryTreeZigzagLevelOrderTraversal(...parsed)));\n    } catch (e) {\n        console.log(binaryTreeZigzagLevelOrderTraversal(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Binary Tree Zigzag Level Order Traversal\n        // TODO: Read input from cin and implement solution\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        // TODO: Read from br and implement solution\n    }\n}\n"
      }
    ],
    "sampleTestCases": [
      {
        "input": "[3,9,20,null,null,15,7]",
        "output": "[[3], [20, 9], [15, 7]]",
        "explanation": "Level 0: [3], Level 1 reversed: [20, 9], Level 2: [15, 7]."
      },
      {
        "input": "[1]",
        "output": "[[1]]",
        "explanation": "Single node."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "[3,9,20,null,null,15,7]",
        "output": "[[3], [20, 9], [15, 7]]",
        "isHidden": true
      },
      {
        "input": "[1]",
        "output": "[[1]]",
        "isHidden": true
      }
    ],
    "hints": [
      "Use a queue for level-order BFS and a boolean flag left_to_right toggled each level."
    ],
    "editorial": {
      "approach": "Optimal Approach for Binary Tree Zigzag Level Order Traversal",
      "solutionMarkdown": "### Optimal Solution\n\nLevel BFS reversing level array when left_to_right is false.\n\n### Complexity\n- Time: O(N), Space: O(N)",
      "timeComplexity": "O(N)",
      "spaceComplexity": "O(N)"
    },
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0
  },
  {
    "title": "Bitwise AND of Numbers Range",
    "slug": "bitwise-and-of-numbers-range",
    "description": "Given two integers `left` and `right` that represent the range `[left, right]`, return the bitwise AND of all numbers in this range, inclusive.\n\n### Example 1:\n```\nInput: 5\n7\nOutput: 4\nExplanation: 5 & 6 & 7 = 4.\n```\n\n### Example 2:\n```\nInput: 0\n0\nOutput: 0\nExplanation: 0 & 0 = 0.\n```",
    "difficulty": "MEDIUM",
    "category": "DSA",
    "patterns": [
      "Bit Manipulation",
      "Math"
    ],
    "topics": [
      "Bit Manipulation",
      "Math"
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
        "boilerplate": "def bitwiseAndOfNumbersRange(*args):\n    # TODO: Implement solution for Bitwise AND of Numbers Range\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = bitwiseAndOfNumbersRange(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(bitwiseAndOfNumbersRange(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function bitwiseAndOfNumbersRange(...args) {\n    // TODO: Implement solution for Bitwise AND of Numbers Range\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(bitwiseAndOfNumbersRange(...parsed)));\n    } catch (e) {\n        console.log(bitwiseAndOfNumbersRange(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Bitwise AND of Numbers Range\n        // TODO: Read input from cin and implement solution\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        // TODO: Read from br and implement solution\n    }\n}\n"
      }
    ],
    "sampleTestCases": [
      {
        "input": "5\n7",
        "output": "4",
        "explanation": "5 & 6 & 7 = 4."
      },
      {
        "input": "0\n0",
        "output": "0",
        "explanation": "0 & 0 = 0."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "5\n7",
        "output": "4",
        "isHidden": true
      },
      {
        "input": "0\n0",
        "output": "0",
        "isHidden": true
      },
      {
        "input": "1\n2147483647",
        "output": "0",
        "isHidden": true
      }
    ],
    "hints": [
      "The bitwise AND of a range is the common prefix of binary representations of left and right."
    ],
    "editorial": {
      "approach": "Optimal Approach for Bitwise AND of Numbers Range",
      "solutionMarkdown": "### Optimal Solution\n\nShift both left and right rightward until left == right, then shift back.\n\n### Complexity\n- Time: O(1) max 32 operations, Space: O(1)",
      "timeComplexity": "O(1) max 32 operations",
      "spaceComplexity": "O(1)"
    },
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0
  },
  {
    "title": "Candies",
    "slug": "candies",
    "description": "There are `n` children standing in a line. Each child is assigned a rating value given in the integer array `ratings`. You must give each child at least one candy, and children with a higher rating than their immediate neighbours must get more candies than their neighbour. Return *the minimum number of candies you need to have to distribute*.\n\n### Example 1:\n```\nInput: [1,0,2]\nOutput: 5\nExplanation: Candies distributed: [2, 1, 2]. Total = 5.\n```\n\n### Example 2:\n```\nInput: [1,2,2]\nOutput: 4\nExplanation: Candies distributed: [1, 2, 1]. The third child gets 1 candy because rating equal to second child.\n```",
    "difficulty": "HARD",
    "category": "DSA",
    "patterns": [
      "Array",
      "Greedy"
    ],
    "topics": [
      "Array",
      "Greedy"
    ],
    "companyTags": [
      {
        "company": "Infosys",
        "yearReported": 2025,
        "verified": true,
        "frequencyCount": 42,
        "sourceNote": "Infosys Interview Question #41"
      }
    ],
    "supportedLanguages": [
      "python",
      "javascript",
      "cpp",
      "java"
    ],
    "starterCode": [
      {
        "language": "python",
        "boilerplate": "def candies(*args):\n    # TODO: Implement solution for Candies\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = candies(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(candies(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function candies(...args) {\n    // TODO: Implement solution for Candies\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(candies(...parsed)));\n    } catch (e) {\n        console.log(candies(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Candies\n        // TODO: Read input from cin and implement solution\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        // TODO: Read from br and implement solution\n    }\n}\n"
      }
    ],
    "sampleTestCases": [
      {
        "input": "[1,0,2]",
        "output": "5",
        "explanation": "Candies distributed: [2, 1, 2]. Total = 5."
      },
      {
        "input": "[1,2,2]",
        "output": "4",
        "explanation": "Candies distributed: [1, 2, 1]. The third child gets 1 candy because rating equal to second child."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "[1,0,2]",
        "output": "5",
        "isHidden": true
      },
      {
        "input": "[1,2,2]",
        "output": "4",
        "isHidden": true
      },
      {
        "input": "[1,3,2,2,1]",
        "output": "7",
        "isHidden": true
      }
    ],
    "hints": [
      "Do two passes: left-to-right to satisfy left neighbours, then right-to-left taking max to satisfy right neighbours."
    ],
    "editorial": {
      "approach": "Optimal Approach for Candies",
      "solutionMarkdown": "### Optimal Solution\n\nTwo-pass greedy. Left-to-right pass ensures higher rating than left child gets +1. Right-to-left ensures higher than right child gets max.\n\n### Complexity\n- Time: O(N), Space: O(N)",
      "timeComplexity": "O(N)",
      "spaceComplexity": "O(N)"
    },
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0
  },
  {
    "title": "Capacity To Ship Packages Within D Days",
    "slug": "capacity-to-ship-packages-within-d-days",
    "description": "A conveyor belt has packages that must be shipped within `days` days. Given package `weights`, return *the least weight capacity of the ship that will result in all packages being shipped within* `days` *days*.\n\n### Example 1:\n```\nInput: [1,2,3,4,5,6,7,8,9,10]\n5\nOutput: 15\nExplanation: Ship capacity of 15 allows packages to be shipped in 5 days.\n```\n\n### Example 2:\n```\nInput: [3,2,2,4,1,4]\n3\nOutput: 6\nExplanation: Ship capacity of 6 ships in 3 days: [3, 2], [2, 4], [1, 4].\n```",
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
        "company": "Infosys",
        "yearReported": 2025,
        "verified": true,
        "frequencyCount": 42,
        "sourceNote": "Infosys Interview Question #35"
      }
    ],
    "supportedLanguages": [
      "python",
      "javascript",
      "cpp",
      "java"
    ],
    "starterCode": [
      {
        "language": "python",
        "boilerplate": "def capacityToShipPackagesWithinDDays(*args):\n    # TODO: Implement solution for Capacity To Ship Packages Within D Days\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = capacityToShipPackagesWithinDDays(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(capacityToShipPackagesWithinDDays(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function capacityToShipPackagesWithinDDays(...args) {\n    // TODO: Implement solution for Capacity To Ship Packages Within D Days\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(capacityToShipPackagesWithinDDays(...parsed)));\n    } catch (e) {\n        console.log(capacityToShipPackagesWithinDDays(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Capacity To Ship Packages Within D Days\n        // TODO: Read input from cin and implement solution\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        // TODO: Read from br and implement solution\n    }\n}\n"
      }
    ],
    "sampleTestCases": [
      {
        "input": "[1,2,3,4,5,6,7,8,9,10]\n5",
        "output": "15",
        "explanation": "Ship capacity of 15 allows packages to be shipped in 5 days."
      },
      {
        "input": "[3,2,2,4,1,4]\n3",
        "output": "6",
        "explanation": "Ship capacity of 6 ships in 3 days: [3, 2], [2, 4], [1, 4]."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "[1,2,3,4,5,6,7,8,9,10]\n5",
        "output": "15",
        "isHidden": true
      },
      {
        "input": "[3,2,2,4,1,4]\n3",
        "output": "6",
        "isHidden": true
      },
      {
        "input": "[1,2,3,1,1]\n4",
        "output": "3",
        "isHidden": true
      }
    ],
    "hints": [
      "Binary search on capacity in range [max(weights), sum(weights)]. Check days needed with greedy packing."
    ],
    "editorial": {
      "approach": "Optimal Approach for Capacity To Ship Packages Within D Days",
      "solutionMarkdown": "### Optimal Solution\n\nBinary search on ship capacity. For mid, simulate greedy daily shipment packing. Adjust low or high based on whether days <= D.\n\n### Complexity\n- Time: O(N log(sum(weights))), Space: O(1)",
      "timeComplexity": "O(N log(sum(weights)))",
      "spaceComplexity": "O(1)"
    },
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0
  },
  {
    "title": "Cheapest Flights Within K Stops",
    "slug": "cheapest-flights-within-k-stops",
    "description": "There are `n` cities connected by some number of flights. You are given an array `flights` where `flights[i] = [fromi, toi, pricei]`. Return *the cheapest price from `src` to `dst` with at most `k` stops*. If no such route exists, return `-1`.\n\n### Example 1:\n```\nInput: 4\n[[0,1,100],[1,2,100],[2,0,100],[1,3,600],[2,3,200]]\n0\n3\n1\nOutput: 700\nExplanation: Optimal path 0 -> 1 -> 3 has cost 100 + 600 = 700 with 1 stop.\n```\n\n### Example 2:\n```\nInput: 3\n[[0,1,100],[1,2,100],[0,2,500]]\n0\n2\n1\nOutput: 200\nExplanation: 0 -> 1 -> 2 has cost 200 with 1 stop.\n```",
    "difficulty": "MEDIUM",
    "category": "DSA",
    "patterns": [
      "Graph",
      "Dijkstra",
      "BFS / DFS"
    ],
    "topics": [
      "Graph",
      "Dijkstra",
      "BFS / DFS"
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
        "sourceNote": "Infosys Interview Question #74"
      },
      {
        "company": "TCS",
        "yearReported": 2025,
        "verified": false,
        "frequencyCount": 30,
        "sourceNote": "TCS Practice Bank #77"
      }
    ],
    "supportedLanguages": [
      "python",
      "javascript",
      "cpp",
      "java"
    ],
    "starterCode": [
      {
        "language": "python",
        "boilerplate": "def cheapestFlightsWithinKStops(*args):\n    # TODO: Implement solution for Cheapest Flights Within K Stops\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = cheapestFlightsWithinKStops(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(cheapestFlightsWithinKStops(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function cheapestFlightsWithinKStops(...args) {\n    // TODO: Implement solution for Cheapest Flights Within K Stops\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(cheapestFlightsWithinKStops(...parsed)));\n    } catch (e) {\n        console.log(cheapestFlightsWithinKStops(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Cheapest Flights Within K Stops\n        // TODO: Read input from cin and implement solution\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        // TODO: Read from br and implement solution\n    }\n}\n"
      }
    ],
    "sampleTestCases": [
      {
        "input": "4\n[[0,1,100],[1,2,100],[2,0,100],[1,3,600],[2,3,200]]\n0\n3\n1",
        "output": "700",
        "explanation": "Optimal path 0 -> 1 -> 3 has cost 100 + 600 = 700 with 1 stop."
      },
      {
        "input": "3\n[[0,1,100],[1,2,100],[0,2,500]]\n0\n2\n1",
        "output": "200",
        "explanation": "0 -> 1 -> 2 has cost 200 with 1 stop."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "4\n[[0,1,100],[1,2,100],[2,0,100],[1,3,600],[2,3,200]]\n0\n3\n1",
        "output": "700",
        "isHidden": true
      },
      {
        "input": "3\n[[0,1,100],[1,2,100],[0,2,500]]\n0\n2\n1",
        "output": "200",
        "isHidden": true
      }
    ],
    "hints": [
      "Bellman-Ford algorithm run for k + 1 iterations, or Dijkstra tracking stops."
    ],
    "editorial": {
      "approach": "Optimal Approach for Cheapest Flights Within K Stops",
      "solutionMarkdown": "### Optimal Solution\n\nBellman-Ford relaxation on edge list for k+1 rounds using a copy of previous distances.\n\n### Complexity\n- Time: O(K * E), Space: O(V)",
      "timeComplexity": "O(K * E)",
      "spaceComplexity": "O(V)"
    },
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0
  },
  {
    "title": "Check Whether a Number Is Prime",
    "slug": "check-prime-number",
    "description": "Given an integer `n`, determine whether it is a **prime number**. A prime number is a natural number greater than 1 that is not a product of two smaller natural numbers.\n\n### Example 1:\n```\nInput: 11\nOutput: true\nExplanation: 11 has only two divisors: 1 and 11.\n```\n\n### Example 2:\n```\nInput: 4\nOutput: false\nExplanation: 4 is divisible by 2.\n```",
    "difficulty": "EASY",
    "category": "DSA",
    "patterns": [
      "Math",
      "Number Theory"
    ],
    "topics": [
      "Math",
      "Number Theory"
    ],
    "companyTags": [
      {
        "company": "TCS",
        "yearReported": 2025,
        "verified": true,
        "frequencyCount": 45,
        "sourceNote": "TCS Interview Question #2"
      }
    ],
    "supportedLanguages": [
      "python",
      "javascript",
      "cpp",
      "java"
    ],
    "starterCode": [
      {
        "language": "python",
        "boilerplate": "def checkPrimeNumber(*args):\n    # TODO: Implement solution for Check Whether a Number Is Prime\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = checkPrimeNumber(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(checkPrimeNumber(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function checkPrimeNumber(...args) {\n    // TODO: Implement solution for Check Whether a Number Is Prime\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(checkPrimeNumber(...parsed)));\n    } catch (e) {\n        console.log(checkPrimeNumber(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Check Whether a Number Is Prime\n        // TODO: Read input from cin and implement solution\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        // TODO: Read from br and implement solution\n    }\n}\n"
      }
    ],
    "sampleTestCases": [
      {
        "input": "11",
        "output": "true",
        "explanation": "11 has only two divisors: 1 and 11."
      },
      {
        "input": "4",
        "output": "false",
        "explanation": "4 is divisible by 2."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "11",
        "output": "true",
        "isHidden": true
      },
      {
        "input": "4",
        "output": "false",
        "isHidden": true
      },
      {
        "input": "1",
        "output": "false",
        "isHidden": true
      },
      {
        "input": "2",
        "output": "true",
        "isHidden": true
      }
    ],
    "hints": [
      "Check divisors up to sqrt(n) with 6k +/- 1 optimization."
    ],
    "editorial": {
      "approach": "Optimal Approach for Check Whether a Number Is Prime",
      "solutionMarkdown": "### Optimal Solution\n\nCheck n <= 1, 2, 3. Test divisibility by 2 and 3, then step by 6 checking i and i + 2 up to sqrt(n).\n\n### Complexity\n- Time: O(sqrt(N)), Space: O(1)",
      "timeComplexity": "O(sqrt(N))",
      "spaceComplexity": "O(1)"
    },
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0
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
        "frequencyCount": 45,
        "sourceNote": "Reported in Apple 2021-2026 interview set"
      },
      {
        "company": "Accenture",
        "yearReported": 2025,
        "verified": false,
        "frequencyCount": 25,
        "sourceNote": "Accenture Practice Bank #86"
      },
      {
        "company": "Infosys",
        "yearReported": 2025,
        "verified": true,
        "frequencyCount": 42,
        "sourceNote": "Infosys Interview Question #83"
      },
      {
        "company": "TCS",
        "yearReported": 2025,
        "verified": false,
        "frequencyCount": 30,
        "sourceNote": "TCS Practice Bank #79"
      }
    ],
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
        "boilerplate": "function climbingStairs(...args) {\n    // TODO: Implement solution for Climbing Stairs\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(climbingStairs(...parsed)));\n    } catch (e) {\n        console.log(climbingStairs(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Climbing Stairs\n        // TODO: Read input from cin and implement solution\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        // TODO: Read from br and implement solution\n    }\n}\n"
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
        "output": "2",
        "isHidden": true
      },
      {
        "input": "3",
        "output": "3",
        "isHidden": true
      },
      {
        "input": "4",
        "output": "5",
        "isHidden": true
      },
      {
        "input": "5",
        "output": "8",
        "isHidden": true
      },
      {
        "input": "10",
        "output": "89",
        "isHidden": true
      }
    ],
    "hints": [
      "dp[i] = dp[i-1] + dp[i-2], equivalent to Fibonacci numbers."
    ],
    "editorial": {
      "approach": "Optimal Approach for Climbing Stairs",
      "solutionMarkdown": "### Optimal Solution\n\nMaintain two variables prev1 and prev2 for constant space Fibonacci sequence.\n\n### Complexity\n- Time: O(N), Space: O(1)",
      "timeComplexity": "O(N)",
      "spaceComplexity": "O(1)"
    },
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0
  },
  {
    "title": "Clone Graph",
    "slug": "clone-graph",
    "description": "Given a reference of a node in a **connected** undirected graph. Return a **deep copy** (clone) of the graph.\n\n### Example 1:\n```\nInput: [[2,4],[1,3],[2,4],[1,3]]\nOutput: [[2, 4], [1, 3], [2, 4], [1, 3]]\nExplanation: Graph cloned with identical structure.\n```\n\n### Example 2:\n```\nInput: [[]]\nOutput: [[]]\nExplanation: Node with 0 neighbors.\n```",
    "difficulty": "MEDIUM",
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
        "company": "TCS",
        "yearReported": 2025,
        "verified": true,
        "frequencyCount": 45,
        "sourceNote": "TCS Interview Question #69"
      }
    ],
    "supportedLanguages": [
      "python",
      "javascript",
      "cpp",
      "java"
    ],
    "starterCode": [
      {
        "language": "python",
        "boilerplate": "def cloneGraph(*args):\n    # TODO: Implement solution for Clone Graph\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = cloneGraph(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(cloneGraph(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function cloneGraph(...args) {\n    // TODO: Implement solution for Clone Graph\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(cloneGraph(...parsed)));\n    } catch (e) {\n        console.log(cloneGraph(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Clone Graph\n        // TODO: Read input from cin and implement solution\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        // TODO: Read from br and implement solution\n    }\n}\n"
      }
    ],
    "sampleTestCases": [
      {
        "input": "[[2,4],[1,3],[2,4],[1,3]]",
        "output": "[[2, 4], [1, 3], [2, 4], [1, 3]]",
        "explanation": "Graph cloned with identical structure."
      },
      {
        "input": "[[]]",
        "output": "[[]]",
        "explanation": "Node with 0 neighbors."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "[[2,4],[1,3],[2,4],[1,3]]",
        "output": "[[2, 4], [1, 3], [2, 4], [1, 3]]",
        "isHidden": true
      },
      {
        "input": "[[]]",
        "output": "[[]]",
        "isHidden": true
      },
      {
        "input": "[]",
        "output": "[]",
        "isHidden": true
      }
    ],
    "hints": [
      "Use a hash map mapping original node pointer to clone node pointer."
    ],
    "editorial": {
      "approach": "Optimal Approach for Clone Graph",
      "solutionMarkdown": "### Optimal Solution\n\nDFS/BFS with map {old_node: new_node}. Clone neighbors recursively.\n\n### Complexity\n- Time: O(V + E), Space: O(V)",
      "timeComplexity": "O(V + E)",
      "spaceComplexity": "O(V)"
    },
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0
  },
  {
    "title": "Closest Binary Search Tree Value",
    "slug": "closest-binary-search-tree-value",
    "description": "Given the `root` of a binary search tree and a target value `target`, return *the value in the BST that is closest to the `target`*.\n\n### Example 1:\n```\nInput: [4,2,5,1,3]\n3.714286\nOutput: 4\nExplanation: Node 4 is closest to 3.714286.\n```\n\n### Example 2:\n```\nInput: [1]\n4.428571\nOutput: 1\nExplanation: Node 1 is closest.\n```",
    "difficulty": "EASY",
    "category": "DSA",
    "patterns": [
      "Tree",
      "Binary Search",
      "DFS / BFS"
    ],
    "topics": [
      "Tree",
      "Binary Search",
      "DFS / BFS"
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
        "boilerplate": "def closestBinarySearchTreeValue(*args):\n    # TODO: Implement solution for Closest Binary Search Tree Value\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = closestBinarySearchTreeValue(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(closestBinarySearchTreeValue(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function closestBinarySearchTreeValue(...args) {\n    // TODO: Implement solution for Closest Binary Search Tree Value\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(closestBinarySearchTreeValue(...parsed)));\n    } catch (e) {\n        console.log(closestBinarySearchTreeValue(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Closest Binary Search Tree Value\n        // TODO: Read input from cin and implement solution\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        // TODO: Read from br and implement solution\n    }\n}\n"
      }
    ],
    "sampleTestCases": [
      {
        "input": "[4,2,5,1,3]\n3.714286",
        "output": "4",
        "explanation": "Node 4 is closest to 3.714286."
      },
      {
        "input": "[1]\n4.428571",
        "output": "1",
        "explanation": "Node 1 is closest."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "[4,2,5,1,3]\n3.714286",
        "output": "4",
        "isHidden": true
      },
      {
        "input": "[1]\n4.428571",
        "output": "1",
        "isHidden": true
      }
    ],
    "hints": [
      "Binary search down the BST: if target < node.val go left, else go right, tracking closest."
    ],
    "editorial": {
      "approach": "Optimal Approach for Closest Binary Search Tree Value",
      "solutionMarkdown": "### Optimal Solution\n\nIterative BST walk updating closest node based on abs(node.val - target).\n\n### Complexity\n- Time: O(H), Space: O(1)",
      "timeComplexity": "O(H)",
      "spaceComplexity": "O(1)"
    },
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0
  },
  {
    "title": "Closest Binary Search Tree Value II",
    "slug": "closest-binary-search-tree-value-ii",
    "description": "Given the `root` of a binary search tree, a `target` value, and an integer `k`, return *the `k` values in the BST that are closest to the `target`*. You may return the answer in any order.\n\n### Example 1:\n```\nInput: [4,2,5,1,3]\n3.714286\n2\nOutput: [4, 3]\nExplanation: 3 and 4 are the two closest values.\n```\n\n### Example 2:\n```\nInput: [1]\n0.000000\n1\nOutput: [1]\nExplanation: 1 is the closest.\n```",
    "difficulty": "HARD",
    "category": "DSA",
    "patterns": [
      "Tree",
      "Binary Search",
      "Heaps / Priority Queue"
    ],
    "topics": [
      "Tree",
      "Binary Search",
      "Heaps / Priority Queue"
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
        "boilerplate": "def closestBinarySearchTreeValueIi(*args):\n    # TODO: Implement solution for Closest Binary Search Tree Value II\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = closestBinarySearchTreeValueIi(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(closestBinarySearchTreeValueIi(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function closestBinarySearchTreeValueIi(...args) {\n    // TODO: Implement solution for Closest Binary Search Tree Value II\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(closestBinarySearchTreeValueIi(...parsed)));\n    } catch (e) {\n        console.log(closestBinarySearchTreeValueIi(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Closest Binary Search Tree Value II\n        // TODO: Read input from cin and implement solution\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        // TODO: Read from br and implement solution\n    }\n}\n"
      }
    ],
    "sampleTestCases": [
      {
        "input": "[4,2,5,1,3]\n3.714286\n2",
        "output": "[4, 3]",
        "explanation": "3 and 4 are the two closest values."
      },
      {
        "input": "[1]\n0.000000\n1",
        "output": "[1]",
        "explanation": "1 is the closest."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "[4,2,5,1,3]\n3.714286\n2",
        "output": "[4, 3]",
        "isHidden": true
      },
      {
        "input": "[1]\n0.000000\n1",
        "output": "[1]",
        "isHidden": true
      }
    ],
    "hints": [
      "Inorder traversal with a sliding window deque of size k."
    ],
    "editorial": {
      "approach": "Optimal Approach for Closest Binary Search Tree Value II",
      "solutionMarkdown": "### Optimal Solution\n\nInorder traversal maintaining deque of size k. If deque full and current val is farther than first, break.\n\n### Complexity\n- Time: O(N), Space: O(H + k)",
      "timeComplexity": "O(N)",
      "spaceComplexity": "O(H + k)"
    },
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0
  },
  {
    "title": "Coin Change",
    "slug": "coin-change",
    "description": "You are given an integer array `coins` representing coins of different denominations and an integer `amount` representing a total amount of money.\n\nReturn *the fewest number of coins that you need to make up that amount*. If that amount cannot be made up, return `-1`.\n\n### Example 1:\n```\nInput: [1,2,5]\n11\nOutput: 3\nExplanation: 11 = 5 + 5 + 1 (3 coins).\n```\n\n### Example 2:\n```\nInput: [2]\n3\nOutput: -1\nExplanation: Cannot make amount 3 with coin 2.\n```",
    "difficulty": "MEDIUM",
    "category": "DP",
    "patterns": [
      "Dynamic Programming",
      "BFS / DFS"
    ],
    "topics": [
      "Dynamic Programming",
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
        "company": "Accenture",
        "yearReported": 2025,
        "verified": false,
        "frequencyCount": 25,
        "sourceNote": "Accenture Practice Bank #88"
      },
      {
        "company": "Infosys",
        "yearReported": 2025,
        "verified": true,
        "frequencyCount": 42,
        "sourceNote": "Infosys Interview Question #85"
      },
      {
        "company": "TCS",
        "yearReported": 2025,
        "verified": false,
        "frequencyCount": 30,
        "sourceNote": "TCS Practice Bank #80"
      }
    ],
    "supportedLanguages": [
      "python",
      "javascript",
      "cpp",
      "java"
    ],
    "starterCode": [
      {
        "language": "python",
        "boilerplate": "def coinChange(*args):\n    # TODO: Implement solution for Coin Change\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = coinChange(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(coinChange(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function coinChange(...args) {\n    // TODO: Implement solution for Coin Change\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(coinChange(...parsed)));\n    } catch (e) {\n        console.log(coinChange(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Coin Change\n        // TODO: Read input from cin and implement solution\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        // TODO: Read from br and implement solution\n    }\n}\n"
      }
    ],
    "sampleTestCases": [
      {
        "input": "[1,2,5]\n11",
        "output": "3",
        "explanation": "11 = 5 + 5 + 1 (3 coins)."
      },
      {
        "input": "[2]\n3",
        "output": "-1",
        "explanation": "Cannot make amount 3 with coin 2."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "[1,2,5]\n11",
        "output": "3",
        "isHidden": true
      },
      {
        "input": "[2]\n3",
        "output": "-1",
        "isHidden": true
      },
      {
        "input": "[1]\n0",
        "output": "0",
        "isHidden": true
      },
      {
        "input": "[1]\n2",
        "output": "2",
        "isHidden": true
      }
    ],
    "hints": [
      "dp[x] = min(dp[x], dp[x - coin] + 1) for each coin <= x."
    ],
    "editorial": {
      "approach": "Optimal Approach for Coin Change",
      "solutionMarkdown": "### Optimal Solution\n\n1D Bottom-up DP initialized to infinity. dp[0] = 0.\n\n### Complexity\n- Time: O(amount * len(coins)), Space: O(amount)",
      "timeComplexity": "O(amount * len(coins))",
      "spaceComplexity": "O(amount)"
    },
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0
  },
  {
    "title": "Coin Change II",
    "slug": "coin-change-ii",
    "description": "You are given an integer array `coins` representing coins of different denominations and an integer `amount`. Return the number of combinations that make up that amount. You may assume an infinite number of each kind of coin.\n\n### Example 1:\n```\nInput: 5\n[1,2,5]\nOutput: 4\nExplanation: 5=5, 5=2+2+1, 5=2+1+1+1, 5=1+1+1+1+1.\n```\n\n### Example 2:\n```\nInput: 3\n[2]\nOutput: 0\nExplanation: Cannot make 3 using only 2s.\n```",
    "difficulty": "MEDIUM",
    "category": "DP",
    "patterns": [
      "Dynamic Programming",
      "Knapsack"
    ],
    "topics": [
      "Dynamic Programming",
      "Knapsack"
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
        "sourceNote": "TCS Practice Bank #81"
      }
    ],
    "supportedLanguages": [
      "python",
      "javascript",
      "cpp",
      "java"
    ],
    "starterCode": [
      {
        "language": "python",
        "boilerplate": "def coinChangeIi(*args):\n    # TODO: Implement solution for Coin Change II\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = coinChangeIi(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(coinChangeIi(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function coinChangeIi(...args) {\n    // TODO: Implement solution for Coin Change II\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(coinChangeIi(...parsed)));\n    } catch (e) {\n        console.log(coinChangeIi(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Coin Change II\n        // TODO: Read input from cin and implement solution\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        // TODO: Read from br and implement solution\n    }\n}\n"
      }
    ],
    "sampleTestCases": [
      {
        "input": "5\n[1,2,5]",
        "output": "4",
        "explanation": "5=5, 5=2+2+1, 5=2+1+1+1, 5=1+1+1+1+1."
      },
      {
        "input": "3\n[2]",
        "output": "0",
        "explanation": "Cannot make 3 using only 2s."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "5\n[1,2,5]",
        "output": "4",
        "isHidden": true
      },
      {
        "input": "3\n[2]",
        "output": "0",
        "isHidden": true
      },
      {
        "input": "10\n[10]",
        "output": "1",
        "isHidden": true
      }
    ],
    "hints": [
      "Unbounded knapsack: loop coins outer, amount inner from coin to amount."
    ],
    "editorial": {
      "approach": "Optimal Approach for Coin Change II",
      "solutionMarkdown": "### Optimal Solution\n\nOuter loop over coins, inner loop over amounts ensures combinations rather than permutations.\n\n### Complexity\n- Time: O(amount * len(coins)), Space: O(amount)",
      "timeComplexity": "O(amount * len(coins))",
      "spaceComplexity": "O(amount)"
    },
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0
  },
  {
    "title": "Combination Sum",
    "slug": "combination-sum",
    "description": "Given an array of **distinct** integers `candidates` and a target integer `target`, return a list of all **unique combinations** of `candidates` where the chosen numbers sum to `target`. You may return the combinations in any order. The same number may be chosen unlimited times.\n\n### Example 1:\n```\nInput: [2,3,6,7]\n7\nOutput: [[2, 2, 3], [7]]\nExplanation: 2+2+3=7 and 7=7.\n```\n\n### Example 2:\n```\nInput: [2,3,5]\n8\nOutput: [[2, 2, 2, 2], [2, 3, 3], [3, 5]]\nExplanation: 3 distinct valid combinations.\n```",
    "difficulty": "MEDIUM",
    "category": "DSA",
    "patterns": [
      "Backtracking",
      "Array"
    ],
    "topics": [
      "Backtracking",
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
        "sourceNote": "Accenture Practice Bank #83"
      },
      {
        "company": "TCS",
        "yearReported": 2025,
        "verified": false,
        "frequencyCount": 30,
        "sourceNote": "TCS Practice Bank #92"
      }
    ],
    "supportedLanguages": [
      "python",
      "javascript",
      "cpp",
      "java"
    ],
    "starterCode": [
      {
        "language": "python",
        "boilerplate": "def combinationSum(*args):\n    # TODO: Implement solution for Combination Sum\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = combinationSum(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(combinationSum(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function combinationSum(...args) {\n    // TODO: Implement solution for Combination Sum\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(combinationSum(...parsed)));\n    } catch (e) {\n        console.log(combinationSum(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Combination Sum\n        // TODO: Read input from cin and implement solution\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        // TODO: Read from br and implement solution\n    }\n}\n"
      }
    ],
    "sampleTestCases": [
      {
        "input": "[2,3,6,7]\n7",
        "output": "[[2, 2, 3], [7]]",
        "explanation": "2+2+3=7 and 7=7."
      },
      {
        "input": "[2,3,5]\n8",
        "output": "[[2, 2, 2, 2], [2, 3, 3], [3, 5]]",
        "explanation": "3 distinct valid combinations."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "[2,3,6,7]\n7",
        "output": "[[2, 2, 3], [7]]",
        "isHidden": true
      },
      {
        "input": "[2,3,5]\n8",
        "output": "[[2, 2, 2, 2], [2, 3, 3], [3, 5]]",
        "isHidden": true
      },
      {
        "input": "[2]\n1",
        "output": "[]",
        "isHidden": true
      }
    ],
    "hints": [
      "Backtrack with index: at each step choose candidates[i] without advancing index, or skip to index + 1."
    ],
    "editorial": {
      "approach": "Optimal Approach for Combination Sum",
      "solutionMarkdown": "### Optimal Solution\n\nDFS backtracking tree. Prune branches when remaining target < 0.\n\n### Complexity\n- Time: O(2^T) where T is target/min_candidate, Space: O(T)",
      "timeComplexity": "O(2^T) where T is target/min_candidate",
      "spaceComplexity": "O(T)"
    },
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0
  },
  {
    "title": "Combination Sum II",
    "slug": "combination-sum-ii",
    "description": "Given a collection of candidate numbers (`candidates`) and a target number (`target`), find all unique combinations in `candidates` where the candidate numbers sum to `target`. Each number in `candidates` may only be used **once** in the combination.\n\n### Example 1:\n```\nInput: [10,1,2,7,6,1,5]\n8\nOutput: [[1, 1, 6], [1, 2, 5], [1, 7], [2, 6]]\nExplanation: All unique combinations summing to 8.\n```\n\n### Example 2:\n```\nInput: [2,5,2,1,2]\n5\nOutput: [[1, 2, 2], [5]]\nExplanation: Valid unique combinations.\n```",
    "difficulty": "MEDIUM",
    "category": "DSA",
    "patterns": [
      "Backtracking",
      "Array"
    ],
    "topics": [
      "Backtracking",
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
        "boilerplate": "def combinationSumIi(*args):\n    # TODO: Implement solution for Combination Sum II\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = combinationSumIi(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(combinationSumIi(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function combinationSumIi(...args) {\n    // TODO: Implement solution for Combination Sum II\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(combinationSumIi(...parsed)));\n    } catch (e) {\n        console.log(combinationSumIi(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Combination Sum II\n        // TODO: Read input from cin and implement solution\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        // TODO: Read from br and implement solution\n    }\n}\n"
      }
    ],
    "sampleTestCases": [
      {
        "input": "[10,1,2,7,6,1,5]\n8",
        "output": "[[1, 1, 6], [1, 2, 5], [1, 7], [2, 6]]",
        "explanation": "All unique combinations summing to 8."
      },
      {
        "input": "[2,5,2,1,2]\n5",
        "output": "[[1, 2, 2], [5]]",
        "explanation": "Valid unique combinations."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "[10,1,2,7,6,1,5]\n8",
        "output": "[[1, 1, 6], [1, 2, 5], [1, 7], [2, 6]]",
        "isHidden": true
      },
      {
        "input": "[2,5,2,1,2]\n5",
        "output": "[[1, 2, 2], [5]]",
        "isHidden": true
      }
    ],
    "hints": [
      "Sort array. In backtracking loop, skip candidates[i] == candidates[i-1] when i > start."
    ],
    "editorial": {
      "approach": "Optimal Approach for Combination Sum II",
      "solutionMarkdown": "### Optimal Solution\n\nSort candidates. Backtrack with index+1. Prune duplicate siblings to ensure uniqueness.\n\n### Complexity\n- Time: O(2^N), Space: O(N)",
      "timeComplexity": "O(2^N)",
      "spaceComplexity": "O(N)"
    },
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0
  },
  {
    "title": "Combination Sum IV",
    "slug": "combination-sum-iv",
    "description": "Given an array of **distinct** integers `nums` and a target integer `target`, return *the number of possible combinations that add up to `target`* (where different permutations are counted as different combinations).\n\n### Example 1:\n```\nInput: [1,2,3]\n4\nOutput: 7\nExplanation: 7 combinations: (1,1,1,1), (1,1,2), (1,2,1), (1,3), (2,1,1), (2,2), (3,1).\n```\n\n### Example 2:\n```\nInput: [9]\n3\nOutput: 0\nExplanation: Cannot make target 3.\n```",
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
        "boilerplate": "def combinationSumIv(*args):\n    # TODO: Implement solution for Combination Sum IV\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = combinationSumIv(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(combinationSumIv(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function combinationSumIv(...args) {\n    // TODO: Implement solution for Combination Sum IV\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(combinationSumIv(...parsed)));\n    } catch (e) {\n        console.log(combinationSumIv(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Combination Sum IV\n        // TODO: Read input from cin and implement solution\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        // TODO: Read from br and implement solution\n    }\n}\n"
      }
    ],
    "sampleTestCases": [
      {
        "input": "[1,2,3]\n4",
        "output": "7",
        "explanation": "7 combinations: (1,1,1,1), (1,1,2), (1,2,1), (1,3), (2,1,1), (2,2), (3,1)."
      },
      {
        "input": "[9]\n3",
        "output": "0",
        "explanation": "Cannot make target 3."
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
      }
    ],
    "hints": [
      "dp[i] represents number of ways to reach sum i. Outer loop amount, inner loop coins."
    ],
    "editorial": {
      "approach": "Optimal Approach for Combination Sum IV",
      "solutionMarkdown": "### Optimal Solution\n\n1D DP bottom-up: dp[i] = sum(dp[i - num]) for all num <= i.\n\n### Complexity\n- Time: O(Target * N), Space: O(Target)",
      "timeComplexity": "O(Target * N)",
      "spaceComplexity": "O(Target)"
    },
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0
  },
  {
    "title": "Combinations",
    "slug": "combinations",
    "description": "Given two integers `n` and `k`, return *all possible combinations of `k` numbers chosen from the range `[1, n]`*.\n\n### Example 1:\n```\nInput: 4\n2\nOutput: [[1, 2], [1, 3], [1, 4], [2, 3], [2, 4], [3, 4]]\nExplanation: All 4 choose 2 combinations.\n```\n\n### Example 2:\n```\nInput: 1\n1\nOutput: [[1]]\nExplanation: Single choice.\n```",
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
        "boilerplate": "def combinations(*args):\n    # TODO: Implement solution for Combinations\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = combinations(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(combinations(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function combinations(...args) {\n    // TODO: Implement solution for Combinations\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(combinations(...parsed)));\n    } catch (e) {\n        console.log(combinations(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Combinations\n        // TODO: Read input from cin and implement solution\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        // TODO: Read from br and implement solution\n    }\n}\n"
      }
    ],
    "sampleTestCases": [
      {
        "input": "4\n2",
        "output": "[[1, 2], [1, 3], [1, 4], [2, 3], [2, 4], [3, 4]]",
        "explanation": "All 4 choose 2 combinations."
      },
      {
        "input": "1\n1",
        "output": "[[1]]",
        "explanation": "Single choice."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "4\n2",
        "output": "[[1, 2], [1, 3], [1, 4], [2, 3], [2, 4], [3, 4]]",
        "isHidden": true
      },
      {
        "input": "1\n1",
        "output": "[[1]]",
        "isHidden": true
      }
    ],
    "hints": [
      "Backtrack choosing numbers from start to n - (k - len(comb)) + 1."
    ],
    "editorial": {
      "approach": "Optimal Approach for Combinations",
      "solutionMarkdown": "### Optimal Solution\n\nStandard backtracking template with optimization to prune when remaining numbers are fewer than needed.\n\n### Complexity\n- Time: O(C(N, K)), Space: O(K)",
      "timeComplexity": "O(C(N",
      "spaceComplexity": "K))"
    },
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0
  },
  {
    "title": "Concatenated Words",
    "slug": "concatenated-words",
    "description": "Given an array of strings `words` (**without duplicates**), return *all the **concatenated words** in the given list of words*. A concatenated word is defined as a string that is comprised entirely of at least two shorter words in the given array.\n\n### Example 1:\n```\nInput: [\"cat\",\"cats\",\"catsdogcats\",\"dog\",\"dogcatsdog\",\"hippopotamuses\",\"rat\",\"ratcatdogcat\"]\nOutput: [\"catsdogcats\", \"dogcatsdog\", \"ratcatdogcat\"]\nExplanation: Concatenated words formed from other words.\n```\n\n### Example 2:\n```\nInput: [\"cat\",\"dog\",\"catdog\"]\nOutput: [\"catdog\"]\nExplanation: 'catdog' = 'cat' + 'dog'.\n```",
    "difficulty": "HARD",
    "category": "DSA",
    "patterns": [
      "Trie",
      "Dynamic Programming",
      "DFS / BFS"
    ],
    "topics": [
      "Trie",
      "Dynamic Programming",
      "DFS / BFS"
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
        "boilerplate": "def concatenatedWords(*args):\n    # TODO: Implement solution for Concatenated Words\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = concatenatedWords(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(concatenatedWords(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function concatenatedWords(...args) {\n    // TODO: Implement solution for Concatenated Words\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(concatenatedWords(...parsed)));\n    } catch (e) {\n        console.log(concatenatedWords(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Concatenated Words\n        // TODO: Read input from cin and implement solution\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        // TODO: Read from br and implement solution\n    }\n}\n"
      }
    ],
    "sampleTestCases": [
      {
        "input": "[\"cat\",\"cats\",\"catsdogcats\",\"dog\",\"dogcatsdog\",\"hippopotamuses\",\"rat\",\"ratcatdogcat\"]",
        "output": "[\"catsdogcats\", \"dogcatsdog\", \"ratcatdogcat\"]",
        "explanation": "Concatenated words formed from other words."
      },
      {
        "input": "[\"cat\",\"dog\",\"catdog\"]",
        "output": "[\"catdog\"]",
        "explanation": "'catdog' = 'cat' + 'dog'."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "[\"cat\",\"cats\",\"catsdogcats\",\"dog\",\"dogcatsdog\",\"hippopotamuses\",\"rat\",\"ratcatdogcat\"]",
        "output": "[\"catsdogcats\", \"dogcatsdog\", \"ratcatdogcat\"]",
        "isHidden": true
      }
    ],
    "hints": [
      "Sort words by length. For each word, use Word Break DP against a set of shorter seen words."
    ],
    "editorial": {
      "approach": "Optimal Approach for Concatenated Words",
      "solutionMarkdown": "### Optimal Solution\n\nSort by length. Test if word can be formed by shorter words using 1D DP. Add word to set.\n\n### Complexity\n- Time: O(N * L^2), Space: O(N * L)",
      "timeComplexity": "O(N * L^2)",
      "spaceComplexity": "O(N * L)"
    },
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0
  },
  {
    "title": "Construct Binary Tree from Preorder and Inorder Traversal",
    "slug": "construct-binary-tree-from-preorder-and-inorder-traversal",
    "description": "Given two integer arrays `preorder` and `inorder` where `preorder` is the preorder traversal of a binary tree and `inorder` is the inorder traversal of the same tree, construct and return *the binary tree*.\n\n### Example 1:\n```\nInput: [3,9,20,15,7]\n[9,3,15,20,7]\nOutput: [3, 9, 20, null, null, 15, 7]\nExplanation: Root is 3, left subtree [9], right subtree [20,15,7].\n```\n\n### Example 2:\n```\nInput: [-1]\n[-1]\nOutput: [-1]\nExplanation: Single node tree.\n```",
    "difficulty": "MEDIUM",
    "category": "DSA",
    "patterns": [
      "Tree",
      "Divide and Conquer",
      "Hash Table"
    ],
    "topics": [
      "Tree",
      "Divide and Conquer",
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
      }
    ],
    "supportedLanguages": [
      "python",
      "javascript",
      "cpp",
      "java"
    ],
    "starterCode": [
      {
        "language": "python",
        "boilerplate": "def constructBinaryTreeFromPreorderAndInorderTraversal(*args):\n    # TODO: Implement solution for Construct Binary Tree from Preorder and Inorder Traversal\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = constructBinaryTreeFromPreorderAndInorderTraversal(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(constructBinaryTreeFromPreorderAndInorderTraversal(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function constructBinaryTreeFromPreorderAndInorderTraversal(...args) {\n    // TODO: Implement solution for Construct Binary Tree from Preorder and Inorder Traversal\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(constructBinaryTreeFromPreorderAndInorderTraversal(...parsed)));\n    } catch (e) {\n        console.log(constructBinaryTreeFromPreorderAndInorderTraversal(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Construct Binary Tree from Preorder and Inorder Traversal\n        // TODO: Read input from cin and implement solution\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        // TODO: Read from br and implement solution\n    }\n}\n"
      }
    ],
    "sampleTestCases": [
      {
        "input": "[3,9,20,15,7]\n[9,3,15,20,7]",
        "output": "[3, 9, 20, null, null, 15, 7]",
        "explanation": "Root is 3, left subtree [9], right subtree [20,15,7]."
      },
      {
        "input": "[-1]\n[-1]",
        "output": "[-1]",
        "explanation": "Single node tree."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "[3,9,20,15,7]\n[9,3,15,20,7]",
        "output": "[3, 9, 20, null, null, 15, 7]",
        "isHidden": true
      },
      {
        "input": "[-1]\n[-1]",
        "output": "[-1]",
        "isHidden": true
      }
    ],
    "hints": [
      "Preorder first element is root. Find root position in inorder array to divide into left and right subtrees."
    ],
    "editorial": {
      "approach": "Optimal Approach for Construct Binary Tree from Preorder and Inorder Traversal",
      "solutionMarkdown": "### Optimal Solution\n\nHash map stores inorder value indices. Divide and conquer constructs root, left, right.\n\n### Complexity\n- Time: O(N), Space: O(N)",
      "timeComplexity": "O(N)",
      "spaceComplexity": "O(N)"
    },
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0
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
        "sourceNote": "Accenture Practice Bank #39"
      },
      {
        "company": "Infosys",
        "yearReported": 2025,
        "verified": true,
        "frequencyCount": 42,
        "sourceNote": "Infosys Interview Question #26"
      }
    ],
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
        "boilerplate": "function containerWithMostWater(...args) {\n    // TODO: Implement solution for Container With Most Water\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(containerWithMostWater(...parsed)));\n    } catch (e) {\n        console.log(containerWithMostWater(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Container With Most Water\n        // TODO: Read input from cin and implement solution\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        // TODO: Read from br and implement solution\n    }\n}\n"
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
        "output": "49",
        "isHidden": true
      },
      {
        "input": "[1,1]",
        "output": "1",
        "isHidden": true
      },
      {
        "input": "[4,3,2,1,4]",
        "output": "16",
        "isHidden": true
      }
    ],
    "hints": [
      "Start pointers at ends: left=0, right=n-1. Move pointer with smaller height inward."
    ],
    "editorial": {
      "approach": "Optimal Approach for Container With Most Water",
      "solutionMarkdown": "### Optimal Solution\n\nTwo pointer greedy inward search moving smaller bar.\n\n### Complexity\n- Time: O(N), Space: O(1)",
      "timeComplexity": "O(N)",
      "spaceComplexity": "O(1)"
    },
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0
  },
  {
    "title": "Contains Duplicate",
    "slug": "contains-duplicate",
    "description": "Given an integer array `nums`, return `true` if any value appears **at least twice** in the array, and return `false` if every element is distinct.\n\n### Example 1:\n```\nInput: [1,2,3,1]\nOutput: true\nExplanation: 1 appears at index 0 and index 3.\n```\n\n### Example 2:\n```\nInput: [1,2,3,4]\nOutput: false\nExplanation: All elements are distinct.\n```",
    "difficulty": "EASY",
    "category": "DSA",
    "patterns": [
      "Array",
      "Hash Table",
      "Sorting"
    ],
    "topics": [
      "Array",
      "Hash Table",
      "Sorting"
    ],
    "companyTags": [
      {
        "company": "Accenture",
        "yearReported": 2025,
        "verified": false,
        "frequencyCount": 25,
        "sourceNote": "Accenture Practice Bank #3"
      },
      {
        "company": "Infosys",
        "yearReported": 2025,
        "verified": true,
        "frequencyCount": 42,
        "sourceNote": "Infosys Interview Question #2"
      },
      {
        "company": "TCS",
        "yearReported": 2025,
        "verified": false,
        "frequencyCount": 30,
        "sourceNote": "TCS Practice Bank #13"
      }
    ],
    "supportedLanguages": [
      "python",
      "javascript",
      "cpp",
      "java"
    ],
    "starterCode": [
      {
        "language": "python",
        "boilerplate": "def containsDuplicate(*args):\n    # TODO: Implement solution for Contains Duplicate\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = containsDuplicate(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(containsDuplicate(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function containsDuplicate(...args) {\n    // TODO: Implement solution for Contains Duplicate\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(containsDuplicate(...parsed)));\n    } catch (e) {\n        console.log(containsDuplicate(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Contains Duplicate\n        // TODO: Read input from cin and implement solution\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        // TODO: Read from br and implement solution\n    }\n}\n"
      }
    ],
    "sampleTestCases": [
      {
        "input": "[1,2,3,1]",
        "output": "true",
        "explanation": "1 appears at index 0 and index 3."
      },
      {
        "input": "[1,2,3,4]",
        "output": "false",
        "explanation": "All elements are distinct."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "[1,2,3,1]",
        "output": "true",
        "isHidden": true
      },
      {
        "input": "[1,2,3,4]",
        "output": "false",
        "isHidden": true
      },
      {
        "input": "[1,1,1,3,3,4,3,2,4,2]",
        "output": "true",
        "isHidden": true
      }
    ],
    "hints": [
      "Use a hash set to track seen elements in O(1) time."
    ],
    "editorial": {
      "approach": "Optimal Approach for Contains Duplicate",
      "solutionMarkdown": "### Optimal Solution\n\nIterate through nums. For each x, if x is already in hash set, return true. Add x to set. Return false at end.\n\n### Complexity\n- Time: O(N), Space: O(N)",
      "timeComplexity": "O(N)",
      "spaceComplexity": "O(N)"
    },
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0
  },
  {
    "title": "Contains Duplicate II",
    "slug": "contains-duplicate-ii",
    "description": "Given an integer array `nums` and an integer `k`, return `true` if there are two **distinct indices** `i` and `j` in the array such that `nums[i] == nums[j]` and `abs(i - j) <= k`.\n\n### Example 1:\n```\nInput: [1,2,3,1]\n3\nOutput: true\nExplanation: nums[0] == nums[3] and 3 - 0 <= 3.\n```\n\n### Example 2:\n```\nInput: [1,2,3,1,2,3]\n2\nOutput: false\nExplanation: All duplicate pairs have distance > 2.\n```",
    "difficulty": "EASY",
    "category": "DSA",
    "patterns": [
      "Hash Table",
      "Sliding Window",
      "Array"
    ],
    "topics": [
      "Hash Table",
      "Sliding Window",
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
        "boilerplate": "def containsDuplicateIi(*args):\n    # TODO: Implement solution for Contains Duplicate II\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = containsDuplicateIi(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(containsDuplicateIi(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function containsDuplicateIi(...args) {\n    // TODO: Implement solution for Contains Duplicate II\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(containsDuplicateIi(...parsed)));\n    } catch (e) {\n        console.log(containsDuplicateIi(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Contains Duplicate II\n        // TODO: Read input from cin and implement solution\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        // TODO: Read from br and implement solution\n    }\n}\n"
      }
    ],
    "sampleTestCases": [
      {
        "input": "[1,2,3,1]\n3",
        "output": "true",
        "explanation": "nums[0] == nums[3] and 3 - 0 <= 3."
      },
      {
        "input": "[1,2,3,1,2,3]\n2",
        "output": "false",
        "explanation": "All duplicate pairs have distance > 2."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "[1,2,3,1]\n3",
        "output": "true",
        "isHidden": true
      },
      {
        "input": "[1,2,3,1,2,3]\n2",
        "output": "false",
        "isHidden": true
      },
      {
        "input": "[1,0,1,1]\n1",
        "output": "true",
        "isHidden": true
      }
    ],
    "hints": [
      "Maintain a hash map storing the latest index of each number seen."
    ],
    "editorial": {
      "approach": "Optimal Approach for Contains Duplicate II",
      "solutionMarkdown": "### Optimal Solution\n\nOne-pass: if num in map and i - map[num] <= k return true; map[num] = i.\n\n### Complexity\n- Time: O(N), Space: O(min(N, k))",
      "timeComplexity": "O(N)",
      "spaceComplexity": "O(min(N"
    },
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0
  },
  {
    "title": "Longest Subarray with Equal 0s and 1s",
    "slug": "contiguous-array",
    "description": "Given a binary array `nums`, return *the maximum length of a contiguous subarray with an equal number of* `0` *and* `1`.\n\n### Example 1:\n```\nInput: [0,1]\nOutput: 2\nExplanation: [0, 1] is the longest contiguous subarray with an equal number of 0 and 1.\n```\n\n### Example 2:\n```\nInput: [0,1,0]\nOutput: 2\nExplanation: [0, 1] or [1, 0] are contiguous subarrays with length 2.\n```",
    "difficulty": "MEDIUM",
    "category": "DSA",
    "patterns": [
      "Array",
      "Hash Table",
      "Prefix Sum"
    ],
    "topics": [
      "Array",
      "Hash Table",
      "Prefix Sum"
    ],
    "companyTags": [
      {
        "company": "Infosys",
        "yearReported": 2025,
        "verified": true,
        "frequencyCount": 42,
        "sourceNote": "Infosys Interview Question #29"
      }
    ],
    "supportedLanguages": [
      "python",
      "javascript",
      "cpp",
      "java"
    ],
    "starterCode": [
      {
        "language": "python",
        "boilerplate": "def contiguousArray(*args):\n    # TODO: Implement solution for Longest Subarray with Equal 0s and 1s\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = contiguousArray(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(contiguousArray(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function contiguousArray(...args) {\n    // TODO: Implement solution for Longest Subarray with Equal 0s and 1s\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(contiguousArray(...parsed)));\n    } catch (e) {\n        console.log(contiguousArray(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Longest Subarray with Equal 0s and 1s\n        // TODO: Read input from cin and implement solution\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        // TODO: Read from br and implement solution\n    }\n}\n"
      }
    ],
    "sampleTestCases": [
      {
        "input": "[0,1]",
        "output": "2",
        "explanation": "[0, 1] is the longest contiguous subarray with an equal number of 0 and 1."
      },
      {
        "input": "[0,1,0]",
        "output": "2",
        "explanation": "[0, 1] or [1, 0] are contiguous subarrays with length 2."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "[0,1]",
        "output": "2",
        "isHidden": true
      },
      {
        "input": "[0,1,0]",
        "output": "2",
        "isHidden": true
      },
      {
        "input": "[0,0,1,0,0,0,1,1]",
        "output": "6",
        "isHidden": true
      }
    ],
    "hints": [
      "Replace 0 with -1. The problem reduces to finding the longest subarray with sum 0."
    ],
    "editorial": {
      "approach": "Optimal Approach for Longest Subarray with Equal 0s and 1s",
      "solutionMarkdown": "### Optimal Solution\n\nMap 0 to -1. Maintain running sum and store earliest seen index of each sum in a hash map. Length = i - map[sum].\n\n### Complexity\n- Time: O(N), Space: O(N)",
      "timeComplexity": "O(N)",
      "spaceComplexity": "O(N)"
    },
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0
  },
  {
    "title": "Convert Number to Words (up to 999 crores)",
    "slug": "convert-number-to-words",
    "description": "Given an integer `num`, convert it to English words representation. Support Indian / Western numbering format place-values (Crore / Lakh or Billion / Million / Thousand).\n\n### Example 1:\n```\nInput: 123\nOutput: \"One Hundred Twenty Three\"\nExplanation: 123 in words.\n```\n\n### Example 2:\n```\nInput: 12345\nOutput: \"Twelve Thousand Three Hundred Forty Five\"\nExplanation: 12,345 in words.\n```",
    "difficulty": "MEDIUM",
    "category": "DSA",
    "patterns": [
      "String",
      "Math",
      "Parsing"
    ],
    "topics": [
      "String",
      "Math",
      "Parsing"
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
        "boilerplate": "def convertNumberToWords(*args):\n    # TODO: Implement solution for Convert Number to Words (up to 999 crores)\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = convertNumberToWords(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(convertNumberToWords(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function convertNumberToWords(...args) {\n    // TODO: Implement solution for Convert Number to Words (up to 999 crores)\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(convertNumberToWords(...parsed)));\n    } catch (e) {\n        console.log(convertNumberToWords(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Convert Number to Words (up to 999 crores)\n        // TODO: Read input from cin and implement solution\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        // TODO: Read from br and implement solution\n    }\n}\n"
      }
    ],
    "sampleTestCases": [
      {
        "input": "123",
        "output": "\"One Hundred Twenty Three\"",
        "explanation": "123 in words."
      },
      {
        "input": "12345",
        "output": "\"Twelve Thousand Three Hundred Forty Five\"",
        "explanation": "12,345 in words."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "123",
        "output": "\"One Hundred Twenty Three\"",
        "isHidden": true
      },
      {
        "input": "12345",
        "output": "\"Twelve Thousand Three Hundred Forty Five\"",
        "isHidden": true
      },
      {
        "input": "0",
        "output": "\"Zero\"",
        "isHidden": true
      }
    ],
    "hints": [
      "Decompose number into chunks of thousands/lakhs/crores with helper for 3-digit numbers."
    ],
    "editorial": {
      "approach": "Optimal Approach for Convert Number to Words (up to 999 crores)",
      "solutionMarkdown": "### Optimal Solution\n\nRecursive place-value parsing for chunks of units, tens, hundreds, thousands, millions.\n\n### Complexity\n- Time: O(log10(N)), Space: O(1)",
      "timeComplexity": "O(log10(N))",
      "spaceComplexity": "O(1)"
    },
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0
  },
  {
    "title": "Copy List with Random Pointer",
    "slug": "copy-list-with-random-pointer",
    "description": "A linked list of length `n` is given such that each node contains an additional random pointer, which could point to any node in the list, or `null`. Construct a **deep copy** of the list.\n\n### Example 1:\n```\nInput: [[7,null],[13,0],[11,4],[10,2],[1,0]]\nOutput: [[7, null], [13, 0], [11, 4], [10, 2], [1, 0]]\nExplanation: Deep copied list with intact random pointers.\n```\n\n### Example 2:\n```\nInput: [[1,1],[2,1]]\nOutput: [[1, 1], [2, 1]]\nExplanation: Random pointers cloned.\n```",
    "difficulty": "MEDIUM",
    "category": "DSA",
    "patterns": [
      "Linked List",
      "Hash Table"
    ],
    "topics": [
      "Linked List",
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
        "boilerplate": "def copyListWithRandomPointer(*args):\n    # TODO: Implement solution for Copy List with Random Pointer\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = copyListWithRandomPointer(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(copyListWithRandomPointer(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function copyListWithRandomPointer(...args) {\n    // TODO: Implement solution for Copy List with Random Pointer\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(copyListWithRandomPointer(...parsed)));\n    } catch (e) {\n        console.log(copyListWithRandomPointer(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Copy List with Random Pointer\n        // TODO: Read input from cin and implement solution\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        // TODO: Read from br and implement solution\n    }\n}\n"
      }
    ],
    "sampleTestCases": [
      {
        "input": "[[7,null],[13,0],[11,4],[10,2],[1,0]]",
        "output": "[[7, null], [13, 0], [11, 4], [10, 2], [1, 0]]",
        "explanation": "Deep copied list with intact random pointers."
      },
      {
        "input": "[[1,1],[2,1]]",
        "output": "[[1, 1], [2, 1]]",
        "explanation": "Random pointers cloned."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "[[7,null],[13,0],[11,4],[10,2],[1,0]]",
        "output": "[[7, null], [13, 0], [11, 4], [10, 2], [1, 0]]",
        "isHidden": true
      },
      {
        "input": "[]",
        "output": "[]",
        "isHidden": true
      }
    ],
    "hints": [
      "Interweave cloned nodes between original nodes: A -> A' -> B -> B', assign randoms, then unweave."
    ],
    "editorial": {
      "approach": "Optimal Approach for Copy List with Random Pointer",
      "solutionMarkdown": "### Optimal Solution\n\nO(1) auxiliary space interweaving technique or Hash Map mapping original to clone.\n\n### Complexity\n- Time: O(N), Space: O(1)",
      "timeComplexity": "O(N)",
      "spaceComplexity": "O(1)"
    },
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0
  },
  {
    "title": "Count Connected Components / Detect Cycles",
    "slug": "count-components-detect-cycles",
    "description": "You have a graph of `n` nodes labeled from `0` to `n - 1` and a list of undirected `edges`. Return an array `[num_components, has_cycle]` where `num_components` is the number of connected components and `has_cycle` is `true` if any cycle exists, `false` otherwise.\n\n### Example 1:\n```\nInput: 5\n[[0,1],[1,2],[3,4]]\nOutput: [2,false]\nExplanation: Two components: {0, 1, 2} and {3, 4}. No cycles.\n```\n\n### Example 2:\n```\nInput: 5\n[[0,1],[1,2],[2,0],[3,4]]\nOutput: [2,true]\nExplanation: Cycle 0-1-2-0 detected. Two components.\n```",
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
        "company": "Infosys",
        "yearReported": 2025,
        "verified": true,
        "frequencyCount": 42,
        "sourceNote": "Infosys Interview Question #78"
      }
    ],
    "supportedLanguages": [
      "python",
      "javascript",
      "cpp",
      "java"
    ],
    "starterCode": [
      {
        "language": "python",
        "boilerplate": "def countComponentsDetectCycles(*args):\n    # TODO: Implement solution for Count Connected Components / Detect Cycles\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = countComponentsDetectCycles(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(countComponentsDetectCycles(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function countComponentsDetectCycles(...args) {\n    // TODO: Implement solution for Count Connected Components / Detect Cycles\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(countComponentsDetectCycles(...parsed)));\n    } catch (e) {\n        console.log(countComponentsDetectCycles(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Count Connected Components / Detect Cycles\n        // TODO: Read input from cin and implement solution\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        // TODO: Read from br and implement solution\n    }\n}\n"
      }
    ],
    "sampleTestCases": [
      {
        "input": "5\n[[0,1],[1,2],[3,4]]",
        "output": "[2,false]",
        "explanation": "Two components: {0, 1, 2} and {3, 4}. No cycles."
      },
      {
        "input": "5\n[[0,1],[1,2],[2,0],[3,4]]",
        "output": "[2,true]",
        "explanation": "Cycle 0-1-2-0 detected. Two components."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "5\n[[0,1],[1,2],[3,4]]",
        "output": "[2,false]",
        "isHidden": true
      },
      {
        "input": "5\n[[0,1],[1,2],[2,0],[3,4]]",
        "output": "[2,true]",
        "isHidden": true
      },
      {
        "input": "3\n[]",
        "output": "[3,false]",
        "isHidden": true
      }
    ],
    "hints": [
      "Use Disjoint Set Union (DSU). When uniting u and v, if find(u) == find(v), a cycle is detected."
    ],
    "editorial": {
      "approach": "Optimal Approach for Count Connected Components / Detect Cycles",
      "solutionMarkdown": "### Optimal Solution\n\nDSU tracking component count initialized to n. Decrement on successful union. If edge connects already connected nodes, flag cycle.\n\n### Complexity\n- Time: O(V + E * alpha(V)), Space: O(V)",
      "timeComplexity": "O(V + E * alpha(V))",
      "spaceComplexity": "O(V)"
    },
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0
  },
  {
    "title": "Count Equal-Value Pairs with Distance at Most K",
    "slug": "count-equal-pairs-within-k-distance",
    "description": "Given an integer array `nums` and an integer `k`, count the number of pairs `(i, j)` such that `i < j`, `nums[i] == nums[j]`, and `j - i <= k`.\n\n### Example 1:\n```\nInput: [1,2,3,1,1,3]\n3\nOutput: 3\nExplanation: Valid pairs: (0, 3) dist 3, (3, 4) dist 1, (2, 5) dist 3. Total = 3.\n```\n\n### Example 2:\n```\nInput: [1,0,1,1]\n1\nOutput: 1\nExplanation: Pair (2, 3) has distance 1 <= 1.\n```",
    "difficulty": "MEDIUM",
    "category": "DSA",
    "patterns": [
      "Array",
      "Hash Table",
      "Sliding Window"
    ],
    "topics": [
      "Array",
      "Hash Table",
      "Sliding Window"
    ],
    "companyTags": [
      {
        "company": "Infosys",
        "yearReported": 2025,
        "verified": true,
        "frequencyCount": 42,
        "sourceNote": "Infosys Interview Question #14"
      }
    ],
    "supportedLanguages": [
      "python",
      "javascript",
      "cpp",
      "java"
    ],
    "starterCode": [
      {
        "language": "python",
        "boilerplate": "def countEqualPairsWithinKDistance(*args):\n    # TODO: Implement solution for Count Equal-Value Pairs with Distance at Most K\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = countEqualPairsWithinKDistance(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(countEqualPairsWithinKDistance(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function countEqualPairsWithinKDistance(...args) {\n    // TODO: Implement solution for Count Equal-Value Pairs with Distance at Most K\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(countEqualPairsWithinKDistance(...parsed)));\n    } catch (e) {\n        console.log(countEqualPairsWithinKDistance(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Count Equal-Value Pairs with Distance at Most K\n        // TODO: Read input from cin and implement solution\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        // TODO: Read from br and implement solution\n    }\n}\n"
      }
    ],
    "sampleTestCases": [
      {
        "input": "[1,2,3,1,1,3]\n3",
        "output": "3",
        "explanation": "Valid pairs: (0, 3) dist 3, (3, 4) dist 1, (2, 5) dist 3. Total = 3."
      },
      {
        "input": "[1,0,1,1]\n1",
        "output": "1",
        "explanation": "Pair (2, 3) has distance 1 <= 1."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "[1,2,3,1,1,3]\n3",
        "output": "3",
        "isHidden": true
      },
      {
        "input": "[1,0,1,1]\n1",
        "output": "1",
        "isHidden": true
      },
      {
        "input": "[1,2,3,4,5]\n2",
        "output": "0",
        "isHidden": true
      }
    ],
    "hints": [
      "Maintain a frequency map of elements in a sliding window of size k."
    ],
    "editorial": {
      "approach": "Optimal Approach for Count Equal-Value Pairs with Distance at Most K",
      "solutionMarkdown": "### Optimal Solution\n\nSliding window of size k with frequency map. At step j, add count[nums[j]] to total, increment count, and remove element leaving window j-k.\n\n### Complexity\n- Time: O(N), Space: O(min(N, K))",
      "timeComplexity": "O(N)",
      "spaceComplexity": "O(min(N"
    },
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0
  },
  {
    "title": "Count Integers in Intervals",
    "slug": "count-integers-in-intervals",
    "description": "Given an empty set of intervals, implement a data structure that can add new intervals and count the number of unique integers present in at least one interval.\n\n### Example 1:\n```\nInput: [\"CountIntervals\",\"add\",\"add\",\"count\",\"add\",\"count\"]\n[[],[2,3],[7,10],[],[5,8],[]]\nOutput: [null, null, null, 6, null, 8]\nExplanation: 2-3 (2), 7-10 (4) = 6. 5-8 merges into 5-10, total 2 + 6 = 8.\n```\n\n### Example 2:\n```\nInput: [\"CountIntervals\",\"add\",\"count\"]\n[[],[1,5],[]]\nOutput: [null, null, 5]\nExplanation: 5 integers.\n```",
    "difficulty": "HARD",
    "category": "DSA",
    "patterns": [
      "Intervals",
      "Segment Tree",
      "Design"
    ],
    "topics": [
      "Intervals",
      "Segment Tree",
      "Design"
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
        "boilerplate": "def countIntegersInIntervals(*args):\n    # TODO: Implement solution for Count Integers in Intervals\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = countIntegersInIntervals(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(countIntegersInIntervals(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function countIntegersInIntervals(...args) {\n    // TODO: Implement solution for Count Integers in Intervals\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(countIntegersInIntervals(...parsed)));\n    } catch (e) {\n        console.log(countIntegersInIntervals(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Count Integers in Intervals\n        // TODO: Read input from cin and implement solution\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        // TODO: Read from br and implement solution\n    }\n}\n"
      }
    ],
    "sampleTestCases": [
      {
        "input": "[\"CountIntervals\",\"add\",\"add\",\"count\",\"add\",\"count\"]\n[[],[2,3],[7,10],[],[5,8],[]]",
        "output": "[null, null, null, 6, null, 8]",
        "explanation": "2-3 (2), 7-10 (4) = 6. 5-8 merges into 5-10, total 2 + 6 = 8."
      },
      {
        "input": "[\"CountIntervals\",\"add\",\"count\"]\n[[],[1,5],[]]",
        "output": "[null, null, 5]",
        "explanation": "5 integers."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "[\"CountIntervals\",\"add\",\"add\",\"count\",\"add\",\"count\"]\n[[],[2,3],[7,10],[],[5,8],[]]",
        "output": "[null, null, null, 6, null, 8]",
        "isHidden": true
      }
    ],
    "hints": [
      "Use an ordered map (TreeMap / std::map) to merge overlapping intervals dynamically and track count."
    ],
    "editorial": {
      "approach": "Optimal Approach for Count Integers in Intervals",
      "solutionMarkdown": "### Optimal Solution\n\nMaintain disjoint intervals in ordered map. On add, delete overlapped intervals and insert merged interval.\n\n### Complexity\n- Time: add O(log N) amortized, count O(1), Space: O(N)",
      "timeComplexity": "add O(log N) amortized",
      "spaceComplexity": "count O(1)"
    },
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0
  },
  {
    "title": "Count Primes",
    "slug": "count-primes",
    "description": "Given an integer `n`, return *the number of prime numbers that are strictly less than* `n`.\n\n### Example 1:\n```\nInput: 10\nOutput: 4\nExplanation: There are 4 prime numbers less than 10, they are 2, 3, 5, 7.\n```\n\n### Example 2:\n```\nInput: 0\nOutput: 0\nExplanation: No primes less than 0.\n```",
    "difficulty": "MEDIUM",
    "category": "DSA",
    "patterns": [
      "Array",
      "Math",
      "Number Theory"
    ],
    "topics": [
      "Array",
      "Math",
      "Number Theory"
    ],
    "companyTags": [
      {
        "company": "Accenture",
        "yearReported": 2025,
        "verified": false,
        "frequencyCount": 25,
        "sourceNote": "Accenture Practice Bank #76"
      }
    ],
    "supportedLanguages": [
      "python",
      "javascript",
      "cpp",
      "java"
    ],
    "starterCode": [
      {
        "language": "python",
        "boilerplate": "def countPrimes(*args):\n    # TODO: Implement solution for Count Primes\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = countPrimes(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(countPrimes(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function countPrimes(...args) {\n    // TODO: Implement solution for Count Primes\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(countPrimes(...parsed)));\n    } catch (e) {\n        console.log(countPrimes(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Count Primes\n        // TODO: Read input from cin and implement solution\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        // TODO: Read from br and implement solution\n    }\n}\n"
      }
    ],
    "sampleTestCases": [
      {
        "input": "10",
        "output": "4",
        "explanation": "There are 4 prime numbers less than 10, they are 2, 3, 5, 7."
      },
      {
        "input": "0",
        "output": "0",
        "explanation": "No primes less than 0."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "10",
        "output": "4",
        "isHidden": true
      },
      {
        "input": "0",
        "output": "0",
        "isHidden": true
      },
      {
        "input": "1",
        "output": "0",
        "isHidden": true
      },
      {
        "input": "100",
        "output": "25",
        "isHidden": true
      }
    ],
    "hints": [
      "Use the Sieve of Eratosthenes algorithm."
    ],
    "editorial": {
      "approach": "Optimal Approach for Count Primes",
      "solutionMarkdown": "### Optimal Solution\n\nCreate boolean array of size n. Mark multiples of each prime starting from p*p up to n as composite.\n\n### Complexity\n- Time: O(N log log N), Space: O(N)",
      "timeComplexity": "O(N log log N)",
      "spaceComplexity": "O(N)"
    },
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0
  },
  {
    "title": "Count special paths in an N-ary tree (equal endpoint values; path values bounded by endpoint)",
    "slug": "count-special-paths-in-an-n-ary-tree",
    "description": "Given an N-ary tree where each node has a value, count the number of special simple paths between two nodes such that both endpoint nodes have the same value, and all intermediate nodes on the path have value <= endpoint value.\n\n### Example 1:\n```\nInput: [1,3,2,1,3]\n[[0,1],[0,2],[2,3],[2,4]]\nOutput: 2\nExplanation: Path 0-3 (endpoints value 1) and path 1-4 (endpoints value 3).\n```\n\n### Example 2:\n```\nInput: [1,1,1]\n[[0,1],[1,2]]\nOutput: 3\nExplanation: All pairs (0,1), (1,2), (0,2) valid.\n```",
    "difficulty": "HARD",
    "category": "DSA",
    "patterns": [
      "Tree",
      "DFS / BFS",
      "Divide and Conquer"
    ],
    "topics": [
      "Tree",
      "DFS / BFS",
      "Divide and Conquer"
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
        "boilerplate": "def countSpecialPathsInAnNAryTree(*args):\n    # TODO: Implement solution for Count special paths in an N-ary tree (equal endpoint values; path values bounded by endpoint)\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = countSpecialPathsInAnNAryTree(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(countSpecialPathsInAnNAryTree(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function countSpecialPathsInAnNAryTree(...args) {\n    // TODO: Implement solution for Count special paths in an N-ary tree (equal endpoint values; path values bounded by endpoint)\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(countSpecialPathsInAnNAryTree(...parsed)));\n    } catch (e) {\n        console.log(countSpecialPathsInAnNAryTree(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Count special paths in an N-ary tree (equal endpoint values; path values bounded by endpoint)\n        // TODO: Read input from cin and implement solution\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        // TODO: Read from br and implement solution\n    }\n}\n"
      }
    ],
    "sampleTestCases": [
      {
        "input": "[1,3,2,1,3]\n[[0,1],[0,2],[2,3],[2,4]]",
        "output": "2",
        "explanation": "Path 0-3 (endpoints value 1) and path 1-4 (endpoints value 3)."
      },
      {
        "input": "[1,1,1]\n[[0,1],[1,2]]",
        "output": "3",
        "explanation": "All pairs (0,1), (1,2), (0,2) valid."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "[1,3,2,1,3]\n[[0,1],[0,2],[2,3],[2,4]]",
        "output": "2",
        "isHidden": true
      },
      {
        "input": "[1,1,1]\n[[0,1],[1,2]]",
        "output": "3",
        "isHidden": true
      }
    ],
    "hints": [
      "Process nodes in increasing order of node value using DSU or tree traversal."
    ],
    "editorial": {
      "approach": "Optimal Approach for Count special paths in an N-ary tree (equal endpoint values; path values bounded by endpoint)",
      "solutionMarkdown": "### Optimal Solution\n\nSort nodes by value. Activate edges connected to smaller nodes; count components with matching values using DSU.\n\n### Complexity\n- Time: O(N log N), Space: O(N)",
      "timeComplexity": "O(N log N)",
      "spaceComplexity": "O(N)"
    },
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0
  },
  {
    "title": "Course Schedule",
    "slug": "course-schedule",
    "description": "There are a total of `numCourses` courses you have to take, labeled from `0` to `numCourses - 1`. You are given an array `prerequisites` where `prerequisites[i] = [ai, bi]`.\n\nReturn `true` if you can finish all courses. Otherwise, return `false`.\n\n### Example 1:\n```\nInput: 2\n[[1,0]]\nOutput: true\nExplanation: You can finish courses in order [0, 1].\n```\n\n### Example 2:\n```\nInput: 2\n[[1,0],[0,1]]\nOutput: false\nExplanation: Cyclic prerequisite dependency.\n```",
    "difficulty": "MEDIUM",
    "category": "DSA",
    "patterns": [
      "Topological Sort",
      "Graph",
      "Cycle Detection"
    ],
    "topics": [
      "Topological Sort",
      "Graph",
      "Cycle Detection"
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
        "sourceNote": "Infosys Interview Question #69"
      },
      {
        "company": "TCS",
        "yearReported": 2025,
        "verified": false,
        "frequencyCount": 30,
        "sourceNote": "TCS Practice Bank #73"
      }
    ],
    "supportedLanguages": [
      "python",
      "javascript",
      "cpp",
      "java"
    ],
    "starterCode": [
      {
        "language": "python",
        "boilerplate": "def courseSchedule(*args):\n    # TODO: Implement solution for Course Schedule\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = courseSchedule(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(courseSchedule(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function courseSchedule(...args) {\n    // TODO: Implement solution for Course Schedule\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(courseSchedule(...parsed)));\n    } catch (e) {\n        console.log(courseSchedule(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Course Schedule\n        // TODO: Read input from cin and implement solution\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        // TODO: Read from br and implement solution\n    }\n}\n"
      }
    ],
    "sampleTestCases": [
      {
        "input": "2\n[[1,0]]",
        "output": "true",
        "explanation": "You can finish courses in order [0, 1]."
      },
      {
        "input": "2\n[[1,0],[0,1]]",
        "output": "false",
        "explanation": "Cyclic prerequisite dependency."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "2\n[[1,0]]",
        "output": "true",
        "isHidden": true
      },
      {
        "input": "2\n[[1,0],[0,1]]",
        "output": "false",
        "isHidden": true
      },
      {
        "input": "3\n[[0,1],[1,2]]",
        "output": "true",
        "isHidden": true
      }
    ],
    "hints": [
      "Check if the directed graph contains a cycle using Kahn's algorithm or 3-color DFS."
    ],
    "editorial": {
      "approach": "Optimal Approach for Course Schedule",
      "solutionMarkdown": "### Optimal Solution\n\nDetect cycles in directed graph using BFS indegrees or DFS with recursion state.\n\n### Complexity\n- Time: O(V + E), Space: O(V + E)",
      "timeComplexity": "O(V + E)",
      "spaceComplexity": "O(V + E)"
    },
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0
  },
  {
    "title": "Course Schedule II",
    "slug": "course-schedule-ii",
    "description": "There are a total of `numCourses` courses you have to take, labeled from `0` to `numCourses - 1`. You are given an array `prerequisites` where `prerequisites[i] = [ai, bi]` indicates that you must take course `bi` first if you want to take course `ai`.\n\nReturn *the ordering of courses you should take to finish all courses*. If it is impossible to finish all courses, return **an empty array**.\n\n### Example 1:\n```\nInput: 2\n[[1,0]]\nOutput: [0, 1]\nExplanation: To take course 1 you should take course 0 first.\n```\n\n### Example 2:\n```\nInput: 4\n[[1,0],[2,0],[3,1],[3,2]]\nOutput: [0, 1, 2, 3]\nExplanation: Course 0 must be taken first, then 1 and 2, then 3.\n```",
    "difficulty": "MEDIUM",
    "category": "DSA",
    "patterns": [
      "Topological Sort",
      "Graph",
      "BFS / DFS"
    ],
    "topics": [
      "Topological Sort",
      "Graph",
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
        "company": "Infosys",
        "yearReported": 2025,
        "verified": true,
        "frequencyCount": 42,
        "sourceNote": "Infosys Interview Question #70"
      }
    ],
    "supportedLanguages": [
      "python",
      "javascript",
      "cpp",
      "java"
    ],
    "starterCode": [
      {
        "language": "python",
        "boilerplate": "def courseScheduleIi(*args):\n    # TODO: Implement solution for Course Schedule II\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = courseScheduleIi(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(courseScheduleIi(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function courseScheduleIi(...args) {\n    // TODO: Implement solution for Course Schedule II\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(courseScheduleIi(...parsed)));\n    } catch (e) {\n        console.log(courseScheduleIi(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Course Schedule II\n        // TODO: Read input from cin and implement solution\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        // TODO: Read from br and implement solution\n    }\n}\n"
      }
    ],
    "sampleTestCases": [
      {
        "input": "2\n[[1,0]]",
        "output": "[0, 1]",
        "explanation": "To take course 1 you should take course 0 first."
      },
      {
        "input": "4\n[[1,0],[2,0],[3,1],[3,2]]",
        "output": "[0, 1, 2, 3]",
        "explanation": "Course 0 must be taken first, then 1 and 2, then 3."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "2\n[[1,0]]",
        "output": "[0, 1]",
        "isHidden": true
      },
      {
        "input": "4\n[[1,0],[2,0],[3,1],[3,2]]",
        "output": "[0, 1, 2, 3]",
        "isHidden": true
      },
      {
        "input": "1\n[]",
        "output": "[0]",
        "isHidden": true
      },
      {
        "input": "2\n[[0,1],[1,0]]",
        "output": "[]",
        "isHidden": true
      }
    ],
    "hints": [
      "Use Kahn's Algorithm with indegree array and BFS queue."
    ],
    "editorial": {
      "approach": "Optimal Approach for Course Schedule II",
      "solutionMarkdown": "### Optimal Solution\n\nKahn's BFS topological sort. Add 0 indegree nodes to queue and decrement neighbors.\n\n### Complexity\n- Time: O(V + E), Space: O(V + E)",
      "timeComplexity": "O(V + E)",
      "spaceComplexity": "O(V + E)"
    },
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0
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
        "sourceNote": "Accenture Practice Bank #50"
      },
      {
        "company": "Infosys",
        "yearReported": 2025,
        "verified": true,
        "frequencyCount": 42,
        "sourceNote": "Infosys Interview Question #47"
      },
      {
        "company": "TCS",
        "yearReported": 2025,
        "verified": false,
        "frequencyCount": 30,
        "sourceNote": "TCS Practice Bank #44"
      }
    ],
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
        "boilerplate": "function dailyTemperatures(...args) {\n    // TODO: Implement solution for Daily Temperatures\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(dailyTemperatures(...parsed)));\n    } catch (e) {\n        console.log(dailyTemperatures(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Daily Temperatures\n        // TODO: Read input from cin and implement solution\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        // TODO: Read from br and implement solution\n    }\n}\n"
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
        "output": "[1, 1, 4, 2, 1, 1, 0, 0]",
        "isHidden": true
      },
      {
        "input": "[30,40,50,60]",
        "output": "[1, 1, 1, 0]",
        "isHidden": true
      },
      {
        "input": "[30,60,90]",
        "output": "[1, 1, 0]",
        "isHidden": true
      }
    ],
    "hints": [
      "Monotonic Decreasing Stack storing day indices."
    ],
    "editorial": {
      "approach": "Optimal Approach for Daily Temperatures",
      "solutionMarkdown": "### Optimal Solution\n\nMaintain indices of unresolved cooler days on stack. Pop when warmer day is encountered.\n\n### Complexity\n- Time: O(N), Space: O(N)",
      "timeComplexity": "O(N)",
      "spaceComplexity": "O(N)"
    },
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0
  },
  {
    "title": "Decode String",
    "slug": "decode-string",
    "description": "Given an encoded string, return its decoded string. The encoding rule is: `k[encoded_string]`, where the `encoded_string` inside the square brackets is being repeated exactly `k` times.\n\n### Example 1:\n```\nInput: 3[a]2[bc]\nOutput: \"aaabcbc\"\nExplanation: Decoded string.\n```\n\n### Example 2:\n```\nInput: 3[a2[c]]\nOutput: \"accaccacc\"\nExplanation: Nested brackets decoded from inside out.\n```",
    "difficulty": "MEDIUM",
    "category": "DSA",
    "patterns": [
      "Stack",
      "String",
      "Recursion"
    ],
    "topics": [
      "Stack",
      "String",
      "Recursion"
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
        "company": "TCS",
        "yearReported": 2025,
        "verified": false,
        "frequencyCount": 30,
        "sourceNote": "TCS Practice Bank #41"
      }
    ],
    "supportedLanguages": [
      "python",
      "javascript",
      "cpp",
      "java"
    ],
    "starterCode": [
      {
        "language": "python",
        "boilerplate": "def decodeString(*args):\n    # TODO: Implement solution for Decode String\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = decodeString(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(decodeString(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function decodeString(...args) {\n    // TODO: Implement solution for Decode String\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(decodeString(...parsed)));\n    } catch (e) {\n        console.log(decodeString(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Decode String\n        // TODO: Read input from cin and implement solution\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        // TODO: Read from br and implement solution\n    }\n}\n"
      }
    ],
    "sampleTestCases": [
      {
        "input": "3[a]2[bc]",
        "output": "\"aaabcbc\"",
        "explanation": "Decoded string."
      },
      {
        "input": "3[a2[c]]",
        "output": "\"accaccacc\"",
        "explanation": "Nested brackets decoded from inside out."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "3[a]2[bc]",
        "output": "\"aaabcbc\"",
        "isHidden": true
      },
      {
        "input": "3[a2[c]]",
        "output": "\"accaccacc\"",
        "isHidden": true
      },
      {
        "input": "2[abc]3[cd]ef",
        "output": "\"abcabccdcdcdef\"",
        "isHidden": true
      }
    ],
    "hints": [
      "Use two stacks: one for repeat count k, one for accumulated string."
    ],
    "editorial": {
      "approach": "Optimal Approach for Decode String",
      "solutionMarkdown": "### Optimal Solution\n\nOn '[', push curr_str and curr_num to stack. On ']', pop num and prev_str, update curr_str = prev_str + num * curr_str.\n\n### Complexity\n- Time: O(Output Length), Space: O(N)",
      "timeComplexity": "O(Output Length)",
      "spaceComplexity": "O(N)"
    },
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0
  },
  {
    "title": "Decode Ways",
    "slug": "decode-ways",
    "description": "A message containing letters from `A-Z` can be encoded into numbers using the mapping `'A' -> \"1\" ... 'Z' -> \"26\"`. Given a string `s` containing only digits, return *the number of ways to decode it*.\n\n### Example 1:\n```\nInput: 12\nOutput: 2\nExplanation: '12' could be decoded as 'AB' (1 2) or 'L' (12).\n```\n\n### Example 2:\n```\nInput: 226\nOutput: 3\nExplanation: 'BZ' (2 26), 'VF' (22 6), or 'BBF' (2 2 6).\n```",
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
        "verified": true,
        "frequencyCount": 40,
        "sourceNote": "Accenture Interview Question #32 (R [S12; S13])"
      },
      {
        "company": "Infosys",
        "yearReported": 2025,
        "verified": true,
        "frequencyCount": 42,
        "sourceNote": "Infosys Interview Question #95"
      },
      {
        "company": "TCS",
        "yearReported": 2025,
        "verified": false,
        "frequencyCount": 30,
        "sourceNote": "TCS Practice Bank #85"
      }
    ],
    "supportedLanguages": [
      "python",
      "javascript",
      "cpp",
      "java"
    ],
    "starterCode": [
      {
        "language": "python",
        "boilerplate": "def decodeWays(*args):\n    # TODO: Implement solution for Decode Ways\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = decodeWays(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(decodeWays(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function decodeWays(...args) {\n    // TODO: Implement solution for Decode Ways\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(decodeWays(...parsed)));\n    } catch (e) {\n        console.log(decodeWays(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Decode Ways\n        // TODO: Read input from cin and implement solution\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        // TODO: Read from br and implement solution\n    }\n}\n"
      }
    ],
    "sampleTestCases": [
      {
        "input": "12",
        "output": "2",
        "explanation": "'12' could be decoded as 'AB' (1 2) or 'L' (12)."
      },
      {
        "input": "226",
        "output": "3",
        "explanation": "'BZ' (2 26), 'VF' (22 6), or 'BBF' (2 2 6)."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "12",
        "output": "2",
        "isHidden": true
      },
      {
        "input": "226",
        "output": "3",
        "isHidden": true
      },
      {
        "input": "06",
        "output": "0",
        "isHidden": true
      }
    ],
    "hints": [
      "Check 1-digit code (1-9) and 2-digit code (10-26)."
    ],
    "editorial": {
      "approach": "Optimal Approach for Decode Ways",
      "solutionMarkdown": "### Optimal Solution\n\n1D DP with two states tracking valid single and double digit transitions.\n\n### Complexity\n- Time: O(N), Space: O(1)",
      "timeComplexity": "O(N)",
      "spaceComplexity": "O(1)"
    },
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0
  },
  {
    "title": "Delete a Node in a Binary Search Tree",
    "slug": "delete-node-in-a-bst",
    "description": "Given a root node reference of a BST and a `key`, delete the node with the given key in the BST. Return *the root node reference (possibly updated) of the BST*.\n\n### Example 1:\n```\nInput: [5,3,6,2,4,null,7]\n3\nOutput: [5,4,6,2,null,null,7]\nExplanation: Node 3 deleted and replaced with its inorder successor 4.\n```\n\n### Example 2:\n```\nInput: [5,3,6,2,4,null,7]\n0\nOutput: [5,3,6,2,4,null,7]\nExplanation: Key 0 does not exist in BST.\n```",
    "difficulty": "MEDIUM",
    "category": "DSA",
    "patterns": [
      "Tree",
      "Binary Search Tree",
      "Binary Tree"
    ],
    "topics": [
      "Tree",
      "Binary Search Tree",
      "Binary Tree"
    ],
    "companyTags": [
      {
        "company": "TCS",
        "yearReported": 2025,
        "verified": true,
        "frequencyCount": 45,
        "sourceNote": "TCS Interview Question #67"
      }
    ],
    "supportedLanguages": [
      "python",
      "javascript",
      "cpp",
      "java"
    ],
    "starterCode": [
      {
        "language": "python",
        "boilerplate": "def deleteNodeInABst(*args):\n    # TODO: Implement solution for Delete a Node in a Binary Search Tree\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = deleteNodeInABst(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(deleteNodeInABst(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function deleteNodeInABst(...args) {\n    // TODO: Implement solution for Delete a Node in a Binary Search Tree\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(deleteNodeInABst(...parsed)));\n    } catch (e) {\n        console.log(deleteNodeInABst(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Delete a Node in a Binary Search Tree\n        // TODO: Read input from cin and implement solution\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        // TODO: Read from br and implement solution\n    }\n}\n"
      }
    ],
    "sampleTestCases": [
      {
        "input": "[5,3,6,2,4,null,7]\n3",
        "output": "[5,4,6,2,null,null,7]",
        "explanation": "Node 3 deleted and replaced with its inorder successor 4."
      },
      {
        "input": "[5,3,6,2,4,null,7]\n0",
        "output": "[5,3,6,2,4,null,7]",
        "explanation": "Key 0 does not exist in BST."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "[5,3,6,2,4,null,7]\n3",
        "output": "[5,4,6,2,null,null,7]",
        "isHidden": true
      },
      {
        "input": "[5,3,6,2,4,null,7]\n0",
        "output": "[5,3,6,2,4,null,7]",
        "isHidden": true
      },
      {
        "input": "[]\n0",
        "output": "[]",
        "isHidden": true
      }
    ],
    "hints": [
      "If node has 0 or 1 child, return the non-null child. If 2 children, replace value with inorder successor and delete successor."
    ],
    "editorial": {
      "approach": "Optimal Approach for Delete a Node in a Binary Search Tree",
      "solutionMarkdown": "### Optimal Solution\n\nRecursive BST deletion. Navigate left or right. When found: 0 children return null, 1 child return child, 2 children find min in right subtree.\n\n### Complexity\n- Time: O(H), Space: O(H)",
      "timeComplexity": "O(H)",
      "spaceComplexity": "O(H)"
    },
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0
  },
  {
    "title": "Implement a Circular Queue",
    "slug": "design-circular-queue",
    "description": "Design your implementation of the circular queue. A circular queue is a linear data structure in which the operations are performed based on FIFO principle and the last position is connected back to the first position to make a circle.\n\n### Example 1:\n```\nInput: [\"MyCircularQueue\",\"enQueue\",\"enQueue\",\"enQueue\",\"enQueue\",\"Rear\",\"isFull\",\"deQueue\",\"enQueue\",\"Rear\"]\n[[3],[1],[2],[3],[4],[],[],[],[4],[]]\nOutput: [null,true,true,true,false,3,true,true,true,4]\nExplanation: Circular queue operations with capacity 3.\n```\n\n### Example 2:\n```\nInput: [\"MyCircularQueue\",\"Front\",\"isEmpty\"]\n[[5],[],[]]\nOutput: [null,-1,true]\nExplanation: Empty queue.\n```",
    "difficulty": "MEDIUM",
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
        "company": "TCS",
        "yearReported": 2025,
        "verified": true,
        "frequencyCount": 45,
        "sourceNote": "TCS Interview Question #58"
      }
    ],
    "supportedLanguages": [
      "python",
      "javascript",
      "cpp",
      "java"
    ],
    "starterCode": [
      {
        "language": "python",
        "boilerplate": "def designCircularQueue(*args):\n    # TODO: Implement solution for Implement a Circular Queue\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = designCircularQueue(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(designCircularQueue(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function designCircularQueue(...args) {\n    // TODO: Implement solution for Implement a Circular Queue\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(designCircularQueue(...parsed)));\n    } catch (e) {\n        console.log(designCircularQueue(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Implement a Circular Queue\n        // TODO: Read input from cin and implement solution\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        // TODO: Read from br and implement solution\n    }\n}\n"
      }
    ],
    "sampleTestCases": [
      {
        "input": "[\"MyCircularQueue\",\"enQueue\",\"enQueue\",\"enQueue\",\"enQueue\",\"Rear\",\"isFull\",\"deQueue\",\"enQueue\",\"Rear\"]\n[[3],[1],[2],[3],[4],[],[],[],[4],[]]",
        "output": "[null,true,true,true,false,3,true,true,true,4]",
        "explanation": "Circular queue operations with capacity 3."
      },
      {
        "input": "[\"MyCircularQueue\",\"Front\",\"isEmpty\"]\n[[5],[],[]]",
        "output": "[null,-1,true]",
        "explanation": "Empty queue."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "[\"MyCircularQueue\",\"enQueue\",\"enQueue\",\"enQueue\",\"enQueue\",\"Rear\",\"isFull\",\"deQueue\",\"enQueue\",\"Rear\"]\n[[3],[1],[2],[3],[4],[],[],[],[4],[]]",
        "output": "[null,true,true,true,false,3,true,true,true,4]",
        "isHidden": true
      },
      {
        "input": "[\"MyCircularQueue\",\"Front\",\"isEmpty\"]\n[[5],[],[]]",
        "output": "[null,-1,true]",
        "isHidden": true
      }
    ],
    "hints": [
      "Use fixed size array with head, tail, and size counters. Advance pointers using modulo."
    ],
    "editorial": {
      "approach": "Optimal Approach for Implement a Circular Queue",
      "solutionMarkdown": "### Optimal Solution\n\nMaintain head pointer and count. enQueue writes at (head + count) % capacity. deQueue advances head = (head + 1) % capacity.\n\n### Complexity\n- Time: O(1) per operation, Space: O(K)",
      "timeComplexity": "O(1) per operation",
      "spaceComplexity": "O(K)"
    },
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0
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
        "boilerplate": "def designHitCounter(*args):\n    # TODO: Implement solution for Design Hit Counter\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = designHitCounter(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(designHitCounter(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function designHitCounter(...args) {\n    // TODO: Implement solution for Design Hit Counter\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(designHitCounter(...parsed)));\n    } catch (e) {\n        console.log(designHitCounter(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Design Hit Counter\n        // TODO: Read input from cin and implement solution\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        // TODO: Read from br and implement solution\n    }\n}\n"
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
        "output": "[null, null, null, null, 3, null, 4, 3]",
        "isHidden": true
      }
    ],
    "hints": [
      "Use a queue to store timestamps and evict timestamps <= timestamp - 300, or use circular array of size 300."
    ],
    "editorial": {
      "approach": "Optimal Approach for Design Hit Counter",
      "solutionMarkdown": "### Optimal Solution\n\nMaintain queue or 300-bucket circular buffer with timestamps and counts.\n\n### Complexity\n- Time: O(1) amortized, Space: O(1) fixed size 300",
      "timeComplexity": "O(1) amortized",
      "spaceComplexity": "O(1) fixed size 300"
    },
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0
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
        "boilerplate": "def designTwitter(*args):\n    # TODO: Implement solution for Design Twitter\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = designTwitter(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(designTwitter(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function designTwitter(...args) {\n    // TODO: Implement solution for Design Twitter\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(designTwitter(...parsed)));\n    } catch (e) {\n        console.log(designTwitter(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Design Twitter\n        // TODO: Read input from cin and implement solution\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        // TODO: Read from br and implement solution\n    }\n}\n"
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
        "output": "[null, null, [5], null, null, [6, 5], null, [5]]",
        "isHidden": true
      }
    ],
    "hints": [
      "Map user to set of followees and list of tweets with timestamp. Use a Max-Heap to merge the top 10 tweets across all followees."
    ],
    "editorial": {
      "approach": "Optimal Approach for Design Twitter",
      "solutionMarkdown": "### Optimal Solution\n\nK-way merge of tweets from user's followees using a Priority Queue.\n\n### Complexity\n- Time: postTweet O(1), follow O(1), getNewsFeed O(F log F), Space: O(U + T)",
      "timeComplexity": "postTweet O(1)",
      "spaceComplexity": "follow O(1)"
    },
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0
  },
  {
    "title": "Determine the Colour of a Chessboard Square",
    "slug": "determine-color-of-a-chessboard-square",
    "description": "You are given `coordinates`, a string that represents the coordinates of a square of the chessboard (e.g. `'a1'`, `'h8'`). Return `true` if the square is **white**, and `false` if the square is **black**.\n\n### Example 1:\n```\nInput: \"a1\"\nOutput: false\nExplanation: Square 'a1' is black.\n```\n\n### Example 2:\n```\nInput: \"h3\"\nOutput: true\nExplanation: Square 'h3' is white.\n```",
    "difficulty": "EASY",
    "category": "DSA",
    "patterns": [
      "Math",
      "String"
    ],
    "topics": [
      "Math",
      "String"
    ],
    "companyTags": [
      {
        "company": "TCS",
        "yearReported": 2025,
        "verified": true,
        "frequencyCount": 45,
        "sourceNote": "TCS Interview Question #11"
      }
    ],
    "supportedLanguages": [
      "python",
      "javascript",
      "cpp",
      "java"
    ],
    "starterCode": [
      {
        "language": "python",
        "boilerplate": "def determineColorOfAChessboardSquare(*args):\n    # TODO: Implement solution for Determine the Colour of a Chessboard Square\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = determineColorOfAChessboardSquare(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(determineColorOfAChessboardSquare(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function determineColorOfAChessboardSquare(...args) {\n    // TODO: Implement solution for Determine the Colour of a Chessboard Square\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(determineColorOfAChessboardSquare(...parsed)));\n    } catch (e) {\n        console.log(determineColorOfAChessboardSquare(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Determine the Colour of a Chessboard Square\n        // TODO: Read input from cin and implement solution\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        // TODO: Read from br and implement solution\n    }\n}\n"
      }
    ],
    "sampleTestCases": [
      {
        "input": "\"a1\"",
        "output": "false",
        "explanation": "Square 'a1' is black."
      },
      {
        "input": "\"h3\"",
        "output": "true",
        "explanation": "Square 'h3' is white."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "\"a1\"",
        "output": "false",
        "isHidden": true
      },
      {
        "input": "\"h3\"",
        "output": "true",
        "isHidden": true
      },
      {
        "input": "\"c7\"",
        "output": "false",
        "isHidden": true
      }
    ],
    "hints": [
      "Convert column char 'a'-'h' to 1-8. Parity of col + row determines color."
    ],
    "editorial": {
      "approach": "Optimal Approach for Determine the Colour of a Chessboard Square",
      "solutionMarkdown": "### Optimal Solution\n\ncol = ord(coordinates[0]) - ord('a') + 1, row = int(coordinates[1]). Return (col + row) % 2 != 0.\n\n### Complexity\n- Time: O(1), Space: O(1)",
      "timeComplexity": "O(1)",
      "spaceComplexity": "O(1)"
    },
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0
  },
  {
    "title": "Diameter of Binary Tree",
    "slug": "diameter-of-binary-tree",
    "description": "Given the `root` of a binary tree, return *the length of the **diameter** of the tree*.\n\nThe diameter of a binary tree is the length of the longest path between any two nodes in a tree.\n\n### Example 1:\n```\nInput: [1,2,3,4,5]\nOutput: 3\nExplanation: Path 4 -> 2 -> 1 -> 3 or 5 -> 2 -> 1 -> 3 has length 3.\n```\n\n### Example 2:\n```\nInput: [1,2]\nOutput: 1\nExplanation: Path length 1.\n```",
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
      },
      {
        "company": "Infosys",
        "yearReported": 2025,
        "verified": true,
        "frequencyCount": 42,
        "sourceNote": "Infosys Interview Question #63"
      },
      {
        "company": "TCS",
        "yearReported": 2025,
        "verified": true,
        "frequencyCount": 45,
        "sourceNote": "TCS Interview Question #62"
      }
    ],
    "supportedLanguages": [
      "python",
      "javascript",
      "cpp",
      "java"
    ],
    "starterCode": [
      {
        "language": "python",
        "boilerplate": "def diameterOfBinaryTree(*args):\n    # TODO: Implement solution for Diameter of Binary Tree\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = diameterOfBinaryTree(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(diameterOfBinaryTree(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function diameterOfBinaryTree(...args) {\n    // TODO: Implement solution for Diameter of Binary Tree\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(diameterOfBinaryTree(...parsed)));\n    } catch (e) {\n        console.log(diameterOfBinaryTree(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Diameter of Binary Tree\n        // TODO: Read input from cin and implement solution\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        // TODO: Read from br and implement solution\n    }\n}\n"
      }
    ],
    "sampleTestCases": [
      {
        "input": "[1,2,3,4,5]",
        "output": "3",
        "explanation": "Path 4 -> 2 -> 1 -> 3 or 5 -> 2 -> 1 -> 3 has length 3."
      },
      {
        "input": "[1,2]",
        "output": "1",
        "explanation": "Path length 1."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "[1,2,3,4,5]",
        "output": "3",
        "isHidden": true
      },
      {
        "input": "[1,2]",
        "output": "1",
        "isHidden": true
      }
    ],
    "hints": [
      "At each node, compute height of left and right subtrees. Diameter through node is left_height + right_height."
    ],
    "editorial": {
      "approach": "Optimal Approach for Diameter of Binary Tree",
      "solutionMarkdown": "### Optimal Solution\n\nGlobal max diameter tracker updated with left_depth + right_depth at every DFS node.\n\n### Complexity\n- Time: O(N), Space: O(H)",
      "timeComplexity": "O(N)",
      "spaceComplexity": "O(H)"
    },
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0
  },
  {
    "title": "Digit-string partition into K substrings (each starts even, ends odd; length >= M)",
    "slug": "digit-string-partition-into-k-substrings",
    "description": "Given a digit string `s`, integers `k` and `m`, determine the number of ways to partition `s` into `k` non-empty substrings such that each substring has length at least `m`, starts with an even digit, and ends with an odd digit. Return answer modulo 10^9 + 7.\n\n### Example 1:\n```\nInput: 235421\n2\n2\nOutput: 1\nExplanation: Valid partition: ['23', '421'].\n```\n\n### Example 2:\n```\nInput: 21\n1\n2\nOutput: 1\nExplanation: '21' starts with even (2), ends with odd (1), length 2.\n```",
    "difficulty": "HARD",
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
        "boilerplate": "def digitStringPartitionIntoKSubstrings(*args):\n    # TODO: Implement solution for Digit-string partition into K substrings (each starts even, ends odd; length >= M)\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = digitStringPartitionIntoKSubstrings(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(digitStringPartitionIntoKSubstrings(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function digitStringPartitionIntoKSubstrings(...args) {\n    // TODO: Implement solution for Digit-string partition into K substrings (each starts even, ends odd; length >= M)\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(digitStringPartitionIntoKSubstrings(...parsed)));\n    } catch (e) {\n        console.log(digitStringPartitionIntoKSubstrings(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Digit-string partition into K substrings (each starts even, ends odd; length >= M)\n        // TODO: Read input from cin and implement solution\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        // TODO: Read from br and implement solution\n    }\n}\n"
      }
    ],
    "sampleTestCases": [
      {
        "input": "235421\n2\n2",
        "output": "1",
        "explanation": "Valid partition: ['23', '421']."
      },
      {
        "input": "21\n1\n2",
        "output": "1",
        "explanation": "'21' starts with even (2), ends with odd (1), length 2."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "235421\n2\n2",
        "output": "1",
        "isHidden": true
      },
      {
        "input": "21\n1\n2",
        "output": "1",
        "isHidden": true
      }
    ],
    "hints": [
      "2D DP with prefix sum optimization: dp[k][i] = sum(dp[k-1][j]) for valid j <= i - m."
    ],
    "editorial": {
      "approach": "Optimal Approach for Digit-string partition into K substrings (each starts even, ends odd; length >= M)",
      "solutionMarkdown": "### Optimal Solution\n\nDP state tracking partition count. Prefix sums of DP table optimize transition from O(N^2) to O(N).\n\n### Complexity\n- Time: O(K * N), Space: O(K * N)",
      "timeComplexity": "O(K * N)",
      "spaceComplexity": "O(K * N)"
    },
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0
  },
  {
    "title": "Dijkstra on a Grid (candidate-reported variant)",
    "slug": "dijkstra-on-a-grid",
    "description": "Given an `m x n` grid of non-negative integers where `grid[i][j]` represents the cost to move into cell `(i, j)`, find the minimum cost to travel from top-left `(0, 0)` to bottom-right `(m-1, n-1)` moving in 4 cardinal directions.\n\n### Example 1:\n```\nInput: [[1,3,1],[1,5,1],[4,2,1]]\nOutput: 7\nExplanation: Shortest cost path is 1 -> 3 -> 1 -> 1 -> 1 = 7.\n```\n\n### Example 2:\n```\nInput: [[1,2],[3,4]]\nOutput: 7\nExplanation: Path 1 -> 2 -> 4 = 7.\n```",
    "difficulty": "MEDIUM",
    "category": "DSA",
    "patterns": [
      "Dijkstra",
      "Grid",
      "Heaps / Priority Queue"
    ],
    "topics": [
      "Dijkstra",
      "Grid",
      "Heaps / Priority Queue"
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
        "boilerplate": "def dijkstraOnAGrid(*args):\n    # TODO: Implement solution for Dijkstra on a Grid (candidate-reported variant)\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = dijkstraOnAGrid(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(dijkstraOnAGrid(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function dijkstraOnAGrid(...args) {\n    // TODO: Implement solution for Dijkstra on a Grid (candidate-reported variant)\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(dijkstraOnAGrid(...parsed)));\n    } catch (e) {\n        console.log(dijkstraOnAGrid(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Dijkstra on a Grid (candidate-reported variant)\n        // TODO: Read input from cin and implement solution\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
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
        "explanation": "Shortest cost path is 1 -> 3 -> 1 -> 1 -> 1 = 7."
      },
      {
        "input": "[[1,2],[3,4]]",
        "output": "7",
        "explanation": "Path 1 -> 2 -> 4 = 7."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "[[1,3,1],[1,5,1],[4,2,1]]",
        "output": "7",
        "isHidden": true
      },
      {
        "input": "[[1,2],[3,4]]",
        "output": "7",
        "isHidden": true
      }
    ],
    "hints": [
      "Standard Dijkstra using Min-Heap with (cost, r, c)."
    ],
    "editorial": {
      "approach": "Optimal Approach for Dijkstra on a Grid (candidate-reported variant)",
      "solutionMarkdown": "### Optimal Solution\n\nPriority queue Dijkstra relaxing distances to 4 neighbors.\n\n### Complexity\n- Time: O(M * N log(M * N)), Space: O(M * N)",
      "timeComplexity": "O(M * N log(M * N))",
      "spaceComplexity": "O(M * N)"
    },
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0
  },
  {
    "title": "Dijkstra Shortest Path",
    "slug": "dijkstra-shortest-path",
    "description": "Given a weighted directed graph of `n` vertices labeled from `0` to `n - 1` and a `src` vertex, return an array of the shortest distances from `src` to all other vertices. If a vertex is unreachable, return `-1`.\n\n### Example 1:\n```\nInput: 4\n[[0,1,1],[0,2,4],[1,2,2],[1,3,6],[2,3,3]]\n0\nOutput: [0,1,3,6]\nExplanation: Shortest paths from 0: 0->0=0, 0->1=1, 0->1->2=3, 0->1->2->3=6.\n```\n\n### Example 2:\n```\nInput: 3\n[[0,1,5]]\n0\nOutput: [0,5,-1]\nExplanation: Node 2 is unreachable.\n```",
    "difficulty": "MEDIUM",
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
        "company": "Infosys",
        "yearReported": 2025,
        "verified": true,
        "frequencyCount": 42,
        "sourceNote": "Infosys Interview Question #81"
      }
    ],
    "supportedLanguages": [
      "python",
      "javascript",
      "cpp",
      "java"
    ],
    "starterCode": [
      {
        "language": "python",
        "boilerplate": "def dijkstraShortestPath(*args):\n    # TODO: Implement solution for Dijkstra Shortest Path\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = dijkstraShortestPath(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(dijkstraShortestPath(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function dijkstraShortestPath(...args) {\n    // TODO: Implement solution for Dijkstra Shortest Path\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(dijkstraShortestPath(...parsed)));\n    } catch (e) {\n        console.log(dijkstraShortestPath(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Dijkstra Shortest Path\n        // TODO: Read input from cin and implement solution\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        // TODO: Read from br and implement solution\n    }\n}\n"
      }
    ],
    "sampleTestCases": [
      {
        "input": "4\n[[0,1,1],[0,2,4],[1,2,2],[1,3,6],[2,3,3]]\n0",
        "output": "[0,1,3,6]",
        "explanation": "Shortest paths from 0: 0->0=0, 0->1=1, 0->1->2=3, 0->1->2->3=6."
      },
      {
        "input": "3\n[[0,1,5]]\n0",
        "output": "[0,5,-1]",
        "explanation": "Node 2 is unreachable."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "4\n[[0,1,1],[0,2,4],[1,2,2],[1,3,6],[2,3,3]]\n0",
        "output": "[0,1,3,6]",
        "isHidden": true
      },
      {
        "input": "3\n[[0,1,5]]\n0",
        "output": "[0,5,-1]",
        "isHidden": true
      },
      {
        "input": "1\n[]\n0",
        "output": "[0]",
        "isHidden": true
      }
    ],
    "hints": [
      "Use a min-heap priority queue storing (distance, vertex) pairs."
    ],
    "editorial": {
      "approach": "Optimal Approach for Dijkstra Shortest Path",
      "solutionMarkdown": "### Optimal Solution\n\nDijkstra's algorithm: maintain dist array initialized to infinity. Pop min distance vertex, relax outgoing edges, push to heap.\n\n### Complexity\n- Time: O((V + E) log V), Space: O(V + E)",
      "timeComplexity": "O((V + E) log V)",
      "spaceComplexity": "O(V + E)"
    },
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0
  },
  {
    "title": "Edit Distance",
    "slug": "edit-distance",
    "description": "Given two strings `word1` and `word2`, return *the minimum number of operations required to convert `word1` to `word2`* (insert, delete, or replace a character).\n\n### Example 1:\n```\nInput: horse\nros\nOutput: 3\nExplanation: horse -> rorse -> rose -> ros.\n```\n\n### Example 2:\n```\nInput: intention\nexecution\nOutput: 5\nExplanation: 5 operations needed.\n```",
    "difficulty": "HARD",
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
        "sourceNote": "Infosys Interview Question #89"
      },
      {
        "company": "TCS",
        "yearReported": 2025,
        "verified": false,
        "frequencyCount": 30,
        "sourceNote": "TCS Practice Bank #84"
      }
    ],
    "supportedLanguages": [
      "python",
      "javascript",
      "cpp",
      "java"
    ],
    "starterCode": [
      {
        "language": "python",
        "boilerplate": "def editDistance(*args):\n    # TODO: Implement solution for Edit Distance\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = editDistance(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(editDistance(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function editDistance(...args) {\n    // TODO: Implement solution for Edit Distance\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(editDistance(...parsed)));\n    } catch (e) {\n        console.log(editDistance(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Edit Distance\n        // TODO: Read input from cin and implement solution\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        // TODO: Read from br and implement solution\n    }\n}\n"
      }
    ],
    "sampleTestCases": [
      {
        "input": "horse\nros",
        "output": "3",
        "explanation": "horse -> rorse -> rose -> ros."
      },
      {
        "input": "intention\nexecution",
        "output": "5",
        "explanation": "5 operations needed."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "horse\nros",
        "output": "3",
        "isHidden": true
      },
      {
        "input": "intention\nexecution",
        "output": "5",
        "isHidden": true
      },
      {
        "input": "\na",
        "output": "1",
        "isHidden": true
      }
    ],
    "hints": [
      "Levenshtein distance: dp[i][j] = 1 + min(insert, delete, replace)."
    ],
    "editorial": {
      "approach": "Optimal Approach for Edit Distance",
      "solutionMarkdown": "### Optimal Solution\n\nStandard Levenshtein matrix: dp[i][j] = dp[i-1][j-1] if match else 1 + min(dp[i-1][j], dp[i][j-1], dp[i-1][j-1]).\n\n### Complexity\n- Time: O(M * N), Space: O(min(M, N))",
      "timeComplexity": "O(M * N)",
      "spaceComplexity": "O(min(M"
    },
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0
  },
  {
    "title": "Evaluate Reverse Polish Notation",
    "slug": "evaluate-reverse-polish-notation",
    "description": "You are given an array of strings `tokens` that represents an arithmetic expression in a Reverse Polish Notation. Evaluate the expression and return an integer.\n\n### Example 1:\n```\nInput: [\"2\",\"1\",\"+\",\"3\",\"*\"]\nOutput: 9\nExplanation: ((2 + 1) * 3) = 9.\n```\n\n### Example 2:\n```\nInput: [\"4\",\"13\",\"5\",\"/\",\"+\"]\nOutput: 6\nExplanation: (4 + (13 / 5)) = 6.\n```",
    "difficulty": "MEDIUM",
    "category": "DSA",
    "patterns": [
      "Stack",
      "Array",
      "Math"
    ],
    "topics": [
      "Stack",
      "Array",
      "Math"
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
        "company": "Accenture",
        "yearReported": 2025,
        "verified": false,
        "frequencyCount": 25,
        "sourceNote": "Accenture Practice Bank #51"
      }
    ],
    "supportedLanguages": [
      "python",
      "javascript",
      "cpp",
      "java"
    ],
    "starterCode": [
      {
        "language": "python",
        "boilerplate": "def evaluateReversePolishNotation(*args):\n    # TODO: Implement solution for Evaluate Reverse Polish Notation\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = evaluateReversePolishNotation(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(evaluateReversePolishNotation(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function evaluateReversePolishNotation(...args) {\n    // TODO: Implement solution for Evaluate Reverse Polish Notation\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(evaluateReversePolishNotation(...parsed)));\n    } catch (e) {\n        console.log(evaluateReversePolishNotation(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Evaluate Reverse Polish Notation\n        // TODO: Read input from cin and implement solution\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        // TODO: Read from br and implement solution\n    }\n}\n"
      }
    ],
    "sampleTestCases": [
      {
        "input": "[\"2\",\"1\",\"+\",\"3\",\"*\"]",
        "output": "9",
        "explanation": "((2 + 1) * 3) = 9."
      },
      {
        "input": "[\"4\",\"13\",\"5\",\"/\",\"+\"]",
        "output": "6",
        "explanation": "(4 + (13 / 5)) = 6."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "[\"2\",\"1\",\"+\",\"3\",\"*\"]",
        "output": "9",
        "isHidden": true
      },
      {
        "input": "[\"4\",\"13\",\"5\",\"/\",\"+\"]",
        "output": "6",
        "isHidden": true
      },
      {
        "input": "[\"10\",\"6\",\"9\",\"3\",\"+\",\"-11\",\"*\",\"/\",\"*\",\"17\",\"+\",\"5\",\"+\"]",
        "output": "22",
        "isHidden": true
      }
    ],
    "hints": [
      "Use a stack. If token is number, push; if operator, pop two operands, compute, and push back."
    ],
    "editorial": {
      "approach": "Optimal Approach for Evaluate Reverse Polish Notation",
      "solutionMarkdown": "### Optimal Solution\n\nStack evaluation. Note integer division toward zero: int(b / a).\n\n### Complexity\n- Time: O(N), Space: O(N)",
      "timeComplexity": "O(N)",
      "spaceComplexity": "O(N)"
    },
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0
  },
  {
    "title": "Factorial Trailing Zeroes",
    "slug": "factorial-trailing-zeroes",
    "description": "Given an integer `n`, return *the number of trailing zeroes in `n!`*.\n\n### Example 1:\n```\nInput: 3\nOutput: 0\nExplanation: 3! = 6, no trailing zero.\n```\n\n### Example 2:\n```\nInput: 5\nOutput: 1\nExplanation: 5! = 120, one trailing zero.\n```",
    "difficulty": "MEDIUM",
    "category": "DSA",
    "patterns": [
      "Math"
    ],
    "topics": [
      "Math"
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
        "sourceNote": "Accenture Practice Bank #78"
      }
    ],
    "supportedLanguages": [
      "python",
      "javascript",
      "cpp",
      "java"
    ],
    "starterCode": [
      {
        "language": "python",
        "boilerplate": "def factorialTrailingZeroes(*args):\n    # TODO: Implement solution for Factorial Trailing Zeroes\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = factorialTrailingZeroes(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(factorialTrailingZeroes(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function factorialTrailingZeroes(...args) {\n    // TODO: Implement solution for Factorial Trailing Zeroes\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(factorialTrailingZeroes(...parsed)));\n    } catch (e) {\n        console.log(factorialTrailingZeroes(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Factorial Trailing Zeroes\n        // TODO: Read input from cin and implement solution\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        // TODO: Read from br and implement solution\n    }\n}\n"
      }
    ],
    "sampleTestCases": [
      {
        "input": "3",
        "output": "0",
        "explanation": "3! = 6, no trailing zero."
      },
      {
        "input": "5",
        "output": "1",
        "explanation": "5! = 120, one trailing zero."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "3",
        "output": "0",
        "isHidden": true
      },
      {
        "input": "5",
        "output": "1",
        "isHidden": true
      },
      {
        "input": "0",
        "output": "0",
        "isHidden": true
      },
      {
        "input": "25",
        "output": "6",
        "isHidden": true
      }
    ],
    "hints": [
      "Count factors of 5 in n! (5, 25, 125...)."
    ],
    "editorial": {
      "approach": "Optimal Approach for Factorial Trailing Zeroes",
      "solutionMarkdown": "### Optimal Solution\n\nLegendre's formula: count = sum(n // 5^k) for k >= 1.\n\n### Complexity\n- Time: O(log5(N)), Space: O(1)",
      "timeComplexity": "O(log5(N))",
      "spaceComplexity": "O(1)"
    },
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0
  },
  {
    "title": "Fenwick Tree - Prefix Sum and Point Update",
    "slug": "fenwick-tree-prefix-sum-and-point-update",
    "description": "Implement a **Binary Indexed Tree (Fenwick Tree)** supporting `update(index, delta)` to add `delta` to an element, and `query(index)` to compute the prefix sum from `1` to `index` in `O(log N)` time.\n\n### Example 1:\n```\nInput: [\"FenwickTree\",\"update\",\"query\",\"update\",\"query\"]\n[[5],[1,3],[1],[3,2],[4]]\nOutput: [null,null,3,null,5]\nExplanation: update(1, 3) makes prefix sum at 1 = 3. update(3, 2) makes prefix sum at 4 = 3 + 2 = 5.\n```\n\n### Example 2:\n```\nInput: [\"FenwickTree\",\"query\"]\n[[10],[5]]\nOutput: [null,0]\nExplanation: Empty tree returns 0 prefix sum.\n```",
    "difficulty": "HARD",
    "category": "DSA",
    "patterns": [
      "Binary Indexed Tree",
      "Design",
      "Array"
    ],
    "topics": [
      "Binary Indexed Tree",
      "Design",
      "Array"
    ],
    "companyTags": [
      {
        "company": "Infosys",
        "yearReported": 2025,
        "verified": false,
        "frequencyCount": 28,
        "sourceNote": "Infosys Practice Bank #80"
      },
      {
        "company": "TCS",
        "yearReported": 2025,
        "verified": false,
        "frequencyCount": 30,
        "sourceNote": "TCS Practice Bank #100"
      }
    ],
    "supportedLanguages": [
      "python",
      "javascript",
      "cpp",
      "java"
    ],
    "starterCode": [
      {
        "language": "python",
        "boilerplate": "def fenwickTreePrefixSumAndPointUpdate(*args):\n    # TODO: Implement solution for Fenwick Tree - Prefix Sum and Point Update\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = fenwickTreePrefixSumAndPointUpdate(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(fenwickTreePrefixSumAndPointUpdate(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function fenwickTreePrefixSumAndPointUpdate(...args) {\n    // TODO: Implement solution for Fenwick Tree - Prefix Sum and Point Update\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(fenwickTreePrefixSumAndPointUpdate(...parsed)));\n    } catch (e) {\n        console.log(fenwickTreePrefixSumAndPointUpdate(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Fenwick Tree - Prefix Sum and Point Update\n        // TODO: Read input from cin and implement solution\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        // TODO: Read from br and implement solution\n    }\n}\n"
      }
    ],
    "sampleTestCases": [
      {
        "input": "[\"FenwickTree\",\"update\",\"query\",\"update\",\"query\"]\n[[5],[1,3],[1],[3,2],[4]]",
        "output": "[null,null,3,null,5]",
        "explanation": "update(1, 3) makes prefix sum at 1 = 3. update(3, 2) makes prefix sum at 4 = 3 + 2 = 5."
      },
      {
        "input": "[\"FenwickTree\",\"query\"]\n[[10],[5]]",
        "output": "[null,0]",
        "explanation": "Empty tree returns 0 prefix sum."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "[\"FenwickTree\",\"update\",\"query\",\"update\",\"query\"]\n[[5],[1,3],[1],[3,2],[4]]",
        "output": "[null,null,3,null,5]",
        "isHidden": true
      },
      {
        "input": "[\"FenwickTree\",\"query\"]\n[[10],[5]]",
        "output": "[null,0]",
        "isHidden": true
      }
    ],
    "hints": [
      "Use index & (-index) for bitwise traversal of tree nodes."
    ],
    "editorial": {
      "approach": "Optimal Approach for Fenwick Tree - Prefix Sum and Point Update",
      "solutionMarkdown": "### Optimal Solution\n\nUpdate: add delta and advance i += i & (-i). Query: sum value and backtrack i -= i & (-i).\n\n### Complexity\n- Time: O(log N) per query/update, Space: O(N)",
      "timeComplexity": "O(log N) per query/update",
      "spaceComplexity": "O(N)"
    },
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0
  },
  {
    "title": "Fibonacci Number",
    "slug": "fibonacci-number",
    "description": "The **Fibonacci numbers** commonly denoted `F(n)` form a sequence such that each number is the sum of the two preceding ones, starting from `0` and `1`. Given `n`, calculate `F(n)`.\n\n### Example 1:\n```\nInput: 2\nOutput: 1\nExplanation: F(2) = F(1) + F(0) = 1 + 0 = 1.\n```\n\n### Example 2:\n```\nInput: 4\nOutput: 3\nExplanation: F(4) = F(3) + F(2) = 2 + 1 = 3.\n```",
    "difficulty": "EASY",
    "category": "DSA",
    "patterns": [
      "Math",
      "Dynamic Programming",
      "Recursion",
      "Memoization"
    ],
    "topics": [
      "Math",
      "Dynamic Programming",
      "Recursion",
      "Memoization"
    ],
    "companyTags": [
      {
        "company": "TCS",
        "yearReported": 2025,
        "verified": false,
        "frequencyCount": 30,
        "sourceNote": "TCS Practice Bank #4"
      }
    ],
    "supportedLanguages": [
      "python",
      "javascript",
      "cpp",
      "java"
    ],
    "starterCode": [
      {
        "language": "python",
        "boilerplate": "def fibonacciNumber(*args):\n    # TODO: Implement solution for Fibonacci Number\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = fibonacciNumber(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(fibonacciNumber(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function fibonacciNumber(...args) {\n    // TODO: Implement solution for Fibonacci Number\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(fibonacciNumber(...parsed)));\n    } catch (e) {\n        console.log(fibonacciNumber(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Fibonacci Number\n        // TODO: Read input from cin and implement solution\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        // TODO: Read from br and implement solution\n    }\n}\n"
      }
    ],
    "sampleTestCases": [
      {
        "input": "2",
        "output": "1",
        "explanation": "F(2) = F(1) + F(0) = 1 + 0 = 1."
      },
      {
        "input": "4",
        "output": "3",
        "explanation": "F(4) = F(3) + F(2) = 2 + 1 = 3."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "2",
        "output": "1",
        "isHidden": true
      },
      {
        "input": "4",
        "output": "3",
        "isHidden": true
      },
      {
        "input": "0",
        "output": "0",
        "isHidden": true
      },
      {
        "input": "10",
        "output": "55",
        "isHidden": true
      }
    ],
    "hints": [
      "Maintain two variables a and b iteratively to use O(1) space."
    ],
    "editorial": {
      "approach": "Optimal Approach for Fibonacci Number",
      "solutionMarkdown": "### Optimal Solution\n\nIterative rolling calculation: a, b = 0, 1. For _ in range(n): a, b = b, a + b. Return a.\n\n### Complexity\n- Time: O(N), Space: O(1)",
      "timeComplexity": "O(N)",
      "spaceComplexity": "O(1)"
    },
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0
  },
  {
    "title": "Find a Path in Grid to Bottom-Right",
    "slug": "find-a-path-in-grid-to-bottom-right",
    "description": "Given an `m x n` binary grid where `0` represents an empty cell and `1` represents an obstacle, return *the path from top-left `(0, 0)` to bottom-right `(m-1, n-1)` as a list of coordinates*. If no path exists, return an empty list.\n\n### Example 1:\n```\nInput: [[0,0,0],[0,1,0],[0,0,0]]\nOutput: [[0, 0], [0, 1], [0, 2], [1, 2], [2, 2]]\nExplanation: Valid path avoiding obstacle.\n```\n\n### Example 2:\n```\nInput: [[0,1],[1,0]]\nOutput: []\nExplanation: Path blocked.\n```",
    "difficulty": "MEDIUM",
    "category": "DSA",
    "patterns": [
      "Grid",
      "BFS / DFS"
    ],
    "topics": [
      "Grid",
      "BFS / DFS"
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
        "boilerplate": "def findAPathInGridToBottomRight(*args):\n    # TODO: Implement solution for Find a Path in Grid to Bottom-Right\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = findAPathInGridToBottomRight(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(findAPathInGridToBottomRight(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function findAPathInGridToBottomRight(...args) {\n    // TODO: Implement solution for Find a Path in Grid to Bottom-Right\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(findAPathInGridToBottomRight(...parsed)));\n    } catch (e) {\n        console.log(findAPathInGridToBottomRight(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Find a Path in Grid to Bottom-Right\n        // TODO: Read input from cin and implement solution\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        // TODO: Read from br and implement solution\n    }\n}\n"
      }
    ],
    "sampleTestCases": [
      {
        "input": "[[0,0,0],[0,1,0],[0,0,0]]",
        "output": "[[0, 0], [0, 1], [0, 2], [1, 2], [2, 2]]",
        "explanation": "Valid path avoiding obstacle."
      },
      {
        "input": "[[0,1],[1,0]]",
        "output": "[]",
        "explanation": "Path blocked."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "[[0,0,0],[0,1,0],[0,0,0]]",
        "output": "[[0, 0], [0, 1], [0, 2], [1, 2], [2, 2]]",
        "isHidden": true
      },
      {
        "input": "[[0,1],[1,0]]",
        "output": "[]",
        "isHidden": true
      }
    ],
    "hints": [
      "Run BFS/DFS with parent tracking to reconstruct the path from destination back to start."
    ],
    "editorial": {
      "approach": "Optimal Approach for Find a Path in Grid to Bottom-Right",
      "solutionMarkdown": "### Optimal Solution\n\nBFS with parent dictionary mapping each visited cell to its predecessor.\n\n### Complexity\n- Time: O(M * N), Space: O(M * N)",
      "timeComplexity": "O(M * N)",
      "spaceComplexity": "O(M * N)"
    },
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0
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
        "sourceNote": "Accenture Practice Bank #33"
      },
      {
        "company": "Infosys",
        "yearReported": 2025,
        "verified": true,
        "frequencyCount": 42,
        "sourceNote": "Infosys Interview Question #28"
      }
    ],
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
        "boilerplate": "function findAllAnagramsInAString(...args) {\n    // TODO: Implement solution for Find All Anagrams in a String\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(findAllAnagramsInAString(...parsed)));\n    } catch (e) {\n        console.log(findAllAnagramsInAString(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Find All Anagrams in a String\n        // TODO: Read input from cin and implement solution\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        // TODO: Read from br and implement solution\n    }\n}\n"
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
        "output": "[0, 6]",
        "isHidden": true
      },
      {
        "input": "abab\nab",
        "output": "[0, 1, 2]",
        "isHidden": true
      }
    ],
    "hints": [
      "Sliding window of length len(p) tracking character matches."
    ],
    "editorial": {
      "approach": "Optimal Approach for Find All Anagrams in a String",
      "solutionMarkdown": "### Optimal Solution\n\nMaintain frequency map comparison over fixed window of size len(p).\n\n### Complexity\n- Time: O(N), Space: O(1)",
      "timeComplexity": "O(N)",
      "spaceComplexity": "O(1)"
    },
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0
  },
  {
    "title": "Find All Duplicates in an Array",
    "slug": "find-all-duplicates-in-an-array",
    "description": "Given an integer array `nums` of length `n` where all integers are in the range `[1, n]` and each integer appears **once** or **twice**, return an array of all integers that appear **twice** in `O(n)` time and `O(1)` auxiliary space.\n\n### Example 1:\n```\nInput: [4,3,2,7,8,2,3,1]\nOutput: [2, 3]\nExplanation: 2 and 3 appear twice.\n```\n\n### Example 2:\n```\nInput: [1,1,2]\nOutput: [1]\nExplanation: 1 appears twice.\n```",
    "difficulty": "MEDIUM",
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
        "boilerplate": "def findAllDuplicatesInAnArray(*args):\n    # TODO: Implement solution for Find All Duplicates in an Array\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = findAllDuplicatesInAnArray(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(findAllDuplicatesInAnArray(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function findAllDuplicatesInAnArray(...args) {\n    // TODO: Implement solution for Find All Duplicates in an Array\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(findAllDuplicatesInAnArray(...parsed)));\n    } catch (e) {\n        console.log(findAllDuplicatesInAnArray(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Find All Duplicates in an Array\n        // TODO: Read input from cin and implement solution\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        // TODO: Read from br and implement solution\n    }\n}\n"
      }
    ],
    "sampleTestCases": [
      {
        "input": "[4,3,2,7,8,2,3,1]",
        "output": "[2, 3]",
        "explanation": "2 and 3 appear twice."
      },
      {
        "input": "[1,1,2]",
        "output": "[1]",
        "explanation": "1 appears twice."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "[4,3,2,7,8,2,3,1]",
        "output": "[2, 3]",
        "isHidden": true
      },
      {
        "input": "[1,1,2]",
        "output": "[1]",
        "isHidden": true
      },
      {
        "input": "[1]",
        "output": "[]",
        "isHidden": true
      }
    ],
    "hints": [
      "Use the array itself as a hash table: negate nums[abs(x) - 1]. If already negative, x is duplicate."
    ],
    "editorial": {
      "approach": "Optimal Approach for Find All Duplicates in an Array",
      "solutionMarkdown": "### Optimal Solution\n\nIndex sign negation in-place: for x in nums, idx = abs(x) - 1; if nums[idx] < 0 duplicate else nums[idx] *= -1.\n\n### Complexity\n- Time: O(N), Space: O(1)",
      "timeComplexity": "O(N)",
      "spaceComplexity": "O(1)"
    },
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0
  }
];
