function findAnagrams(s, p) {
    // 采用滑动窗口
    // 设置两个Map，表示一个需要的值和当前的值
    // 首先计算出，当前需要的值
    let need = new Map();
    let window = new Map();
    for (let value of p) {
        if (need.has(value)) {
            need.set(value, need.get(value) + 1);
        } else {
            need.set(value, 1);
        }
    }

    // 这时候我们就开始进行遍历
    // 设置左右指针
    let left = 0;
    let right = 0;
    // 设置满足条件的值
    let vaild = 0;
    //设置结果
    let res = new Array();
    while (right < s.length) {
        console.log("进入循环");
        // 右指针一直网友走
        let value = s[right];
        right++;
        console.log("right",right);
        // 如果我需要这个值
        if (need.has(value)) {
            console.log("进行判断");
            // window.set(value,window.get(value)+1)
            // 对window进行判断
            window.set(value, window.get(value) ? window.get(value) + 1 : 1)
            if (window.get(value) === need.get(value)) {
                vaild++;
                console.log("vaild值+1",vaild);

            }
        }
        while (right - left >= p.length) {
            console.log("valid",vaild);
            if (vaild === need.size) {
                console.log("left", left);
                res.push(left);
            }
            //   收缩
            let left_value = s[left];
            left++;
            if (need.has(left_value)) {
                if (window.get(left_value) === need.get(left_value)) {
                    vaild--;
                }
                // 少的值减1
                window.set(left_value, window.get(left_value) - 1);
            }
        }
    }
    return res
}
console.log(findAnagrams("cbaebabacd", "abc"));
