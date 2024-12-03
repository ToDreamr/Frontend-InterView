function debounce(fn,wait) {
    let timer = null

    return function () {
        // 如果定时器已经存在，取消该定时器
        if(timer) {
            clearTimeout(timer)
            timer = null
        }

        // 重新设置一个定时器
        timer = setTimeout(() => {
            fn.apply(this,arguments)
        },wait)
    }
}
function testUname(){
    console.log("输入结束！")
}
document.getElementById('myInput').addEventListener('input',debounce(testUname,1000))
