var numOfMinutes = function(n, headID, manager, informTime) {
  const tree = [...Array(n)].map(() => []);
  for (let i = 0; i < n; i++) {
    if (manager[i] !== -1) {
      tree[manager[i]].push(i);
    }
  }
  const traverse = (node) => {
    let maxTime = 0;

    for (let subordinate of tree[node]) {
      maxTime = Math.max(maxTime, traverse(subordinate));
    }
    return maxTime + informTime[node];
  }
  return traverse(headID);
};