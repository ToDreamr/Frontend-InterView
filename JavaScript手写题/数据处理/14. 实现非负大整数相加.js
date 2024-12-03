function bigNumAdd(a, b) {
    let temp = 0,//每位相加产生的进位，初始化为0
        res = [];
    let s1 = a.split('').reverse();
    let s2 = b.split('').reverse();

    let format = (val) => {
        if (!isNaN(Number(val))) return Number(val)
        return 0
    }
    /* 注意此处是 i <= Math.max(s1.length, s2.length) */
    for (let i = 0; i <= Math.max(s1.length, s2.length); i++) {
        let addRes = format(s1[i]) + format(s2[i]) + temp;
        res[i] = addRes % 10;
        temp = addRes >= 10 ? 1 : 0;
    }
    res.reverse();
    /* 判断是否相加产生了进位 */
    const resultNum = res[0] > 0 ? res.join('') : res.slice(1).join('');
    return resultNum;
}

console.log(bigNumAdd('13254', '4354325'));
