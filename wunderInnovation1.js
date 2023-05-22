export function rounds_won( results ) {
    //Insert your code here 
    let rounds = results.length;
    let won = 0;
    let secondPlayer = 0;
    for (let i = 0; i < rounds; i++) {
        if (results[i] === 1) {
            won++;
        } else {
            secondPlayer++;
        }
    }
    return won > secondPlayer ? won : secondPlayer > won ? secondPlayer : won
}

console.log(rounds_won([ 1,2,2,2,2,2,1]));


 function rounds_won2( results ) {
  //Insert your code here 
  const map = new Map();
  for ( let i = 0; i< results.length; i++) {
    if (map.has(results[i])) {
      map.set(results[i], map.get(results[i]) +1)  
    } else {
      map.set(results[i],1)
    }
  }

  let maxCount = 0;
  for ( let [_, value] of map ) {
    if ( value > maxCount ) {
      maxCount = value;
    }
  }
  
  return maxCount;
}

console.log(rounds_won2([ 1,2,2,2,2,2,1]));
