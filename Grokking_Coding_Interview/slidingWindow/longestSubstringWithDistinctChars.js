const longest_substring_with_k_distinct = function(str, k) {
    let numVisited = k;
    let l = 0;
    const charSet = {};
    let max = 0;
    let temp = 0;

    for(r=0; r < str.length; r++){
        if(charSet[str[r]]){
            charSet[str[r]]++;
        } else if(numVisited){
            numVisited--;
            charSet[str[r]] = 1;
        } else{
            while(!numVisited){
                temp = r-l;
                max = max > temp ? max : temp;
                charSet[str[l]]--;
                l++;
                if(!charSet[str[l]]){
                    numVisited++;
                }
            }
            charSet[str[r]] = 1;
            numVisited--;
        }
    }
    return max;
}

const input = 'cbbebi';
const k = 3;
console.log(longest_substring_with_k_distinct(input, k));  // output = 5