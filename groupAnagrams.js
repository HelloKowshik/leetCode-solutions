let strs = ['eat', 'tea', 'tan', 'ate', 'nat', 'bat'];

const groupAnagrams = function (strs) {
  let output = {};
  for (let str of strs) {
    let sanitizeStr = str.split('').sort().join('');
    if (output[sanitizeStr]) {
      output[sanitizeStr].push(str);
    } else {
      output[sanitizeStr] = [str];
    }
  }

  return Object.values(output);
};
console.log(groupAnagrams(strs));
