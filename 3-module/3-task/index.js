function camelize(str) {
  let strSplit = str.split('-')
  let newStr = [strSplit[0]]
    
  for(let i = 1; i < strSplit.length; i++){
    newStr.push(strSplit[i][0].toUpperCase() + strSplit[i].slice(1))
  }

    return newStr.join('')
}
