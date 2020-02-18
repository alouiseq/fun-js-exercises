/* SOLUTION
Use two pointers for each list starting at the beginning and start a loop. Compare and if any overlapping exists, find the max(a.start, b.start) and min(a.end, b.end) for the intersect, and push to the results []. If there is no overlap, move the pointer index accordingly:
  - if a.end < b.start, increment a pointer
  - if b.end  < a.start, increment b pointer
Rinse and repeat until the end of either lists, then return the result.
Time: O(n + m) where n and m are the lengths of each input
Space: O(n) for result
*/
const merge = function(intervals_a, intervals_b) {
  result = [];
  let ptrA = 0;
  let ptrB = 0;

  while (ptrA < intervals_a.length && ptrB < intervals_b.length) {
    if (intervals_b[ptrB][0] > intervals_a[ptrA][1]) ptrA++;
    else if (intervals_a[ptrA][0] > intervals_b[ptrB][1]) ptrB++;
    else {  // intersection
      result.push([Math.max(intervals_a[ptrA][0], intervals_b[ptrB][0]), Math.min(intervals_a[ptrA][1], intervals_b[ptrB][1])]);

      // check which pointer to advance
      if (intervals_a[ptrA][1] > intervals_b[ptrB][1]) ptrB++;
      else if (intervals_b[ptrB][1] > intervals_a[ptrA][1]) ptrA++;
      else {
        ptrA++;
        ptrB++;
      }
    }
  }

  return result;
};

merged_intervals = merge([[1, 3], [5, 6], [7, 9]], [[2, 3], [5, 7]]);
result = "";
for(i=0; i < merged_intervals.length; i++)
  result += "[" + merged_intervals[i][0] + ", " + merged_intervals[i][1] + "] ";
console.log("Intervals Intersection: " + result, 'EXPECTED: [[2, 3], [5, 6], [7, 7]]');

merged_intervals = merge([[1, 3], [5, 7], [9, 12]], [[5, 10]]);
result = "";
for(i=0; i < merged_intervals.length; i++)
  result += "[" + merged_intervals[i][0] + ", " + merged_intervals[i][1] + "] ";
console.log("Intervals Intersection: " + result, 'EXPECTED; [[5, 7], [9, 10]]');
