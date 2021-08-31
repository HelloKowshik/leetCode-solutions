let s = 'babad';
// s = 'cbbd';
s = 'a';
const longestPalindrome = function (s) {
  if (s.length === 1 || s.length === null) return s;
  let longestString = '';
  for (let i = 0; i < s.length; i++) {
    let evenPalindrom = expandCenter(s, i - 1, i);
    let oddPalindrom = expandCenter(s, i, i);

    if (evenPalindrom.length > longestString.length) {
      longestString = evenPalindrom;
    }
    if (oddPalindrom.length > longestString.length) {
      longestString = oddPalindrom;
    }
  }
  return longestString;
};

function expandCenter(str, left, right) {
  let index = 0;
  while (str[left - index] && str[left - index] === str[right + index]) {
    index++;
  }
  index--;
  return str.slice(left - index, right + index + 1);
}
console.log(longestPalindrome(s));
