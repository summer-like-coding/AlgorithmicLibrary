var getModifiedArray = function(length: number, update: number[][]){
    // 对一个数组进行频繁操作（进行增减，那么我们就可以使用差分数组）
    // 差分数组：数组长度和原数组长度一样
    // diff[i] = nums[i]-nums[i-1]
    // nums[i] = diff[i]+nums[i-1]
    // 首选先构造差分数组
    
    let diff = new Array(length).fill(0);
    // console.log(diff)
    // 现在进行操作
    for (let value of update) {
        let firstIndex = value[0];
        let lastIndex = value[1];
        let inc = value[2];
        diff[firstIndex] += inc;
        if (lastIndex + 1 < diff.length) {
            diff[lastIndex + 1] -= inc;
        }
    }
    return getRes(diff);
}

// 根据差分数组求除原料数组
var getRes = function (diff:number[]) {
    // nums[i] = diff[i]+nums[i-1]
    let len = diff.length;
    let nums = new Array(len).fill(0);
    nums[0] = diff[0]
    for (let i = 1; i < diff.length; i++){
        nums[i] = diff[i]+nums[i-1]
    }
    return nums
}
console.log(getModifiedArray(5,[[1,3,2],[2,4,3],[0,2,-2]]))