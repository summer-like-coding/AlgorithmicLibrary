# [算法整理]BFS

## 核心概念

`BFS`一般都是解决：从一个点到一个点的**最短**距离和层序遍历问题

`BFS`的核心其实就是处理一个队列`queue`,不断地压入和弹出数据，进行判断，他是不是距离最近的那个节点

模板

```typescript
// 判断最小次数
function BFS(start:number,target:number): number {
    // BFS基本，首先新建一个队列
    const queue: string[] = new Array();
    // 设置一个set，表示已访问的点
    const visited = new Set()
    // 将start加入到queue里面
    queue.push(start)
    // 设置次数
    let count = 0
    while (queue.length) {
        // BFS需要层层遍历
        let size = queue.length;
        // 遍历
        for (let i = 0; i < size; i++){
            let cur= queue.shift()
            // 将周边的节点放进去
            for (let i = 0; i < cur.length; i++){
                if (!visited.has(up)) {
                    queue.push(up)
                    visited.add(up)
                }
            }

        }
        count++
    }
    return -1
};
```

## 相关题目

### 二叉树的最小深度

链接：[111. 二叉树的最小深度 - 力扣（LeetCode）](https://leetcode.cn/problems/minimum-depth-of-binary-tree/)

解题思路：

1. 需要明确这里是哪两个点
   + `start`:就是那个`root`节点
   + `target`:就是那个距离`root`节点最近的那个叶子节点
2. 关于`BFS`最主要的就是维护一个队列，所以首先我们需要将root压入
3. 然后取层层的遍历，找出那个叶子节点
4. **因为你是按顺序层层遍历的，所以，第一个叶子节点一定就是那个距离最近的叶子节点**
5. 因为需要返回深度，所以设置`depth`

代码：

```typescript
function minDepth(root: TreeNode | null): number {
    // 一般DFS用于处理最小距离问题，我们设定
    // target为距离root最近的那个叶子节点
    // start为根节点
    // DFS要求就是一个队列
    // 因为是二叉树的原因，所以不会出现环
    // 处理特殊情况
    if(root === null){
        return 0
    }
    const queue:TreeNode[] = new Array();
    let depth = 1
    // 将root放进去
    queue.push(root)
    while(queue.length){
        // 从前往后，层序遍历，所以我们一个一个取
        let size = queue.length;
        for(let i =0;i<size;i++){
            let curNode = queue.shift();
            if(curNode.left === null && curNode.right === null){
                return depth
            }
            if(curNode.left!== null){
                queue.push(curNode.left)
            }
            if(curNode.right!== null){
                queue.push(curNode.right)
            }
        }
        depth++
    }
    return depth

};
```

### 打开转盘锁

链接：[752. 打开转盘锁 - 力扣（LeetCode）](https://leetcode.cn/problems/open-the-lock/)

解题思路：

1. 其实本题也可以看为是一个`BFS`
   + `start`:就是那个`0000`
   + `target`:就是那个参数
2. 其实他会构成一个`图`,在不考虑死亡区的情况下，我们每个`abcd`每次转动以为都有`8`中可能，但是他们是会有形成`环`的可能，所以我们就需要设置一个`set`来表示我访问过的节点
3. 因为存在着死亡区，所以我们还要使用`set`来进行表示死亡区的数字
4. 同样的`BFS`,也是维护一个队列，对队列进行`unshift`和`push`，依次去判断是不是`target`,存不存在在`死亡区`

代码：

```typescript
// 设置一个plusOne函数
const plusOne = (s: string, j: number):string=>{
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
```

### 二叉树的层序遍历

链接：[102. 二叉树的层序遍历 - 力扣（LeetCode）](https://leetcode.cn/problems/binary-tree-level-order-traversal/)

解题思路：

1. 这里我们用到的其实也是一个`BFS`，那么很明显就是来维护一个队列`queue`
2. 按照题目的要求，也就是我们每一层用一个数组来进行表示，也就是在这一层结束以后，我们需要将这一层所表示的数组`push`进我的`res`结果里
3. 那么现在就需要解决的问题是，如何表示这一层呢？
4. 假如，现在我们处于根节点那一层，那我肯定那一层只有一个根节点
5. 那么往下，我的第二层，肯定是由我根节点的左右节点组成的，那么我们就将`左`,`右`节点放进去，并统计`len`
6. 这个`len`就是表示：我这一层的节点个数
7. 那么我现在只需要将这个节点的值，放进去`list`就完了

代码：

```typescript
function levelOrder(root: TreeNode | null): number[][] {
    // 这是一个BFS，主要核心就是维护一个数组，对数组进行pop和push
    // 首先先将单个元素push进去
    let res:number[][] = []
    // 这个就是判断已经走了哪些节点
    let queue:TreeNode[] = []
    queue.push(root)
    if(!root){
        return res
    }
    while(queue.length){
        let size = queue.length;
        //console.log("size",size)
        //console.log("queue",queue)
        //获取这一层的节点
        let list = []
        // 向四处进行扩散
        for(let i = 0;i<size;i++){
            // 首先向取出队列里的第一个节点
            let cur:TreeNode = queue.shift()
            // 
            list.push(cur.val)
            //console.log("list",list)
            //判断它是不是又左右节点
            if(cur.left){
                // 那么在队列里插入
                queue.push(cur.left)
            }
            if(cur.right){
                queue.push(cur.right)
            }
        }
        // 这时，这一层已经遍历好了
        res.push(list)
    }
    return res
};
```

二叉树的层序遍历2

链接：[107. 二叉树的层序遍历 II - 力扣（LeetCode）](https://leetcode.cn/problems/binary-tree-level-order-traversal-ii/)

题解：

1. 其实思路和上面层序遍历一样，唯一的不同就是，我这边是从下往上，也就是一种先进后出的意思
2. 那么我们很容易想到，这次我们维护的其实就是一个`栈`

代码：

```typescript

function levelOrderBottom(root: TreeNode | null): number[][] {
    // 按照套路，我们这个同样也是BFS
    // 那么这时，我们维护的就不是一个队列，而是一个栈，因为这个可以做到，先进后出
    let res:number[][] = []
    let stack:TreeNode[] = []
    // 首先将根节点放进去
    if(!root){
        return []
    }
    stack.push(root)
    // 现在进行向外扩展
    while(stack.length){
        let list:number[] = []
        // 首先获得当前的stack的大小
        let size = stack.length;
        for(let i = 0;i<size;i++){
            let cur = stack.shift()
            list.push(cur.val)
            if(cur.left){
                stack.push(cur.left)
            }
            if(cur.right){
                stack.push(cur.right)
            }
        }
        // 现在将这个值放进数组
        res.unshift(list)
    }
    return res
};
```

