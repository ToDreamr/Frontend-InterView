let toProxy = new WeakMap()
let toRow  = new WeakMap()

function reactive(target) {
    return createReactiveObject(target)
}

function isObject(val) {
    return typeof val === 'object' && val !== null
}

// 判断属性是否原本存在
function hasOwn(target,key) {
    return target.hasOwnProperty(key);
}

function createReactiveObject(target) {
    let ByProxy = toProxy.get(target);
    // 防止多次代理
    if(ByProxy) { // 如果在WeakMap中可以取到值，则说明已经被代理过了，直接返回被代理过的对象
        return ByProxy;
    }
    // 防止多层代理
    if(toRow.get(target)) {
        return target
    }

    // Proxy代理的是对象，如果不是对象，直接返回即可
    if(!isObject(target))
        return target

    let handle = {
        get(target, key, receiver) {
            let res = Reflect.get(target, key, receiver)
            console.log(`获取${key}属性`)
            return isObject(res) ? reactive(res) : res
        },
        set(target, key, value, receiver) {
            let res = Reflect.set(target, key, value, receiver);
            // 判断是新增属性还是修改属性
            let hadKey = hasOwn(target,key);
            let oldValue = target[key];
            if(!hadKey) { // 新增属性
                console.log(`新增${key}属性`)
            }else if(oldValue !== value){
                console.log(`修改${key}属性`)
            }
            return res
        },
        deleteProperty(target, key) {
            let res = Reflect.deleteProperty(target, key)
            console.log(`删除${key}属性`);
            return res;
        }
    }

    let proxyObj = new Proxy(target, handle)
    toProxy.set(target, proxyObj)
    toRow.set(proxyObj, target)
    return proxyObj
}

let proxy = reactive({name: '寒月十九'});
proxy.name = '十九';
console.log(proxy.name);
delete proxy.name;
console.log(proxy.name);
