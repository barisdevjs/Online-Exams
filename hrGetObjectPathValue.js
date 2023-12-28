function getObjectValue(obj, path) {
    const keys = path.split('.');
    let value = obj;
  
    for (const key of keys) {
      if (value.hasOwnProperty(key)) {
        value = value[key];
      } else {
        return undefined; // Path doesn't exist in the object
      }
    }
  
    return value;
  }
  
  const obj = { "car": {"wheels": 2, "gears": 5}};
  const path = "car.gears";
  const result = getObjectValue(obj, path);
  console.log(result); // Output: 5
  