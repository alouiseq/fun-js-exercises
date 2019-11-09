const max_sub_array_of_size_k = function(k, arr) {
    let start = 0;
    let max = 0;
    let sum = 0;
  
    if (!arr.length || k<=0) return 0;
  
    for(let end=0; end<arr.length; end++){
      sum += arr[end];
      if(end >= k-1){
        max = sum > max ? sum : max;
        sum -= arr[start++];
      }
    }
    return max;
  };
  