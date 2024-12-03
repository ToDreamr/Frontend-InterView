function myInstanceof(left, right) {
    let pro = right.prototype
    let proto = Object.getPrototypeOf(left)

    while(true) {
        if(pro === proto) {
            return true
        }
        else {
            pro = Object.getPrototypeOf(pro)
            if(pro === null)
                return false
        }
    }
}

console.log(myInstanceof('123', String))
console.log(myInstanceof('123', Number))
console.log(myInstanceof([], Array))