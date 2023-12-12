/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
var pacificAtlantic = function(heights) {
  let h = heights.length
  let w = heights[0].length;

  let pacific = new Set();
  let atlantic = new Set();

  const dfs = (x, y, previousHeight, set) => {
    if (x < 0 || y < 0 || y >= h || x >= w) {
      return;
    }

    let height = heights[y][x];
    if (height < previousHeight) {
      return;
    }
    let index = x + y * w;

    if (set.has(index)) {
      return;
    }
    set.add(index);

    dfs(x + 1, y, height, set);
    dfs(x - 1, y, height, set);
    dfs(x, y + 1, height, set);
    dfs(x, y - 1, height, set);
  }

  for (let i = 0; i < w; i++) {
    dfs(i, 0, 0, pacific);
  }
  for (let i = 0; i < h; i++) {
    dfs(0, i, 0, pacific);
  }
  for (let i = 0; i < w; i++) {
    dfs(i, h - 1, 0, atlantic);
  }
  for (let i = 0; i < h; i++) {
    dfs(w - 1, i, 0, atlantic);
  }

  let result = [];
  for (let index of pacific) {
    if (atlantic.has(index)) {
      let x = index % w;
      let y = Math.floor(index / w);

      result.push([y, x]);
    }
  }
  return result;
};