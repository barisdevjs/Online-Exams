
function helper(str) {
    let result = '';
    const regex = /\d/g;
    if (regex.test(str))  {
        return str
    };
    const len = str.length;
    if (len < 4) {
        for (let index = 0; index < str.length; index++) {
            const element = str[index];
            if (index % 2 != 1) {
                result += element.toLowerCase();
            } else {
                result += element.toUpperCase();
            }
        }
        return result;
    } else if (3 < len && len < 7) {
        return str.toLowerCase();
    } else  {
        return str.toUpperCase()
    }
    
}
function donustur(kelimeGrubu) {
    let kelimeGrubu1 = kelimeGrubu.split(',');
    return kelimeGrubu1.map((element) => helper(element)).join(',');
}
console.log(donustur("xyZ,abbA,nhnHHnuUu,anDb7ll,t"));
console.log(donustur("9a,8b,7C"));