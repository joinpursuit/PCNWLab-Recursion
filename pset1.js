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

const factorial = (number) => {
	if (number <= 1) return 1;
	return factorial(number - 1) * number;
};
console.log(factorial(5));

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

const getInRange = (num1, num2, arr = []) => {
	if (num1 < num2) {
		arr.push(num1);
		return arr.concat(getInRange(num1 + 1, num2));
	} else if (num1 > num2) {
		arr.push(num1);
		return arr.concat(getInRange(num1 - 1, num2));
	} else {
		arr.push(num1);
		return arr;
	}
};

console.log(getInRange(2, 5));
console.log(getInRange(5, 2));
console.log(getInRange(5, 5));

/*  3
    @function isEven
    @param n {number}
    @returns {boolean}
    @description:
        - determine without using % operator or Math.floor(), etc
            whether or not a number is even
*/

const isEven = (num) => {
	if (num === 2) return true;
	if (num === 1) return false;
	return num > 0 ? isEven(num - 2) : isEven(num + 2);
};

console.log(isEven(100));

/*  4
    @function pow
    @param b {number}
    @param n {number}
    @returns {number}
    @description:
        - determine without using anything other than multiplication
            the value of b^n
*/
// 3^2 ==> 3 * 3 =  9  => b = 3  == n=2 .. b => 3 * 3 > 3* 3^(2-1) == 3 * 3^1 == 3 *3
// n=2 .. n => 2
// 2^3 ===> 2*2*2 =  8 => 2 == n 3  ===1 === 2 * 2^(3-1)
//                                               2 * 2^2=>n
// 2 * 2 ^ (2 - 1 =>n)
// 2 * 2 ^ 1=n
// 2*2 * 2==> b

const pow = (b, n) => {
	if (b <= 1 || n === 1) return b;
	if (n === 0) return 1;
	return b * pow(b, n - 1);
};
console.log(pow(5, 5));

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
    if (a === 0 || b === 0) return 0
    return a + multiply(a, b - 1)
}
console.log(multiply(2, 0));
console.log(multiply(2, 6));
console.log(multiply(0, 2));
 
 
 

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
console.log(reverse("Hello"))

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
