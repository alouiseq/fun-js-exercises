/* Solution
Assuming the intervals are sorted (if not then sort), iterate the list and compare the new interval with each one to find the correct place for it:
A. If newInterval.start > currentInterval.end:
  add currentInterval to merged result and continue iteration
While loop:
B. If newInterval.start > currentInterval.start && newInterval.end < currentInterval.end:
  currentInterval overlaps newInterval
C. If newInterval.start > currentInterval.start && newInterval.end > currentInterval.end:
  currentInterval partially overlaps newInterval with newInterval max end
D. If the newInterval.start < currentInterval.start && newInterval.end < currentInterval.end:
  newInterval partially overlaps currentInterval with currentInterval max end
E. If the newInterval.start < currentInterval.start && newInterval.end > currentInterval.end:
  newInterval overlaps currentInterval
Time: O(n) for merging intervals
Space: O(n) for merged result
*/
const insert = function(intervals, new_interval) {
  const merged = [];
  let ptr = 0;
  let curr = new_interval;

  while (new_interval[0] > intervals[ptr][1]) {
    merged.push(intervals[ptr++]);
  }

  while(ptr<intervals.length && intervals[ptr][0] < curr[1]) {
    curr = [Math.min(intervals[ptr][0], curr[0]), Math.max(intervals[ptr][1], curr[1])];
    ptr++;
  }
  merged.push(curr);

  while(ptr < intervals.length) {
    merged.push(intervals[ptr++]);
  }

  return merged;
};

intervals = insert([[1, 3], [5, 7], [8, 12]], [4, 6]);
result = "";
for(i=0; i < intervals.length; i++)
  result += "[" + intervals[i][0] + ", " + intervals[i][1] + "] ";
console.log("Intervals after inserting the new interval: " + result, 'EXPECTED: [[1,3], [4,7], [8,12]]');

intervals = insert([[1, 3], [5, 7], [8, 12]], [4, 10]);
result = "";
for(i=0; i < intervals.length; i++)
  result += "[" + intervals[i][0] + ", " + intervals[i][1] + "] ";
console.log("Intervals after inserting the new interval: " + result, 'EXPECTED: [[1,3], [4,12]]');

intervals = insert([[2, 3], [5, 7]], [1, 4]);
result = "";
for(i=0; i < intervals.length; i++)
  result += "[" + intervals[i][0] + ", " + intervals[i][1] + "] ";
console.log("Intervals after inserting the new interval: " + result, 'EXPECTED: [[1,4], [5,7]]');
