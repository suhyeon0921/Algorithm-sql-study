/**
 * @param {number[][]} moves
 * @return {string}
 */
var tictactoe = function(moves) {
  let rows = [0, 0, 0], cols = [0, 0, 0], dia = 0, antiDia = 0, count = 0;

  for (let [row, col] of moves) {
    let value = (count % 2 === 0) ? 1 : -1;
    rows[row] += value;
    cols[col] += value;

    if (row + col === 2) {
      antiDia += value;
    }

    if (row === col) {
      dia += value;
    }

    if ([rows[row], cols[col], antiDia, dia].includes(3)) {
      return 'A';
    } else if ([rows[row], cols[col], antiDia, dia].includes(-3)) {
      return 'B';
    }
    count++;
  }

  if (count < 9) {
    return 'Pending';
  }
  return 'Draw';
};