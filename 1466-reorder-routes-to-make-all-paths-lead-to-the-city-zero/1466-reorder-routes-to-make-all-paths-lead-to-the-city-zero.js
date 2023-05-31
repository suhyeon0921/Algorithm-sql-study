var minReorder = function(n, connections) {
  let ans = 0;
  let graph = new Array(n).fill().map(_ => new Array());
  let inverse = new Array(n).fill().map(_ => new Array());
  let visited = new Array(n).fill(0);

  for (let i = 0; i < connections.length; i++) {
    let [from, to] = connections[i];
    graph[from].push(to);
    inverse[to].push(from);
  }

  let q = [0];

  while(q.length > 0) {
    let val = q.pop();
    visited[val] = 1;
    for (let i = 0; i < inverse[val].length; i++) {
      let node = inverse[val][i];
      if (visited[node] !== 1) {
        q.push(node);
        visited[node] = 1;
      }
    };

    for (let i = 0; i < graph[val].length; i++) {
      let node = graph[val][i];
      if (visited[node] !== 1) {
        q.push(node);
        visited[node] = 1;
        ans++;
      }
    };
  }
  return ans;
};