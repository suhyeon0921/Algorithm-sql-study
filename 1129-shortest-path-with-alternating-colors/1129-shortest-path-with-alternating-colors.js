var shortestAlternatingPaths = function(n, redEdges, blueEdges) {
  const answer = new Array(n).fill(-1);
  answer[0] = 0
  
  redEdges = redEdges.reduce((adjList, edge) => {
    const [node, connection] = edge;
    adjList[node] = adjList[node] || []
    adjList[node].push(connection)
    return adjList
  }, {})
  redEdges.visited = new Set()
  
  blueEdges = blueEdges.reduce((adjList, edge) => {
    const [node, connection] = edge;
    adjList[node] = adjList[node] || []
    adjList[node].push(connection)
    return adjList
  }, {})
  blueEdges.visited = new Set()

  redEdges.next = blueEdges
  blueEdges.next = redEdges
  
  const queue = new Queue();
  if (redEdges[0]) {
    for (let redNode of redEdges[0]) queue.enqueue([redNode, blueEdges, 1])
  }
  if (blueEdges[0]) {
    for (let blueNode of blueEdges[0]) queue.enqueue([blueNode, redEdges, 1])
  }
  
  while (!queue.isEmpty()) {
    const [curNode, searchNext, distance] = queue.dequeue();
	
    if (searchNext.visited.has(curNode)) continue;
    searchNext.visited.add(curNode);
	
    if (answer[curNode] === -1) answer[curNode] = distance;
	
    if (searchNext[curNode]) {

      for (let nextNode of searchNext[curNode]) {
        queue.enqueue([nextNode, searchNext.next, distance + 1])
      }
    }
  }
  
  return answer;
};