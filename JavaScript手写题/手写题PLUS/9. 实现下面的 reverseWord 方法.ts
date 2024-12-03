/**
 * @file 反转句子
 *
 * 同时满足以下条件：1、去除首尾空格，2、单词间隔中多个空格变成一个；
 * 注意console示例运行结果
 */

function reverseWord(str: string) {
    // 补全此处代码
    const arr = str.match(/\S+/g)
    return (<string[]>arr).reverse().join(' ')
}

console.log(reverseWord('the sky is blue')); // blue is sky the
// 去除首尾空格
console.log(reverseWord("  hello world  ")); // world hello
// 单词间隔中多个空格变成一个
console.log(reverseWord("a good   example")); // example good a

export default {}