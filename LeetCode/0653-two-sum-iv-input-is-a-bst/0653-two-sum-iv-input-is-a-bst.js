var findTarget = function (root, k) {
  let arr = [];

  function hepler(root) {
    if (!root) return;

    hepler(root.left);
    arr.push(root.val);
    hepler(root.right);
  }

  hepler(root);
  let start = 0;
  let end = arr.length - 1;
  while (start < end) {
    if (arr[start] + arr[end] === k) {
      return true;
    }
    if (arr[start] + arr[end] > k) {
      end--;
    }
    if (arr[start] + arr[end] < k) {
      start++;
    }
  }

  return false;
};