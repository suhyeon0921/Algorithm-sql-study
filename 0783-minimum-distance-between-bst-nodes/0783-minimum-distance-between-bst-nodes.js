var minDiffInBST = function(root) {
  const values = [];

  const getValues = (root) => {
    if (root) {
      values.push(root.val);

      getValues(root.left);
      getValues(root.right);
    }
  };
  getValues(root);

  const distances = values
                      .sort((a, b) => a - b)
                      .map((el, i, arr) => arr[i + 1] - el);
                      
  distances[distances.length - 1] = 111111;
  return Math.min(...distances);
};