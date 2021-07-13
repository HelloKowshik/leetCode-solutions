let nums = [10, 9, 2, 5, 3, 7, 101, 18];
nums = [0, 1, 0, 3, 2, 3];
const lengthOfLIS = function (nums) {
  if (nums.length === 0) return 0;
  let helperArr = nums.map(() => 1);
  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < nums.length && j < i; j++) {
      if (nums[i] > nums[j] && helperArr[j] + 1 > helperArr[i]) {
        helperArr[i] = helperArr[j] + 1;
      }
    }
  }
  return Math.max(...helperArr);
};
console.log(lengthOfLIS(nums));
