var CombinationIterator = function (characters, combinationLength) {
  this.substrings = [];
  this.characters = characters;
  this.combinationLength = combinationLength;
  this.showNext = 0;
  for (let i = 0; i < this.characters.length; i++) {
    // for (let j = i + 1; j < this.characters.length; j++) {
    let j = 0;
    let str = "";
    while (j < combinationLength) {
      str += this.characters[i + j];
    }
    this.substrings.push(str);

    // }
  }
  console.log(this.substrings);
};

/**
 * @return {string}
 */
CombinationIterator.prototype.next = function () {
  console.log("from next", this.substrings);
  if (this.showNext != this.substrings.length) {
    this.showNext++;
    return this.substrings[this.showNext - 1];
  }
};

/**
 * @return {boolean}
 */
CombinationIterator.prototype.hasNext = function () {
  if (this.showNext != this.substrings.length) {
    return true;
  }
  return false;
};

var obj = new CombinationIterator("abc", 2);
var param_1 = obj.next();
console.log(param_1);
var param_2 = obj.hasNext();
console.log(param_2);

console.log(obj.next());
console.log(obj.hasNext());

console.log(obj.next());
console.log(obj.hasNext());

console.log(obj.next());
console.log(obj.hasNext());
