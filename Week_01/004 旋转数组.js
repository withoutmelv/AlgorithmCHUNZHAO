/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    k=k>=nums.length?k%nums.length:k;
    while (k--) nums.unshift(nums.pop())
}