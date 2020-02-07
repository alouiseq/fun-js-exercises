/* SOLUTION
First, sort the list of intervals based on the left value. - O(nlogn)
Iterate over the list (using curr pointer to control the loop) while comparing the previous and current intervals using two pointers. - O(n)
E.g. if comparing [a, b] and [c, d]:
- If c < b and d < b, then [a, b] completely overlaps [c, d]
- If c < b but d > b, then both intervals overlap and d ends after b
- If c > b then both intervals do not overlap
If the intervals do not overlap then push to the merged list and increment left prev pointer.
Time: O(nlogn) + O(n) => O(nlogn)
Space: O(n)
*/
class Interval {
  constructor(start, end) {
    this.start = start;
    this.end = end;
  }

  get_interval() {
    return "[" + this.start + ", " + this.end + "]";
  }
}


const merge = function(intervals) {
  merged = []
  // TODO: Write your code here
  return merged;
};

merged_intervals = merge([new Interval(1, 4), new Interval(2, 5), new Interval(7, 9)]);
result = "";
for(i=0; i < merged_intervals.length; i++) {
  result += merged_intervals[i].get_interval() + " ";
}
console.log(`Merged intervals: ${result}`)


merged_intervals = merge([new Interval(6, 7), new Interval(2, 4), new Interval(5, 9)]);
result = "";
for(i=0; i < merged_intervals.length; i++) {
  result += merged_intervals[i].get_interval() + " ";
}
console.log(`Merged intervals: ${result}`)


merged_intervals = merge([new Interval(1, 4), new Interval(2, 6), new Interval(3, 5)]);
result = "";
for(i=0; i < merged_intervals.length; i++) {
  result += merged_intervals[i].get_interval() + " ";
}
console.log(`Merged intervals: ${result}`)
