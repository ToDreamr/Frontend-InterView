
let obj = {
    a: 1,
    b: 2,
    c: 3,
}

obj[Symbol.iterator] = function () {
    let keys = Object.keys(this)
    let count = 0
    return {
        next() {
            if(count < keys.length) {
                return {value: obj[keys[count++]], done: false}
            }else {
                return {value: undefined, done: true}
            }
        }
    }
}

for (let k of obj) {
    console.log(k)
}