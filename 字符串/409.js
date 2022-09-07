/**
 * @param {string} s
 * @return {number}
 */
 var longestPalindrome = function(s) {
    if(s.length === 1){
        return 1
    }
    // 记录里面的每一个值的个数
    let map = new Map();
    for(let value of s){
        if(map.has(value)){
            map.set(value,map.get(value)+1)
        }else{
            map.set(value,1)
        }
    }
    let len = 0;
    let count  = 0;
    for( let [key,value] of map){
        if(!(value % 2)){
            len = len +2;
        }else{
            count++
        }
    }
    count ? len++ : len
    return len
};
console.log(longestPalindrome("aA"));