function utopianTree(n) {
    let height = 1;
    let cycles = 0
    while (cycles < n) {
        if (cycles % 2 === 0) {
            height *= 2;
        } else {
            height += 1;
        }
        cycles++;
        height
    }
    return height;
}

console.log(utopianTree(4));