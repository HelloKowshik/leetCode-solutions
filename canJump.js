let nums = [2, 3, 1, 1, 4];
nums = [2, 2, 1, 1, 4];
nums = [3, 2, 1, 0, 4];

const canJump = function (nums) {
  let reach = 0;
  for (let i = 0; i <= reach; i++) {
    reach = Math.max(reach, i + nums[i]);
    if (reach >= nums.length - 1) {
      return true;
    }
  }
  return false;
};

console.log(canJump(nums));
