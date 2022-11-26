
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}
var closestNodes = function(root, queries) {
    let res = []
    let temp = [999,-999]
    for(let value of queries){
        temp = traverse(root,value,temp)
        if(temp[0] === 999){
            temp[0] = -1
        }
        if(temp[1] === -999){
            temp[1] = -1
        }
        res.push(temp)
        temp = [999,-999]
    }
    return res
};

// 首先先将这个树进行遍历
var traverse = function(root,value,temp){
    
    if(root === null){
        return []
    }
    if(root.left){
        traverse(root.left,value,temp)
    }
    
    if(root.right){
        traverse(root.right,value,temp)
    }
    
    if(root.val <= value){
        temp[0] = Math.min(temp[0],root.val);
    }
    if(root.val >= value){
        temp[1] = Math.max(temp[1],root.val);
    }
    return temp
}
let root = new TreeNode([6, 2, 13, 1, 4, 9, 15, null, null, null, null, null, null, 14])
console.log(closestNodes(root, [2, 5, 16]))