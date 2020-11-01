// We're going to assume creditCardNum is a string.
function validateCreditCard(creditCardNum) {

  let sum = 0;

  for (let i = 0; i < creditCardNum.length; i=i+1) {
    console.log(creditCardNum[i]);
    sum = sum + Number(creditCardNum[i]);
    console.log(sum);
  }
  return sum > 16; 
}

/**
 * Think of these as tests. Write out your function
 * above so these console.logs below return what you
 * expect.
 */
console.log(validateCreditCard("9999777788880000")); // => true
console.log(validateCreditCard("6666666666661666")); // => true
console.log(validateCreditCard("a92332119c011112")); // => false
console.log(validateCreditCard("4444444444444444")); // => false
console.log(validateCreditCard("1211111111111112")); // => true
console.log(validateCreditCard("1111111111111110")); // => false
