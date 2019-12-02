/* SOLUTION
Similar to findPermutation, but instead of returning true when the first match is found, continue to iterate over the entire string looking for all the matches and returning an array of the starting indices of the matches.
Time: O(n) where n is the length of the input string
Space: O(m) where m is the length of the pattern
*/
const find_string_anagrams = function(str, pattern) {
    let resultIndexes = [];
    const charFreq = {};
    let left = 0;
    let matched = 0;
    let windowSize = 0;

    // add pattern to hashmap
    for(let ch of pattern){
        if(charFreq[ch]) charFreq[ch]++;
        else charFreq[ch] = 1;
    }

    for(let right=0; right<str.length; right++){
        let curr = str[right];
        windowSize = right - left + 1;
        if(curr in charFreq){
            if(--charFreq[curr] === 0) matched++;
        }
        if(windowSize > pattern.length){
            let prev = str[left++];
            if(prev in charFreq){
                if(++charFreq[prev] > 0) matched--;
            }
        }
        console.log('currChar', curr, 'matched', matched, 'charFreq', charFreq);
        if(matched === Object.keys(charFreq).length){
            resultIndexes = [...resultIndexes, left];
        }
    }
    return resultIndexes;
};

const inputSet = [
    {
        str: 'ppqp',
        pattern: 'qp',
        expected: [1,2]
    },
    {
        str: 'abbcabc',
        pattern: 'abc',
        expected: [2,3,4]
    },
];

for(input of inputSet){
    console.log(input, `actual: [${find_string_anagrams(input.str, input.pattern)}]`);
}
