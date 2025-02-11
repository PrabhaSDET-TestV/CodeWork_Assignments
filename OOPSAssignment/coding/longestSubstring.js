function lengthOfLongestSubstring(s) {
    let charSet = new Set();
    let left = 0, maxLength = 0;

    for (let right = 0; right < s.length; right++) {
        while (charSet.has(s[right])) {
            charSet.delete(s[left]);
            left++;
        }
        charSet.add(s[right]);
        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
}

console.log(lengthOfLongestSubstring("ABCBC"));
console.log(lengthOfLongestSubstring("AAA"));


/**
 * Longest Substring Without Repeating Characters:
    Input: "ABCBC"
    Output: 3
Explanation: The longest substring without repeating characters is "ABC", which has a length of 3.
    Input: "AAA"
    Output: 1
Explanation: The longest substring without repeating characters is "A", which has a length of 1.
*/