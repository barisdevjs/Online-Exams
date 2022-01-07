function StringChallenge(str) { 
    // swap char cases
    let str2 = str.split(' ').map(function(word) {
        return word.split('').map(function(char) {
            return char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase();
        }).join('');
    }).join(' ');
    // reverse string
  return str2
}   
  console.log(StringChallenge("Hello World"));