function sortColors(nums) {
    let low = 0, mid = 0, high = nums.length - 1;

    while (mid <= high) {
        if (nums[mid] === 0) {
            [nums[low], nums[mid]] = [nums[mid], nums[low]];
            low++; mid++;
        } else if (nums[mid] === 1) {
            mid++;
        } else {
            [nums[mid], nums[high]] = [nums[high], nums[mid]];
            high--;
        }
    }

    return nums;
}

console.log(sortColors([0, 1, 2, 1, 0, 2, 1, 0]));

/**
* Sort an Array of 0s, 1s, and 2s:
This is a typical array rearrangement problem where we need to sort elements based on their values (0, 1, and 2). While this can be solved using sorting approaches (with a complexity of O(n log n)), consider more efficient solutions.
    Examples:
    Input: [0, 1, 2, 1, 0, 2, 1, 0]
    Output: [0, 0, 0, 1, 1, 1, 2, 2]
    Input: [2, 1, 0, 1, 2, 0, 1, 0]
    Output: [0, 0, 0, 1, 1, 1, 2, 2]
*/