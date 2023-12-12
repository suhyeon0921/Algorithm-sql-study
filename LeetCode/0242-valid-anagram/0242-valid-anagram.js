var isAnagram = function(s, t) {
  const sLst = s.split('').sort().join('');
  const tLst = t.split('').sort().join('');
  
  if (sLst === tLst) {
    return true;
  } else {
    return false;
  }
};