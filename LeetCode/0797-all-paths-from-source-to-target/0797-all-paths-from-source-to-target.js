var allPathsSourceTarget = function(graph) {
  let result = [];
  let n = graph.length;

  const dfs = (node, curr) => {
    if (node === n - 1) {
      result.push(curr);
      return;
    }

    for (let i = 0; i < graph[node].length; i++) {
      dfs(graph[node][i], [...curr, graph[node][i]]);
    }
  } 
  dfs(0, [0]);

  return result;   
};