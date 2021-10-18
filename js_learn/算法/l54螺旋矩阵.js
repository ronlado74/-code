matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
var spiralOrder = function (matrix) {
  if (!matrix.length || !matrix[0].length) {
    return [];
  }
  let res = [];
  let rows = matrix.length,
    colums = matrix[0].length;
  let left = 0,
    right = colums - 1;
  let top = 0,
    bottom = rows - 1;

  while (left <= right && top <= bottom) {
    for (let colum = left; colum <= right; colum++) {
      res.push(matrix[top][colum]);
    }
    for (let row = top + 1; row <= bottom; row++) {
      res.push(matrix[row][right]);
    }

    if (left < right && top < bottom) {
      for (let colum = right - 1; colum >= left; colum--) {
        res.push(matrix[bottom][colum]);
      }
      for (let row = bottom - 1; row > top; row--) {
        res.push(matrix[row][left]);
      }
    }
    left = left + 1;
    right = right - 1;
    top = top + 1;
    bottom = bottom - 1;
  }
  return res;
};
