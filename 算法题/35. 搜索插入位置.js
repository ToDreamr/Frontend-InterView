/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let left = 0, right = nums.length - 1
    let mid = left + right
    while (left <= right) {
        mid = left + right
        if(nums[mid] === target)
            return mid
        if(nums[mid] > target)
            right = mid - 1
        else {
            left = mid + 1
        }
    }
    console.log(left, mid, right)
    return left
};

const nums = [1,3,5,6], target = 7

console.log(searchInsert(nums, target))