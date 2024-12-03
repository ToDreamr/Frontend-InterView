function throttle(fn, wait) {
    let timer = null
    return function () {
        if(!timer) {
            timer = setTimeout(() => {
                fn.apply(this, arguments)
                timer = null
            },wait)
        }
    }
}
function testUname(){
    console.log('开冲')
}
document.getElementById('myInput').addEventListener('input',throttle(testUname,2000))
