var lengthOfLongestSubstring = function(s) {
  let hash = {};
  let longest = 0;
  let i=0;
  let j=0;
  
  if(s.length === 1) return 1;
  
  while(j < s.length){
      let ch = s[j];
      
      if(hash[ch] >= 0 && hash[ch] >= i){
          longest = Math.max(j-i, longest);
          i = hash[ch] + 1;
      }
      hash[ch] = j++;
  }
  return Math.max(j-i, longest);
};

// console.log(lengthOfLongestSubstring('abcabcbb'));  // 3
// console.log(lengthOfLongestSubstring('bbbbb'));     // 1
// console.log(lengthOfLongestSubstring('pwwkew'));    // 3
// console.log(lengthOfLongestSubstring(' '));    // 1
// console.log(lengthOfLongestSubstring('au'));    // 2
console.log(lengthOfLongestSubstring('abba'));    // 2
console.log(lengthOfLongestSubstring('abcdedgahij'));    // 7