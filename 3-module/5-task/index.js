function getMinMax(str) {
  const arrNumber = str.split(' ')
  .filter(num => isFinite(num))
  .map(string => +string)

  return {
    min: Math.min(...arrNumber),
    max: Math.max(...arrNumber)
  }
}
