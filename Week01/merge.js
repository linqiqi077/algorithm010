/***
 * 解题思路： 从后往前的双指针。这样做的对比从前往后的双指针做法好处是不用新开一个空间存储nums1的元数据
 * m
 * m,n两个变量，代表nums1和nums2的比较位置。哪个值比较大，返回哪个值放进最后的数组内；
 * 从m+n的下标开始给nums1赋值，从大到小。
 * 
 */
var merge = function (nums1, m, nums2, n) {

  let len = m + n;
  m--;
  n--;
  while (len--) {
      if (n < 0 || nums2[n] < nums1[m]) {
          nums1[len] = nums1[m];
          m--;
      } else {
          nums1[len] = nums2[n];
          n--;
      }
  }
};
// js技巧解法
// var merge = function (nums1, m, nums2, n) {
//   nums1.splice(m);
//   nums2.splice(n);
//   nums1.push(...nums2)
//   nums1 = nums1.sort((a, b) => { return a - b })
// };