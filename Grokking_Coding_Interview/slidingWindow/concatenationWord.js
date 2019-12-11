/* SOLUTION
Variables:
Steps:
Time:
Space:
*/
const find_word_concatenation = function(str, words) {
    result_indices = [];
    // TODO: Write your code here
    return result_indices;
};

const inputSet = [
    { str: 'catfoxcat', pattern: ['cat', 'fox'], expected: [0, 3] },
    { str: 'catcatfoxfox', pattern: ['cat', 'fox'], expected: [3] },
];

for(let input of inputSet){
    const {str, pattern} = input;
  console.log('Input', input, 'Output', `'${find_word_concatenation(str, pattern)}'`);
}
