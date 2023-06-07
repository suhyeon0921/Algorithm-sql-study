var preorder = function(root, output = []) {
  if (root == null) {
    return output;
  }

  output.push(root.val);

  for (let child of root.children) {
    preorder(child, output);
  }
  return output;
};