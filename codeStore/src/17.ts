function letterCombinations(digits: string): string[] {
    if (digits === '') return [];
    // 首先想要将这个字母与数字的对相应写出来
    // 设置track
    let digit:string[] = digits.split("")
    let track = new Array()
    // 承接结果
    let res = new Array<string>()
     const letterMap: { [index: string]: string[] } = {
         0:[],
        1: [],
        2: ['a', 'b', 'c'],
        3: ['d', 'e', 'f'],
        4: ['g', 'h', 'i'],
        5: ['j', 'k', 'l'],
        6: ['m', 'n', 'o'],
        7: ['p', 'q', 'r', 's'],
        8: ['t', 'u', 'v'],
        9: ['w', 'x', 'y', 'z'],
    }
    // 这里面其实就是一种组合，所以使用回溯
    backTrack(digit,track,res,0,letterMap)
    return res
};

export const backTrack = (digit:string[],track:string[],res:string[],index:number,letterMap:{[index:string]:string[]})=>{
    // 条件
    if(track.length === digit.length){
        res.push(track.join(""))
        return;
    }
    // 当前的字母
    let letter = letterMap[digit[index]]
    for(let i = 0;i<letter.length;i++){
        track.push(letter[i])
        backTrack(digit,track,res,index+1,letterMap)
        track.pop()
    }
}

// function letterCombinations(digits: string): string[] {
//   if (digits === "") return [];
//   const strMap: { [index: string]: string[] } = {
//     1: [],
//     2: ["a", "b", "c"],
//     3: ["d", "e", "f"],
//     4: ["g", "h", "i"],
//     5: ["j", "k", "l"],
//     6: ["m", "n", "o"],
//     7: ["p", "q", "r", "s"],
//     8: ["t", "u", "v"],
//     9: ["w", "x", "y", "z"],
//   };
//   const resArr: string[] = [];
//   function backTracking(
//     digits: string,
//     curIndex: number,
//     route: string[]
//   ): void {
//     if (curIndex === digits.length) {
//       resArr.push(route.join(""));
//       return;
//     }
//     let tempArr: string[] = strMap[digits[curIndex]];
//     for (let i = 0, length = tempArr.length; i < length; i++) {
//       route.push(tempArr[i]);
//       backTracking(digits, curIndex + 1, route);
//       route.pop();
//     }
//   }
//   backTracking(digits, 0, []);
//   return resArr;
// }
console.log(letterCombinations("23"));
