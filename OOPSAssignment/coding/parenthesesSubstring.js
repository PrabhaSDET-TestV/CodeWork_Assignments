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

console.log(longestValidParentheses("((()"));
console.log(longestValidParentheses(")()())"));

/**
 * Longest Valid Parentheses Substring:
    Input: "((()"
    Output: 2
Explanation: The longest valid parentheses substring is (), which has a length of 2.
    Input: ")()())"
    Output: 4
Explanation: The longest valid parentheses substring is ()(), which has a length of 4
*/