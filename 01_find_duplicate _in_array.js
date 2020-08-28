// // Given an array nums containing n + 1 integers where each integer is between 1 and n
// // (inclusive),
// // prove that at least one duplicate number must exist. Assume that there is only
// //  one duplicate number, find the duplicate one.

// // REMEMBER=> array will contain nums starting from 1 to its lengh mixedd

// // **************1st way brute force*********** O(n^2) time complexity
// const findDuplicateNumber = (nums) => {
//   for (let i = 0; i < nums.length; i++) {
//     if (i != nums.lastIndexOf(nums[i])) {
//       return nums[i];
//     }
//   }
//   return -1;
// };

// console.log(findDuplicateNumber([1, 3, 4, 2, 2]));

// // *************2nd Way************* O(n) time complexity && O(n) space complexity
// const findDuplicateNumber = (nums) => {
//   let dummy = Array(nums.length);
//   dummy.fill(0);

//   for (let i = 0; i < nums.length; i++) {
//     if (dummy[nums[i]] == 0) {
//       dummy[nums[i]] = 1;
//     } else {
//       console.log(nums[i]);
//       return nums[i];
//     }
//   }
// };
// console.log(findDuplicateNumber([1, 3, 4, 2, 2]));

// *************3rd Way BEST SOLUTION************* O(n) time complexity && O(1) space complexity
// LINKED LIST CYCLE METHOD
const findDuplicateNumber = (nums) => {
  let slow = nums[0];
  let fast = nums[0];

  do {
    slow = nums[slow];
    fast = nums[nums[fast]];
  } while (slow != fast);
  fast = nums[0];
  while (slow != fast) {
    slow = nums[slow];
    fast = nums[fast];
  }
  return slow;
};
console.log(findDuplicateNumber([1, 3, 4, 2, 2]));
console.log(findDuplicateNumber([3, 1, 3, 4, 2]));
