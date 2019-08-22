/* Q: Given a string S and a string T, find the minimum window in S
    which will contain all the characters in T in complexity O(n). */
/* Solution:
Create an object map to store the characters in t.
Store the characters in keys and character count in values.
Use a variable min to track the minimum length required to satisfy the problem.
Use a variable tLen to store the length of t string.
Use a left and right indices for traversing s.
1. Start at the beginning of s, iterate over s with right index.
2. With the current character, decrement from the map.
3. Then decrement from tLen as long as the char count in map is > 0.
4. At each iteration, check if tLen === 0.
5. If tLen === 0, store the the smaller value between min and diff of right and left.
6. Increment left by 1, reset map, and assign tLen the length of t.
7. Repeat from #2
8. Afte the O(n) loop, return min
*/

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