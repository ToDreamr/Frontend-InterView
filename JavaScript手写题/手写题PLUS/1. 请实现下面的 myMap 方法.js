/**
 * @file 实现数组 map 方法
 */

function myMap(arr, callbackFn) {
    let arr1 = []
    for (let i = 0; i < arr.length; i++) {
        arr1[i] = callbackFn(arr[i])
    }
    return arr1
}

// 测试
console.log(myMap([1, 2, 3], v => v * 2)) // [2, 4, 6]
