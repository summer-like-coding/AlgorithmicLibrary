var minWindow = function (s:string, t:string) : string{
    // need是target的集合
    const need = new Map<string, number>();
    // window是当前选中框的集合
    const window = new Map<string, number>();
    for (let value of t) {
        if (need.has(value)) {
            need.set(value, need.get(value) + 1)
        } else {
            need.set(value, 1)
        }
    }

    // 设置两个边界，left和right
    let left = 0;
    let right = 0;
    // valid意思是满足的情况
    let valid = 0;
    // 判断是不是满足条件，需要收缩
    // 记录最小
    let len = Number.MAX_VALUE
    let start = 0
    while (right < s.length) {
        let d = s[right];
        right++
        if (need.has(d)) {
            window.set(d, window.get(d) ? window.get(d) + 1 : 1)
            if (window.get(d) === need.get(d)) {
                valid++
            }
        }
        while (valid === need.size) {
            if (right - left < len) {
                start = left
                len = right - left
            }
            // 开始收缩
            let e = s[left]
            left++
            if (need.has(e)) {
                if (window.get(e) === need.get(e)) {
                    valid--;//valid不符合条件
                }
                // if (window.get(e) - 1) {
                //     window.set(e, 0)
                // } else {
                //     window.set(e,window.get(e)-1)
                // }
                window.set(e, window.get(e) - 1)
            }
        }
    }
    
    return len === Number.MAX_VALUE ? '' : s.slice(start, start+len)
};

console.log(minWindow("ab", "a"));