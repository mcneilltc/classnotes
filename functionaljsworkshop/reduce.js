// Use this function
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce

// Here is an example of array.reduce at work
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce#How_reduce()_works

// Explanation of arrow functions
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions

// Example on StackOverflow
// https://stackoverflow.com/a/5669730/1620794

var inputWords = ['Apple', 'Banana', 'Apple', 'Durian', 'Durian', 'Durian'];

  function countWords(inputWords) {
        // SOLUTION GOES HERE

        return inputWords.reduce(function(accumulator, currentValue, currentIndex, array) {
            console.log( accumulator);
            console.log( 'currentValue: ' + currentValue);
            console.log( 'currentIndex: ' + currentIndex);
            console.log( 'array: ' + array + "\n");

            // If the second parameter of the reduce function is specified,
            // it is used as the initial value of the accumulator. If the
            // accumulator is a number and your values are numbers, then this
            // initial value is added to the sum of the elements of the array.
            // If the initial value is an object (like {}), then the values of
            // the array are added as keys to the object and the number of times
            // that value occurs in the array becomes the value of that key
            // in the accumulator object.
            // Example: { Apple: 2, Banana: 1, Durian: 3 }
            // Apple is a value of the original array
            // Apple then becomes the key of a property in that object.
            // The value of the property with the key "Apple" is the number of
            // times "Apple" appears in the original array.
            accumulator[currentValue] = (accumulator[currentValue] || 0) + 1;
            return accumulator;
        },
        // this is the initial value of the accumulator
        {}
        );
      }
      console.log(countWords(inputWords));
      module.exports = countWords

      // computer answer

      function countWords(arr) {
        return arr.reduce(function(countMap, word) {
          countMap[word] = ++countMap[word] || 1 // increment or initialize to 1
          return countMap
        }, {}) // second argument to reduce initialises countMap to {}
      }
      
      module.exports = countWords