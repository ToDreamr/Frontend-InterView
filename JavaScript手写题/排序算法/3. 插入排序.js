const arr = [5, 2, 7, 8, 34, 7, 39, 12, 56, 9, 1]

function insertSort(arr) {
    const handle = [arr[0]], len = arr.length
    for (let i = 1; i <= len - 1; i++) {
        const current = arr[i]
        for (var j = handle.length - 1; j >= 0; j--) {
            if (current > handle[j]) {
                handle.splice(j + 1, 0, current)
                break
            }
            if (j === 0) {
                handle.unshift(current)
            }
        }
    }
    return handle
}

console.log(insertSort(arr))