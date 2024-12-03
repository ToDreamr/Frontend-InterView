let a = 1
let b = 2

const swap = function (a, b){
    return [b, a]
}

;[a, b] = swap(a, b)
console.log(a)