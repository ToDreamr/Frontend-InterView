function curry(fn, ...args) {
    return fn.length <= args.length ? fn(...args) : curry.bind(null, fn, ...args)
}

function sum(a,b,c) {
    return a + b + c
}

let x = curry(sum)
console.log(x(1,2)(3))