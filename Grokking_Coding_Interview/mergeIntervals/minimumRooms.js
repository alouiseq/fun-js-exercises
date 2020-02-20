/* SOLUTION
Use a meetingRooms variable and increment/decrement based on which intervals have been visited. First, sort the array if unsorted. Then use two pointers while iterating over the array. The left pointer is used to track meetings that are in progress. The right pointer expands the window of in progress meetings. The interval[left ptr] is used to compare with the interval[right]. If they overlap, then increment right pointer and increment the meetingRooms. If they don't, increment the left ptr, decrement the meetingRooms, and increment the meetingRooms for the current interval.
Time: O(n) for traversing the array once with the right pointer
Space: O(1)
*/
class Meeting {
  constructor(start, end) {
    this.start = start;
    this.end = end;
  }
};

const min_meeting_rooms = function(meetings) {
  // TODO: Write your code here
  return -1;
};


console.log(`Minimum meeting rooms required: ${min_meeting_rooms(
    [new Meeting(4, 5), new Meeting(2, 3), new Meeting(2, 4), new Meeting(3, 5)])}`)
console.log(`Minimum meeting rooms required: ${min_meeting_rooms(
    [new Meeting(1, 4), new Meeting(2, 5), new Meeting(7, 9)])}`)
console.log(`Minimum meeting rooms required: ${min_meeting_rooms(
    [new Meeting(6, 7), new Meeting(2, 4), new Meeting(8, 12)])}`)
console.log(`Minimum meeting rooms required: ${min_meeting_rooms(
    [new Meeting(1, 4), new Meeting(2, 3), new Meeting(3, 6)])}`)
console.log(`Minimum meeting rooms required: ${min_meeting_rooms(
    [new Meeting(4, 5), new Meeting(2, 3), new Meeting(2, 4), new Meeting(3, 5)])}`)
