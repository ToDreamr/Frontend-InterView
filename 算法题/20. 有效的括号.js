/**
 * @param {string} s
 * @return {boolean}
 */
const charMap = new Map()
charMap.set('(', 1)
    .set('{', 2)
    .set('[', 3)
    .set(')', 4)
    .set('}', 5)
    .set(']', 6)

var isValid = function(s) {
    const resArr = []
    const strArr = s.split('')
    resArr.push(strArr.pop())
    while(strArr.length) {
        let popChar = strArr.pop()
        if (charMap.get(popChar) - charMap.get(resArr[resArr.length - 1]) === -3) {
            resArr.pop()
        }else {
            resArr.push(popChar)
        }
    }
    return resArr.length > 0 ? false : true
};

const s = "()"
console.log(isValid(s))