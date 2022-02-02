import fetch from 'node-fetch';

// API endpoint: https://jsonmock.hackerrank.com/api/stocks?date=<date>
/* {
"date": "5-January-2000",
"open": 5265.09,
"high": 5464.35,
"low": 5184.48,
"close": 5357
}
*/

// input: 5-January-2000
// output: Open: 5265.09 High: 5464.35 Low: 5184.48 Close: 5357
 async function getStockInformation(date) {
    const url =  `https://jsonmock.hackerrank.com/api/stocks?date=${date}`;
    const response = await fetch(url);
    const json = await response.json();
    const stock = json.data[0];
    console.log(`Open: ${stock.open} High: ${stock.high} Low: ${stock.low} Close: ${stock.close}`);

}

console.log(getStockInformation('5-January-2000'));
