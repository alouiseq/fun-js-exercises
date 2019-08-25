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
/*
Solution:
Recursively traverse expression using switch statements.
1. If the value param is not a VALUE instance, then continue traversing the expression.
2. If the value is a VALUE instance,
    add values to the instance attribute.
3. Then return the value.
4. Evaluate returned value based on logic operator.
5. On the last recursed operation, the final value is returned.
*/
const interpret = (expression, values) => {
  let iter = expression;
  let evaluated;
  let evalLeft;
  let evalRight;

  switch(iter.type) {
    case 'NOT':
      evaluated = !interpret(iter.value, values);
      break;
    case 'AND':
      evalLeft = interpret(iter.left, values);
      evalRight = interpret(iter.right, values);
      evaluated = evalLeft && evalRight;
      break;
    case 'OR':
      evalLeft = interpret(iter.left, values);
      evalRight = interpret(iter.right, values);
      evaluated = evalLeft || evalRight;
      break;
    default:  // type===VALUE
      if (iter.value === 'a') {
        iter.value = values.a;
      } else if (iter.value === 'b') {
        iter.value = values.b;
      }
      evaluated = iter.value;
  }

  return evaluated;
}

// console.log(interpret(expression, {a: true, b: true})) // true
// console.log(interpret(expression, {a: false, b: false})) // true
// console.log(interpret(expression, {a: true, b: false})) // true
console.log(interpret(expression, {a: false, b: true})) // false