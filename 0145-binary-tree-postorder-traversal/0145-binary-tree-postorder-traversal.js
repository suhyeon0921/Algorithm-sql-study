var postorderTraversal = function(root) {
  const result = [];
  const recursive = (node) => {
    if (!node) {
      return;
    }
    if (node.left) {
      recursive(node.left);
    }
    if (node.right) {
      recursive(node.right);
    }
    result.push(node.val);
  }
  recursive(root);
  return result;
};