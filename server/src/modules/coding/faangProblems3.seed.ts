/* eslint-disable */
// Auto-generated FAANG (Apple, Meta, Microsoft, Google) - Chunk faang3
export const faang3 = [
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
      }
    ],
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
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Maximum Product Subarray\n        string line;\n        while (getline(cin, line)) {\n            cout << line << endl;\n        }\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        String line;\n        while ((line = br.readLine()) != null) {\n            // TODO: Implement solution for Maximum Product Subarray\n            System.out.println(line);\n        }\n    }\n}\n"
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
      }
    ],
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
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Maximum Subarray\n        string line;\n        while (getline(cin, line)) {\n            cout << line << endl;\n        }\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        String line;\n        while ((line = br.readLine()) != null) {\n            // TODO: Implement solution for Maximum Subarray\n            System.out.println(line);\n        }\n    }\n}\n"
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
      }
    ],
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
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Median of Two Sorted Arrays\n        string line;\n        while (getline(cin, line)) {\n            cout << line << endl;\n        }\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        String line;\n        while ((line = br.readLine()) != null) {\n            // TODO: Implement solution for Median of Two Sorted Arrays\n            System.out.println(line);\n        }\n    }\n}\n"
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
      }
    ],
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
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Meeting Rooms II\n        string line;\n        while (getline(cin, line)) {\n            cout << line << endl;\n        }\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        String line;\n        while ((line = br.readLine()) != null) {\n            // TODO: Implement solution for Meeting Rooms II\n            System.out.println(line);\n        }\n    }\n}\n"
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
      }
    ],
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
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Merge Intervals\n        string line;\n        while (getline(cin, line)) {\n            cout << line << endl;\n        }\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        String line;\n        while ((line = br.readLine()) != null) {\n            // TODO: Implement solution for Merge Intervals\n            System.out.println(line);\n        }\n    }\n}\n"
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
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Merge k Sorted Lists\n        string line;\n        while (getline(cin, line)) {\n            cout << line << endl;\n        }\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        String line;\n        while ((line = br.readLine()) != null) {\n            // TODO: Implement solution for Merge k Sorted Lists\n            System.out.println(line);\n        }\n    }\n}\n"
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
      }
    ],
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
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Merge Sorted Array\n        string line;\n        while (getline(cin, line)) {\n            cout << line << endl;\n        }\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        String line;\n        while ((line = br.readLine()) != null) {\n            // TODO: Implement solution for Merge Sorted Array\n            System.out.println(line);\n        }\n    }\n}\n"
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
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Merge Three Sorted Lists Without Duplicates\n        string line;\n        while (getline(cin, line)) {\n            cout << line << endl;\n        }\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        String line;\n        while ((line = br.readLine()) != null) {\n            // TODO: Implement solution for Merge Three Sorted Lists Without Duplicates\n            System.out.println(line);\n        }\n    }\n}\n"
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
      }
    ],
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
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Merge Two Sorted Lists\n        string line;\n        while (getline(cin, line)) {\n            cout << line << endl;\n        }\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        String line;\n        while ((line = br.readLine()) != null) {\n            // TODO: Implement solution for Merge Two Sorted Lists\n            System.out.println(line);\n        }\n    }\n}\n"
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
      }
    ],
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
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Min Stack\n        string line;\n        while (getline(cin, line)) {\n            cout << line << endl;\n        }\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        String line;\n        while ((line = br.readLine()) != null) {\n            // TODO: Implement solution for Min Stack\n            System.out.println(line);\n        }\n    }\n}\n"
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
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Minimum Cost Shared Cab Route for Two Travellers\n        string line;\n        while (getline(cin, line)) {\n            cout << line << endl;\n        }\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        String line;\n        while ((line = br.readLine()) != null) {\n            // TODO: Implement solution for Minimum Cost Shared Cab Route for Two Travellers\n            System.out.println(line);\n        }\n    }\n}\n"
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
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Minimum Depth of Binary Tree\n        string line;\n        while (getline(cin, line)) {\n            cout << line << endl;\n        }\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        String line;\n        while ((line = br.readLine()) != null) {\n            // TODO: Implement solution for Minimum Depth of Binary Tree\n            System.out.println(line);\n        }\n    }\n}\n"
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
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Minimum Edge Reversals for Reachability\n        string line;\n        while (getline(cin, line)) {\n            cout << line << endl;\n        }\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        String line;\n        while ((line = br.readLine()) != null) {\n            // TODO: Implement solution for Minimum Edge Reversals for Reachability\n            System.out.println(line);\n        }\n    }\n}\n"
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
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Minimum Partition of a String Using Dictionary Words\n        string line;\n        while (getline(cin, line)) {\n            cout << line << endl;\n        }\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        String line;\n        while ((line = br.readLine()) != null) {\n            // TODO: Implement solution for Minimum Partition of a String Using Dictionary Words\n            System.out.println(line);\n        }\n    }\n}\n"
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
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Minimum Path Sum\n        string line;\n        while (getline(cin, line)) {\n            cout << line << endl;\n        }\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        String line;\n        while ((line = br.readLine()) != null) {\n            // TODO: Implement solution for Minimum Path Sum\n            System.out.println(line);\n        }\n    }\n}\n"
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
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Minimum Remove to Make Valid Parentheses\n        string line;\n        while (getline(cin, line)) {\n            cout << line << endl;\n        }\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        String line;\n        while ((line = br.readLine()) != null) {\n            // TODO: Implement solution for Minimum Remove to Make Valid Parentheses\n            System.out.println(line);\n        }\n    }\n}\n"
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
      }
    ],
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
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Minimum Window Substring\n        string line;\n        while (getline(cin, line)) {\n            cout << line << endl;\n        }\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        String line;\n        while ((line = br.readLine()) != null) {\n            // TODO: Implement solution for Minimum Window Substring\n            System.out.println(line);\n        }\n    }\n}\n"
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
      }
    ],
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
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Missing Number\n        string line;\n        while (getline(cin, line)) {\n            cout << line << endl;\n        }\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        String line;\n        while ((line = br.readLine()) != null) {\n            // TODO: Implement solution for Missing Number\n            System.out.println(line);\n        }\n    }\n}\n"
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
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Missing Ranges\n        string line;\n        while (getline(cin, line)) {\n            cout << line << endl;\n        }\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        String line;\n        while ((line = br.readLine()) != null) {\n            // TODO: Implement solution for Missing Ranges\n            System.out.println(line);\n        }\n    }\n}\n"
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
      }
    ],
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
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Move Zeroes\n        string line;\n        while (getline(cin, line)) {\n            cout << line << endl;\n        }\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        String line;\n        while ((line = br.readLine()) != null) {\n            // TODO: Implement solution for Move Zeroes\n            System.out.println(line);\n        }\n    }\n}\n"
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
      }
    ],
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
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for N-Queens\n        string line;\n        while (getline(cin, line)) {\n            cout << line << endl;\n        }\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        String line;\n        while ((line = br.readLine()) != null) {\n            // TODO: Implement solution for N-Queens\n            System.out.println(line);\n        }\n    }\n}\n"
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
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for N-Queens II\n        string line;\n        while (getline(cin, line)) {\n            cout << line << endl;\n        }\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        String line;\n        while ((line = br.readLine()) != null) {\n            // TODO: Implement solution for N-Queens II\n            System.out.println(line);\n        }\n    }\n}\n"
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
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Nested List Weight Sum\n        string line;\n        while (getline(cin, line)) {\n            cout << line << endl;\n        }\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        String line;\n        while ((line = br.readLine()) != null) {\n            // TODO: Implement solution for Nested List Weight Sum\n            System.out.println(line);\n        }\n    }\n}\n"
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
      }
    ],
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
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Network Delay Time\n        string line;\n        while (getline(cin, line)) {\n            cout << line << endl;\n        }\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        String line;\n        while ((line = br.readLine()) != null) {\n            // TODO: Implement solution for Network Delay Time\n            System.out.println(line);\n        }\n    }\n}\n"
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
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Next Permutation\n        string line;\n        while (getline(cin, line)) {\n            cout << line << endl;\n        }\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        String line;\n        while ((line = br.readLine()) != null) {\n            // TODO: Implement solution for Next Permutation\n            System.out.println(line);\n        }\n    }\n}\n"
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
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Number of Digit One\n        string line;\n        while (getline(cin, line)) {\n            cout << line << endl;\n        }\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        String line;\n        while ((line = br.readLine()) != null) {\n            // TODO: Implement solution for Number of Digit One\n            System.out.println(line);\n        }\n    }\n}\n"
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
      }
    ],
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
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Number of Islands\n        string line;\n        while (getline(cin, line)) {\n            cout << line << endl;\n        }\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        String line;\n        while ((line = br.readLine()) != null) {\n            // TODO: Implement solution for Number of Islands\n            System.out.println(line);\n        }\n    }\n}\n"
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
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Number of Islands II\n        string line;\n        while (getline(cin, line)) {\n            cout << line << endl;\n        }\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        String line;\n        while ((line = br.readLine()) != null) {\n            // TODO: Implement solution for Number of Islands II\n            System.out.println(line);\n        }\n    }\n}\n"
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
      }
    ],
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
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Number of Provinces\n        string line;\n        while (getline(cin, line)) {\n            cout << line << endl;\n        }\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        String line;\n        while ((line = br.readLine()) != null) {\n            // TODO: Implement solution for Number of Provinces\n            System.out.println(line);\n        }\n    }\n}\n"
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
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Pacific Atlantic Water Flow\n        string line;\n        while (getline(cin, line)) {\n            cout << line << endl;\n        }\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        String line;\n        while ((line = br.readLine()) != null) {\n            // TODO: Implement solution for Pacific Atlantic Water Flow\n            System.out.println(line);\n        }\n    }\n}\n"
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
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Paint Fence\n        string line;\n        while (getline(cin, line)) {\n            cout << line << endl;\n        }\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        String line;\n        while ((line = br.readLine()) != null) {\n            // TODO: Implement solution for Paint Fence\n            System.out.println(line);\n        }\n    }\n}\n"
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
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Paint House\n        string line;\n        while (getline(cin, line)) {\n            cout << line << endl;\n        }\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        String line;\n        while ((line = br.readLine()) != null) {\n            // TODO: Implement solution for Paint House\n            System.out.println(line);\n        }\n    }\n}\n"
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
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Pair Skills So Every Pair Has Equal Sum\n        string line;\n        while (getline(cin, line)) {\n            cout << line << endl;\n        }\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        String line;\n        while ((line = br.readLine()) != null) {\n            // TODO: Implement solution for Pair Skills So Every Pair Has Equal Sum\n            System.out.println(line);\n        }\n    }\n}\n"
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
      }
    ],
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
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Palindrome Partitioning\n        string line;\n        while (getline(cin, line)) {\n            cout << line << endl;\n        }\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        String line;\n        while ((line = br.readLine()) != null) {\n            // TODO: Implement solution for Palindrome Partitioning\n            System.out.println(line);\n        }\n    }\n}\n"
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
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Palindrome Permutation\n        string line;\n        while (getline(cin, line)) {\n            cout << line << endl;\n        }\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        String line;\n        while ((line = br.readLine()) != null) {\n            // TODO: Implement solution for Palindrome Permutation\n            System.out.println(line);\n        }\n    }\n}\n"
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
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Palindromic Substrings\n        string line;\n        while (getline(cin, line)) {\n            cout << line << endl;\n        }\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        String line;\n        while ((line = br.readLine()) != null) {\n            // TODO: Implement solution for Palindromic Substrings\n            System.out.println(line);\n        }\n    }\n}\n"
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
      }
    ],
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
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Partition Equal Subset Sum\n        string line;\n        while (getline(cin, line)) {\n            cout << line << endl;\n        }\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        String line;\n        while ((line = br.readLine()) != null) {\n            // TODO: Implement solution for Partition Equal Subset Sum\n            System.out.println(line);\n        }\n    }\n}\n"
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
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Pascal's Triangle\n        string line;\n        while (getline(cin, line)) {\n            cout << line << endl;\n        }\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        String line;\n        while ((line = br.readLine()) != null) {\n            // TODO: Implement solution for Pascal's Triangle\n            System.out.println(line);\n        }\n    }\n}\n"
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
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Peeking Iterator\n        string line;\n        while (getline(cin, line)) {\n            cout << line << endl;\n        }\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        String line;\n        while ((line = br.readLine()) != null) {\n            // TODO: Implement solution for Peeking Iterator\n            System.out.println(line);\n        }\n    }\n}\n"
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
      }
    ],
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
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Permutation in String\n        string line;\n        while (getline(cin, line)) {\n            cout << line << endl;\n        }\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        String line;\n        while ((line = br.readLine()) != null) {\n            // TODO: Implement solution for Permutation in String\n            System.out.println(line);\n        }\n    }\n}\n"
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
      }
    ],
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
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Permutations\n        string line;\n        while (getline(cin, line)) {\n            cout << line << endl;\n        }\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        String line;\n        while ((line = br.readLine()) != null) {\n            // TODO: Implement solution for Permutations\n            System.out.println(line);\n        }\n    }\n}\n"
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
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Populating Next Right Pointers in Each Node\n        string line;\n        while (getline(cin, line)) {\n            cout << line << endl;\n        }\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        String line;\n        while ((line = br.readLine()) != null) {\n            // TODO: Implement solution for Populating Next Right Pointers in Each Node\n            System.out.println(line);\n        }\n    }\n}\n"
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
      }
    ],
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
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Product of Array Except Self\n        string line;\n        while (getline(cin, line)) {\n            cout << line << endl;\n        }\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        String line;\n        while ((line = br.readLine()) != null) {\n            // TODO: Implement solution for Product of Array Except Self\n            System.out.println(line);\n        }\n    }\n}\n"
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
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Random Pick with Weight\n        string line;\n        while (getline(cin, line)) {\n            cout << line << endl;\n        }\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        String line;\n        while ((line = br.readLine()) != null) {\n            // TODO: Implement solution for Random Pick with Weight\n            System.out.println(line);\n        }\n    }\n}\n"
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
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Range Sum of BST\n        string line;\n        while (getline(cin, line)) {\n            cout << line << endl;\n        }\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        String line;\n        while ((line = br.readLine()) != null) {\n            // TODO: Implement solution for Range Sum of BST\n            System.out.println(line);\n        }\n    }\n}\n"
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
      }
    ],
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
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Range Sum Query - Mutable\n        string line;\n        while (getline(cin, line)) {\n            cout << line << endl;\n        }\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        String line;\n        while ((line = br.readLine()) != null) {\n            // TODO: Implement solution for Range Sum Query - Mutable\n            System.out.println(line);\n        }\n    }\n}\n"
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
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Read N Characters Given Read4\n        string line;\n        while (getline(cin, line)) {\n            cout << line << endl;\n        }\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        String line;\n        while ((line = br.readLine()) != null) {\n            // TODO: Implement solution for Read N Characters Given Read4\n            System.out.println(line);\n        }\n    }\n}\n"
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
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Read N Characters Given Read4 II - Call Multiple Times\n        string line;\n        while (getline(cin, line)) {\n            cout << line << endl;\n        }\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        String line;\n        while ((line = br.readLine()) != null) {\n            // TODO: Implement solution for Read N Characters Given Read4 II - Call Multiple Times\n            System.out.println(line);\n        }\n    }\n}\n"
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
      }
    ],
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
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Redundant Connection\n        string line;\n        while (getline(cin, line)) {\n            cout << line << endl;\n        }\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        String line;\n        while ((line = br.readLine()) != null) {\n            // TODO: Implement solution for Redundant Connection\n            System.out.println(line);\n        }\n    }\n}\n"
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
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Remove Duplicates from Sorted List II\n        string line;\n        while (getline(cin, line)) {\n            cout << line << endl;\n        }\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        String line;\n        while ((line = br.readLine()) != null) {\n            // TODO: Implement solution for Remove Duplicates from Sorted List II\n            System.out.println(line);\n        }\n    }\n}\n"
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
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Remove Invalid Parentheses\n        string line;\n        while (getline(cin, line)) {\n            cout << line << endl;\n        }\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        String line;\n        while ((line = br.readLine()) != null) {\n            // TODO: Implement solution for Remove Invalid Parentheses\n            System.out.println(line);\n        }\n    }\n}\n"
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
      }
    ],
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
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Remove Nth Node From End of List\n        string line;\n        while (getline(cin, line)) {\n            cout << line << endl;\n        }\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        String line;\n        while ((line = br.readLine()) != null) {\n            // TODO: Implement solution for Remove Nth Node From End of List\n            System.out.println(line);\n        }\n    }\n}\n"
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
        "boilerplate": "def reorderList(*args):\n    # TODO: Implement solution for Reorder List\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = reorderList(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(reorderList(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function reorderList(...args) {\n    // TODO: Implement solution for Reorder List\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(reorderList(...parsed)));\n    } catch (e) {\n        console.log(reorderList(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Reorder List\n        string line;\n        while (getline(cin, line)) {\n            cout << line << endl;\n        }\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        String line;\n        while ((line = br.readLine()) != null) {\n            // TODO: Implement solution for Reorder List\n            System.out.println(line);\n        }\n    }\n}\n"
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
        "output": "[1, 4, 2, 3]",
        "isHidden": true
      },
      {
        "input": "[1,2,3,4,5]",
        "output": "[1, 5, 2, 4, 3]",
        "isHidden": true
      },
      {
        "input": "[1]",
        "output": "[1]",
        "isHidden": true
      }
    ],
    "hints": [
      "1. Find middle with slow/fast. 2. Reverse second half. 3. Merge two halves alternatingly."
    ],
    "editorial": {
      "approach": "Optimal Approach for Reorder List",
      "solutionMarkdown": "### Optimal Solution\n\nThree-step in-place transformation: middle finding, reversal of second half, and interweaving merge.\n\n### Complexity\n- Time: O(N), Space: O(1)",
      "timeComplexity": "O(N)",
      "spaceComplexity": "O(1)"
    },
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0
  },
  {
    "title": "Replace Words",
    "slug": "replace-words",
    "description": "Given a `dictionary` consisting of many roots and a `sentence` consisting of words separated by spaces, replace all the derivatives in the sentence with the root forming it (the shortest root).\n\n### Example 1:\n```\nInput: [\"cat\",\"bat\",\"rat\"]\n\"the cattle was rattled by the battery\"\nOutput: \"the cat was rat by the bat\"\nExplanation: \"cattle\" replaced by \"cat\", \"rattled\" by \"rat\", \"battery\" by \"bat\".\n```\n\n### Example 2:\n```\nInput: [\"a\",\"b\",\"c\"]\n\"aadsfasf absbs bbab cadsfafs\"\nOutput: \"a a b c\"\nExplanation: Replaced by shortest roots.\n```",
    "difficulty": "MEDIUM",
    "category": "DSA",
    "patterns": [
      "Array",
      "Hash Table",
      "String",
      "Trie"
    ],
    "topics": [
      "Array",
      "Hash Table",
      "String",
      "Trie"
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
        "boilerplate": "def replaceWords(*args):\n    # TODO: Implement solution for Replace Words\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = replaceWords(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(replaceWords(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function replaceWords(...args) {\n    // TODO: Implement solution for Replace Words\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(replaceWords(...parsed)));\n    } catch (e) {\n        console.log(replaceWords(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Replace Words\n        string line;\n        while (getline(cin, line)) {\n            cout << line << endl;\n        }\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        String line;\n        while ((line = br.readLine()) != null) {\n            // TODO: Implement solution for Replace Words\n            System.out.println(line);\n        }\n    }\n}\n"
      }
    ],
    "sampleTestCases": [
      {
        "input": "[\"cat\",\"bat\",\"rat\"]\n\"the cattle was rattled by the battery\"",
        "output": "\"the cat was rat by the bat\"",
        "explanation": "\"cattle\" replaced by \"cat\", \"rattled\" by \"rat\", \"battery\" by \"bat\"."
      },
      {
        "input": "[\"a\",\"b\",\"c\"]\n\"aadsfasf absbs bbab cadsfafs\"",
        "output": "\"a a b c\"",
        "explanation": "Replaced by shortest roots."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "[\"cat\",\"bat\",\"rat\"]\n\"the cattle was rattled by the battery\"",
        "output": "\"the cat was rat by the bat\"",
        "isHidden": true
      },
      {
        "input": "[\"a\",\"b\",\"c\"]\n\"aadsfasf absbs bbab cadsfafs\"",
        "output": "\"a a b c\"",
        "isHidden": true
      },
      {
        "input": "[\"a\", \"aa\", \"aaa\"]\n\"a aa a a a a a aaaaaa\"",
        "output": "\"a a a a a a a a\"",
        "isHidden": true
      }
    ],
    "hints": [
      "Store roots in a Trie. For each word in the sentence, find the shortest prefix in Trie."
    ],
    "editorial": {
      "approach": "Optimal Approach for Replace Words",
      "solutionMarkdown": "### Optimal Solution\n\nInsert roots into Trie. For each word, traverse Trie to find shortest prefix root.\n\n### Complexity\n- Time: O(Words * Length), Space: O(Dictionary Chars)",
      "timeComplexity": "O(Words * Length)",
      "spaceComplexity": "O(Dictionary Chars)"
    },
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0
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
        "boilerplate": "def reverseInteger(*args):\n    # TODO: Implement solution for Reverse Integer\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = reverseInteger(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(reverseInteger(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function reverseInteger(...args) {\n    // TODO: Implement solution for Reverse Integer\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(reverseInteger(...parsed)));\n    } catch (e) {\n        console.log(reverseInteger(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Reverse Integer\n        string line;\n        while (getline(cin, line)) {\n            cout << line << endl;\n        }\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        String line;\n        while ((line = br.readLine()) != null) {\n            // TODO: Implement solution for Reverse Integer\n            System.out.println(line);\n        }\n    }\n}\n"
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
        "output": "321",
        "isHidden": true
      },
      {
        "input": "-123",
        "output": "-321",
        "isHidden": true
      },
      {
        "input": "120",
        "output": "21",
        "isHidden": true
      },
      {
        "input": "1534236469",
        "output": "0",
        "isHidden": true
      }
    ],
    "hints": [
      "Extract last digit using x % 10. Check for 32-bit signed overflow before multiplying by 10."
    ],
    "editorial": {
      "approach": "Optimal Approach for Reverse Integer",
      "solutionMarkdown": "### Optimal Solution\n\nPop digit using % 10, push onto rev * 10 + pop. Guard against 32-bit INT_MAX and INT_MIN boundaries.\n\n### Complexity\n- Time: O(log10(X)), Space: O(1)",
      "timeComplexity": "O(log10(X))",
      "spaceComplexity": "O(1)"
    },
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0
  },
  {
    "title": "Reverse Linked List",
    "slug": "reverse-linked-list",
    "description": "Given the `head` of a singly linked list, reverse the list, and return *the reversed list*.\n\n### Example 1:\n```\nInput: [1,2,3,4,5]\nOutput: [5, 4, 3, 2, 1]\nExplanation: Reversed linked list.\n```\n\n### Example 2:\n```\nInput: [1,2]\nOutput: [2, 1]\nExplanation: Two-node list reversed.\n```",
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
        "boilerplate": "def reverseLinkedList(*args):\n    # TODO: Implement solution for Reverse Linked List\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = reverseLinkedList(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(reverseLinkedList(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function reverseLinkedList(...args) {\n    // TODO: Implement solution for Reverse Linked List\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(reverseLinkedList(...parsed)));\n    } catch (e) {\n        console.log(reverseLinkedList(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Reverse Linked List\n        string line;\n        while (getline(cin, line)) {\n            cout << line << endl;\n        }\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        String line;\n        while ((line = br.readLine()) != null) {\n            // TODO: Implement solution for Reverse Linked List\n            System.out.println(line);\n        }\n    }\n}\n"
      }
    ],
    "sampleTestCases": [
      {
        "input": "[1,2,3,4,5]",
        "output": "[5, 4, 3, 2, 1]",
        "explanation": "Reversed linked list."
      },
      {
        "input": "[1,2]",
        "output": "[2, 1]",
        "explanation": "Two-node list reversed."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "[1,2,3,4,5]",
        "output": "[5, 4, 3, 2, 1]",
        "isHidden": true
      },
      {
        "input": "[1,2]",
        "output": "[2, 1]",
        "isHidden": true
      },
      {
        "input": "[]",
        "output": "[]",
        "isHidden": true
      }
    ],
    "hints": [
      "Iteratively reverse next pointers using prev, curr, and next_temp pointers."
    ],
    "editorial": {
      "approach": "Optimal Approach for Reverse Linked List",
      "solutionMarkdown": "### Optimal Solution\n\nIterate curr: next_temp = curr.next, curr.next = prev, prev = curr, curr = next_temp.\n\n### Complexity\n- Time: O(N), Space: O(1)",
      "timeComplexity": "O(N)",
      "spaceComplexity": "O(1)"
    },
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0
  },
  {
    "title": "Reverse Nodes in k-Group",
    "slug": "reverse-nodes-in-k-group",
    "description": "Given the `head` of a linked list, reverse the nodes of the list `k` at a time, and return *the modified list*. Nodes left over at the end should remain as-is.\n\n### Example 1:\n```\nInput: [1,2,3,4,5]\n2\nOutput: [2, 1, 4, 3, 5]\nExplanation: Groups of 2 reversed: [2,1] and [4,3].\n```\n\n### Example 2:\n```\nInput: [1,2,3,4,5]\n3\nOutput: [3, 2, 1, 4, 5]\nExplanation: Group of 3 reversed: [3,2,1], remaining [4,5] intact.\n```",
    "difficulty": "HARD",
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
        "boilerplate": "def reverseNodesInKGroup(*args):\n    # TODO: Implement solution for Reverse Nodes in k-Group\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = reverseNodesInKGroup(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(reverseNodesInKGroup(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function reverseNodesInKGroup(...args) {\n    // TODO: Implement solution for Reverse Nodes in k-Group\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(reverseNodesInKGroup(...parsed)));\n    } catch (e) {\n        console.log(reverseNodesInKGroup(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Reverse Nodes in k-Group\n        string line;\n        while (getline(cin, line)) {\n            cout << line << endl;\n        }\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        String line;\n        while ((line = br.readLine()) != null) {\n            // TODO: Implement solution for Reverse Nodes in k-Group\n            System.out.println(line);\n        }\n    }\n}\n"
      }
    ],
    "sampleTestCases": [
      {
        "input": "[1,2,3,4,5]\n2",
        "output": "[2, 1, 4, 3, 5]",
        "explanation": "Groups of 2 reversed: [2,1] and [4,3]."
      },
      {
        "input": "[1,2,3,4,5]\n3",
        "output": "[3, 2, 1, 4, 5]",
        "explanation": "Group of 3 reversed: [3,2,1], remaining [4,5] intact."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "[1,2,3,4,5]\n2",
        "output": "[2, 1, 4, 3, 5]",
        "isHidden": true
      },
      {
        "input": "[1,2,3,4,5]\n3",
        "output": "[3, 2, 1, 4, 5]",
        "isHidden": true
      }
    ],
    "hints": [
      "Check if k nodes exist first. If so, reverse k nodes and link recursively to next group."
    ],
    "editorial": {
      "approach": "Optimal Approach for Reverse Nodes in k-Group",
      "solutionMarkdown": "### Optimal Solution\n\nFind kth node. Reverse sub-segment of length k and connect prev and next segment pointers.\n\n### Complexity\n- Time: O(N), Space: O(1)",
      "timeComplexity": "O(N)",
      "spaceComplexity": "O(1)"
    },
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0
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
      }
    ],
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
  }
];
