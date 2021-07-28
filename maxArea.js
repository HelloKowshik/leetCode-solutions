let height = [1, 8, 6, 2, 5, 4, 8, 3, 7];
height = [4, 3, 2, 1, 4];
const maxArea = function (height) {
  let max = 0,
    left = 0,
    right = height.length - 1;
  while (right > left) {
    let leftPointer = height[left];
    let rightPointer = height[right];
    let area = Math.min(leftPointer, rightPointer) * (right - left);
    if (area > max) max = area;
    if (rightPointer > leftPointer) left++;
    else right--;
  }
  return max;
};

console.log(maxArea(height));
