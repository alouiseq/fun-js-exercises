This is text from the take home test: use as a starting point to edit:

{{CANDIDATE_FIRST_NAME}},
 
Thank you for your continued interest in Syapse.  Please take some time to answer the following questions so we can better gauge your coding skills and how they might match up with our current codebase. You can return this test as a document, or submit a working jsfiddle or codepen.
1. Reverse a string
[part 1]
I want to create a function that will take a string and reverse it. Basically if I pass in “some crazy string” it will return “gnirts yzarc emos”.
 
Given this function, please fill out the necessary programming to complete the string reversal:
 
function  reversify(str) {
 
}
 
reversify(‘some crazy string’);
2. Create a “native” method
Choose one of the following two native method extension tests:

A: Create a new array method that removes a member.
For example:
['poppy', 'sesame', 'plain'].remove('poppy'); //["sesame", "plain"]
['ant', 'bee', 'fly'].remove('spider'); //["ant", "bee", "fly"]

Answer:
Array.prototype.remove = function(member) {
  var index = this.indexOf(member);
  if (index > -1) {
    this.splice(index, 1);
  }
  return this;
}


B: Define a repeat function on the String object. The function accepts an integer that specifies how many times the string has to be repeated. The function returns the string repeated the number of times specified. For example:
 
console.log('hello'.repeatify(3));
 
Should produce ‘hellohellohello’.

Answer:
String.prototype.repeatify = function(n) {
  var result = '';
  for (var i = 1; i <= numberOfTime; i++) {
    result += this;
  }
  return result;
}
 
3. Needle in a Haystack
	•	Given a string, return the first index of the first occurrence of the string in another string. Return -1 if the needle is not present in the haystack.
	•	Do not use string methods like indexOf(), substring(), etc. Assume you are building the library of string functions, so they don't exist yet.
	•	Test several test cases such as:
	•	Haystack: ‘I like to walk my dog on the beach.’ needle: dog
	•	Haystack: 'abababc' needle = 'ababc'
	•	What is the time complexity of the implementation?
 
var haystack = "burger and fries";
var needle = 'fries';
 
function finder(needle, haystack) {
}
 
finder(needle, haystack);
 
4. Write a function that counts down from a number until it reaches 0 in the console or DOM.
Example:
countDownFrom(10);
Output: '10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0'

Answer:
function countDownFrom(number) {
   console.log(number);
   if (number > 0) {
       countDownFrom(number-1);
   }
}

 
Please make any reasonable assumptions you want. If you are really unclear about something, please ask for clarification.

When submitting your answer, please let us know how long it took you to complete this problem.  Please do not spend more than roughly 1 hour on this (we want to evaluate your skills, not waste you time).

Thanks
{{MY_SIGNATURE}}



