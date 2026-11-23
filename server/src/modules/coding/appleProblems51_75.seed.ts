/* eslint-disable */
// Auto-generated Apple Interview Catalog - 100 DSA/CP/DP Problems
export const apple51_75 = [
  {
  "title": "Number of Provinces",
  "slug": "number-of-provinces",
  "description": "There are `n` cities. Some of them are connected, while some are not. A province is a group of directly or indirectly connected cities and no other cities outside the group.\n\nGiven an `n x n` matrix `isConnected` where `isConnected[i][j] = 1` if city `i` and `j` are directly connected, return *the total number of provinces*.\\n\\n### Example 1:\\n```\\nInput: [[1,1,0],[1,1,0],[0,0,1]]\\nOutput: 2\\nExplanation: Cities 0 and 1 form 1 province, city 2 forms another.\\n```\\n\\n### Example 2:\\n```\\nInput: [[1,0,0],[0,1,0],[0,0,1]]\\nOutput: 3\\nExplanation: 3 isolated cities.\\n```",
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
      "frequencyCount": 38,
      "sourceNote": "Apple Practice Bank #51"
    }
  ],
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
      "boilerplate": "function numberOfProvinces(...args) {\n    // TODO: Implement solution for Number of Provinces\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try {\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(numberOfProvinces(...parsed)));\n    } catch (e) {\n        console.log(numberOfProvinces(...lines));\n    }\n}\n"
    },
    {
      "language": "cpp",
      "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\n// Solution for Number of Provinces\nclass Solution {\npublic:\n    void solve() {\n        // Write your solution here\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    // Driver reading from standard input\n    string line;\n    while (getline(cin, line)) {\n        if (!line.empty()) {\n            // Process input line\n        }\n    }\n    return 0;\n}\n"
    },
    {
      "language": "java",
      "boilerplate": "import java.util.*;\n\npublic class Solution {\n    // Solution for Number of Provinces\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        while (sc.hasNextLine()) {\n            String line = sc.nextLine();\n            if (!line.trim().isEmpty()) {\n                // Process testcase line\n            }\n        }\n        sc.close();\n    }\n}\n"
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
      "expectedOutput": "2",
      "weight": 1
    },
    {
      "input": "[[1,0,0],[0,1,0],[0,0,1]]",
      "expectedOutput": "3",
      "weight": 1
    },
    {
      "input": "[[1]]",
      "expectedOutput": "1",
      "weight": 1
    }
  ],
  "timeLimitMs": 2000,
  "memoryLimitMb": 256,
  "hints": [
    "Count connected components using DFS/BFS or Disjoint Set Union (Union Find)."
  ],
  "editorial": {
    "solutionMarkdown": "### Optimal Solution\\nIterate nodes 0..n-1 with visited set, run DFS to mark entire province, increment count.",
    "complexityAnalysis": "Time: O(N^2), Space: O(N)"
  },
  "isGlobal": true,
  "status": "PUBLISHED"
},
  {
  "title": "Clone Graph",
  "slug": "clone-graph",
  "description": "Given a reference of a node in a **connected** undirected graph. Return a **deep copy** (clone) of the graph.\\n\\n### Example 1:\\n```\\nInput: [[2,4],[1,3],[2,4],[1,3]]\\nOutput: [[2, 4], [1, 3], [2, 4], [1, 3]]\\nExplanation: Graph cloned with identical structure.\\n```\\n\\n### Example 2:\\n```\\nInput: [[]]\\nOutput: [[]]\\nExplanation: Node with 0 neighbors.\\n```",
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
      "frequencyCount": 42,
      "sourceNote": "Apple Practice Bank #52"
    }
  ],
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
      "boilerplate": "function cloneGraph(...args) {\n    // TODO: Implement solution for Clone Graph\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try {\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(cloneGraph(...parsed)));\n    } catch (e) {\n        console.log(cloneGraph(...lines));\n    }\n}\n"
    },
    {
      "language": "cpp",
      "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\n// Solution for Clone Graph\nclass Solution {\npublic:\n    void solve() {\n        // Write your solution here\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    // Driver reading from standard input\n    string line;\n    while (getline(cin, line)) {\n        if (!line.empty()) {\n            // Process input line\n        }\n    }\n    return 0;\n}\n"
    },
    {
      "language": "java",
      "boilerplate": "import java.util.*;\n\npublic class Solution {\n    // Solution for Clone Graph\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        while (sc.hasNextLine()) {\n            String line = sc.nextLine();\n            if (!line.trim().isEmpty()) {\n                // Process testcase line\n            }\n        }\n        sc.close();\n    }\n}\n"
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
      "expectedOutput": "[[2, 4], [1, 3], [2, 4], [1, 3]]",
      "weight": 1
    },
    {
      "input": "[[]]",
      "expectedOutput": "[[]]",
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
    "Use a hash map mapping original node pointer to clone node pointer."
  ],
  "editorial": {
    "solutionMarkdown": "### Optimal Solution\\nDFS/BFS with map {old_node: new_node}. Clone neighbors recursively.",
    "complexityAnalysis": "Time: O(V + E), Space: O(V)"
  },
  "isGlobal": true,
  "status": "PUBLISHED"
},
  {
  "title": "Rotting Oranges",
  "slug": "rotting-oranges",
  "description": "You are given an `m x n` `grid` where each cell can have one of three values: `0` empty, `1` fresh orange, or `2` rotten orange. Every minute, any fresh orange that is 4-directionally adjacent to a rotten orange becomes rotten.\n\nReturn the minimum number of minutes that must elapse until no cell has a fresh orange. If this is impossible, return `-1`.\\n\\n### Example 1:\\n```\\nInput: [[2,1,1],[1,1,0],[0,1,1]]\\nOutput: 4\\nExplanation: All oranges rotten in 4 minutes.\\n```\\n\\n### Example 2:\\n```\\nInput: [[2,1,1],[0,1,1],[1,0,1]]\\nOutput: -1\\nExplanation: Orange in bottom left corner can never rot.\\n```",
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
      "frequencyCount": 46,
      "sourceNote": "Apple Practice Bank #53"
    }
  ],
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
      "boilerplate": "function rottingOranges(...args) {\n    // TODO: Implement solution for Rotting Oranges\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try {\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(rottingOranges(...parsed)));\n    } catch (e) {\n        console.log(rottingOranges(...lines));\n    }\n}\n"
    },
    {
      "language": "cpp",
      "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\n// Solution for Rotting Oranges\nclass Solution {\npublic:\n    void solve() {\n        // Write your solution here\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    // Driver reading from standard input\n    string line;\n    while (getline(cin, line)) {\n        if (!line.empty()) {\n            // Process input line\n        }\n    }\n    return 0;\n}\n"
    },
    {
      "language": "java",
      "boilerplate": "import java.util.*;\n\npublic class Solution {\n    // Solution for Rotting Oranges\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        while (sc.hasNextLine()) {\n            String line = sc.nextLine();\n            if (!line.trim().isEmpty()) {\n                // Process testcase line\n            }\n        }\n        sc.close();\n    }\n}\n"
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
      "expectedOutput": "4",
      "weight": 1
    },
    {
      "input": "[[2,1,1],[0,1,1],[1,0,1]]",
      "expectedOutput": "-1",
      "weight": 1
    },
    {
      "input": "[[0,2]]",
      "expectedOutput": "0",
      "weight": 1
    }
  ],
  "timeLimitMs": 2000,
  "memoryLimitMb": 256,
  "hints": [
    "Multi-source BFS: add all rotten oranges (2) into queue initially and track fresh orange count."
  ],
  "editorial": {
    "solutionMarkdown": "### Optimal Solution\\nMulti-source BFS expands level by level (minutes). If fresh count > 0 at end, return -1.",
    "complexityAnalysis": "Time: O(M * N), Space: O(M * N)"
  },
  "isGlobal": true,
  "status": "PUBLISHED"
},
  {
  "title": "Pacific Atlantic Water Flow",
  "slug": "pacific-atlantic-water-flow",
  "description": "There is an `m x n` rectangular island that borders both the Pacific Ocean and Atlantic Ocean. Water can only flow from cells to height equal or lower.\n\nReturn a 2D list of grid coordinates `result` where `result[i] = [ri, ci]` denotes that rain water can flow from `(ri, ci)` to **both** oceans.\\n\\n### Example 1:\\n```\\nInput: [[1,2,2,3,5],[3,2,3,4,4],[2,4,5,3,1],[6,7,1,4,5],[5,1,1,2,4]]\\nOutput: [[0, 4], [1, 3], [1, 4], [2, 2], [3, 0], [3, 1], [4, 0]]\\nExplanation: Coordinates that can reach both Pacific and Atlantic oceans.\\n```\\n\\n### Example 2:\\n```\\nInput: [[1]]\\nOutput: [[0, 0]]\\nExplanation: Single cell connects to both oceans.\\n```",
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
      "frequencyCount": 35,
      "sourceNote": "Apple Practice Bank #54"
    }
  ],
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
      "boilerplate": "function pacificAtlanticWaterFlow(...args) {\n    // TODO: Implement solution for Pacific Atlantic Water Flow\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try {\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(pacificAtlanticWaterFlow(...parsed)));\n    } catch (e) {\n        console.log(pacificAtlanticWaterFlow(...lines));\n    }\n}\n"
    },
    {
      "language": "cpp",
      "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\n// Solution for Pacific Atlantic Water Flow\nclass Solution {\npublic:\n    void solve() {\n        // Write your solution here\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    // Driver reading from standard input\n    string line;\n    while (getline(cin, line)) {\n        if (!line.empty()) {\n            // Process input line\n        }\n    }\n    return 0;\n}\n"
    },
    {
      "language": "java",
      "boilerplate": "import java.util.*;\n\npublic class Solution {\n    // Solution for Pacific Atlantic Water Flow\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        while (sc.hasNextLine()) {\n            String line = sc.nextLine();\n            if (!line.trim().isEmpty()) {\n                // Process testcase line\n            }\n        }\n        sc.close();\n    }\n}\n"
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
      "expectedOutput": "[[0, 4], [1, 3], [1, 4], [2, 2], [3, 0], [3, 1], [4, 0]]",
      "weight": 1
    },
    {
      "input": "[[1]]",
      "expectedOutput": "[[0, 0]]",
      "weight": 1
    }
  ],
  "timeLimitMs": 2000,
  "memoryLimitMb": 256,
  "hints": [
    "Start DFS backwards from ocean edges: Pacific (top/left) and Atlantic (bottom/right). Find intersection of visited sets."
  ],
  "editorial": {
    "solutionMarkdown": "### Optimal Solution\\nReverse water flow starting from ocean borders moving only to cells of >= height.",
    "complexityAnalysis": "Time: O(M * N), Space: O(M * N)"
  },
  "isGlobal": true,
  "status": "PUBLISHED"
},
  {
  "title": "Word Ladder",
  "slug": "word-ladder",
  "description": "A transformation sequence from word `beginWord` to word `endWord` using a dictionary `wordList` is a sequence of words `beginWord -> s1 -> s2 -> ... -> sk` such that each adjacent pair differs by a single letter.\n\nReturn *the number of words in the shortest transformation sequence*, or `0` if no such sequence exists.\\n\\n### Example 1:\\n```\\nInput: hit\ncog\n[\"hot\",\"dot\",\"dog\",\"lot\",\"log\",\"cog\"]\\nOutput: 5\\nExplanation: hit -> hot -> dot -> dog -> cog (5 words).\\n```\\n\\n### Example 2:\\n```\\nInput: hit\ncog\n[\"hot\",\"dot\",\"dog\",\"lot\",\"log\"]\\nOutput: 0\\nExplanation: endWord 'cog' is not in wordList.\\n```",
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
      "frequencyCount": 44,
      "sourceNote": "Apple Practice Bank #55"
    }
  ],
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
      "boilerplate": "function wordLadder(...args) {\n    // TODO: Implement solution for Word Ladder\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try {\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(wordLadder(...parsed)));\n    } catch (e) {\n        console.log(wordLadder(...lines));\n    }\n}\n"
    },
    {
      "language": "cpp",
      "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\n// Solution for Word Ladder\nclass Solution {\npublic:\n    void solve() {\n        // Write your solution here\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    // Driver reading from standard input\n    string line;\n    while (getline(cin, line)) {\n        if (!line.empty()) {\n            // Process input line\n        }\n    }\n    return 0;\n}\n"
    },
    {
      "language": "java",
      "boilerplate": "import java.util.*;\n\npublic class Solution {\n    // Solution for Word Ladder\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        while (sc.hasNextLine()) {\n            String line = sc.nextLine();\n            if (!line.trim().isEmpty()) {\n                // Process testcase line\n            }\n        }\n        sc.close();\n    }\n}\n"
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
      "expectedOutput": "5",
      "weight": 1
    },
    {
      "input": "hit\ncog\n[\"hot\",\"dot\",\"dog\",\"lot\",\"log\"]",
      "expectedOutput": "0",
      "weight": 1
    }
  ],
  "timeLimitMs": 2000,
  "memoryLimitMb": 256,
  "hints": [
    "Bidirectional BFS or BFS with wildcard intermediate states like 'h*t'."
  ],
  "editorial": {
    "solutionMarkdown": "### Optimal Solution\\nBFS shortest path on word graph. Intermediate generic patterns optimize neighbor generation.",
    "complexityAnalysis": "Time: O(M^2 * N) where M is word length and N is dictionary size, Space: O(M * N)"
  },
  "isGlobal": true,
  "status": "PUBLISHED"
},
  {
  "title": "Accounts Merge",
  "slug": "accounts-merge",
  "description": "Given a list of `accounts` where each element `accounts[i]` is a list of strings, the first element `accounts[i][0]` is a name, and the rest are emails representing that account. Merge accounts that share common emails.\\n\\n### Example 1:\\n```\\nInput: [[\"John\",\"johnsmith@mail.com\",\"john_newyork@mail.com\"],[\"John\",\"johnsmith@mail.com\",\"john00@mail.com\"],[\"Mary\",\"mary@mail.com\"],[\"John\",\"johnnybravo@mail.com\"]]\\nOutput: [[\"John\", \"john00@mail.com\", \"john_newyork@mail.com\", \"johnsmith@mail.com\"], [\"Mary\", \"mary@mail.com\"], [\"John\", \"johnnybravo@mail.com\"]]\\nExplanation: The two Johns with johnsmith@mail.com are merged.\\n```\\n\\n### Example 2:\\n```\\nInput: [[\"Gabe\",\"Gabe0@m.co\",\"Gabe3@m.co\",\"Gabe1@m.co\"],[\"Kevin\",\"Kevin3@m.co\",\"Kevin5@m.co\",\"Kevin0@m.co\"],[\"Ethan\",\"Ethan5@m.co\",\"Ethan4@m.co\",\"Ethan0@m.co\"],[\"Hanzo\",\"Hanzo3@m.co\",\"Hanzo1@m.co\",\"Hanzo0@m.co\"],[\"Fern\",\"Fern5@m.co\",\"Fern1@m.co\",\"Fern0@m.co\"]]\\nOutput: [[\"Ethan\", \"Ethan0@m.co\", \"Ethan4@m.co\", \"Ethan5@m.co\"], [\"Fern\", \"Fern0@m.co\", \"Fern1@m.co\", \"Fern5@m.co\"], [\"Gabe\", \"Gabe0@m.co\", \"Gabe1@m.co\", \"Gabe3@m.co\"], [\"Hanzo\", \"Hanzo0@m.co\", \"Hanzo1@m.co\", \"Hanzo3@m.co\"], [\"Kevin\", \"Kevin0@m.co\", \"Kevin3@m.co\", \"Kevin5@m.co\"]]\\nExplanation: Accounts with disjoint emails kept separate.\\n```",
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
      "frequencyCount": 39,
      "sourceNote": "Apple Practice Bank #56"
    }
  ],
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
      "boilerplate": "function accountsMerge(...args) {\n    // TODO: Implement solution for Accounts Merge\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try {\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(accountsMerge(...parsed)));\n    } catch (e) {\n        console.log(accountsMerge(...lines));\n    }\n}\n"
    },
    {
      "language": "cpp",
      "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\n// Solution for Accounts Merge\nclass Solution {\npublic:\n    void solve() {\n        // Write your solution here\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    // Driver reading from standard input\n    string line;\n    while (getline(cin, line)) {\n        if (!line.empty()) {\n            // Process input line\n        }\n    }\n    return 0;\n}\n"
    },
    {
      "language": "java",
      "boilerplate": "import java.util.*;\n\npublic class Solution {\n    // Solution for Accounts Merge\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        while (sc.hasNextLine()) {\n            String line = sc.nextLine();\n            if (!line.trim().isEmpty()) {\n                // Process testcase line\n            }\n        }\n        sc.close();\n    }\n}\n"
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
      "expectedOutput": "[[\"John\", \"john00@mail.com\", \"john_newyork@mail.com\", \"johnsmith@mail.com\"], [\"Mary\", \"mary@mail.com\"], [\"John\", \"johnnybravo@mail.com\"]]",
      "weight": 1
    }
  ],
  "timeLimitMs": 2000,
  "memoryLimitMb": 256,
  "hints": [
    "Use Disjoint Set Union (DSU) to union emails belonging to the same account."
  ],
  "editorial": {
    "solutionMarkdown": "### Optimal Solution\\nUnion-find connects email parents. Group emails by root and sort lexicographically.",
    "complexityAnalysis": "Time: O(N * K log(N * K)), Space: O(N * K)"
  },
  "isGlobal": true,
  "status": "PUBLISHED"
},
  {
  "title": "Network Delay Time",
  "slug": "network-delay-time",
  "description": "You are given a network of `n` nodes, labeled from `1` to `n`. You are also given `times`, a list of travel times as directed edges `times[i] = (ui, vi, wi)`. Return *the minimum time it takes for all the `n` nodes to receive the signal* from node `k`. If it is impossible, return `-1`.\\n\\n### Example 1:\\n```\\nInput: [[2,1,1],[2,3,1],[3,4,1]]\n4\n2\\nOutput: 2\\nExplanation: Signal reaches all nodes in 2 time units.\\n```\\n\\n### Example 2:\\n```\\nInput: [[1,2,1]]\n2\n1\\nOutput: 1\\nExplanation: Direct edge delay 1.\\n```",
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
      "frequencyCount": 34,
      "sourceNote": "Apple Practice Bank #57"
    }
  ],
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
      "boilerplate": "function networkDelayTime(...args) {\n    // TODO: Implement solution for Network Delay Time\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try {\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(networkDelayTime(...parsed)));\n    } catch (e) {\n        console.log(networkDelayTime(...lines));\n    }\n}\n"
    },
    {
      "language": "cpp",
      "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\n// Solution for Network Delay Time\nclass Solution {\npublic:\n    void solve() {\n        // Write your solution here\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    // Driver reading from standard input\n    string line;\n    while (getline(cin, line)) {\n        if (!line.empty()) {\n            // Process input line\n        }\n    }\n    return 0;\n}\n"
    },
    {
      "language": "java",
      "boilerplate": "import java.util.*;\n\npublic class Solution {\n    // Solution for Network Delay Time\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        while (sc.hasNextLine()) {\n            String line = sc.nextLine();\n            if (!line.trim().isEmpty()) {\n                // Process testcase line\n            }\n        }\n        sc.close();\n    }\n}\n"
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
      "expectedOutput": "2",
      "weight": 1
    },
    {
      "input": "[[1,2,1]]\n2\n1",
      "expectedOutput": "1",
      "weight": 1
    },
    {
      "input": "[[1,2,1]]\n2\n2",
      "expectedOutput": "-1",
      "weight": 1
    }
  ],
  "timeLimitMs": 2000,
  "memoryLimitMb": 256,
  "hints": [
    "Run Dijkstra's shortest path algorithm using a Min-Heap."
  ],
  "editorial": {
    "solutionMarkdown": "### Optimal Solution\\nDijkstra with priority queue. Return max distance in dist table or -1 if any node unreached.",
    "complexityAnalysis": "Time: O(E log V), Space: O(V + E)"
  },
  "isGlobal": true,
  "status": "PUBLISHED"
},
  {
  "title": "Find if Path Exists in Graph",
  "slug": "find-if-path-exists-in-graph",
  "description": "There is a bi-directional graph with `n` vertices, where each vertex is labeled from `0` to `n - 1`. Given `edges` and integers `source` and `destination`, return `true` if there is a valid path from `source` to `destination`, or `false` otherwise.\\n\\n### Example 1:\\n```\\nInput: 3\n[[0,1],[1,2],[2,0]]\n0\n2\\nOutput: true\\nExplanation: Path 0 -> 1 -> 2 exists.\\n```\\n\\n### Example 2:\\n```\\nInput: 6\n[[0,1],[0,2],[3,5],[5,4],[4,3]]\n0\n5\\nOutput: false\\nExplanation: No path between component {0,1,2} and {3,4,5}.\\n```",
  "difficulty": "EASY",
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
      "frequencyCount": 30,
      "sourceNote": "Apple Practice Bank #58"
    }
  ],
  "supportedLanguages": [
    "python",
    "javascript",
    "cpp",
    "java"
  ],
  "starterCode": [
    {
      "language": "python",
      "boilerplate": "def findIfPathExistsInGraph(*args):\n    # TODO: Implement solution for Find if Path Exists in Graph\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = findIfPathExistsInGraph(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(findIfPathExistsInGraph(*input_data))\n"
    },
    {
      "language": "javascript",
      "boilerplate": "function findIfPathExistsInGraph(...args) {\n    // TODO: Implement solution for Find if Path Exists in Graph\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try {\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(findIfPathExistsInGraph(...parsed)));\n    } catch (e) {\n        console.log(findIfPathExistsInGraph(...lines));\n    }\n}\n"
    },
    {
      "language": "cpp",
      "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\n// Solution for Find if Path Exists in Graph\nclass Solution {\npublic:\n    void solve() {\n        // Write your solution here\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    // Driver reading from standard input\n    string line;\n    while (getline(cin, line)) {\n        if (!line.empty()) {\n            // Process input line\n        }\n    }\n    return 0;\n}\n"
    },
    {
      "language": "java",
      "boilerplate": "import java.util.*;\n\npublic class Solution {\n    // Solution for Find if Path Exists in Graph\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        while (sc.hasNextLine()) {\n            String line = sc.nextLine();\n            if (!line.trim().isEmpty()) {\n                // Process testcase line\n            }\n        }\n        sc.close();\n    }\n}\n"
    }
  ],
  "sampleTestCases": [
    {
      "input": "3\n[[0,1],[1,2],[2,0]]\n0\n2",
      "output": "true",
      "explanation": "Path 0 -> 1 -> 2 exists."
    },
    {
      "input": "6\n[[0,1],[0,2],[3,5],[5,4],[4,3]]\n0\n5",
      "output": "false",
      "explanation": "No path between component {0,1,2} and {3,4,5}."
    }
  ],
  "hiddenTestCases": [
    {
      "input": "3\n[[0,1],[1,2],[2,0]]\n0\n2",
      "expectedOutput": "true",
      "weight": 1
    },
    {
      "input": "6\n[[0,1],[0,2],[3,5],[5,4],[4,3]]\n0\n5",
      "expectedOutput": "false",
      "weight": 1
    }
  ],
  "timeLimitMs": 2000,
  "memoryLimitMb": 256,
  "hints": [
    "Use BFS/DFS traversal or Disjoint Set Union (find(source) == find(dest))."
  ],
  "editorial": {
    "solutionMarkdown": "### Optimal Solution\\nUnion-find or BFS search from source to destination.",
    "complexityAnalysis": "Time: O(V + E), Space: O(V + E)"
  },
  "isGlobal": true,
  "status": "PUBLISHED"
},
  {
  "title": "Binary Tree Level Order Traversal",
  "slug": "binary-tree-level-order-traversal",
  "description": "Given the `root` of a binary tree, return *the level order traversal of its nodes' values*. (i.e., from left to right, level by level).\\n\\n### Example 1:\\n```\\nInput: [3,9,20,null,null,15,7]\\nOutput: [[3], [9, 20], [15, 7]]\\nExplanation: Level 0: [3], Level 1: [9,20], Level 2: [15,7].\\n```\\n\\n### Example 2:\\n```\\nInput: [1]\\nOutput: [[1]]\\nExplanation: Single node tree.\\n```",
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
      "frequencyCount": 47,
      "sourceNote": "Apple Practice Bank #59"
    }
  ],
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
      "boilerplate": "function binaryTreeLevelOrderTraversal(...args) {\n    // TODO: Implement solution for Binary Tree Level Order Traversal\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try {\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(binaryTreeLevelOrderTraversal(...parsed)));\n    } catch (e) {\n        console.log(binaryTreeLevelOrderTraversal(...lines));\n    }\n}\n"
    },
    {
      "language": "cpp",
      "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\n// Solution for Binary Tree Level Order Traversal\nclass Solution {\npublic:\n    void solve() {\n        // Write your solution here\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    // Driver reading from standard input\n    string line;\n    while (getline(cin, line)) {\n        if (!line.empty()) {\n            // Process input line\n        }\n    }\n    return 0;\n}\n"
    },
    {
      "language": "java",
      "boilerplate": "import java.util.*;\n\npublic class Solution {\n    // Solution for Binary Tree Level Order Traversal\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        while (sc.hasNextLine()) {\n            String line = sc.nextLine();\n            if (!line.trim().isEmpty()) {\n                // Process testcase line\n            }\n        }\n        sc.close();\n    }\n}\n"
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
      "expectedOutput": "[[3], [9, 20], [15, 7]]",
      "weight": 1
    },
    {
      "input": "[1]",
      "expectedOutput": "[[1]]",
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
    "Queue BFS: iterate level by level using queue length."
  ],
  "editorial": {
    "solutionMarkdown": "### Optimal Solution\\nBFS queue processing node count at each level before pushing children.",
    "complexityAnalysis": "Time: O(N), Space: O(N)"
  },
  "isGlobal": true,
  "status": "PUBLISHED"
},
  {
  "title": "Validate Binary Search Tree",
  "slug": "validate-binary-search-tree",
  "description": "Given the `root` of a binary tree, *determine if it is a valid binary search tree (BST)*.\\n\\n### Example 1:\\n```\\nInput: [2,1,3]\\nOutput: true\\nExplanation: Left child 1 < 2 < right child 3.\\n```\\n\\n### Example 2:\\n```\\nInput: [5,1,4,null,null,3,6]\\nOutput: false\\nExplanation: The root node's value is 5 but its right child's value is 4.\\n```",
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
      "frequencyCount": 50,
      "sourceNote": "Apple Practice Bank #60"
    }
  ],
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
      "boilerplate": "function validateBinarySearchTree(...args) {\n    // TODO: Implement solution for Validate Binary Search Tree\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try {\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(validateBinarySearchTree(...parsed)));\n    } catch (e) {\n        console.log(validateBinarySearchTree(...lines));\n    }\n}\n"
    },
    {
      "language": "cpp",
      "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\n// Solution for Validate Binary Search Tree\nclass Solution {\npublic:\n    void solve() {\n        // Write your solution here\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    // Driver reading from standard input\n    string line;\n    while (getline(cin, line)) {\n        if (!line.empty()) {\n            // Process input line\n        }\n    }\n    return 0;\n}\n"
    },
    {
      "language": "java",
      "boilerplate": "import java.util.*;\n\npublic class Solution {\n    // Solution for Validate Binary Search Tree\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        while (sc.hasNextLine()) {\n            String line = sc.nextLine();\n            if (!line.trim().isEmpty()) {\n                // Process testcase line\n            }\n        }\n        sc.close();\n    }\n}\n"
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
      "expectedOutput": "true",
      "weight": 1
    },
    {
      "input": "[5,1,4,null,null,3,6]",
      "expectedOutput": "false",
      "weight": 1
    },
    {
      "input": "[2,2,2]",
      "expectedOutput": "false",
      "weight": 1
    }
  ],
  "timeLimitMs": 2000,
  "memoryLimitMb": 256,
  "hints": [
    "Pass down valid range (minVal, maxVal) recursively, or verify that Inorder traversal is strictly increasing."
  ],
  "editorial": {
    "solutionMarkdown": "### Optimal Solution\\nRecursively check low < node.val < high, updating bounds for left and right subtrees.",
    "complexityAnalysis": "Time: O(N), Space: O(H) where H is tree height"
  },
  "isGlobal": true,
  "status": "PUBLISHED"
},
  {
  "title": "Lowest Common Ancestor of a Binary Tree",
  "slug": "lowest-common-ancestor-of-a-binary-tree",
  "description": "Given a binary tree, find the lowest common ancestor (LCA) of two given nodes `p` and `q`.\\n\\n### Example 1:\\n```\\nInput: [3,5,1,6,2,0,8,null,null,7,4]\n5\n1\\nOutput: 3\\nExplanation: The LCA of nodes 5 and 1 is 3.\\n```\\n\\n### Example 2:\\n```\\nInput: [3,5,1,6,2,0,8,null,null,7,4]\n5\n4\\nOutput: 5\\nExplanation: The LCA of nodes 5 and 4 is 5, since a node can be a descendant of itself.\\n```",
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
      "frequencyCount": 48,
      "sourceNote": "Apple Practice Bank #61"
    }
  ],
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
      "boilerplate": "function lowestCommonAncestorOfABinaryTree(...args) {\n    // TODO: Implement solution for Lowest Common Ancestor of a Binary Tree\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try {\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(lowestCommonAncestorOfABinaryTree(...parsed)));\n    } catch (e) {\n        console.log(lowestCommonAncestorOfABinaryTree(...lines));\n    }\n}\n"
    },
    {
      "language": "cpp",
      "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\n// Solution for Lowest Common Ancestor of a Binary Tree\nclass Solution {\npublic:\n    void solve() {\n        // Write your solution here\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    // Driver reading from standard input\n    string line;\n    while (getline(cin, line)) {\n        if (!line.empty()) {\n            // Process input line\n        }\n    }\n    return 0;\n}\n"
    },
    {
      "language": "java",
      "boilerplate": "import java.util.*;\n\npublic class Solution {\n    // Solution for Lowest Common Ancestor of a Binary Tree\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        while (sc.hasNextLine()) {\n            String line = sc.nextLine();\n            if (!line.trim().isEmpty()) {\n                // Process testcase line\n            }\n        }\n        sc.close();\n    }\n}\n"
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
      "expectedOutput": "3",
      "weight": 1
    },
    {
      "input": "[3,5,1,6,2,0,8,null,null,7,4]\n5\n4",
      "expectedOutput": "5",
      "weight": 1
    }
  ],
  "timeLimitMs": 2000,
  "memoryLimitMb": 256,
  "hints": [
    "If root is p or q or null return root. If both left and right recursion return non-null, root is LCA."
  ],
  "editorial": {
    "solutionMarkdown": "### Optimal Solution\\nPost-order DFS returning matching nodes. If both subtrees return targets, current node is LCA.",
    "complexityAnalysis": "Time: O(N), Space: O(H)"
  },
  "isGlobal": true,
  "status": "PUBLISHED"
},
  {
  "title": "Serialize and Deserialize Binary Tree",
  "slug": "serialize-and-deserialize-binary-tree",
  "description": "Serialization is the process of converting a data structure or object into a sequence of bits so that it can be stored in a file or memory buffer. Design an algorithm to serialize and deserialize a binary tree.\\n\\n### Example 1:\\n```\\nInput: [1,2,3,null,null,4,5]\\nOutput: [1, 2, 3, null, null, 4, 5]\\nExplanation: Tree preserved identically through serialize and deserialize roundtrip.\\n```\\n\\n### Example 2:\\n```\\nInput: []\\nOutput: []\\nExplanation: Empty tree.\\n```",
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
      "frequencyCount": 41,
      "sourceNote": "Apple Practice Bank #62"
    }
  ],
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
      "boilerplate": "function serializeAndDeserializeBinaryTree(...args) {\n    // TODO: Implement solution for Serialize and Deserialize Binary Tree\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try {\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(serializeAndDeserializeBinaryTree(...parsed)));\n    } catch (e) {\n        console.log(serializeAndDeserializeBinaryTree(...lines));\n    }\n}\n"
    },
    {
      "language": "cpp",
      "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\n// Solution for Serialize and Deserialize Binary Tree\nclass Solution {\npublic:\n    void solve() {\n        // Write your solution here\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    // Driver reading from standard input\n    string line;\n    while (getline(cin, line)) {\n        if (!line.empty()) {\n            // Process input line\n        }\n    }\n    return 0;\n}\n"
    },
    {
      "language": "java",
      "boilerplate": "import java.util.*;\n\npublic class Solution {\n    // Solution for Serialize and Deserialize Binary Tree\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        while (sc.hasNextLine()) {\n            String line = sc.nextLine();\n            if (!line.trim().isEmpty()) {\n                // Process testcase line\n            }\n        }\n        sc.close();\n    }\n}\n"
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
      "expectedOutput": "[1, 2, 3, null, null, 4, 5]",
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
    "Use preorder traversal with 'null' markers, or level-order BFS traversal."
  ],
  "editorial": {
    "solutionMarkdown": "### Optimal Solution\\nPreorder string serialization using delimiter and recursive iterator reconstruction.",
    "complexityAnalysis": "Time: O(N), Space: O(N)"
  },
  "isGlobal": true,
  "status": "PUBLISHED"
},
  {
  "title": "Maximum Depth of Binary Tree",
  "slug": "maximum-depth-of-binary-tree",
  "description": "Given the `root` of a binary tree, return *its maximum depth*.\\n\\n### Example 1:\\n```\\nInput: [3,9,20,null,null,15,7]\\nOutput: 3\\nExplanation: Longest root-to-leaf path depth is 3.\\n```\\n\\n### Example 2:\\n```\\nInput: [1,null,2]\\nOutput: 2\\nExplanation: Depth is 2.\\n```",
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
      "frequencyCount": 40,
      "sourceNote": "Apple Practice Bank #63"
    }
  ],
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
      "boilerplate": "function maximumDepthOfBinaryTree(...args) {\n    // TODO: Implement solution for Maximum Depth of Binary Tree\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try {\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(maximumDepthOfBinaryTree(...parsed)));\n    } catch (e) {\n        console.log(maximumDepthOfBinaryTree(...lines));\n    }\n}\n"
    },
    {
      "language": "cpp",
      "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\n// Solution for Maximum Depth of Binary Tree\nclass Solution {\npublic:\n    void solve() {\n        // Write your solution here\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    // Driver reading from standard input\n    string line;\n    while (getline(cin, line)) {\n        if (!line.empty()) {\n            // Process input line\n        }\n    }\n    return 0;\n}\n"
    },
    {
      "language": "java",
      "boilerplate": "import java.util.*;\n\npublic class Solution {\n    // Solution for Maximum Depth of Binary Tree\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        while (sc.hasNextLine()) {\n            String line = sc.nextLine();\n            if (!line.trim().isEmpty()) {\n                // Process testcase line\n            }\n        }\n        sc.close();\n    }\n}\n"
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
      "expectedOutput": "3",
      "weight": 1
    },
    {
      "input": "[1,null,2]",
      "expectedOutput": "2",
      "weight": 1
    },
    {
      "input": "[]",
      "expectedOutput": "0",
      "weight": 1
    }
  ],
  "timeLimitMs": 2000,
  "memoryLimitMb": 256,
  "hints": [
    "maxDepth(root) = 1 + max(maxDepth(root.left), maxDepth(root.right))."
  ],
  "editorial": {
    "solutionMarkdown": "### Optimal Solution\\nRecursive post-order DFS: return 0 if null else 1 + max(left, right).",
    "complexityAnalysis": "Time: O(N), Space: O(H)"
  },
  "isGlobal": true,
  "status": "PUBLISHED"
},
  {
  "title": "Diameter of Binary Tree",
  "slug": "diameter-of-binary-tree",
  "description": "Given the `root` of a binary tree, return *the length of the **diameter** of the tree*.\n\nThe diameter of a binary tree is the length of the longest path between any two nodes in a tree.\\n\\n### Example 1:\\n```\\nInput: [1,2,3,4,5]\\nOutput: 3\\nExplanation: Path 4 -> 2 -> 1 -> 3 or 5 -> 2 -> 1 -> 3 has length 3.\\n```\\n\\n### Example 2:\\n```\\nInput: [1,2]\\nOutput: 1\\nExplanation: Path length 1.\\n```",
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
      "frequencyCount": 43,
      "sourceNote": "Apple Practice Bank #64"
    }
  ],
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
      "boilerplate": "function diameterOfBinaryTree(...args) {\n    // TODO: Implement solution for Diameter of Binary Tree\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try {\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(diameterOfBinaryTree(...parsed)));\n    } catch (e) {\n        console.log(diameterOfBinaryTree(...lines));\n    }\n}\n"
    },
    {
      "language": "cpp",
      "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\n// Solution for Diameter of Binary Tree\nclass Solution {\npublic:\n    void solve() {\n        // Write your solution here\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    // Driver reading from standard input\n    string line;\n    while (getline(cin, line)) {\n        if (!line.empty()) {\n            // Process input line\n        }\n    }\n    return 0;\n}\n"
    },
    {
      "language": "java",
      "boilerplate": "import java.util.*;\n\npublic class Solution {\n    // Solution for Diameter of Binary Tree\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        while (sc.hasNextLine()) {\n            String line = sc.nextLine();\n            if (!line.trim().isEmpty()) {\n                // Process testcase line\n            }\n        }\n        sc.close();\n    }\n}\n"
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
      "expectedOutput": "3",
      "weight": 1
    },
    {
      "input": "[1,2]",
      "expectedOutput": "1",
      "weight": 1
    }
  ],
  "timeLimitMs": 2000,
  "memoryLimitMb": 256,
  "hints": [
    "At each node, compute height of left and right subtrees. Diameter through node is left_height + right_height."
  ],
  "editorial": {
    "solutionMarkdown": "### Optimal Solution\\nGlobal max diameter tracker updated with left_depth + right_depth at every DFS node.",
    "complexityAnalysis": "Time: O(N), Space: O(H)"
  },
  "isGlobal": true,
  "status": "PUBLISHED"
},
  {
  "title": "Binary Tree Right Side View",
  "slug": "binary-tree-right-side-view",
  "description": "Given the `root` of a binary tree, imagine yourself standing on the **right side** of it, return *the values of the nodes you can see ordered from top to bottom*.\\n\\n### Example 1:\\n```\\nInput: [1,2,3,null,5,null,4]\\nOutput: [1, 3, 4]\\nExplanation: Right-most visible nodes at each level.\\n```\\n\\n### Example 2:\\n```\\nInput: [1,null,3]\\nOutput: [1, 3]\\nExplanation: Right nodes [1, 3].\\n```",
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
      "frequencyCount": 41,
      "sourceNote": "Apple Practice Bank #65"
    }
  ],
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
      "boilerplate": "function binaryTreeRightSideView(...args) {\n    // TODO: Implement solution for Binary Tree Right Side View\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try {\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(binaryTreeRightSideView(...parsed)));\n    } catch (e) {\n        console.log(binaryTreeRightSideView(...lines));\n    }\n}\n"
    },
    {
      "language": "cpp",
      "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\n// Solution for Binary Tree Right Side View\nclass Solution {\npublic:\n    void solve() {\n        // Write your solution here\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    // Driver reading from standard input\n    string line;\n    while (getline(cin, line)) {\n        if (!line.empty()) {\n            // Process input line\n        }\n    }\n    return 0;\n}\n"
    },
    {
      "language": "java",
      "boilerplate": "import java.util.*;\n\npublic class Solution {\n    // Solution for Binary Tree Right Side View\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        while (sc.hasNextLine()) {\n            String line = sc.nextLine();\n            if (!line.trim().isEmpty()) {\n                // Process testcase line\n            }\n        }\n        sc.close();\n    }\n}\n"
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
      "expectedOutput": "[1, 3, 4]",
      "weight": 1
    },
    {
      "input": "[1,null,3]",
      "expectedOutput": "[1, 3]",
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
    "BFS level order taking the last element at each level, or DFS right-child first tracking seen depth."
  ],
  "editorial": {
    "solutionMarkdown": "### Optimal Solution\\nLevel-order BFS recording the rightmost node at each depth.",
    "complexityAnalysis": "Time: O(N), Space: O(D) where D is max tree width"
  },
  "isGlobal": true,
  "status": "PUBLISHED"
},
  {
  "title": "Construct Binary Tree from Preorder and Inorder Traversal",
  "slug": "construct-binary-tree-from-preorder-and-inorder-traversal",
  "description": "Given two integer arrays `preorder` and `inorder` where `preorder` is the preorder traversal of a binary tree and `inorder` is the inorder traversal of the same tree, construct and return *the binary tree*.\\n\\n### Example 1:\\n```\\nInput: [3,9,20,15,7]\n[9,3,15,20,7]\\nOutput: [3, 9, 20, null, null, 15, 7]\\nExplanation: Root is 3, left subtree [9], right subtree [20,15,7].\\n```\\n\\n### Example 2:\\n```\\nInput: [-1]\n[-1]\\nOutput: [-1]\\nExplanation: Single node tree.\\n```",
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
      "frequencyCount": 42,
      "sourceNote": "Apple Practice Bank #66"
    }
  ],
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
      "boilerplate": "function constructBinaryTreeFromPreorderAndInorderTraversal(...args) {\n    // TODO: Implement solution for Construct Binary Tree from Preorder and Inorder Traversal\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try {\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(constructBinaryTreeFromPreorderAndInorderTraversal(...parsed)));\n    } catch (e) {\n        console.log(constructBinaryTreeFromPreorderAndInorderTraversal(...lines));\n    }\n}\n"
    },
    {
      "language": "cpp",
      "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\n// Solution for Construct Binary Tree from Preorder and Inorder Traversal\nclass Solution {\npublic:\n    void solve() {\n        // Write your solution here\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    // Driver reading from standard input\n    string line;\n    while (getline(cin, line)) {\n        if (!line.empty()) {\n            // Process input line\n        }\n    }\n    return 0;\n}\n"
    },
    {
      "language": "java",
      "boilerplate": "import java.util.*;\n\npublic class Solution {\n    // Solution for Construct Binary Tree from Preorder and Inorder Traversal\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        while (sc.hasNextLine()) {\n            String line = sc.nextLine();\n            if (!line.trim().isEmpty()) {\n                // Process testcase line\n            }\n        }\n        sc.close();\n    }\n}\n"
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
      "expectedOutput": "[3, 9, 20, null, null, 15, 7]",
      "weight": 1
    },
    {
      "input": "[-1]\n[-1]",
      "expectedOutput": "[-1]",
      "weight": 1
    }
  ],
  "timeLimitMs": 2000,
  "memoryLimitMb": 256,
  "hints": [
    "Preorder first element is root. Find root position in inorder array to divide into left and right subtrees."
  ],
  "editorial": {
    "solutionMarkdown": "### Optimal Solution\\nHash map stores inorder value indices. Divide and conquer constructs root, left, right.",
    "complexityAnalysis": "Time: O(N), Space: O(N)"
  },
  "isGlobal": true,
  "status": "PUBLISHED"
},
  {
  "title": "Kth Smallest Element in a BST",
  "slug": "kth-smallest-element-in-a-bst",
  "description": "Given the `root` of a binary search tree, and an integer `k`, return *the `k-th` smallest value (**1-indexed**) of all the values of the nodes in the tree*.\\n\\n### Example 1:\\n```\\nInput: [3,1,4,null,2]\n1\\nOutput: 1\\nExplanation: Smallest element is 1.\\n```\\n\\n### Example 2:\\n```\\nInput: [5,3,6,2,4,null,null,1]\n3\\nOutput: 3\\nExplanation: 3rd smallest element is 3.\\n```",
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
      "frequencyCount": 39,
      "sourceNote": "Apple Practice Bank #67"
    }
  ],
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
      "boilerplate": "function kthSmallestElementInABst(...args) {\n    // TODO: Implement solution for Kth Smallest Element in a BST\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try {\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(kthSmallestElementInABst(...parsed)));\n    } catch (e) {\n        console.log(kthSmallestElementInABst(...lines));\n    }\n}\n"
    },
    {
      "language": "cpp",
      "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\n// Solution for Kth Smallest Element in a BST\nclass Solution {\npublic:\n    void solve() {\n        // Write your solution here\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    // Driver reading from standard input\n    string line;\n    while (getline(cin, line)) {\n        if (!line.empty()) {\n            // Process input line\n        }\n    }\n    return 0;\n}\n"
    },
    {
      "language": "java",
      "boilerplate": "import java.util.*;\n\npublic class Solution {\n    // Solution for Kth Smallest Element in a BST\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        while (sc.hasNextLine()) {\n            String line = sc.nextLine();\n            if (!line.trim().isEmpty()) {\n                // Process testcase line\n            }\n        }\n        sc.close();\n    }\n}\n"
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
      "expectedOutput": "1",
      "weight": 1
    },
    {
      "input": "[5,3,6,2,4,null,null,1]\n3",
      "expectedOutput": "3",
      "weight": 1
    }
  ],
  "timeLimitMs": 2000,
  "memoryLimitMb": 256,
  "hints": [
    "Inorder traversal of a BST visits nodes in strictly ascending order."
  ],
  "editorial": {
    "solutionMarkdown": "### Optimal Solution\\nIterative Inorder traversal using stack; return value when k reaches 0.",
    "complexityAnalysis": "Time: O(H + k), Space: O(H)"
  },
  "isGlobal": true,
  "status": "PUBLISHED"
},
  {
  "title": "Subtree of Another Tree",
  "slug": "subtree-of-another-tree",
  "description": "Given the roots of two binary trees `root` and `subRoot`, return `true` if there is a subtree of `root` with the same structure and node values of `subRoot` and `false` otherwise.\\n\\n### Example 1:\\n```\\nInput: [3,4,5,1,2]\n[4,1,2]\\nOutput: true\\nExplanation: subRoot matches subtree rooted at node 4.\\n```\\n\\n### Example 2:\\n```\\nInput: [3,4,5,1,2,null,null,null,null,0]\n[4,1,2]\\nOutput: false\\nExplanation: Extra node 0 prevents match.\\n```",
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
      "frequencyCount": 35,
      "sourceNote": "Apple Practice Bank #68"
    }
  ],
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
      "boilerplate": "function subtreeOfAnotherTree(...args) {\n    // TODO: Implement solution for Subtree of Another Tree\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try {\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(subtreeOfAnotherTree(...parsed)));\n    } catch (e) {\n        console.log(subtreeOfAnotherTree(...lines));\n    }\n}\n"
    },
    {
      "language": "cpp",
      "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\n// Solution for Subtree of Another Tree\nclass Solution {\npublic:\n    void solve() {\n        // Write your solution here\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    // Driver reading from standard input\n    string line;\n    while (getline(cin, line)) {\n        if (!line.empty()) {\n            // Process input line\n        }\n    }\n    return 0;\n}\n"
    },
    {
      "language": "java",
      "boilerplate": "import java.util.*;\n\npublic class Solution {\n    // Solution for Subtree of Another Tree\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        while (sc.hasNextLine()) {\n            String line = sc.nextLine();\n            if (!line.trim().isEmpty()) {\n                // Process testcase line\n            }\n        }\n        sc.close();\n    }\n}\n"
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
      "expectedOutput": "true",
      "weight": 1
    },
    {
      "input": "[3,4,5,1,2,null,null,null,null,0]\n[4,1,2]",
      "expectedOutput": "false",
      "weight": 1
    }
  ],
  "timeLimitMs": 2000,
  "memoryLimitMb": 256,
  "hints": [
    "isSameTree(s, t) helper called at root, or recurse on root.left and root.right."
  ],
  "editorial": {
    "solutionMarkdown": "### Optimal Solution\\nTree matching recursion with isSameTree verification.",
    "complexityAnalysis": "Time: O(M * N), Space: O(H)"
  },
  "isGlobal": true,
  "status": "PUBLISHED"
},
  {
  "title": "Same Tree",
  "slug": "same-tree",
  "description": "Given the roots of two binary trees `p` and `q`, write a function to check if they are the same or not.\\n\\n### Example 1:\\n```\\nInput: [1,2,3]\n[1,2,3]\\nOutput: true\\nExplanation: Identical structure and values.\\n```\\n\\n### Example 2:\\n```\\nInput: [1,2]\n[1,null,2]\\nOutput: false\\nExplanation: Different structures.\\n```",
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
      "frequencyCount": 33,
      "sourceNote": "Apple Practice Bank #69"
    }
  ],
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
      "boilerplate": "function sameTree(...args) {\n    // TODO: Implement solution for Same Tree\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try {\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(sameTree(...parsed)));\n    } catch (e) {\n        console.log(sameTree(...lines));\n    }\n}\n"
    },
    {
      "language": "cpp",
      "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\n// Solution for Same Tree\nclass Solution {\npublic:\n    void solve() {\n        // Write your solution here\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    // Driver reading from standard input\n    string line;\n    while (getline(cin, line)) {\n        if (!line.empty()) {\n            // Process input line\n        }\n    }\n    return 0;\n}\n"
    },
    {
      "language": "java",
      "boilerplate": "import java.util.*;\n\npublic class Solution {\n    // Solution for Same Tree\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        while (sc.hasNextLine()) {\n            String line = sc.nextLine();\n            if (!line.trim().isEmpty()) {\n                // Process testcase line\n            }\n        }\n        sc.close();\n    }\n}\n"
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
      "expectedOutput": "true",
      "weight": 1
    },
    {
      "input": "[1,2]\n[1,null,2]",
      "expectedOutput": "false",
      "weight": 1
    }
  ],
  "timeLimitMs": 2000,
  "memoryLimitMb": 256,
  "hints": [
    "Base cases: if both null return true; if one null or values differ return false."
  ],
  "editorial": {
    "solutionMarkdown": "### Optimal Solution\\nRecursive traversal: p.val == q.val && isSameTree(p.left, q.left) && isSameTree(p.right, q.right).",
    "complexityAnalysis": "Time: O(N), Space: O(H)"
  },
  "isGlobal": true,
  "status": "PUBLISHED"
},
  {
  "title": "Invert Binary Tree",
  "slug": "invert-binary-tree",
  "description": "Given the `root` of a binary tree, invert the tree, and return *its root*.\\n\\n### Example 1:\\n```\\nInput: [4,2,7,1,3,6,9]\\nOutput: [4, 7, 2, 9, 6, 3, 1]\\nExplanation: Binary tree mirrored horizontally.\\n```\\n\\n### Example 2:\\n```\\nInput: [2,1,3]\\nOutput: [2, 3, 1]\\nExplanation: Inverted tree.\\n```",
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
      "sourceNote": "Apple Practice Bank #70"
    }
  ],
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
      "boilerplate": "function invertBinaryTree(...args) {\n    // TODO: Implement solution for Invert Binary Tree\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try {\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(invertBinaryTree(...parsed)));\n    } catch (e) {\n        console.log(invertBinaryTree(...lines));\n    }\n}\n"
    },
    {
      "language": "cpp",
      "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\n// Solution for Invert Binary Tree\nclass Solution {\npublic:\n    void solve() {\n        // Write your solution here\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    // Driver reading from standard input\n    string line;\n    while (getline(cin, line)) {\n        if (!line.empty()) {\n            // Process input line\n        }\n    }\n    return 0;\n}\n"
    },
    {
      "language": "java",
      "boilerplate": "import java.util.*;\n\npublic class Solution {\n    // Solution for Invert Binary Tree\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        while (sc.hasNextLine()) {\n            String line = sc.nextLine();\n            if (!line.trim().isEmpty()) {\n                // Process testcase line\n            }\n        }\n        sc.close();\n    }\n}\n"
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
      "expectedOutput": "[4, 7, 2, 9, 6, 3, 1]",
      "weight": 1
    },
    {
      "input": "[2,1,3]",
      "expectedOutput": "[2, 3, 1]",
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
    "Swap root.left and root.right, then recursively invert left and right subtrees."
  ],
  "editorial": {
    "solutionMarkdown": "### Optimal Solution\\nPost-order or pre-order recursive swap of left and right pointers.",
    "complexityAnalysis": "Time: O(N), Space: O(H)"
  },
  "isGlobal": true,
  "status": "PUBLISHED"
},
  {
  "title": "Linked List Cycle",
  "slug": "linked-list-cycle",
  "description": "Given `head`, the head of a linked list, determine if the linked list has a cycle in it.\\n\\n### Example 1:\\n```\\nInput: [3,2,0,-4]\n1\\nOutput: true\\nExplanation: Tail connects to the 1st node (0-indexed).\\n```\\n\\n### Example 2:\\n```\\nInput: [1,2]\n0\\nOutput: true\\nExplanation: Tail connects to the 0th node.\\n```",
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
      "frequencyCount": 48,
      "sourceNote": "Apple Practice Bank #71"
    }
  ],
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
      "boilerplate": "function linkedListCycle(...args) {\n    // TODO: Implement solution for Linked List Cycle\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try {\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(linkedListCycle(...parsed)));\n    } catch (e) {\n        console.log(linkedListCycle(...lines));\n    }\n}\n"
    },
    {
      "language": "cpp",
      "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\n// Solution for Linked List Cycle\nclass Solution {\npublic:\n    void solve() {\n        // Write your solution here\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    // Driver reading from standard input\n    string line;\n    while (getline(cin, line)) {\n        if (!line.empty()) {\n            // Process input line\n        }\n    }\n    return 0;\n}\n"
    },
    {
      "language": "java",
      "boilerplate": "import java.util.*;\n\npublic class Solution {\n    // Solution for Linked List Cycle\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        while (sc.hasNextLine()) {\n            String line = sc.nextLine();\n            if (!line.trim().isEmpty()) {\n                // Process testcase line\n            }\n        }\n        sc.close();\n    }\n}\n"
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
      "expectedOutput": "true",
      "weight": 1
    },
    {
      "input": "[1,2]\n0",
      "expectedOutput": "true",
      "weight": 1
    },
    {
      "input": "[1]\n-1",
      "expectedOutput": "false",
      "weight": 1
    }
  ],
  "timeLimitMs": 2000,
  "memoryLimitMb": 256,
  "hints": [
    "Floyd's Tortoise and Hare: slow moves 1 step, fast moves 2 steps."
  ],
  "editorial": {
    "solutionMarkdown": "### Optimal Solution\\nFast & slow pointers meet if cycle exists; fast reaching null indicates acyclic list.",
    "complexityAnalysis": "Time: O(N), Space: O(1)"
  },
  "isGlobal": true,
  "status": "PUBLISHED"
},
  {
  "title": "Merge Two Sorted Lists",
  "slug": "merge-two-sorted-lists",
  "description": "You are given the heads of two sorted linked lists `list1` and `list2`. Merge the two lists into one **sorted** list.\\n\\n### Example 1:\\n```\\nInput: [1,2,4]\n[1,3,4]\\nOutput: [1, 1, 2, 3, 4, 4]\\nExplanation: Merged sorted linked list.\\n```\\n\\n### Example 2:\\n```\\nInput: []\n[]\\nOutput: []\\nExplanation: Both lists empty.\\n```",
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
      "frequencyCount": 46,
      "sourceNote": "Apple Practice Bank #72"
    }
  ],
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
      "boilerplate": "function mergeTwoSortedLists(...args) {\n    // TODO: Implement solution for Merge Two Sorted Lists\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try {\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(mergeTwoSortedLists(...parsed)));\n    } catch (e) {\n        console.log(mergeTwoSortedLists(...lines));\n    }\n}\n"
    },
    {
      "language": "cpp",
      "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\n// Solution for Merge Two Sorted Lists\nclass Solution {\npublic:\n    void solve() {\n        // Write your solution here\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    // Driver reading from standard input\n    string line;\n    while (getline(cin, line)) {\n        if (!line.empty()) {\n            // Process input line\n        }\n    }\n    return 0;\n}\n"
    },
    {
      "language": "java",
      "boilerplate": "import java.util.*;\n\npublic class Solution {\n    // Solution for Merge Two Sorted Lists\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        while (sc.hasNextLine()) {\n            String line = sc.nextLine();\n            if (!line.trim().isEmpty()) {\n                // Process testcase line\n            }\n        }\n        sc.close();\n    }\n}\n"
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
      "expectedOutput": "[1, 1, 2, 3, 4, 4]",
      "weight": 1
    },
    {
      "input": "[]\n[]",
      "expectedOutput": "[]",
      "weight": 1
    },
    {
      "input": "[]\n[0]",
      "expectedOutput": "[0]",
      "weight": 1
    }
  ],
  "timeLimitMs": 2000,
  "memoryLimitMb": 256,
  "hints": [
    "Create dummy node and link smaller of list1.val and list2.val at each step."
  ],
  "editorial": {
    "solutionMarkdown": "### Optimal Solution\\nDummy head iterative merge advancing pointer of smaller head.",
    "complexityAnalysis": "Time: O(N + M), Space: O(1)"
  },
  "isGlobal": true,
  "status": "PUBLISHED"
},
  {
  "title": "Remove Nth Node From End of List",
  "slug": "remove-nth-node-from-end-of-list",
  "description": "Given the `head` of a linked list, remove the `n-th` node from the end of the list and return its head.\\n\\n### Example 1:\\n```\\nInput: [1,2,3,4,5]\n2\\nOutput: [1, 2, 3, 5]\\nExplanation: 2nd node from end (4) is removed.\\n```\\n\\n### Example 2:\\n```\\nInput: [1]\n1\\nOutput: []\\nExplanation: Head is removed.\\n```",
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
      "frequencyCount": 40,
      "sourceNote": "Apple Practice Bank #73"
    }
  ],
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
      "boilerplate": "function removeNthNodeFromEndOfList(...args) {\n    // TODO: Implement solution for Remove Nth Node From End of List\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try {\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(removeNthNodeFromEndOfList(...parsed)));\n    } catch (e) {\n        console.log(removeNthNodeFromEndOfList(...lines));\n    }\n}\n"
    },
    {
      "language": "cpp",
      "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\n// Solution for Remove Nth Node From End of List\nclass Solution {\npublic:\n    void solve() {\n        // Write your solution here\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    // Driver reading from standard input\n    string line;\n    while (getline(cin, line)) {\n        if (!line.empty()) {\n            // Process input line\n        }\n    }\n    return 0;\n}\n"
    },
    {
      "language": "java",
      "boilerplate": "import java.util.*;\n\npublic class Solution {\n    // Solution for Remove Nth Node From End of List\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        while (sc.hasNextLine()) {\n            String line = sc.nextLine();\n            if (!line.trim().isEmpty()) {\n                // Process testcase line\n            }\n        }\n        sc.close();\n    }\n}\n"
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
      "expectedOutput": "[1, 2, 3, 5]",
      "weight": 1
    },
    {
      "input": "[1]\n1",
      "expectedOutput": "[]",
      "weight": 1
    },
    {
      "input": "[1,2]\n1",
      "expectedOutput": "[1]",
      "weight": 1
    }
  ],
  "timeLimitMs": 2000,
  "memoryLimitMb": 256,
  "hints": [
    "Two pointers with gap of n nodes. When fast reaches end, slow is just before target."
  ],
  "editorial": {
    "solutionMarkdown": "### Optimal Solution\\nAdvance fast pointer n+1 steps from dummy head. Advance slow and fast together until fast is null.",
    "complexityAnalysis": "Time: O(N), Space: O(1)"
  },
  "isGlobal": true,
  "status": "PUBLISHED"
},
  {
  "title": "Reverse Nodes in k-Group",
  "slug": "reverse-nodes-in-k-group",
  "description": "Given the `head` of a linked list, reverse the nodes of the list `k` at a time, and return *the modified list*. Nodes left over at the end should remain as-is.\\n\\n### Example 1:\\n```\\nInput: [1,2,3,4,5]\n2\\nOutput: [2, 1, 4, 3, 5]\\nExplanation: Groups of 2 reversed: [2,1] and [4,3].\\n```\\n\\n### Example 2:\\n```\\nInput: [1,2,3,4,5]\n3\\nOutput: [3, 2, 1, 4, 5]\\nExplanation: Group of 3 reversed: [3,2,1], remaining [4,5] intact.\\n```",
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
      "frequencyCount": 42,
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
      "boilerplate": "def reverseNodesInKgroup(*args):\n    # TODO: Implement solution for Reverse Nodes in k-Group\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = reverseNodesInKgroup(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(reverseNodesInKgroup(*input_data))\n"
    },
    {
      "language": "javascript",
      "boilerplate": "function reverseNodesInKgroup(...args) {\n    // TODO: Implement solution for Reverse Nodes in k-Group\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try {\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(reverseNodesInKgroup(...parsed)));\n    } catch (e) {\n        console.log(reverseNodesInKgroup(...lines));\n    }\n}\n"
    },
    {
      "language": "cpp",
      "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\n// Solution for Reverse Nodes in k-Group\nclass Solution {\npublic:\n    void solve() {\n        // Write your solution here\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    // Driver reading from standard input\n    string line;\n    while (getline(cin, line)) {\n        if (!line.empty()) {\n            // Process input line\n        }\n    }\n    return 0;\n}\n"
    },
    {
      "language": "java",
      "boilerplate": "import java.util.*;\n\npublic class Solution {\n    // Solution for Reverse Nodes in k-Group\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        while (sc.hasNextLine()) {\n            String line = sc.nextLine();\n            if (!line.trim().isEmpty()) {\n                // Process testcase line\n            }\n        }\n        sc.close();\n    }\n}\n"
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
      "expectedOutput": "[2, 1, 4, 3, 5]",
      "weight": 1
    },
    {
      "input": "[1,2,3,4,5]\n3",
      "expectedOutput": "[3, 2, 1, 4, 5]",
      "weight": 1
    }
  ],
  "timeLimitMs": 2000,
  "memoryLimitMb": 256,
  "hints": [
    "Check if k nodes exist first. If so, reverse k nodes and link recursively to next group."
  ],
  "editorial": {
    "solutionMarkdown": "### Optimal Solution\\nFind kth node. Reverse sub-segment of length k and connect prev and next segment pointers.",
    "complexityAnalysis": "Time: O(N), Space: O(1)"
  },
  "isGlobal": true,
  "status": "PUBLISHED"
},
  {
  "title": "Copy List with Random Pointer",
  "slug": "copy-list-with-random-pointer",
  "description": "A linked list of length `n` is given such that each node contains an additional random pointer, which could point to any node in the list, or `null`. Construct a **deep copy** of the list.\\n\\n### Example 1:\\n```\\nInput: [[7,null],[13,0],[11,4],[10,2],[1,0]]\\nOutput: [[7, null], [13, 0], [11, 4], [10, 2], [1, 0]]\\nExplanation: Deep copied list with intact random pointers.\\n```\\n\\n### Example 2:\\n```\\nInput: [[1,1],[2,1]]\\nOutput: [[1, 1], [2, 1]]\\nExplanation: Random pointers cloned.\\n```",
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
      "frequencyCount": 44,
      "sourceNote": "Apple Practice Bank #75"
    }
  ],
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
      "boilerplate": "function copyListWithRandomPointer(...args) {\n    // TODO: Implement solution for Copy List with Random Pointer\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try {\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(copyListWithRandomPointer(...parsed)));\n    } catch (e) {\n        console.log(copyListWithRandomPointer(...lines));\n    }\n}\n"
    },
    {
      "language": "cpp",
      "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\n// Solution for Copy List with Random Pointer\nclass Solution {\npublic:\n    void solve() {\n        // Write your solution here\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    // Driver reading from standard input\n    string line;\n    while (getline(cin, line)) {\n        if (!line.empty()) {\n            // Process input line\n        }\n    }\n    return 0;\n}\n"
    },
    {
      "language": "java",
      "boilerplate": "import java.util.*;\n\npublic class Solution {\n    // Solution for Copy List with Random Pointer\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        while (sc.hasNextLine()) {\n            String line = sc.nextLine();\n            if (!line.trim().isEmpty()) {\n                // Process testcase line\n            }\n        }\n        sc.close();\n    }\n}\n"
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
      "expectedOutput": "[[7, null], [13, 0], [11, 4], [10, 2], [1, 0]]",
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
    "Interweave cloned nodes between original nodes: A -> A' -> B -> B', assign randoms, then unweave."
  ],
  "editorial": {
    "solutionMarkdown": "### Optimal Solution\\nO(1) auxiliary space interweaving technique or Hash Map mapping original to clone.",
    "complexityAnalysis": "Time: O(N), Space: O(1)"
  },
  "isGlobal": true,
  "status": "PUBLISHED"
},
];
