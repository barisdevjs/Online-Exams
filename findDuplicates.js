var returnDuplicates = function (my_input, keys = []) {
  let res = "";
  for (let index = 0; index < my_input.length; index++) {
    var element = my_input[index];
    if (!Object.values(keys).includes(element)) {
      keys.push(element);
      keys;
    } else {
      res += my_input[index];
      keys;
      res;
    }
  }
  return res;
};

console.log(returnDuplicates("happyy"));
