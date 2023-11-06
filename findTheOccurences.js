// find the occurances to the chars

function occurred(str) {
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
console.log(occurred('improperrr'))

for ( var i = 0; i <10; i++) {
    setTimeout(() => {
        console.log(i)
    })
}