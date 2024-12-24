let numbers = [1,2,3,4,5,6,7,8]
let greaterThanFour = numbers.filter(function(element){
    return element>4
})

console.log(greaterThanFour)

// The filter function gives all the elements to the variable which satisfies the condition in the function