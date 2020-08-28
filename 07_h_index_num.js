// var hIndex = function (citations) {
//   let hNum = 0;
//   citations.sort((a, b) => a - b);
//   var i = 0;
//   while (i <= citations.length - 1 && citations.length - i > citations[i]) {
//     i++;
//   }
//   return citations.length - i;
// };
// console.log(hIndex([])); //0
// console.log(hIndex([1])); //1
// console.log(hIndex([100])); //1
// console.log(hIndex([3, 0, 6, 1, 5])); //3
// console.log(hIndex([1, 2])); //2X  1
// console.log(hIndex([0, 1])); //1
// console.log(hIndex([11, 12])); //2
// console.log(hIndex([4, 4, 0, 0])); //2
// console.log(hIndex([1, 1])); //2X 1

var hIndex = function (citations) {
  let hNum = 0;
  let cnt = 1;
  citations.sort((a, b) => a - b);
  // console.log(citations);
  for (let i = 0; i < citations.length; i++) {
    if (citations[i] == 0) {
      citations.splice(i, 1);
      i--;
    }
    for (let j = 1; j < citations.length; j++) {
      if (citations[i] != 0) {
        if (citations[j] >= i + 1) {
          cnt++;
        }
      }
    }
    // console.log("i", i + 1, "cnt=", cnt);
    if (cnt >= i + 1) {
      hNum = cnt;
      cnt = 0;
    }
  }

  return hNum;
};
console.log(hIndex([])); //0
console.log(hIndex([1])); //1
console.log(hIndex([100])); //1
console.log(hIndex([3, 0, 6, 1, 5])); //3
console.log(hIndex([1, 2])); //1
console.log(hIndex([0, 1])); //1
console.log(hIndex([11, 12])); //2
console.log(hIndex([4, 4, 0, 0])); //2
console.log(hIndex([1, 1])); //1
