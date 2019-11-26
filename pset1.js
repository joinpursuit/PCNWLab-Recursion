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
const factorial = n => {
    if(n <= 0) return 1;
    return n * factorial(n-1);
}
// console.log(factorial(5));


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
const getInRange = (s, e, arr=[]) => {
    if (s === e){
        arr.push(s);
        return arr;
    }
    if(s > e) {
        arr.push(s);
        return getInRange(s-1, e, arr);
    } 
    if (s < e){
        arr.push(s);
        return getInRange(s+1,e, arr);
    } 
}
// console.log(getInRange(5,2));
// console.log(getInRange(2,5));


/*  3
    @function isEven
    @param n {number}
    @returns {boolean}
    @description:
        - determine without using % operator or Math.floor(), etc
            whether or not a number is even
*/
const isEven = n => {
    if(n === 0) return true;
    if(n === 1) return false;
    return isEven(n-2);
}
// console.log(isEven(10000));


/*  4
    @function pow
    @param b {number}
    @param n {number}
    @returns {number}
    @description:
        - determine without using anything other than multiplication
            the value of b^n
*/
const pow = (b,n) => {
    if(n < 0) return 1 / b**n
    if(n === 0) return 1;
    if(n === 1) return b;
    return b * pow(b,n-1);
}
// console.log(pow(4,2));


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
    if(a === 0 || b === 0) return 0;
    if(a === 1) return b;
    if(b === 1) return a;
    return a + multiply(a, b-1)
}
// console.log(multiply(25,3));


/*  6
    @function reverse
    @param s {string}
    @returns {string}
    @description:
        - recursively reverse a string
*/
const reverse = s => {
    if(s.length <= 0) return "";
    return s.slice(s.length-1) + reverse(s.substring(0,s.length-1));
}
// console.log(reverse("Hello World"));


/*  7
    @function isPalindrome
    @param s {string}
    @returns {boolean}
    @description:
        - recursively determine if a string is a palindrome
*/
const isPalindrome = string => {
    if(string.length < 2) return true;
    if(string[0] === string[string.length-1]){
        return isPalindrome(string.slice(1, string.length-1));
    }
    return false;
}
// console.log(isPalindrome("thisisnotapalindrome"))
// console.log(isPalindrome("momomom"));


/*  8
    @function map
    @param arr {array}
    @param cb {function}
    @returns {array}
    @description:
        - recursively implement map
*/
const map = (arr,cb) => {
    
}


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




