/*module.exports = function getShortMessages(messages) {
    { return messages.filter()
        return message = 'Esse id amet quis eu esse aute officia ipsum.' // random
    
    }      
    // SOLUTION GOES HERE
  }
  
  module.exports = getShortMessages*/

  module.exports = function getShortMessages(messages) { 
    return messages.filter(function(item) { //messages.filter is feeding another function(item) that will return the items message length that is less that 50
      return item.message.length < 50
    }).map(function(item) {// then we are mappting hat filter function in order to display the message that is less that 50
      return item.message
    })
  }