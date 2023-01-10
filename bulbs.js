// interviewBit

function bulbs(A) {
    let cost = 0
    for (let e of A) {
        if (cost % 2 === 0) e = e ; else e = !e;
        if (e % 2 === 1) continue; else cost ++;
    }
    return cost
}
console.log(bulbs([1, 1, 0, 0, 1, 1, 0, 0, 1]))
