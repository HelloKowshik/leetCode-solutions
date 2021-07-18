let arr = [1, 1, 0, 1, 1];
// arr = [1, 0, 1, 0, 1];
// arr = [0, 0, 0, 0];
arr = [1, 1, 0, 0, 1];

const threeEqualParts = function (arr) {
  let numOfOnes = 0;
  for (let i of arr) {
    if (i === 1) numOfOnes++;
  }
  if (numOfOnes === 0) return [0, arr.length - 1];
  if (numOfOnes % 3 !== 0) return [-1, -1];
  let k = numOfOnes / 3,
    start = 0,
    end = 0,
    mid = 0,
    count = 0;
  for (let i = 0; i < arr.length; ++i) {
    if (arr[i] === 0) continue;
    if (count === 0) start = i;
    ++count;
    if (count === k + 1) mid = i;
    if (count === 2 * k + 1) {
      end = i;
      break;
    }
  }
  while (end < arr.length && arr[start] === arr[mid] && arr[mid] === arr[end]) {
    ++start, ++end, ++mid;
  }
  if (end == arr.length) return [start - 1, mid];
  return [-1, -1];
};
console.log(threeEqualParts(arr));
