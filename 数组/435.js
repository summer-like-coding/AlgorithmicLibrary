var eraseOverlapIntervals = function (intervals) {
    //使用贪心，对end进行排序
    intervals.sort((a, b) => a[1] - b[1]);
    // 获取end值
    let end = intervals[0][1];
    let count = 0;
    for (let value of intervals) {
        let start = value[0];
        if (start >= end) {
            end = value[1]
        } else {
            count++
        }
    }
    return count
};
console.log(eraseOverlapIntervals(
    [[1, 2], [2, 3], [3, 4], [1, 3]]));