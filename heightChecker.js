let heights = [1, 1, 4, 2, 1, 3];
// heights = [5, 1, 2, 3, 4];
// heights = [1, 2, 3, 4, 5];
const heightChecker = function (heights) {
  let count = 0;
  let expected = [...heights];
  expected.sort((a, b) => a - b);
  for (let i = 0; i < heights.length; i++) {
    if (heights[i] !== expected[i]) {
      count++;
    }
  }
  return [expected, heights, count];
};

console.log(heightChecker(heights));
