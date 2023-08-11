//List Filtering

//  The Problem
/* In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

Example
filter_list([1,2,'a','b']) == [1,2]
filter_list([1,'a','b',0,15]) == [1,0,15]
filter_list([1,2,'aasf','1','123',123]) == [1,2,123] */

//  The Solution
const filter_list = l => l.filter(i => Number.isInteger(i));

//  The Test
console.log(filter_list([1, 2, 'a', 'b'])); // [1,2]
console.log(filter_list([1, 'a', 'b', 0, 15])); // [1,0,15]
console.log(filter_list([1, 2, 'aasf', '1', '123', 123])); // [1,2,123]

//############################################################################

//

//  The Problem

//  The Solution

//  The Test

//############################################################################
