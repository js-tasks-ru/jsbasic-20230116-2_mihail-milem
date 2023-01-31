function showSalary(users, age) {
  let resultUsersSalary = ''

  users.filter(e => e.age <= age)  
  .map(e => {
    resultUsersSalary += `${e.name}, ${e.balance}\n`
  })
    
  return resultUsersSalary.slice(0, -1)
}
