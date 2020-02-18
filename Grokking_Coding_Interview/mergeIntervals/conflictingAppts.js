/* SOLUTION
Using the merge intervals pattern, first sort the unsorted appointment arrays, then compare to check for intersections. If an intersection is found, then the person cannot attend all the appointments due to the overlap. Return false. Return true if there are no overlaps.
Time: O(nlogn) for sorting + O(n) for comparisons so O(n)
Space: O(1) if using the same array after sorting.
*/
const can_attend_all_appointments = function(intervals) {
  // TODO: Write your code here
  return false;
};


console.log(`Can attend all appointments: ${can_attend_all_appointments([[1, 4], [2, 5], [7, 9]])}`)
console.log(`Can attend all appointments: ${can_attend_all_appointments([[6, 7], [2, 4], [8, 12]])}`)
console.log(`Can attend all appointments: ${can_attend_all_appointments([[4, 5], [2, 3], [3, 6]])}`)
