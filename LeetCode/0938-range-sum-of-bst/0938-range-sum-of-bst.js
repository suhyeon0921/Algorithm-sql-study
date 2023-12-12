var rangeSumBST = function(root, l, r) {
  let sum = 0;

  const dfs = (node) => {
    if (!node) {
      return;
    }

    if (node.val < l) {
      dfs(node.right);
      return;
    }

    if (node.val > r) {
      dfs(node.left);
      return;
    }
  sum += node.val;
  dfs(node.left);
  dfs(node.right);
  } 
  
  dfs(root);
  return sum;
};