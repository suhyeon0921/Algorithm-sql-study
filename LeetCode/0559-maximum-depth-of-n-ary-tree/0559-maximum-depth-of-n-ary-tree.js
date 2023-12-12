var maxDepth = function(root) {
  if (root === null) {
    return 0;
  }

  let depth = 0;
  for (let i = 0; i < root.children.length; i++) {
    const childDepth = maxDepth(root.children[i]);
    depth = Math.max(depth, childDepth);
  }
  
  return depth + 1;
};