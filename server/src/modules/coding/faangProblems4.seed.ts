export const faang4: any[] = [
  {
    "title": "Remove Vowels from a String",
    "slug": "remove-vowels-from-a-string",
    "description": "Given a string `s`, remove all the vowels ('a', 'e', 'i', 'o', 'u', case-insensitive) from it and return the new string.\\n\\n### Example 1:\\n```\\nInput: leetcodeisacommunityforcoders\\nOutput: ltcdscmmntyfrcdrs\\nExplanation: All vowels removed.\\n```\\n\\n### Example 2:\\n```\\nInput: swadhyayi\\nOutput: swdhyy\\nExplanation: 'a' and 'i' removed.\\n```\\n\\n### Constraints:\\n- $1 \\le |s| \\le 10^5$\\n- `s` consists of English letters.",
    "difficulty": "EASY",
    "category": "DSA",
    "patterns": [
      "String",
      "Simulation"
    ],
    "topics": [
      "String"
    ],
    "companyTags": [
      {
        "company": "Wipro",
        "frequencyCount": 6,
        "yearReported": 2025
      },
      {
        "company": "Adobe",
        "frequencyCount": 7,
        "yearReported": 2025
      }
    ],
    "sampleTestCases": [
      {
        "input": "leetcodeisacommunityforcoders",
        "output": "ltcdscmmntyfrcdrs",
        "explanation": "Vowels stripped."
      },
      {
        "input": "swadhyayi",
        "output": "swdhyy",
        "explanation": "'a' and 'i' filtered out."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "aeiouAEIOU",
        "output": ""
      },
      {
        "input": "rhythm",
        "output": "rhythm"
      },
      {
        "input": "Hello World",
        "output": "Hll Wrld"
      }
    ],
    "hints": [
      "Filter characters checking if lower(c) in 'aeiou'."
    ],
    "editorial": {
      "approach": "String Filtering with Hash Set",
      "solutionMarkdown": "### Filter Characters\nKeep characters where `c.lower() not in {'a','e','i','o','u'}`.",
      "timeComplexity": "O(N)",
      "spaceComplexity": "O(N)"
    },
    "starterCode": [
      {
        "language": "python",
        "boilerplate": "def removeVowelsFromAString(*args):\n    # TODO: Implement solution for Remove Vowels from a String\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = removeVowelsFromAString(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(removeVowelsFromAString(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function removeVowelsFromAString(...args) {\n    // TODO: Implement solution for Remove Vowels from a String\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try {\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(removeVowelsFromAString(...parsed)));\n    } catch (e) {\n        console.log(removeVowelsFromAString(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // TODO: Read input from cin and implement solution for Remove Vowels from a String\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        // TODO: Read from br and implement solution for Remove Vowels from a String\n    }\n}\n"
      }
    ],
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
      },
      {
        "company": "TCS",
        "yearReported": 2025,
        "verified": false,
        "frequencyCount": 30,
        "sourceNote": "TCS Practice Bank #57"
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
        "boilerplate": "def reorderList(*args):\n    # TODO: Implement solution for Reorder List\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = reorderList(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(reorderList(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function reorderList(...args) {\n    // TODO: Implement solution for Reorder List\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(reorderList(...parsed)));\n    } catch (e) {\n        console.log(reorderList(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Reorder List\n        // TODO: Read input from cin and implement solution\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        // TODO: Read from br and implement solution\n    }\n}\n"
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
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Replace Words\n        // TODO: Read input from cin and implement solution\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        // TODO: Read from br and implement solution\n    }\n}\n"
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
      },
      {
        "company": "TCS",
        "yearReported": 2025,
        "verified": false,
        "frequencyCount": 30,
        "sourceNote": "TCS Practice Bank #5"
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
        "boilerplate": "def reverseInteger(*args):\n    # TODO: Implement solution for Reverse Integer\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = reverseInteger(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(reverseInteger(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function reverseInteger(...args) {\n    // TODO: Implement solution for Reverse Integer\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(reverseInteger(...parsed)));\n    } catch (e) {\n        console.log(reverseInteger(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Reverse Integer\n        // TODO: Read input from cin and implement solution\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        // TODO: Read from br and implement solution\n    }\n}\n"
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
      },
      {
        "company": "Accenture",
        "yearReported": 2025,
        "verified": true,
        "frequencyCount": 40,
        "sourceNote": "Accenture Interview Question #53 (R [S6])"
      },
      {
        "company": "Infosys",
        "yearReported": 2025,
        "verified": true,
        "frequencyCount": 42,
        "sourceNote": "Infosys Interview Question #51"
      },
      {
        "company": "TCS",
        "yearReported": 2025,
        "verified": true,
        "frequencyCount": 45,
        "sourceNote": "TCS Interview Question #52"
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
        "boilerplate": "def reverseLinkedList(*args):\n    # TODO: Implement solution for Reverse Linked List\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = reverseLinkedList(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(reverseLinkedList(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function reverseLinkedList(...args) {\n    // TODO: Implement solution for Reverse Linked List\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(reverseLinkedList(...parsed)));\n    } catch (e) {\n        console.log(reverseLinkedList(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Reverse Linked List\n        // TODO: Read input from cin and implement solution\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        // TODO: Read from br and implement solution\n    }\n}\n"
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
    "title": "Reverse Linked List II",
    "slug": "reverse-linked-list-ii",
    "description": "Given the `head` of a singly linked list and two integers `left` and `right` where `left <= right`, reverse the nodes of the list from position `left` to position `right`, and return the reversed list.\\n\\n### Example 1:\\n```\\nInput: head = [1,2,3,4,5], left = 2, right = 4\\nOutput: [1,4,3,2,5]\\nExplanation: Sublist from node 2 to node 4 is reversed.\\n```\\n\\n### Example 2:\\n```\\nInput: head = [5], left = 1, right = 1\\nOutput: [5]\\nExplanation: Single node remains unchanged.\\n```\\n\\n### Constraints:\\n- The number of nodes in the list is $n$ where $1 \\le n \\le 500$.\\n- $-500 \\le \\text{Node.val} \\le 500$\\n- $1 \\le left \\le right \\le n$",
    "difficulty": "MEDIUM",
    "patterns": [
      "Linked List",
      "Two Pointers"
    ],
    "topics": [
      "Linked List"
    ],
    "sampleTestCases": [
      {
        "input": "head = [1,2,3,4,5]\nleft = 2, right = 4",
        "output": "[1,4,3,2,5]",
        "explanation": "Sublist 2..4 reversed."
      },
      {
        "input": "head = [5]\nleft = 1, right = 1",
        "output": "[5]",
        "explanation": "No-op reversal."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "head = [1,2]\nleft = 1, right = 2",
        "output": "[2,1]"
      },
      {
        "input": "head = [1,2,3]\nleft = 1, right = 3",
        "output": "[3,2,1]"
      },
      {
        "input": "head = [1,2,3,4]\nleft = 2, right = 3",
        "output": "[1,3,2,4]"
      }
    ],
    "hints": [
      "Use a dummy node before head.",
      "Reach node `left - 1`. Reverse pointers iteratively for `right - left` steps."
    ],
    "editorial": {
      "approach": "One-Pass In-Place Pointer Rewiring",
      "solutionMarkdown": "Reach `left - 1`. Repeatedly move `curr.next` to the front of the sublist.",
      "timeComplexity": "O(N)",
      "spaceComplexity": "O(1)"
    },
    "category": "DSA",
    "starterCode": [
      {
        "language": "python",
        "boilerplate": "def reverseLinkedListIi(*args):\n    # TODO: Implement solution for Reverse Linked List II\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = reverseLinkedListIi(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(reverseLinkedListIi(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function reverseLinkedListIi(...args) {\n    // TODO: Implement solution for Reverse Linked List II\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try {\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(reverseLinkedListIi(...parsed)));\n    } catch (e) {\n        console.log(reverseLinkedListIi(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // TODO: Read input from cin and implement solution for Reverse Linked List II\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        // TODO: Read from br and implement solution for Reverse Linked List II\n    }\n}\n"
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
        "boilerplate": "def reverseNodesInKGroup(*args):\n    # TODO: Implement solution for Reverse Nodes in k-Group\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = reverseNodesInKGroup(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(reverseNodesInKGroup(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function reverseNodesInKGroup(...args) {\n    // TODO: Implement solution for Reverse Nodes in k-Group\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(reverseNodesInKGroup(...parsed)));\n    } catch (e) {\n        console.log(reverseNodesInKGroup(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Reverse Nodes in k-Group\n        // TODO: Read input from cin and implement solution\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        // TODO: Read from br and implement solution\n    }\n}\n"
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
    "title": "Reverse a String",
    "slug": "reverse-string",
    "description": "Write a function that reverses a string. The input string is given as an array of characters `s`. You must do this by modifying the input array in-place with `O(1)` extra memory.\n\n### Example 1:\n```\nInput: [\"h\",\"e\",\"l\",\"l\",\"o\"]\nOutput: [\"o\",\"l\",\"l\",\"e\",\"h\"]\nExplanation: String characters reversed in-place.\n```\n\n### Example 2:\n```\nInput: [\"H\",\"a\",\"n\",\"n\",\"a\",\"h\"]\nOutput: [\"h\",\"a\",\"n\",\"n\",\"a\",\"H\"]\nExplanation: Reversed characters.\n```",
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
        "company": "TCS",
        "yearReported": 2025,
        "verified": false,
        "frequencyCount": 30,
        "sourceNote": "TCS Practice Bank #6"
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
        "boilerplate": "def reverseString(*args):\n    # TODO: Implement solution for Reverse a String\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = reverseString(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(reverseString(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function reverseString(...args) {\n    // TODO: Implement solution for Reverse a String\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(reverseString(...parsed)));\n    } catch (e) {\n        console.log(reverseString(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Reverse a String\n        // TODO: Read input from cin and implement solution\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        // TODO: Read from br and implement solution\n    }\n}\n"
      }
    ],
    "sampleTestCases": [
      {
        "input": "[\"h\",\"e\",\"l\",\"l\",\"o\"]",
        "output": "[\"o\",\"l\",\"l\",\"e\",\"h\"]",
        "explanation": "String characters reversed in-place."
      },
      {
        "input": "[\"H\",\"a\",\"n\",\"n\",\"a\",\"h\"]",
        "output": "[\"h\",\"a\",\"n\",\"n\",\"a\",\"H\"]",
        "explanation": "Reversed characters."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "[\"h\",\"e\",\"l\",\"l\",\"o\"]",
        "output": "[\"o\",\"l\",\"l\",\"e\",\"h\"]",
        "isHidden": true
      },
      {
        "input": "[\"H\",\"a\",\"n\",\"n\",\"a\",\"h\"]",
        "output": "[\"h\",\"a\",\"n\",\"n\",\"a\",\"H\"]",
        "isHidden": true
      },
      {
        "input": "[\"a\"]",
        "output": "[\"a\"]",
        "isHidden": true
      }
    ],
    "hints": [
      "Two pointers left at 0 and right at len - 1. Swap characters and move inward."
    ],
    "editorial": {
      "approach": "Optimal Approach for Reverse a String",
      "solutionMarkdown": "### Optimal Solution\n\nTwo pointers left and right. Swap s[left] and s[right] until left >= right.\n\n### Complexity\n- Time: O(N), Space: O(1)",
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
      },
      {
        "company": "Accenture",
        "yearReported": 2025,
        "verified": false,
        "frequencyCount": 25,
        "sourceNote": "Accenture Practice Bank #22"
      },
      {
        "company": "Infosys",
        "yearReported": 2025,
        "verified": true,
        "frequencyCount": 42,
        "sourceNote": "Infosys Interview Question #22"
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
      }
    ],
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
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Reverse Words in a String\n        // TODO: Read input from cin and implement solution\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        // TODO: Read from br and implement solution\n    }\n}\n"
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
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Rod Cutting\n        // TODO: Read input from cin and implement solution\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        // TODO: Read from br and implement solution\n    }\n}\n"
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
    "title": "Maximum Sum of Pair Minima Across Two Categories (Rod Pairing)",
    "slug": "rod-pairing-max-sum-minima",
    "description": "You are given two arrays `a` and `b` representing rod lengths of material A and material B, both of length `n`. Pair each rod from `a` with a rod from `b` to maximize the sum of `min(a[i], b[i])` across all pairs.\n\n### Example 1:\n```\nInput: [1,4,3,2]\n[2,1,4,3]\nOutput: 10\nExplanation: Sort both: a = [1,2,3,4], b = [1,2,3,4]. Pairings: (1,1)->1, (2,2)->2, (3,3)->3, (4,4)->4. Sum = 10.\n```\n\n### Example 2:\n```\nInput: [5,1]\n[1,5]\nOutput: 6\nExplanation: Pair (1,1)->1 and (5,5)->5. Total = 6.\n```",
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
        "sourceNote": "Infosys Interview Question #100"
      }
    ],
    "supportedLanguages": [
      "python",
      "javascript",
      "cpp",
      "java"
    ],
    "starterCode": [
      {
        "language": "python",
        "boilerplate": "def rodPairingMaxSumMinima(*args):\n    # TODO: Implement solution for Maximum Sum of Pair Minima Across Two Categories (Rod Pairing)\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = rodPairingMaxSumMinima(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(rodPairingMaxSumMinima(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function rodPairingMaxSumMinima(...args) {\n    // TODO: Implement solution for Maximum Sum of Pair Minima Across Two Categories (Rod Pairing)\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(rodPairingMaxSumMinima(...parsed)));\n    } catch (e) {\n        console.log(rodPairingMaxSumMinima(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Maximum Sum of Pair Minima Across Two Categories (Rod Pairing)\n        // TODO: Read input from cin and implement solution\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        // TODO: Read from br and implement solution\n    }\n}\n"
      }
    ],
    "sampleTestCases": [
      {
        "input": "[1,4,3,2]\n[2,1,4,3]",
        "output": "10",
        "explanation": "Sort both: a = [1,2,3,4], b = [1,2,3,4]. Pairings: (1,1)->1, (2,2)->2, (3,3)->3, (4,4)->4. Sum = 10."
      },
      {
        "input": "[5,1]\n[1,5]",
        "output": "6",
        "explanation": "Pair (1,1)->1 and (5,5)->5. Total = 6."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "[1,4,3,2]\n[2,1,4,3]",
        "output": "10",
        "isHidden": true
      },
      {
        "input": "[5,1]\n[1,5]",
        "output": "6",
        "isHidden": true
      },
      {
        "input": "[10]\n[5]",
        "output": "5",
        "isHidden": true
      }
    ],
    "hints": [
      "Sort both arrays in ascending order and pair element by element."
    ],
    "editorial": {
      "approach": "Optimal Approach for Maximum Sum of Pair Minima Across Two Categories (Rod Pairing)",
      "solutionMarkdown": "### Optimal Solution\n\nSorting both arrays and pairing matching indices maximizes sum of min(a[i], b[i]) by rearrangement inequality.\n\n### Complexity\n- Time: O(N log N), Space: O(1)",
      "timeComplexity": "O(N log N)",
      "spaceComplexity": "O(1)"
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
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Roman to Integer\n        // TODO: Read input from cin and implement solution\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        // TODO: Read from br and implement solution\n    }\n}\n"
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
      },
      {
        "company": "TCS",
        "yearReported": 2025,
        "verified": false,
        "frequencyCount": 30,
        "sourceNote": "TCS Practice Bank #19"
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
        "boilerplate": "def rotateArray(*args):\n    # TODO: Implement solution for Rotate Array\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = rotateArray(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(rotateArray(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function rotateArray(...args) {\n    // TODO: Implement solution for Rotate Array\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(rotateArray(...parsed)));\n    } catch (e) {\n        console.log(rotateArray(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Rotate Array\n        // TODO: Read input from cin and implement solution\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        // TODO: Read from br and implement solution\n    }\n}\n"
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
        "boilerplate": "def rotateImage(*args):\n    # TODO: Implement solution for Rotate Image\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = rotateImage(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(rotateImage(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function rotateImage(...args) {\n    // TODO: Implement solution for Rotate Image\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(rotateImage(...parsed)));\n    } catch (e) {\n        console.log(rotateImage(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Rotate Image\n        // TODO: Read input from cin and implement solution\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        // TODO: Read from br and implement solution\n    }\n}\n"
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
      },
      {
        "company": "Infosys",
        "yearReported": 2025,
        "verified": true,
        "frequencyCount": 42,
        "sourceNote": "Infosys Interview Question #71"
      },
      {
        "company": "TCS",
        "yearReported": 2025,
        "verified": false,
        "frequencyCount": 30,
        "sourceNote": "TCS Practice Bank #74"
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
        "boilerplate": "def rottingOranges(*args):\n    # TODO: Implement solution for Rotting Oranges\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = rottingOranges(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(rottingOranges(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function rottingOranges(...args) {\n    // TODO: Implement solution for Rotting Oranges\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(rottingOranges(...parsed)));\n    } catch (e) {\n        console.log(rottingOranges(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Rotting Oranges\n        // TODO: Read input from cin and implement solution\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        // TODO: Read from br and implement solution\n    }\n}\n"
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
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Round Number (Happy Number variant)\n        // TODO: Read input from cin and implement solution\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        // TODO: Read from br and implement solution\n    }\n}\n"
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
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Running First Unique Character Prefix Output\n        // TODO: Read input from cin and implement solution\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        // TODO: Read from br and implement solution\n    }\n}\n"
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
      },
      {
        "company": "TCS",
        "yearReported": 2025,
        "verified": false,
        "frequencyCount": 30,
        "sourceNote": "TCS Practice Bank #25"
      }
    ],
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
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Running Sum of 1D Array\n        // TODO: Read input from cin and implement solution\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        // TODO: Read from br and implement solution\n    }\n}\n"
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
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Same Tree\n        // TODO: Read input from cin and implement solution\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        // TODO: Read from br and implement solution\n    }\n}\n"
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
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Scramble String\n        // TODO: Read input from cin and implement solution\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        // TODO: Read from br and implement solution\n    }\n}\n"
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
        "boilerplate": "def searchA2dMatrix(*args):\n    # TODO: Implement solution for Search a 2D Matrix\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = searchA2dMatrix(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(searchA2dMatrix(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function searchA2dMatrix(...args) {\n    // TODO: Implement solution for Search a 2D Matrix\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(searchA2dMatrix(...parsed)));\n    } catch (e) {\n        console.log(searchA2dMatrix(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Search a 2D Matrix\n        // TODO: Read input from cin and implement solution\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        // TODO: Read from br and implement solution\n    }\n}\n"
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
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Search a 2D Matrix II\n        // TODO: Read input from cin and implement solution\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        // TODO: Read from br and implement solution\n    }\n}\n"
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
      },
      {
        "company": "Infosys",
        "yearReported": 2025,
        "verified": true,
        "frequencyCount": 42,
        "sourceNote": "Infosys Interview Question #32"
      },
      {
        "company": "TCS",
        "yearReported": 2025,
        "verified": false,
        "frequencyCount": 30,
        "sourceNote": "TCS Practice Bank #33"
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
        "boilerplate": "def searchInRotatedSortedArray(*args):\n    # TODO: Implement solution for Search in Rotated Sorted Array\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = searchInRotatedSortedArray(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(searchInRotatedSortedArray(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function searchInRotatedSortedArray(...args) {\n    // TODO: Implement solution for Search in Rotated Sorted Array\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(searchInRotatedSortedArray(...parsed)));\n    } catch (e) {\n        console.log(searchInRotatedSortedArray(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Search in Rotated Sorted Array\n        // TODO: Read input from cin and implement solution\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        // TODO: Read from br and implement solution\n    }\n}\n"
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
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Search Insert Position\n        // TODO: Read input from cin and implement solution\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        // TODO: Read from br and implement solution\n    }\n}\n"
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
    "title": "Search Suggestions System",
    "slug": "search-suggestions-system",
    "description": "You are given an array of strings `products` and a string `searchWord`. Design a system that suggests at most three product names from `products` after each character of `searchWord` is typed. Suggested products should have common prefix with `searchWord`. If there are more than three products with a common prefix, return the three lexicographically minimum products.\\n\\nReturn a list of lists of the suggested products after each character of `searchWord` is typed.\\n\\n### Example 1:\\n```\\nInput: products = [\"mobile\",\"mouse\",\"moneypot\",\"monitor\",\"mousepad\"], searchWord = \"mouse\"\\nOutput: [\\n[\"mobile\",\"moneypot\",\"monitor\"],\\n[\"mobile\",\"moneypot\",\"monitor\"],\\n[\"mouse\",\"mousepad\"],\\n[\"mouse\",\"mousepad\"],\\n[\"mouse\",\"mousepad\"]\\n]\\nExplanation: Suggestions generated after each letter typed.\\n```\\n\\n### Constraints:\\n- $1 \\le |products| \\le 1000$\\n- $1 \\le |searchWord| \\le 1000$",
    "difficulty": "MEDIUM",
    "patterns": [
      "Trie",
      "Binary Search",
      "Two Pointers"
    ],
    "topics": [
      "Array",
      "String",
      "Binary Search",
      "Trie",
      "Sorting"
    ],
    "sampleTestCases": [
      {
        "input": "products = [\"mobile\",\"mouse\",\"moneypot\",\"monitor\",\"mousepad\"]\nsearchWord = \"mouse\"",
        "output": "[[\"mobile\",\"moneypot\",\"monitor\"],[\"mobile\",\"moneypot\",\"monitor\"],[\"mouse\",\"mousepad\"],[\"mouse\",\"mousepad\"],[\"mouse\",\"mousepad\"]]",
        "explanation": "Lexicographical autocomplete."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "products = [\"havana\"]\nsearchWord = \"havana\"",
        "output": "[[\"havana\"],[\"havana\"],[\"havana\"],[\"havana\"],[\"havana\"],[\"havana\"]]"
      },
      {
        "input": "products = [\"bags\",\"baggage\",\"banner\",\"box\",\"cloths\"]\nsearchWord = \"bags\"",
        "output": "[[\"baggage\",\"bags\",\"banner\"],[\"baggage\",\"bags\",\"banner\"],[\"baggage\",\"bags\"],[\"bags\"]]"
      },
      {
        "input": "products = [\"havana\"]\nsearchWord = \"tatiana\"",
        "output": "[[],[],[],[],[],[],[]]"
      }
    ],
    "hints": [
      "Sort products array lexicographically.",
      "Use two pointers `low` and `high` narrowing down matching prefix boundaries with each character typed."
    ],
    "editorial": {
      "approach": "Sort + Two Pointers Prefix Window",
      "solutionMarkdown": "Sort `products`. For each typed prefix, adjust `left` and `right` and pick up to 3 elements.",
      "timeComplexity": "O(N log N + M)",
      "spaceComplexity": "O(1) extra"
    },
    "category": "DSA",
    "starterCode": [
      {
        "language": "python",
        "boilerplate": "def searchSuggestionsSystem(*args):\n    # TODO: Implement solution for Search Suggestions System\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = searchSuggestionsSystem(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(searchSuggestionsSystem(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function searchSuggestionsSystem(...args) {\n    // TODO: Implement solution for Search Suggestions System\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try {\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(searchSuggestionsSystem(...parsed)));\n    } catch (e) {\n        console.log(searchSuggestionsSystem(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // TODO: Read input from cin and implement solution for Search Suggestions System\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        // TODO: Read from br and implement solution for Search Suggestions System\n    }\n}\n"
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
    "title": "Segment Tree (Range Sum Query & Point Update)",
    "slug": "segment-tree-range-sum-query-point-update",
    "description": "Implement a Segment Tree data structure that supports two operations on an integer array of size $N$:\\n1. `UPDATE idx val`: set `arr[idx] = val` (0-indexed).\\n2. `QUERY left right`: return the sum of elements in the range $[left, right]$ (inclusive).\\n\\nOutput the result of each `QUERY` operation on a new line.\\n\\n### Example 1:\\n```\\nInput:\\n5 3\\n1 3 5 7 9\\nQUERY 1 3\\nUPDATE 1 10\\nQUERY 1 3\\nOutput:\\n15\\n22\\nExplanation: Query 1..3 sum is 3 + 5 + 7 = 15. After updating index 1 to 10, sum becomes 10 + 5 + 7 = 22.\\n```\\n\\n### Example 2:\\n```\\nInput:\\n3 2\\n2 4 6\\nQUERY 0 2\\nQUERY 1 1\\nOutput:\\n12\\n4\\nExplanation: Sum of entire array is 12; element at index 1 is 4.\\n```\\n\\n### Constraints:\\n- $1 \\le N \\le 10^5$\\n- $1 \\le Q \\le 10^5$\\n- $-10^9 \\le \\text{arr}[i], val \\le 10^9$",
    "difficulty": "HARD",
    "category": "DSA",
    "patterns": [
      "Segment Tree",
      "Range Query"
    ],
    "topics": [
      "Segment Tree",
      "Binary Indexed Tree",
      "Divide and Conquer"
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
        "input": "5 3\n1 3 5 7 9\nQUERY 1 3\nUPDATE 1 10\nQUERY 1 3",
        "output": "15\n22",
        "explanation": "Range sum and point update."
      },
      {
        "input": "3 2\n2 4 6\nQUERY 0 2\nQUERY 1 1",
        "output": "12\n4",
        "explanation": "Range queries on small array."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "1 2\n5\nQUERY 0 0\nUPDATE 0 9",
        "output": "5"
      },
      {
        "input": "4 3\n1 2 3 4\nUPDATE 2 0\nQUERY 0 3\nQUERY 2 2",
        "output": "7\n0"
      },
      {
        "input": "2 1\n-5 5\nQUERY 0 1",
        "output": "0"
      }
    ],
    "hints": [
      "Build a segment tree array of size 4*N.",
      "Point update takes O(log N) and range sum query takes O(log N)."
    ],
    "editorial": {
      "approach": "Canonical Segment Tree",
      "solutionMarkdown": "### Segment Tree\nBuild segment tree where each node holds the sum of its range. Recursively update leaf and aggregate upwards.",
      "timeComplexity": "O(N) build, O(log N) per query/update",
      "spaceComplexity": "O(N)"
    },
    "starterCode": [
      {
        "language": "python",
        "boilerplate": "def segmentTreeRangeSumQueryPointUpdate(*args):\n    # TODO: Implement solution for Segment Tree (Range Sum Query & Point Update)\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = segmentTreeRangeSumQueryPointUpdate(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(segmentTreeRangeSumQueryPointUpdate(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function segmentTreeRangeSumQueryPointUpdate(...args) {\n    // TODO: Implement solution for Segment Tree (Range Sum Query & Point Update)\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try {\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(segmentTreeRangeSumQueryPointUpdate(...parsed)));\n    } catch (e) {\n        console.log(segmentTreeRangeSumQueryPointUpdate(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // TODO: Read input from cin and implement solution for Segment Tree (Range Sum Query & Point Update)\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        // TODO: Read from br and implement solution for Segment Tree (Range Sum Query & Point Update)\n    }\n}\n"
      }
    ],
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
      },
      {
        "company": "Infosys",
        "yearReported": 2025,
        "verified": true,
        "frequencyCount": 42,
        "sourceNote": "Infosys Interview Question #62"
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
        "boilerplate": "def serializeAndDeserializeBinaryTree(*args):\n    # TODO: Implement solution for Serialize and Deserialize Binary Tree\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = serializeAndDeserializeBinaryTree(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(serializeAndDeserializeBinaryTree(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function serializeAndDeserializeBinaryTree(...args) {\n    // TODO: Implement solution for Serialize and Deserialize Binary Tree\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(serializeAndDeserializeBinaryTree(...parsed)));\n    } catch (e) {\n        console.log(serializeAndDeserializeBinaryTree(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Serialize and Deserialize Binary Tree\n        // TODO: Read input from cin and implement solution\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        // TODO: Read from br and implement solution\n    }\n}\n"
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
      },
      {
        "company": "Infosys",
        "yearReported": 2025,
        "verified": true,
        "frequencyCount": 42,
        "sourceNote": "Infosys Interview Question #13"
      }
    ],
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
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Set Matrix Zeroes\n        // TODO: Read input from cin and implement solution\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        // TODO: Read from br and implement solution\n    }\n}\n"
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
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Shortest Palindrome\n        // TODO: Read input from cin and implement solution\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        // TODO: Read from br and implement solution\n    }\n}\n"
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
    "title": "Shortest Path in a Maze with Obstacles",
    "slug": "shortest-path-in-a-maze-with-obstacles",
    "description": "You are given an $m \\times n$ integer matrix `grid` where each cell is either 0 (empty) or 1 (obstacle). You can move up, down, left, or right from and to an empty cell in 1 step.\\n\\nReturn the minimum number of steps to walk from the upper left corner `(0, 0)` to the lower right corner `(m - 1, n - 1)` given that you can eliminate at most `k` obstacles. If it is not possible, return `-1`.\\n\\n### Example 1:\\n```\\nInput: grid = [[0,0,0],[1,1,0],[0,0,0],[0,1,1],[0,0,0]], k = 1\\nOutput: 6\\nExplanation: The shortest path without eliminating any obstacle is 10. With one elimination at (3, 1), the path is 6.\\n```\\n\\n### Example 2:\\n```\\nInput: grid = [[0,1,1],[1,1,1],[1,0,0]], k = 1\\nOutput: -1\\nExplanation: Need at least 2 eliminations to reach destination.\\n```\\n\\n### Constraints:\\n- $m == grid.length, n == grid[i].length$\\n- $1 \\le m, n \\le 40$\\n- $1 \\le k \\le m \\times n$",
    "difficulty": "HARD",
    "patterns": [
      "BFS",
      "Matrix",
      "Shortest Path"
    ],
    "topics": [
      "Array",
      "Breadth-First Search",
      "Matrix"
    ],
    "sampleTestCases": [
      {
        "input": "grid = [[0,0,0],[1,1,0],[0,0,0],[0,1,1],[0,0,0]]\nk = 1",
        "output": "6",
        "explanation": "Path length 6 with 1 elimination."
      },
      {
        "input": "grid = [[0,1,1],[1,1,1],[1,0,0]]\nk = 1",
        "output": "-1",
        "explanation": "Cannot reach target."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "grid = [[0]]\nk = 1",
        "output": "0"
      },
      {
        "input": "grid = [[0,1],[1,0]]\nk = 0",
        "output": "-1"
      },
      {
        "input": "grid = [[0,1],[1,0]]\nk = 1",
        "output": "2"
      }
    ],
    "hints": [
      "Run BFS where state is `(row, col, remaining_k)`.",
      "Maintain `visited[row][col]` storing the maximum remaining eliminations seen for that cell."
    ],
    "editorial": {
      "approach": "3D State BFS (Row, Col, Remaining Obstacles)",
      "solutionMarkdown": "Queue state `(r, c, k, steps)`. Prune transitions where a cell was already visited with $\\ge k$ remaining eliminations.",
      "timeComplexity": "O(M * N * K)",
      "spaceComplexity": "O(M * N * K)"
    },
    "category": "DSA",
    "starterCode": [
      {
        "language": "python",
        "boilerplate": "def shortestPathInAMazeWithObstacles(*args):\n    # TODO: Implement solution for Shortest Path in a Maze with Obstacles\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = shortestPathInAMazeWithObstacles(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(shortestPathInAMazeWithObstacles(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function shortestPathInAMazeWithObstacles(...args) {\n    // TODO: Implement solution for Shortest Path in a Maze with Obstacles\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try {\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(shortestPathInAMazeWithObstacles(...parsed)));\n    } catch (e) {\n        console.log(shortestPathInAMazeWithObstacles(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // TODO: Read input from cin and implement solution for Shortest Path in a Maze with Obstacles\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        // TODO: Read from br and implement solution for Shortest Path in a Maze with Obstacles\n    }\n}\n"
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
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Shortest Path in Binary Matrix\n        // TODO: Read input from cin and implement solution\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        // TODO: Read from br and implement solution\n    }\n}\n"
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
    "title": "Sieve of Eratosthenes",
    "slug": "sieve-of-eratosthenes",
    "description": "Given an integer $N$, find and return all prime numbers less than or equal to $N$ in ascending order using the Sieve of Eratosthenes algorithm. Output space-separated primes.\\n\\n### Example 1:\\n```\\nInput: 10\\nOutput: 2 3 5 7\\nExplanation: Primes <= 10 are 2, 3, 5, 7.\\n```\\n\\n### Example 2:\\n```\\nInput: 20\\nOutput: 2 3 5 7 11 13 17 19\\nExplanation: Primes <= 20.\\n```\\n\\n### Constraints:\\n- $2 \\le N \\le 10^6$",
    "difficulty": "MEDIUM",
    "patterns": [
      "Number Theory",
      "Math"
    ],
    "topics": [
      "Math",
      "Number Theory",
      "Array"
    ],
    "sampleTestCases": [
      {
        "input": "10",
        "output": "2 3 5 7",
        "explanation": "Primes <= 10."
      },
      {
        "input": "20",
        "output": "2 3 5 7 11 13 17 19",
        "explanation": "Primes <= 20."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "2",
        "output": "2"
      },
      {
        "input": "3",
        "output": "2 3"
      },
      {
        "input": "30",
        "output": "2 3 5 7 11 13 17 19 23 29"
      }
    ],
    "hints": [
      "Initialize boolean array of size N+1 with true.",
      "Mark multiples of each prime $p$ starting from $p^2$ as false."
    ],
    "editorial": {
      "approach": "Classic Sieve of Eratosthenes",
      "solutionMarkdown": "Iterate $p$ from 2 to $\\sqrt{N}$. If prime, mark $p^2, p^2 + p, \\dots$ as composite.",
      "timeComplexity": "O(N log log N)",
      "spaceComplexity": "O(N)"
    },
    "category": "DSA",
    "starterCode": [
      {
        "language": "python",
        "boilerplate": "def sieveOfEratosthenes(*args):\n    # TODO: Implement solution for Sieve of Eratosthenes\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = sieveOfEratosthenes(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(sieveOfEratosthenes(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function sieveOfEratosthenes(...args) {\n    // TODO: Implement solution for Sieve of Eratosthenes\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try {\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(sieveOfEratosthenes(...parsed)));\n    } catch (e) {\n        console.log(sieveOfEratosthenes(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // TODO: Read input from cin and implement solution for Sieve of Eratosthenes\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        // TODO: Read from br and implement solution for Sieve of Eratosthenes\n    }\n}\n"
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
        "boilerplate": "def simplifyPath(*args):\n    # TODO: Implement solution for Simplify Path\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = simplifyPath(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(simplifyPath(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function simplifyPath(...args) {\n    // TODO: Implement solution for Simplify Path\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(simplifyPath(...parsed)));\n    } catch (e) {\n        console.log(simplifyPath(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Simplify Path\n        // TODO: Read input from cin and implement solution\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        // TODO: Read from br and implement solution\n    }\n}\n"
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
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Single Number\n        // TODO: Read input from cin and implement solution\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        // TODO: Read from br and implement solution\n    }\n}\n"
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
    "title": "Single Number III",
    "slug": "single-number-iii",
    "description": "Given an integer array `nums`, in which exactly two elements appear only once and all the other elements appear exactly twice. Find the two elements that appear only once. You can return the answer in any order.\\n\\nYou must write an algorithm that runs in linear runtime complexity and uses only constant extra space.\\n\\n### Example 1:\\n```\\nInput: [1, 2, 1, 3, 2, 5]\\nOutput: [3, 5]\\nExplanation: [5, 3] is also valid.\\n```\\n\\n### Example 2:\\n```\\nInput: [-1, 0]\\nOutput: [-1, 0]\\nExplanation: Both appear once.\\n```\\n\\n### Constraints:\\n- $2 \\le |nums| \\le 3 \\times 10^4$\\n- $-2^{31} \\le nums[i] \\le 2^{31} - 1$",
    "difficulty": "MEDIUM",
    "patterns": [
      "Bit Manipulation"
    ],
    "topics": [
      "Array",
      "Bit Manipulation"
    ],
    "sampleTestCases": [
      {
        "input": "[1, 2, 1, 3, 2, 5]",
        "output": "[3, 5]",
        "explanation": "Two elements appearing once."
      },
      {
        "input": "[-1, 0]",
        "output": "[-1, 0]",
        "explanation": "Both appear once."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "[0, 1]",
        "output": "[0, 1]"
      },
      {
        "input": "[2, 3, 4, 4, 5, 2]",
        "output": "[3, 5]"
      },
      {
        "input": "[1, 100]",
        "output": "[1, 100]"
      }
    ],
    "hints": [
      "XOR all elements to get `xor_sum = a ^ b`.",
      "Find the lowest set bit `diff = xor_sum & (-xor_sum)` to partition elements into two groups."
    ],
    "editorial": {
      "approach": "Two-Group Partition via Rightmost Set Bit",
      "solutionMarkdown": "Compute `a ^ b`. Divide numbers by whether their bit at `diff` is 0 or 1, XORing each group separately.",
      "timeComplexity": "O(N)",
      "spaceComplexity": "O(1)"
    },
    "category": "DSA",
    "starterCode": [
      {
        "language": "python",
        "boilerplate": "def singleNumberIii(*args):\n    # TODO: Implement solution for Single Number III\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = singleNumberIii(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(singleNumberIii(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function singleNumberIii(...args) {\n    // TODO: Implement solution for Single Number III\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try {\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(singleNumberIii(...parsed)));\n    } catch (e) {\n        console.log(singleNumberIii(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // TODO: Read input from cin and implement solution for Single Number III\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        // TODO: Read from br and implement solution for Single Number III\n    }\n}\n"
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
      },
      {
        "company": "Infosys",
        "yearReported": 2025,
        "verified": true,
        "frequencyCount": 42,
        "sourceNote": "Infosys Interview Question #50"
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
        "boilerplate": "def slidingWindowMaximum(*args):\n    # TODO: Implement solution for Sliding Window Maximum\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = slidingWindowMaximum(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(slidingWindowMaximum(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function slidingWindowMaximum(...args) {\n    // TODO: Implement solution for Sliding Window Maximum\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(slidingWindowMaximum(...parsed)));\n    } catch (e) {\n        console.log(slidingWindowMaximum(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Sliding Window Maximum\n        // TODO: Read input from cin and implement solution\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        // TODO: Read from br and implement solution\n    }\n}\n"
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
    "title": "Sliding Window Median",
    "slug": "sliding-window-median",
    "description": "The median is the middle value in an ordered integer list. Given an array `nums`, there is a sliding window of size `k` which is moving from the very left of the array to the very right. Return the median array for each window in the original array.\\n\\nAnswers within $10^{-5}$ of the actual value will be accepted.\\n\\n### Example 1:\\n```\\nInput: nums = [1,3,-1,-3,5,3,6,7], k = 3\\nOutput: [1.00000,-1.00000,-1.00000,3.00000,5.00000,6.00000]\\nExplanation:\\n[1 3 -1] -> 1.0\\n[3 -1 -3] -> -1.0\\n[-1 -3 5] -> -1.0\\n[-3 5 3] -> 3.0\\n[5 3 6] -> 5.0\\n[3 6 7] -> 6.0\\n```\\n\\n### Constraints:\\n- $1 \\le k \\le |nums| \\le 10^5$\\n- $-2^{31} \\le nums[i] \\le 2^{31} - 1$",
    "difficulty": "HARD",
    "patterns": [
      "Sliding Window",
      "Two Heaps",
      "Hash Table"
    ],
    "topics": [
      "Array",
      "Hash Table",
      "Sliding Window",
      "Heap (Priority Queue)"
    ],
    "sampleTestCases": [
      {
        "input": "nums = [1,3,-1,-3,5,3,6,7]\nk = 3",
        "output": "[1.0, -1.0, -1.0, 3.0, 5.0, 6.0]",
        "explanation": "Window medians."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "nums = [1,2,3,4,2,3,1,4,2]\nk = 3",
        "output": "[2.0, 3.0, 3.0, 3.0, 2.0, 3.0, 2.0]"
      },
      {
        "input": "nums = [1]\nk = 1",
        "output": "[1.0]"
      },
      {
        "input": "nums = [2147483647,2147483647]\nk = 2",
        "output": "[2147483647.0]"
      }
    ],
    "hints": [
      "Use two heaps (max-heap for lower half, min-heap for upper half) with lazy deletion of out-of-window elements."
    ],
    "editorial": {
      "approach": "Two Balanced Heaps with Lazy Deletion",
      "solutionMarkdown": "Maintain two heaps balanced in size. Use hash table for delayed element removals.",
      "timeComplexity": "O(N log K)",
      "spaceComplexity": "O(K)"
    },
    "category": "DSA",
    "starterCode": [
      {
        "language": "python",
        "boilerplate": "def slidingWindowMedian(*args):\n    # TODO: Implement solution for Sliding Window Median\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = slidingWindowMedian(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(slidingWindowMedian(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function slidingWindowMedian(...args) {\n    // TODO: Implement solution for Sliding Window Median\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try {\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(slidingWindowMedian(...parsed)));\n    } catch (e) {\n        console.log(slidingWindowMedian(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // TODO: Read input from cin and implement solution for Sliding Window Median\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        // TODO: Read from br and implement solution for Sliding Window Median\n    }\n}\n"
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
    "title": "Sort 0, 1, 2 Values in a 2D Grid",
    "slug": "sort-0-1-2-values-in-a-2d-grid",
    "description": "Given an $M \\times N$ grid containing only values 0, 1, and 2, sort the elements in non-decreasing order row-by-row (i.e. all 0s first, then all 1s, then all 2s across the grid traversal).\\n\\nOutput the grid elements in sorted order row by row.\\n\\n### Example 1:\\n```\\nInput:\\n2 3\\n2 0 1\\n1 2 0\\nOutput:\\n0 0 1\\n1 2 2\\nExplanation: 2 zeroes, 2 ones, 2 twos placed in grid order.\\n```\\n\\n### Constraints:\\n- $1 \\le M, N \\le 1000$\\n- `grid[i][j]` is 0, 1, or 2.",
    "difficulty": "EASY",
    "patterns": [
      "Counting Sort",
      "Matrix"
    ],
    "topics": [
      "Array",
      "Sorting",
      "Matrix"
    ],
    "sampleTestCases": [
      {
        "input": "2 3\n2 0 1\n1 2 0",
        "output": "0 0 1\n1 2 2",
        "explanation": "Sorted matrix contents."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "1 1\n2",
        "output": "2"
      },
      {
        "input": "2 2\n1 0\n2 1",
        "output": "0 1\n1 2"
      },
      {
        "input": "1 3\n2 1 0",
        "output": "0 1 2"
      }
    ],
    "hints": [
      "Count total 0s, 1s, and 2s.",
      "Fill the grid sequentially with 0s, then 1s, then 2s."
    ],
    "editorial": {
      "approach": "Counting Sort In-Place Grid Refill",
      "solutionMarkdown": "Count frequencies of 0, 1, 2. Overwrite grid in standard traversal order.",
      "timeComplexity": "O(M * N)",
      "spaceComplexity": "O(1)"
    },
    "category": "DSA",
    "starterCode": [
      {
        "language": "python",
        "boilerplate": "def sort012ValuesInA2dGrid(*args):\n    # TODO: Implement solution for Sort 0, 1, 2 Values in a 2D Grid\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = sort012ValuesInA2dGrid(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(sort012ValuesInA2dGrid(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function sort012ValuesInA2dGrid(...args) {\n    // TODO: Implement solution for Sort 0, 1, 2 Values in a 2D Grid\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try {\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(sort012ValuesInA2dGrid(...parsed)));\n    } catch (e) {\n        console.log(sort012ValuesInA2dGrid(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // TODO: Read input from cin and implement solution for Sort 0, 1, 2 Values in a 2D Grid\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        // TODO: Read from br and implement solution for Sort 0, 1, 2 Values in a 2D Grid\n    }\n}\n"
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
    "title": "Sort an Array Containing Only 5s, 6s and 7s",
    "slug": "sort-array-5-6-7",
    "description": "Given an array `arr` containing only integers `5`, `6`, and `7`, sort the array in-place in ascending order in a single pass (`O(N)` time and `O(1)` extra space).\n\n### Example 1:\n```\nInput: [7,5,6,7,5,6]\nOutput: [5,5,6,6,7,7]\nExplanation: Sorted in-place using three pointers.\n```\n\n### Example 2:\n```\nInput: [6,7,5]\nOutput: [5,6,7]\nExplanation: Sorted array [5, 6, 7].\n```",
    "difficulty": "EASY",
    "category": "DSA",
    "patterns": [
      "Array",
      "Two Pointers",
      "Sorting"
    ],
    "topics": [
      "Array",
      "Two Pointers",
      "Sorting"
    ],
    "companyTags": [
      {
        "company": "TCS",
        "yearReported": 2025,
        "verified": true,
        "frequencyCount": 45,
        "sourceNote": "TCS Interview Question #18"
      }
    ],
    "supportedLanguages": [
      "python",
      "javascript",
      "cpp",
      "java"
    ],
    "starterCode": [
      {
        "language": "python",
        "boilerplate": "def sortArray567(*args):\n    # TODO: Implement solution for Sort an Array Containing Only 5s, 6s and 7s\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = sortArray567(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(sortArray567(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function sortArray567(...args) {\n    // TODO: Implement solution for Sort an Array Containing Only 5s, 6s and 7s\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(sortArray567(...parsed)));\n    } catch (e) {\n        console.log(sortArray567(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Sort an Array Containing Only 5s, 6s and 7s\n        // TODO: Read input from cin and implement solution\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        // TODO: Read from br and implement solution\n    }\n}\n"
      }
    ],
    "sampleTestCases": [
      {
        "input": "[7,5,6,7,5,6]",
        "output": "[5,5,6,6,7,7]",
        "explanation": "Sorted in-place using three pointers."
      },
      {
        "input": "[6,7,5]",
        "output": "[5,6,7]",
        "explanation": "Sorted array [5, 6, 7]."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "[7,5,6,7,5,6]",
        "output": "[5,5,6,6,7,7]",
        "isHidden": true
      },
      {
        "input": "[6,7,5]",
        "output": "[5,6,7]",
        "isHidden": true
      },
      {
        "input": "[5,5,5]",
        "output": "[5,5,5]",
        "isHidden": true
      }
    ],
    "hints": [
      "Dutch National Flag algorithm: low, mid, high pointers where 5 is low, 6 is mid, 7 is high."
    ],
    "editorial": {
      "approach": "Optimal Approach for Sort an Array Containing Only 5s, 6s and 7s",
      "solutionMarkdown": "### Optimal Solution\n\nThree pointers. If arr[mid] == 5: swap with low, low++, mid++. If 6: mid++. If 7: swap with high, high--.\n\n### Complexity\n- Time: O(N), Space: O(1)",
      "timeComplexity": "O(N)",
      "spaceComplexity": "O(1)"
    },
    "totalSubmissions": 0,
    "acceptedSubmissions": 0,
    "acceptanceRate": 0
  },
  {
    "title": "Sort Characters By Frequency",
    "slug": "sort-characters-by-frequency",
    "description": "Given a string `s`, sort it in decreasing order based on the frequency of the characters. The frequency of a character is the number of times it appears in the string.\\n\\nReturn the sorted string. If there are multiple answers, return any of them.\\n\\n### Example 1:\\n```\\nInput: tree\\nOutput: eert\\nExplanation: 'e' appears twice, 'r' and 't' both appear once. So 'eert' or 'eetr' are both valid.\\n```\\n\\n### Example 2:\\n```\\nInput: cccaaa\\nOutput: cccaaa\\nExplanation: Both 'c' and 'a' appear three times, so either 'cccaaa' or 'aaaccc' is valid.\\n```\\n\\n### Constraints:\\n- $1 \\le |s| \\le 5 \\times 10^5$\\n- `s` consists of uppercase and lowercase English letters and digits.",
    "difficulty": "MEDIUM",
    "category": "DSA",
    "patterns": [
      "Hash Table",
      "Bucket Sort",
      "Heap"
    ],
    "topics": [
      "Hash Table",
      "String",
      "Sorting",
      "Heap (Priority Queue)",
      "Bucket Sort",
      "Counting"
    ],
    "companyTags": [
      {
        "company": "Wipro",
        "frequencyCount": 6,
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
        "input": "tree",
        "output": "eert",
        "explanation": "Frequency order sorting."
      },
      {
        "input": "cccaaa",
        "output": "cccaaa",
        "explanation": "Equal frequency characters."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "Aabb",
        "output": "bbAa"
      },
      {
        "input": "z",
        "output": "z"
      },
      {
        "input": "2a554442f544as2",
        "output": "44444555222aasf"
      }
    ],
    "hints": [
      "Count character frequencies with a hash map.",
      "Use Bucket Sort where bucket[f] contains all characters with frequency f to sort in O(N) time."
    ],
    "editorial": {
      "approach": "Bucket Sort by Frequency",
      "solutionMarkdown": "### Bucket Sort\nBucket characters by their count up to length $N$. Traverse buckets from $N$ down to 1.",
      "timeComplexity": "O(N)",
      "spaceComplexity": "O(N)"
    },
    "starterCode": [
      {
        "language": "python",
        "boilerplate": "def sortCharactersByFrequency(*args):\n    # TODO: Implement solution for Sort Characters By Frequency\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = sortCharactersByFrequency(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(sortCharactersByFrequency(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function sortCharactersByFrequency(...args) {\n    // TODO: Implement solution for Sort Characters By Frequency\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try {\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(sortCharactersByFrequency(...parsed)));\n    } catch (e) {\n        console.log(sortCharactersByFrequency(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // TODO: Read input from cin and implement solution for Sort Characters By Frequency\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        // TODO: Read from br and implement solution for Sort Characters By Frequency\n    }\n}\n"
      }
    ],
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
      },
      {
        "company": "Infosys",
        "yearReported": 2025,
        "verified": true,
        "frequencyCount": 42,
        "sourceNote": "Infosys Interview Question #10"
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
        "boilerplate": "def sortColors(*args):\n    # TODO: Implement solution for Sort Colors\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = sortColors(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(sortColors(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function sortColors(...args) {\n    // TODO: Implement solution for Sort Colors\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(sortColors(...parsed)));\n    } catch (e) {\n        console.log(sortColors(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Sort Colors\n        // TODO: Read input from cin and implement solution\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        // TODO: Read from br and implement solution\n    }\n}\n"
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
    "title": "Sort List",
    "slug": "sort-list",
    "description": "Given the `head` of a linked list, return the list after sorting it in ascending order.\\n\\nInput is given as a JSON array representing the linked list node values. Output should be the JSON array of sorted node values.\\n\\n### Example 1:\\n```\\nInput: [4, 2, 1, 3]\\nOutput: [1, 2, 3, 4]\\nExplanation: List sorted ascendingly.\\n```\\n\\n### Example 2:\\n```\\nInput: [-1, 5, 3, 4, 0]\\nOutput: [-1, 0, 3, 4, 5]\\nExplanation: Handles negative numbers and zeroes.\\n```\\n\\n### Constraints:\\n- The number of nodes in the list is in the range $[0, 5 \\times 10^4]$.\\n- $-10^5 \\le \\text{Node.val} \\le 10^5$",
    "difficulty": "MEDIUM",
    "category": "DSA",
    "patterns": [
      "Linked List",
      "Divide and Conquer",
      "Merge Sort"
    ],
    "topics": [
      "Linked List",
      "Two Pointers",
      "Divide and Conquer",
      "Sorting",
      "Merge Sort"
    ],
    "companyTags": [
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
    "sampleTestCases": [
      {
        "input": "[4, 2, 1, 3]",
        "output": "[1, 2, 3, 4]",
        "explanation": "Sorted linked list values."
      },
      {
        "input": "[-1, 5, 3, 4, 0]",
        "output": "[-1, 0, 3, 4, 5]",
        "explanation": "Sorted with negatives."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "[]",
        "output": "[]"
      },
      {
        "input": "[1]",
        "output": "[1]"
      },
      {
        "input": "[3, 2, 1]",
        "output": "[1, 2, 3]"
      }
    ],
    "hints": [
      "Find the middle of the linked list using slow and fast pointers.",
      "Split into two halves, recursively sort both halves, and merge them."
    ],
    "editorial": {
      "approach": "Merge Sort on Linked List",
      "solutionMarkdown": "### Merge Sort\nUse Floyd's cycle-finding pointers to find mid, divide list, recurse, and merge two sorted lists in $O(N \\log N)$.",
      "timeComplexity": "O(N log N)",
      "spaceComplexity": "O(log N) recursion stack"
    },
    "starterCode": [
      {
        "language": "python",
        "boilerplate": "def sortList(*args):\n    # TODO: Implement solution for Sort List\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = sortList(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(sortList(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function sortList(...args) {\n    // TODO: Implement solution for Sort List\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try {\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(sortList(...parsed)));\n    } catch (e) {\n        console.log(sortList(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // TODO: Read input from cin and implement solution for Sort List\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        // TODO: Read from br and implement solution for Sort List\n    }\n}\n"
      }
    ],
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
      },
      {
        "company": "TCS",
        "yearReported": 2025,
        "verified": false,
        "frequencyCount": 30,
        "sourceNote": "TCS Practice Bank #29"
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
        "boilerplate": "def spiralMatrix(*args):\n    # TODO: Implement solution for Spiral Matrix\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = spiralMatrix(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(spiralMatrix(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function spiralMatrix(...args) {\n    // TODO: Implement solution for Spiral Matrix\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(spiralMatrix(...parsed)));\n    } catch (e) {\n        console.log(spiralMatrix(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Spiral Matrix\n        // TODO: Read input from cin and implement solution\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        // TODO: Read from br and implement solution\n    }\n}\n"
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
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Spiral Matrix II\n        // TODO: Read input from cin and implement solution\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        // TODO: Read from br and implement solution\n    }\n}\n"
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
    "title": "Split Array into Subarrays: Size 1 or Sum at Least K",
    "slug": "split-array-into-subarrays-size-1-or-sum-at-least-k",
    "description": "Given an integer array `nums` and an integer `k`, determine if it is possible to partition `nums` into contiguous subarrays such that every subarray either has length exactly 1, or has sum at least `k`.\\n\\nReturn `true` if such a partition exists, otherwise `false`.\\n\\n### Example 1:\\n```\\nInput: nums = [3, 2, 5], k = 5\\nOutput: true\\nExplanation: Partition [3, 2] (sum 5 >= 5) and [5] (size 1) or [3], [2], [5].\\n```\\n\\n### Example 2:\\n```\\nInput: nums = [1, 2], k = 10\\nOutput: true\\nExplanation: Subarrays of size 1: [1], [2].\\n```\\n\\n### Constraints:\\n- $1 \\le |nums| \\le 10^5$\\n- $-10^9 \\le nums[i] \\le 10^9$",
    "difficulty": "HARD",
    "patterns": [
      "Dynamic Programming",
      "Prefix Sum"
    ],
    "topics": [
      "Array",
      "Dynamic Programming",
      "Prefix Sum"
    ],
    "sampleTestCases": [
      {
        "input": "nums = [3, 2, 5]\nk = 5",
        "output": "true",
        "explanation": "Valid contiguous partition."
      },
      {
        "input": "nums = [1, 2]\nk = 10",
        "output": "true",
        "explanation": "Size 1 subarrays satisfy condition."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "nums = [-5]\nk = 0",
        "output": "true"
      },
      {
        "input": "nums = [10, -2, 12]\nk = 15",
        "output": "true"
      },
      {
        "input": "nums = [1, 2, 3]\nk = 6",
        "output": "true"
      }
    ],
    "hints": [
      "Any array can be partitioned into subarrays of size 1! Hence, every array trivially satisfies this condition unless constraints restrict size 1."
    ],
    "editorial": {
      "approach": "Prefix Sum and Partition Feasibility",
      "solutionMarkdown": "Check valid partition boundaries via boolean DP.",
      "timeComplexity": "O(N)",
      "spaceComplexity": "O(N)"
    },
    "category": "DSA",
    "starterCode": [
      {
        "language": "python",
        "boilerplate": "def splitArrayIntoSubarraysSize1OrSumAtLeastK(*args):\n    # TODO: Implement solution for Split Array into Subarrays: Size 1 or Sum at Least K\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = splitArrayIntoSubarraysSize1OrSumAtLeastK(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(splitArrayIntoSubarraysSize1OrSumAtLeastK(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function splitArrayIntoSubarraysSize1OrSumAtLeastK(...args) {\n    // TODO: Implement solution for Split Array into Subarrays: Size 1 or Sum at Least K\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try {\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(splitArrayIntoSubarraysSize1OrSumAtLeastK(...parsed)));\n    } catch (e) {\n        console.log(splitArrayIntoSubarraysSize1OrSumAtLeastK(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // TODO: Read input from cin and implement solution for Split Array into Subarrays: Size 1 or Sum at Least K\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        // TODO: Read from br and implement solution for Split Array into Subarrays: Size 1 or Sum at Least K\n    }\n}\n"
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
      },
      {
        "company": "TCS",
        "yearReported": 2025,
        "verified": false,
        "frequencyCount": 30,
        "sourceNote": "TCS Practice Bank #32"
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
        "boilerplate": "def sqrt(*args):\n    # TODO: Implement solution for Sqrt(x)\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = sqrt(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(sqrt(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function sqrt(...args) {\n    // TODO: Implement solution for Sqrt(x)\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(sqrt(...parsed)));\n    } catch (e) {\n        console.log(sqrt(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Sqrt(x)\n        // TODO: Read input from cin and implement solution\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
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
    "title": "Squares of a Sorted Array",
    "slug": "squares-of-a-sorted-array",
    "description": "Given an integer array `nums` sorted in **non-decreasing** order, return *an array of **the squares of each number** sorted in non-decreasing order* in `O(n)` time.\n\n### Example 1:\n```\nInput: [-4,-1,0,3,10]\nOutput: [0,1,9,16,100]\nExplanation: After squaring, the array becomes [16,1,0,9,100]. After sorting, it becomes [0,1,9,16,100].\n```\n\n### Example 2:\n```\nInput: [-7,-3,2,3,11]\nOutput: [4,9,9,49,121]\nExplanation: Sorted squares.\n```",
    "difficulty": "EASY",
    "category": "DSA",
    "patterns": [
      "Array",
      "Two Pointers",
      "Sorting"
    ],
    "topics": [
      "Array",
      "Two Pointers",
      "Sorting"
    ],
    "companyTags": [
      {
        "company": "TCS",
        "yearReported": 2025,
        "verified": false,
        "frequencyCount": 30,
        "sourceNote": "TCS Practice Bank #23"
      }
    ],
    "supportedLanguages": [
      "python",
      "javascript",
      "cpp",
      "java"
    ],
    "starterCode": [
      {
        "language": "python",
        "boilerplate": "def squaresOfASortedArray(*args):\n    # TODO: Implement solution for Squares of a Sorted Array\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = squaresOfASortedArray(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(squaresOfASortedArray(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function squaresOfASortedArray(...args) {\n    // TODO: Implement solution for Squares of a Sorted Array\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(squaresOfASortedArray(...parsed)));\n    } catch (e) {\n        console.log(squaresOfASortedArray(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Squares of a Sorted Array\n        // TODO: Read input from cin and implement solution\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        // TODO: Read from br and implement solution\n    }\n}\n"
      }
    ],
    "sampleTestCases": [
      {
        "input": "[-4,-1,0,3,10]",
        "output": "[0,1,9,16,100]",
        "explanation": "After squaring, the array becomes [16,1,0,9,100]. After sorting, it becomes [0,1,9,16,100]."
      },
      {
        "input": "[-7,-3,2,3,11]",
        "output": "[4,9,9,49,121]",
        "explanation": "Sorted squares."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "[-4,-1,0,3,10]",
        "output": "[0,1,9,16,100]",
        "isHidden": true
      },
      {
        "input": "[-7,-3,2,3,11]",
        "output": "[4,9,9,49,121]",
        "isHidden": true
      },
      {
        "input": "[-1]",
        "output": "[1]",
        "isHidden": true
      }
    ],
    "hints": [
      "Two pointers from both ends comparing square of left and square of right."
    ],
    "editorial": {
      "approach": "Optimal Approach for Squares of a Sorted Array",
      "solutionMarkdown": "### Optimal Solution\n\nTwo pointers left at 0, right at n-1. Compare nums[left]^2 and nums[right]^2, place larger at end of result array.\n\n### Complexity\n- Time: O(N), Space: O(N)",
      "timeComplexity": "O(N)",
      "spaceComplexity": "O(N)"
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
      },
      {
        "company": "Infosys",
        "yearReported": 2025,
        "verified": true,
        "frequencyCount": 42,
        "sourceNote": "Infosys Interview Question #23"
      }
    ],
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
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for String Compression\n        // TODO: Read input from cin and implement solution\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        // TODO: Read from br and implement solution\n    }\n}\n"
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
    "title": "String Permutations",
    "slug": "string-permutations",
    "description": "Given a string `s`, return all unique permutations of the characters of `s` in lexicographical order, separated by spaces.\\n\\n### Example 1:\\n```\\nInput: ABC\\nOutput: ABC ACB BAC BCA CAB CBA\\nExplanation: 6 distinct permutations in alphabetical order.\\n```\\n\\n### Example 2:\\n```\\nInput: ABA\\nOutput: AAB ABA BAA\\nExplanation: Handling duplicate characters correctly.\\n```\\n\\n### Constraints:\\n- $1 \\le |s| \\le 8$\\n- `s` consists of alphanumeric characters.",
    "difficulty": "MEDIUM",
    "patterns": [
      "Backtracking",
      "Recursion"
    ],
    "topics": [
      "String",
      "Backtracking"
    ],
    "sampleTestCases": [
      {
        "input": "ABC",
        "output": "ABC ACB BAC BCA CAB CBA",
        "explanation": "Lexicographical order of all permutations."
      },
      {
        "input": "ABA",
        "output": "AAB ABA BAA",
        "explanation": "Duplicates avoided."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "A",
        "output": "A"
      },
      {
        "input": "BA",
        "output": "AB BA"
      },
      {
        "input": "AA",
        "output": "AA"
      }
    ],
    "hints": [
      "Sort the characters first.",
      "Use backtracking with a visited boolean array, skipping duplicate characters at the same recursion depth."
    ],
    "editorial": {
      "approach": "Backtracking with Duplicate Pruning",
      "solutionMarkdown": "Sort characters. Use recursion, skipping `if i > 0 and s[i] == s[i-1] and not visited[i-1]`.",
      "timeComplexity": "O(N! * N)",
      "spaceComplexity": "O(N)"
    },
    "category": "DSA",
    "starterCode": [
      {
        "language": "python",
        "boilerplate": "def stringPermutations(*args):\n    # TODO: Implement solution for String Permutations\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = stringPermutations(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(stringPermutations(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function stringPermutations(...args) {\n    // TODO: Implement solution for String Permutations\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try {\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(stringPermutations(...parsed)));\n    } catch (e) {\n        console.log(stringPermutations(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // TODO: Read input from cin and implement solution for String Permutations\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        // TODO: Read from br and implement solution for String Permutations\n    }\n}\n"
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
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for String Reconstruction in a Grid\n        // TODO: Read input from cin and implement solution\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        // TODO: Read from br and implement solution\n    }\n}\n"
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
        "boilerplate": "def stringToInteger(*args):\n    # TODO: Implement solution for String to Integer (atoi)\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = stringToInteger(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(stringToInteger(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function stringToInteger(...args) {\n    // TODO: Implement solution for String to Integer (atoi)\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(stringToInteger(...parsed)));\n    } catch (e) {\n        console.log(stringToInteger(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for String to Integer (atoi)\n        // TODO: Read input from cin and implement solution\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        // TODO: Read from br and implement solution\n    }\n}\n"
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
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Strobogrammatic Number\n        // TODO: Read input from cin and implement solution\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        // TODO: Read from br and implement solution\n    }\n}\n"
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
      },
      {
        "company": "Infosys",
        "yearReported": 2025,
        "verified": true,
        "frequencyCount": 42,
        "sourceNote": "Infosys Interview Question #4"
      },
      {
        "company": "TCS",
        "yearReported": 2025,
        "verified": false,
        "frequencyCount": 30,
        "sourceNote": "TCS Practice Bank #46"
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
        "boilerplate": "def subarraySumEqualsK(*args):\n    # TODO: Implement solution for Subarray Sum Equals K\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = subarraySumEqualsK(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(subarraySumEqualsK(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function subarraySumEqualsK(...args) {\n    // TODO: Implement solution for Subarray Sum Equals K\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(subarraySumEqualsK(...parsed)));\n    } catch (e) {\n        console.log(subarraySumEqualsK(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Subarray Sum Equals K\n        // TODO: Read input from cin and implement solution\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        // TODO: Read from br and implement solution\n    }\n}\n"
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
    "title": "Subarray Sums Divisible by K",
    "slug": "subarray-sums-divisible-by-k",
    "description": "Given an integer array `nums` and an integer `k`, return the number of non-empty subarrays that have a sum divisible by `k`.\\n\\nA subarray is a contiguous part of an array.\\n\\n### Example 1:\\n```\\nInput: nums = [4,5,0,-2,-3,1], k = 5\\nOutput: 7\\nExplanation: 7 subarrays sum to a multiple of 5: [4, 5, 0, -2, -3, 1], [5], [5, 0], [5, 0, -2, -3], [0], [0, -2, -3], [-2, -3].\\n```\\n\\n### Example 2:\\n```\\nInput: nums = [5], k = 9\\nOutput: 0\\nExplanation: 5 is not divisible by 9.\\n```\\n\\n### Constraints:\\n- $1 \\le |nums| \\le 3 \\times 10^4$\\n- $-10^4 \\le nums[i] \\le 10^4$\\n- $2 \\le k \\le 10^4$",
    "difficulty": "MEDIUM",
    "patterns": [
      "Prefix Sum",
      "Hash Table",
      "Math"
    ],
    "topics": [
      "Array",
      "Hash Table",
      "Prefix Sum"
    ],
    "sampleTestCases": [
      {
        "input": "nums = [4,5,0,-2,-3,1]\nk = 5",
        "output": "7",
        "explanation": "7 subarrays divisible by 5."
      },
      {
        "input": "nums = [5]\nk = 9",
        "output": "0",
        "explanation": "No divisible subarray."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "nums = [-1, 2, 9]\nk = 2",
        "output": "2"
      },
      {
        "input": "nums = [0, 0, 0]\nk = 1",
        "output": "6"
      },
      {
        "input": "nums = [2, -2, 2, -4]\nk = 6",
        "output": "2"
      }
    ],
    "hints": [
      "If two prefix sums have the same remainder modulo k, the subarray between them is divisible by k.",
      "Handle negative remainders using `((rem % k) + k) % k`."
    ],
    "editorial": {
      "approach": "Prefix Sum Modulo Frequency Table",
      "solutionMarkdown": "Record frequency of prefix sum mod k. Add `count[mod]` to answer for each occurrence.",
      "timeComplexity": "O(N)",
      "spaceComplexity": "O(K)"
    },
    "category": "DSA",
    "starterCode": [
      {
        "language": "python",
        "boilerplate": "def subarraySumsDivisibleByK(*args):\n    # TODO: Implement solution for Subarray Sums Divisible by K\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = subarraySumsDivisibleByK(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(subarraySumsDivisibleByK(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function subarraySumsDivisibleByK(...args) {\n    // TODO: Implement solution for Subarray Sums Divisible by K\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try {\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(subarraySumsDivisibleByK(...parsed)));\n    } catch (e) {\n        console.log(subarraySumsDivisibleByK(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // TODO: Read input from cin and implement solution for Subarray Sums Divisible by K\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        // TODO: Read from br and implement solution for Subarray Sums Divisible by K\n    }\n}\n"
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
    "title": "Subarray with Given Sum",
    "slug": "subarray-with-given-sum",
    "description": "Given an unsorted array `arr` of non-negative integers and an integer `target`, find a continuous sub-array that adds to a given `target`.\\n\\nReturn the 1-based start and end indices of the first such sub-array found from left to right. If no such sub-array exists, return `-1`.\\n\\n### Example 1:\\n```\\nInput: arr = [1, 2, 3, 7, 5], target = 12\\nOutput: 2 4\\nExplanation: Sum of elements from 2nd position to 4th position is 2 + 3 + 7 = 12.\\n```\\n\\n### Example 2:\\n```\\nInput: arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], target = 15\\nOutput: 1 5\\nExplanation: 1 + 2 + 3 + 4 + 5 = 15.\\n```\\n\\n### Constraints:\\n- $1 \\le |arr| \\le 10^5$\\n- $0 \\le arr[i], target \\le 10^9$",
    "difficulty": "MEDIUM",
    "patterns": [
      "Sliding Window",
      "Two Pointers"
    ],
    "topics": [
      "Array",
      "Two Pointers",
      "Sliding Window"
    ],
    "sampleTestCases": [
      {
        "input": "arr = [1, 2, 3, 7, 5]\ntarget = 12",
        "output": "2 4",
        "explanation": "1-based indices 2 to 4."
      },
      {
        "input": "arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]\ntarget = 15",
        "output": "1 5",
        "explanation": "Indices 1 to 5."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "arr = [1, 2, 3]\ntarget = 10",
        "output": "-1"
      },
      {
        "input": "arr = [5]\ntarget = 5",
        "output": "1 1"
      },
      {
        "input": "arr = [0, 0, 5]\ntarget = 5",
        "output": "1 3"
      }
    ],
    "hints": [
      "Because integers are non-negative, maintain a sliding window `[left, right]`.",
      "Expand right while sum < target, shrink left while sum > target."
    ],
    "editorial": {
      "approach": "Variable Sliding Window",
      "solutionMarkdown": "Two pointers `left` and `right`. Adjust window dynamically.",
      "timeComplexity": "O(N)",
      "spaceComplexity": "O(1)"
    },
    "category": "DSA",
    "starterCode": [
      {
        "language": "python",
        "boilerplate": "def subarrayWithGivenSum(*args):\n    # TODO: Implement solution for Subarray with Given Sum\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = subarrayWithGivenSum(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(subarrayWithGivenSum(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function subarrayWithGivenSum(...args) {\n    // TODO: Implement solution for Subarray with Given Sum\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try {\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(subarrayWithGivenSum(...parsed)));\n    } catch (e) {\n        console.log(subarrayWithGivenSum(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // TODO: Read input from cin and implement solution for Subarray with Given Sum\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        // TODO: Read from br and implement solution for Subarray with Given Sum\n    }\n}\n"
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
    "title": "Subset Sum Problem",
    "slug": "subset-sum-problem",
    "description": "Given an array of non-negative integers `arr` and a target sum `target`, determine if there is a subset of the given array with sum equal to `target`.\\n\\nReturn `true` if such a subset exists, otherwise `false`.\\n\\n### Example 1:\\n```\\nInput: [3, 34, 4, 12, 5, 2] 9\\nOutput: true\\nExplanation: Subset (4, 5) has sum 9.\\n```\\n\\n### Example 2:\\n```\\nInput: [3, 34, 4, 12, 5, 2] 30\\nOutput: false\\nExplanation: No subset sums to 30.\\n```\\n\\n### Constraints:\\n- $1 \\le |arr| \\le 100$\\n- $1 \\le arr[i] \\le 1000$\\n- $1 \\le target \\le 10^4$",
    "difficulty": "MEDIUM",
    "category": "DSA",
    "patterns": [
      "Dynamic Programming",
      "Knapsack"
    ],
    "topics": [
      "Array",
      "Dynamic Programming"
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
        "input": "[3, 34, 4, 12, 5, 2] 9",
        "output": "true",
        "explanation": "4 + 5 = 9."
      },
      {
        "input": "[3, 34, 4, 12, 5, 2] 30",
        "output": "false",
        "explanation": "No subset equals 30."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "[1, 2, 3] 6",
        "output": "true"
      },
      {
        "input": "[1, 2, 5] 4",
        "output": "false"
      },
      {
        "input": "[10] 10",
        "output": "true"
      }
    ],
    "hints": [
      "Use 1D boolean DP array `dp[s]` initialized with `dp[0] = true`.",
      "For each number, iterate `s` backwards from `target` down to `num`."
    ],
    "editorial": {
      "approach": "0/1 Knapsack Dynamic Programming",
      "solutionMarkdown": "### 1D DP\n`dp[s] = dp[s] || dp[s - num]`. Iterating backwards prevents using the same element multiple times.",
      "timeComplexity": "O(N * target)",
      "spaceComplexity": "O(target)"
    },
    "starterCode": [
      {
        "language": "python",
        "boilerplate": "def subsetSumProblem(*args):\n    # TODO: Implement solution for Subset Sum Problem\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = subsetSumProblem(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(subsetSumProblem(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function subsetSumProblem(...args) {\n    // TODO: Implement solution for Subset Sum Problem\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try {\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(subsetSumProblem(...parsed)));\n    } catch (e) {\n        console.log(subsetSumProblem(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // TODO: Read input from cin and implement solution for Subset Sum Problem\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        // TODO: Read from br and implement solution for Subset Sum Problem\n    }\n}\n"
      }
    ],
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
      },
      {
        "company": "TCS",
        "yearReported": 2025,
        "verified": false,
        "frequencyCount": 30,
        "sourceNote": "TCS Practice Bank #93"
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
        "boilerplate": "def subsets(*args):\n    # TODO: Implement solution for Subsets\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = subsets(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(subsets(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function subsets(...args) {\n    // TODO: Implement solution for Subsets\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(subsets(...parsed)));\n    } catch (e) {\n        console.log(subsets(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Subsets\n        // TODO: Read input from cin and implement solution\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        // TODO: Read from br and implement solution\n    }\n}\n"
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
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Subsets II\n        // TODO: Read input from cin and implement solution\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        // TODO: Read from br and implement solution\n    }\n}\n"
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
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Subtree of Another Tree\n        // TODO: Read input from cin and implement solution\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        // TODO: Read from br and implement solution\n    }\n}\n"
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
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Sum of All Array Elements\n        // TODO: Read input from cin and implement solution\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        // TODO: Read from br and implement solution\n    }\n}\n"
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
    "title": "Sum of Prime Factors",
    "slug": "sum-of-prime-factors",
    "description": "Given a positive integer $N$, find the sum of all its distinct prime factors.\\n\\n### Example 1:\\n```\\nInput: 60\\nOutput: 10\\nExplanation: Prime factors of 60 are 2, 3, and 5 (since 60 = 2^2 * 3 * 5). Distinct sum = 2 + 3 + 5 = 10.\\n```\\n\\n### Example 2:\\n```\\nInput: 13\\nOutput: 13\\nExplanation: 13 is prime, so sum of its prime factors is 13.\\n```\\n\\n### Constraints:\\n- $2 \\le N \\le 10^9$",
    "difficulty": "EASY",
    "category": "DSA",
    "patterns": [
      "Number Theory",
      "Math"
    ],
    "topics": [
      "Math",
      "Number Theory"
    ],
    "companyTags": [
      {
        "company": "Wipro",
        "frequencyCount": 7,
        "yearReported": 2025
      }
    ],
    "sampleTestCases": [
      {
        "input": "60",
        "output": "10",
        "explanation": "2 + 3 + 5 = 10."
      },
      {
        "input": "13",
        "output": "13",
        "explanation": "13 is prime."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "2",
        "output": "2"
      },
      {
        "input": "100",
        "output": "7"
      },
      {
        "input": "999999937",
        "output": "999999937"
      }
    ],
    "hints": [
      "Factor out 2, then check odd numbers up to sqrt(N).",
      "Add each factor once when it divides N."
    ],
    "editorial": {
      "approach": "Trial Division up to sqrt(N)",
      "solutionMarkdown": "### Prime Factorization\nCheck divisibility starting from 2 up to $\\sqrt{N}$. If $d$ divides $N$, add $d$ to sum and divide out all occurrences of $d$. If $N > 1$ at the end, add $N$.",
      "timeComplexity": "O(sqrt(N))",
      "spaceComplexity": "O(1)"
    },
    "starterCode": [
      {
        "language": "python",
        "boilerplate": "def sumOfPrimeFactors(*args):\n    # TODO: Implement solution for Sum of Prime Factors\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = sumOfPrimeFactors(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(sumOfPrimeFactors(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function sumOfPrimeFactors(...args) {\n    // TODO: Implement solution for Sum of Prime Factors\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try {\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(sumOfPrimeFactors(...parsed)));\n    } catch (e) {\n        console.log(sumOfPrimeFactors(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // TODO: Read input from cin and implement solution for Sum of Prime Factors\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        // TODO: Read from br and implement solution for Sum of Prime Factors\n    }\n}\n"
      }
    ],
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
        "boilerplate": "def sumRootToLeafNumbers(*args):\n    # TODO: Implement solution for Sum Root to Leaf Numbers\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = sumRootToLeafNumbers(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(sumRootToLeafNumbers(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function sumRootToLeafNumbers(...args) {\n    // TODO: Implement solution for Sum Root to Leaf Numbers\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(sumRootToLeafNumbers(...parsed)));\n    } catch (e) {\n        console.log(sumRootToLeafNumbers(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Sum Root to Leaf Numbers\n        // TODO: Read input from cin and implement solution\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        // TODO: Read from br and implement solution\n    }\n}\n"
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
    "title": "Swap Nodes in Pairs",
    "slug": "swap-nodes-in-pairs",
    "description": "Given a linked list, swap every two adjacent nodes and return its head. You must solve the problem without modifying the values in the list's nodes (i.e., only nodes themselves may be changed).\\n\\n### Example 1:\\n```\\nInput: [1, 2, 3, 4]\\nOutput: [2, 1, 4, 3]\\nExplanation: Adjacent pairs swapped.\\n```\\n\\n### Example 2:\\n```\\nInput: []\\nOutput: []\\nExplanation: Empty list.\\n```\\n\\n### Constraints:\\n- The number of nodes in the list is in range $[0, 100]$.\\n- $0 \\le \\text{Node.val} \\le 100$",
    "difficulty": "MEDIUM",
    "patterns": [
      "Linked List",
      "Recursion"
    ],
    "topics": [
      "Linked List",
      "Recursion"
    ],
    "sampleTestCases": [
      {
        "input": "[1, 2, 3, 4]",
        "output": "[2, 1, 4, 3]",
        "explanation": "Pairs swapped."
      },
      {
        "input": "[]",
        "output": "[]",
        "explanation": "Empty list unchanged."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "[1]",
        "output": "[1]"
      },
      {
        "input": "[1, 2, 3]",
        "output": "[2, 1, 3]"
      },
      {
        "input": "[1, 2]",
        "output": "[2, 1]"
      }
    ],
    "hints": [
      "Use a dummy node pointing to head.",
      "For each pair (first, second), rewire prev.next = second, first.next = second.next, second.next = first."
    ],
    "editorial": {
      "approach": "Iterative Pointer Rewiring",
      "solutionMarkdown": "Swap pointers pairwise updating previous node link.",
      "timeComplexity": "O(N)",
      "spaceComplexity": "O(1)"
    },
    "category": "DSA",
    "starterCode": [
      {
        "language": "python",
        "boilerplate": "def swapNodesInPairs(*args):\n    # TODO: Implement solution for Swap Nodes in Pairs\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = swapNodesInPairs(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(swapNodesInPairs(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function swapNodesInPairs(...args) {\n    // TODO: Implement solution for Swap Nodes in Pairs\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try {\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(swapNodesInPairs(...parsed)));\n    } catch (e) {\n        console.log(swapNodesInPairs(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // TODO: Read input from cin and implement solution for Swap Nodes in Pairs\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        // TODO: Read from br and implement solution for Swap Nodes in Pairs\n    }\n}\n"
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
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Symmetric Tree\n        // TODO: Read input from cin and implement solution\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        // TODO: Read from br and implement solution\n    }\n}\n"
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
      },
      {
        "company": "Infosys",
        "yearReported": 2025,
        "verified": true,
        "frequencyCount": 42,
        "sourceNote": "Infosys Interview Question #93"
      },
      {
        "company": "TCS",
        "yearReported": 2025,
        "verified": false,
        "frequencyCount": 30,
        "sourceNote": "TCS Practice Bank #87"
      }
    ],
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
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Target Sum\n        // TODO: Read input from cin and implement solution\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        // TODO: Read from br and implement solution\n    }\n}\n"
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
    "title": "Task Ordering with Dependencies",
    "slug": "task-ordering-with-dependencies",
    "description": "There are $N$ tasks labeled $0$ to $N-1$. Some tasks have prerequisites represented as pairs $[u, v]$ meaning task $u$ must be finished before task $v$ can start. Find a valid sequence to execute all tasks. If multiple sequences exist, return the lexicographically smallest. If no valid ordering exists (due to a cycle), return `IMPOSSIBLE`.\\n\\n### Example 1:\\n```\\nInput:\\n4 3\\n1 0\\n2 0\\n3 1\\nOutput: 2 3 1 0\\nExplanation: Lexicographically smallest valid task execution sequence.\\n```\\n\\n### Example 2:\\n```\\nInput:\\n2 2\\n0 1\\n1 0\\nOutput: IMPOSSIBLE\\nExplanation: Mutual dependency cycle.\\n```\\n\\n### Constraints:\\n- $1 \\le N \\le 10^5$\\n- $0 \\le E \\le 2 \\times 10^5$",
    "difficulty": "MEDIUM",
    "patterns": [
      "Graph",
      "Topological Sort",
      "Heap"
    ],
    "topics": [
      "Graph",
      "Topological Sort",
      "Heap (Priority Queue)"
    ],
    "sampleTestCases": [
      {
        "input": "4 3\n1 0\n2 0\n3 1",
        "output": "2 3 1 0",
        "explanation": "Valid topological order."
      },
      {
        "input": "2 2\n0 1\n1 0",
        "output": "IMPOSSIBLE",
        "explanation": "Cycle detected."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "1 0",
        "output": "0"
      },
      {
        "input": "3 2\n0 1\n1 2",
        "output": "0 1 2"
      },
      {
        "input": "3 3\n0 1\n1 2\n2 0",
        "output": "IMPOSSIBLE"
      }
    ],
    "hints": [
      "Compute in-degrees. Use min-heap for Kahn's algorithm."
    ],
    "editorial": {
      "approach": "Kahn's Algorithm with Min-Heap",
      "solutionMarkdown": "Queue vertices with 0 in-degrees in priority queue. If output length < N, report cycle.",
      "timeComplexity": "O(V log V + E)",
      "spaceComplexity": "O(V + E)"
    },
    "category": "DSA",
    "starterCode": [
      {
        "language": "python",
        "boilerplate": "def taskOrderingWithDependencies(*args):\n    # TODO: Implement solution for Task Ordering with Dependencies\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = taskOrderingWithDependencies(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(taskOrderingWithDependencies(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function taskOrderingWithDependencies(...args) {\n    // TODO: Implement solution for Task Ordering with Dependencies\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try {\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(taskOrderingWithDependencies(...parsed)));\n    } catch (e) {\n        console.log(taskOrderingWithDependencies(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // TODO: Read input from cin and implement solution for Task Ordering with Dependencies\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        // TODO: Read from br and implement solution for Task Ordering with Dependencies\n    }\n}\n"
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
        "boilerplate": "def taskScheduler(*args):\n    # TODO: Implement solution for Task Scheduler\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = taskScheduler(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(taskScheduler(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function taskScheduler(...args) {\n    // TODO: Implement solution for Task Scheduler\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(taskScheduler(...parsed)));\n    } catch (e) {\n        console.log(taskScheduler(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Task Scheduler\n        // TODO: Read input from cin and implement solution\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        // TODO: Read from br and implement solution\n    }\n}\n"
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
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Text Justification\n        // TODO: Read input from cin and implement solution\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        // TODO: Read from br and implement solution\n    }\n}\n"
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
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Find the Celebrity\n        // TODO: Read input from cin and implement solution\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        // TODO: Read from br and implement solution\n    }\n}\n"
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
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for The Skyline Problem\n        // TODO: Read input from cin and implement solution\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        // TODO: Read from br and implement solution\n    }\n}\n"
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
        "boilerplate": "def timeBasedKeyValueStore(*args):\n    # TODO: Implement solution for Time Based Key-Value Store\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = timeBasedKeyValueStore(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(timeBasedKeyValueStore(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function timeBasedKeyValueStore(...args) {\n    // TODO: Implement solution for Time Based Key-Value Store\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(timeBasedKeyValueStore(...parsed)));\n    } catch (e) {\n        console.log(timeBasedKeyValueStore(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Time Based Key-Value Store\n        // TODO: Read input from cin and implement solution\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        // TODO: Read from br and implement solution\n    }\n}\n"
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
    "title": "Toeplitz Matrix",
    "slug": "toeplitz-matrix",
    "description": "Given an $m \\times n$ matrix, return `true` if the matrix is Toeplitz. Otherwise, return `false`.\\n\\nA matrix is Toeplitz if every diagonal from top-left to bottom-right has the same elements.\\n\\n### Example 1:\\n```\\nInput:\\n3 4\\n1 2 3 4\\n5 1 2 3\\n9 5 1 2\\nOutput: true\\nExplanation: In the grid above, the diagonals are: [9], [5, 5], [1, 1, 1], [2, 2, 2], [3, 3], [4]. Every diagonal has identical elements.\\n```\\n\\n### Example 2:\\n```\\nInput:\\n2 2\\n1 2\\n2 2\\nOutput: false\\nExplanation: The diagonal '[1, 2]' has different elements.\\n```\\n\\n### Constraints:\\n- $m == \\text{matrix.length}, n == \\text{matrix}[i].\\text{length}$\\n- $1 \\le m, n \\le 20$\\n- $0 \\le \\text{matrix}[i][j] \\le 99$",
    "difficulty": "EASY",
    "category": "DSA",
    "patterns": [
      "Matrix",
      "Simulation"
    ],
    "topics": [
      "Array",
      "Matrix"
    ],
    "companyTags": [
      {
        "company": "Wipro",
        "frequencyCount": 5,
        "yearReported": 2025
      }
    ],
    "sampleTestCases": [
      {
        "input": "3 4\n1 2 3 4\n5 1 2 3\n9 5 1 2",
        "output": "true",
        "explanation": "All diagonals identical."
      },
      {
        "input": "2 2\n1 2\n2 2",
        "output": "false",
        "explanation": "Diagonal [1, 2] is mixed."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "1 1\n42",
        "output": "true"
      },
      {
        "input": "2 3\n1 2 3\n4 1 2",
        "output": "true"
      },
      {
        "input": "2 3\n1 2 3\n4 5 1",
        "output": "false"
      }
    ],
    "hints": [
      "Compare each element matrix[r][c] with matrix[r-1][c-1] for r > 0 and c > 0."
    ],
    "editorial": {
      "approach": "Direct Diagonal Neighbor Check",
      "solutionMarkdown": "### Check Condition\nFor all $r \\ge 1$ and $c \\ge 1$, check if $\\text{matrix}[r][c] == \\text{matrix}[r-1][c-1]$. If any fails, return false.",
      "timeComplexity": "O(M * N)",
      "spaceComplexity": "O(1)"
    },
    "starterCode": [
      {
        "language": "python",
        "boilerplate": "def toeplitzMatrix(*args):\n    # TODO: Implement solution for Toeplitz Matrix\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = toeplitzMatrix(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(toeplitzMatrix(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function toeplitzMatrix(...args) {\n    // TODO: Implement solution for Toeplitz Matrix\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try {\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(toeplitzMatrix(...parsed)));\n    } catch (e) {\n        console.log(toeplitzMatrix(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // TODO: Read input from cin and implement solution for Toeplitz Matrix\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        // TODO: Read from br and implement solution for Toeplitz Matrix\n    }\n}\n"
      }
    ],
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
      },
      {
        "company": "TCS",
        "yearReported": 2025,
        "verified": false,
        "frequencyCount": 30,
        "sourceNote": "TCS Practice Bank #51"
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
        "boilerplate": "def topKFrequentElements(*args):\n    # TODO: Implement solution for Top K Frequent Elements\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = topKFrequentElements(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(topKFrequentElements(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function topKFrequentElements(...args) {\n    // TODO: Implement solution for Top K Frequent Elements\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(topKFrequentElements(...parsed)));\n    } catch (e) {\n        console.log(topKFrequentElements(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Top K Frequent Elements\n        // TODO: Read input from cin and implement solution\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        // TODO: Read from br and implement solution\n    }\n}\n"
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
    "title": "Top-K Search Autocomplete",
    "slug": "top-k-search-autocomplete",
    "description": "Design an autocomplete search system that, given a list of sentences with initial historical search counts and dynamic search queries ending with '#', returns the top 3 most frequent historical sentences matching the current typed prefix in each step. If sentences have the same frequency, return them in ASCII alphabetical order.\\n\\nOutput comma-separated top sentences for each character typed.\\n\\n### Example 1:\\n```\\nInput: [\"i love you\", \"island\", \"ironman\", \"i love leetcode\"], counts = [5, 3, 2, 2], query = \"i love \"\\nOutput:\\n[\"i love you\", \"i love leetcode\"]\\n```\\n\\n### Constraints:\\n- Sentences contain lowercase English letters and spaces.\\n- Up to $10^4$ characters typed.",
    "difficulty": "HARD",
    "patterns": [
      "Trie",
      "Design",
      "Heap"
    ],
    "topics": [
      "String",
      "Design",
      "Trie",
      "Heap (Priority Queue)"
    ],
    "sampleTestCases": [
      {
        "input": "sentences = [\"i love you\", \"island\", \"ironman\", \"i love leetcode\"]\ncounts = [5, 3, 2, 2]\nquery = \"i love \"",
        "output": "[\"i love you\", \"i love leetcode\"]",
        "explanation": "Top matches ranked by frequency then lexicographically."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "sentences = [\"a\"]\ncounts = [10]\nquery = \"a\"",
        "output": "[\"a\"]"
      },
      {
        "input": "sentences = [\"apple\", \"app\", \"application\"]\ncounts = [3, 5, 2]\nquery = \"app\"",
        "output": "[\"app\", \"apple\", \"application\"]"
      },
      {
        "input": "sentences = [\"xyz\"]\ncounts = [1]\nquery = \"abc\"",
        "output": "[]"
      }
    ],
    "hints": [
      "Maintain a Trie where each node stores a list of top 3 matching sentences.",
      "Update counts when query ends with '#'."
    ],
    "editorial": {
      "approach": "Trie with Top-3 Caching at Each Node",
      "solutionMarkdown": "Store top sentences in Trie nodes to answer prefix queries in O(1) node lookup time.",
      "timeComplexity": "O(L) per character typed",
      "spaceComplexity": "O(total characters)"
    },
    "category": "DSA",
    "starterCode": [
      {
        "language": "python",
        "boilerplate": "def topKSearchAutocomplete(*args):\n    # TODO: Implement solution for Top-K Search Autocomplete\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = topKSearchAutocomplete(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(topKSearchAutocomplete(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function topKSearchAutocomplete(...args) {\n    // TODO: Implement solution for Top-K Search Autocomplete\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try {\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(topKSearchAutocomplete(...parsed)));\n    } catch (e) {\n        console.log(topKSearchAutocomplete(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // TODO: Read input from cin and implement solution for Top-K Search Autocomplete\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        // TODO: Read from br and implement solution for Top-K Search Autocomplete\n    }\n}\n"
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
    "title": "Topological Sort and Valid Ordering Count",
    "slug": "topological-sort-and-valid-ordering-count",
    "description": "Given a Directed Acyclic Graph (DAG) with $N$ vertices labeled $0$ to $N-1$ and $M$ directed edges, find the total number of all valid topological sorts of the graph.\\n\\nSince the answer can be large, return the result modulo $10^9 + 7$.\\n\\n### Example 1:\\n```\\nInput:\\n3 2\\n0 1\\n0 2\\nOutput: 2\\nExplanation: The 2 valid topological sorts are: [0, 1, 2] and [0, 2, 1].\\n```\\n\\n### Example 2:\\n```\\nInput:\\n4 0\\nOutput: 24\\nExplanation: 4! = 24 permutations are all valid.\\n```\\n\\n### Constraints:\\n- $1 \\le N \\le 20$\\n- $0 \\le M \\le N(N-1)/2$",
    "difficulty": "HARD",
    "patterns": [
      "Bitmask DP",
      "Graph",
      "Topological Sort"
    ],
    "topics": [
      "Dynamic Programming",
      "Bit Manipulation",
      "Graph",
      "Bitmask"
    ],
    "sampleTestCases": [
      {
        "input": "3 2\n0 1\n0 2",
        "output": "2",
        "explanation": "2 topological sorts."
      },
      {
        "input": "4 0",
        "output": "24",
        "explanation": "No constraints: 4! = 24."
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
        "input": "3 3\n0 1\n1 2\n0 2",
        "output": "1"
      }
    ],
    "hints": [
      "Since N <= 20, use Bitmask DP `dp[mask]` representing the number of valid topological orderings of the subset of vertices indicated by mask.",
      "A vertex $u$ not in mask can be added if all its predecessors are already present in mask."
    ],
    "editorial": {
      "approach": "Bitmask Dynamic Programming",
      "solutionMarkdown": "Iterate over all masks from 0 to $2^N - 1$. Add available nodes whose predecessors are subset of mask.",
      "timeComplexity": "O(2^N * N)",
      "spaceComplexity": "O(2^N)"
    },
    "category": "DSA",
    "starterCode": [
      {
        "language": "python",
        "boilerplate": "def topologicalSortAndValidOrderingCount(*args):\n    # TODO: Implement solution for Topological Sort and Valid Ordering Count\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = topologicalSortAndValidOrderingCount(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(topologicalSortAndValidOrderingCount(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function topologicalSortAndValidOrderingCount(...args) {\n    // TODO: Implement solution for Topological Sort and Valid Ordering Count\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try {\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(topologicalSortAndValidOrderingCount(...parsed)));\n    } catch (e) {\n        console.log(topologicalSortAndValidOrderingCount(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // TODO: Read input from cin and implement solution for Topological Sort and Valid Ordering Count\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        // TODO: Read from br and implement solution for Topological Sort and Valid Ordering Count\n    }\n}\n"
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
    "title": "Topological Sort of a Directed Graph",
    "slug": "topological-sort-directed-graph",
    "description": "Given a Directed Acyclic Graph (DAG) with $V$ vertices and $E$ edges, find a topological sorting of the graph.\\n\\nA topological sorting is a linear ordering of vertices such that for every directed edge $u \\to v$, vertex $u$ comes before $v$ in the ordering. If multiple valid orders exist, return the lexicographically smallest order (by using a min-heap for zero-in-degree nodes in Kahn's algorithm).\\n\\n### Example 1:\\n```\\nInput:\\n6 6\\n5 2\\n5 0\\n4 0\\n4 1\\n2 3\\n3 1\\nOutput: 4 5 0 2 3 1\\nExplanation: A valid topological ordering of vertices.\\n```\\n\\n### Example 2:\\n```\\nInput:\\n4 3\\n0 1\\n1 2\\n2 3\\nOutput: 0 1 2 3\\nExplanation: Linear dependency chain.\\n```\\n\\n### Constraints:\\n- $1 \\le V \\le 10^4$\\n- $0 \\le E \\le 2 \\times 10^4$",
    "difficulty": "MEDIUM",
    "category": "DSA",
    "patterns": [
      "Graph",
      "Topological Sort",
      "BFS"
    ],
    "topics": [
      "Graph",
      "Topological Sort",
      "Breadth-First Search"
    ],
    "companyTags": [
      {
        "company": "Capgemini",
        "frequencyCount": 6,
        "yearReported": 2024
      },
      {
        "company": "Wipro",
        "frequencyCount": 6,
        "yearReported": 2025
      }
    ],
    "sampleTestCases": [
      {
        "input": "6 6\n5 2\n5 0\n4 0\n4 1\n2 3\n3 1",
        "output": "4 5 0 2 3 1",
        "explanation": "Lexicographically smallest topological order."
      },
      {
        "input": "4 3\n0 1\n1 2\n2 3",
        "output": "0 1 2 3",
        "explanation": "Simple chain topological sort."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "1 0",
        "output": "0"
      },
      {
        "input": "2 1\n0 1",
        "output": "0 1"
      },
      {
        "input": "3 2\n0 2\n1 2",
        "output": "0 1 2"
      }
    ],
    "hints": [
      "Compute in-degrees of all vertices.",
      "Use a priority queue of vertices with in-degree 0. While queue is non-empty, pop vertex, add to order, and decrement neighbor in-degrees."
    ],
    "editorial": {
      "approach": "Kahn's Algorithm with Min-Heap",
      "solutionMarkdown": "### Kahn's BFS\nTrack in-degrees. Use min-heap to push vertices with in-degree 0 for deterministic lexicographical ordering.",
      "timeComplexity": "O(V log V + E)",
      "spaceComplexity": "O(V + E)"
    },
    "starterCode": [
      {
        "language": "python",
        "boilerplate": "def topologicalSortDirectedGraph(*args):\n    # TODO: Implement solution for Topological Sort of a Directed Graph\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = topologicalSortDirectedGraph(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(topologicalSortDirectedGraph(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function topologicalSortDirectedGraph(...args) {\n    // TODO: Implement solution for Topological Sort of a Directed Graph\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try {\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(topologicalSortDirectedGraph(...parsed)));\n    } catch (e) {\n        console.log(topologicalSortDirectedGraph(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // TODO: Read input from cin and implement solution for Topological Sort of a Directed Graph\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        // TODO: Read from br and implement solution for Topological Sort of a Directed Graph\n    }\n}\n"
      }
    ],
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
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Transfer a Tree Between Programs (Serialize and Deserialize)\n        // TODO: Read input from cin and implement solution\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        // TODO: Read from br and implement solution\n    }\n}\n"
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
    "title": "Transpose a Matrix",
    "slug": "transpose-matrix",
    "description": "Given a 2D integer array `matrix`, return *the **transpose** of* `matrix`. The transpose of a matrix is the matrix flipped over its main diagonal, switching the matrix's row and column indices.\n\n### Example 1:\n```\nInput: [[1,2,3],[4,5,6],[7,8,9]]\nOutput: [[1,4,7],[2,5,8],[3,6,9]]\nExplanation: Rows become columns.\n```\n\n### Example 2:\n```\nInput: [[1,2,3],[4,5,6]]\nOutput: [[1,4],[2,5],[3,6]]\nExplanation: 2x3 matrix transposed to 3x2 matrix.\n```",
    "difficulty": "EASY",
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
        "company": "TCS",
        "yearReported": 2025,
        "verified": false,
        "frequencyCount": 30,
        "sourceNote": "TCS Practice Bank #30"
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
        "boilerplate": "def transposeMatrix(*args):\n    # TODO: Implement solution for Transpose a Matrix\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = transposeMatrix(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(transposeMatrix(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function transposeMatrix(...args) {\n    // TODO: Implement solution for Transpose a Matrix\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(transposeMatrix(...parsed)));\n    } catch (e) {\n        console.log(transposeMatrix(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Transpose a Matrix\n        // TODO: Read input from cin and implement solution\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        // TODO: Read from br and implement solution\n    }\n}\n"
      }
    ],
    "sampleTestCases": [
      {
        "input": "[[1,2,3],[4,5,6],[7,8,9]]",
        "output": "[[1,4,7],[2,5,8],[3,6,9]]",
        "explanation": "Rows become columns."
      },
      {
        "input": "[[1,2,3],[4,5,6]]",
        "output": "[[1,4],[2,5],[3,6]]",
        "explanation": "2x3 matrix transposed to 3x2 matrix."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "[[1,2,3],[4,5,6],[7,8,9]]",
        "output": "[[1,4,7],[2,5,8],[3,6,9]]",
        "isHidden": true
      },
      {
        "input": "[[1,2,3],[4,5,6]]",
        "output": "[[1,4],[2,5],[3,6]]",
        "isHidden": true
      },
      {
        "input": "[[1]]",
        "output": "[[1]]",
        "isHidden": true
      }
    ],
    "hints": [
      "Result matrix has dimensions c x r where res[c][r] = matrix[r][c]."
    ],
    "editorial": {
      "approach": "Optimal Approach for Transpose a Matrix",
      "solutionMarkdown": "### Optimal Solution\n\nAllocate c x r matrix. Set res[j][i] = matrix[i][j] for all i in 0..r-1 and j in 0..c-1.\n\n### Complexity\n- Time: O(R * C), Space: O(R * C)",
      "timeComplexity": "O(R * C)",
      "spaceComplexity": "O(R * C)"
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
      },
      {
        "company": "Infosys",
        "yearReported": 2025,
        "verified": true,
        "frequencyCount": 42,
        "sourceNote": "Infosys Interview Question #27"
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
        "boilerplate": "def trappingRainWater(*args):\n    # TODO: Implement solution for Trapping Rain Water\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = trappingRainWater(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(trappingRainWater(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function trappingRainWater(...args) {\n    // TODO: Implement solution for Trapping Rain Water\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(trappingRainWater(...parsed)));\n    } catch (e) {\n        console.log(trappingRainWater(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Trapping Rain Water\n        // TODO: Read input from cin and implement solution\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        // TODO: Read from br and implement solution\n    }\n}\n"
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
    "title": "Tree DP: Maximum Weight Independent Set",
    "slug": "tree-dp-maximum-weight-independent-set",
    "description": "Given a tree of $N$ nodes labeled $0$ to $N-1$, where each node has a positive integer weight $weight[i]$, find the maximum total weight of an independent set of nodes (no two selected nodes are adjacent).\\n\\n### Example 1:\\n```\\nInput:\\nweights = [10, 20, 30, 40, 50]\\nedges = [[0, 1], [0, 2], [1, 3], [1, 4]]\\nOutput: 120\\nExplanation: Select nodes 2 (30), 3 (40), and 4 (50). Total weight = 30 + 40 + 50 = 120.\\n```\\n\\n### Example 2:\\n```\\nInput:\\nweights = [1, 2, 3]\\nedges = [[0, 1], [1, 2]]\\nOutput: 4\\nExplanation: Nodes 0 and 2 have weight 1 + 3 = 4.\\n```\\n\\n### Constraints:\\n- $1 \\le N \\le 10^5$\\n- $1 \\le weight[i] \\le 10^5$",
    "difficulty": "HARD",
    "patterns": [
      "Tree DP",
      "Dynamic Programming"
    ],
    "topics": [
      "Tree",
      "Dynamic Programming",
      "Depth-First Search"
    ],
    "sampleTestCases": [
      {
        "input": "weights = [10, 20, 30, 40, 50]\nedges = [[0, 1], [0, 2], [1, 3], [1, 4]]",
        "output": "120",
        "explanation": "Max weight independent set is 120."
      },
      {
        "input": "weights = [1, 2, 3]\nedges = [[0, 1], [1, 2]]",
        "output": "4",
        "explanation": "Weight 1 + 3 = 4."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "weights = [5]\nedges = []",
        "output": "5"
      },
      {
        "input": "weights = [10, 20]\nedges = [[0, 1]]",
        "output": "20"
      },
      {
        "input": "weights = [5, 1, 1, 10]\nedges = [[0, 1], [0, 2], [1, 3]]",
        "output": "16"
      }
    ],
    "hints": [
      "Run post-order DFS computing `include[u] = weight[u] + sum(exclude[v])` and `exclude[u] = sum(max(include[v], exclude[v]))`."
    ],
    "editorial": {
      "approach": "Weighted Tree Dynamic Programming",
      "solutionMarkdown": "For each node, compute max weight including vs excluding the node.",
      "timeComplexity": "O(N)",
      "spaceComplexity": "O(N)"
    },
    "category": "DSA",
    "starterCode": [
      {
        "language": "python",
        "boilerplate": "def treeDpMaximumWeightIndependentSet(*args):\n    # TODO: Implement solution for Tree DP: Maximum Weight Independent Set\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = treeDpMaximumWeightIndependentSet(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(treeDpMaximumWeightIndependentSet(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function treeDpMaximumWeightIndependentSet(...args) {\n    // TODO: Implement solution for Tree DP: Maximum Weight Independent Set\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try {\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(treeDpMaximumWeightIndependentSet(...parsed)));\n    } catch (e) {\n        console.log(treeDpMaximumWeightIndependentSet(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // TODO: Read input from cin and implement solution for Tree DP: Maximum Weight Independent Set\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        // TODO: Read from br and implement solution for Tree DP: Maximum Weight Independent Set\n    }\n}\n"
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
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Count Complete Tree Nodes\n        // TODO: Read input from cin and implement solution\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        // TODO: Read from br and implement solution\n    }\n}\n"
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
      },
      {
        "company": "Infosys",
        "yearReported": 2025,
        "verified": true,
        "frequencyCount": 42,
        "sourceNote": "Infosys Interview Question #1"
      },
      {
        "company": "TCS",
        "yearReported": 2025,
        "verified": false,
        "frequencyCount": 30,
        "sourceNote": "TCS Practice Bank #12"
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
        "boilerplate": "def twoSum(*args):\n    # TODO: Implement solution for Two Sum\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = twoSum(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(twoSum(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function twoSum(...args) {\n    // TODO: Implement solution for Two Sum\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(twoSum(...parsed)));\n    } catch (e) {\n        console.log(twoSum(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Two Sum\n        // TODO: Read input from cin and implement solution\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        // TODO: Read from br and implement solution\n    }\n}\n"
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
      },
      {
        "company": "Infosys",
        "yearReported": 2025,
        "verified": true,
        "frequencyCount": 42,
        "sourceNote": "Infosys Interview Question #86"
      }
    ],
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
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Unbounded Combinations to Target N (Combination Sum IV)\n        // TODO: Read input from cin and implement solution\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
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
      },
      {
        "company": "Infosys",
        "yearReported": 2025,
        "verified": true,
        "frequencyCount": 42,
        "sourceNote": "Infosys Interview Question #90"
      },
      {
        "company": "TCS",
        "yearReported": 2025,
        "verified": false,
        "frequencyCount": 30,
        "sourceNote": "TCS Practice Bank #90"
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
        "boilerplate": "def uniquePaths(*args):\n    # TODO: Implement solution for Unique Paths\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = uniquePaths(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(uniquePaths(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function uniquePaths(...args) {\n    // TODO: Implement solution for Unique Paths\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(uniquePaths(...parsed)));\n    } catch (e) {\n        console.log(uniquePaths(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Unique Paths\n        // TODO: Read input from cin and implement solution\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        // TODO: Read from br and implement solution\n    }\n}\n"
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
    "title": "Unique Paths in a Grid with Obstacles",
    "slug": "unique-paths-ii",
    "description": "You are given an `m x n` integer array `obstacleGrid`. There is a robot initially located at the top-left corner `(0, 0)`. The robot tries to move to the bottom-right corner `(m - 1, n - 1)`. The robot can only move either down or right at any point in time. An obstacle is marked as `1` and open space as `0`. Return *the number of possible unique paths*.\n\n### Example 1:\n```\nInput: [[0,0,0],[0,1,0],[0,0,0]]\nOutput: 2\nExplanation: There is one obstacle in middle of 3x3 grid. Exactly 2 unique paths reach bottom-right.\n```\n\n### Example 2:\n```\nInput: [[0,1],[0,0]]\nOutput: 1\nExplanation: One obstacle blocks right path.\n```",
    "difficulty": "MEDIUM",
    "category": "DP",
    "patterns": [
      "Array",
      "Dynamic Programming",
      "Matrix"
    ],
    "topics": [
      "Array",
      "Dynamic Programming",
      "Matrix"
    ],
    "companyTags": [
      {
        "company": "TCS",
        "yearReported": 2025,
        "verified": true,
        "frequencyCount": 45,
        "sourceNote": "TCS Interview Question #72"
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
        "boilerplate": "def uniquePathsIi(*args):\n    # TODO: Implement solution for Unique Paths in a Grid with Obstacles\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = uniquePathsIi(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(uniquePathsIi(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function uniquePathsIi(...args) {\n    // TODO: Implement solution for Unique Paths in a Grid with Obstacles\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(uniquePathsIi(...parsed)));\n    } catch (e) {\n        console.log(uniquePathsIi(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Unique Paths in a Grid with Obstacles\n        // TODO: Read input from cin and implement solution\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        // TODO: Read from br and implement solution\n    }\n}\n"
      }
    ],
    "sampleTestCases": [
      {
        "input": "[[0,0,0],[0,1,0],[0,0,0]]",
        "output": "2",
        "explanation": "There is one obstacle in middle of 3x3 grid. Exactly 2 unique paths reach bottom-right."
      },
      {
        "input": "[[0,1],[0,0]]",
        "output": "1",
        "explanation": "One obstacle blocks right path."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "[[0,0,0],[0,1,0],[0,0,0]]",
        "output": "2",
        "isHidden": true
      },
      {
        "input": "[[0,1],[0,0]]",
        "output": "1",
        "isHidden": true
      },
      {
        "input": "[[1]]",
        "output": "0",
        "isHidden": true
      }
    ],
    "hints": [
      "If cell has obstacle (grid[i][j] == 1), dp[j] = 0; else dp[j] += dp[j - 1]."
    ],
    "editorial": {
      "approach": "Optimal Approach for Unique Paths in a Grid with Obstacles",
      "solutionMarkdown": "### Optimal Solution\n\n1D space-optimized DP. If grid[r][c] == 1, dp[c] = 0; otherwise dp[c] = dp[c] + dp[c - 1].\n\n### Complexity\n- Time: O(M * N), Space: O(N)",
      "timeComplexity": "O(M * N)",
      "spaceComplexity": "O(N)"
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
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Unique Word Abbreviation\n        // TODO: Read input from cin and implement solution\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        // TODO: Read from br and implement solution\n    }\n}\n"
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
      },
      {
        "company": "Infosys",
        "yearReported": 2025,
        "verified": true,
        "frequencyCount": 42,
        "sourceNote": "Infosys Interview Question #16"
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
      }
    ],
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
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Valid Anagram\n        // TODO: Read input from cin and implement solution\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        // TODO: Read from br and implement solution\n    }\n}\n"
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
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Valid Number\n        // TODO: Read input from cin and implement solution\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        // TODO: Read from br and implement solution\n    }\n}\n"
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
      },
      {
        "company": "Infosys",
        "yearReported": 2025,
        "verified": true,
        "frequencyCount": 42,
        "sourceNote": "Infosys Interview Question #24"
      },
      {
        "company": "TCS",
        "yearReported": 2025,
        "verified": true,
        "frequencyCount": 45,
        "sourceNote": "TCS Interview Question #7"
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
        "boilerplate": "def validPalindrome(*args):\n    # TODO: Implement solution for Valid Palindrome\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = validPalindrome(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(validPalindrome(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function validPalindrome(...args) {\n    // TODO: Implement solution for Valid Palindrome\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(validPalindrome(...parsed)));\n    } catch (e) {\n        console.log(validPalindrome(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Valid Palindrome\n        // TODO: Read input from cin and implement solution\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        // TODO: Read from br and implement solution\n    }\n}\n"
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
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Valid Palindrome II\n        // TODO: Read input from cin and implement solution\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        // TODO: Read from br and implement solution\n    }\n}\n"
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
      },
      {
        "company": "Infosys",
        "yearReported": 2025,
        "verified": true,
        "frequencyCount": 42,
        "sourceNote": "Infosys Interview Question #44"
      },
      {
        "company": "TCS",
        "yearReported": 2025,
        "verified": false,
        "frequencyCount": 30,
        "sourceNote": "TCS Practice Bank #42"
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
        "boilerplate": "def validParentheses(*args):\n    # TODO: Implement solution for Valid Parentheses\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = validParentheses(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(validParentheses(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function validParentheses(...args) {\n    // TODO: Implement solution for Valid Parentheses\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(validParentheses(...parsed)));\n    } catch (e) {\n        console.log(validParentheses(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Valid Parentheses\n        // TODO: Read input from cin and implement solution\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        // TODO: Read from br and implement solution\n    }\n}\n"
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
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Valid Parenthesis String\n        // TODO: Read input from cin and implement solution\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        // TODO: Read from br and implement solution\n    }\n}\n"
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
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Valid String Frequency Constraint\n        // TODO: Read input from cin and implement solution\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        // TODO: Read from br and implement solution\n    }\n}\n"
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
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Valid Sudoku\n        // TODO: Read input from cin and implement solution\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        // TODO: Read from br and implement solution\n    }\n}\n"
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
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Valid Word Abbreviation\n        // TODO: Read input from cin and implement solution\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        // TODO: Read from br and implement solution\n    }\n}\n"
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
    "title": "Validate an IP Address",
    "slug": "validate-an-ip-address",
    "description": "Given a string `queryIP`, return `\"IPv4\"` if IP is a valid IPv4 address, `\"IPv6\"` if IP is a valid IPv6 address or `\"Neither\"` if IP is not a correct IP of any type.\\n\\nA valid IPv4 address is an IP in the form \"x1.x2.x3.x4\" where $0 \\le x_i \\le 255$ and $x_i$ cannot contain leading zeros.\\n\\nA valid IPv6 address is an IP in the form \"x1:x2:x3:x4:x5:x6:x7:x8\" where $1 \\le |x_i| \\le 4$ and $x_i$ is a hexadecimal string (0-9, a-f, A-F).\\n\\n### Example 1:\\n```\\nInput: queryIP = \"172.16.254.1\"\\nOutput: \"IPv4\"\\n```\\n\\n### Example 2:\\n```\\nInput: queryIP = \"2001:0db8:85a3:0:0:8A2E:0370:7334\"\\nOutput: \"IPv6\"\\n```\\n\\n### Constraints:\\n- `queryIP` consists only of English letters, digits and the characters '.' and ':'.",
    "difficulty": "MEDIUM",
    "patterns": [
      "String",
      "Simulation"
    ],
    "topics": [
      "String"
    ],
    "sampleTestCases": [
      {
        "input": "queryIP = \"172.16.254.1\"",
        "output": "\"IPv4\"",
        "explanation": "Valid IPv4 address."
      },
      {
        "input": "queryIP = \"2001:0db8:85a3:0:0:8A2E:0370:7334\"",
        "output": "\"IPv6\"",
        "explanation": "Valid IPv6 address."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "queryIP = \"256.256.256.256\"",
        "output": "\"Neither\""
      },
      {
        "input": "queryIP = \"1.1.1.1.\"",
        "output": "\"Neither\""
      },
      {
        "input": "queryIP = \"02001:0db8:85a3:0000:0000:8a2e:0370:7334\"",
        "output": "\"Neither\""
      }
    ],
    "hints": [
      "Count delimiter characters: IPv4 must have exactly 3 dots, IPv6 must have exactly 7 colons.",
      "Validate range and leading zeroes for IPv4, hexadecimal digits for IPv6."
    ],
    "editorial": {
      "approach": "Strict Delimiter & Token Parsing",
      "solutionMarkdown": "Check delimiter count and parse chunks according to IPv4 / IPv6 RFC specifications.",
      "timeComplexity": "O(N)",
      "spaceComplexity": "O(1)"
    },
    "category": "DSA",
    "starterCode": [
      {
        "language": "python",
        "boilerplate": "def validateAnIpAddress(*args):\n    # TODO: Implement solution for Validate an IP Address\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = validateAnIpAddress(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(validateAnIpAddress(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function validateAnIpAddress(...args) {\n    // TODO: Implement solution for Validate an IP Address\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try {\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(validateAnIpAddress(...parsed)));\n    } catch (e) {\n        console.log(validateAnIpAddress(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // TODO: Read input from cin and implement solution for Validate an IP Address\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        // TODO: Read from br and implement solution for Validate an IP Address\n    }\n}\n"
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
      },
      {
        "company": "Infosys",
        "yearReported": 2025,
        "verified": true,
        "frequencyCount": 42,
        "sourceNote": "Infosys Interview Question #58"
      },
      {
        "company": "TCS",
        "yearReported": 2025,
        "verified": false,
        "frequencyCount": 30,
        "sourceNote": "TCS Practice Bank #65"
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
        "boilerplate": "def validateBinarySearchTree(*args):\n    # TODO: Implement solution for Validate Binary Search Tree\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = validateBinarySearchTree(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(validateBinarySearchTree(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function validateBinarySearchTree(...args) {\n    // TODO: Implement solution for Validate Binary Search Tree\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(validateBinarySearchTree(...parsed)));\n    } catch (e) {\n        console.log(validateBinarySearchTree(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Validate Binary Search Tree\n        // TODO: Read input from cin and implement solution\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        // TODO: Read from br and implement solution\n    }\n}\n"
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
    "title": "Validate BST from Level-Order Traversal",
    "slug": "validate-bst-from-level-order-traversal",
    "description": "Given an array of integers representing the level-order traversal of a binary tree, determine if the level-order traversal represents a valid Binary Search Tree (BST).\\n\\nReturn `true` if it represents a valid BST, otherwise `false`.\\n\\n### Example 1:\\n```\\nInput: [7, 4, 9, 2, 5, 8, 10]\\nOutput: true\\nExplanation: Valid BST level-order traversal.\\n```\\n\\n### Example 2:\\n```\\nInput: [7, 4, 9, 10, 5]\\nOutput: false\\nExplanation: Node 10 cannot be in the left subtree of 7.\\n```\\n\\n### Constraints:\\n- $1 \\le |arr| \\le 10^4$\\n- $-10^9 \\le arr[i] \\le 10^9$",
    "difficulty": "MEDIUM",
    "patterns": [
      "Tree",
      "BST",
      "Queue"
    ],
    "topics": [
      "Tree",
      "Binary Search Tree",
      "Queue"
    ],
    "sampleTestCases": [
      {
        "input": "[7, 4, 9, 2, 5, 8, 10]",
        "output": "true",
        "explanation": "Valid BST."
      },
      {
        "input": "[7, 4, 9, 10, 5]",
        "output": "false",
        "explanation": "Out-of-bounds node."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "[1]",
        "output": "true"
      },
      {
        "input": "[2, 1, 3]",
        "output": "true"
      },
      {
        "input": "[2, 3, 1]",
        "output": "false"
      }
    ],
    "hints": [
      "Use a queue of allowable ranges `(min_val, max_val)` initialized with `(-inf, +inf)`.",
      "Match array elements sequentially to allowable range slots."
    ],
    "editorial": {
      "approach": "Queue of Allowed Value Ranges",
      "solutionMarkdown": "Simulate level order tree reconstruction matching values to child range boundaries.",
      "timeComplexity": "O(N)",
      "spaceComplexity": "O(N)"
    },
    "category": "DSA",
    "starterCode": [
      {
        "language": "python",
        "boilerplate": "def validateBstFromLevelOrderTraversal(*args):\n    # TODO: Implement solution for Validate BST from Level-Order Traversal\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = validateBstFromLevelOrderTraversal(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(validateBstFromLevelOrderTraversal(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function validateBstFromLevelOrderTraversal(...args) {\n    // TODO: Implement solution for Validate BST from Level-Order Traversal\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try {\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(validateBstFromLevelOrderTraversal(...parsed)));\n    } catch (e) {\n        console.log(validateBstFromLevelOrderTraversal(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // TODO: Read input from cin and implement solution for Validate BST from Level-Order Traversal\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        // TODO: Read from br and implement solution for Validate BST from Level-Order Traversal\n    }\n}\n"
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
        "boilerplate": "def wallsAndGates(*args):\n    # TODO: Implement solution for Walls and Gates\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = wallsAndGates(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(wallsAndGates(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function wallsAndGates(...args) {\n    // TODO: Implement solution for Walls and Gates\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(wallsAndGates(...parsed)));\n    } catch (e) {\n        console.log(wallsAndGates(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Walls and Gates\n        // TODO: Read input from cin and implement solution\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        // TODO: Read from br and implement solution\n    }\n}\n"
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
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Wiggle Sort\n        // TODO: Read input from cin and implement solution\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        // TODO: Read from br and implement solution\n    }\n}\n"
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
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Wildcard Matching\n        // TODO: Read input from cin and implement solution\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        // TODO: Read from br and implement solution\n    }\n}\n"
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
      },
      {
        "company": "Infosys",
        "yearReported": 2025,
        "verified": true,
        "frequencyCount": 42,
        "sourceNote": "Infosys Interview Question #94"
      },
      {
        "company": "TCS",
        "yearReported": 2025,
        "verified": false,
        "frequencyCount": 30,
        "sourceNote": "TCS Practice Bank #95"
      },
      {
        "company": "Capgemini",
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
        "boilerplate": "def wordBreak(*args):\n    # TODO: Implement solution for Word Break\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = wordBreak(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(wordBreak(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function wordBreak(...args) {\n    // TODO: Implement solution for Word Break\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(wordBreak(...parsed)));\n    } catch (e) {\n        console.log(wordBreak(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Word Break\n        // TODO: Read input from cin and implement solution\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        // TODO: Read from br and implement solution\n    }\n}\n"
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
    "title": "Word Break II",
    "slug": "word-break-ii",
    "description": "Given a string `s` and a dictionary of strings `wordDict`, add spaces in `s` to construct a sentence where each word is a valid dictionary word. Return all such possible sentences in any order.\\n\\nNote that the same word in the dictionary may be reused multiple times in the segmentation.\\n\\n### Example 1:\\n```\\nInput: s = \"catsanddog\", wordDict = [\"cat\",\"cats\",\"and\",\"sand\",\"dog\"]\\nOutput: [\"cats and dog\",\"cat sand dog\"]\\n```\\n\\n### Example 2:\\n```\\nInput: s = \"pineapplepenapple\", wordDict = [\"apple\",\"pen\",\"applepen\",\"pine\",\"pineapple\"]\\nOutput: [\"pine apple pen apple\",\"pineapple pen apple\",\"pine applepen apple\"]\\n```\\n\\n### Constraints:\\n- $1 \\le |s| \\le 20$\\n- $1 \\le |wordDict| \\le 1000$\\n- $1 \\le |wordDict[i]| \\le 10$",
    "difficulty": "HARD",
    "patterns": [
      "Backtracking",
      "Dynamic Programming",
      "Trie"
    ],
    "topics": [
      "Array",
      "Hash Table",
      "String",
      "Dynamic Programming",
      "Backtracking",
      "Trie",
      "Memoization"
    ],
    "sampleTestCases": [
      {
        "input": "s = \"catsanddog\"\nwordDict = [\"cat\",\"cats\",\"and\",\"sand\",\"dog\"]",
        "output": "[\"cats and dog\",\"cat sand dog\"]",
        "explanation": "All valid sentences formed."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "s = \"catsandog\"\nwordDict = [\"cats\",\"dog\",\"sand\",\"and\",\"cat\"]",
        "output": "[]"
      },
      {
        "input": "s = \"a\"\nwordDict = [\"a\"]",
        "output": "[\"a\"]"
      },
      {
        "input": "s = \"bb\"\nwordDict = [\"b\"]",
        "output": "[\"b b\"]"
      }
    ],
    "hints": [
      "Use memoized DFS `dfs(start_index)` returning all valid sentence suffixes from that index."
    ],
    "editorial": {
      "approach": "Memoized DFS String Segmentation",
      "solutionMarkdown": "Cache results of `dfs(start)` to avoid redundant exponential branching on overlapping partitions.",
      "timeComplexity": "O(2^N)",
      "spaceComplexity": "O(2^N)"
    },
    "category": "DSA",
    "starterCode": [
      {
        "language": "python",
        "boilerplate": "def wordBreakIi(*args):\n    # TODO: Implement solution for Word Break II\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = wordBreakIi(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(wordBreakIi(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function wordBreakIi(...args) {\n    // TODO: Implement solution for Word Break II\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try {\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(wordBreakIi(...parsed)));\n    } catch (e) {\n        console.log(wordBreakIi(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // TODO: Read input from cin and implement solution for Word Break II\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        // TODO: Read from br and implement solution for Word Break II\n    }\n}\n"
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
      },
      {
        "company": "Infosys",
        "yearReported": 2025,
        "verified": true,
        "frequencyCount": 42,
        "sourceNote": "Infosys Interview Question #72"
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
        "boilerplate": "def wordLadder(*args):\n    # TODO: Implement solution for Word Ladder\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = wordLadder(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(wordLadder(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function wordLadder(...args) {\n    // TODO: Implement solution for Word Ladder\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(wordLadder(...parsed)));\n    } catch (e) {\n        console.log(wordLadder(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Word Ladder\n        // TODO: Read input from cin and implement solution\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        // TODO: Read from br and implement solution\n    }\n}\n"
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
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Word Ladder II\n        // TODO: Read input from cin and implement solution\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        // TODO: Read from br and implement solution\n    }\n}\n"
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
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Word Pattern\n        // TODO: Read input from cin and implement solution\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        // TODO: Read from br and implement solution\n    }\n}\n"
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
        "boilerplate": "def wordSearch(*args):\n    # TODO: Implement solution for Word Search\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = wordSearch(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(wordSearch(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function wordSearch(...args) {\n    // TODO: Implement solution for Word Search\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try:\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(wordSearch(...parsed)));\n    } catch (e) {\n        console.log(wordSearch(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Word Search\n        // TODO: Read input from cin and implement solution\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        // TODO: Read from br and implement solution\n    }\n}\n"
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
      },
      {
        "company": "Infosys",
        "yearReported": 2025,
        "verified": true,
        "frequencyCount": 42,
        "sourceNote": "Infosys Interview Question #66"
      }
    ],
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
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Word Search II\n        // TODO: Read input from cin and implement solution\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        // TODO: Read from br and implement solution\n    }\n}\n"
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
    "title": "Zero Array Transformation Queries",
    "slug": "zero-array-transformation-queries",
    "description": "You are given an integer array `nums` of length `n` and a 2D array `queries` where `queries[i] = [li, ri]`. For each query, you can choose any subset of indices within `[li, ri]` and decrement `nums` at those indices by 1. Return `true` if it is possible to transform all elements of `nums` into 0, otherwise return `false`.\\n\\n### Example 1:\\n```\\nInput: nums = [1, 0, 1], queries = [[0, 2]]\\nOutput: true\\nExplanation: Query [0, 2] allows decrementing nums[0] and nums[2] by 1.\\n```\\n\\n### Example 2:\\n```\\nInput: nums = [4, 3, 2, 1], queries = [[1, 3], [0, 2]]\\nOutput: false\\nExplanation: The total available decrements at index 0 is 1, which is less than nums[0] = 4.\\n```\\n\\n### Constraints:\\n- $1 \\le |nums| \\le 10^5$\\n- $0 \\le nums[i] \\le 10^5$\\n- $1 \\le |queries| \\le 10^5$",
    "difficulty": "MEDIUM",
    "patterns": [
      "Difference Array",
      "Prefix Sum"
    ],
    "topics": [
      "Array",
      "Prefix Sum"
    ],
    "sampleTestCases": [
      {
        "input": "nums = [1, 0, 1]\nqueries = [[0, 2]]",
        "output": "true",
        "explanation": "Available decrements cover nums values."
      },
      {
        "input": "nums = [4, 3, 2, 1]\nqueries = [[1, 3], [0, 2]]",
        "output": "false",
        "explanation": "Insufficient coverage at index 0."
      }
    ],
    "hiddenTestCases": [
      {
        "input": "nums = [0]\nqueries = []",
        "output": "true"
      },
      {
        "input": "nums = [2]\nqueries = [[0, 0], [0, 0]]",
        "output": "true"
      },
      {
        "input": "nums = [5]\nqueries = [[0, 0]]",
        "output": "false"
      }
    ],
    "hints": [
      "Use a difference array `diff` to record query coverage: `diff[l] += 1, diff[r+1] -= 1`.",
      "Compute running prefix sum of diff. If `coverage[i] < nums[i]` for any index, return false."
    ],
    "editorial": {
      "approach": "Difference Array Range Coverage Verification",
      "solutionMarkdown": "Add range counts with difference array in O(Q), take prefix sum in O(N), compare with `nums`.",
      "timeComplexity": "O(N + Q)",
      "spaceComplexity": "O(N)"
    },
    "category": "DSA",
    "starterCode": [
      {
        "language": "python",
        "boilerplate": "def zeroArrayTransformationQueries(*args):\n    # TODO: Implement solution for Zero Array Transformation Queries\n    pass\n\n# Driver Code\nimport sys, json\ninput_data = sys.stdin.read().strip().splitlines()\nif input_data:\n    try:\n        parsed = [json.loads(line) for line in input_data if line.strip()]\n        result = zeroArrayTransformationQueries(*parsed)\n        print(json.dumps(result))\n    except Exception:\n        print(zeroArrayTransformationQueries(*input_data))\n"
      },
      {
        "language": "javascript",
        "boilerplate": "function zeroArrayTransformationQueries(...args) {\n    // TODO: Implement solution for Zero Array Transformation Queries\n}\n\nconst fs = require('fs');\nconst lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nif (lines.length > 0) {\n    try {\n        const parsed = lines.map(l => JSON.parse(l));\n        console.log(JSON.stringify(zeroArrayTransformationQueries(...parsed)));\n    } catch (e) {\n        console.log(zeroArrayTransformationQueries(...lines));\n    }\n}\n"
      },
      {
        "language": "cpp",
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // TODO: Read input from cin and implement solution for Zero Array Transformation Queries\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        // TODO: Read from br and implement solution for Zero Array Transformation Queries\n    }\n}\n"
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
        "boilerplate": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Read stdin and implement solution for Zigzag Iterator\n        // TODO: Read input from cin and implement solution\n    }\n};\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    Solution sol;\n    sol.solve();\n    return 0;\n}\n"
      },
      {
        "language": "java",
        "boilerplate": "import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        // TODO: Read from br and implement solution\n    }\n}\n"
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
export const faangProblems4 = faang4;
