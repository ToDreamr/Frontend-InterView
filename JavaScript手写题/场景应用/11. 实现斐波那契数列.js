// 优化
function fibonacci2(n) {
    const arr = [1, 1, 2]
    const arrLength = arr.length

    if(n < arrLength)
        return arr[n]

    for(let i = arrLength; i < n; i++) {
        arr.push(arr[i -1] + arr[i - 2])
    }
    return arr[arr.length - 1]
}

console.log(fibonacci2(4).toString());