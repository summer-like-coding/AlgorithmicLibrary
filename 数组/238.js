var productExceptSelf = function(nums) {
    // 暴力解
    // let answer = []
    // for(let i = 0;i<nums.length;i++){
    //     let value  = 1;
    //     for(let j = 0;j<nums.length;j++){
    //         if(i!== j){
    //             value *= nums[j]
    //         }
    //     }
    //     answer.push(value)
    // }
    // return answer

    // 虽然不允许，但是除法这个方法确实很妙

    // 使用左右下标，从左往右一次，从右往左一次
    let L = []
    L[0] = 1;
    for(let i = 0;i<nums.length-1;i++){
        L.push(L[i]*nums[i])
    }
    // 设置右边
    let R = new Array(nums.length)
    R[nums.length-1] = 1;
    for(let j = nums.length-1;j>0;j--){
        R.unshift(nums[j]*R[j])
    }
    let res = []
    for(let i = 0;i<nums.length;i++){
        res.push(L[i]*R[i])
    }
    return res
};
console.log(productExceptSelf([1,2,3,4]));