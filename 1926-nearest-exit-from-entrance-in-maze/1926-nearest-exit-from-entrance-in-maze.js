const nearestExit = (maze, [y0, x0]) => {
    maze[y0][x0] = '@'
    const queue = [[y0, x0, 0]]
    while (queue.length) {
        const [y, x, step] = queue.shift()
        for (const [dy, dx] of [[-1, 0], [0, -1], [1, 0], [0, 1]]) {
            const ny = y + dy, nx = x + dx
            if (!maze[ny] || !maze[ny][nx]) {
                if (step) return step
            } else if (maze[ny][nx] === '.') {
                queue.push([ny, nx, step + 1])
                maze[ny][nx] = '*'
            }
        }
    }
    return -1
}