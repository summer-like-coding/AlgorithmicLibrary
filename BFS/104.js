function maxDepth(root){
  //我们使用BFS，计算点到点的的距离
  // 这里start就是root点，target就是最近的叶子节点
  // 因为这里面是树，不存在环问题
  // BFS核心就是一个队列
  const queue = new Array();
  queue.push(root);
  // 设置长度
  let depth = 0;
  while (queue.length) {
    // 进行层层遍历
    let size = queue.length;
    for (let i = 0; i < size; i++) {
      let curNode = queue.pop();
      if (curNode.left === null && curNode.right === null) {
        return depth;
      }
      if (curNode.left !== null) {
        queue.push(curNode.left);
      }
      if (curNode.right !== null) {
        queue.push(curNode.right);
      }
    }
    depth++;
  }
  return depth;
}
console.log(maxDepth([3,9,20,null,null,15,7]));

