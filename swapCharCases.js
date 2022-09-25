function StringChallenge(str) {
  let str2 = str.split(' ').map(word => {
    return word.split('').map(char => {
      return char === char.toUpperCase() ?
        char.toLowerCase() : char.toUpperCase()
    }).join('')
  }).join(' ')
  return str2
}

// keep this function call here 
console.log(StringChallenge(readline()));