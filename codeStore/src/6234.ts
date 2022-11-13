function subarrayLCM(nums: number[], k: number): number {
    // 首先将所有连续的子数组表示出来
    // 然后判断，子数组的最小公倍数是不是K
    // 最小公倍数 = 两数之积/最大公约数
    // 最大公约数，怎么求，使用辗转相除法
        
        let count = 0;
        for(let i = 0;i<nums.length;i++){
            let res = 1; 
            for(let j = i;j<nums.length;j++){
                res = lcm(nums[j],res)
                if(res === k){
                    count++;
                }
    
            }
        }
        return count
    };
    // 计算最大公约数
    function gcd(a:number,b:number){
        let r:number = 0;
        while(b>0){
            r = a%b;
            a = b;
            b = r;
        }
        return a
    }
    
    // 计算最小公倍数
    function lcm(a:number,b:number){
        return (a*b)/gcd(a,b);
}
    
console.log(subarrayLCM([3, 6, 2, 7, 1], 6));