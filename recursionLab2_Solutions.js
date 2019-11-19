const factorial = (n) => {
  if (n === 0 || n === 1) return 1
  return n * factorial(n - 1)
}
console.log(factorial(5));

const getInRange = (n1,n2, output = []) => {
 if (n1 < n2) { 
   output.push(n1)
  return output.concat(getInRange(n1 + 1, n2))
  } else if (n1 > n2){
    output.push(n2)
    return output.concat(getInRange(n2 + 1, n1))
  } else {
    output.push(n1)
    return output
  }

}

console.log(getInRange(10))

const isEven = (n) => {
  if (n === 0)return true
  if (n === 1) return false
  return n > 0 ? isEven(n - 2) : isEven (n + 2)

}
console.log(isEven(-99))