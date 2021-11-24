
function SimplePassword(str) { 
    let flag = true;
    let len = str.length;
    if ( len < 8 || len > 31 ) { 
        flag = false;
    }
    if ( !str.match(/[A-Z]/) || !str.match(/[^\w\s\n\t]/)) {
        flag = false;
    }
    if ( !str.match(/\d/) ) {
        flag = false;
    }
    if ( !str.match(/^([-+/*]\d+(\.\d+)?)*/) ) {
        flag = false;
    }
    let tempStr = str.toLowerCase();
    if ( tempStr.match(/(password)/) ) {
        flag = false;
    }

    return flag;
  }
     
  // keep this function call here 
  console.log(SimplePassword("turkey90AAA="));
  console.log(SimplePassword("passWord123!!!!"));
/* Input: "passWord123!!!!"
Output: false
Input: "turkey90AAA="
Output: true */