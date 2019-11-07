/***
 * Given two strings s and t, determine if they are both one edit distance apart
 * One edit distance satisfies:
 * insert, delete, or replace a character
 */
var isOneEditDistance = function(s, t) {
  // Keep two indices for each string
  // Use length of s OR t string and difference count to control loop
  // If char in s or t are different
  // - Find the longer string and increment index
  // - Compare the chars, return false if different, or continue
  // After loop ends, check diff count and return false if count !== 1, otherwise true
  // O(n)
  let diffCount = 0;
  let i=0;
  let j=0;
  const sLen = s.length;
  const tLen = t.length;

  while(i<sLen || j<tLen && diffCount<2){
     if(s[i] !== t[j]){
         diffCount++;
         if(s.length > t.length){
             if(s[++i] !== t[j]) return false;
         } else if(s.length < t.length){
             if(s[i] !== t[++j]) return false;
         }
     }
     i++; j++;
  }
  if(diffCount !== 1) return false;
  return true;
};

console.log(isOneEditDistance('ab', 'acb'));    // true
console.log(isOneEditDistance('cab', 'ad'));    // false
console.log(isOneEditDistance('1203', '1213')); // true
console.log(isOneEditDistance('abcd', 'abcd')); // false
console.log(isOneEditDistance('abcd', 'dcba')); // false
console.log(isOneEditDistance('', 'a')); // true