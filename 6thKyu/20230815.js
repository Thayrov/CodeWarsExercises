//############################################################################

//Does my number look big in this?

//  The Problem
/* A Narcissistic Number (or Armstrong Number) is a positive number which is the sum of its own digits, each raised to the power of the number of digits in a given base. In this Kata, we will restrict ourselves to decimal (base 10).

For example, take 153 (3 digits), which is narcissistic:     1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153
and 1652 (4 digits), which isn't:     1^4 + 6^4 + 5^4 + 2^4 = 1 + 1296 + 625 + 16 = 1938

The Challenge:

Your code must return true or false (not 'true' and 'false') depending upon whether the given number is a Narcissistic number in base 10.
This may be True and False in your language, e.g. PHP.
Error checking for text strings or other invalid inputs is not required, only valid positive non-zero integers will be passed into the function. */

//  The Solution

const narcissistic = n => {
	const digits = n.toString().split('');
	const m = digits.length;
	const sum = digits.reduce((acc, digit) => acc + (+digit) ** m, 0);
	return sum === n;
};

//  The Test
/* console.log(narcissistic(153));  // true
console.log(narcissistic(1652)); // false */

//############################################################################

//Replace With Alphabet Position

//  The Problem
/* Welcome.

In this kata you are required to, given a string, replace every letter with its position in the alphabet.

If anything in the text isn't a letter, ignore it and don't return it.

"a" = 1, "b" = 2, etc.

Example
alphabetPosition("The sunset sets at twelve o' clock.")
Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" ( as a string ) */

//  The Solution

const alphabetPosition = text =>
	text
		.toUpperCase()
		.replace(/[^A-Z]/g, '')
		.split('')
		.map(ch => ch.charCodeAt(0) - 64)
		.join(' ');

//  The Test
console.log(alphabetPosition("The sunset sets at twelve o' clock."));
// "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"

//############################################################################
