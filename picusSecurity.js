function StringChallenge(str) { 
    const consonant = /[bcdfghjklmnpqrstvwxyz]/gi
    return str.match(consonant).length
  
  }
   
  console.log(StringChallenge("Alphabets"));