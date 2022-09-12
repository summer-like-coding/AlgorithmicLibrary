function subsets(nums: number[]): number[][] {
    // 使用DFS
    // 设置一个track表示总过的路
    let track = new Array<number>()
    // 设置res，表示最后的结果
    let res:number[][] = new Array()
    // 调用回溯
    backTrack(track,nums,0,res)
    return res
};
export const backTrack = (track:number[],nums:number[],startIndex:number,res:number[][])=>{
    // 因为是子集问题，其实就是将里面所有的节点，全部到push到结果里面
    res.push(Array.from(track))
    // 条件
    for(let i = startIndex;i< nums.length;i++){
        // push进去
        track.push(nums[i])
        backTrack(track,nums,i+1,res)
        track.pop()
    }
}
console.log(subsets([1,2,3]));
