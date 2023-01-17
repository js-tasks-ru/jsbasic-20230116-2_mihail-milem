function checkSpam(str) {
  let strLowerCase = str.toLowerCase()
  return (strLowerCase.includes('1xBet'.toLowerCase()) || strLowerCase.includes('XXX'.toLowerCase()))
}