//Up and down, the string grows

//  The Problem
/* Many programming languages provide the functionality of converting a string to uppercase or lowercase. For example, upcase/downcase in Ruby, upper/lower in Python, and toUpperCase/toLowerCase in Java/JavaScript. Typically, these methods won't change the size of the string.
For example, in Ruby, str.upcase.downcase.size == str.size is true for most cases.
However, in some special cases, the length of the transformed string may be longer than the original. Can you find a string that satisfies this criteria?
For example, in Ruby, That means str.upcase.downcase.size > str.size
You should just set the value of STRANGE_STRING to meet the previous criteria.
Note: Meta programming is not allowed in this kata. So, the size of your solution is limited. */

//  The Solution
/* This problem is rooted in the intricacies of Unicode character handling in string manipulation methods of different programming languages.
In JavaScript, the toUpperCase and toLowerCase methods for strings do have some cases where the length of the transformed string can be different from the original string. This is especially true for certain Unicode characters.
For instance, the character "ß" (LATIN SMALL LETTER SHARP S) used in German words, when converted to uppercase using JavaScript's toUpperCase method, becomes "SS". Thus, the length of the string increases. */

const STRANGE_STRING = 'ß';

//  The Test
console.log(
	STRANGE_STRING.toUpperCase().toLowerCase().length > STRANGE_STRING.length,
); // This will output true

//############################################################################

//Even or Odd

//  The Problem
/* Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers. */

//  The Solution

const evenOrOdd = n => {
	return n % 2 === 0 ? 'Even' : 'Odd';
};

//  The Test
console.log(evenOrOdd(2)); // Expected output: Even
console.log(evenOrOdd(3)); // Expected output: Odd
console.log(evenOrOdd(0)); // Expected output: Even

//############################################################################

//Multiply

//  The Problem
/* This code does not execute properly. Try to figure out why. 

function multiply(a, b){
  a * b
}*/

//  The Solution
/*  The problem with the given code is that it doesn't return any value from the multiply function. We just have the multiplication operation inside the function, but we're not doing anything with the result. To fix it, we only have to return the result of the multiplication */

function multiply(a, b) {
	return a * b;
}

// The Test
console.log(multiply(2, 3)); // Expected output: 6
console.log(multiply(4, 5)); // Expected output: 20

//############################################################################

//Sum of positive

//  The Problem
/* You get an array of numbers, return the sum of all of the positives ones.
Example [1,-4,7,12] => 1 + 7 + 12 = 20
Note: if there is nothing to sum, the sum is default to 0. */

//  The Solution

const positiveSum = arr => {
	return arr.reduce((acc, num) => (num > 0 ? acc + num : acc), 0);
};

// The Test
console.log(positiveSum([1, -4, 7, 12])); // Expected output: 20
console.log(positiveSum([-1, -2, -3, -4])); // Expected output: 0
console.log(positiveSum([])); // Expected output: 0

//############################################################################

//

//  The Problem

//  The Solution

//  The Test
