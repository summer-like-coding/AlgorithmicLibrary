function coinChange(coins: number[], amount: number): number {
    // 暴力递归
    // base条件，当总金额为0，那么我们就是只需要0
    
    const dp = (amount:number):number=>{
        if(amount === 0){
            return 0
        }
        if(amount<0){
            return -1
        }
        let res = Number.MAX_VALUE
        let count
        for(let value of coins){
            count = dp(amount-value)
            if(count === -1){
                continue
            }
            res = Math.min(res,count+1)
            
        }
        return res === Number.MAX_VALUE?-1 :res
    }
    return dp(amount)
};
console.log(coinChange([1, 2, 5],11));
