function doubleAll(numbers) {
    var result =[]
    for(var i=0; i < numbers.length; i++){
        result.push(numbers[i]*2)
    }
    return result
    // SOLUTION GOES HERE
    //conditions were no for/while needed to use array.prototype.map()
  }
  
  module.exports = doubleAll

  //real solution

  module.exports = function doubleAll(numbers) {
    return numbers.map(function double(num) {
      return num * 2
    })
  }
