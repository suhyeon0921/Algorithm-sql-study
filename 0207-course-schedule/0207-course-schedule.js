/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
  const adjList = new Array(numCourses).fill(0).map(() => []);
    const inDigree = new Array(numCourses).fill(0);

    for (let i = 0; i < prerequisites.length; i++){
      const pair = prerequisites[i];
      adjList[pair[1]].push(pair[0]);
      inDigree[pair[0]]++;
    }
  
    const stack = [];

    for (let i = 0; i < inDigree.length; i++) {
       if (inDigree[i] === 0) {
           stack.push(i);
       }
    }

    let count = 0;

    while (stack.length) {
        const current = stack.pop();
        count++;
        const adjVetexes = adjList[current];

        for (let i = 0; i < adjVetexes.length; i++) {
           const next = adjVetexes[i];
           inDigree[next]--;

           if (inDigree[next] === 0){
              stack.push(next);
           }
        }
    }

    return count === numCourses;
};