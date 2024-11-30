// 1-masala
function filterPositiveNumbers(arr) {
    return arr.filter(num => num > 0);
}
console.log(filterPositiveNumbers([-1, 2, -3, 4, 5])); // [2, 4, 5]

// 2-masala
function capitalizeFirstLetters(str) {
    return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}
console.log(capitalizeFirstLetters("javascript coding rules")); // "Javascript Coding Rules"
// 3-masala
function reverseNumber(num) {
    const reversed = parseFloat(num.toString().split('').reverse().join('')) * Math.sign(num);
    return reversed;
}
console.log(reverseNumber(12345)); // 54321
console.log(reverseNumber(-9876)); // -6789

// 4-masala
function filterFalseValues(arr) {
    return arr.filter(value => value === false);
}
console.log(filterFalseValues([true, false, 0, false, true])); // [false, false]

// 5-masala
function sumPositiveNumbers(arr) {
    return arr.filter(num => num > 0).reduce((sum, num) => sum + num, 0);
}
console.log(sumPositiveNumbers([-1, 2, 3, -4, 5])); // 10



// Complete the square sum function so that it squares each number passed into it and then sums the results together.

function squareSum(numbers){
    return numbers.reduce((sum, num) => sum + num ** 2, 0);
   }


//    Given an array of integers your solution should find the smallest integer.

function findSmallestInt(arr) {
    let smallest = arr[0];
      for (let i = 1; i < arr.length; i++) {
          if (arr[i] < smallest) {
              smallest = arr[i];
          }
      }
      return smallest;
  }

//   Note: This kata is inspired by Convert a Number to a String!. Try that one too.

const stringToNumber = function(str){
    return Number(str);
  }

//   Summation
var summation = function (num) {
    let sum = 0;
      for (let i = 1; i <= num; i++) {
          sum += i;
      }
      return sum;
  }

//   Code as fast as you can! You need to double the integer and return it.

function doubleInteger(i) {
    return i * 2;
  }