let c = 5;
// c = 3;
// c = 89;
const judgeSquareSum = function (c) {
  let left = 0,
    right = Math.floor(Math.sqrt(c));
  while (left <= right) {
    let total = left * left + right * right;
    if (total === c) return true;
    else if (total > c) right--;
    else left++;
  }
  return false;
};

console.log(judgeSquareSum(c));
