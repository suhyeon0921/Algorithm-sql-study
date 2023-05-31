var mergeAlternately = function(word1, word2) {
  let answer = '';
  for (let i = 0; i < Math.max(word1.length, word2.length); i++) {
    if (i < word1.length) {
      answer += word1[i];
    }
    if (i < word2.length) {
      answer += word2[i];
    }
  }
  return answer;
};