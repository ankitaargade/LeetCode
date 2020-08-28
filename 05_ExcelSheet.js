var titleToNumber = function (s) {
  let total = 0;
  for (let i = s.length - 1, j = 0; i >= 0; i--, j++) {
    total += Math.pow(26, j) * (s[i].charCodeAt() - 64);
    // console.log(total);
  }
  //   console.log(total);
  return total;
};
console.log(titleToNumber("A"));
// console.log(titleToNumber("AC"));

// console.log(titleToNumber("ZY"));
