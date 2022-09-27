
// 判断回文时候，不要使用
// // 
// const isPalindrome = (
//   str: string
// ): boolean => {
//   return str.length && str === str.split("").reverse().join("")
// };
const isPalindrome = (
  str: string,
  startIndex: number,
  endIndex: number
): boolean => {
  while (startIndex < endIndex) {
    if (str[startIndex] !== str[endIndex]) {
      return false;
    }
    startIndex++;
    endIndex--;
  }
  return true;
};
export const backTrack = (
  str: string,
  startIndex: number,
  res: string[][],
  path: string[]
): void => {
  if (startIndex === str.length) {
    res.push([...path]);
    console.log("res", res);

    return;
  }
  for (let i = startIndex; i < str.length; i++) {
    let value = str.substring(startIndex, i + 1);
    if (!isPalindrome(str, startIndex, i)) {
      continue;
    }
    // console.log("value", value);
    path.push(value);
    backTrack(str, i + 1, res, path);
    path.pop();
  }
};
function partition(s: string): string[][] {
  const res: string[][] = [];
  const path: string[] = [];
  let startIndex = 0;
  backTrack(s, startIndex, res, path);
  return res;
}

console.log(partition("aab"));
