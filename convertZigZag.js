let s = 'PAYPALISHIRING',
  numRows = 3;
// s = 'AB';
// numRows = 1;
const convert = function (s, numRows) {
  if (numRows === 1) return s;
  let yAxis = 0,
    isZigging = true;
  const finalRow = [...new Array(numRows)].map((_) => []);
  for (let i = 0; i < s.length; i++) {
    finalRow[yAxis].push(s[i]);
    if (isZigging) {
      if (yAxis === numRows - 1) {
        isZigging = false;
        yAxis--;
      } else yAxis++;
    } else {
      if (yAxis === 0) {
        isZigging = true;
        yAxis++;
      } else {
        yAxis--;
      }
    }
  }
  return finalRow.reduce((str, row) => str + row.join(''), '');
};

console.log(convert(s, numRows));
