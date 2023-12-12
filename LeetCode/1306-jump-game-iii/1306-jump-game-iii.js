var canReach = function(arr, start) {
  let queue = [start], n = arr.length, visited = {};

  while(queue.length) {
    let index = queue.shift();

    let minus = index - arr[index];
    let plus = index + arr[index];

    if(arr[index] == 0) return true;

    if((plus >= 0) && (plus < n) && !visited[plus]) {
      visited[plus] = true;
      queue.push(plus);
    }

    if((minus >= 0) && (minus < n)&& !visited[minus]) {
      visited[minus] = true;
      queue.push(minus);
    }

  }
    
    return false;
};