let array1 = [10, 20, "Janardhan", "Majji", true]
console.log(array1.length)

console.log("The firstElement is " + array1[0]);
console.log("The last Element is: "+ array1[array1.length-1]);

array1.push(69);
console.log(array1);

array1.unshift("Tillu")
console.log(array1)

array2 = [4,6,9]
console.log(array1.concat(array2))
array3 = array1.concat(array2)

console.log(array1)
console.log(array2)
console.log(array3)

console.log(typeof array1)