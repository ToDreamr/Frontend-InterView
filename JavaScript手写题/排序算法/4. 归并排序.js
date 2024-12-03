const arr = [8, 7, 6, 5, 4, 3, 2, 1];

function mergeSort(arr) {
    // 如果数组大小大于1，立即返回
    if(arr.length <= 1)
        return arr

    let middle = Math.floor(arr.length / 2)
    const left = mergeSort(arr.slice(0,middle))
    const right = mergeSort(arr.slice(middle, arr.length))

    const result = merge(left, right)

    return result
}

function merge(left, right) {
    const resArr = []
    let i = 0, j = 0

    // 每次取中最小的放入
    while(i < left.length && j < right.length) {
        if(left[i] < right[j]) {
            resArr.push(left[i])
            i ++
        } else {
            resArr.push(right[j])
            j ++
        }
    }

    // 遍历结束后，某个数组可能会有剩余(有可能一个数组所有项都大于另一个数组，则在循环中一直没有被push)，全部追加到结果数组中
    if (i < left.length) {
        resArr.push(...left.slice(i))
    } else {
        resArr.push(...right.slice(j))
    }
    return resArr
}

console.log(mergeSort(arr))