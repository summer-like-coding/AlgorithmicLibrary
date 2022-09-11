function combine(n: number, k: number): number[][] {
    // DFS
    // 设置返回的结果
    const res:number[][] = [] 
    // 设置走过的路径
    const track:number[] = []
    backTrack(track,n,k,res,1)
    return res
};
const backTrack = (track:number[],n:number,k:number,res:number[][],start:number)=>{
    // 为什么要设置start，因为我们的组合不讲究顺序，所以避免重复
    // 回溯条件
    if(track.length === k){
        res.push(Array.from(track))
        return;
    }
    // 进行遍历
    for(let i = start;i<=n;i++){
        // 为什么这边不用像全排列那样进行判断
        // 因为我已经规定了start，也就是，我等会所有的第一个值，一定都是之前未出现过的
        track.push(i)
        backTrack(track,n,k,res,i+1)
        track.pop()
    }
}
console.log(combine(4,2));
