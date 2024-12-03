const arr = [3,5,4,6,1,2]

function quickSort(arr) {
    // 当arr的长度小于1时，不用进行处理
    if(arr.length <= 1) {
        return arr
    }
    // 1. 找到数组的中间项，并且从原有的数组当中去移除
    const middleIndex = Math.floor(arr.length / 2)
    const middle = arr.splice(middleIndex, 1)[0]

    // 2. 准备两个数组，循环剩下的每一项 比当前项小的放到左边，比当前项大的放到右边
    const leftArr = [], rightArr = []
    for (let i = 0; i < arr.length; i++) {
        const current = arr[i]
        current < middle ? leftArr.push(current) : rightArr.push(current)
    }
    // 递归对两边的数组进行处理，一直到左右都进行完排序
    return quickSort(leftArr).concat(middle, quickSort(rightArr))
}

console.log(quickSort(arr))