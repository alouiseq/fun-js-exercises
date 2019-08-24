class And {
  constructor(left, right) {
    this.left = left
    this.right = right
    this.type = 'AND'
  }
}

class Or {
  constructor(left, right){
    this.left = left
    this.right = right
    this.type = 'OR'
  }
}

class Not {
  constructor(value){
    this.value = value
    this.type = 'NOT'
  }
}

class Value {
  constructor(value){
    this.value = value
    this.type = 'VALUE'
  }
}

const expression = new Not(new And(new Not(new Value('a')), new Value('b')))

/*
 * Write a function interpret(expression, {a, b}) where
 * expression is a logic expression like the one above and
 * a and b are boolean values. The function should evaluate
 * the expression and interpolate the a and b booleans into the
 * Value('a') and Value('b') instances
 */

const interpret = (expression, values) => {
  //
}

console.log(interpret(expression, {a: true, b: true})) // true
console.log(interpret(expression, {a: false, b: false})) // true
console.log(interpret(expression, {a: true, b: false})) // true
console.log(interpret(expression, {a: false, b: true})) // false