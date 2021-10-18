var buildTree = function(preorder, inorder) {
  if (!preorder.length || !inorder.length) return null
  const rootVal = preorder[0]
  const node = new TreeNode(rootVal)
  const i = inorder.indexOf(rootVal)
  node.left = buildTree(preorder.slice(1, i+1), inorder.slice(0,i))
  node.right = buildTree(preorder.slice(i+1), inorder.slice(i+1))
  return node
};