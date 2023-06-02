var shortestBridge = function(grid) {
    const rows = grid.length, cols = grid[0].length;
    let i, j;
    let find = false;
    for (i = 0; i < rows; i++) {
        for (j = 0; j < cols; j++) {
            if (grid[i][j] == 1) {
                find = true;
                break;
            }
        }
        if (find) {
            break;
        }
    }

    const moves = [[-1,0], [0,1], [1,0], [0,-1]];

    const q = [];
    q.push([i, j]);
    let island = [];
    let re = 0;
    const visited = new Array(rows).fill(0).map(r => Array(cols).fill(false));
    while (q.length > 0) {
        const curr = q.splice(0);
        for (const [r, c] of curr) {
            if (!visited[r][c]) {
                visited[r][c] = true;
                island.push([r, c]);
                for (const [mr, mc] of moves) {
                    const nr = r+mr, nc = c+mc;
                    if (nr >=0 && nr < rows && nc >= 0 && nc < cols && grid[nr][nc] == 1 && !visited[nr][nc]) {
                        q.push([nr, nc]);
                    }
                }
            }
        }
    }

    while (true) {
        let neighbors = [];
        for (const [r, c] of island) {
            for (const [mr, mc] of moves) {
                const nr = r+mr, nc = c+mc;
                if (nr >=0 && nr < rows && nc >= 0 && nc < cols && !visited[nr][nc]) {
                    if (grid[nr][nc] == 1) {
                        return re;
                    }
                    visited[nr][nc] = true;
                    neighbors.push([nr, nc]);
                }
            }
        }
        re++;
        island = [...neighbors];
    } 
    return -1;
};