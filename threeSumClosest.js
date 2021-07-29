let nums = [-1, 2, 1, -4],
  target = 1;

const threeSumClosest = function (nums, target) {
  nums.sort((a, b) => a - b);
  let closestSum = nums[0] + nums[1] + nums[nums.length - 1];
  for (let i = 0; i < nums.length - 2; i++) {
    let left = i + 1,
      right = nums.length - 1;
    let temp = 0;
    while (left < right) {
      temp = nums[i] + nums[left] + nums[right];
      if (temp > target) right--;
      else left++;
      if (Math.abs(closestSum - target) > Math.abs(temp - target)) {
        closestSum = temp;
      }
    }
  }
  return closestSum;
};

console.log(threeSumClosest(nums, target));
