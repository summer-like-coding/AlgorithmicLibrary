function findAnagrams(s: string, p: string): number[] {
  // 采用滑动窗口
  // 设置两个Map，表示一个需要的值和当前的值
  // 首先计算出，当前需要的值
  let need = new Map<string, number>();
  let window = new Map<string, number>();
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
  let res = new Array<number>();
  while (right < s.length) {
    // 右指针一直网友走
    let value = s[right];
    right++;
    // 如果我需要这个值
    if (need.has(value)) {
      // window.set(value,window.get(value)+1)
      // 对window进行判断
      window.set(value, window.get(value) ? window.get(value) + 1 : 1);
      if (window.get(value) === need.get(value)) {
        vaild++;
      }
    }
    while (right - left >= p.length) {
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
  return res;
}
console.log(findAnagrams("cbaebabacd", "abc"));
