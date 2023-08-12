//############################################################################

//Beginner Series #3 Sum of Numbers

//  The Problem
/* Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

Note: a and b are not ordered!

Examples (a, b) --> output (explanation)
(1, 0) --> 1 (1 + 0 = 1)
(1, 2) --> 3 (1 + 2 = 3)
(0, 1) --> 1 (0 + 1 = 1)
(1, 1) --> 1 (1 since both are same)
(-1, 0) --> -1 (-1 + 0 = -1)
(-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)
Your function should only return a number, not the explanation about how you get that number. */

//  The Solution

/* const getSum = (x, y) => {
	let sum = 0;
	for (let i = Math.min(x, y); i <= Math.max(x, y); i++) {
		sum += i;
	}
	return sum;
}; */
const GetSum = (a, b) => ((a + b) * (Math.abs(a - b) + 1)) / 2;

//  The Test
/* console.log(getSum(1, 0)); // 1
console.log(getSum(1, 2)); // 3
console.log(getSum(0, 1)); // 1
console.log(getSum(1, 1)); // 1
console.log(getSum(-1, 0)); // -1
console.log(getSum(-1, 2)); // 2 */

//############################################################################

//

//  The Problem

//  The Solution

//  The Test

//############################################################################
