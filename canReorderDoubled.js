let arr = [-2, -1, -4, -2, -1, -3, -2, -6];
arr = [3, 1, 3, 6];
arr = [4, -2, 2, -4];
arr = [-4, -6, -1, -2, -1, -1, -3, -8];
const canReorderDoubled = function (arr) {
  let map = new Map();
  arr.sort((a, b) => a - b);
  for (let i of arr) {
    map.set(i, map.get(i) + 1 || 1);
  }
  for (let [key, val] of map) {
    let check = key > 0 ? key * 2 : key / 2;
    let needFreq = map.get(check);
    if (!map.has(check)) return false;
    if (needFreq < val) return false;
    else if (needFreq === val) {
      map.delete(key);
      map.delete(check);
    } else {
      map.delete(key);
      map.set(check, needFreq - val);
    }
  }
  return map.size === 0;
};

// canReorderDoubled(arr);
console.log(canReorderDoubled(arr));
