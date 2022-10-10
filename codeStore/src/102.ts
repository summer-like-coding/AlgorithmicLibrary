class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

function levelOrder(root: TreeNode | null): number[][] {
  // 这是一个BFS，主要核心就是维护一个数组，对数组进行pop和push
  // 首先先将单个元素push进去
  let res: number[][] = [];
  // 这个就是判断已经走了哪些节点
  let queue: TreeNode[] = [];
  queue.push(root);
  if (!root) {
    return res;
  }
  while (queue.length) {
    let size = queue.length;
    //获取这一层的节点
    let list = [];
    // 向四处进行扩散
    for (let i = 0; i < size; i++) {
      // 首先向取出队列里的第一个节点
      let cur: TreeNode = queue.shift();
      //
      list.push(cur.val);
      //判断它是不是又左右节点
      if (cur.left) {
        // 那么在队列里插入
        queue.push(cur.left);
      }
      if (cur.right) {
        queue.push(cur.right);
      }
    }
    // 这时，这一层已经遍历好了
    res.push(list);
  }
  return res;
}

