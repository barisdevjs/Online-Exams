function BasicRomanNumerals(str) { 
    str = str.toUpperCase(); // uppercasing all the letters
    const sym = { 
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,            // creating a dictionary of symbols and their values
        'C': 100,           
        'D': 500,           // Bu challenge çözülürken coderbyte sitesi
        'M': 1000           // adblocker uyarısı verdi.Defalarca uzantıların
    }                       // hepsini disable etmeme rağmen yine de 
                            // bu challenge coderbyte sitesinde çözemedim
                            // O yüzden IDE'de yazıp kopyalamak zorunda kaldım
                            // Ekran görüntüsü aldım, kanıtlanmaya açıktır

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