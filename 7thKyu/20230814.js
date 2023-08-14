//############################################################################

//Vowel Count

//  The Problem
/* Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces. */

//  The Solution

const getCount = s => {
	const vowels = ['a', 'e', 'i', 'o', 'u'];
	return s.split('').filter(l => vowels.includes(l)).length;
};

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

const disemvowel = s => s.replace(/[aeiouAEIOU]/g, '');

//  The Test

/* console.log(disemvowel("This website is for losers LOL!"));  // "Ths wbst s fr lsrs LL!" */

//############################################################################
