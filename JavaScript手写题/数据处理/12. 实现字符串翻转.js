String.prototype.myServer = function (str) {
    return str.split('').reverse().join('')
}
console.log(String().myServer('hello'))