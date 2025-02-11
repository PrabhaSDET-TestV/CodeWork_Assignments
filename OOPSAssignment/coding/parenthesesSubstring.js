function longestValidParentheses(s) {
    let stack = [-1], maxLength = 0;

    for (let i = 0; i < s.length; i++) {
        if (s[i] === "(") {
            stack.push(i);
        } else {
            stack.pop();
            if (stack.length) {
                maxLength = Math.max(maxLength, i - stack[stack.length - 1]);
            } else {
                stack.push(i);
            }
        }
    }

    return maxLength;
}

// Example Usage
console.log(longestValidParentheses("((()"));   // Output: 2
console.log(longestValidParentheses(")()())")); // Output: 4
