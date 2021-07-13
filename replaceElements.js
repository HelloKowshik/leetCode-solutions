const arr = [17, 18, 5, 4, 6, 1];

const replaceElements = function (arr) {
  let max = -1;
  for (let i = arr.length - 1; i > -1; i--) {
    if (arr[i] > max) {
      max = arr[i];
    }
    arr.splice(i, 1, max);
  }
  arr.shift();
  arr.push(-1);
  return arr;
};

console.log(replaceElements(arr));
