let strs = ['flower', 'flow', 'flight'];
strs = ['dog', 'racecar', 'car'];

const longestCommonPrefix = function (strs) {
  let lcp = '';
  if (strs === null || strs.length === 0) return lcp;
  for (let i = 0; i < strs[0].length; i++) {
    for (let j = 1; j < strs.length; j++) {
      if (strs[j][i] !== strs[0][i]) {
        return lcp;
      }
    }
    lcp += strs[0][i];
  }
  return lcp;
};

console.log(longestCommonPrefix(strs));
