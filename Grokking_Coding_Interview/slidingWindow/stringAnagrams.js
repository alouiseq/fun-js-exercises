/* SOLUTION
Similar to findPermutation, but instead of returning true when the first match is found, continue to iterate over the entire string looking for all the matches and returning an array of the starting indices of the matches.
Time: O(n) where n is the length of the input string
Space: O(m) where m is the length of the pattern
*/
const find_string_anagrams = function(str, pattern) {
    result_indexes = [];
    // TODO: Write your code here
    return result_indexes;
};

const inputSet = [
    {
        str: 'ppqp',
        pattern: 'qp',
        output: [1,2]
    },
    {
        str: 'abbcabc',
        pattern: 'abc',
        output: [2,3,4]
    },
];

for(input of inputSet){
    console.log(input, find_string_anagrams(input.str, input.pattern));
}
