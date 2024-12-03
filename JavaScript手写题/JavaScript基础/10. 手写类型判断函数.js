function getType(value) {
    if(value === null)
        return value + ''
    else if(typeof value === 'object') {
        let valueClass = Object.prototype.toString.call(value)
        let valueType = valueClass.split(' ')[1].split('')
        valueType.pop()
        valueType = valueType.join('').toLowerCase()
        return valueType
    }else {
        return typeof value
    }
}

console.log(getType([]))