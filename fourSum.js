let nums = [1, 0, -1, 0, -2, 2],
  target = 0;
// nums = [2, 2, 2, 2, 2];
// target = 8;

const fourSum = function (nums, target) {
  let quadruplets = new Map();
  let elementMap = new Map();
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      for (let k = 0; k < nums.length; k++) {
        let fourthNum = target - nums[i] - nums[j] - nums[k];
        if (
          elementMap.has(fourthNum) &&
          elementMap.get(fourthNum) !== k &&
          elementMap.get(fourthNum) !== j &&
          elementMap.get(fourthNum) !== i &&
          i !== j &&
          i !== k &&
          j !== k
        ) {
          let quadrupletArr = [nums[i], nums[j], nums[k], fourthNum];
          let arrKeys = quadrupletArr.sort((a, b) => a - b).join('');
          quadruplets.set(arrKeys, quadrupletArr);
        } else {
          elementMap.set(nums[k], k);
        }
      }
    }
  }
  return [...quadruplets.values()];
};

console.log(fourSum(nums, target));
