var canVisitAllRooms = function(rooms) {
  const visited = Array(rooms.length);
  let visitedCount = 0;

  const dfs = (idx) => {
    visited[idx] = true;
    visitedCount++;
    // t or f 반환
    return rooms[idx].some(idx => !visited[idx] && dfs(idx))
  }
  dfs(0);

  return visitedCount === rooms.length
};