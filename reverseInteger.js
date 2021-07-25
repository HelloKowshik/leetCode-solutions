let num = 0;
num = 1534236469;
num = -321;
const reverse = function (x) {
  let res;
  if (x >= 0) {
    res = Number.parseInt(x.toString().split('').reverse().join(''));
    console.log(res, Math.pow(2, 31) - 1);
    if (res <= Math.pow(2, 31) - 1) return res;
    else return 0;
  } else {
    res = Number.parseInt(x.toString().split('').reverse().join('')) * -1;
    console.log(res, Math.pow(-2, 31));
    if (res >= Math.pow(-2, 31)) return res;
    else return 0;
  }
};
console.log(reverse(num));
