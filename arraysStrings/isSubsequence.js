/* Problem:
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
/* Solution:
Use two pointers ps and pt for s and t, respectively.
Use a while loop while pt < t.length.
1. Iterate over both strings.
2. If s[ps] === t[pt], then increment both pointers by 1.
3. If s[ps] !== t[pt], then increment pt by 1.
4. If ps === s.length, then s is a subsequence of t.
5. Return true.
6. If pt === t.length, exit the loop and return false.
*/
/*
Solution (if incoming S is S1, S2, ..., Sk):
1. Create a separate function for handling the multiple S inputs.
2. Use es6 rest to gather the params in an array (...params).
3. Use params[params.length-1] for t.
4. Use an array results[] to track the result for each s.
5. Use a forEach loop to loop over params until the last s in params.
6. Invoke isSubsequence function on each itreation.
7. Store the result in results[].
8. At the end of the loop, return results[].
*/
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
function isSubsequence(s, t) {
    let ps = 0
    let pt = 0;

    while (pt < t.length) {
        if (s[ps] === t[pt++]) {
            if (++ps === s.length) return true;
        }
    }

    return false;
}

console.log(isSubsequence('hello', 'hreolblob')); // true
console.log(isSubsequence('sing', 'sting'));    // true
console.log(isSubsequence('bees', 'beshave'));    // false