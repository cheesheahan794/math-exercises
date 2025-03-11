/**
 * A function that takes an array of numbers and returns the sum of all the even numbers in the array.
 * @param {number[]} nums The input array of numbers.
 * @return {number} The sum of all the even numbers in the array.
 */
function getEvenSum(nums: number[]): number {
  let total = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0) {
      total += nums[i];
    }
  }
  return total;
}
