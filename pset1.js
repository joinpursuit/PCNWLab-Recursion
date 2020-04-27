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

const isEven = (n) => {
    if(n === 0) return true;
    else if(n === 1) return false;
    else return isEven(n - 2)
}
console.log(isEven(4))

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
    if(n === 0) return 1;
    else return b * pow(b, n - 1);
}
console.log(pow(5,2))


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
    else return reverse(s.substr(1)) + s.charAt(0)
}
console.log(reverse("hello"))

/*  7
    @function isPalindrome
    @param s {string}
    @returns {boolean}
    @description:
        - recursively determine if a string is a palindrome
*/
const isPlaindrome = (s) => {
    if(s.length < 2) return true
    if(s[0] == s[s.length -1]) {
        return isPlaindrome(s.slice(1, s.length -1));
    }
    return false;
}
console.log(isPlaindrome("hannah"))
console.log(isPlaindrome("sarah"))
console.log(isPlaindrome("i"))

/*  8
    @function map
    @param arr {array}
    @param cb {function}
    @returns {array}
    @description:
        - recursively implement map
*/
const map = (arr, cb) => {
    if(arr.length === 1) return cb(arr);
    else return [cb(arr[0])].concat(map(arr.slice(1), cb));
}
let data = [1,2,3];

let multiplyThree = (n) => {
    return n * 3
};

console.log(map(data, multiplyThree))

/*  9
    @function filter
    @param arr {array}
    @param cb {function}
    @returns {array}
    @description:
        - recursively implement filter
*/
const filter = (arr, cb) => {
    if(arr.length = 1) return cb(arr)
}

/*  10
    @function reduce
    @param arr {array}
    @param cb {function}
    @param acc {anything}
    @returns {anything}
    @description:
        - recursively implement reduce
*/
