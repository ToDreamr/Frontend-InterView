const arr = [3,5,4,6,1,2]

function bubbleSort(arr) {
    for(let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - 1; j++) {
            if(arr[j] > arr[j + 1])
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
            console.log(arr)
        }
        console.log(`第${i}次迭代`)
        console.log(arr)
    }
    return arr
}

console.log(bubbleSort(arr))