// problem 1 

// const factorialFunction = (num) => {
//     if (num === 0 || num === 1) return 1;
//     let result = num
//     return result * factorialFunction(num - 1)
// }

// console.log(factorialFunction(2))

// problem 2

// const getInRange = (num1, num2) => {
//     if (num1 === num2 || num2 < num1) return;
//     let output = []
//     return output.push(getInRange(num1, num2--))
// }

// console.log(getInRange(5, 9)) SKIPPING FOR NOW

// problem 3

// const isEven = (num) => {
//     if (num === 0) return true;
//     if (num === 1) return false;
//     return isEven(num - 2)
// }

// console.log(isEven(10))

// problem 4

// const pow = (b, n) => {
//    if (n === 0) return 1
//    if (b === 1) return 1
//    return b * pow(b, n-1)
// }

// console.log(pow(2,3))

// problem 5

const multiply = (num1, num2) => {
    if (num1 === 0 || num2 === 0) return;
    if (num1 === 1) return num2 
    if (num2 === 1) return num1
    return num1 + multiply(num1, num2 - 1)
}

console.log(multiply(4,4))