/*
    @TODO: READ THIS!
    
    
    Implement the following functions __RECURSIVELY__
    NOTE: autoplay has been TURNED OFF to protect against
    accidental infinite loops. Feel free to turn back on but
    do so AT YOUR OWN RISK.
*/
const factorial = (n) => {
    if (n === 0) return 1;
    return n * factorial(n - 1)
}
console.log(factorial(3))
/*  1
    @function factorial
    @param n {number}
    @returns {number}
    @description:
        - factorial is defined to be n!
            or, 5! = 5*4*3*2*1
*/

const getInRange = (num1, num2) => {
    let ouput = [];
    if (num1 < num2) return num1;
    ouput.push(num1)
    return num1 + getInRange(num1 + 1)
}
console.log(getInRange(2,5))
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

/*  3
    @function isEven
    @param n {number}
    @returns {boolean}
    @description:
        - determine without using % operator or Math.floor(), etc
            whether or not a number is even
*/

const isEven = (num) => {
    if (num === 0) return true
    if (num === 1) return false
    return isEven(num - 2)
}

console.log(isEven(21))
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
    if (n === 0) return 1;
    return b * pow(b, n -1)
}
console.log(pow(3, 4))

/*  5
    @function multiply
    @param a {number}
    @param b {number}
    @returns {number}
    @description:
        - determine without using multiplication operator the product
            of a and b
*/

// const multiply = (a, b) => {
//     if (a || b == 0) {
//         return 0;
//     } else {
//     // if (a || b === 1) return 1;
//     return a * multiply(a, b - 1)
//     }
// }
const multiply = (a, b) => {
    if (a === 0) {
        return 0;
    }
    if (b === 0) { 
        return 0;
    } else {
    return a + multiply(a, b - 1)
    }
}

console.log(multiply(2,3))

/*  6
    @function reverse
    @param s {string}
    @returns {string}
    @description:
        - recursively reverse a string
*/

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




