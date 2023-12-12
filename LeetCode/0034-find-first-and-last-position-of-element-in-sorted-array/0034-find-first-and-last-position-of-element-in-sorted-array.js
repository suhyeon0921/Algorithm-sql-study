var searchRange = function (nums, target) {
    let left = 0;
    let right = nums.length - 1;
    let output = [-1, -1];

    // Binary search for the target (left-biased)
    while (left < right) {
        let middle = Math.floor((left + right) / 2);

        if (nums[middle] < target) {
            left = middle + 1;
        } else {
            right = middle;
        }
    }

    // If the target was not found on the first pass
    if (nums[left] !== target) {
        return output;
    }

    // Store the left-hand side
    output[0] = left;

    // Reset the right-hand side of the binary search (left-hand side remains as is)
    right = nums.length - 1;

    // Binary search for the target (right-biased)
    while (left < right) {
        let middle = Math.floor((left + right) / 2) + 1;
        if (nums[middle] <= target) {
            left = middle;
        } else {
            right = middle - 1;
        }
    }

    // Store the right-hand side
    output[1] = right;

    return output;
};