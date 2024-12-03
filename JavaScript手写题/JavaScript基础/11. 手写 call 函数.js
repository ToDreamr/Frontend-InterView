Function.prototype.myCall = function (context) {
    // 判断调用者的类型
    if(typeof this !== 'function')
        return 'type error'
    // 判断context对象是否存在
    context = Object(context) || window
    // 获取参数对象列表
    let args = [...arguments].splice(1)
    const key = Symbol()
    // 将调用的函数设置为context的方法
    context[key] = this
    // 保存结果
    let result = context[key](...args)
    // 删除属性
    delete context[key]
    return result
}

let obj ={name:'lucky'}
function fn(a,b){
    console.log(this,a+b) //obj,3
}
// fn.myCall(obj,1,2)
fn.call(1,1,2)
fn.myCall(1,1,2)
