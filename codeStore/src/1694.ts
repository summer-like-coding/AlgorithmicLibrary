function reformatNumber(number: string): string {
    const s: string = number.replace(/[- ]/g, '')
    const n: number = s.length
    const ans: Array<string> = new Array<string>()
    let idx: number = 0
    while(idx<n-4){
        ans.push(s.substring(idx, idx+3))
        idx += 3
    }
    if (idx == n - 4) {
        ans.push(s.substring(idx, idx+2))
        idx += 2
    }
    ans.push(s.substring(idx, n))
    return ans.join("-")
};
console.log(reformatNumber("1-23-45 6"));
