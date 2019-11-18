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
const factorial = num => {
    if(num === 0) return 1; 
    return num * factorial(num - 1)
}

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

/*  4
    @function pow
    @param b {number}
    @param n {number}
    @returns {number}
    @description:
        - determine without using anything other than multiplication
            the value of b^n
*/
const pow = (base, expo) => {
    if(expo === 0) return 1; 
    return base * pow(base, expo - 1);
}

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
    if(b === 0) return 0; 
    return a + multiply(a, b - 1)
}

// console.log(multiply(6, 8));


/*  6
    @function reverse
    @param s {string}
    @returns {string}
    @description:
        - recursively reverse a string
*/
const reverse = (str, i = 0, output = "") => {
    if(i === str.length) return output; 
    output = str[i] + output; 
    return reverse(str, i + 1, output)
}

// console.log(reverse("hello"));

/*  7
    @function isPalindrome
    @param s {string}
    @returns {boolean}
    @description:
        - recursively determine if a string is a palindrome
*/
const isPalindrome = (str, i = 0, j = str.length - 1) => {
    if(i > j) return true; 
    if(str[i] !== str[j]) return false; 
    return isPalindrome(str, i + 1, j - 1)
}
// console.log(isPalindrome("abba"));
// console.log(isPalindrome("abbba"));
// console.log(isPalindrome("abbca"));


/*  8
    @function map
    @param arr {array}
    @param cb {function}
    @returns {array}
    @description:
        - recursively implement map
*/
const map = (arr, callback, i=0, output = []) => {
    if(arr.length === i) return output;
    output.push(callback(arr[i]));
    return map(arr, callback, i + 1, output)
    
}
// console.log(map([1, 2, 3], (el) => el * 2));



/*  9
@function filter
@param arr {array}
@param cb {function}
@returns {array}
@description:
- recursively implement filter
*/

const filter = (arr, callback, i = 0, output = []) => {
    if(arr.length === i) return output;
    if(callback(arr[i])) {
        output.push(arr)
    }
    return filter(arr, callback, i + 1, output)

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

const reduce = (arr, callback, acc, i = 0 ) => {
    if(arr.length === i) return acc; 
    if(!acc) {
        acc = arr[i];
        i++
    }
    acc = callback(acc, arr[i])
    return reduce(arr, callback, acc, i + 1)
}

// console.log(reduce([1, 2, 3, 4], (a, b) => a + b, 5));





