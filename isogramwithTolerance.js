const isogramWithTolerance = (s, k) => {
    const charCount = new Map();
    let toleranceUsed = 0;
  
    for (const c of s.toLowerCase()) {
      if (c.match(/[a-z]/)) {
        if (!charCount.has(c)) {
          charCount.set(c, 1);
        } else if (charCount.get(c) === 1) {
          charCount.set(c, 2);
          toleranceUsed++;
          if (toleranceUsed > k) {
            return false;
          }
        }
      }
    }
  
    return true;
  };
  
  console.log(isogramWithTolerance("ssubdermatoglyphiccc", 2));
  