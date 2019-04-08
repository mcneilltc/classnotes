var goodUsers = [
    { id: 1 },
    { id: 2 },
    { id: 3 }
  ]
var testAllValid = checkUsersValid(goodUsers)
    
testAllValid([
  { id: 2 },
  { id: 1 }
])
// => true

testAllValid([
  { id: 2 },
  { id: 4 },
  { id: 1 }
])


module.exports = function checkUsersValid(goodUsers) {
    return function allUsersValid(submittedUsers) {
       
          
    
        // SOLUTION GOES HERE
    };
  }
  
  module.exports = checkUsersValid