const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map((v) => v.split(' '));

const [l, c] = input[0].map(Number);
const alphabet = input[1].sort();

const answer = [];

function mycrypto(s, k) {
  let S = s.length;
  if (S == l) {
    let cnt = 0;
    for (let i = 0; i < S; i++) {
      if (
        s[i] == 'a' ||
        s[i] == 'e' ||
        s[i] == 'i' ||
        s[i] == 'o' ||
        s[i] == 'u'
      ) {
        cnt++;
      }
    }
    if (cnt > 0 && l - cnt > 1) {
      answer.push(s);
    }
    return;
  } else {
    for (let i = k + 1; i < c; i++) {
      mycrypto(s + alphabet[i], i);
    }
  }
}

mycrypto('', -1);

console.log(answer.join('\n'));
