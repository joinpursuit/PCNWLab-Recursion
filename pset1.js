/*
    @TODO: READ THIS!
    
    
    Implement the following functions __RECURSIVELY__
    NOTE: autoplay has been TURNED OFF to protect against
    accidental infinite loops. Feel free to turn back on but
    do so AT YOUR OWN RISK.
*/

/*  1
    @function factorial
    @param n {number}
    @returns {number}
    @description:
        - factorial is defined to be n!
            or, 5! = 5*4*3*2*1
*/

const factorial = (n) => {
  if (n <= 1) return 1;
  return factorial(n - 1) * n;
};

/*  2
    @function getInRange
    @param s {number}
    @param e {number}
    @returns {array}
    @description:
        - generate numbers in range
            for example getInRange(2,5) 
            should give us back [2,3,4,5]
    
    HINT:
        - remember to account for what happens if s > e!
*/

const getInRange = (s, e, arr = []) => {
  if (s < e) {
    arr.push(s);
    return arr.concat(getInRange(s + 1, e));
  } else if (s > e) {
    arr.push(s);
    return arr.concat(getInRange(s - 1, e));
  } else {
    arr.push(s);
    return arr;
  }
};

/*  3
    @function isEven
    @param n {number}
    @returns {boolean}
    @description:
        - determine without using % operator or Math.floor(), etc
            whether or not a number is even
*/

const isEven = (num) => {
  if (num === 0) return true;
  if (num === 1) return false;
  return num > 0 ? isEven(num - 2) : isEven(num + 2);
};

/*  4
    @function pow
    @param b {number}
    @param n {number}
    @returns {number}
    @description:
        - determine without using anything other than multiplication
            the value of b^n
*/

const pow = (b, n) => {
  if (b <= 1 || n === 1) return b;
  if (n === 0) return 1;
  return b * pow(b, n - 1);
};

/*  5
    @function multiply
    @param a {number}
    @param b {number}
    @returns {number}
    @description:
        - determine without using multiplication operator the product
            of a and b
*/

const multiply = (a, b) => {
  if (b === 0) return 0;
  return a + multiply(a, b - 1);
};

// console.log(multiply(12, 2));
// console.log(multiply(2, 6));
// console.log(multiply(0, 5));

/*  6
    @function reverse
    @param s {string}
    @returns {string}
    @description:
        - recursively reverse a string
*/

const reverse = (string) => {
  if (string.length === 0) return string;
  return reverse(string.substr(1)) + string.charAt(0);
};

console.log(reverse("hello"));
console.log(reverse("batman"));
console.log(reverse("women"));

/*  7
    @function isPalindrome
    @param s {string}
    @returns {boolean}
    @description:
        - recursively determine if a string is a palindrome
*/

const isPalindrome = (string) => {
  if (string.length < 2) return true;
  if (string[0] === string[string.length - 1]) {
    return isPalindrome(string.slice(1, string.length - 1));
  }
  return false;
};

/*  8
    @function map
    @param arr {array}
    @param cb {function}
    @returns {array}
    @description:
        - recursively implement map
*/

const map = (arr, cb) => {
  if (arr.length === 0) return [];
  return [cb(arr[0])].concat(map(arr.slice(1), cb));
};

/*  9
    @function filter
    @param arr {array}
    @param cb {function}
    @returns {array}
    @description:
        - recursively implement filter
*/

const filter = (arr, callback) => {
  if (arr.length === 0) return [];
  return [callback(arr[0]), ...filter(arr.slice(1), callback)];
};

console.log(filter([1, 2, 3, 3]), (el) => el !== 3);

/*  10
    @function reduce
    @param arr {array}
    @param cb {function}
    @param acc {anything}
    @returns {anything}
    @description:
        - recursively implement reduce
*/
