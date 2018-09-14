module.exports = function check(str, bracketsConfig) {
  // your solution
  var leftBr = [];
  var rightBr = [];
  var stack = [];
  var symmBr = [];
  
  for (i = 0; i < bracketsConfig.length; i++) {
    if (bracketsConfig[i][0] == bracketsConfig[i][1]) {
      symmBr.push(bracketsConfig[i][0]);
      continue;
    }
    leftBr.push(bracketsConfig[i][0]);
    rightBr.push(bracketsConfig[i][1]);
  }

  for (i = 0; i < str.length; i++) {
    if (symmBr.indexOf(str [i]) !== -1) {
      if (stack.indexOf(str [i]) == -1) {
        stack.push(str [i]);
        continue;
      }
      if (stack.length == 0) return false;
      if (str[i] != stack.pop()) {
        return false;
      }

    }
    if (leftBr.indexOf(str [i]) !== -1) {
      stack.push(str [i]);
      continue;     
    }
    if (rightBr.indexOf(str [i]) !== -1) {
      if (stack.length == 0) return false;
      if (rightBr.indexOf(str[i]) != leftBr.indexOf(stack.pop())) {
        return false;
      }           
    }
  }
  if (stack.length > 0) return false;
  return true;
}
