// 递归法，表示f(n) = 1+f(1)+f(2)+......+f(n/2)
const map = new Map();
function f(n: number) {
  if (n === 1) {
    return 1;
  }
  let res = 1;
  if (map.has(n)) {
    return map.get(n);
  }
  for (let i = 1; i <= Math.floor(n / 2); i++) {
    res += f(i);
  }
  map.set(n, res);
  return res;
}
console.log(f(10));
