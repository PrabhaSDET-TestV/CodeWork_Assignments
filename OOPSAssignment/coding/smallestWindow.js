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
