/**
 * @Description:
 * 统计数组 arr 中值等于 item 的元素出现的次数
 * */

function count(arr, item) {
    let count = 0
    arr.forEach(x => {
        if(x === item)
            count ++
    })
    return count
}