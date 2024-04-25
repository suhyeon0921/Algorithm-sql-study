/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  const stack = [];

  for (const char of s) {
    stack.push(char);

    for (let i = 0; i < stack.length - 1; i++) {
      if (stack[i] === '(') {
        if (stack[i + 1] === ')') {
          stack.pop(i);
          stack.pop(i + 1);
        }
      } else if (stack[i] === '[') {
        if (stack[i + 1] === ']') {
          stack.pop();
          stack.pop(i + 1);
        }
      } else if (stack[i] === '{') {
        if (stack[i + 1] === '}') {
          stack.pop();
          stack.pop(i + 1);
        }
      }
    }
  }
  
  return stack.length === 0;
};