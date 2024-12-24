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
let temperature = 30
let fahrenheit = celsiusToFahrenheit(temperature)
let celsiusText = `The weather is ${weatherCondition} in ${userLocation} and it's ${temperature.toFixed(1)}°C outside.`
let fahrText = `The weather is ${weatherCondition} in ${userLocation} and it's ${fahrenheit.toFixed(1)}°F outside.`

document.querySelector("h1#greeting").innerHTML = greetingText
document.querySelector('p#weather').innerHTML = celsiusText

function celsiusToFahrenheit(temperature){
    return (temperature* 9/5)+32;
}


// My Code for celsius to fahrenheit conversion

/*

document.querySelector(".weather-group").addEventListener("click", function(event){
    console.log(event.target.id)
    if (event.target.id == "fahr"){
         document.querySelector('p#weather').innerHTML = `The weather is ${weatherCondition} in ${userLocation} and it's ${fahrenheit.toFixed(1)}°F outside.`
    }else if(event.target.id == "celsius"){
         document.querySelector('p#weather').innerHTML =  `The weather is ${weatherCondition} in ${userLocation} and it's ${temperature.toFixed(1)}°C  outside.`
    }
});

*/

// Instructor Code

document.querySelector(".weather-group").addEventListener("click", function(event){
    console.log(event.target.id)
    if (event.target.id == "fahr"){
         document.querySelector('p#weather').innerHTML = fahrText
    }else if(event.target.id == "celsius"){
         document.querySelector('p#weather').innerHTML =  celsiusText
    }
});

// Date and Time


setInterval(function(){
    let localTime = new Date();
    document.querySelector("span[data-time=hours]").innerHTML = localTime.getHours().toString().padStart(2, "0")
    document.querySelector("span[data-time=minutes]").innerHTML = localTime.getMinutes().toString().padStart(2, "0")
    document.querySelector("span[data-time=seconds]").innerHTML = localTime.getSeconds().toString().padStart(2, "0")
}, 1000)

// Image Gallery - My Code

/*document.querySelector("img[data-array-index='0']").addEventListener("click", function(){
    document.querySelector("img[data-array-index='0']").setAttribute("data-selected", "true")
    document.querySelector("img[data-array-index='1']").removeAttribute("data-selected")
    document.querySelector("img[data-array-index='2']").removeAttribute("data-selected")
    document.getElementById("gallery").getElementsByTagName("img")[0].setAttribute("src", "./assets/gallery/image1.jpg")
})

document.querySelector("img[data-array-index='1']").addEventListener("click", function(){
    document.querySelector("img[data-array-index='1']").setAttribute("data-selected", "true")
    document.querySelector("img[data-array-index='0']").removeAttribute("data-selected")
    document.querySelector("img[data-array-index='2']").removeAttribute("data-selected")
    document.getElementById("gallery").getElementsByTagName("img")[0].setAttribute("src", "./assets/gallery/image2.jpg")
})

document.querySelector("img[data-array-index='2']").addEventListener("click", function(){
    document.querySelector("img[data-array-index='2']").setAttribute("data-selected", "true")
    document.querySelector("img[data-array-index='0']").removeAttribute("data-selected")
    document.querySelector("img[data-array-index='1']").removeAttribute("data-selected")
    document.getElementById("gallery").getElementsByTagName("img")[0].setAttribute("src", "./assets/gallery/image3.jpg")
})*/

// Instructor Code 

const galleryImages = [
    {
        src: "./assets/gallery/image1.jpg",
        alt: "Thumbnail Image 1"
    },
    {
        src: "./assets/gallery/image2.jpg",
        alt: "Thumbnail Image 2"
    },
    {
        src: "./assets/gallery/image3.jpg",
        alt: "Thumbnail Image 3"
    }
];

let mainImage = document.querySelector("#gallery > img")
mainImage.src = galleryImages[0].src
mainImage.alt = galleryImages[0].alt

let thumbnails = document.querySelector("#gallery .thumbnails");


// My Code

galleryImages.forEach(function(image, index){
    addEventListener("click", function(e){
        if(e.target.alt == "Thumbnail Image 1"){
            mainImage.src = galleryImages[0].src
            mainImage.alt = galleryImages[0].alt
            document.querySelector(`img[data-array-index="${index}"]`).setAttribute("data-selected", "true")
        }else if(e.target.alt == "Thumbnail Image 2"){
            mainImage.src = galleryImages[1].src
            mainImage.alt = galleryImages[1].alt
            document.querySelector(`img[data-array-index="${index}"]`).setAttribute("data-selected", "true")
        }else if(e.target.alt == "Thumbnail Image 3"){
            mainImage.src = galleryImages[2].src
            mainImage.alt = galleryImages[2].alt
            document.querySelector(`img[data-array-index="${index}"]`).setAttribute("data-selected", "true")
        }
    })
})

{/* <img
    src="./assets/gallery/image1.jpg"
    alt="Thumbnail Image 1"
    data-array-index="0"
    data-selected="true"
/> */}

//let thumbnails = document.querySelector("#gallery .thumbnails");

galleryImages.forEach(function(image, index){
    let thumb = document.createElement("img");
    thumb.src = image.src 
    thumb.alt = image.alt
    thumb.dataset.arrayIndex = index 
    thumb.dataset.selected = false 
    thumbnails.appendChild(thumb)
})