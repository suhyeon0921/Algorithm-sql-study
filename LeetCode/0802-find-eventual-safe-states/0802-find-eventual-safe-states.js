var eventualSafeNodes = function(graph) {
  // 0 : 방문하지 않은 노드, 1 : 방문중인 노드, 2 : 방문한 노드
  const visit = new Array(graph.length).fill(0);
  const res = [];

  const dfs = (node) => {
    if (visit[node] === 1) {
      return false;
    }
    if (visit[node] === 2) {
      return true;
    }
    
    visit[node] = 1;

    for (let edge of graph[node]) {
      if (!dfs(edge)) {
        return false;
      }
    }

    visit[node] = 2;

    return true;
  }

  for (let i = 0; i < graph.length; i++) {
    if (dfs(i)) {
      res.push(i);
    }
  }
  
  return res;
};