/*var duck = {
    quack: function() {
      console.log('quack')
    }
  }
  
  duck.hasOwnProperty('quack') // => true

  var object = {quack: true}
    
    Object.getPrototypeOf(object) === Object.prototype // => true
    object.hasOwnProperty('quack')                     // => true

// create an object with 'null' prototype.
var object = Object.create(null)
object.quack = function() {
  console.log('quack')
}

Object.getPrototypeOf(object) === Object.prototype // => false
Object.getPrototypeOf(object) === null             // => true

object.hasOwnProperty('quack')
// => TypeError: Object object has no method 'hasOwnProperty'

    // the first argument to call becomes the value of `this`
    // the rest of the arguments are passed to the function as per
    
    Object.prototype.hasOwnProperty.call(object, 'quack') // => true*/

var notDuck = Object.create({quack: true})
    var duck = {quack: true}
    duckCount(duck, notDuck) // 1

function duckCount() {
   return Array.prototype.slice.call(arguments).filter(function(obj){
       return Object.prototype.hasOwnProperty.call(obj, 'quack')
   }).length
    // SOLUTION GOES HERE
  }
  
  module.exports = duckCount;