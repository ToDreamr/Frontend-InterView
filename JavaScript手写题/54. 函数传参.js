/**
 * @Description:
 * 将数组 arr 中的元素作为调用函数 fn 的参数
 * */

function argsAsArray(fn, arr) {
    fn.apply(this, arr)
}

