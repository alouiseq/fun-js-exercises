let createHash = (arr) => {
  const hash = {};
  
  for(let c of arr){
      if(hash[c]) hash[c]++;
      else hash[c] = 1;
  }
  return hash;
}

var minWindow = function(s, t) {
  if(t.length > s.length) return '';

  let x = 0;
  let y = -1;
  let sChar = '';
  let counter = t.length;
  let min = '';
  let tempMin = '';
  const hash = createHash(t);

  while(y < s.length){
      // satisfied
      if(counter === 0){
          tempMin = s.slice(x, y+1);
          if(!min) min = tempMin;
          else min = tempMin.length < min.length ? tempMin : min;
          if(hash[s[x]] !== undefined){
              hash[s[x]]++;
              if(hash[s[x]] > 0) counter++;
          }
          x++;
      } else{
          y++;
          sChar = s[y];
          if(hash[sChar] !== undefined){
              hash[sChar]--;
              if(hash[sChar] >= 0) counter--;
          }
      }
  }
  return min;
};

console.log(minWindow('ADOBECODEBANC', 'ABC'));  // OUTPUT: 'BANC'
console.log(minWindow('aa', 'aa'));  // OUTPUT: 'aa'
console.log(minWindow('zebra', 'ball')); // OUTPUT: ''
console.log(minWindow('ab', 'b'));  // OUTPUT: 'b'
console.log(minWindow('abc', 'b'));  // OUTPUT: 'b'
console.log(minWindow('cabwefgewcwaefgcf', 'cae'));  // OUTPUT: 'cwae'