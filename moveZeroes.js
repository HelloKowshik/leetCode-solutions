const nums = [0, 1, 0, 3, 12];

const moveZeroes = function (nums) {
  let nonZero = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[nonZero] = nums[i];
      nonZero++;
    }
  }
  for (let k = nonZero; k < nums.length; k++) {
    nums[k] = 0;
  }
  return nums;
};

console.log(moveZeroes(nums));
