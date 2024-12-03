/*const arr = [1,2,3,4,5,6,7,8,9,10]
let sum = arr.reduce((total, i) => total = total + i, 0)
console.log(sum)*/

const arr = [1,2,3,[[4,5],6],7,8,9]

let sum = arr.toString().split(',').reduce((total, i) => total += Number(i), 0)
console.log(sum)