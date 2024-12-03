/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    let intArr = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
    let romanArr = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I']
    let res = ''
    for(let i = 0; i < 13; i++) {
        while(num >= intArr[i]) {
            num = num - intArr[i]
            res = res + romanArr[i]
        }
    }
    return res
};
console.log(intToRoman(7))