/**
 * @Description:
 * 给定二进制字符串，将其换算成对应的十进制数字
 * */

function base10(str) {
    const arrBit = str.split('')
    let ans = 0
    for (let i = 0; i < arrBit.length; i ++) {
        let temp = Math.pow(2, arrBit.length - 1 - i)
        ans = ans + temp * arrBit[i]
    }
    return ans
}