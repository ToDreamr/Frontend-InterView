/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if(numRows === 1)
        return s
    const arr = new Array(numRows).fill('')
    const n = numRows * 2 - 2
    for (let i = 0; i < s.length; i++) {
        const x = i % n
        arr[Math.min(x, n - x)] = arr[Math.min(x, n - x)] + s[i]
    }
    return arr.join('')
};
console.log(convert('PAYPALISHIRING', 3))