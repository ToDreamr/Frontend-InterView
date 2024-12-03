function mySetInterval(fn, timeout) {
    // 设置控制器 控制定时器是否继续执行
    let timer = {
        flag: true
    }
    function interval() {
        if(timer.flag) {
            fn()
            setTimeout(fn, timeout)
        }
    }
    setTimeout(interval, timeout)
    return timer
}