var singleNumber = function(nums) {
    // 思路，异或做法
    // 一个数和本身异或，那么为0
    // 一个数和0异或就为本身
    nums.sort((a,b)=>a-b)
    let res = 0;
    for(let value of nums){
        res ^= value
    }
    return res
};

console.log(singleNumber([2,2,1]))
console.log(singleNumber([4, 1, 2, 1, 2]))

// 理解
// 4 XOR 1 XOR 2 XOR 1 XOR 2
// 4 XOR 1 XOR 1 XOR 2 XOR 2
// 4 XOR 0
// 4