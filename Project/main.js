// Menu Section

document.querySelector("#open-nav-menu").addEventListener("click", function(){
    document.querySelector("header nav .wrapper").classList.add("nav-open");
});


document.querySelector("#close-nav-menu").addEventListener("click", function(){
    document.querySelector("header nav .wrapper").classList.remove("nav-open");
});

// Greeting Section

const greetingText = "Good Evening!!"
const weatherCondition = "rainy"
const userLocation = "Hyderabad"
let temperature = 22.98
let weatherText = `The weather is ${weatherCondition} in ${userLocation} and it's ${temperature.toFixed(1)}°C outside.`

document.querySelector("h1#greeting").innerHTML = greetingText
document.querySelector('p#weather').innerHTML = weatherText