var rightSideView = function (root) {
  let res = [];
  let stack = [];
  if (root === null) {
    return res;
  }
  let queue = [root];
  while (queue.length !== 0) {
    let currentLevel = [];
    let nums = queue.length;
    for (let i = 0; i < nums; i++) {
      let curr = queue.shift();
      currentLevel.push(curr.val);
      if (curr.left) {
        queue.push(curr.left);
      }
      if (curr.right) {
        queue.push(curr.right);
      }
    }
    res.push(currentLevel);
  }

  for (let i = 0; i < res.length; i++) {
    stack.push(res[i][res[i].length - 1]);
  }
  return stack;
};

var rightSideView = function (root) {
  let res = [];
  let stack = [];
  if (root === null) {
    return res;
  }
  let queue = [root];
  while (queue.length !== 0) {
    let currentLevel = [];
    let nums = queue.length;
    for (let i = 0; i < nums; i++) {
      let curr = queue.shift();
      currentLevel.push(curr.val);
      if (curr.left) {
        queue.push(curr.left);
      }
      if (curr.right) {
        queue.push(curr.right);
      }
    }
    res.push(currentLevel.pop());
  }
  return res;
};
