function SearchingChallenge(str) { 
    const re = /[0-9]+/g
    let res =  str.match(re)
    if(res === null) return 0
    res = res.map(Number).reduce((a,b) => a + b, 0)
    return res
    }
       

console.log(SearchingChallenge("75Number9"));
console.log(SearchingChallenge("Plus"));