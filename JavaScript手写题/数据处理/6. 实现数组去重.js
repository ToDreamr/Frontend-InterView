const array = [1, 2, 3, 5, 1, 5, 9, 1, 2, 8]

// set
console.log(Array.from(new Set(array)))

// map
const uniqueArray = arr => {
    let map = new Map()
    let res = []
    for(let i = 0; i < arr.length; i++) {
        map.set(arr[i], 1)
        if(!map.get(arr[i])) {
            res.push(arr[i])
        }
    }
    return res
}
uniqueArray(array)