var levelOrder = function(root) {
    let res = []
    if(root === null){
      return res
    }
    let queue = [root]
    while(queue.length != 0){
      let currentLevel = []
      let nums = queue.length
      for(let i = 0; i < nums; i++){
        let curr = queue.shift()
        currentLevel.push(curr.val)
        if(curr.children){
          curr.children.forEach(item => {
            queue.push(item)
          });
        }
      }
      res.push(currentLevel)
    }
    return res
};