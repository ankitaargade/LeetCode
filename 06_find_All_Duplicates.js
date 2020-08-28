var findDuplicates = function (nums) {
  nums = nums.sort((a, b) => a - b);
  console.log(nums);

  let i = 0,
    j = i + 1;
  while (i < j && j <= nums.length - 1) {
    if (nums[i] != nums[j]) {
      console.log(i, "-->", j);
      console.log("delete", nums[i]);
      nums.splice(nums.indexOf(nums[i]), 1);
    } else if (nums[i] == nums[j]) {
      console.log(i, "->", j);
      i++;
      j++;
    }
    console.log(nums);
  }
  console.log(i, "**", nums[i]);
  nums.splice(nums.lastIndexOf(nums[i]), nums.length - nums.indexOf(nums[i]));

  console.log(nums);

  return nums;
};
console.log(findDuplicates([22, 24, 21, 22, 56, 48, 24, 48, 56]));
