Function.prototype.myApply = function (context,...args) {
    // 判断调用者的类型
    if(typeof this !== 'function')
        return 'error type'

    // 判断context的存在性
    context = Object(context) || window

    // 将函数设置为传入对象的方法
    let key = Symbol()
    context[key] = this

    // 记录函数的结果
    let result = args[0] ? context[key](...args[0]) : context[key]()
    delete context[key]
    return result
}

let obj ={name:'lucky'}
function fn(a,b){
    console.log(this,a+b) //obj,3
}
// fn.myCall(obj,1,2)
fn.apply(1,[1,2])
fn.myApply(1,[1,2])