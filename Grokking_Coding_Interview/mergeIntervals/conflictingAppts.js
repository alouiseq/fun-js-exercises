/* SOLUTION
Using the merge intervals pattern, first sort the unsorted appointment arrays, then compare to check for intersections. If an intersection is found, then the person cannot attend all the appointments due to the overlap. Return false. Return true if there are no overlaps.
Time: O(nlogn) for sorting + O(n) for comparisons so O(n)
Space: O(1) if using the same array after sorting.
*/
const can_attend_all_appointments = function(intervals) {
  // sort
  intervals = intervals.sort((a,b) => {
    if (a[0] === b[0]) return 0;
    return a[0] < b[0] ? -1 : 1;
  })

  // find overlap
  let prev = intervals[0];
  for(let i=1; i<intervals.length; i++) {
    if (intervals[i][0] <= prev[1]) return false;
    prev = intervals[i];
  }
  return true;
};


console.log(`Can attend all appointments: ${can_attend_all_appointments([[1, 4], [2, 5], [7, 9]])}`, 'EXPECTED: false')
console.log(`Can attend all appointments: ${can_attend_all_appointments([[6, 7], [2, 4], [8, 12]])}`, 'EXPECTED: true')
console.log(`Can attend all appointments: ${can_attend_all_appointments([[4, 5], [2, 3], [3, 6]])}`, 'EXPECTED: false')
