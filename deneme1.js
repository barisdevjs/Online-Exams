// find the missing element

/* function max(arr) {
    let n = -1;
    do {
        n++;
    }
    while (arr[n + 1] - arr[n] === 2);
    return arr[n] + 2;
}
console.log(max([3, 7, 9])); */


// find the occurances to the chars

/* function occurred(str) {
const map = new Map();
for (const e of str) {
    if (map.has(e)) {
        let value = map.get(e)
        map.set(e, value + 1)
    } else {
        map.set(e, 1)
    }
}
return map
}

console.log(occurred('happy'))
console.log(occurred('improperrr')) */
