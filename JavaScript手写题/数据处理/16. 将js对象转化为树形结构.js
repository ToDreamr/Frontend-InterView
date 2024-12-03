// 转换前：
source = [{
    id: 1,
    pid: 0,
    name: 'body'
}, {
    id: 2,
    pid: 1,
    name: 'title'
}, {
    id: 3,
    pid: 2,
    name: 'div'
}]

// 转换为:
tree = [{
    id: 1,
    pid: 0,
    name: 'body',
    children: [{
        id: 2,
        pid: 1,
        name: 'title',
        children: [{
            id: 3,
            pid: 1,
            name: 'div'
        }]
    }]
}]

function jsonToTree(data) {
    let res = []
    if(!Array.isArray(data))
        return res
    let map = {} // 将当前对象存储起来
    data.forEach(item => map[item.id] = item)

    data.forEach(item => {
        let parent = map[item.pid]
        if(parent) {
            if(!parent.children)
                parent.children = []
            parent.children.push(item)
        }else {
            res.push(item)
        }
    })
    return res
}

console.log(jsonToTree(source))
