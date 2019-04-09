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


function checkUsersValid(goodUsers) {
  return function allUsersValid(testAllValid) {
    return testAllValid.every(function(testAllValid) {
      return goodUsers.some(function(goodUser) {
        return goodUser.id === testAllValid.id
      })
    })

  }
}
  console.log(checkUsersValid);
  module.exports = checkUsersValid


  //computer solution

  module.exports = function checkUsersValid(goodUsers) {
    return function allUsersValid(submittedUsers) {
      return submittedUsers.every(function(submittedUser) {
        return goodUsers.some(function(goodUser) {
          return goodUser.id === submittedUser.id
        })
      })
    }
  }
  
