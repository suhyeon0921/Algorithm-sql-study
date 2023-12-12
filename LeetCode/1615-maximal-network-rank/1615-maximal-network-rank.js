var maximalNetworkRank = function(n, roads) {
  const graph = new Array(n);
  for (let i = 0; i < graph.length; i++) {
    graph[i] = [];
  }

  for (const [from, to] of roads) {
    graph[from].push(to);
    graph[to].push(from);
  }

  let ans = 0;

  for (let city1 = 0; city1 < graph.length; city1++) {
    const neighbors1 = graph[city1];
    let currSum = neighbors1.length;

    for (let city2 = city1 + 1; city2 < graph.length; city2++) {
      const neighbors2 = graph[city2];

      for (let neighbor2 of neighbors2) {
        if (neighbor2 !== city1) {
          currSum++;
        }
      }

      ans = Math.max(ans, currSum);

      currSum = neighbors1.length;
    }
  }
  return ans;
};