var closedIsland = function(grid) {
  const land = 0;
  const water = 1;
  const visitedLand = 2;

  const directions = [
    [1, 0],
    [0, 1],
    [-1, 0],
    [0, -1]
  ]

  let count = 0;
  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      if (grid[row][col] === land && isClosedLand(row, col)) {
        count++;
      }
    }
  }

  return count;

  function isClosedLand(startRow, startCol) {
    grid[startRow][startCol] = visitedLand;

    const queue = [[startRow, startCol]];
    let isClosed = true;

    while (queue.length > 0) {
      const [row, col] = queue.shift();
        
      for (const [rowDir, colDir] of directions) {
        const nextRow = row + rowDir;
        const nextCol = col + colDir;

        // 섬이 그리드 벗어나면 열려있음으로 변경
        if (nextRow >= grid.length || nextCol >= grid[0].length ||
            nextRow < 0 || nextCol < 0) {
          isClosed = false;
        }
        // 육지이고 아직 방문하지 않은 곳이면 방문 체크
        else if (grid[nextRow][nextCol] === land) {
          grid[nextRow][nextCol] = visitedLand;
          queue.push([nextRow, nextCol])
        }
      }
    }
    return isClosed;
  }
  

};

