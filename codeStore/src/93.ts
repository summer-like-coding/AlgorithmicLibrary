var restoreIpAddresses = function(s:string) {
    const res:string[] = [], path:string[] = [];
    backtracking(0)
    return res;
    function backtracking(index:number) {
        const len = path.length;
        if(len > 4) return;
        if(len === 4 && index === s.length) {
            res.push(path.join("."));
            return;
        }
        for(let j = index; j < s.length; j++) {
            const str = s.slice(index, j + 1);
            if(str.length > 3 || +str > 255) break;
            if(str.length > 1 && str[0] === "0") break;
            path.push(str);
            backtracking(j + 1);
            path.pop()
        }
    }
};
console.log(restoreIpAddresses("25525511135"));
