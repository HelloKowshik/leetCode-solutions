const nums = [3, 1, 2, 4];

const sortArrayByParity = function (nums) {
  nums.sort((a, b) => (a % 2) - (b % 2));
  return nums;
};

console.log(sortArrayByParity(nums));
