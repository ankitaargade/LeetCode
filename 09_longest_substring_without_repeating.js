var lengthOfLongestSubstring = function (s) {
  var arr = [];
  for (let i = 0; i < s.length; i++) {
    console.log(arr.find((e) => e === s[i]));
    if (arr.find((e) => e === s[i])) {
      arr.push(s[i]);
      console.log("+", s[i]);
    } else {
      arr.length = 0;
      arr.push(s[i]);
    }
  }

  return arr.join("");
};
console.log(lengthOfLongestSubstring("abcabcbb"));
// console.log(lengthOfLongestSubstring("bbbbb"));
// console.log(lengthOfLongestSubstring("pwwkew"));
