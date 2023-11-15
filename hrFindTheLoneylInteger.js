/*
 * Complete the 'lonelyinteger' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY a as parameter.
 */

function lonelyinteger(a) {
    const map = new Map();
    for (let i = 0; i < a.length; i++) {
        if (map.has(a[i])) {
            map.delete(a[i]);
        } else {
            map.set(a[i], 1);
        }
    }
    return map.keys().next().value;
}

console.log(lonelyinteger([1,2,3,4,3,2,1]));