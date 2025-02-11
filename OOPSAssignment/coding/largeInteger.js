function plusOne(digits) {
    for (let i = digits.length - 1; i >= 0; i--) {
        if (digits[i] < 9) {
            digits[i]++;
            return digits;
        }
        digits[i] = 0;
    }
    
    digits.unshift(1);
    return digits;
}

console.log(plusOne([1, 2, 3]));
console.log(plusOne([9, 9, 9]));

/**
 * You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. Increment the large integer by one and return the resulting array of digits.
Examples:
    Input: digits = [1, 2, 3]
    Output: [1, 2, 4]
Explanation: The array represents the integer 123. Incrementing by one gives 123 + 1 = 124, resulting in [1, 2, 4].
    Input: digits = [4, 3, 2, 1]
    Output: [4, 3, 2, 2]
Explanation: The array represents the integer 4321. Incrementing by one gives 4321 + 1 = 4322, resulting in [4, 3, 2, 2].
*/