# The Credit Card Validator

## To Install

1. Make a FORK - NOT A CLONE - of this repo, so you have a version of this challenge.
2. `git clone` your fork of the repo
3. Run the following:

```
$ code .
$ yarn
$ yarn start
```

## The Challenge

You're starting your own credit card business. You need to come up with a new way to validate credit cards with a simple function called `validateCreditCard` that returns `true` or `false`.

Here are the rules for a valid number:

1. Number must be 16 digits; all of them must be numbers.
2. The final digit must be even.
3. The sum of all the digits must be greater than 16.

## Bonus challenge 🔥

Add functionality so that you must have at least two different digits represented (all of the digits cannot be the same)

## Examples

- The following credit card numbers are valid:
  - `9999777788880000`
  - `6666666666661666`
- The following credit card numbers are invalid:
  - `a92332119c011112` *invalid characters*
  - `4444444444444444` *only one type of number*
  - `1111111111111110` *sum less than 16*
  - `6666666666666661` *odd final number*
