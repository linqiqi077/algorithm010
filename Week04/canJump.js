/**
 * @param {number[]} nums
 * @return {boolean}
 * 思路：使用快慢指针，从后往前遍历，慢指针代表目标位置，快指针代表跳跃值。如果从快指针的位置能跳跃到慢指针的位置，这样慢指针就只想当前的快指针位置，二快指针则往前挪一步。等到遍历结束，则能得到能否到达最后一个位置。
 */
var canJump = function (nums) {

    let s = nums.length - 1;
    let q = s - 1;
    let flag = false;

    //如果数组长度为1，则任何数字都可以满足到达最后的位置
    if (nums.length === 1) {
        return true;
    }

    for (let i = nums.length - 1; i >= 0 && q >= 0; i--) {

        if (nums[q] >= s - q) {
            flag = true;
            s = q;
        } else {
            flag = false;
        }
        q--;
    }
    return flag;
};