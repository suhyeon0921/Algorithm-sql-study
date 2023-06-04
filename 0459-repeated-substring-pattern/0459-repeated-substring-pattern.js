var repeatedSubstringPattern = function(s) {
  const len = s.length;

  for (let i = 2; i <= len; i++) {
    if (!(len % i)) {
      const unit = len / i;
      let unitString = '';
      let isMatching = false;

      for (let j = 0; j < i; j++) {
        if (unitString && unitString !== s.slice(j * unit, (j + 1) * unit)) {
          isMatching = false;
          break;
        } else {
          unitString = s.slice(j * unit, (j + 1) * unit) 
          isMatching = true;
        }
      }

      if (isMatching) {
        return true;
      }
    }
  }
  return false;    
};