function minSubArrayLen(target: number, nums: number[]): number {
    // 滑动窗口解决
    // 设置两个指针
    let left = 0;
    let right = 0;
    let sum = nums[0];
    let len = Number.MAX_VALUE;
    while(right<nums.length){
        // 首先将扩大窗口
        right++
        sum +=  nums[right];
        // 当值大于或者等于target
        while(sum>= target){
            // 收缩窗口
            sum -= nums[left]
            left++
            // 如果这时候你的值等于target
            if(target === sum){
                len = Math.min(len,right-left+1)
            }
        }
    }
    return len === Number.MAX_VALUE?0:len
};
console.log(minSubArrayLen(11,[1,2,3,4,5]));
