/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if(strs.length === 1)
        return strs[0]
    let res = ''
    let flag = 1
    for(let i = 0; i < strs[0].length; i++) {
        for(let j = 1; j < strs.length; j++) {
            if((strs[j])[i] !== (strs[0])[i])
                flag = 0
        }
        if(flag === 0)
            return res
        else
            res = res + (strs[0])[i]
    }
    return res
};

console.log(longestCommonPrefix(["flower", "flow", "flight"]))