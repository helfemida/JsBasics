// factorial
function calculateFactorial(num) {
    if (num === 0 || num === 1) {
      return 1;
    } else {
      return num * calculateFactorial(num - 1);
    }
  }

const number = 5;
const factorial = calculateFactorial(number);
console.log(`The factorial of ${number} is: ${factorial}`);


// palindrome  
function isPalindrome(str) {
    const cleanStr = str.replace(/[\W_]/g, '').toLowerCase();

    const reversedStr = cleanStr.split('').reverse().join('');

    return cleanStr === reversedStr;
}

const testString1 = "racecar";
const testString2 = "A man, a plan, a canal, Panama!";

console.log(`Is "${testString1}" a palindrome? ${isPalindrome(testString1)}`);
console.log(`Is "${testString2}" a palindrome? ${isPalindrome(testString2)}`);


// max, min, avg, sum
function arrayOperations(numbers) {
    if (numbers.length === 0) {
      return {
        sum: 0,
        average: 0,
        max: undefined,
        min: undefined
      };
    }
  
    const sum = numbers.reduce((acc, num) => acc + num, 0);
    const average = sum / numbers.length;
    const max = Math.max(...numbers);
    const min = Math.min(...numbers);
  
    return {
      sum,
      average,
      max,
      min
    };
}

const numberArray = [5, 10, 3, 8, 15];
const operationsResult = arrayOperations(numberArray);

console.log("Array Operations Result:", operationsResult);


// reverse string
function reverseString(str) {
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
      reversed += str[i];
    }
    return reversed;
  }


const originalString = "Hello, world!";
const reversedString = reverseString(originalString);

console.log("Original String:", originalString);
console.log("Reversed String:", reversedString);
  
//largest
function findLargestElement(arr) {
    let largest = arr[0]; 
  
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > largest) {
        largest = arr[i];
      }
    }
  
    return largest;
  }
  
const numbers = [10, 5, 20, 8, 15];
const largestElement = findLargestElement(numbers);
console.log("The largest element in the array is:", largestElement);
  
//duplicates
function containsDuplicates(arr) {
    const seen = {}; 

    for (let i = 0; i < arr.length; i++) {
      if (seen[arr[i]]) {
        return true; 
      } else {
        seen[arr[i]] = true; 
      }
    }
    return false; 
  }
  
const array1 = [1, 2, 3, 4, 5];
const array2 = [1, 2, 3, 4, 2];

console.log("Array 1 contains duplicates:", containsDuplicates(array1));
console.log("Array 2 contains duplicates:", containsDuplicates(array2));

