const find_substring = function(str, pattern) {
    // TODO: Write your code here
    return "";
}

const inputSet = [
    { str: 'aabdec', pattern: 'abc', expected: 'abdec' },
    { str: 'abdabca', pattern: 'abc', expected: 'abc' },
    { str: 'adcad', pattern: 'abc', expected: '' },
];

for(let input of inputSet){
    const {str, pattern} = input;
  console.log('Input', input, 'Output', `'${find_substring(str, pattern)}'`);
}
