function matrix(number) {
  let result = [];
  let top = 0;
  let bottom = number - 1;
  let left = 0;
  let right = number - 1;
  let counter = 1;

  // Initialize the matrix with zeros
  for (let i = 0; i < number; i++) {
    result.push(Array(number).fill(0));
  }

  while (top <= bottom && left <= right) {
    // Fill the top row from left to right
    for (let i = left; i <= right; i++) {
      result[top][i] = counter++;
    }
    top++;

    // Fill the rightmost column from top to bottom
    for (let i = top; i <= bottom; i++) {
      result[i][right] = counter++;
    }
    right--;

    // Fill the bottom row from right to left
    for (let i = right; i >= left; i--) {
      result[bottom][i] = counter++;
    }
    bottom--;

    // Fill the leftmost column from bottom to top
    for (let i = bottom; i >= top; i--) {
      result[i][left] = counter++;
    }
    left++;
  }

  return result;
}

console.log(matrix(4));
