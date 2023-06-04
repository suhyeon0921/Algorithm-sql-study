var distanceK = function(root, target, k) {
  let m = new Map();
  let queue = [root];

  while (queue.length > 0) {
    let node = queue.shift();
    if (node.left) {
      m.set(node.left, node);
      queue.push(node.left);
    }
    if (node.right) {
      m.set(node.right, node);
      queue.push(node.right);
    }
  }

  let values = [], visited = new Map();
  queue = [{node: target, distance: 0}];
  while (queue.length > 0) {
    let {node, distance} = queue.shift();
    visited.set(node, 1);

    if (distance == k) {
      values.push(node.val);
      continue;
    }

    if (node.left && !visited.has(node.left)) {
      queue.push({node: node.left, distance: distance + 1});
    }

    if (node.right && !visited.has(node.right)) {
      queue.push({node: node.right, distance: distance + 1});
    }

    if (m.has(node) && !visited.has(m.get(node))) {
      queue.push({node: m.get(node), distance: distance + 1});
    }
  }
  return values;
};