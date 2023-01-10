function breakingRecords(scores) {
    let highest = scores[0];
    let lowest = scores[0];
    let highestScores = 0
    let lowestScores = 0
    for (const iterator of scores) {
        if (iterator > highest) {
            highest = iterator;
            highestScores++;
        }
        if (iterator < lowest) {
            lowest = iterator;
            lowestScores++;
        }
    }
    return [highestScores, lowestScores];
}

console.log(breakingRecords([10, 5, 20, 20, 4, 5, 2, 25, 1]));