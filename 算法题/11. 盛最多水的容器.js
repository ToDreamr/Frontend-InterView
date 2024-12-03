/**
 * @param {number[]} height
 * @return {number}
 */
/*
* 超出时间限制
* */
/*var maxArea = function(height) {
    let res = -1
    for(let i = 0; i < height.length - 1; i ++) {
        for(let j = i + 1; j < height.length; j ++) {
            let flag = Math.min(height[i],height[j])
            let sum = flag * (j - i)
            if(res < sum)
                res = sum
        }
    }
    return res
};*/

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let res = 0
    let i = 0;
    let j = height.length - 1;
    while(i < j) {
        let area = Math.min(height[i], height[j]) * (j - i)
        res = Math.max(area, res)
        if (height[i] > height[j])
            j--
        else
            i++
    }
    return res
};
console.log(maxArea([1, 1]))