/*
 * @Description: 
 * @Autor: zhangbing
 * @Date: 2021-09-15 12:58:43
 * @LastEditors: zhangbing
 * @LastEditTime: 2021-09-15 13:28:27
 */

function numFormat(num) {
    let numArr = num.toString().split('.')
    let newArr = []
    // 整数部分
    let numStr = numArr[0].split('').reverse()
    for (let i = 0; i < numStr.length; i++) {
        if ((i + 1) % 3 === 0 && i !== numStr.length - 1) {
            newArr.unshift(numStr[i])
            newArr.unshift(',')
        } else {
            newArr.unshift(numStr[i])
        }
    }

    // 如果有小数部分，造作完成后拼接起来
    if (numArr[1]) {
        newArr = newArr.join('').concat('.', numArr[1])
    } else {
        newArr = newArr.join('')
    }

    return newArr
}



let num = 123456789000.65478;
console.log(numFormat(num)); // 123,456,789,000.65479
