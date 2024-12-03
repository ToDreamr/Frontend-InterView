/**
 * @Description:
 * 请补全JavaScript代码，请给参数对象添加拦截代理功能，并返回这个代理，要求每当通过代理调用该对象拥有的属性时，"count"值加1，否则减1。
 * */
let count = 0
const _proxy = object => {
    // 补全代码
    const proxyObject = new Proxy(object, {
        get(target, key) {
            if(key in object) {
                count++
            }else {
                count--
            }
            return target[key]
        }
    })
    return proxyObject
}

let obj = {
    age: 18
}
let proxy = _proxy(obj)
console.log(proxy.age)
console.log(count)
console.log(proxy.name)
console.log(count)