const PENDING = 'pending'
const RESOLVED = 'resolved'
const REJECTED = 'rejected'

function myPromise(fn) {

}
// const promise=new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         console.log("买一本作业来写。。。")//在内部来实现延时函数才可以完成业务逻辑
//         resolve(10)
//     },1000)
// }).then(()=>{
//     console.log("作业完成了")
// })

function buy(){
    console.log("前置操作")
    const promise=new Promise((resolve)=>{
        setTimeout(()=>{
            console.log("买一本作业来写")
            resolve("一本英语作业")
        },1000)
    })
    return promise;
}
function doHomeOWrk(data){
    console.log("现在 来写作业")
    const promise=new Promise((resolve)=>{
        setTimeout(()=>{
            console.log("写作业： "+data);
            resolve("10分钟");
        },1000)
    })
    return promise;
}

buy().then(doHomeOWrk)