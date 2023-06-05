var mergeTrees = function(root1, root2) {
  if (!root1) {
    return root2;
  } else if (!root2) {
    return root1;
  } else {
    root1.val += root2.val;
    root1.left = mergeTrees(root1.left, root2.left);
    root1.right = mergeTrees(root1.right, root2.right);
    return root1;
  }

}; 