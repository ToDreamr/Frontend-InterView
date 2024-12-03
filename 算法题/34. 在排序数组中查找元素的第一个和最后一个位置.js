/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let result = [-1, -1]
    if(nums.length === 0)
        return [-1, -1]
    if(nums.length === 1)
        return nums[0] === target ? [0, 0] : [-1, -1]
    let left = 0, right = nums.length - 1
    // 查找左边界
    while (left <= right) {
        let mid = left + Math.floor((right - left) / 2)
        console.log(left,mid,right)
        if(nums[mid] === target && (nums[mid -1] < target || mid === 0)) {
            result[0] = mid
            break;
        }
        if(target > nums[mid]) {
            left = mid + 1
        }else {
            right = mid - 1
        }
    }
    right = nums.length - 1
    // 查找右边界
    console.log('right')
    while (left <= right) {
        let mid = left + Math.floor((right - left)/2)
        // console.log(left,mid,right)
        if(nums[mid] === target && (nums[mid + 1] > target || mid === nums.length - 1)) {
            result[1] = mid
            break;
        }
        if(target >= nums[mid]) {
            left = mid + 1
        }else {
            right = mid - 1
        }
    }
    return result
};

const nums = [5,7,7,8,8,10], target = 8

console.log(searchRange(nums, target))
