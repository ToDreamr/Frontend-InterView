/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    if(nums.length === 0) {
        return -1
    }
    if(nums.length === 1) {
        return nums[0] === target ? 0 : -1
    }
    let left = 0, right = nums.length - 1
    while (left <= right) {
        let mid = Math.floor((left + right) / 2)
        if(nums[mid] === target) {
            return mid
        }
        if(nums[0] <= nums[mid]){
            if(target >= nums[0] && target < nums[mid]) {
                right = mid - 1
            }else {
                left = mid + 1
            }
        }else {
            if(target > nums[mid] && target <= nums[nums.length - 1]){
                left = mid + 1
            }else {
                right = mid - 1
            }
        }
    }
    return -1
};