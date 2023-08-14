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

//############################################################################
