Function.prototype.myBind = function (context, ...outArgs) {
    // 判断调用者是否为函数
    if(typeof this !== 'function')
        return 'error type'

    context = Object(context) || window
    // 设置方法
    let key = Symbol()
    context[key] = this
    // 返回一个修改this指向的函数
    return function Fn(...innerArgs) {
        let res = context[key](...outArgs, ...innerArgs)
        // delete context[key]
        return res
    }
}
const base = (n,m) => n * m
const double = base.myBind({},2)
console.log(double(4))