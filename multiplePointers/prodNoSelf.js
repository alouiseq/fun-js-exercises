var productExceptSelf = function(nums) {
  // Use two iterators to loop over prodArr output
  // Iterators will control the position of start and end indices of nums
  // Stop the iterations when both iterators equal the output index
  // multiply each value together and store in prodArr
  // Restart start and end and increment prodArr index
  // Return prodArr after loop ends
  let end = nums.length - 1;
  const prodArr = [];
  let prev;

  // left to right products
  for(let i=0; i<nums.length; i++){
      if(i === 0) prodArr[0] = 1;
      else prodArr[i] = nums[i-1] * prodArr[i-1];
  }
  // right to left products and merge and multiply
  for(let i=end; i>=0; i--){
      if(i === end) prev = 1;      
      else{
          prev *= nums[i+1];
          prodArr[i] = i === 0 ? prev : prev * prodArr[i];
      }
  }
  return prodArr;
};

console.log(productExceptSelf([1,2,3,4]));  // [24,12,8,6]