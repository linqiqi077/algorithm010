/**
 * 中序遍历
 * 主要特点：先遍历左节点，中间使用根，再遍历右节点
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function (root, number=[]) {
  if (!root) return number;

  if (root.left) {
    inorderTraversal(root.left, number)
  }
  number.push(root.val)

  if (root.right) {
    inorderTraversal(root.right, number)
  }
  return number;
};