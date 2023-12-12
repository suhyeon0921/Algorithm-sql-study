/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var increasingBST = function(root) {
  let data = [];
  const dfs = (root) => {
    if (!root) {
      return null;
    }

    dfs(root.left);
    data.push(root.val);
    dfs(root.right);
  }
  
  dfs(root);
  
  let node = new TreeNode(data[0]);
  let curr = node;

  for (let i = 1; i < data.length; i++) {
    curr.right = new TreeNode(data[i]);
    curr = curr.right;
  }
  return node;
};