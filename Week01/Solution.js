// 删除排序数组中的重复项
/** 
 * 解题思路： 
 * 考虑两个指针，一个p在前，q在后
 * 1.比较p和q的位置的元素是否相等
 * 如果相等，q往后移一位
 * 如果不相等，把当前q的值存在p+1之下，p和q都往后移一位
 * 最后返回p+1即可
 */

var removeDuplicates = function (nums) {
  if (!nums || (!nums.length)) return 0; // 处理边界
  let p = 0;
  let q = 1;

  while (q < nums.length) {
    if (nums[p] !== nums[q]) {
      nums[p + 1] = nums[q];
      p++;
    }
    q++;
  }
  return p + 1;
}