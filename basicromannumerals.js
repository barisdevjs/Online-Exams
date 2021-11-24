function BasicRomanNumerals(str) { 
    str = str.toUpperCase(); // uppercasing all the letters
    const sym = { 
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,            
        'C': 100,           
        'D': 500,           
        'M': 1000           
    }                       

    let result = 0;

        for (i=0; i < str.length; i++){
        const now = sym[str[i]];
        const tommorrow = sym[str[i+1]];

        if (now < tommorrow){
            result += tommorrow - now 
            i++
        } else {
            result += now
        }
    }

    return result;
}
    
console.log(BasicRomanNumerals('ıV')); 