/**** 
 * 题目：给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，
 * 并返回他们的数组下标。
 * 
 */
// 解法一： 暴力解法
// var twoSum1 = function (nums, target) {
//   if (!nums.length) return;
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = 0; j < nums.length; j++) {
//       if (j !== i && nums[j] === target - nums[i]) {
//         return [i, j]
//       }
//     }
//   }
// };

// 解法2 ： 构建map
var twoSum = function (nums, target) {
  if (!nums.length) return;
  let map = {};
  for (let i = 0; i < nums.length; i++) {
      if (map[target - nums[i]] != null) {
          return [map[target - nums[i]], i]
      } else {
          map[nums[i]] = i;
      }
  }
};