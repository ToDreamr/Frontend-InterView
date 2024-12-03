let url = 'http://www.domain.com/?user=anonymous&id=123&id=456&city=%E5%8C%97%E4%BA%AC&enabled';
// parseParam(url)
/* 结果
{ user: 'anonymous',
  id: [ 123, 456 ], // 重复出现的 key 要组装成数组，能被转成数字的就转成数字类型
  city: '北京', // 中文需解码
  enabled: true, // 未指定值得 key 约定为 true
}
*/

const parseParam = function (url) {
    let params = url.split('?')[1].split('&')
    let result = {}
    console.log(params)
    params.forEach(item => {
        let [key, value] = item.split('=')
        if(value) {
            value = decodeURIComponent(value)
            value = Number(value) ? Number(value) : value
            if(result.hasOwnProperty(key))
                result[key] = [].concat(result[key], value)
            else
                result[key] = value
        }else {
            result[key] = true
        }
    })
    return result
}
console.log(parseParam(url))