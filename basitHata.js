/* function basitHata(words) {
    let temp = []
    let result = [];
    for (let i = 0; i < words.length; i++) {
        const elementStr = words[i]
         const converted = convertToAscii(elementStr)

        
        
        
    }
    return result
} */

function convertToAscii(str) {
    let result = []
    for (let i = 0; i < str.length; i++) {
        result.push(str.charCodeAt(i))
    }
    return result.reduce((a, b) => a + b, 0)
}

/* function sortAlphabet(str) {
    return [...str].sort((a, b) => a.localeCompare(b)).join("");
} */

// write a function to group same ASCII characters in a array
// input: ["sahibinden", "sahibindne", "sifir", "siifr", "kiralik", "kilarik"]
// output:  [["sahibinden", "sahibindne"], ["sifir", "siifr"], ["kiralik", "kilarik"]]
function basitHata(words) {
    let result = []
    let temp = []
    for (let i = 0; i < words.length; i++) {
        const elementStr = words[i]
        const converted = convertToAscii(elementStr)
        if (temp.indexOf(converted) === -1) {
            temp.push(converted)
            result.push([elementStr])
        } else {
            result[temp.indexOf(converted)].push(elementStr)
        }
    }
    return result
}


console.log(basitHata(["sahibinden", "sahibindne", "sifir", "siifr", "kiralik", "kilarik"]))   