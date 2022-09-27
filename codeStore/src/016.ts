function lengthOfLongestSubstring(s: string): number {
  // 对于滑动窗口问题，其实就是我们维护一个窗口，在那里面进行扩大和缩小
  const need = new Map<string, number>();
  // 设置两个指针
  let left = 0;
  let right = 0;
  let res = 0;
  while (right < s.length) {
    let value = s[right];
    right++;
    need.set(value, need.get(value) ? need.get(value) + 1 : 1);
    while (need.get(value)>1) {
      // 那么我们就需要收缩
      let delValue = s[left];
      left++;
      need.set(delValue, need.get(delValue) - 1);
    }
    res = Math.max(res, right - left);
  }
  return res;
}
console.log(lengthOfLongestSubstring("abcabcbb"));
