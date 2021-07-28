let nums = [-1, 0, 1, 2, -1, -4];
nums = [-2, 0, 0, 2, 2];
nums = [3, 0, -2, -1, 1, 2];
const threeSum = function (nums) {
  let triplets = [];
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i++) {
    if (i === 0 || (i > 0 && nums[i] !== nums[i - 1])) {
      let left = i + 1;
      let right = nums.length - 1;
      while (left < right) {
        const sum = nums[left] + nums[right] + nums[i];
        if ((left > i + 1 && nums[left] === nums[left - 1]) || sum < 0) {
          left++;
        } else if (
          (right < nums.length - 1 && nums[right] === nums[right + 1]) ||
          sum > 0
        ) {
          right--;
        } else if (sum === 0) {
          triplets.push([nums[i], nums[left], nums[right]]);
          left++;
          right--;
        }
      }
    }
  }
  return triplets;
};

console.log(threeSum(nums));
