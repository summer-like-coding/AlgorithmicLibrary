export function openLock(deadends: string[], target: string): number {
  // 其实可以理解为0000到target的最短距离，当时有些地方不可以去，所以我们可以使用BFS
  // BFS其实也是维护一个队列
  // 设置步数
  let depth = 0;
  // 维护一个数组,队列
  let queue = new Array<string>();
  // 因为这会是一个图,所以避免出现环,所以我们设置set
  const visted = new Set<string>();
  queue.push("0000");
  // visted.add("0000")
  while (queue.length) {
    let size = queue.length;
    // 现在进行扩散
    for (let i = 0; i < size; i++) {
      let value = queue.shift();
      if (value === target) {
        return depth;
      }
      // value不可以出现在deadends
      if (deadends.indexOf(value) !== -1) {
        continue;
      }
      // 现在将当前节点的临界点加进来
      for (let j = 0; j < 4; j++) {
        // 设置他们分别子节点
        let up = plusOne(value, j);
        let down = minusOne(value, j);
        // queue.push(up)
        // queue.push(down)
        // 避免出现环,现象
        if (!visted.has(up)) {
          visted.add(up);
          queue.push(up);
        }
        if (!visted.has(down)) {
          visted.add(down);
          queue.push(down);
        }
      }
    }
    depth++;
  }
  return -1;
}

export const plusOne = (value: string, index: number): string => {
  // 先将字符串变为数组
  let arr: string[] = value.split("");
  if (arr[index] === "9") {
    arr[index] = "0";
  } else {
    arr[index] = (parseInt(arr[index]) + 1).toString();
  }
  return arr.join("");
};
export const minusOne = (value: string, index: number): string => {
  let arr: string[] = value.split("");
  if (arr[index] === "0") {
    arr[index] = "9";
  } else {
    arr[index] = (parseInt(arr[index]) - 1).toString();
  }
  return arr.join("");
};
console.log(openLock(["0201", "0101", "0102", "1212", "2002"], "0202"));
