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
const factorial = (n, product = 1) => {
    if(n === 1) return product;
    product *= n;
    n--;
    return factorial(n, product)
}
console.log(factorial(5))

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
    if(arr[arr.length -1] === e) return arr;
    arr.push(s);
    return getInRange(s + 1, e, arr);
}
console.log(getInRange(2,5))


/*  3
    @function isEven
    @param n {number}
    @returns {boolean}
    @description:
        - determine without using % operator or Math.floor(), etc
            whether or not a number is even
*/
<<<<<<< HEAD
// const isEven = num => {
//     if(num === 0) return true;
//     ((num === 1) return false;
//     return isEven(num);
// }
// console.log(isEven(3))
=======

const isEven = (n) => {
    if(n === 0) return true;
    else if(n === 1) return false;
    else return isEven(n - 2)
}
console.log(isEven(4))

>>>>>>> c66d8bfffc860039d4ad27286741b11e7e80efd9
/*  4
    @function pow
    @param b {number}
    @param n {number}
    @returns {number}
    @description:
        - determine without using anything other than multiplication
            the value of b^n
*/
<<<<<<< HEAD
const pow = num => {
    
}
=======




>>>>>>> c66d8bfffc860039d4ad27286741b11e7e80efd9
/*  5
    @function multiply
    @param a {number}
    @param b {number}
    @returns {number}
    @description:
        - determine without using multiplication operator the product
            of a and b
*/

const multiply = (a,b) => {
    if(b === 0) return 0;
    else return a + multiply(a, b - 1);
}
console.log(multiply(1,4))

/*  6
    @function reverse
    @param s {string}
    @returns {string}
    @description:
        - recursively reverse a string
*/

const reverse = (s) => {
    if(s === "") return ""
    // else return string.reverse
}

/*  7
    @function isPalindrome
    @param s {string}
    @returns {boolean}
    @description:
        - recursively determine if a string is a palindrome
*/


/*  8
    @function map
    @param arr {array}
    @param cb {function}
    @returns {array}
    @description:
        - recursively implement map
*/


/*  9
    @function filter
    @param arr {array}
    @param cb {function}
    @returns {array}
    @description:
        - recursively implement filter
*/


/*  10
    @function reduce
    @param arr {array}
    @param cb {function}
    @param acc {anything}
    @returns {anything}
    @description:
        - recursively implement reduce
*/
