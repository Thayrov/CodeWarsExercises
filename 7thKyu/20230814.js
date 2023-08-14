//############################################################################

//Vowel Count

//  The Problem
/* Return the number (count) of vowels in the given string.
We will consider a, e, i, o, u as vowels for this Kata (but not y).
The input string will only consist of lower case letters and/or spaces. */

//  The Solution

const getCount = s => s.replace(/[^aeiou]/gi, '').length;

//  The Test
/* console.log(getCount("example"));     // 3
console.log(getCount("hello world")); // 3
console.log(getCount("rhythm"));      // 0 */

//############################################################################

//Disemvowel Trolls

//  The Problem
/* Trolls are attacking your comment section!
A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.
Your task is to write a function that takes a string and return a new string with all vowels removed.
For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".
Note: for this kata y isn't considered a vowel. */

//  The Solution

const disemvowel = s => s.replace(/[aeiou]/gi, '');

//  The Test

/* console.log(disemvowel("This website is for losers LOL!"));  // "Ths wbst s fr lsrs LL!" */

//############################################################################

//Square Every Digit

//  The Problem
/* Welcome. In this kata, you are asked to square every digit of a number and concatenate them.
For example, if we run 9119 through the function, 811181 will come out, because 9^2 is 81 and 1^2 is 1. (81-1-1-81)
Example #2: An input of 765 will/should return 493625 because 7^2 is 49, 6^2 is 36, and 5^2 is 25. (49-36-25)
Note: The function accepts an integer and returns an integer.
Happy Coding! */

//  The Solution

const squareDigits = n =>
	parseInt(
		n
			.toString()
			.split('')
			.map(d => d ** 2)
			.join(''),
	);

//  The Test
/* console.log(squareDigits(9119));  // 811181
console.log(squareDigits(765));   // 493625
 */
//############################################################################
