function sumSalary(salaries) {
  let amountSalaries = 0;

  for(let key in salaries){
    if(Number.isInteger(salaries[key])) amountSalaries += salaries[key]
  }

  return amountSalaries
}
