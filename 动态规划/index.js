var getRow = function(rowIndex) {
    // 递归
    let row = [];
    // 开头都是1
    row.push(1);
    // base case
    if(rowIndex === 0){
        return row
    }
    // 获取上一行
    let preRow = getRow(rowIndex-1);
    for(let i = 0;i<preRow.length-1;i++){
        row.push(preRow[i]+preRow[i+1])
    }
    row.push(1)
    return row
};

console.log(getRow(3));