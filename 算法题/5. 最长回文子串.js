/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    if(s.length < 2)
        return s
    let res = ''
    for (let i = 0; i < s.length; i++) {
        // 如果是奇数回文子串
        helper(i ,i)
        // 如果是偶数回文子串
        helper(i, i+1)
    }

    function helper(m, n) {
        while(m >= 0 && n < s.length && s[m] === s[n]) {
            m--
            n++
        }
        if(n - m - 1 > res.length) {
            res = s.slice(m + 1, n)
        }
    }
    return res
};

console.log(longestPalindrome('aaaa'))