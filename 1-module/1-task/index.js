function factorial(n) {
  let factorialResult = n;

  if(n === 0) return 1
  for(let i = 1; i < n; i++){
    factorialResult *= i
  }

  return factorialResult
}
