function TreeConstructor(strArr) {
  let parents = {};
  let children = {};

  for (let i = 0; i < strArr.length; i++) {
    let pair = strArr[i].replace(/[()]/g, "").split(",");

    let child = pair[0];
    let parent = pair[1];

    if (parents[parent]) {
      parents[parent].push(child);
    } else {
      parents[parent] = [child];
    }

    if (parents[parent].length > 2) {
      return false;
    }

    if (children[child]) {
      return false;
    } else {
      children[child] = parent;
    }
  }

  return true;
}

console.log(TreeConstructor(["(1,2)", "(2,4)", "(5,7)", "(7,2)", "(9,5)"]));
