const countBy =
  (fn) =>
  ([...xs]) =>
    xs.reduce((a, x) => {
      const k = fn(x);
      a[k] = (a[k] || 0) + 1;
      return a;
    }, {});

const countLetters = countBy((x) => x + "");

console.log(countLetters("missisippi"));
