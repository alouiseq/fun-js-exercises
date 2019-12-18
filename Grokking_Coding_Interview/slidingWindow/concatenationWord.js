/* SOLUTION
Sliding window pattern.
Variables:
Steps:
Time:
Space:
*/
const find_word_concatenation = function(str, words) {
    const resultIndices = [];
    const hashmap = {};
    let patternSet = {};
    let left, matched = 0;
    let tempWord = '';
    const wordLen = words[0].length;

    // put words in a hashmap
    for(let word of words){
        if(hashmap[word]){
            hashmap[word]++;
        } else {
            hashmap[word] = 1;
        }
    }

    // Update window size and then compare
    for(let right=0; right<str.length; right++){
        tempWord.push(str[right]);
        let currLen = right-left+1;
        if(currLen === wordLen){
            if(tempWord in hashmap){
                hashmap[tempWord]--;
                if(hashmap[tempWord] === 0){
                    matched++;
                }
            }
            if(matched === words.length) resultIndices.push(left);
            left = right+1;
        } else if(currLen > wordLen){
            left++;
        }
        // How do we handle shifting the window and restoring the hashmap for words that previously matched?
    }

    return resultIndices;
};

const inputSet = [
    { str: 'catfoxcat', pattern: ['cat', 'fox'], expected: [0, 3] },
    { str: 'catcatfoxfox', pattern: ['cat', 'fox'], expected: [3] },
];

for(let input of inputSet){
    const {str, pattern} = input;
  console.log('Input', input, 'Output', `'${find_word_concatenation(str, pattern)}'`);
}
