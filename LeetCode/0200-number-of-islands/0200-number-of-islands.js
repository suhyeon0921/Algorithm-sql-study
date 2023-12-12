var numIslands = function(grid) {
  let count = 0;
  
  const dfs = (grid, i, j) => {
    if (i < 0 || i >= grid.length || j < 0 || j >= grid[i].length || grid[i][j] == '0') {
      return;
    }

    grid[i][j] = '0';

    // 상하좌우 탐색
    dfs(grid, i + 1, j);
    dfs(grid, i, j + 1);
    dfs(grid, i - 1, j);
    dfs(grid, i, j - 1);
  }

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] == '1') {
        count += 1;
        dfs(grid, i, j);
      }
    }
  }
  return count
};