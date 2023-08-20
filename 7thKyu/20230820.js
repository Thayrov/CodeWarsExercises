//Isograms

//  The Problem
/* An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

Example: (Input --> Output)

"Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)

isIsogram "Dermatoglyphics" = true
isIsogram "moose" = false
isIsogram "aba" = false */
//  The Solution
const isIsogram = s => new Set(s.toLowerCase()).size === s.length;

//  The Test
/* console.log(isIsogram("Dermatoglyphics")); // true
console.log(isIsogram("aba"));             // false
console.log(isIsogram("moOse"));           // false
 */
//############################################################################
