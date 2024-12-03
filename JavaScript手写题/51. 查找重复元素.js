/**
 * @Description:
 * 找出数组 arr 中重复出现过的元素（不用考虑返回顺序）
 * */

function duplicates(arr) {
    let map = new Map()
    let ans = new Set()
    arr.forEach(x => {
        if(map.has(x)) {
            ans.add(x)
        }else {
            map.set(x,true)
        }
    })
    return Array.from(ans)
}

console.log(duplicates([1, 2, 4, 4, 3, 3, 1, 5, 3]))