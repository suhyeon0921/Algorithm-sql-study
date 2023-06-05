var numEnclaves = function(grid) {
  const rows = grid.length;
  const cols = grid[0].length;

  const dfs = (row, col) => {
    if (row < 0 || col < 0 || row >= rows || col >= cols || grid[row][col] !== 1) {
      return;
    }
    
    grid[row][col] = -1;
    dfs(row + 1, col);
    dfs(row - 1, col);
    dfs(row, col + 1);
    dfs(row, col - 1);
  }  

  for (let i = 0; i < rows; i++) {
    dfs(i, 0);
    dfs(i, cols - 1);
  }

  for (let j = 0; j < cols; j++) {
    dfs(0, j);
    dfs(rows - 1, j);
  }

  let count = 0;
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (grid[i][j] === 1) {
        count++;
      }
    }
  }
  return count;
};