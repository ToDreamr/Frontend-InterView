function repeat(s, n) {
    let res = ''
    for(let i = 0; i < n; i++) {
        res = res + s
    }
    return res
}

console.log(repeat('aaa', 2))