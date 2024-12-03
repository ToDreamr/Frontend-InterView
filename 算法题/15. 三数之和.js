/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let res = []
    nums.sort((num1, num2) => num1 - num2)
    for(let i = 0; i < nums.length -2; i++) {
        if(nums[i] > 0)
            return res
        if(nums[i] === nums[i-1] && i > 0)
            continue
        let left = i + 1
        let right = nums.length - 1
        while (left < right) {
            if (nums[i] + nums[left] + nums[right] === 0) {
                res.push([nums[i], nums[left], nums[right]]);
                left++
                right--
            } else {
                nums[i] + nums[left] + nums[right] > 0 ? right-- : left++
            }
            while(nums[left] === nums[left -1] && left > i + 1)
                left++
            while (nums[right] === nums[right + 1] && right < nums.length - 1)
                right--
        }
    }
    return res
};
console.log(threeSum([-1,0,1,2,-1,-4]))