let data = [
    {name: 'nowcoder1'},
    {name: 'nowcoder2'}
]

const _api = string => {
    // 补全代码
    let method = string.split('?')[0]
    switch(method) {
        case 'get': {
            return data
            break
        }
        case 'update': {
            let query = string.split('?')[1]
            let name = query.split('&')[0].split('=')[1]
            let to = query.split('&')[1].split('=')[1]
            for(item of data) {
                if(item.name === name) item.name = to
            }
            break
        }
        default: {
            return ''
        }
    }
}