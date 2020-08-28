var eraseOverlapIntervals = function (intervals) {
  let cnt = 0;
  for (let i = 0; i < intervals.length - 1; i++) {
    // let j = i + 1;
    if (
      intervals[i][0] >= intervals[i + 1][0] ||
      intervals[i][1] >= intervals[i + 1][1]
    ) {
      cnt++;
    }
  }

  return cnt;
};
console.log(
  eraseOverlapIntervals([
    [1, 2],
    [2, 3],
    [3, 4],
    [1, 3],
  ])
);
console.log(
  eraseOverlapIntervals([
    [1, 2],
    [1, 2],
    [1, 2],
  ])
);
