function getMaxProfit(stockPrices) {
  // Make sure we have at least 2 prices
  if (stockPrices.length < 2) {
    return 'Not enough stock prices to calculate max profit';
  }

    // Calculate the max profit
    let minPrice = stockPrices[0];
    let maxProfit = stockPrices[1] - stockPrices[0];

    for (let i = 1; i < stockPrices.length; i++) {
        const currentPrice = stockPrices[i];
    
        const potentialProfit = currentPrice - minPrice;
    
        maxProfit = Math.max(maxProfit, potentialProfit);
    
        minPrice = Math.min(minPrice, currentPrice);
        }
        return maxProfit;
}


const stockPrices = [10, 7, 5, 8, 11, 9];

console.log(getMaxProfit(stockPrices));

