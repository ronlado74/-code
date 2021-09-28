var isValid = function (s) {
  if (s.length % 2 == 1) return false;
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] == "(" || s[i] == "[" || s[i] == "{") {
      stack.push(s[i]);
    } else {
      if (stack.length == 0) return false;
      if (s[i] == ")" && stack[stack.length - 1] !== "(") return false;
      if (s[i] == "]" && stack[stack.length - 1] !== "[") return false;
      if (s[i] == "}" && stack[stack.length - 1] !== "{") return false;
      stack.pop();
    }
  }
  return !stack.length;
};


