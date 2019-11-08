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
Use a double for loop to traverse the object to find student pairs (outer and inner loops).
Traverese the courses for the current student (outer) and find the index in the inner student.
Time: O(n^2 * x) where x is the number of courses so O(n).
Space: O(n)
*/

function matchPairs(studentsAndCourses) {
  const students = {};
  for(let s of studentsAndCourses){
    if(students[s[0]]) students[s[0]] = [ ...students[s[0]], s[1] ];
    else students[s[0]] = [s[1]];
  }
  const pairs = {};
  const studentIds = Object.keys(students);
  for(let o=0; o<studentIds.length; o++){
    for(let i=o+1; i<studentIds.length; i++){
      const left = studentIds[o];
      const right = studentIds[i];
      let pairStr = `[${left}, ${right}]`;
      pairs[pairStr] = [];
      const cOuter = students[studentIds[o]];
      const cInner = students[studentIds[i]]
      for(let c of cOuter){
        if(cInner.indexOf(c) > -1) pairs[pairStr].push(c);
      }
    }
  }
  console.log(pairs);
}

const studentsAndCourses = [
  [58, 'Algebra'],
  [58, 'Physics'],
  [23, 'Communications'],
  [23, 'Algebra'],
  [23, 'Physics'],
  [78, 'Economics'],
  [78, 'Physics'],
  [78, 'Chemistry'],
  [10, 'Chemistry']
];

console.log(matchPairs(studentsAndCourses));