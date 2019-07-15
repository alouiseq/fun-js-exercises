var multiply = function(num1, num2) {
  num1 = num1.split('');
  num2 = num2.split('');
  let sum = 0;

  const recurseMultiply = (num1, num2) => {
        let numStr = 0;
        let carry = 0;
        let product = [];
        let adjuster = 1;
        
        // Case: multiply by 0
        if(!parseInt(num1) || !parseInt(num2)){
              return '0';
        }

        let curr = parseInt(num2.shift());
        adjuster = Math.pow(10, num2.length);
        
        if(num2.length){
              recurseMultiply(num1, num2);
        }

        for(let i=num1.length-1; i>=0; i--){
              numStr = (parseInt(num1[i]) * curr + carry).toString();
              if(numStr.length === 1){
                    carry = 0;
                    product.unshift(numStr[0]);
              } else{
                    carry = parseInt(numStr[0]);
                    product.unshift(numStr[1]);
              }
        }     
        if(carry) product.unshift(carry);  
        sum += adjuster * parseInt(product.join(''));                             
  }

  recurseMultiply(num1, num2);
  return sum.toString();
};

multiply('123456789', '987654321');