function ArrayChallenge(arr) {
    var max = arr[0],
        counter = {},
        i = arr.length,
        element;

    while (i--) {
        element = arr[i];
        if (!counter[element]) counter[element] = 0;
        counter[element]++;
        if (counter[max] < counter[element]) max = element;
        counter
    }

    // input {5:2, 6:1, 10:2}
    // output {5}
    var result = [];
    for (var key in counter) {
        if (counter[key] === counter[max]) result.push(key);
    }
   result
  
    return Number(result[0]) > 1 ? Number(result[0]) : -1

}


// console.log(ArrayChallenge([5, 10, 10, 6, 5]));
// console.log(ArrayChallenge([3, 4, 1, 6, 10]));
console.log(ArrayChallenge([5,5,2,2,1]));