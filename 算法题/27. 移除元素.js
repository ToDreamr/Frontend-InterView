/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    if(nums.length === 0)
        return 0
    /*else if(nums.length === 1) {
        if(nums[0] === val)
            return 0
        else
            return 1
    }*/
    nums = nums.sort((num1, num2) => Math.abs(num2 - val) - Math.abs(num1 - val))
    let flag = 0
    while(nums[flag] !== val && flag < nums.length) {
        flag = flag + 1
        // console.log(flag)
    }
    return flag
};

const nums = [2], val = 3
console.log(removeElement(nums, val))