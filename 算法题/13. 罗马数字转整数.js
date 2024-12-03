/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let romanArr = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I']
    let intArr = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
    let res = 0
    let flag = 0
    while(flag < s.length) {
        for(let i = 0; i < 13; i ++) {
            if(s[flag] + s[flag + 1] === romanArr[i]) {
                res = res + intArr[i]
                flag = flag + 2
                // console.log(flag,romanArr[i])
            }else if(s[flag] === romanArr[i]) {
                res = res + intArr[i]
                flag = flag + 1
                // console.log(flag,romanArr[i])
            }
        }
    }
    return res
};
console.log(romanToInt("MCMXCIV"))