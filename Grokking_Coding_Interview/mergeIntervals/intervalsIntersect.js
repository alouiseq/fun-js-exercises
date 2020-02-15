/* SOLUTION
Time:
Space:
*/
const merge = function(intervals_a, intervals_b) {
  result = [];
  // TODO: Write your code here
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
