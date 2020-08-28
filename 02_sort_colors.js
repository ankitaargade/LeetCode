const sortColors = (nums) => {
  let zero = 0;
  let one = 0;
  let two = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == 0) {
      zero++;
    } else if (nums[i] == 1) {
      one++;
    } else if (nums[i] == 2) {
      two++;
    }
  }
  console.log(zero, one, two);

  let i = 0;
  while (zero > 0) {
    nums[i] = 0;
    zero--;
    i++;
  }
  while (one > 0) {
    nums[i] = 1;
    one--;
    i++;
  }

  while (two > 0) {
    nums[i] = 2;
    two--;
    i++;
  }

  console.log(nums);
};
console.log(sortColors([2, 0, 2, 1, 1, 0]));
