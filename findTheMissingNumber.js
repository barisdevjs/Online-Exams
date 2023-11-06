// find the missing element

function max(arr) {
    let n = -1;
    do {
        n++;
    }
    while (arr[n + 1] - arr[n] === 2);
    return arr[n] + 2;
}
// console.log(max([3, 7, 9]));





