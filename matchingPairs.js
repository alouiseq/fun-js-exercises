/* PROBLEM:
Your task is to build a system for a university that tracks all the student pairs that share the same courses. If a student pair do not share a course, return an empty set:

E.g.
Input:
studentsAndCourses = [
  [58, Algebra],
  [58, Physics],
  [23, Communications],
  [23, Algebra],
  [23, Physics],
  [78, Economics],
  [78, Physics],
  [78, Chemistry]
  [10, Chemistry]
]
Output:
[58, 23]: [Algebra, Physics],
[58, 78]: [Physics],
[58, 10]: [],
[23, 78]: [Physics],
[23, 10]: [],
[78, 10]: [Chemistry],
*/
/* SOLUTION:
Store ids/courses as key/value pairs in an object.
{
  58: [Algebra, Physics],
  23: [Communications, Algebra, Physics],
  78: [Economics, Physics, Chemistry],
  10: [Chemistry]
}
Use a double for loop to traverse the object to find student pairs.
*/