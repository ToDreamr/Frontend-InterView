/**
 * @file 合并两个有序数组
 */

function merge(arr1: number[], arr2: number[]): number[] {
    // 补全此处代码
    return [...arr1, ...arr2].sort((a, b) => a - b)
}

// 参数数组从小到大排列
console.log(merge([1, 2, 3], [2, 5, 6])) // [ 1, 2, 2, 3, 5, 6 ]

export default {}