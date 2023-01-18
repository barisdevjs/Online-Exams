function rounds_won( results ) {
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