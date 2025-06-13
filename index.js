//Question 1 Answer countVowels
function countVowels(targetValue) {
  const vowelsArray = ["a", "e", "i", "o", "u"];
  let count = 0;
  for (let i = 0; i < targetValue.length; i++) {
    let char = targetValue[i].toLowerCase();
    if (vowelsArray.includes(char)) {
      count++;
    }
  }
  return count;
}
console.log("Number of vowels: ", countVowels("Your Name"));

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Question 2 Answer sortNumbers
function sortNumbers(inputArray) {
  const numArray = [];
  for (let i = 0; i < inputArray.length; i++) {
    const parsedNum = parseInt(inputArray[i]);
    //Checking element isNumber or string if string then removing from array
    if (!Number.isNaN(parsedNum)) {
      numArray.push(inputArray[i]);
    }
  }
  return numArray.sort((a, b) => a - b);
}
console.log("Sorted Array: ", sortNumbers([4, 1, 8, 3]));

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Question 3 Answer reverseString
function reverseString(targetValue) {
  let reverseString = "";
  for (let i = targetValue.length - 1; i >= 0; i--) {
    reverseString += targetValue[i];
  }
  return reverseString;
}
console.log("Reversed string: ", reverseString("hello"));

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Question 4 Answer getLastElement
function getLastElement(array) {
  if (array.length === 0) return "Array is empty";
  return array[array.length - 1];
}
console.log("Last element is: ", getLastElement([10, 20, 30, 40]));

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Question 5 Answer  mergeArrays
function mergeArrays(array1, array2) {
  return array1.concat(array2);
  //destructur
  // return [...array1, ...array2];
}
console.log("Merged Array:", mergeArrays([1, 2], [3, 4]));

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Question 6 Answer  hasSpace
function hasSpace(str) {
  for (let i = 0; i < str.length; i++) {
    if (str[i] === " ") return true;
  }
  return false;
}
console.log("String has space: ", hasSpace("Ostad Limited"));

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Question 7 Answer  isEmptyString
function isEmptyString(targetValue) {
  if (targetValue.length === 0) return true;
  return false;
}
console.log("Is empty string?:", isEmptyString(""));

////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

//Question 8 Answer  removeNegativeNumbers
function removeNegativeNumbers(array) {
  const valueArray = array.map(Number);
  const trimmedArray = [];
  for (let i = 0; i < valueArray.length; i++) {
    if (valueArray[i] != "NaN" && valueArray[i] > -1) {
      trimmedArray.push(valueArray[i]);
    }
  }
  return trimmedArray;
}
console.log(
  "After removed negative numbers: ",
  removeNegativeNumbers([-5, 2, -1, 6, 0])
);
