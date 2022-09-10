function permute(nums) {
    // 经典回溯问题
    // 设置一个数组，用于接收数据
    const res = [];
    // 设置选择列表
    const track = []
    backtrack(nums, track, res)
    return res
};
const backtrack = (nums, track, res) => {
    // nums里面是需要全排的数据
    // track里面是排列的数

    if (nums.length === track.length) {
        res.push(Array.from(track))
        
        return ;
    }
    for (let i = 0; i < nums.length; i++) {
        // 判断里面的是不是会出现111，这种数字
        if (track.indexOf(nums[i] !== -1)) {
            continue
        }
        track.push(nums[i])
        backtrack(nums, track, res)
        track.pop()
    }
}
console.log(permute([0,1]));
