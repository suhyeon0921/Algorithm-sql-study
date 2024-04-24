/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {
  citations.sort((a, b) => a - b);

  const len = citations.length;
  let h = 0;
  for (let i = 0; i < len; i++) {
    if (i <= len - i) {
      h = Math.max(h, citations[i]);
    }
  }
  return h;
};