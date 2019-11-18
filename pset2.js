// Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
const sumBelow = (n, end = 0, sum = 0)=> {
    if(n === end) return sum;
    sum += end; 
    return sumBelow(n, end + 1, sum)
};
// console.log(sumBelow(7));


// Determine if a number is a power of two.
const powerOfTwo = (n, count = 1) => {
    if(count === n) return true; 
    if(count > n) return false;
    count *= 2
    return powerOfTwo(n, count)
};
// console.log(powerOfTwo(1)); // true
// console.log(powerOfTwo(16)); // true
// console.log(powerOfTwo(10)); // false

// Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
const modulo = (x, y) => {
    if(x === 0) return 0;
    if(x - y < 0) return x; 
    return modulo(x - y, y)
};
// console.log(modulo(5,2)) // 1
// console.log(modulo(17,5)) // 2
// console.log(modulo(22,6)) // 4

// Find the greatest common divisor (gcd) of two positive numbers. The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// gcd(4,36); // 4
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
const gcd = (x, y, i = x) => {
    if(x > y) return gcd(y, x);
    if(x % i === 0 && y % i === 0) return i;
    return gcd(x, y, i - 1)
};
// console.log(gcd(4, 36));


// Write a function that compares each character of two strings and returns true if
// both are identical.
const compareStr = (str1, str2, i = 0) => {
    if(str1.length !== str2.length) return false;
    if(i === str1.length) return true; 
    if(str1[i] !== str2[i]) return false;
    return compareStr(str1, str2, i + 1)
};
// console.log(compareStr('house', 'houses') )// false
// console.log(compareStr('tomato', 'tomato')) // true


// Given an array of words, return a new array containing each word capitalized.
const capitalizedWords = array => {
  if (!array.length) return [];
  return [array[0].toUpperCase()].concat(capitalizedWords(array.slice(1)));
};
// var words = ['i', 'am', 'learning', 'recursion'];
// console.log(capitalizedWords(words)); // ['I', 'AM', 'LEARNING', 'RECURSION']


// Alternate the numbers in an array between positive and negative regardless of
// their original sign. The first number in the index always needs to be positive.
const alternateSign = (array, i = 0, output = []) => {
    if(i === array.length) return output;
    output.push(i % 2 ? Math.abs(array[i]) * -1 : Math.abs(array[i]));
    return alternateSign(array, i + 1, output)
};
// console.log(alternateSign([2,7,8,3,1,4]) )// [2,-7,8,-3,1,-4]
// console.log(alternateSign([-2,-7,8,3,-1,4])) // [2,-7,8,-3,1,-4]

// Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
const createArray = (str, i = 0) => {
    if(str.length === i) return [];
    return [str[i]].concat(createArray(str, i + 1))
};
// console.log(createArray("hello"));

// Create a new array with a given value and length.
const buildList = (value, length, output = []) => {
    if(output.length === length) return output;
    output.push(value);
    return buildList(value, length, output)
};
// console.log(buildList(0,5)) // [0,0,0,0,0]
// console.log(buildList(7,3)) // [7,7,7]

// Count the occurence of a value in a list.
const countOccurrence = (array, value, i = 0, count = 0) => {
    if(i === array.length) return count; 
    if(array[i] === value) count++;
    return countOccurrence(array, value, i + 1, count)
};
// console.log(countOccurrence([2,7,4,4,1,4], 4))// 3
// console.log(countOccurrence([2,'banana',4,4,1,'banana'], 'banana')) // 2


// Sum all numbers in an array containing nested arrays.
const arraySum = arr => {
    let sum = 0; 
    arr.forEach(el => {
        if(Array.isArray(el)) {
            sum += arraySum(el)
        } else {
            sum += el
        }
    });
    return sum; 
};
// console.log(arraySum([1,[2,3],[[4]],5])); // 15

// Write a function that counts the number of times a key occurs in an object.
const countKeysInObj = (obj, target) => {
    let count = 0; 
    for(let key in obj) {
        if(key === target) {
            count += 1
        }
        if(Object.prototype.toString.call(obj[key]) === "[object Object]") {
            count += countKeysInObj(obj[key], target)
        }
    }
    return count
};
// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// console.log(countKeysInObj(obj, 'r')) // 1
// console.log(countKeysInObj(obj, 'e')) // 2


// Return the sum of all even numbers in an object containing nested objects.
const nestedEvenSum = obj => {
    let sum = 0;
    for (let key in obj) {
        if (Object.prototype.toString.call(obj[key]) === "[object Object]") {
            sum += nestedEvenSum(obj[key]);
        } else if(obj[key] % 2 === 0) {
            sum += obj[key];
        }
    }
    return sum;
};
// var obj1 = {
//     a: 2,
//     b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//     c: {c: {c: 2}, cc: 'ball', ccc: 5},
//     d: 1,
//     e: {e: {e: 2}, ee: 'car'}
// };
// console.log(nestedEvenSum(obj1)); // 10

// Flatten an array containing nested arrays.
const flatten = arr => {
    return arr.reduce((acc, el) => {
        return acc.concat(Array.isArray(el) ? flatten(el) : el)
    }, [])
};
// console.log(flatten([1,[2],[3,[[4]]],5])); // [1,2,3,4,5]

// Given a string, return an object containing tallies of each letter.
const letterTally = (str, obj = {}, i = 0) => {
    if(str.length === i) return obj; 
    obj[str[i]] ? obj[str[i]]++ : obj[str[i]] = 1
    return letterTally(str, obj, i + 1)
};
// console.log(letterTally('potato')); // {p:1, o:2, t:2, a:1}

// Eliminate consecutive duplicates in a list. If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
const compress = (list, i = 0, output = []) => {
    if(i === list.length) return output;
    if(list[i] !== output[output.length - 1]) {
        output.push(list[i])       
    }
    return compress(list, i + 1, output)
};
console.log(compress([1,2,2,3,4,4,5,5,5])) // [1,2,3,4,5]
console.log(compress([1,2,2,3,4,4,2,5,5,5,4,4])) // [1,2,3,4,2,5,4]

