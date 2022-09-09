// 设置一个plusOne函数
const plusOne = (s:string, j:number):string=>{
    // 每次移动一个
    let arr:string[] = s.split("")
    if (arr[j] === "9") {
        arr[j] = "0"
    } else {
        arr[j] = parseInt(arr[j])+1+''
    }
    return arr.join("")
}
// 设置一个minusOne
const minusOne = (s: string, j: number): string => {
    // 每次减一
    // 先变为数组
    let arr: string[] = s.split("")
    if (arr[j] === "0") {
        arr[j] = "9"
    } else {
        arr[j] = parseInt(arr[j])-1+''
    }
    return arr.join("")
}

// 判断最小次数
function openLock(deadends: string[], target: string): number {
    // BFS基本，首先新建一个队列
    const queue: string[] = new Array();
    // 因为0000，每个四位数字移动一次，都有八种可能，但是我们需要排除环
    // 设置一个set，表示已访问的点
    const visited = new Set()
    // 因为存在死亡区，所以我们需要设置一个set，后续判断是不是出现了
    const dead = new Set()
    for (let value of deadends) {
        dead.add(value)
    }
    // 将start加入到queue里面
    queue.push("0000")
    // 设置次数
    let count = 0
    while (queue.length) {
        // BFS需要层层遍历
        let size = queue.length;
        // 遍历
        for (let i = 0; i < size; i++){
            let cur= queue.shift()
            if (dead.has(cur)) {
                continue;//继续
            }
            if (target === cur + '') {
                return count
            }
            // 否则的话
            // 因为每次转动一个数组字
            for (let i = 0; i < 4; i++){
                let up = plusOne(cur + "", i);
                // 判断这个数是不是已经出现了，避免出现环
                if (!visited.has(up)) {
                    queue.push(up)
                    visited.add(up)
                }
                let down = minusOne(cur + '', i);
                if (!visited.has(down)) {
                    queue.push(down)
                    visited.add(down)
                }
            }

        }
        count++
    }
    return -1
};

console.log(openLock(["0201","0101","0102","1212","2002"],"0202"));
