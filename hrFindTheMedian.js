function findMedian(arr) {
    // Write your code here
    const sorted =  arr.sort((a,b) => a -b)
    const half = Math.floor(arr.length / 2)
    
    if ( arr.length % 2) 
    return arr[half]
    else
    return (arr[half-1] + arr[half]) / 2.0

}

console.log(findMedian([1,2,3,4,5]))