/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    const res = []
    const letterMap = [
        '',
        '',
        'abc',
        'def',
        'ghi',
        'jkl',
        'mno',
        'pqrs',
        'tuv',
        'wxyz',
    ]
    if(digits.length === 0)
        return res

    function strCom(str,digit){
        if(!digit){
            res.push(str);
            return;
        }
        let firstNum = Number(digit.substring(0,1))
        let valueStr = letterMap[firstNum];
        for(let i = 0 ; i < valueStr.length ; i++) {
            let s = valueStr.substring(i,i + 1);
            strCom(str + s,digit.substring(1));
        }
    }
    strCom('',digits)
    return res
};