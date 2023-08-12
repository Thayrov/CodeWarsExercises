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
/* console.log(
	STRANGE_STRING.toUpperCase().toLowerCase().length > STRANGE_STRING.length,
); // This will output true */

//############################################################################

//Even or Odd

//  The Problem
/* Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers. */

//  The Solution

const evenOrOdd = n => {
	return n % 2 === 0 ? 'Even' : 'Odd';
};

//  The Test
/* console.log(evenOrOdd(2)); // Expected output: Even
console.log(evenOrOdd(3)); // Expected output: Odd
console.log(evenOrOdd(0)); // Expected output: Even */

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
/* console.log(multiply(2, 3)); // Expected output: 6
console.log(multiply(4, 5)); // Expected output: 20 */

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
/* console.log(positiveSum([1, -4, 7, 12])); // Expected output: 20
console.log(positiveSum([-1, -2, -3, -4])); // Expected output: 0
console.log(positiveSum([])); // Expected output: 0 */

//############################################################################

//Return Negative

//  The Problem
/* In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

Examples
makeNegative(1);    // return -1
makeNegative(-5);   // return -5
makeNegative(0);    // return 0
makeNegative(0.12); // return -0.12
Notes
The number can be negative already, in which case no change is required.
Zero (0) is not checked for any specific sign. Negative zeros make no mathematical sense. */

//  The Solution
const makeNegative = n => (n > 0 ? -n : n);

//  The Test
/* console.log(makeNegative(1)); // Expected output: -1
console.log(makeNegative(-5)); // Expected output: -5
console.log(makeNegative(0)); // Expected output: 0
console.log(makeNegative(0.12)); // Expected output: -0.12 */

//############################################################################

//Quadrants

//  The Problem
/* Task
Given a point in a Euclidean plane (x and y), return the quadrant the point exists in: 1, 2, 3 or 4 (integer). x and y are non-zero integers, therefore the given point never lies on the axes.

Examples
(1, 2)     => 1
(3, 5)     => 1
(-10, 100) => 2
(-1, -9)   => 3
(19, -56)  => 4

There are four quadrants:
First quadrant, the quadrant in the top-right, contains all points with positive X and Y
Second quadrant, the quadrant in the top-left, contains all points with negative X, but positive Y
Third quadrant, the quadrant in the bottom-left, contains all points with negative X and Y
Fourth quadrant, the quadrant in the bottom-right, contains all points with positive X, but negative Y
*/

//  The Solution

const quadrant = (x, y) => {
	if (x > 0 && y > 0) return 1;
	if (x < 0 && y > 0) return 2;
	if (x < 0 && y < 0) return 3;
	if (x > 0 && y < 0) return 4;
};

//  The Test
/* console.log(quadrant(1, 2)); // Expected output: 1
console.log(quadrant(3, 5)); // Expected output: 1
console.log(quadrant(-10, 100)); // Expected output: 2
console.log(quadrant(-1, -9)); // Expected output: 3
console.log(quadrant(19, -56)); // Expected output: 4 */

//############################################################################

//

//  The Problem

//  The Solution

//  The Test
