# Data Structures & Algorithm Patterns

Refer to [DS & Algos Cheatsheet](https://docs.google.com/spreadsheets/d/1oAZmvD-cNbvOkZSEtSJQzqgPKn3k_Zn4uVB3fsTPvHE/edit#gid=0)

## Sliding Window ##
Use a left and right pointer to create a window range. Put the input pattern into a hashmap. While iterating through the input string, compare the current window to the expected output or shift the window range ensuring nodes outside the window is restored and nodes within the window are accounted for. Continue iterating, comparing, and shifting the window until the end of the input string is reached. Return the output variable.

## Two Pointers ##
In a sorted array (or linked list), use a left and right pointer to iterate through the input string. Instead of just iterating from beginning to end using two staggering pointers (time complexity: O(n^2)), we can take advantage of the sorted list by iterating through the input from the start and iterating from another index location in parallel (usually the end) (this gives a log*n time since the input is cut on every iteration). The logic essentially decreases the size of the input until the desired output is achieved or doesn't exist when the size shrinks to 0.
