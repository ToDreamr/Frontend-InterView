let arr = [1,2,3,4,5]
Array.prototype.myFilter = function (fn) {
    if(typeof fn !== 'function')
        throw Error('type error')
    let res = []
    for(let i = 0; i < this.length; i++) {
        fn(this[i]) && res.push(this[i])
    }
    return res
}

console.log(arr.myFilter(item => item > 2))