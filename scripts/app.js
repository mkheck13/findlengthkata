// As part of this kata, you need to find the length of the sub-array that begins and ends with the specified number.

// For example, if the array arr is [0, -3, 7, 4, 0, 3, 7, 9], finding the length of the sub-array that begins and ends with 7s would return 5.

// For sake of simplicity, there will only be numbers (positive or negative) in the supplied array.

// If there are less or more than two occurrences of the number to search for, return 0.


// first we declare our function that takes in the two parameters: arry and n
// we then count how many times n is in array and we then save that in a new array with .filter
// if n appears more then twice in the array, the function will immediately return 0
// we then find the first and last instance of n in the array
// we then get the length of the sequence between the first and last instance of n
// we then return the results
const lengthOfSequence = (array, n) => {
    const instances = array.filter(number => number === n).length;
    if (instances > 2) return 0;
  
    const firstIndex = array.indexOf(n);
    const lastIndex = array.lastIndexOf(n);
    const sequenceLength = array.slice(firstIndex, lastIndex + 1).length;
  
    return sequenceLength === 1 ? 0 : sequenceLength
  };