let nums = [2, 7, 11, 15],
  target = 9;
// nums = [3, 2, 4];
// nums = [3, 3];
// target = 6;
const twoSum = function (nums, target) {
  //   for (let i = 0; i < nums.length; i++) {
  //     for (let j = 1; j < nums.length; j++) {
  //       if (nums[i] + nums[j] === target) {
  //         return [i, j];
  //         break;
  //       }
  //     }
  //   }
  let obj = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (obj[nums[i]] >= 0) {
      console.log([obj[nums[i]], i]);
      return [obj[nums[i]], i];
    }
    obj[target - nums[i]] = i;
  }
  return [];
  //   console.log(obj);
};

console.log(twoSum(nums, target));
