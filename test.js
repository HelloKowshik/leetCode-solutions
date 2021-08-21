let a = [1, 2, 3, 4, 4, 4, 1];
let s = new Set(a);
a = [];
s.forEach((x) => a.push(x));
console.log(a);
