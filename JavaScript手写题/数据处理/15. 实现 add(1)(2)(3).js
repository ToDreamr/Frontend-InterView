function curry(fn, ...args) {
    return fn.length <= args.length ? fn(...args) : curry.bind(null, fn, ...args)
}

function add(a,b,c) {
    return a + b + c
}

let fn = curry(add)
console.log(fn(1)(2, 3))