/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    let res = []
    nums.sort((num1, num2) => num1 - num2)
    for(let i = 0; i < nums.length - 3; i++) {
        if(nums[i - 1] === nums[i] && i > 0)
            continue
        for(let k = i + 1; k < nums.length - 2; k++) {
            if(nums[k - 1] === nums[k] && k > i + 1)
                continue
            let j = k + 1, o = nums.length - 1
            while(j < o) {
                if(nums[i] + nums[j] + nums[k] + nums[o] === target) {
                    res.push([nums[i], nums[j], nums[k], nums[o]])
                    j++
                    o--
                    while(j < o && nums[j-1] === nums[j])
                        j++
                    while(j < o && nums[o+1] === nums[o])
                        o--
                }else if(nums[i] + nums[j] + nums[k] + nums[o] < target){
                    j++
                }else {
                    o--
                }
            }
        }
    }
    return res
};
