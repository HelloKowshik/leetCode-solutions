let s = 'cba',
  k = 1;
s = 'baaca';
k = 3;

const orderlyQueue = function (s, k) {
  if (k === 0) return s;
  else if (k > 1) return s.split('').sort().join('');
  let res = 0;
  for (let i = 1; i < s.length; i++) {
    for (let j = 0; j < s.length; j++) {
      let index =
        s.charCodeAt((res + j) % s.length) - s.charCodeAt((i + j) % s.length);
      if (index !== 0) {
        if (index > 0) res = i;
        break;
      }
    }
  }
  return s.slice(res) + s.slice(0, res);
};

console.log(orderlyQueue(s, k));
