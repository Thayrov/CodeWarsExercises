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
console.log(
	STRANGE_STRING.toUpperCase().toLowerCase().length > STRANGE_STRING.length,
); // This will output true
