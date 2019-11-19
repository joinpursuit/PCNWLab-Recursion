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
const factorial = (num) => {
    if (num === 0) return 1;
    return num * factorial(num -1)
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
const getInRange = (num1,num2) =>{
    let rangenum =[]
    if(num1 === 0 && num2 === 0) return rangenum.push(0)
    if(num1 > num2){
        return 0
    }
    return rangenum 
}
/*  3
    @function isEven
    @param n {number}
    @returns {boolean}
    @description:
        - determine without using % operator or Math.floor(), etc
            whether or not a number is even
*/
const isEven = num => {
    if( num <= 0) return num === 0 ? true:false

    return isEven(num - 2)
}
console.log(isEven(5))
/*  4
    @function pow
    @param b {number}
    @param n {number}
    @returns {number}
    @description:
        - determine without using anything other than multiplication
            the value of b^n
*/
const pow = (num1,num2) => {
    if (num2 === 0) return 1
    return num1 * pow(num1,num2-1)
}
console.log(pow(4,2))
/*  5
    @function multiply
    @param a {number}
    @param b {number}
    @returns {number}
    @description:
        - determine without using multiplication operator the product
            of a and b
*/
const multiply = (num1,num2) => {
    if(num2 === 0) return 0
    return num1 + multiply(num1,num2 - 1)
}
console.log(multiply(3,2))
/*  6
    @function reverse
    @param s {string}
    @returns {string}
    @description:
        - recursively reverse a string
*/
const reverse = (str) =>{
    if(str = "") return ""
    return reverse(str)
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




