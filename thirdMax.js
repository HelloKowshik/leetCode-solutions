let nums = [2, 2, 3, 1];
nums = [4, 4, 4, 7, 7, 7, 8];
nums = [1, 2, 2, 5, 3, 5];
nums = [1, 2];
nums = [3, 2, 1];
nums = [3, 4, 3, 30];
nums = [1, 1, 2];
nums = [1, 2, -2147483648];

const thirdMax = function (nums) {
  let max = Math.max(...nums);
  let thirdMax = Math.min(...nums);
  let secondMax = Math.min(...nums);
  let uniqueArr = [...new Set(nums)];
  if (uniqueArr.length < 3) {
    thirdMax = max;
  }
  for (let i = 0; i < uniqueArr.length; i++) {
    if (uniqueArr[i] > secondMax && uniqueArr[i] < max) {
      secondMax = uniqueArr[i];
    }
  }
  for (let i = 0; i < uniqueArr.length; i++) {
    if (uniqueArr[i] > thirdMax && uniqueArr[i] < secondMax) {
      thirdMax = uniqueArr[i];
    }
  }
  return [max, secondMax, thirdMax, nums, uniqueArr];
};

console.log(thirdMax(nums));
