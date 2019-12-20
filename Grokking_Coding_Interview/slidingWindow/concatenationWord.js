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
    let left = startLeft = matched = 0;
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
        tempWord += str[right];
        let currLen = right-left+1;
        console.log('tempWord', tempWord);
        console.log('currLen', currLen);
        if(currLen === wordLen){
            console.log('WORD LENGTH MATCHED');
            if(tempWord in hashmap){
                hashmap[tempWord]--;
                console.log('UPDATED HASHMAP', hashmap);
                if(hashmap[tempWord] === 0){
                    console.log('WORD MATCHED');
                    matched++;
                    tempWord = '';      // reset tempWord on word match
                }
            }
            if(matched === words.length){
                console.log('ALL WORDS MATCHED');
                resultIndices.push(startLeft);
                matched = 0;    // reset matched once found
                startLeft = resultIndices[-1] + wordLen;
            }
            left = right+1;
        } else if(currLen > wordLen){
            left++;
        }
        // How do we handle shifting the window and restoring the hashmap for words that previously matched? need to rethink solution here
    }

    return resultIndices;
};

const inputSet = [
    { str: 'catfoxcat', pattern: ['cat', 'fox'], expected: [0, 3] },
    // { str: 'catcatfoxfox', pattern: ['cat', 'fox'], expected: [3] },
];

for(let input of inputSet){
    const {str, pattern} = input;
  console.log('Input', input, 'Output', `[${find_word_concatenation(str, pattern)}]`);
}
