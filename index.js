// We're going to assume creditCardNum is a string.
function validateCreditCard(creditCardNum) {
  // Write your code here!
}

/**
 * Think of these as tests. Write out your function
 * above so these console.logs below return what you
 * expect.
 */
console.log(validateCreditCard("9999777788880000")); // true
console.log(validateCreditCard("6666666666661666")); // true
console.log(validateCreditCard("a92332119c011112")); // false
console.log(validateCreditCard("4444444444444444")); // false
console.log(validateCreditCard("1211111111111112")); // true
