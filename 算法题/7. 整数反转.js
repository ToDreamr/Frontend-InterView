/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    if(x === 0)
        return x
    let y = parseInt(x.toString().split('').reverse().join(''))
    if(x < 0)
        y = -y
    return y > 2147483648 || y < -2147483648 ? 0 : y
};
console.log(reverse(-1534236469))