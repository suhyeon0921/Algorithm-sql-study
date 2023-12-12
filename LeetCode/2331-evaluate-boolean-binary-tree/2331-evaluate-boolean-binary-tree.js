var evaluateTree = function(root) {
  if (!root) {
    return;
  }
  let left = evaluateTree(root.left);
  let right = evaluateTree(root.right);

  if (root.val === 2) {
    return left || right;
  }
  if (root.val === 3) {
    return left && right;
  }
  return root.val;
};