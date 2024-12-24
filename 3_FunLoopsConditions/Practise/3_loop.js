/*for(let i=0; i<=10; i+=6){
    console.log(i);
}*/

let animal = {
    name1: "Dog",
    gender: "Male"
};


// let len = animals.length
// for(let i=0; i<len; i++){
//     console.log(animals[i] + " " + typeof animals[i]);
// }

// console.log(animals + " " + typeof animals);

for(let index in animal) console.log(index + ": " + animal[index]);
