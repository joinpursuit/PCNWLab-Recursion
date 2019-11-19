// Q1
console.log("Question 1")
const factorial = num => {
    if (num === 0) return 1;
    return num * factorial(num - 1)
}
console.log(factorial(5))


// Q2
console.log("Question 2")
const range = (num1, num2) => {
    if (num1 === num2) return num2;
    let results = [];
    results.push(num1)
    return results.concat(range(num1 + 1, num2))
}
console.log(range(2, 5))


// Q3
console.log("Question 3")
const isEven = num => {
    if (num === 0) return true;
    if (num === 1) return false;
    if (num < 0) {
        return isEven(-num)
    } else {
        return isEven(num - 2)
    }
}
console.log(isEven(6))


// Q4
console.log("Question 4")
const pow = (b, n) => {
    if (n === 0) return 1;
    if (n === 1) return b;
    return b * pow(b, n - 1)   
}
console.log(pow(12, 2))


// Q5
console.log("Question 5")
const multiply = (a, b) => {
    if (a === 0 || b === 0) return 0;
    return a + multiply(a, b - 1)
}
console.log(multiply(7, 9))


// Q6
console.log("Question 6")
const reverse = string => {
    if (string.length === 0) return string;
    return reverse(string.substr(1)) + string.charAt(0)
}
console.log(reverse("hello"))


// Q7
console.log("Question 7")
const isPalindrome = string => {
    if (string.length < 2) return true;
    if (string[0] === string[string.length - 1]) {
        return isPalindrome(string.slice(1, string.length - 1))
    }
    return false;
}
console.log(isPalindrome("racecar"))


// Q8
console.log("Question 8")
const map = (arr, callback) => {
    if (arr.length === 0) return [];
    return [callback(arr[0])].concat(map(arr.slice(1), callback))
}
console.log(map([1, 2, 3, 4], el => {
    return el * 2;
}))


// Q9
console.log("Question 9")
const filter = (arr, callback) => {
    if (arr.length === 0) return [];
    return 
}