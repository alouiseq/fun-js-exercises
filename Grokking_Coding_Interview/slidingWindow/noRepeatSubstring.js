/*
No-repeat Substring

Solution: Similar to the longestSubstringWithDistinctCharacters problem. Use sliding window pattern. While traversing the string with the right pointer, store the character's index value in an object. When a duplicate character is reached, calculate the longest substring, then move the left pointer to the existing index value + 1 and continue iteration.
*/