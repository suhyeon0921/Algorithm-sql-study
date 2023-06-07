var arraySign = function(nums) {
  let answer = 1;

  for (let num of nums) {
    answer *= num;
  }
  if (answer > 0) {
    return 1;
  }    
  else if (answer < 0) {
    return -1;
  } 
  else {
    return 0;
  }
};