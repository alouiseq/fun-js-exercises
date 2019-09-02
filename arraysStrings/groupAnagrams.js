var groupAnagrams = function(strs) {
  // Loop over array of strings and sort each string O(n^2)
  // store sorted strings in a hash
  // ---- keys: sorted string
  // ---- values: array of actual strings
  // Loop over array of strings, check if string exists O(n)
  // --- if exists: push to array in that hash
  // --- if not exists: store sorted string and create [] array
  // Iterate over hash and push to a new array of arrays O(n)
  // Time Complexity: O(n^2)
  // Space Complexity: O(n)
  const hash = {};
  const groups = [];

  strs.forEach((str) => {
      const sorted = str.split('').sort().join('');
      if(!hash[sorted]) hash[sorted] = [str];
      else hash[sorted].push(str)
  })

  for(let i in hash){
      groups.push(hash[i])
  }
  return groups;
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));