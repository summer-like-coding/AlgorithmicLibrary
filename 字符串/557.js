var reverseWords = function(s) {
    let arr = s.split(" ");
    for(let value of arr){
        value = value.split("").reverse().join("")
    }
    return arr.join(" ")
};
console.log(reverseWords("Let's take LeetCode contest"));