/**
* @Description:
* 请补全JavaScript代码，要求以boolean的形式返回参数字符串是否为回文字符串。
* */

const _isPalindrome = string => {
  // 补全代码
  let len = string.length
  for(let i = 0; i < len/2; i++) {
    // console.log(string[i], string[len - i - 1])
    if(string[i] !== string[len - i - 1]) {
      return false
    }
  }
  return true
}

console.log(_isPalindrome('aaa'))