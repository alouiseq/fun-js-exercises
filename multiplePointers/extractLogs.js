/*
Given the following log file structure:

2020-09-29T01:59:14.214Z key5=15,key4=11
2020-09-29T02:00:31.011Z key3=22,key4=33,key5=16

Sum the values by key. So the expected result is:

key3=22
key4=44
key5=31
*/

// Installed npm packages: jquery underscore request express
// jade shelljs passport http sys lodash async mocha chai sinon
// sinon-chai moment connect validator restify ejs ws co when
// helmet wrench brain mustache should backbone forever debug jsdom

var _ = require('underscore');

const list = ['2020-09-29T01:59:14.214Z key5=15,key4=11', 
'2020-09-29T02:00:31.011Z key3=22,key4=33,key5=16'];

// Your last C/C++ code is saved below:
// #include <iostream>
// using namespace std;

// int main() {
// 	cout<<"Hello";
// 	return 0;
// }

function extract(list) {
  const rex = /key\d=(\d*)/g;
  const sums = {};
  
  for(let li of list) {
    const values = li.match(rex);   // [[key5=15, 15], [key4=11, 11]]
    

    
    for(let val of values) {
      const valSplit = val.split('=');
      const num = parseInt(valSplit[1]);
      const key = valSplit[0];

      if(sums[key]){
        sums[key] += num;
      } else {
        sums[key] = num;
      }
    }
  }
  console.log('sums', sums);

  return sums;
}

extract(list)

