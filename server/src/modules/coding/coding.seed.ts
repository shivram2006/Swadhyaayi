import { QuestionCoding } from './coding.model';
import { faangQuestionsList } from './faangProblems.seed';

export const seedInitialCodingProblems = async () => {
  const problems = [
    {
      title: 'Two Sum',
      slug: 'two-sum',
      description: `Given an array of integers \`nums\` and an integer \`target\`, return *indices of the two numbers such that they add up to \`target\`*.

You may assume that each input would have ***exactly one solution***, and you may not use the same element twice.

### Example 1:
\`\`\`
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
\`\`\`

### Example 2:
\`\`\`
Input: nums = [3,2,4], target = 6
Output: [1,2]
\`\`\``,
      difficulty: 'EASY',
      category: 'DSA',
      patterns: ['Hashing', 'Two Pointers'],
      topics: ['Array', 'Hash Table'],
      companyTags: [
        { company: 'Apple', yearReported: 2025, verified: true, frequencyCount: 40, sourceNote: 'Apple Practice Bank #1' },
        { company: 'Google', yearReported: 2024, verified: true, frequencyCount: 42, sourceNote: 'L3 Onsite' },
        { company: 'Amazon', yearReported: 2024, verified: true, frequencyCount: 78, sourceNote: 'SDE-1 OA' },
        { company: 'Microsoft', yearReported: 2023, verified: true, frequencyCount: 35, sourceNote: 'Campus Technical' },
      ],
      supportedLanguages: ['python', 'javascript', 'cpp', 'java'],
      starterCode: [
        {
          language: 'python',
          boilerplate: `def twoSum(nums, target):
    # Write your solution here
    seen = {}
    for i, num in enumerate(nums):
        diff = target - num
        if diff in seen:
            return [seen[diff], i]
        seen[num] = i
    return []

# Driver
import json, sys
data = sys.stdin.read().splitlines()
if len(data) >= 2:
    nums = json.loads(data[0])
    target = int(data[1])
    print(json.dumps(twoSum(nums, target)))
`,
        },
        {
          language: 'javascript',
          boilerplate: `function twoSum(nums, target) {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        const diff = target - nums[i];
        if (map.has(diff)) {
            return [map.get(diff), i];
        }
        map.set(nums[i], i);
    }
    return [];
}

const fs = require('fs');
const lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');
if (lines.length >= 2) {
    const nums = JSON.parse(lines[0]);
    const target = parseInt(lines[1], 10);
    console.log(JSON.stringify(twoSum(nums, target)));
}
`,
        },
        {
          language: 'cpp',
          boilerplate: `#include <iostream>
#include <vector>
#include <unordered_map>
#include <string>
#include <sstream>

using namespace std;

vector<int> twoSum(vector<int>& nums, int target) {
    // Write your solution here
    unordered_map<int, int> seen;
    for (int i = 0; i < nums.size(); ++i) {
        int diff = target - nums[i];
        if (seen.find(diff) != seen.end()) {
            return {seen[diff], i};
        }
        seen[nums[i]] = i;
    }
    return {};
}

int main() {
    string line;
    if (getline(cin, line)) {
        vector<int> nums;
        stringstream ss(line);
        char ch;
        int val;
        while (ss >> ch) {
            if (ch == '[' || ch == ',' || ch == ']') continue;
            ss.putback(ch);
            if (ss >> val) nums.push_back(val);
        }
        int target = 0;
        if (cin >> target) {
            vector<int> res = twoSum(nums, target);
            cout << "[" << res[0] << ", " << res[1] << "]" << endl;
        }
    }
    return 0;
}
`,
        },
        {
          language: 'java',
          boilerplate: `import java.util.*;

public class Solution {
    public static int[] twoSum(int[] nums, int target) {
        // Write your solution here
        Map<Integer, Integer> seen = new HashMap<>();
        for (int i = 0; i < nums.length; i++) {
            int diff = target - nums[i];
            if (seen.containsKey(diff)) {
                return new int[] { seen.get(diff), i };
            }
            seen.put(nums[i], i);
        }
        return new int[0];
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextLine()) {
            String line = sc.nextLine().replaceAll("[\\[\\]\\s]", "");
            String[] parts = line.split(",");
            int[] nums = new int[parts.length];
            for (int i = 0; i < parts.length; i++) {
                nums[i] = Integer.parseInt(parts[i]);
            }
            if (sc.hasNextInt()) {
                int target = sc.nextInt();
                int[] res = twoSum(nums, target);
                System.out.println("[" + res[0] + ", " + res[1] + "]");
            }
        }
        sc.close();
    }
}
`,
        },
      ],
      sampleTestCases: [
        {
          input: `[2,7,11,15]\n9`,
          output: `[0, 1]`,
          explanation: 'nums[0] + nums[1] = 2 + 7 = 9',
        },
        {
          input: `[3,2,4]\n6`,
          output: `[1, 2]`,
          explanation: 'nums[1] + nums[2] = 2 + 4 = 6',
        },
      ],
      hiddenTestCases: [
        { input: `[2,7,11,15]\n9`, expectedOutput: `[0, 1]`, weight: 1 },
        { input: `[3,2,4]\n6`, expectedOutput: `[1, 2]`, weight: 1 },
        { input: `[3,3]\n6`, expectedOutput: `[0, 1]`, weight: 1 },
        { input: `[-1,-2,-3,-4,-5]\n-8`, expectedOutput: `[2, 4]`, weight: 1 },
      ],
      timeLimitMs: 2000,
      memoryLimitMb: 256,
      hints: [
        'A naive brute force checks every pair in O(N^2) time.',
        'Can we use a Hash Map to find the complement (target - num) in O(1) time?',
      ],
      editorial: {
        solutionMarkdown: `### Hash Map Approach (One-Pass)
We maintain a hash map where key is number and value is index. For each number, calculate its difference from target and check if difference exists in the map.`,
        complexityAnalysis: 'Time Complexity: O(N) where N is number of elements. Space Complexity: O(N) to store hash map.',
      },
      isGlobal: true,
      status: 'PUBLISHED',
    },
    {
      title: 'Longest Substring Without Repeating Characters',
      slug: 'longest-substring-without-repeating-characters',
      description: `Given a string \`s\`, find the length of the **longest substring** without repeating characters.

### Example 1:
\`\`\`
Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
\`\`\`

### Example 2:
\`\`\`
Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
\`\`\``,
      difficulty: 'MEDIUM',
      category: 'DSA',
      patterns: ['Sliding Window', 'Two Pointers', 'Hashing'],
      topics: ['Hash Table', 'String', 'Sliding Window'],
      companyTags: [
        { company: 'Apple', yearReported: 2025, verified: true, frequencyCount: 45, sourceNote: 'Apple Technical Round / Practice Bank #12' },
        { company: 'Microsoft', yearReported: 2024, verified: true, frequencyCount: 52, sourceNote: 'Campus Placement Round 2' },
        { company: 'Amazon', yearReported: 2024, verified: true, frequencyCount: 64, sourceNote: 'SDE OA' },
        { company: 'Adobe', yearReported: 2023, verified: true, frequencyCount: 29, sourceNote: 'Product Specialist' },
      ],
      supportedLanguages: ['python', 'javascript', 'cpp', 'java'],
      starterCode: [
        {
          language: 'python',
          boilerplate: `def lengthOfLongestSubstring(s):
    char_map = {}
    left = 0
    max_len = 0
    for right, char in enumerate(s):
        if char in char_map and char_map[char] >= left:
            left = char_map[char] + 1
        char_map[char] = right
        max_len = max(max_len, right - left + 1)
    return max_len

import sys
input_str = sys.stdin.read().strip()
print(lengthOfLongestSubstring(input_str))
`,
        },
        {
          language: 'javascript',
          boilerplate: `function lengthOfLongestSubstring(s) {
    const map = new Map();
    let left = 0;
    let maxLen = 0;
    for (let right = 0; right < s.length; right++) {
        if (map.has(s[right]) && map.get(s[right]) >= left) {
            left = map.get(s[right]) + 1;
        }
        map.set(s[right], right);
        maxLen = Math.max(maxLen, right - left + 1);
    }
    return maxLen;
}

const fs = require('fs');
const s = fs.readFileSync(0, 'utf-8').trim();
console.log(lengthOfLongestSubstring(s));
`,
        },
        {
          language: 'cpp',
          boilerplate: `#include <iostream>
#include <string>
#include <unordered_map>
#include <algorithm>

using namespace std;

int lengthOfLongestSubstring(string s) {
    unordered_map<char, int> charMap;
    int left = 0, maxLen = 0;
    for (int right = 0; right < s.length(); ++right) {
        if (charMap.find(s[right]) != charMap.end() && charMap[s[right]] >= left) {
            left = charMap[s[right]] + 1;
        }
        charMap[s[right]] = right;
        maxLen = max(maxLen, right - left + 1);
    }
    return maxLen;
}

int main() {
    string s;
    if (getline(cin, s)) {
        cout << lengthOfLongestSubstring(s) << endl;
    } else {
        cout << 0 << endl;
    }
    return 0;
}
`,
        },
        {
          language: 'java',
          boilerplate: `import java.util.*;

public class Solution {
    public static int lengthOfLongestSubstring(String s) {
        Map<Character, Integer> charMap = new HashMap<>();
        int left = 0, maxLen = 0;
        for (int right = 0; right < s.length(); right++) {
            char c = s.charAt(right);
            if (charMap.containsKey(c) && charMap.get(c) >= left) {
                left = charMap.get(c) + 1;
            }
            charMap.put(c, right);
            maxLen = Math.max(maxLen, right - left + 1);
        }
        return maxLen;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String s = sc.hasNextLine() ? sc.nextLine().trim() : "";
        System.out.println(lengthOfLongestSubstring(s));
        sc.close();
    }
}
`,
        },
      ],
      sampleTestCases: [
        { input: `abcabcbb`, output: `3`, explanation: 'The answer is "abc"' },
        { input: `bbbbb`, output: `1`, explanation: 'The answer is "b"' },
      ],
      hiddenTestCases: [
        { input: `abcabcbb`, expectedOutput: `3`, weight: 1 },
        { input: `bbbbb`, expectedOutput: `1`, weight: 1 },
        { input: `pwwkew`, expectedOutput: `3`, weight: 1 },
        { input: ``, expectedOutput: `0`, weight: 1 },
        { input: `dvdf`, expectedOutput: `3`, weight: 1 },
      ],
      timeLimitMs: 2000,
      memoryLimitMb: 256,
      hints: [
        'Use the Sliding Window technique with left and right pointers.',
        'Store the latest seen index of each character to instantly advance left pointer.',
      ],
      editorial: {
        solutionMarkdown: `### Sliding Window with Hash Map
We maintain a dynamic window \`[left, right]\`. As we iterate with \`right\`, if \`s[right]\` was already seen inside our current window, we update \`left\` to \`last_seen[s[right]] + 1\`.`,
        complexityAnalysis: 'Time Complexity: O(N) linear scan. Space Complexity: O(min(N, M)) where M is character set size.',
      },
      isGlobal: true,
      status: 'PUBLISHED',
    },
    {
      title: 'Daily Temperatures',
      slug: 'daily-temperatures',
      description: `Given an array of integers \`temperatures\` represents the daily temperatures, return *an array \`answer\` such that \`answer[i]\` is the number of days you have to wait after the \`i-th\` day to get a warmer temperature*. If there is no future day for which this is possible, keep \`answer[i] == 0\` instead.

### Example 1:
\`\`\`
Input: temperatures = [73,74,75,71,69,72,76,73]
Output: [1,1,4,2,1,1,0,0]
\`\`\``,
      difficulty: 'MEDIUM',
      category: 'DSA',
      patterns: ['Monotonic Stack'],
      topics: ['Array', 'Stack', 'Monotonic Stack'],
      companyTags: [
        { company: 'Apple', yearReported: 2024, verified: true, frequencyCount: 18, sourceNote: 'Apple SWE Interview / Practice Bank #77' },
        { company: 'Amazon', yearReported: 2024, verified: true, frequencyCount: 45, sourceNote: 'SDE-2 Interview' },
        { company: 'Meta', yearReported: 2023, verified: true, frequencyCount: 38, sourceNote: 'E4 Onsite' },
      ],
      supportedLanguages: ['python', 'javascript', 'cpp', 'java'],
      starterCode: [
        {
          language: 'python',
          boilerplate: `def dailyTemperatures(temperatures):
    n = len(temperatures)
    ans = [0] * n
    stack = [] # stores indices
    for i, t in enumerate(temperatures):
        while stack and temperatures[stack[-1]] < t:
            prev = stack.pop()
            ans[prev] = i - prev
        stack.append(i)
    return ans

import json, sys
data = sys.stdin.read().strip()
if data:
    temps = json.loads(data)
    print(json.dumps(dailyTemperatures(temps)))
`,
        },
        {
          language: 'javascript',
          boilerplate: `function dailyTemperatures(temperatures) {
    const n = temperatures.length;
    const ans = new Array(n).fill(0);
    const stack = [];
    for (let i = 0; i < n; i++) {
        while (stack.length && temperatures[stack[stack.length - 1]] < temperatures[i]) {
            const prev = stack.pop();
            ans[prev] = i - prev;
        }
        stack.push(i);
    }
    return ans;
}

const fs = require('fs');
const data = fs.readFileSync(0, 'utf-8').trim();
if (data) {
    const temps = JSON.parse(data);
    console.log(JSON.stringify(dailyTemperatures(temps)));
}
`,
        },
        {
          language: 'cpp',
          boilerplate: `#include <iostream>
#include <vector>
#include <stack>
#include <string>
#include <sstream>

using namespace std;

vector<int> dailyTemperatures(vector<int>& temperatures) {
    int n = temperatures.size();
    vector<int> ans(n, 0);
    stack<int> st;
    for (int i = 0; i < n; ++i) {
        while (!st.empty() && temperatures[st.top()] < temperatures[i]) {
            int prev = st.top();
            st.pop();
            ans[prev] = i - prev;
        }
        st.push(i);
    }
    return ans;
}

int main() {
    string line;
    if (getline(cin, line)) {
        vector<int> temps;
        stringstream ss(line);
        char ch;
        int val;
        while (ss >> ch) {
            if (ch == '[' || ch == ',' || ch == ']') continue;
            ss.putback(ch);
            if (ss >> val) temps.push_back(val);
        }
        vector<int> res = dailyTemperatures(temps);
        cout << "[";
        for (size_t i = 0; i < res.size(); ++i) {
            cout << res[i] << (i < res.size() - 1 ? ", " : "");
        }
        cout << "]" << endl;
    }
    return 0;
}
`,
        },
        {
          language: 'java',
          boilerplate: `import java.util.*;

public class Solution {
    public static int[] dailyTemperatures(int[] temperatures) {
        int n = temperatures.length;
        int[] ans = new int[n];
        Deque<Integer> stack = new ArrayDeque<>();
        for (int i = 0; i < n; i++) {
            while (!stack.isEmpty() && temperatures[stack.peek()] < temperatures[i]) {
                int prev = stack.pop();
                ans[prev] = i - prev;
            }
            stack.push(i);
        }
        return ans;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextLine()) {
            String line = sc.nextLine().replaceAll("[\\[\\]\\s]", "");
            String[] parts = line.split(",");
            int[] temps = new int[parts.length];
            for (int i = 0; i < parts.length; i++) {
                temps[i] = Integer.parseInt(parts[i]);
            }
            int[] res = dailyTemperatures(temps);
            System.out.print("[");
            for (int i = 0; i < res.length; i++) {
                System.out.print(res[i] + (i < res.length - 1 ? ", " : ""));
            }
            System.out.println("]");
        }
        sc.close();
    }
}
`,
        },
      ],
      sampleTestCases: [
        { input: `[73,74,75,71,69,72,76,73]`, output: `[1, 1, 4, 2, 1, 1, 0, 0]` },
      ],
      hiddenTestCases: [
        { input: `[73,74,75,71,69,72,76,73]`, expectedOutput: `[1, 1, 4, 2, 1, 1, 0, 0]`, weight: 1 },
        { input: `[30,40,50,60]`, expectedOutput: `[1, 1, 1, 0]`, weight: 1 },
        { input: `[30,60,90]`, expectedOutput: `[1, 1, 0]`, weight: 1 },
      ],
      timeLimitMs: 2000,
      memoryLimitMb: 256,
      hints: [
        'Can we use a Monotonic Decreasing Stack to find the next greater element in O(N)?',
      ],
      isGlobal: true,
      status: 'PUBLISHED',
    },
  ];

  const problemMap = new Map();
  for (const prob of [...problems, ...faangQuestionsList]) {
    problemMap.set(prob.slug, prob);
  }
  const allProblems = Array.from(problemMap.values());

  for (const prob of allProblems) {
    await QuestionCoding.findOneAndUpdate({ slug: prob.slug }, prob, { upsert: true, new: true });
  }

  console.log(`[SEED] Pre-seeded ${allProblems.length} algorithmic pattern questions (including complete company catalogs: Apple 100, Meta 100, Microsoft 100, Google 100, Accenture 100).`);
};
