/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
var buildTree = function (preorder, inorder) {
  let map = {};
  for (let i = 0; i < inorder.length; i++) {
      map[inorder[i]] = i;
  }

  return buildTreeHelper(preorder, 0, preorder.length, inorder, 0, inorder.length, map);
};

function buildTreeHelper(preorder, p_start, p_end, inorder, i_start, i_end, map) {
  if (p_start === p_end) {
      return null;
  }
  let root_val = preorder[p_start];
  let root = new TreeNode(root_val)
  let i_root_index = map[root_val+''];
  let leftNum = i_root_index - i_start;
  root.left = buildTreeHelper(preorder, p_start + 1, p_start + leftNum + 1, inorder, i_start, i_root_index,map);
  root.right = buildTreeHelper(preorder, p_start + leftNum + 1, p_end, inorder, i_root_index + 1, i_end,map)
  return root;

}