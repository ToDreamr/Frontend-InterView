/**
 * @file 计算数组笛卡尔积
 */

// 示例
console.log(product([1, 2], [3, 4])); // [[1, 3], [1, 4], [2, 3], [2, 4]]

function product(xList: number[], yList: number[]): [number, number][] {
    const ans:Array<Array<number>> = []
    for (let i = 0; i < xList.length; i++) {
        for (let j = 0; j < yList.length; j++) {
            ans.push([xList[i], xList[j]])
        }
    }
    //@ts-ignore
    return ans
}

export default {};