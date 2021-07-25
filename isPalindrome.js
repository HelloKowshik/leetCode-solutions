let x = -121;

const isPalindrome = function (x) {
  let temp = x,
    reminder,
    final = 0;
  while (temp > 0) {
    reminder = temp % 10;
    temp = parseInt(temp / 10);
    final = final * 10 + reminder;
  }
  console.log(final, x);
  if (final === x) return true;
  else return false;
};
console.log(isPalindrome(x));
