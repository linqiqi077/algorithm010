/***
 * 题目： 给定一个数组，将数组中的元素向右移动 k 个位置，其中 k 是非负数。
 * 解题思路：
 * 可以借助js语言array的splice方法达到简单求解的办法
 */

function rotate(nums, k) {
  k = k % nums.length; // 兼容k比数组长度还大的情况
  nums.splice(0, 0, ...nums.splice(nums.length - k))
}