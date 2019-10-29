/* 
Implement a javascript map.
e.g. [1,2,3,4].map(x => x*2) ==> [2,4,6,8]
*/
Array.prototype.myMap = function(cb) {
  for(let i=0; i<this.length; i++) {
    this[i] = cb(this[i]);
  }
  return this;
}
const nums = [1,2,3,4];
console.log(nums.myMap(x => x*2));