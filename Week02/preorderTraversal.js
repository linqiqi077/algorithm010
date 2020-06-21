/**
 * 前序遍历
 * 主要特点：
 * 先使用，然后遍历左节点，再遍历右节点
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
var preorderTraversal = function (root, number = []) {
  if (!root) return number;

  number.push(root.val);

  if (root.left) {
    preorderTraversal(root.left)
  }

  if (root.right) {
    preorderTraversal(root.right)
  }

  return number;
};