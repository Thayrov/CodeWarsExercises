//List Filtering

//  The Problem
/* In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

Example
filter_list([1,2,'a','b']) == [1,2]
filter_list([1,'a','b',0,15]) == [1,0,15]
filter_list([1,2,'aasf','1','123',123]) == [1,2,123] */

//  The Solution
const filter_list = l => l.filter(Number.isInteger);

//  The Test
console.log(filter_list([1, 2, 'a', 'b'])); // [1,2]
console.log(filter_list([1, 'a', 'b', 0, 15])); // [1,0,15]
console.log(filter_list([1, 2, 'aasf', '1', '123', 123])); // [1,2,123]

//############################################################################

//Is n divisible by (...)?

//  The Problem
/* Create a function that checks if the first argument n is divisible by all other arguments (return true if no other arguments)

Example:

(6,1,3)--> true because 6 is divisible by 1 and 3
(12,2)--> true because 12 is divisible by 2
(100,5,4,10,25,20)--> true
(12,7)--> false because 12 is not divisible by 7 */

//  The Solution

const isDivisible = (x, ...y) => y.every(i => x % i === 0);

//  The Test
console.log(isDivisible(6, 1, 3)); // true (6 is divisible by both 1 and 3)
console.log(isDivisible(12, 2)); // true (12 is divisible by 2)
console.log(isDivisible(100, 5, 4, 10, 25, 20)); // true (100 is divisible by all the numbers provided)
console.log(isDivisible(12, 7)); // false (12 is not divisible by 7)
console.log(isDivisible(15)); // true (There are no divisors provided, so it should return true)

//############################################################################

//

//  The Problem

//  The Solution

//  The Test

//############################################################################
