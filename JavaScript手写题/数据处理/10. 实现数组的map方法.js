let arr = [1,2,3,4,5]
Array.prototype.myMap = function (fn) {
    if(typeof fn !== 'function')
        throw Error('type error')
    let res = []
    for(let i = 0; i < this.length; i++) {
        res.push(fn(arr[i]))
    }
    return res
}

console.log(arr.myMap(item => item * 2))