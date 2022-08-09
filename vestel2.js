import fetch from "node-fetch";

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

const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];

function calculateDates( startDate, endDate ) {
    const diff = Math.abs( new Date(startDate) - new Date(endDate) );
    const day = 1000 * 60 * 60 * 24;

    const days = Math.floor( diff / day)    
    const months = Math.floor(days / 30)
    const years = Math.floor(months / 12)

    return { days,months,years }
}


async function getStockInformation(date) {
    const url =  `https://jsonmock.hackerrank.com/api/stocks?date=${date}`;
    const response = await fetch(url);
    const json = await response.json();
    const stock = json.data[0];
    // console.log(`Open: ${stock.open} High: ${stock.high} Low: ${stock.low} Close: ${stock.close}`);
    return `Open: ${stock.open} High: ${stock.high} Low: ${stock.low} Close: ${stock.close}`;
}

console.log(calculateDates('5-January-2000', '7-January-2000'));
