function StringChallenge(str) { 
    // compress the str into a run-length encoding 
    // example: "aabbccdd" -> "2a2b2c2d"
    // example: "aabbccddee" -> "2a2b2c2d2e"

    // create a new string to store the compressed string
    let compressed = ''
    // create a counter to count the number of times the character appears
    let counter = 1
    // create a variable to store the current character
    let currentChar = str[0]
    // loop through the string
    for (let i = 1; i < str.length; i++) {
        // if the current character is the same as the next character
        if (str[i] === currentChar) {
            // increment the counter
            counter++
        } else {
            // add the current character and the counter to the compressed string
            compressed += counter + currentChar
            // reset the counter
            counter = 1
            // set the current character to the next character
            currentChar = str[i]
        }
    }
    // add the last character and the counter to the compressed string
    compressed += counter + currentChar
    // return the compressed string
    return compressed
}
