const reverseString = (s) => s.split('').reduce((acc, curr) => curr + acc, '');

console.log(reverseString('hello'));
console.log(reverseString('Mr. Fantastic'));
console.log(reverseString('A'));
console.log(reverseString('?      p    u   t a    hW'));