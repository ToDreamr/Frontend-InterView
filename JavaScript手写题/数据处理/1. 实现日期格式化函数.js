const dateFormat = function (date, format) {
    let year = date.getFullYear()
    let month = date.getMonth() + 1
    let day = date.getDate()
    format = format.replace('yyyy', year)
    format = format.replace('MM', month)
    format = format.replace('dd', day)
    return format
}

console.log(dateFormat(new Date('2020-12-01'), 'yyyy/MM/dd')) // 2020/12/01
console.log(dateFormat(new Date('2020-04-01'), 'yyyy/MM/dd')) // 2020/04/01
console.log(dateFormat(new Date('2020-04-01'), 'yyyy年MM月dd日')) // 2020年04月01日