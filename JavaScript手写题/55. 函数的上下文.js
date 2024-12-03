/**
 * @Description:
 * 将函数 fn 的执行上下文改为 obj 对象
 * */

function speak(fn, obj) {
    return fn.call(obj)
}
