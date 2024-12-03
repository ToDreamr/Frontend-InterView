/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if(x < 0 )
        return false
    let y = parseInt(x.toString().split('').reverse().join(''))
    if(x === y)
        return true
    else
        return false
};
console.log(isPalindrome(-121))