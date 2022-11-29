function StringChallenge(str) { 
const numbersArray = []
const lettersArray = []
// find the numbers in the string
for ( let i = 0; i < str.length; i++) {
    if ( str[i] >= 0 && str[i] <= 9) {
        numbersArray.push(Number(str[i]))
    }

    if ( str[i] >= 'a' && str[i] <= 'z') {
        lettersArray.push(str[i])
    }

    if ( str[i] >= 'A' && str[i] <= 'Z') {
        lettersArray.push(str[i])
    }
}
const totalNumbers = numbersArray.reduce((a, b) => a + b, 0)
const lettersArrayLength = lettersArray.length

return Math.round(totalNumbers / lettersArrayLength)
}

console.log(StringChallenge('H3ello9-9'))