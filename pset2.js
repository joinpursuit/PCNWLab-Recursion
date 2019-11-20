// Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
const sumBelow = n => {
    if(n === 0) return 0;
    return n-1 + sumBelow(n-1);
}
console.log(sumBelow(10));
console.log(sumBelow(7));

// Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
const powerOfTwo = n => {
    if(n === 0) return false
    if(n === 1) return true;
    if(n % 2 === 0){
        return powerOfTwo(n / 2);
    } else {
        return false;
    }
}
console.log(powerOfTwo(1)) // true
console.log(powerOfTwo(16)); // true
console.log(powerOfTwo(10)); // false
console.log(powerOfTwo(120));


// Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
const modulo = (x, y) => {};

// Find the greatest common divisor (gcd) of two positive numbers. The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// gcd(4,36); // 4
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
const gcd = (x, y) => {};

// Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('tomato', 'tomato') // true
const compareStr = (str1, str2) => {};


// Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
const capitalizeWords = array => {};


// Alternate the numbers in an array between positive and negative regardless of
// their original sign. The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
const alternateSign = array => {};

// Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
const createArray = str => {};

// Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
const buildList = (value, length) => {};

// Count the occurence of a value in a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
const countOccurrence = (array, value) => {};


// Sum all numbers in an array containing nested arrays.
// arraySum([1,[2,3],[[4]],5]); // 15
const arraySum = array => {};

// Write a function that counts the number of times a key occurs in an object.
// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countKeysInObj(obj, 'r') // 1
// countKeysInObj(obj, 'e') // 2
const countKeysInObj = (obj, key) => {};


// Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
const nestedEvenSum = obj => {};

// Flatten an array containing nested arrays.
// flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
const flatten = array => {};

// Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {p:1, o:2, t:2, a:1}
const letterTally = (str, obj) => {};

// Eliminate consecutive duplicates in a list. If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// compress([1,2,2,3,4,4,5,5,5]) // [1,2,3,4,5]
// compress([1,2,2,3,4,4,2,5,5,5,4,4]) // [1,2,3,4,2,5,4]
const compress = list => {};

