/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    let result = 0
    nums.sort((num1, num2) => num1 - num2)
    // console.log(nums)
    let close = 100000
    for(let i = 0; i < nums.length -2; i++) {
        let left = i + 1
        let right = nums.length - 1
        while(left < right) {
            if(Math.abs(nums[i] + nums[left] + nums[right] - target) < close) {
                result = nums[i] + nums[left] + nums[right]
                close = Math.abs(nums[i] + nums[left] + nums[right] - target)
            }
            nums[i] + nums[left] + nums[right] - target > 0 ? right-- : left++
            while(left > i + 1 && nums[left] === nums[left - 1]) left ++
            while(right < nums.length - 1 && nums[right] === nums[right + 1]) right --
        }
    }
    return result
};

const nums = [-1,2,1,-4], target = 1
console.log(threeSumClosest(nums, target))