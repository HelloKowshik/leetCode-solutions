let nums = [4, 3, 2, 7, 8, 2, 3, 1];
// nums = [1, 1];
const findDisappearedNumbers = function (nums) {
  nums.forEach((num) => {
    let idx = Math.abs(num) - 1;
    if (nums[idx] > 0) {
      nums[idx] = nums[idx] * -1;
    }
  });
  let res = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      res.push(i + 1);
    }
  }
  return res;
};
console.log(findDisappearedNumbers(nums));
