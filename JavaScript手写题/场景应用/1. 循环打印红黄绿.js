/*
* 下面来看一道比较典型的问题，
* 通过这个问题来对比几种异步编程方法：
* 红灯 3s 亮一次，
* 绿灯 1s 亮一次，
* 黄灯 2s 亮一次；
* 如何让三个灯不断交替重复亮灯？
* */

function red() {
    console.log('red')
}
function yellow() {
    console.log('yellow')
}
function green() {
    console.log('green')
}
const task = (timer, light) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (light === 'red') {
                red()
            }
            else if (light === 'green') {
                green()
            }
            else if (light === 'yellow') {
                yellow()
            }
            resolve()
        }, timer)
    })
}

async function run() {
    await task(3000, 'red')
    await task(2000, 'yellow')
    await task(1000, 'green')
    run()
}

run()