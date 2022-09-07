
var merge = function(intervals) {
    if (intervals.length === 0) return [];
    // 按每个区间的开头大小排序
    intervals.sort((a, b) => a[0] - b[0]);
    let res = [];
    let tmp = intervals[0];
    for (let interval of intervals) {
      // 有重叠，可以合并
      if (interval[0] <= tmp[1]) {
        tmp = [ tmp[0], Math.max(interval[1], tmp[1]) ];
      } else { // 无重叠， tmp是独立的区间，记录到结果中
        res.push([].concat(tmp));
        tmp = interval;
      }
    }
    res.push(tmp);// 最后的区间
  
    return res;
  };
console.log(merge([[1,3],[2,6],[8,10],[15,18]]));