function childNum(num, count) {
    const allplayer = []
    for(let i = 0; i < num; i++){
        allplayer[i] = i + 1;
    }
    let exitCount = 0 // 记录出去的人数
    let counter = 0 // 记录报数
    let curIndex = 0 // 记录当前下标
    while (exitCount < num - 1) {
        if(allplayer[curIndex] !== 0)
            counter ++
        if(counter === count) {
            allplayer[curIndex] = 0
            counter = 0
            exitCount = exitCount + 1
        }
        curIndex ++
        if(curIndex === num)
            curIndex = 0
    }
    for(let i = 0; i < num; i++) {
        if(allplayer[i] !== 0) {
            return allplayer[i]
        }
    }
}

console.log(childNum(30, 3))