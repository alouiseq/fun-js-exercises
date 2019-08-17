// Given an array nums of n integers, are there elements a, b, c in nums
// such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.
// The solution set must not contain duplicate triplets.
var threeSum = function(nums){
  // loop over nums and store num as keys and count values
  // sort nums(used to check for duplicate triplets)
  // Two loops (outer and inner) over nums
  // - decrement outer value in hash permanently
  // - decrement inner value from hash
  // - add the values and find the value in hash that sum to 0
  // - use a stack to track visited values
  // - use number string to check for duplicate triplets
  // - use zeroSums to store array of arrays of zero sums
  // - after the end of inner loop, pop stack to reclaim hash values
  // - traverse the next outer value and inner loop until the end of outer loop
  // O(n^2)
  const hash = {};
  const zeroSumsHash = {};
  const zeroSums = [];
  const stack = [];

  nums.sort((a,b) => a-b);
  nums.forEach((val) => {
      if(hash[val]){
          hash[val]++;
      } else{
          hash[val] = 1;
      }
  });
  for(let i=0; i<nums.length; i++){
      hash[nums[i]]--;
      stack.unshift(nums[i]);
      for(let j=i+1; j<nums.length; j++){
          hash[nums[j]]--;
          stack.unshift(nums[j]);
          const twoSum = nums[i] + nums[j];
          const needed = twoSum ? -twoSum : 0;
          const numArr = [nums[i], nums[j], needed].sort((a,b) => a-b)
          const numStr = numArr.join('');
          if(hash[needed] > 0 && !zeroSumsHash[numStr]){
              zeroSumsHash[numStr] = true;
              zeroSums.push(numArr);
          }
      }
      while(stack.length) hash[stack.shift()]++;
  }

  return zeroSums;
}

console.log(threeSum([-1, 0, 1, 2, -1, -4]));   // [[-1, 0, 1], [-1, -1, 2]]
console.log(threeSum([1, 1, -2]));   // [[1, 1, -2]]
console.log(threeSum([0,0,0,0]));   // [[0,0,0]]
console.log(threeSum([-1,1,0,-1,1,0,-1,1,0]));   // [[-1,1,0]]
console.log(threeSum([3,0,-2,-1,1,2]));   // [[-2,-1,3], [-2, 0, 2], [-1, 0, 1]]
console.log(threeSum([-4,-2,-2,-2,0,1,2,2,2,3,3,4,4,6,6]));   // len: 6