export class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

function pathSum(root: TreeNode | null, targetSum: number): number[][] {
  // 同样的，我们还是采用递归的方式
  let res: number[][] = [];
  // 设置当前路径和
  let sum = 0;
  function traverse(root: TreeNode | null, targetSum: number): void {
    if (!root) {
      return;
    }
    // 设置一个数组，用来存放所有的值
    let path: number[] = [];
    sum += root.val;
    path.push(root.val);
    if (sum === targetSum) {
      if (!root.left && !root.right) {
        // 那么就是这个结果
        res.push(path);
      }
    }
    traverse(root.left, targetSum);
    traverse(root.right, targetSum);
    sum -= root.val;
    path.pop();
  }
  traverse(root, targetSum);
  return res;
}
// let root:TreeNode = [5,4,8,11,null,13,4,7,2,null,null,5,1]
// console.log(pathSum(root,22));
