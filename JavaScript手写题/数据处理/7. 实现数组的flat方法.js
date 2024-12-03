let arr = [1, [2, [3, 4, 5]]]
function _flat(arr, depth) {
    let result = []
    for(let i = 0; i < arr.length; i ++) {
        if(Array.isArray(arr[i]) && depth > 0) {
            result = result.concat(_flat(arr[i], depth - 1))
        }else {
            result.push(arr[i])
        }
    }
    return result
}

console.log(_flat(arr, 1))