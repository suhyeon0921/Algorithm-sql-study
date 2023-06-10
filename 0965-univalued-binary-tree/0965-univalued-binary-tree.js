var isUnivalTree = function(root) {
  if (!root) {
    return true;
  }
  
  const uni = root.val;
  let queue = [root];
  let curNode;

  while (queue.length > 0) {
    curNode = queue.shift();

    if (curNode.val !== uni) {
      return false;
    }

    curNode.left && queue.push(curNode.left);
    curNode.right && queue.push(curNode.right);
  }
  return true;
};