/* Solution
Assuming the intervals are sorted (if not then sort), iterate the list and compare the new interval with each one to find the correct place for it:
A. If the newInterval.start < currentInterval.start then insert the new interval before the current and use mergeIntervals() for the list from current to the end of the list.
B. If newInterval.start > currentInterval.start but newInterval.end < currentInterval.end, then insert the new interval after the current one and use mergeIntervals() for the list from current to the end of the list.
C. If newInterval.start > currentInterval.start and newInterval.end > currentInterval.end, then insert the currentInterval to the new mergedIntervals and continue the loop iteration.
Time: O(n) for finding the insertion point + O(n) for merging intervals => O(n)
Space: O(n) for new list with added interval (or can do in place) + O(n) for merged result => O(n)
*/
const insert = function(intervals, new_interval) {
  merged = [];
  // TODO: Write your code here
  return merged;
};

intervals = insert([[1, 3], [5, 7], [8, 12]], [4, 6]);
result = "";
for(i=0; i < intervals.length; i++)
  result += "[" + intervals[i][0] + ", " + intervals[i][1] + "] ";
console.log("Intervals after inserting the new interval: " + result);

intervals = insert([[1, 3], [5, 7], [8, 12]], [4, 10]);
result = "";
for(i=0; i < intervals.length; i++)
  result += "[" + intervals[i][0] + ", " + intervals[i][1] + "] ";
console.log("Intervals after inserting the new interval: " + result);

intervals = insert([[2, 3], [5, 7]], [1, 4]);
result = "";
for(i=0; i < intervals.length; i++)
  result += "[" + intervals[i][0] + ", " + intervals[i][1] + "] ";
console.log("Intervals after inserting the new interval: " + result);
