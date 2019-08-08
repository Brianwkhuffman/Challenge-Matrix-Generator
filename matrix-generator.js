function matrixGenerator(rows, columns) {
  // do work here
  let matrix = [];
  for (let i = 0; i < rows; i++) {
    matrix[i] = [];
    for (let j = 0; j < columns; j++) {
      let random = Math.floor(Math.random() * 101)
      matrix[i].push(random)
    }
    matrix[i].sort()
  }

  return matrix.sort();
}

module.exports = matrixGenerator;
