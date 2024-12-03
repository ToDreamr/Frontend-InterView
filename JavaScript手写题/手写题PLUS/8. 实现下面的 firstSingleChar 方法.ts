/**
 * @file 找出字符串中第一个只出现一次的字符
 */

function firstSingleChar(str: string) {
    // 补全此处代码
    return str.split('').filter((item, index, arr) => {
        arr.splice(index, 1)
        return !arr.includes(item)
    })[0]
}

// a 和 b 都出现了两次，只有 c 出现了一次，返回 c
console.log(firstSingleChar('abcba')) // c
// b c d 都出现了一次，返回第一个
console.log(firstSingleChar('aabcdee')) // b
// a 和 b 都出现了多次，没有只出现一次的元素，返回 undefined
console.log(firstSingleChar('aaaabbbb')) // undefined

export default {}