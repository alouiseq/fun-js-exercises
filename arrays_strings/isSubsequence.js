/*
Given a string s and a string t, check if s is subsequence of t.

You may assume that there is only lower case English letters in both s and t. t is potentially a very long (length ~= 500,000) string, and s is a short string (<=100).

A subsequence of a string is a new string which is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (ie, "ace" is a subsequence of "abcde" while "aec" is not).

Example 1:
s = "abc", t = "ahbgdc"

Return true.

Example 2:
s = "axc", t = "ahbgdc"

Return false.

Follow up:
If there are lots of incoming S, say S1, S2, ... , Sk where k >= 1B, and you want to check one by one to see if T has its subsequence. In this scenario, how would you change your code?
*/
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
function isSubsequence(str1, str2) {
  let first = 0
  let pt1 = 0
  let pt2 = 0
  
  if(str2.length < str1.length) {
      return false
  }
  
  while(pt1 < str2.length && pt2 < str2.length) {
      if(str2[pt2] === str1[first]) {
          pt2++
          first++
      } else {
          first = 0
          pt1 = pt2 = pt1 + 1
      }
      
      if(first >= str1.length) {
          return true
      }
  }
  
  return false
}

console.log(isSubsequence('hello', 'hello world'));
console.log(isSubsequence('sing', 'sting'));