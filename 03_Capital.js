function isCapital(word) {
  let allCaps = false;
  let allSmall = false;
  let firstCase = false;
  let reject = false;

  console.log(word);
  for (let i = 0; i < word.length; i++) {
    //   case1=All Caps last and next and current is in caps
    if (i == 0) {
      if (word.charCodeAt(i) >= 65 && word.charCodeAt(i) <= 90) {
        allCaps = true;
        firstCase = true;
      } else if (word.charCodeAt(i) >= 97 && word.charCodeAt(i) <= 122) {
        allSmall = true;
        firstCase = false;
        allCaps = false;
      }
    } else if (
      i == 0 &&
      word.charCodeAt(i) >= 65 &&
      word.charCodeAt(i) <= 90 &&
      word.charCodeAt(i + 1) >= 97 &&
      word.charCodeAt(i + 1) <= 122
    ) {
      firstCase = true;
      allSmall = false;
    } else if (firstCase && i > 1 && i < word.length - 2) {
      if (
        word.charCodeAt(i) >= 65 &&
        word.charCodeAt(i) <= 90 &&
        word.charCodeAt(i + 1) >= 65 &&
        word.charCodeAt(i + 1) <= 90
      ) {
        allCaps = true;
      } else if (
        word.charCodeAt(i) >= 97 &&
        word.charCodeAt(i) <= 122 &&
        word.charCodeAt(i + 1) >= 97 &&
        word.charCodeAt(i + 1) <= 122
      ) {
        allSmall = false;
        allCaps = false;
        firstCase = false;
        reject = true;
        break;
      } else {
        allCaps = false;
        allSmall = false;
        reject = true;
      }
    }
  }
  console.log("ALL CAPS--", allCaps);
  console.log("ALL smalls--", allSmall);
  console.log("ALL only first cap--", firstCase);
  console.log("ALL reject--", reject);

  return reject;
}
console.log(isCapital("LAA"));
