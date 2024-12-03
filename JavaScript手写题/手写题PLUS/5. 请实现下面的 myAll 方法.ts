/**
 * @file 实现 PromiseAll 方法
 */

import { sleep } from "./4. 请实现下面的 sleep 方法";

// @ts-ignore
async function myAll<T extends unknown[] | []>(values: T): Promise<{ [P in keyof T]: Awaited<T[P]> }> {
    // 补全此处代码，使用 Promise.all 以外的语法完成
    const arr = []
    for (let i = 0; i < values.length; i++) {
        arr.push(await values[i])
    }
    return arr as { [P in keyof T]: Awaited<T[P]> };
}

// 一秒钟后返回结果 value
async function request(value: string) {
    await sleep(1000);
    return value;
}

// @ts-ignore
async function main() {
    console.log('start');
    const res = await myAll([
        request('a'),
        request('b'),
        request('c'),
    ])
    console.log(res); // 预期输出 start 一秒后输出 ['a', 'b', 'c']
}
main()

export default {}