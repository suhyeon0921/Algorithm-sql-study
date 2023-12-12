var islandPerimeter = function(grid) {
  let land = 0;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === 1) {
        let result = 0;
        if (grid[i]?.[j - 1] !== 1) {
          result++;
        }
        if (grid[i]?.[j + 1] !== 1) {
          result++;
        }
        if (grid[i - 1]?.[j] !== 1) {
          result++;
        }
        if (grid[i + 1]?.[j] !== 1) {
          result++;
        }
        land += result;
      }
    }
  }
  return land; 
};