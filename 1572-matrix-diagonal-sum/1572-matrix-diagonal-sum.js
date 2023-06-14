/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function(mat) {
  let left = 0, right = mat.length - 1, sum = 0;

  for (let i = 0; i < mat.length; i++) {
    if (left === right) {
      sum += mat[i][left];
    } else {
      sum += mat[i][left] + mat[i][right];
    }
    left++;
    right--;
  }
  return sum;
};