function smallestWindow(s) {
    let uniqueChars = new Set(s).size;
    let left = 0, minLength = Infinity, charCount = new Map();

    for (let right = 0; right < s.length; right++) {
        charCount.set(s[right], (charCount.get(s[right]) || 0) + 1);

        while (charCount.size === uniqueChars) {
            minLength = Math.min(minLength, right - left + 1);
            charCount.set(s[left], charCount.get(s[left]) - 1);
            if (charCount.get(s[left]) === 0) charCount.delete(s[left]);
            left++;
        }
    }

    return minLength === Infinity ? 0 : minLength;
}

console.log(smallestWindow("abca"));
console.log(smallestWindow("aaaa"));
console.log(smallestWindow("aabcbcdbca"));

/**
* Smallest Window with All Distinct Characters:
Given a string, find the smallest window length that contains all distinct characters of the string. For example, for str = "aabcbcdbca", the result would be 4, as the smallest window is "dbca".
    Examples:
    Input: "abca"
    Output: 4
    Input: "aaaa"
    Output: 1
Explanation: In Example 1, the string contains all distinct characters, so the smallest window is the entire string. 
In Example 2, the string contains only one distinct character, so the smallest window is just "a".
*/