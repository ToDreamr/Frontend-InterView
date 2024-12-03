function defineReactive(target, key, value) {
    observer(value)
    Object.defineProperty(target, key, {
        get() {
            console.log(`读取${key}属性`)
            return value
        },
        set(newVal) {
            if(newVal !== value) {
                console.log(`设置${key}属性`)
                value = newVal
                updateView()
            }
        }
    })
}

function updateView() {
    console.log('视图更新')
}

// observer只能监听对象
function observer(target) {
    if(typeof target !== 'object' || target === null)
        return target
    for(let key in target) {
        defineReactive(target, key, target[key])
    }
}

let data = {
    name: 'HTML',
    information: {
        tel: '18888888888'
    }
}
observer(data)
console.log(data.information = {tel: '18888888889' });