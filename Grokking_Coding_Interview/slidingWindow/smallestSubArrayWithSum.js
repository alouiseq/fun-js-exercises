const smallest_subarray_with_given_sum = function(s, arr) {
    let sum = arr[0];
    let start = 0;
    let end = 0;
    let minSub = Infinity;
    let tempMinSub = 0;
  
    if(!arr.length) return 0;
  
    while(end < arr.length){
      if(sum >= s){
        tempMinSub = end - start + 1;
        minSub = tempMinSub < minSub ? tempMinSub : minSub;
        sum -= arr[start++];
      } else {
        sum += arr[++end];
      }
    }
    return minSub;
  };
  