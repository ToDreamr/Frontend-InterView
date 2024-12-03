/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    let flag = -1
    if(nums.length <= 1)
        return

    for(let i = nums.length - 2; i >= 0; i--) {
        if(nums[i] < nums[i + 1]) {
            flag = i
            break;
        }
    }
    for(let j = nums.length -1 ; j > flag; j--) {
        if(nums[j] > nums[flag]) {
            [nums[j], nums[flag]] = [nums[flag], nums[j]]
            let chopped = nums.splice(flag + 1)
            chopped.reverse()
            nums.push(...chopped)
            return
        }
    }
    if(flag === -1)
        nums.reverse()
};
const nums = [1,5,2,4,3,2]
nextPermutation(nums)