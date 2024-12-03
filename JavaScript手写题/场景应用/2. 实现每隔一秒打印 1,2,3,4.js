// // 使用闭包实现
// for (var i = 0; i < 5; i++) {
//     (function(i) {
//         setTimeout(function() {
//             console.log(i);
//         }, i * 1000);
//     })(i);
// }
// // 使用 let 块级作用域
// for (let i = 0; i < 5; i++) {
//     setTimeout(function() {
//         console.log(i);
//     }, i * 1000);
// }

//写一个闭包
// for (var i=0;i<10;i++){
//     //闭包
//     (function (i){
//         setTimeout(()=>{
//             console.log(i)
//         },i*1000)
//     })(i);
// }

var name="全局变量"
function nameFun(){
    var name="你好";
    function innerPackage(){
        console.log(name)
    }
    innerPackage();
    (()=>{
        console.log(name)
    })()
}

console.log(document.cookie);
console.log(name)
nameFun()

