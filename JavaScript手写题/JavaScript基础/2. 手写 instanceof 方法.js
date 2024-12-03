// function myInstanceof(left, right) {
//     let proto = Object.getPrototypeOf(left),
//         prototype = right.prototype
//     while(prototype) {
//         if(proto === prototype)
//             return true
//         proto = Object.getPrototypeOf(proto)
//     }
//     return false
// }

console.log(myInstanceof([], Array))
function fn(){

}
const a = new fn()
console.log(myInstanceof(a, fn))

function myInstanceof(left, right) {
    let proto = Object.getPrototypeOf(left)
    let prototype = right.prototype

    while(prototype) {
        if(proto === prototype)
            return true
        proto = Object.getPrototypeOf(proto)
    }

    return false
}
