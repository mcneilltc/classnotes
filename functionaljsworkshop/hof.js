function repeat(operation, num) {
    return operation(num)// SOLUTION GOES HERE
  }
  
  // Do not remove the line below
  module.exports = repeat

  // the computers solution
  /*
  function repeat(operation, num) {
    if (num <= 0) return
    operation()
    return repeat(operation, --num)
  }
  
  module.exports = repeat*/