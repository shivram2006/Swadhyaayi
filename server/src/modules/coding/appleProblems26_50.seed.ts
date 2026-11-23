/* eslint-disable */
// Auto-generated Apple Interview Catalog - 100 DSA/CP/DP Problems
export const apple26_50 = [
  {
  "title": "Course Schedule II",
  "slug": "course-schedule-ii",
  "description": "There are a total of `numCourses` courses you have to take, labeled from `0` to `numCourses - 1`. You are given an array `prerequisites` where `prerequisites[i] = [ai, bi]` indicates that you must take course `bi` first if you want to take course `ai`.\n\nReturn *the ordering of courses you should take to finish all courses*. If it is impossible to finish all courses, return **an empty array**.\\n\\n### Example 1:\\n```\\nInput: 2\n[[1,0]]\\nOutput: [0, 1]\\nExplanation: To take course 1 you should take course 0 first.\\n```\\n\\n### Example 2:\\n```\\nInput: 4\n[[1,0],[2,0],[3,1],[3,2]]\\nOutput: [0, 1, 2, 3]\\nExplanation: Course 0 must be taken first, then 1 and 2, then 3.\\n```",
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
      "frequencyCount": 41,
      "sourceNote": "Apple Practice Bank #26"
    }
  ],
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
      "boilerplate": "function courseScheduleIi(...args) {\n    // TODO: Implement solution for Course Schedule II\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try {\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(courseScheduleIi(...parsed)));\n    } catch (e) {\n        console.log(courseScheduleIi(...lines));\n    }\n}\n"
    },
    {
      "language": "cpp",
      "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\n// Solution for Course Schedule II\nclass Solution {\npublic:\n    void solve() {\n        // Write your solution here\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    // Driver reading from standard input\n    string line;\n    while (getline(cin, line)) {\n        if (!line.empty()) {\n            // Process input line\n        }\n    }\n    return 0;\n}\n"
    },
    {
      "language": "java",
      "boilerplate": "import java.util.*;\n\npublic class Solution {\n    // Solution for Course Schedule II\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        while (sc.hasNextLine()) {\n            String line = sc.nextLine();\n            if (!line.trim().isEmpty()) {\n                // Process testcase line\n            }\n        }\n        sc.close();\n    }\n}\n"
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
      "expectedOutput": "[0, 1]",
      "weight": 1
    },
    {
      "input": "4\n[[1,0],[2,0],[3,1],[3,2]]",
      "expectedOutput": "[0, 1, 2, 3]",
      "weight": 1
    },
    {
      "input": "1\n[]",
      "expectedOutput": "[0]",
      "weight": 1
    },
    {
      "input": "2\n[[0,1],[1,0]]",
      "expectedOutput": "[]",
      "weight": 1
    }
  ],
  "timeLimitMs": 2000,
  "memoryLimitMb": 256,
  "hints": [
    "Use Kahn's Algorithm with indegree array and BFS queue."
  ],
  "editorial": {
    "solutionMarkdown": "### Optimal Solution\\nKahn's BFS topological sort. Add 0 indegree nodes to queue and decrement neighbors.",
    "complexityAnalysis": "Time: O(V + E), Space: O(V + E)"
  },
  "isGlobal": true,
  "status": "PUBLISHED"
},
  {
  "title": "Course Schedule",
  "slug": "course-schedule",
  "description": "There are a total of `numCourses` courses you have to take, labeled from `0` to `numCourses - 1`. You are given an array `prerequisites` where `prerequisites[i] = [ai, bi]`.\n\nReturn `true` if you can finish all courses. Otherwise, return `false`.\\n\\n### Example 1:\\n```\\nInput: 2\n[[1,0]]\\nOutput: true\\nExplanation: You can finish courses in order [0, 1].\\n```\\n\\n### Example 2:\\n```\\nInput: 2\n[[1,0],[0,1]]\\nOutput: false\\nExplanation: Cyclic prerequisite dependency.\\n```",
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
      "frequencyCount": 44,
      "sourceNote": "Apple Practice Bank #27"
    }
  ],
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
      "boilerplate": "function courseSchedule(...args) {\n    // TODO: Implement solution for Course Schedule\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try {\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(courseSchedule(...parsed)));\n    } catch (e) {\n        console.log(courseSchedule(...lines));\n    }\n}\n"
    },
    {
      "language": "cpp",
      "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\n// Solution for Course Schedule\nclass Solution {\npublic:\n    void solve() {\n        // Write your solution here\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    // Driver reading from standard input\n    string line;\n    while (getline(cin, line)) {\n        if (!line.empty()) {\n            // Process input line\n        }\n    }\n    return 0;\n}\n"
    },
    {
      "language": "java",
      "boilerplate": "import java.util.*;\n\npublic class Solution {\n    // Solution for Course Schedule\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        while (sc.hasNextLine()) {\n            String line = sc.nextLine();\n            if (!line.trim().isEmpty()) {\n                // Process testcase line\n            }\n        }\n        sc.close();\n    }\n}\n"
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
      "expectedOutput": "true",
      "weight": 1
    },
    {
      "input": "2\n[[1,0],[0,1]]",
      "expectedOutput": "false",
      "weight": 1
    },
    {
      "input": "3\n[[0,1],[1,2]]",
      "expectedOutput": "true",
      "weight": 1
    }
  ],
  "timeLimitMs": 2000,
  "memoryLimitMb": 256,
  "hints": [
    "Check if the directed graph contains a cycle using Kahn's algorithm or 3-color DFS."
  ],
  "editorial": {
    "solutionMarkdown": "### Optimal Solution\\nDetect cycles in directed graph using BFS indegrees or DFS with recursion state.",
    "complexityAnalysis": "Time: O(V + E), Space: O(V + E)"
  },
  "isGlobal": true,
  "status": "PUBLISHED"
},
  {
  "title": "Valid Palindrome",
  "slug": "valid-palindrome",
  "description": "A phrase is a **palindrome** if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward.\\n\\n### Example 1:\\n```\\nInput: A man, a plan, a canal: Panama\\nOutput: true\\nExplanation: 'amanaplanacanalpanama' is a palindrome.\\n```\\n\\n### Example 2:\\n```\\nInput: race a car\\nOutput: false\\nExplanation: 'raceacar' is not a palindrome.\\n```",
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
      "frequencyCount": 35,
      "sourceNote": "Apple Practice Bank #28"
    }
  ],
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
      "boilerplate": "function validPalindrome(...args) {\n    // TODO: Implement solution for Valid Palindrome\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try {\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(validPalindrome(...parsed)));\n    } catch (e) {\n        console.log(validPalindrome(...lines));\n    }\n}\n"
    },
    {
      "language": "cpp",
      "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\n// Solution for Valid Palindrome\nclass Solution {\npublic:\n    void solve() {\n        // Write your solution here\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    // Driver reading from standard input\n    string line;\n    while (getline(cin, line)) {\n        if (!line.empty()) {\n            // Process input line\n        }\n    }\n    return 0;\n}\n"
    },
    {
      "language": "java",
      "boilerplate": "import java.util.*;\n\npublic class Solution {\n    // Solution for Valid Palindrome\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        while (sc.hasNextLine()) {\n            String line = sc.nextLine();\n            if (!line.trim().isEmpty()) {\n                // Process testcase line\n            }\n        }\n        sc.close();\n    }\n}\n"
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
      "expectedOutput": "true",
      "weight": 1
    },
    {
      "input": "race a car",
      "expectedOutput": "false",
      "weight": 1
    },
    {
      "input": " ",
      "expectedOutput": "true",
      "weight": 1
    },
    {
      "input": "0P",
      "expectedOutput": "false",
      "weight": 1
    }
  ],
  "timeLimitMs": 2000,
  "memoryLimitMb": 256,
  "hints": [
    "Two pointers from left and right skipping non-alphanumeric chars."
  ],
  "editorial": {
    "solutionMarkdown": "### Optimal Solution\\nTwo pointer inward scan skipping non-alphanumeric and comparing lowercased chars.",
    "complexityAnalysis": "Time: O(N), Space: O(1)"
  },
  "isGlobal": true,
  "status": "PUBLISHED"
},
  {
  "title": "Search Insert Position",
  "slug": "search-insert-position",
  "description": "Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.\n\nYou must write an algorithm with `O(log n)` runtime complexity.\\n\\n### Example 1:\\n```\\nInput: [1,3,5,6]\n5\\nOutput: 2\\nExplanation: 5 is found at index 2.\\n```\\n\\n### Example 2:\\n```\\nInput: [1,3,5,6]\n2\\nOutput: 1\\nExplanation: 2 would be inserted at index 1.\\n```",
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
      "frequencyCount": 30,
      "sourceNote": "Apple Practice Bank #29"
    }
  ],
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
      "boilerplate": "function searchInsertPosition(...args) {\n    // TODO: Implement solution for Search Insert Position\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try {\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(searchInsertPosition(...parsed)));\n    } catch (e) {\n        console.log(searchInsertPosition(...lines));\n    }\n}\n"
    },
    {
      "language": "cpp",
      "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\n// Solution for Search Insert Position\nclass Solution {\npublic:\n    void solve() {\n        // Write your solution here\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    // Driver reading from standard input\n    string line;\n    while (getline(cin, line)) {\n        if (!line.empty()) {\n            // Process input line\n        }\n    }\n    return 0;\n}\n"
    },
    {
      "language": "java",
      "boilerplate": "import java.util.*;\n\npublic class Solution {\n    // Solution for Search Insert Position\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        while (sc.hasNextLine()) {\n            String line = sc.nextLine();\n            if (!line.trim().isEmpty()) {\n                // Process testcase line\n            }\n        }\n        sc.close();\n    }\n}\n"
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
      "expectedOutput": "2",
      "weight": 1
    },
    {
      "input": "[1,3,5,6]\n2",
      "expectedOutput": "1",
      "weight": 1
    },
    {
      "input": "[1,3,5,6]\n7",
      "expectedOutput": "4",
      "weight": 1
    },
    {
      "input": "[1,3,5,6]\n0",
      "expectedOutput": "0",
      "weight": 1
    }
  ],
  "timeLimitMs": 2000,
  "memoryLimitMb": 256,
  "hints": [
    "Standard binary search lower bound: find first element >= target."
  ],
  "editorial": {
    "solutionMarkdown": "### Optimal Solution\\nBinary search with left <= right. When loop ends, left is insert position.",
    "complexityAnalysis": "Time: O(log N), Space: O(1)"
  },
  "isGlobal": true,
  "status": "PUBLISHED"
},
  {
  "title": "Reverse Linked List",
  "slug": "reverse-linked-list",
  "description": "Given the `head` of a singly linked list, reverse the list, and return *the reversed list*.\\n\\n### Example 1:\\n```\\nInput: [1,2,3,4,5]\\nOutput: [5, 4, 3, 2, 1]\\nExplanation: Reversed linked list.\\n```\\n\\n### Example 2:\\n```\\nInput: [1,2]\\nOutput: [2, 1]\\nExplanation: Two-node list reversed.\\n```",
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
      "frequencyCount": 55,
      "sourceNote": "Apple Candidate Report S01 & S07"
    }
  ],
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
      "boilerplate": "function reverseLinkedList(...args) {\n    // TODO: Implement solution for Reverse Linked List\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try {\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(reverseLinkedList(...parsed)));\n    } catch (e) {\n        console.log(reverseLinkedList(...lines));\n    }\n}\n"
    },
    {
      "language": "cpp",
      "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\n// Solution for Reverse Linked List\nclass Solution {\npublic:\n    void solve() {\n        // Write your solution here\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    // Driver reading from standard input\n    string line;\n    while (getline(cin, line)) {\n        if (!line.empty()) {\n            // Process input line\n        }\n    }\n    return 0;\n}\n"
    },
    {
      "language": "java",
      "boilerplate": "import java.util.*;\n\npublic class Solution {\n    // Solution for Reverse Linked List\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        while (sc.hasNextLine()) {\n            String line = sc.nextLine();\n            if (!line.trim().isEmpty()) {\n                // Process testcase line\n            }\n        }\n        sc.close();\n    }\n}\n"
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
      "expectedOutput": "[5, 4, 3, 2, 1]",
      "weight": 1
    },
    {
      "input": "[1,2]",
      "expectedOutput": "[2, 1]",
      "weight": 1
    },
    {
      "input": "[]",
      "expectedOutput": "[]",
      "weight": 1
    }
  ],
  "timeLimitMs": 2000,
  "memoryLimitMb": 256,
  "hints": [
    "Iteratively reverse next pointers using prev, curr, and next_temp pointers."
  ],
  "editorial": {
    "solutionMarkdown": "### Optimal Solution\\nIterate curr: next_temp = curr.next, curr.next = prev, prev = curr, curr = next_temp.",
    "complexityAnalysis": "Time: O(N), Space: O(1)"
  },
  "isGlobal": true,
  "status": "PUBLISHED"
},
  {
  "title": "LRU Cache",
  "slug": "lru-cache",
  "description": "Design a data structure that follows the constraints of a **Least Recently Used (LRU) cache**.\n\nImplement the `LRUCache` class with `get(key)` and `put(key, value)` both running in `O(1)` average time complexity.\\n\\n### Example 1:\\n```\\nInput: [\"LRUCache\",\"put\",\"put\",\"get\",\"put\",\"get\",\"put\",\"get\",\"get\",\"get\"]\n[[2],[1,1],[2,2],[1],[3,3],[2],[4,4],[1],[3],[4]]\\nOutput: [null, null, null, 1, null, -1, null, -1, 3, 4]\\nExplanation: Key 2 evicted when key 3 is added; key 1 evicted when key 4 is added.\\n```\\n\\n### Example 2:\\n```\\nInput: [\"LRUCache\",\"put\",\"get\"]\n[[1],[2,1],[2]]\\nOutput: [null, null, 1]\\nExplanation: Single capacity LRU.\\n```",
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
      "frequencyCount": 60,
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
      "boilerplate": "def lruCache(*args):\n    # TODO: Implement solution for LRU Cache\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = lruCache(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(lruCache(*input_data))\n"
    },
    {
      "language": "javascript",
      "boilerplate": "function lruCache(...args) {\n    // TODO: Implement solution for LRU Cache\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try {\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(lruCache(...parsed)));\n    } catch (e) {\n        console.log(lruCache(...lines));\n    }\n}\n"
    },
    {
      "language": "cpp",
      "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\n// Solution for LRU Cache\nclass Solution {\npublic:\n    void solve() {\n        // Write your solution here\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    // Driver reading from standard input\n    string line;\n    while (getline(cin, line)) {\n        if (!line.empty()) {\n            // Process input line\n        }\n    }\n    return 0;\n}\n"
    },
    {
      "language": "java",
      "boilerplate": "import java.util.*;\n\npublic class Solution {\n    // Solution for LRU Cache\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        while (sc.hasNextLine()) {\n            String line = sc.nextLine();\n            if (!line.trim().isEmpty()) {\n                // Process testcase line\n            }\n        }\n        sc.close();\n    }\n}\n"
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
      "expectedOutput": "[null, null, null, 1, null, -1, null, -1, 3, 4]",
      "weight": 1
    }
  ],
  "timeLimitMs": 2000,
  "memoryLimitMb": 256,
  "hints": [
    "Combine a Hash Map with a Doubly Linked List with dummy head and tail."
  ],
  "editorial": {
    "solutionMarkdown": "### Optimal Solution\\nHash map maps keys to DLL nodes. Accessing moves node to head; eviction removes node from tail.",
    "complexityAnalysis": "Time: O(1) for both get and put, Space: O(capacity)"
  },
  "isGlobal": true,
  "status": "PUBLISHED"
},
  {
  "title": "First Missing Positive",
  "slug": "first-missing-positive",
  "description": "Given an unsorted integer array `nums`, return the smallest missing positive integer.\n\nYou must implement an algorithm that runs in `O(n)` time and uses `O(1)` auxiliary space.\\n\\n### Example 1:\\n```\\nInput: [1,2,0]\\nOutput: 3\\nExplanation: Numbers 1 and 2 are present, 3 is the smallest missing.\\n```\\n\\n### Example 2:\\n```\\nInput: [3,4,-1,1]\\nOutput: 2\\nExplanation: 1 is in array, 2 is missing.\\n```",
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
      "frequencyCount": 37,
      "sourceNote": "Apple Practice Bank #32"
    }
  ],
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
      "boilerplate": "function firstMissingPositive(...args) {\n    // TODO: Implement solution for First Missing Positive\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try {\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(firstMissingPositive(...parsed)));\n    } catch (e) {\n        console.log(firstMissingPositive(...lines));\n    }\n}\n"
    },
    {
      "language": "cpp",
      "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\n// Solution for First Missing Positive\nclass Solution {\npublic:\n    void solve() {\n        // Write your solution here\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    // Driver reading from standard input\n    string line;\n    while (getline(cin, line)) {\n        if (!line.empty()) {\n            // Process input line\n        }\n    }\n    return 0;\n}\n"
    },
    {
      "language": "java",
      "boilerplate": "import java.util.*;\n\npublic class Solution {\n    // Solution for First Missing Positive\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        while (sc.hasNextLine()) {\n            String line = sc.nextLine();\n            if (!line.trim().isEmpty()) {\n                // Process testcase line\n            }\n        }\n        sc.close();\n    }\n}\n"
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
      "expectedOutput": "3",
      "weight": 1
    },
    {
      "input": "[3,4,-1,1]",
      "expectedOutput": "2",
      "weight": 1
    },
    {
      "input": "[7,8,9,11,12]",
      "expectedOutput": "1",
      "weight": 1
    },
    {
      "input": "[1]",
      "expectedOutput": "2",
      "weight": 1
    }
  ],
  "timeLimitMs": 2000,
  "memoryLimitMb": 256,
  "hints": [
    "Place each number x in its bucket index x-1 if 1 <= x <= n using cyclic swap."
  ],
  "editorial": {
    "solutionMarkdown": "### Optimal Solution\\nCyclic sort: while 1 <= nums[i] <= n and nums[nums[i]-1] != nums[i], swap(nums[i], nums[nums[i]-1]). First index i where nums[i] != i+1 is answer i+1.",
    "complexityAnalysis": "Time: O(N), Space: O(1)"
  },
  "isGlobal": true,
  "status": "PUBLISHED"
},
  {
  "title": "Find First and Last Position of Element in Sorted Array",
  "slug": "find-first-and-last-position-of-element-in-sorted-array",
  "description": "Given an array of integers `nums` sorted in non-decreasing order, find the starting and ending position of a given `target` value. If target is not found in the array, return `[-1, -1]`.\n\nYou must write an algorithm with `O(log n)` runtime complexity.\\n\\n### Example 1:\\n```\\nInput: [5,7,7,8,8,10]\n8\\nOutput: [3, 4]\\nExplanation: 8 is found from index 3 to 4.\\n```\\n\\n### Example 2:\\n```\\nInput: [5,7,7,8,8,10]\n6\\nOutput: [-1, -1]\\nExplanation: 6 is not in the array.\\n```",
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
      "company": "Apple",
      "yearReported": 2025,
      "verified": true,
      "frequencyCount": 40,
      "sourceNote": "Apple Candidate Report S01"
    }
  ],
  "supportedLanguages": [
    "python",
    "javascript",
    "cpp",
    "java"
  ],
  "starterCode": [
    {
      "language": "python",
      "boilerplate": "def findFirstAndLastPositionOfElementInSortedArray(*args):\n    # TODO: Implement solution for Find First and Last Position of Element in Sorted Array\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = findFirstAndLastPositionOfElementInSortedArray(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(findFirstAndLastPositionOfElementInSortedArray(*input_data))\n"
    },
    {
      "language": "javascript",
      "boilerplate": "function findFirstAndLastPositionOfElementInSortedArray(...args) {\n    // TODO: Implement solution for Find First and Last Position of Element in Sorted Array\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try {\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(findFirstAndLastPositionOfElementInSortedArray(...parsed)));\n    } catch (e) {\n        console.log(findFirstAndLastPositionOfElementInSortedArray(...lines));\n    }\n}\n"
    },
    {
      "language": "cpp",
      "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\n// Solution for Find First and Last Position of Element in Sorted Array\nclass Solution {\npublic:\n    void solve() {\n        // Write your solution here\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    // Driver reading from standard input\n    string line;\n    while (getline(cin, line)) {\n        if (!line.empty()) {\n            // Process input line\n        }\n    }\n    return 0;\n}\n"
    },
    {
      "language": "java",
      "boilerplate": "import java.util.*;\n\npublic class Solution {\n    // Solution for Find First and Last Position of Element in Sorted Array\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        while (sc.hasNextLine()) {\n            String line = sc.nextLine();\n            if (!line.trim().isEmpty()) {\n                // Process testcase line\n            }\n        }\n        sc.close();\n    }\n}\n"
    }
  ],
  "sampleTestCases": [
    {
      "input": "[5,7,7,8,8,10]\n8",
      "output": "[3, 4]",
      "explanation": "8 is found from index 3 to 4."
    },
    {
      "input": "[5,7,7,8,8,10]\n6",
      "output": "[-1, -1]",
      "explanation": "6 is not in the array."
    }
  ],
  "hiddenTestCases": [
    {
      "input": "[5,7,7,8,8,10]\n8",
      "expectedOutput": "[3, 4]",
      "weight": 1
    },
    {
      "input": "[5,7,7,8,8,10]\n6",
      "expectedOutput": "[-1, -1]",
      "weight": 1
    },
    {
      "input": "[]\n0",
      "expectedOutput": "[-1, -1]",
      "weight": 1
    },
    {
      "input": "[1]\n1",
      "expectedOutput": "[0, 0]",
      "weight": 1
    }
  ],
  "timeLimitMs": 2000,
  "memoryLimitMb": 256,
  "hints": [
    "Run two binary searches: one for lower bound (first index) and one for upper bound (last index)."
  ],
  "editorial": {
    "solutionMarkdown": "### Optimal Solution\\nTwo binary search passes: left boundary search and right boundary search in O(log N).",
    "complexityAnalysis": "Time: O(log N), Space: O(1)"
  },
  "isGlobal": true,
  "status": "PUBLISHED"
},
  {
  "title": "Combination Sum",
  "slug": "combination-sum",
  "description": "Given an array of **distinct** integers `candidates` and a target integer `target`, return a list of all **unique combinations** of `candidates` where the chosen numbers sum to `target`. You may return the combinations in any order. The same number may be chosen unlimited times.\\n\\n### Example 1:\\n```\\nInput: [2,3,6,7]\n7\\nOutput: [[2, 2, 3], [7]]\\nExplanation: 2+2+3=7 and 7=7.\\n```\\n\\n### Example 2:\\n```\\nInput: [2,3,5]\n8\\nOutput: [[2, 2, 2, 2], [2, 3, 3], [3, 5]]\\nExplanation: 3 distinct valid combinations.\\n```",
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
      "frequencyCount": 39,
      "sourceNote": "Apple Practice Bank #34"
    }
  ],
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
      "boilerplate": "function combinationSum(...args) {\n    // TODO: Implement solution for Combination Sum\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try {\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(combinationSum(...parsed)));\n    } catch (e) {\n        console.log(combinationSum(...lines));\n    }\n}\n"
    },
    {
      "language": "cpp",
      "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\n// Solution for Combination Sum\nclass Solution {\npublic:\n    void solve() {\n        // Write your solution here\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    // Driver reading from standard input\n    string line;\n    while (getline(cin, line)) {\n        if (!line.empty()) {\n            // Process input line\n        }\n    }\n    return 0;\n}\n"
    },
    {
      "language": "java",
      "boilerplate": "import java.util.*;\n\npublic class Solution {\n    // Solution for Combination Sum\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        while (sc.hasNextLine()) {\n            String line = sc.nextLine();\n            if (!line.trim().isEmpty()) {\n                // Process testcase line\n            }\n        }\n        sc.close();\n    }\n}\n"
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
      "expectedOutput": "[[2, 2, 3], [7]]",
      "weight": 1
    },
    {
      "input": "[2,3,5]\n8",
      "expectedOutput": "[[2, 2, 2, 2], [2, 3, 3], [3, 5]]",
      "weight": 1
    },
    {
      "input": "[2]\n1",
      "expectedOutput": "[]",
      "weight": 1
    }
  ],
  "timeLimitMs": 2000,
  "memoryLimitMb": 256,
  "hints": [
    "Backtrack with index: at each step choose candidates[i] without advancing index, or skip to index + 1."
  ],
  "editorial": {
    "solutionMarkdown": "### Optimal Solution\\nDFS backtracking tree. Prune branches when remaining target < 0.",
    "complexityAnalysis": "Time: O(2^T) where T is target/min_candidate, Space: O(T)"
  },
  "isGlobal": true,
  "status": "PUBLISHED"
},
  {
  "title": "Word Search",
  "slug": "word-search",
  "description": "Given an `m x n` grid of characters `board` and a string `word`, return `true` if `word` exists in the grid. The word can be constructed from letters of sequentially adjacent cells (horizontally or vertically neighboring). The same letter cell may not be used more than once.\\n\\n### Example 1:\\n```\\nInput: [[\"A\",\"B\",\"C\",\"E\"],[\"S\",\"F\",\"C\",\"S\"],[\"A\",\"D\",\"E\",\"E\"]]\nABCCED\\nOutput: true\\nExplanation: The word 'ABCCED' exists.\\n```\\n\\n### Example 2:\\n```\\nInput: [[\"A\",\"B\",\"C\",\"E\"],[\"S\",\"F\",\"C\",\"S\"],[\"A\",\"D\",\"E\",\"E\"]]\nABCB\\nOutput: false\\nExplanation: 'ABCB' cannot be formed without reusing cell 'B'.\\n```",
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
      "frequencyCount": 43,
      "sourceNote": "Apple Practice Bank #35"
    }
  ],
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
      "boilerplate": "function wordSearch(...args) {\n    // TODO: Implement solution for Word Search\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try {\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(wordSearch(...parsed)));\n    } catch (e) {\n        console.log(wordSearch(...lines));\n    }\n}\n"
    },
    {
      "language": "cpp",
      "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\n// Solution for Word Search\nclass Solution {\npublic:\n    void solve() {\n        // Write your solution here\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    // Driver reading from standard input\n    string line;\n    while (getline(cin, line)) {\n        if (!line.empty()) {\n            // Process input line\n        }\n    }\n    return 0;\n}\n"
    },
    {
      "language": "java",
      "boilerplate": "import java.util.*;\n\npublic class Solution {\n    // Solution for Word Search\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        while (sc.hasNextLine()) {\n            String line = sc.nextLine();\n            if (!line.trim().isEmpty()) {\n                // Process testcase line\n            }\n        }\n        sc.close();\n    }\n}\n"
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
      "expectedOutput": "true",
      "weight": 1
    },
    {
      "input": "[[\"A\",\"B\",\"C\",\"E\"],[\"S\",\"F\",\"C\",\"S\"],[\"A\",\"D\",\"E\",\"E\"]]\nABCB",
      "expectedOutput": "false",
      "weight": 1
    }
  ],
  "timeLimitMs": 2000,
  "memoryLimitMb": 256,
  "hints": [
    "Start DFS from each matching first character. Temporarily modify board[r][c] to '#' to mark visited."
  ],
  "editorial": {
    "solutionMarkdown": "### Optimal Solution\\nDFS backtracking in 4 directions. Restore cell character upon backtrack.",
    "complexityAnalysis": "Time: O(M * N * 3^L) where L is word length, Space: O(L)"
  },
  "isGlobal": true,
  "status": "PUBLISHED"
},
  {
  "title": "Rotate Image",
  "slug": "rotate-image",
  "description": "You are given an `n x n` 2D matrix representing an image, rotate the image by **90 degrees (clockwise)** in-place.\\n\\n### Example 1:\\n```\\nInput: [[1,2,3],[4,5,6],[7,8,9]]\\nOutput: [[7, 4, 1], [8, 5, 2], [9, 6, 3]]\\nExplanation: Rotated 90 degrees clockwise.\\n```\\n\\n### Example 2:\\n```\\nInput: [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]\\nOutput: [[15, 13, 2, 5], [14, 3, 4, 1], [12, 6, 8, 9], [16, 7, 10, 11]]\\nExplanation: 4x4 matrix rotated.\\n```",
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
      "boilerplate": "def rotateImage(*args):\n    # TODO: Implement solution for Rotate Image\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = rotateImage(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(rotateImage(*input_data))\n"
    },
    {
      "language": "javascript",
      "boilerplate": "function rotateImage(...args) {\n    // TODO: Implement solution for Rotate Image\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try {\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(rotateImage(...parsed)));\n    } catch (e) {\n        console.log(rotateImage(...lines));\n    }\n}\n"
    },
    {
      "language": "cpp",
      "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\n// Solution for Rotate Image\nclass Solution {\npublic:\n    void solve() {\n        // Write your solution here\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    // Driver reading from standard input\n    string line;\n    while (getline(cin, line)) {\n        if (!line.empty()) {\n            // Process input line\n        }\n    }\n    return 0;\n}\n"
    },
    {
      "language": "java",
      "boilerplate": "import java.util.*;\n\npublic class Solution {\n    // Solution for Rotate Image\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        while (sc.hasNextLine()) {\n            String line = sc.nextLine();\n            if (!line.trim().isEmpty()) {\n                // Process testcase line\n            }\n        }\n        sc.close();\n    }\n}\n"
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
      "expectedOutput": "[[7, 4, 1], [8, 5, 2], [9, 6, 3]]",
      "weight": 1
    },
    {
      "input": "[[1]]",
      "expectedOutput": "[[1]]",
      "weight": 1
    }
  ],
  "timeLimitMs": 2000,
  "memoryLimitMb": 256,
  "hints": [
    "Transpose matrix along main diagonal, then reverse each row horizontally."
  ],
  "editorial": {
    "solutionMarkdown": "### Optimal Solution\\nTwo-step in-place transformation: matrix.transpose() followed by matrix.reverse_rows().",
    "complexityAnalysis": "Time: O(N^2), Space: O(1)"
  },
  "isGlobal": true,
  "status": "PUBLISHED"
},
  {
  "title": "Jump Game",
  "slug": "jump-game",
  "description": "You are given an integer array `nums`. You are initially positioned at the array's **first index**, and each element in the array represents your maximum jump length at that position.\n\nReturn `true` if you can reach the last index, or `false` otherwise.\\n\\n### Example 1:\\n```\\nInput: [2,3,1,1,4]\\nOutput: true\\nExplanation: Jump 1 step from index 0 to 1, then 3 steps to last index.\\n```\\n\\n### Example 2:\\n```\\nInput: [3,2,1,0,4]\\nOutput: false\\nExplanation: Always arrive at index 3 with jump length 0.\\n```",
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
      "frequencyCount": 47,
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
      "boilerplate": "def jumpGame(*args):\n    # TODO: Implement solution for Jump Game\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = jumpGame(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(jumpGame(*input_data))\n"
    },
    {
      "language": "javascript",
      "boilerplate": "function jumpGame(...args) {\n    // TODO: Implement solution for Jump Game\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try {\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(jumpGame(...parsed)));\n    } catch (e) {\n        console.log(jumpGame(...lines));\n    }\n}\n"
    },
    {
      "language": "cpp",
      "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\n// Solution for Jump Game\nclass Solution {\npublic:\n    void solve() {\n        // Write your solution here\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    // Driver reading from standard input\n    string line;\n    while (getline(cin, line)) {\n        if (!line.empty()) {\n            // Process input line\n        }\n    }\n    return 0;\n}\n"
    },
    {
      "language": "java",
      "boilerplate": "import java.util.*;\n\npublic class Solution {\n    // Solution for Jump Game\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        while (sc.hasNextLine()) {\n            String line = sc.nextLine();\n            if (!line.trim().isEmpty()) {\n                // Process testcase line\n            }\n        }\n        sc.close();\n    }\n}\n"
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
      "expectedOutput": "true",
      "weight": 1
    },
    {
      "input": "[3,2,1,0,4]",
      "expectedOutput": "false",
      "weight": 1
    },
    {
      "input": "[0]",
      "expectedOutput": "true",
      "weight": 1
    },
    {
      "input": "[2,0,0]",
      "expectedOutput": "true",
      "weight": 1
    }
  ],
  "timeLimitMs": 2000,
  "memoryLimitMb": 256,
  "hints": [
    "Track maxReach index. If current index i > maxReach, return false."
  ],
  "editorial": {
    "solutionMarkdown": "### Optimal Solution\\nGreedy scan: maxReach = max(maxReach, i + nums[i]). If maxReach >= n-1, return true.",
    "complexityAnalysis": "Time: O(N), Space: O(1)"
  },
  "isGlobal": true,
  "status": "PUBLISHED"
},
  {
  "title": "Coin Change",
  "slug": "coin-change",
  "description": "You are given an integer array `coins` representing coins of different denominations and an integer `amount` representing a total amount of money.\n\nReturn *the fewest number of coins that you need to make up that amount*. If that amount cannot be made up, return `-1`.\\n\\n### Example 1:\\n```\\nInput: [1,2,5]\n11\\nOutput: 3\\nExplanation: 11 = 5 + 5 + 1 (3 coins).\\n```\\n\\n### Example 2:\\n```\\nInput: [2]\n3\\nOutput: -1\\nExplanation: Cannot make amount 3 with coin 2.\\n```",
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
      "frequencyCount": 52,
      "sourceNote": "Apple Candidate Report S08"
    }
  ],
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
      "boilerplate": "function coinChange(...args) {\n    // TODO: Implement solution for Coin Change\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try {\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(coinChange(...parsed)));\n    } catch (e) {\n        console.log(coinChange(...lines));\n    }\n}\n"
    },
    {
      "language": "cpp",
      "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\n// Solution for Coin Change\nclass Solution {\npublic:\n    void solve() {\n        // Write your solution here\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    // Driver reading from standard input\n    string line;\n    while (getline(cin, line)) {\n        if (!line.empty()) {\n            // Process input line\n        }\n    }\n    return 0;\n}\n"
    },
    {
      "language": "java",
      "boilerplate": "import java.util.*;\n\npublic class Solution {\n    // Solution for Coin Change\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        while (sc.hasNextLine()) {\n            String line = sc.nextLine();\n            if (!line.trim().isEmpty()) {\n                // Process testcase line\n            }\n        }\n        sc.close();\n    }\n}\n"
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
      "expectedOutput": "3",
      "weight": 1
    },
    {
      "input": "[2]\n3",
      "expectedOutput": "-1",
      "weight": 1
    },
    {
      "input": "[1]\n0",
      "expectedOutput": "0",
      "weight": 1
    },
    {
      "input": "[1]\n2",
      "expectedOutput": "2",
      "weight": 1
    }
  ],
  "timeLimitMs": 2000,
  "memoryLimitMb": 256,
  "hints": [
    "dp[x] = min(dp[x], dp[x - coin] + 1) for each coin <= x."
  ],
  "editorial": {
    "solutionMarkdown": "### Optimal Solution\\n1D Bottom-up DP initialized to infinity. dp[0] = 0.",
    "complexityAnalysis": "Time: O(amount * len(coins)), Space: O(amount)"
  },
  "isGlobal": true,
  "status": "PUBLISHED"
},
  {
  "title": "Coin Change II",
  "slug": "coin-change-ii",
  "description": "You are given an integer array `coins` representing coins of different denominations and an integer `amount`. Return the number of combinations that make up that amount. You may assume an infinite number of each kind of coin.\\n\\n### Example 1:\\n```\\nInput: 5\n[1,2,5]\\nOutput: 4\\nExplanation: 5=5, 5=2+2+1, 5=2+1+1+1, 5=1+1+1+1+1.\\n```\\n\\n### Example 2:\\n```\\nInput: 3\n[2]\\nOutput: 0\\nExplanation: Cannot make 3 using only 2s.\\n```",
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
      "frequencyCount": 40,
      "sourceNote": "Apple Candidate Report S08"
    }
  ],
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
      "boilerplate": "function coinChangeIi(...args) {\n    // TODO: Implement solution for Coin Change II\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try {\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(coinChangeIi(...parsed)));\n    } catch (e) {\n        console.log(coinChangeIi(...lines));\n    }\n}\n"
    },
    {
      "language": "cpp",
      "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\n// Solution for Coin Change II\nclass Solution {\npublic:\n    void solve() {\n        // Write your solution here\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    // Driver reading from standard input\n    string line;\n    while (getline(cin, line)) {\n        if (!line.empty()) {\n            // Process input line\n        }\n    }\n    return 0;\n}\n"
    },
    {
      "language": "java",
      "boilerplate": "import java.util.*;\n\npublic class Solution {\n    // Solution for Coin Change II\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        while (sc.hasNextLine()) {\n            String line = sc.nextLine();\n            if (!line.trim().isEmpty()) {\n                // Process testcase line\n            }\n        }\n        sc.close();\n    }\n}\n"
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
      "expectedOutput": "4",
      "weight": 1
    },
    {
      "input": "3\n[2]",
      "expectedOutput": "0",
      "weight": 1
    },
    {
      "input": "10\n[10]",
      "expectedOutput": "1",
      "weight": 1
    }
  ],
  "timeLimitMs": 2000,
  "memoryLimitMb": 256,
  "hints": [
    "Unbounded knapsack: loop coins outer, amount inner from coin to amount."
  ],
  "editorial": {
    "solutionMarkdown": "### Optimal Solution\\nOuter loop over coins, inner loop over amounts ensures combinations rather than permutations.",
    "complexityAnalysis": "Time: O(amount * len(coins)), Space: O(amount)"
  },
  "isGlobal": true,
  "status": "PUBLISHED"
},
  {
  "title": "Maximum Product Subarray",
  "slug": "maximum-product-subarray",
  "description": "Given an integer array `nums`, find a subarray that has the largest product, and return *the product*.\\n\\n### Example 1:\\n```\\nInput: [2,3,-2,4]\\nOutput: 6\\nExplanation: [2,3] has the largest product 6.\\n```\\n\\n### Example 2:\\n```\\nInput: [-2,0,-1]\\nOutput: 0\\nExplanation: Max product is 0.\\n```",
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
      "frequencyCount": 39,
      "sourceNote": "Apple Practice Bank #40"
    }
  ],
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
      "boilerplate": "function maximumProductSubarray(...args) {\n    // TODO: Implement solution for Maximum Product Subarray\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try {\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(maximumProductSubarray(...parsed)));\n    } catch (e) {\n        console.log(maximumProductSubarray(...lines));\n    }\n}\n"
    },
    {
      "language": "cpp",
      "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\n// Solution for Maximum Product Subarray\nclass Solution {\npublic:\n    void solve() {\n        // Write your solution here\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    // Driver reading from standard input\n    string line;\n    while (getline(cin, line)) {\n        if (!line.empty()) {\n            // Process input line\n        }\n    }\n    return 0;\n}\n"
    },
    {
      "language": "java",
      "boilerplate": "import java.util.*;\n\npublic class Solution {\n    // Solution for Maximum Product Subarray\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        while (sc.hasNextLine()) {\n            String line = sc.nextLine();\n            if (!line.trim().isEmpty()) {\n                // Process testcase line\n            }\n        }\n        sc.close();\n    }\n}\n"
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
      "expectedOutput": "6",
      "weight": 1
    },
    {
      "input": "[-2,0,-1]",
      "expectedOutput": "0",
      "weight": 1
    },
    {
      "input": "[-2,3,-4]",
      "expectedOutput": "24",
      "weight": 1
    }
  ],
  "timeLimitMs": 2000,
  "memoryLimitMb": 256,
  "hints": [
    "Maintain both max_prod and min_prod because multiplying negative by negative flips to positive."
  ],
  "editorial": {
    "solutionMarkdown": "### Optimal Solution\\nAt each index, if nums[i] < 0 swap max_prod and min_prod, then update max_prod = max(nums[i], max_prod * nums[i]).",
    "complexityAnalysis": "Time: O(N), Space: O(1)"
  },
  "isGlobal": true,
  "status": "PUBLISHED"
},
  {
  "title": "Longest Increasing Subsequence",
  "slug": "longest-increasing-subsequence",
  "description": "Given an integer array `nums`, return the length of the longest strictly increasing subsequence.\\n\\n### Example 1:\\n```\\nInput: [10,9,2,5,3,7,101,18]\\nOutput: 4\\nExplanation: The longest increasing subsequence is [2,3,7,101], length 4.\\n```\\n\\n### Example 2:\\n```\\nInput: [0,1,0,3,2,3]\\nOutput: 4\\nExplanation: [0,1,2,3] has length 4.\\n```",
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
      "sourceNote": "Apple Practice Bank #41"
    }
  ],
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
      "boilerplate": "function longestIncreasingSubsequence(...args) {\n    // TODO: Implement solution for Longest Increasing Subsequence\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try {\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(longestIncreasingSubsequence(...parsed)));\n    } catch (e) {\n        console.log(longestIncreasingSubsequence(...lines));\n    }\n}\n"
    },
    {
      "language": "cpp",
      "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\n// Solution for Longest Increasing Subsequence\nclass Solution {\npublic:\n    void solve() {\n        // Write your solution here\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    // Driver reading from standard input\n    string line;\n    while (getline(cin, line)) {\n        if (!line.empty()) {\n            // Process input line\n        }\n    }\n    return 0;\n}\n"
    },
    {
      "language": "java",
      "boilerplate": "import java.util.*;\n\npublic class Solution {\n    // Solution for Longest Increasing Subsequence\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        while (sc.hasNextLine()) {\n            String line = sc.nextLine();\n            if (!line.trim().isEmpty()) {\n                // Process testcase line\n            }\n        }\n        sc.close();\n    }\n}\n"
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
      "expectedOutput": "4",
      "weight": 1
    },
    {
      "input": "[0,1,0,3,2,3]",
      "expectedOutput": "4",
      "weight": 1
    },
    {
      "input": "[7,7,7,7,7,7,7]",
      "expectedOutput": "1",
      "weight": 1
    }
  ],
  "timeLimitMs": 2000,
  "memoryLimitMb": 256,
  "hints": [
    "Patience sorting using binary search (bisect_left) runs in O(N log N)."
  ],
  "editorial": {
    "solutionMarkdown": "### Optimal Solution\\nTails array where tails[i] stores smallest tail of all increasing subsequences of length i+1.",
    "complexityAnalysis": "Time: O(N log N), Space: O(N)"
  },
  "isGlobal": true,
  "status": "PUBLISHED"
},
  {
  "title": "Word Break",
  "slug": "word-break",
  "description": "Given a string `s` and a dictionary of strings `wordDict`, return `true` if `s` can be segmented into a space-separated sequence of one or more dictionary words.\\n\\n### Example 1:\\n```\\nInput: leetcode\n[\"leet\",\"code\"]\\nOutput: true\\nExplanation: 'leetcode' can be segmented as 'leet code'.\\n```\\n\\n### Example 2:\\n```\\nInput: applepenapple\n[\"apple\",\"pen\"]\\nOutput: true\\nExplanation: 'apple pen apple'.\\n```",
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
      "frequencyCount": 43,
      "sourceNote": "Apple Practice Bank #42"
    }
  ],
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
      "boilerplate": "function wordBreak(...args) {\n    // TODO: Implement solution for Word Break\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try {\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(wordBreak(...parsed)));\n    } catch (e) {\n        console.log(wordBreak(...lines));\n    }\n}\n"
    },
    {
      "language": "cpp",
      "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\n// Solution for Word Break\nclass Solution {\npublic:\n    void solve() {\n        // Write your solution here\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    // Driver reading from standard input\n    string line;\n    while (getline(cin, line)) {\n        if (!line.empty()) {\n            // Process input line\n        }\n    }\n    return 0;\n}\n"
    },
    {
      "language": "java",
      "boilerplate": "import java.util.*;\n\npublic class Solution {\n    // Solution for Word Break\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        while (sc.hasNextLine()) {\n            String line = sc.nextLine();\n            if (!line.trim().isEmpty()) {\n                // Process testcase line\n            }\n        }\n        sc.close();\n    }\n}\n"
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
      "expectedOutput": "true",
      "weight": 1
    },
    {
      "input": "applepenapple\n[\"apple\",\"pen\"]",
      "expectedOutput": "true",
      "weight": 1
    },
    {
      "input": "catsandog\n[\"cats\",\"dog\",\"sand\",\"and\",\"cat\"]",
      "expectedOutput": "false",
      "weight": 1
    }
  ],
  "timeLimitMs": 2000,
  "memoryLimitMb": 256,
  "hints": [
    "dp[i] = true if dp[j] == true and s[j:i] in wordDict."
  ],
  "editorial": {
    "solutionMarkdown": "### Optimal Solution\\n1D DP array of size n+1. dp[0] = true. Check valid prefix splits.",
    "complexityAnalysis": "Time: O(N^2 * K) or O(N^3), Space: O(N)"
  },
  "isGlobal": true,
  "status": "PUBLISHED"
},
  {
  "title": "House Robber",
  "slug": "house-robber",
  "description": "You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security systems connected.\n\nReturn the maximum amount of money you can rob tonight without alerting the police.\\n\\n### Example 1:\\n```\\nInput: [1,2,3,1]\\nOutput: 4\\nExplanation: Rob house 1 (money = 1) and house 3 (money = 3), total = 4.\\n```\\n\\n### Example 2:\\n```\\nInput: [2,7,9,3,1]\\nOutput: 12\\nExplanation: Rob house 1 (2), house 3 (9) and house 5 (1), total = 12.\\n```",
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
      "frequencyCount": 42,
      "sourceNote": "Apple Practice Bank #43"
    }
  ],
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
      "boilerplate": "function houseRobber(...args) {\n    // TODO: Implement solution for House Robber\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try {\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(houseRobber(...parsed)));\n    } catch (e) {\n        console.log(houseRobber(...lines));\n    }\n}\n"
    },
    {
      "language": "cpp",
      "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\n// Solution for House Robber\nclass Solution {\npublic:\n    void solve() {\n        // Write your solution here\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    // Driver reading from standard input\n    string line;\n    while (getline(cin, line)) {\n        if (!line.empty()) {\n            // Process input line\n        }\n    }\n    return 0;\n}\n"
    },
    {
      "language": "java",
      "boilerplate": "import java.util.*;\n\npublic class Solution {\n    // Solution for House Robber\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        while (sc.hasNextLine()) {\n            String line = sc.nextLine();\n            if (!line.trim().isEmpty()) {\n                // Process testcase line\n            }\n        }\n        sc.close();\n    }\n}\n"
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
      "expectedOutput": "4",
      "weight": 1
    },
    {
      "input": "[2,7,9,3,1]",
      "expectedOutput": "12",
      "weight": 1
    },
    {
      "input": "[0]",
      "expectedOutput": "0",
      "weight": 1
    },
    {
      "input": "[2,1,1,2]",
      "expectedOutput": "4",
      "weight": 1
    }
  ],
  "timeLimitMs": 2000,
  "memoryLimitMb": 256,
  "hints": [
    "dp[i] = max(dp[i-1], dp[i-2] + nums[i])."
  ],
  "editorial": {
    "solutionMarkdown": "### Optimal Solution\\nTwo variables rob1, rob2 tracking max loot without robbing adjacent houses.",
    "complexityAnalysis": "Time: O(N), Space: O(1)"
  },
  "isGlobal": true,
  "status": "PUBLISHED"
},
  {
  "title": "House Robber II",
  "slug": "house-robber-ii",
  "description": "All houses at this place are arranged in a circle. That means the first house is the neighbor of the last one. Return the maximum amount of money you can rob tonight without alerting the police.\\n\\n### Example 1:\\n```\\nInput: [2,3,2]\\nOutput: 3\\nExplanation: You cannot rob house 1 (2) and house 3 (2) because they are neighbors.\\n```\\n\\n### Example 2:\\n```\\nInput: [1,2,3,1]\\nOutput: 4\\nExplanation: Rob house 1 (1) and house 3 (3), total = 4.\\n```",
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
      "frequencyCount": 36,
      "sourceNote": "Apple Practice Bank #44"
    }
  ],
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
      "boilerplate": "function houseRobberIi(...args) {\n    // TODO: Implement solution for House Robber II\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try {\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(houseRobberIi(...parsed)));\n    } catch (e) {\n        console.log(houseRobberIi(...lines));\n    }\n}\n"
    },
    {
      "language": "cpp",
      "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\n// Solution for House Robber II\nclass Solution {\npublic:\n    void solve() {\n        // Write your solution here\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    // Driver reading from standard input\n    string line;\n    while (getline(cin, line)) {\n        if (!line.empty()) {\n            // Process input line\n        }\n    }\n    return 0;\n}\n"
    },
    {
      "language": "java",
      "boilerplate": "import java.util.*;\n\npublic class Solution {\n    // Solution for House Robber II\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        while (sc.hasNextLine()) {\n            String line = sc.nextLine();\n            if (!line.trim().isEmpty()) {\n                // Process testcase line\n            }\n        }\n        sc.close();\n    }\n}\n"
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
      "expectedOutput": "3",
      "weight": 1
    },
    {
      "input": "[1,2,3,1]",
      "expectedOutput": "4",
      "weight": 1
    },
    {
      "input": "[1,2,3]",
      "expectedOutput": "3",
      "weight": 1
    }
  ],
  "timeLimitMs": 2000,
  "memoryLimitMb": 256,
  "hints": [
    "Max of robbing nums[0:n-1] or nums[1:n]."
  ],
  "editorial": {
    "solutionMarkdown": "### Optimal Solution\\nDecompose circular array into two linear subproblems: excluding first house or excluding last house.",
    "complexityAnalysis": "Time: O(N), Space: O(1)"
  },
  "isGlobal": true,
  "status": "PUBLISHED"
},
  {
  "title": "Unique Paths",
  "slug": "unique-paths",
  "description": "There is a robot on an `m x n` grid. The robot is initially located at the top-left corner (`grid[0][0]`). The robot tries to move to the bottom-right corner (`grid[m - 1][n - 1]`). The robot can only move either down or right at any point in time.\n\nGiven the two integers `m` and `n`, return *the number of possible unique paths*.\\n\\n### Example 1:\\n```\\nInput: 3\n7\\nOutput: 28\\nExplanation: 28 unique paths from (0,0) to (2,6).\\n```\\n\\n### Example 2:\\n```\\nInput: 3\n2\\nOutput: 3\\nExplanation: Right->Down->Down, Down->Down->Right, Down->Right->Down.\\n```",
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
      "frequencyCount": 41,
      "sourceNote": "Apple Practice Bank #45"
    }
  ],
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
      "boilerplate": "function uniquePaths(...args) {\n    // TODO: Implement solution for Unique Paths\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try {\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(uniquePaths(...parsed)));\n    } catch (e) {\n        console.log(uniquePaths(...lines));\n    }\n}\n"
    },
    {
      "language": "cpp",
      "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\n// Solution for Unique Paths\nclass Solution {\npublic:\n    void solve() {\n        // Write your solution here\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    // Driver reading from standard input\n    string line;\n    while (getline(cin, line)) {\n        if (!line.empty()) {\n            // Process input line\n        }\n    }\n    return 0;\n}\n"
    },
    {
      "language": "java",
      "boilerplate": "import java.util.*;\n\npublic class Solution {\n    // Solution for Unique Paths\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        while (sc.hasNextLine()) {\n            String line = sc.nextLine();\n            if (!line.trim().isEmpty()) {\n                // Process testcase line\n            }\n        }\n        sc.close();\n    }\n}\n"
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
      "expectedOutput": "28",
      "weight": 1
    },
    {
      "input": "3\n2",
      "expectedOutput": "3",
      "weight": 1
    },
    {
      "input": "1\n1",
      "expectedOutput": "1",
      "weight": 1
    }
  ],
  "timeLimitMs": 2000,
  "memoryLimitMb": 256,
  "hints": [
    "dp[r][c] = dp[r-1][c] + dp[r][c-1], or combinations (m+n-2) choose (m-1)."
  ],
  "editorial": {
    "solutionMarkdown": "### Optimal Solution\\n1D rolling DP row or combinatorial calculation C(m+n-2, m-1).",
    "complexityAnalysis": "Time: O(M * N) or O(min(M, N)), Space: O(N)"
  },
  "isGlobal": true,
  "status": "PUBLISHED"
},
  {
  "title": "Minimum Path Sum",
  "slug": "minimum-path-sum",
  "description": "Given a `m x n` `grid` filled with non-negative numbers, find a path from top left to bottom right, which minimizes the sum of all numbers along its path. You can only move either down or right.\\n\\n### Example 1:\\n```\\nInput: [[1,3,1],[1,5,1],[4,2,1]]\\nOutput: 7\\nExplanation: Path 1 -> 3 -> 1 -> 1 -> 1 minimizes sum to 7.\\n```\\n\\n### Example 2:\\n```\\nInput: [[1,2,3],[4,5,6]]\\nOutput: 12\\nExplanation: Minimum path sum is 12.\\n```",
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
      "frequencyCount": 38,
      "sourceNote": "Apple Practice Bank #46"
    }
  ],
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
      "boilerplate": "function minimumPathSum(...args) {\n    // TODO: Implement solution for Minimum Path Sum\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try {\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(minimumPathSum(...parsed)));\n    } catch (e) {\n        console.log(minimumPathSum(...lines));\n    }\n}\n"
    },
    {
      "language": "cpp",
      "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\n// Solution for Minimum Path Sum\nclass Solution {\npublic:\n    void solve() {\n        // Write your solution here\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    // Driver reading from standard input\n    string line;\n    while (getline(cin, line)) {\n        if (!line.empty()) {\n            // Process input line\n        }\n    }\n    return 0;\n}\n"
    },
    {
      "language": "java",
      "boilerplate": "import java.util.*;\n\npublic class Solution {\n    // Solution for Minimum Path Sum\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        while (sc.hasNextLine()) {\n            String line = sc.nextLine();\n            if (!line.trim().isEmpty()) {\n                // Process testcase line\n            }\n        }\n        sc.close();\n    }\n}\n"
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
      "expectedOutput": "7",
      "weight": 1
    },
    {
      "input": "[[1,2,3],[4,5,6]]",
      "expectedOutput": "12",
      "weight": 1
    }
  ],
  "timeLimitMs": 2000,
  "memoryLimitMb": 256,
  "hints": [
    "grid[r][c] += min(grid[r-1][c], grid[r][c-1]) in-place."
  ],
  "editorial": {
    "solutionMarkdown": "### Optimal Solution\\nBottom-up 2D grid DP computing minimal cumulative cost.",
    "complexityAnalysis": "Time: O(M * N), Space: O(1) in-place"
  },
  "isGlobal": true,
  "status": "PUBLISHED"
},
  {
  "title": "Decode Ways",
  "slug": "decode-ways",
  "description": "A message containing letters from `A-Z` can be encoded into numbers using the mapping `'A' -> \"1\" ... 'Z' -> \"26\"`. Given a string `s` containing only digits, return *the number of ways to decode it*.\\n\\n### Example 1:\\n```\\nInput: 12\\nOutput: 2\\nExplanation: '12' could be decoded as 'AB' (1 2) or 'L' (12).\\n```\\n\\n### Example 2:\\n```\\nInput: 226\\nOutput: 3\\nExplanation: 'BZ' (2 26), 'VF' (22 6), or 'BBF' (2 2 6).\\n```",
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
      "frequencyCount": 37,
      "sourceNote": "Apple Practice Bank #47"
    }
  ],
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
      "boilerplate": "function decodeWays(...args) {\n    // TODO: Implement solution for Decode Ways\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try {\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(decodeWays(...parsed)));\n    } catch (e) {\n        console.log(decodeWays(...lines));\n    }\n}\n"
    },
    {
      "language": "cpp",
      "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\n// Solution for Decode Ways\nclass Solution {\npublic:\n    void solve() {\n        // Write your solution here\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    // Driver reading from standard input\n    string line;\n    while (getline(cin, line)) {\n        if (!line.empty()) {\n            // Process input line\n        }\n    }\n    return 0;\n}\n"
    },
    {
      "language": "java",
      "boilerplate": "import java.util.*;\n\npublic class Solution {\n    // Solution for Decode Ways\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        while (sc.hasNextLine()) {\n            String line = sc.nextLine();\n            if (!line.trim().isEmpty()) {\n                // Process testcase line\n            }\n        }\n        sc.close();\n    }\n}\n"
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
      "expectedOutput": "2",
      "weight": 1
    },
    {
      "input": "226",
      "expectedOutput": "3",
      "weight": 1
    },
    {
      "input": "06",
      "expectedOutput": "0",
      "weight": 1
    }
  ],
  "timeLimitMs": 2000,
  "memoryLimitMb": 256,
  "hints": [
    "Check 1-digit code (1-9) and 2-digit code (10-26)."
  ],
  "editorial": {
    "solutionMarkdown": "### Optimal Solution\\n1D DP with two states tracking valid single and double digit transitions.",
    "complexityAnalysis": "Time: O(N), Space: O(1)"
  },
  "isGlobal": true,
  "status": "PUBLISHED"
},
  {
  "title": "Edit Distance",
  "slug": "edit-distance",
  "description": "Given two strings `word1` and `word2`, return *the minimum number of operations required to convert `word1` to `word2`* (insert, delete, or replace a character).\\n\\n### Example 1:\\n```\\nInput: horse\nros\\nOutput: 3\\nExplanation: horse -> rorse -> rose -> ros.\\n```\\n\\n### Example 2:\\n```\\nInput: intention\nexecution\\nOutput: 5\\nExplanation: 5 operations needed.\\n```",
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
      "frequencyCount": 44,
      "sourceNote": "Apple Practice Bank #48"
    }
  ],
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
      "boilerplate": "function editDistance(...args) {\n    // TODO: Implement solution for Edit Distance\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try {\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(editDistance(...parsed)));\n    } catch (e) {\n        console.log(editDistance(...lines));\n    }\n}\n"
    },
    {
      "language": "cpp",
      "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\n// Solution for Edit Distance\nclass Solution {\npublic:\n    void solve() {\n        // Write your solution here\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    // Driver reading from standard input\n    string line;\n    while (getline(cin, line)) {\n        if (!line.empty()) {\n            // Process input line\n        }\n    }\n    return 0;\n}\n"
    },
    {
      "language": "java",
      "boilerplate": "import java.util.*;\n\npublic class Solution {\n    // Solution for Edit Distance\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        while (sc.hasNextLine()) {\n            String line = sc.nextLine();\n            if (!line.trim().isEmpty()) {\n                // Process testcase line\n            }\n        }\n        sc.close();\n    }\n}\n"
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
      "expectedOutput": "3",
      "weight": 1
    },
    {
      "input": "intention\nexecution",
      "expectedOutput": "5",
      "weight": 1
    },
    {
      "input": "\na",
      "expectedOutput": "1",
      "weight": 1
    }
  ],
  "timeLimitMs": 2000,
  "memoryLimitMb": 256,
  "hints": [
    "Levenshtein distance: dp[i][j] = 1 + min(insert, delete, replace)."
  ],
  "editorial": {
    "solutionMarkdown": "### Optimal Solution\\nStandard Levenshtein matrix: dp[i][j] = dp[i-1][j-1] if match else 1 + min(dp[i-1][j], dp[i][j-1], dp[i-1][j-1]).",
    "complexityAnalysis": "Time: O(M * N), Space: O(min(M, N))"
  },
  "isGlobal": true,
  "status": "PUBLISHED"
},
  {
  "title": "Interleaving String",
  "slug": "interleaving-string",
  "description": "Given strings `s1`, `s2`, and `s3`, find whether `s3` is formed by an **interleaving** of `s1` and `s2`.\\n\\n### Example 1:\\n```\\nInput: aabcc\ndbbca\naadbbcbcac\\nOutput: true\\nExplanation: 'aabcc' and 'dbbca' interleave to form 'aadbbcbcac'.\\n```\\n\\n### Example 2:\\n```\\nInput: aabcc\ndbbca\naadbbbaccc\\nOutput: false\\nExplanation: Characters cannot be interleaved in order.\\n```",
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
      "frequencyCount": 33,
      "sourceNote": "Apple Practice Bank #49"
    }
  ],
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
      "boilerplate": "function interleavingString(...args) {\n    // TODO: Implement solution for Interleaving String\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try {\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(interleavingString(...parsed)));\n    } catch (e) {\n        console.log(interleavingString(...lines));\n    }\n}\n"
    },
    {
      "language": "cpp",
      "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\n// Solution for Interleaving String\nclass Solution {\npublic:\n    void solve() {\n        // Write your solution here\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    // Driver reading from standard input\n    string line;\n    while (getline(cin, line)) {\n        if (!line.empty()) {\n            // Process input line\n        }\n    }\n    return 0;\n}\n"
    },
    {
      "language": "java",
      "boilerplate": "import java.util.*;\n\npublic class Solution {\n    // Solution for Interleaving String\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        while (sc.hasNextLine()) {\n            String line = sc.nextLine();\n            if (!line.trim().isEmpty()) {\n                // Process testcase line\n            }\n        }\n        sc.close();\n    }\n}\n"
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
      "expectedOutput": "true",
      "weight": 1
    },
    {
      "input": "aabcc\ndbbca\naadbbbaccc",
      "expectedOutput": "false",
      "weight": 1
    },
    {
      "input": "\n\n",
      "expectedOutput": "true",
      "weight": 1
    }
  ],
  "timeLimitMs": 2000,
  "memoryLimitMb": 256,
  "hints": [
    "dp[i][j] = (dp[i-1][j] and s1[i-1] == s3[i+j-1]) or (dp[i][j-1] and s2[j-1] == s3[i+j-1])."
  ],
  "editorial": {
    "solutionMarkdown": "### Optimal Solution\\n2D grid state tracking valid character matching prefixes from s1 and s2.",
    "complexityAnalysis": "Time: O(M * N), Space: O(min(M, N))"
  },
  "isGlobal": true,
  "status": "PUBLISHED"
},
  {
  "title": "Partition Equal Subset Sum",
  "slug": "partition-equal-subset-sum",
  "description": "Given an integer array `nums`, return `true` if you can partition the array into two subsets such that the sum of the elements in both subsets is equal or `false` otherwise.\\n\\n### Example 1:\\n```\\nInput: [1,5,11,5]\\nOutput: true\\nExplanation: Array can be partitioned as [1, 5, 5] and [11].\\n```\\n\\n### Example 2:\\n```\\nInput: [1,2,3,5]\\nOutput: false\\nExplanation: Total sum is 11 (odd), cannot partition.\\n```",
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
      "frequencyCount": 41,
      "sourceNote": "Apple Practice Bank #50"
    }
  ],
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
      "boilerplate": "function partitionEqualSubsetSum(...args) {\n    // TODO: Implement solution for Partition Equal Subset Sum\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try {\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(partitionEqualSubsetSum(...parsed)));\n    } catch (e) {\n        console.log(partitionEqualSubsetSum(...lines));\n    }\n}\n"
    },
    {
      "language": "cpp",
      "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\n// Solution for Partition Equal Subset Sum\nclass Solution {\npublic:\n    void solve() {\n        // Write your solution here\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    // Driver reading from standard input\n    string line;\n    while (getline(cin, line)) {\n        if (!line.empty()) {\n            // Process input line\n        }\n    }\n    return 0;\n}\n"
    },
    {
      "language": "java",
      "boilerplate": "import java.util.*;\n\npublic class Solution {\n    // Solution for Partition Equal Subset Sum\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        while (sc.hasNextLine()) {\n            String line = sc.nextLine();\n            if (!line.trim().isEmpty()) {\n                // Process testcase line\n            }\n        }\n        sc.close();\n    }\n}\n"
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
      "expectedOutput": "true",
      "weight": 1
    },
    {
      "input": "[1,2,3,5]",
      "expectedOutput": "false",
      "weight": 1
    },
    {
      "input": "[2,2]",
      "expectedOutput": "true",
      "weight": 1
    }
  ],
  "timeLimitMs": 2000,
  "memoryLimitMb": 256,
  "hints": [
    "If total sum is odd return false. Reduce to 0/1 knapsack subset sum with target = total / 2."
  ],
  "editorial": {
    "solutionMarkdown": "### Optimal Solution\\n0/1 Knapsack bitset / boolean array of size target+1. Iterate backwards from target down to num.",
    "complexityAnalysis": "Time: O(N * Target), Space: O(Target)"
  },
  "isGlobal": true,
  "status": "PUBLISHED"
},
];
