// Given a string, find the length of the longest substring without repeating characters.
// var lengthOfLongestSubstring = function(s) {
//   let hash = {};
//   let longest = 0;
//   let i=0;
//   let j=0;
  
//   if(s.length === 1) return 1;
  
//   while(j < s.length){
//       let ch = s[j];
      
//       if(hash[ch] >= 0 && hash[ch] >= i){
//           longest = Math.max(j-i, longest);
//           i = hash[ch] + 1;
//       }
//       hash[ch] = j++;
//   }
//   return Math.max(j-i, longest);
// };

var lengthOfLongestSubstring = function(s) {
  /* Solution
  Use sliding window pattern.
  Use an object as a map to track each character in the string.
  Use a variable to hold the longest length substring (longestCount).
  Use two indices left and right to traverse the string.
  1. Start from the beginning and interate over the string while adding to the character map.
  2. If character does not exist, add to the map and increment.
  3. If character already exists, take the difference between the left and right
  and take the longest between that and the longestCount and store into longestCount.
  4. Slide the left window by incrementing left and keep track of the previous value.
  5. Decrement the value count from the map and if the count is 0 after decrementing, then 
  6. Slide the right window by incrementing and proceed with step #1 at the current value of right.
  7. Return longestCount
  */
}

// console.log(lengthOfLongestSubstring('abcabcbb'));  // 3
// console.log(lengthOfLongestSubstring('bbbbb'));     // 1
// console.log(lengthOfLongestSubstring('pwwkew'));    // 3
// console.log(lengthOfLongestSubstring(' '));    // 1
// console.log(lengthOfLongestSubstring('au'));    // 2
console.log(lengthOfLongestSubstring('abba'));    // 2
console.log(lengthOfLongestSubstring('abcdedgahij'));    // 7