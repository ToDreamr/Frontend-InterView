// function myNew() {
//     // 1. 创建一个新对象
//     let newObject = null
//     let result = null
//     console.log(arguments)
//     // 2. 设置原型属性
//     let constructor =  Array.prototype.shift.call(arguments)
//     if(typeof constructor !== 'function') {
//         console.log('type error')
//         return
//     }
//     // 新建一个对象，对象的原型为构造函数的prototype
//     newObject = Object.create(constructor.prototype)
//     // 3. 修改this指向，执行构造函数
//     result = constructor.apply(newObject,arguments)
//     // 4. 判断result的类型
//     let flag = result && (typeof result === "object" || typeof result === "function")
//     return flag ? result : newObject
// }


function Person (age) {
    this.age = age
}

const p = myNew(Person, 36)
console.log(p)


function myNew(fn, ...args) {
    // 1. 创建一个新的对象
    let obj = null
    // 判断fn是否时函数
    const constructor = fn.prototype
    if(typeof fn !== 'function'){
        console.log('不是函数')
        return
    }
    // 2. 修改proto属性
    obj = Object.create(constructor)
    // 3. 修改this指向，执行fn方法
    let result = fn.apply(obj, args)
    // 4. 返回对象
    let flag = result && (typeof result === 'object' || typeof result === 'function')
    return flag ? result : obj
}

