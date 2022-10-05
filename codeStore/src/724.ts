function pivotIndex(nums: number[]): number {
  // 其实就是查找左右和相同那个点
  // 双指针
  // let left = 0;
  // let right = nums.length - 1;
  // let sum1 = nums[left];
  // let sum2 = nums[right];
  // while (left < right) {
  //   if (sum1 === sum2) {
  //     return left;
  //   } else if (sum1 < sum2) {
  //     left++;
  //     sum1 += nums[left];
  //   } else if (sum2 < sum1) {
  //     right--;
  //     sum2 += nums[right];
  //   }
  // }
  // 后续发现这么做其实会有一点问题，对于第三种是无法满足的
  // 所以这里引入一种叫做前缀和的东西
  let total = 0;
  nums.map((elem) => (total += elem));
  let sum = 0;
  let value = 0;
  for (let i = 0; i < nums.length; i++) {
    value = nums[i];
    if (2 * sum === total - value) {
      return i;
    }
    sum += value;
  }
  return -1;
}
console.log(pivotIndex([1, 7, 3, 6, 5, 6]));
