/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  if(nums.length <= 1) return nums;
  let perm = [];
  let morePerms = [];

  // loop over nums (outer)
  // strip firt char in array
  // continue to loop over nums (inner) and strip first char until there are <=2 elements present
  // loop over the remaining elements and concat each elem with the other elements
  // when the elemens are returned, concat the stripped char with the other elements
  // repeat outer loop untile index is nums.length
  for(let i=0; i<nums.length; i++){
      const stripped = nums[i];
      const updatedNums = [...nums];
      updatedNums.splice(i, 1);
      let subPerm = [];
      if(updatedNums.length <= 2){
//             for(let j=0; j<updatedNums; j++){
          subPerm.push([stripped , updatedNums[0], updatedNums[1]]);
          subPerm.push([stripped, updatedNums[1], updatedNums[0]]);
//             }
      } else{
          morePerms = [...permute(updatedNums)];
          perm = [...perm, ...(morePerms.map(sub => [stripped].concat(sub)))];
      }
      perm = [...perm, ...subPerm];
  }
  return perm;
};