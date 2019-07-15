var merge = function(nums1, m, nums2, n) {
  let i=0, j=0;
  let trueLen = nums1.length;

  while(i<m && j<n){
      if(nums1[i] <= nums2[j]){
          nums1.push(nums1[i++]);
      } else {
          nums1.push(nums2[j++]);
      }
  }

  let iter = [];
  if(i === m){
      nums1 = [...nums1, ...nums2.slice(j)];
//         iter = nums2.slice(j, n);
//         iter.forEach((val) => nums1.push(val))
  } else if(j === n){
      nums1 = [...nums1, ...nums1.slice(m)];
//         iter = nums1.slice(i, m);
//         iter.forEach((val) => nums1.push(val))
  }
  nums1.splice(0, trueLen);
  console.log(nums1);
};

// merge([1,2,3,0,0,0], 3, [2,5,6], 3);
// merge([6,10,15,0,0,0], 3, [5,10,20,0,0], 3);
// merge([0,0,0], 0, [1,0], 1);
// merge([1], 1, [], 0);
// merge([2,0], 1, [1], 1);
merge([-1,-1,0,0,0,0], 4, [-1,0], 2);
