// Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. Print the decimal value of each fraction on a new line with  places after the decimal.

function plusMinus(arr) {
    // Write your code here
    const pos = arr.filter((e) => e > 0).length
    const zeros = arr.filter((e) => e === 0).length
    const neg = arr.filter((e) => e < 0).length
    // Print the decimal value of each fraction on a new line
    console.log(numToDec(pos, arr.length))
    console.log(numToDec(neg, arr.length))
    console.log(numToDec(zeros, arr.length))
}

function numToDec(n, length) {
    return (n/length).toFixed(6)
}