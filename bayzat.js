function ArrayChallenge(arr) { 
    const myChallengeToken = 'd1vibqr5'
    if ( arr.length < 2) return -1
    let minPrice = arr[0]
    let maxProfit = arr[1] - arr[0]
    let minIdx = 0
   
    for ( let i = 1; i < arr.length; ++i) {
      if (arr[i] - minPrice > maxProfit) {
        maxProfit = arr[i] - minPrice
      }
  
      if ( arr[i] < minPrice && i !== arr.length -1) {
        minPrice = arr[i]
        minIdx = i
      }
    }
    
    const final = maxProfit + myChallengeToken
    const result = final.replace(/(..)./g, "$1X");
    return result
  }

  console.log(ArrayChallenge([10,12,4,5,9]))