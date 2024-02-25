// Declare a string variable
const str1 = 'Hello World';

// charAt(index)
// Returns the character at the specified index.
const charAtIndex = str1.charAt(0);
console.log(charAtIndex); // Output: 'H'

// charCodeAt(index)
// / Returns the Unicode value of the character at the specified index. 
const charCodeAtIndex = str1.charCodeAt(0);
console.log(charCodeAtIndex); // Output: 72

// concat(str1, str2, ...)
// Combines two strings. (Output: 'Hello World! Have a nice day!')
const concatenatedStr = str1.concat('! Have a nice day!');
console.log(concatenatedStr); // Output: 'Hello World! Have a nice day!'

// indexOf(substring, startIndex)
// Returns the index of the first occurrence of the specified substring. (Output: 6)
const indexOfSubstring = str1.indexOf('World');
console.log(indexOfSubstring); // Output: 6

// lastIndexOf(substring, startIndex)
// / Returns the index of the last occurrence of the specified substring. (Output: 7)
const lastIndexOfSubstring = str1.lastIndexOf('o');
console.log(lastIndexOfSubstring); // Output: 7

// includes(substring, startIndex)
// Checks if a string contains a specified substring. (Output: true)
const includesSubstring = str1.includes('ello');
console.log(includesSubstring); // Output: true

// slice(startIndex, endIndex)
// Extracts a section of a string and returns it. (Output: 'World')
const slicedStr = str1.slice(6, 11);
console.log(slicedStr); // Output: 'World'

// substring(startIndex, endIndex)
// // Returns the part of the string between two indexes.
const subString = str1.substring(0, 5);
console.log(subString); // Output: 'Hello'

// substr(startIndex, length)
// Returns the characters in a string beginning at a specified index through the specified number of characters.
const subStr = str1.substr(6, 5);
console.log(subStr); // Output: 'World'

// toLowerCase()
// Converts a string to lowercase letters. (Output: 'hello world')
const lowerCaseStr = str1.toLowerCase();
console.log(lowerCaseStr); // Output: 'hello world'

// toUpperCase()
// Converts a string to Uppercase letters.
const upperCaseStr = str1.toUpperCase();
console.log(upperCaseStr); // Output: 'HELLO WORLD'

// trim()
// Removes whitespace from both ends of a string. (Output: 'Hello World')
const trimmedStr = '   Hello World   '.trim();
console.log(trimmedStr); // Output: 'Hello World'
