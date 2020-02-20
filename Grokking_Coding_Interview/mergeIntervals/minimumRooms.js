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
