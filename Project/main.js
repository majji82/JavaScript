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

const products = [
    {
      "title": "AstroFiction",
      "author": "John Doe",
      "price": 49.9,
      "image": "./assets/products/img6.png"
    },
    {
      "title": "Space Odissey",
      "author": "Marie Anne",
      "price": 35,
      "image": "./assets/products/img1.png"
    },
    {
      "title": "Doomed City",
      "author": "Jason Cobert",
      "price": 0,
      "image": "./assets/products/img2.png"
    },
    {
      "title": "Black Dog",
      "author": "John Doe",
      "price": 85.35,
      "image": "./assets/products/img3.png"
    },
    {
      "title": "My Little Robot",
      "author": "Pedro Paulo",
      "price": 0,
      "image": "./assets/products/img5.png"
    },
    {
      "title": "Garden Girl",
      "author": "Ankit Patel",
      "price": 45,
      "image": "./assets/products/img4.png"
    }
]

// Menu Section

function menuHandler(){
    document.querySelector("#open-nav-menu").addEventListener("click", function(){
        document.querySelector("header nav .wrapper").classList.add("nav-open");
    });


    document.querySelector("#close-nav-menu").addEventListener("click", function(){
        document.querySelector("header nav .wrapper").classList.remove("nav-open");
    });
}

// Greeting Section

function greetingHandler(){
    let currentHour = new Date().getHours()
    
    let greetingText;
    
    if(currentHour>=12 && currentHour<=15) greetingText = "Good AfterNoon!!"
    else if(currentHour>15 && currentHour<=18) greetingText = "Good Evening!!"
    else if(currentHour>18) greetingText = "Good Night!!"
    else if(currentHour>4 && currentHour<12) greetingText = "Good Morning!!"
    else{
        greetingText = "Welcome Batman"
    }
    
    const weatherCondition = "rainy"
    const userLocation = "Hyderabad"
    let temperature = 30
    let celsiusText = `The weather is ${weatherCondition} in ${userLocation} and it's ${temperature.toFixed(1)}°C outside.`
    let fahrText = `The weather is ${weatherCondition} in ${userLocation} and it's ${celsiusToFahrenheit(temperature).toFixed(1)}°F outside.`
    
    document.querySelector("h1#greeting").innerHTML = greetingText
    document.querySelector('p#weather').innerHTML = celsiusText
    
    // Temperature switch
    
    document.querySelector(".weather-group").addEventListener("click", function(event){
        console.log(event.target.id)
        if (event.target.id == "fahr"){
             document.querySelector('p#weather').innerHTML = fahrText
        }else if(event.target.id == "celsius"){
             document.querySelector('p#weather').innerHTML =  celsiusText
        }
    });
}

// Temperature Conversion

function celsiusToFahrenheit(temperature){
    return (temperature* 9/5)+32;
}

// Local time selection

function clockHandler(){
    setInterval(function(){
        let localTime = new Date();
        document.querySelector("span[data-time=hours]").innerHTML = localTime.getHours().toString().padStart(2, "0")
        document.querySelector("span[data-time=minutes]").innerHTML = localTime.getMinutes().toString().padStart(2, "0")
        document.querySelector("span[data-time=seconds]").innerHTML = localTime.getSeconds().toString().padStart(2, "0")
    }, 1000)
}

// Gallery Section

function galleryHandler(){
    let mainImage = document.querySelector("#gallery > img")
    mainImage.src = galleryImages[0].src
    mainImage.alt = galleryImages[0].alt
    
    let thumbnails = document.querySelector("#gallery .thumbnails");
    
    galleryImages.forEach(function(image, index){
        let thumb = document.createElement("img");
        thumb.src = image.src 
        thumb.alt = image.alt
        thumb.dataset.arrayIndex = index 
        thumb.dataset.selected = index === 0 ? true : false
    
        thumb.addEventListener("click", function(e){
            let selectedIndex =  e.target.dataset.arrayIndex
            let selectedImage =  galleryImages[selectedIndex]
            mainImage.src = selectedImage.src
            mainImage.alt = selectedImage.alt
    
            thumbnails.querySelectorAll("img").forEach(function(img){
                img.dataset.selected = false;
            })
    
            e.target.dataset.selected = true
        })
    
        thumbnails.appendChild(thumb)
    })
}

function populateProducts(productList){
    let productSection = document.querySelector(".products-area");
    productSection.textContent = "";
    // Run a loop through the products and create a HTML element for each of them (product-item)
    productList.forEach(function(product, index){
        // Create the HTML element for the individual product
        let productElm = document.createElement("div");
        productElm.classList.add("product-item");

        // Creating the product image
        let productImage = document.createElement("img");
        productImage.src = product.image
        productImage.alt = "Image for " + product.title
        
        // Create the product-details section
        let productDetails = document.createElement("div");
        productDetails.classList.add("product-details");

        // Create Product title, author, priceTitle and price
        let productTitle = document.createElement("h3");
        productTitle.classList.add("product-title");
        productTitle.append(product.title)

        let pAuthor = document.createElement("p")
        pAuthor.classList.add("product-author");
        pAuthor.append(product.author)

        let priceTitle = document.createElement("p");
        priceTitle.classList.add("price-title")
        priceTitle.append("Price")

        let productPrice = document.createElement("p")
        productPrice.classList.add("product-price");
        product.price == 0 ? productPrice.append("Free") : productPrice.append("$" + product.price.toFixed(2));

        // Append the product details
        productDetails.append(productTitle)
        productDetails.append(pAuthor)
        productDetails.append(priceTitle)
        productDetails.append(productPrice)

        // Add all child HTML elements
        productElm.append(productImage);
        productElm.append(productDetails)

        // Add individual product to product section
        productSection.append(productElm);

    });
}

function productsHandler(){
    let productSection = document.querySelector(".products-area");
    let freeProducts = products.filter(function(prod){
        const cost = prod.price;
        return cost<=0 || cost==undefined || cost==null || !cost
    })

    const paidProducts = products.filter(function(prod){
        const cost = prod.price;
        return cost>0
    })

    document.querySelector(".products-filter label[for=all] span.product-amount").textContent = products.length
    document.querySelector(".products-filter label[for=paid] span.product-amount").textContent = paidProducts.length
    document.querySelector(".products-filter label[for=free] span.product-amount").textContent = freeProducts.length

    let productsFilter = document.querySelector(".products-filter");
    populateProducts(products)
    productsFilter.addEventListener("click", function(e){
        if(e.target.id === "all"){
            populateProducts(products);
        }
        else if(e.target.id === "free") populateProducts(freeProducts);
        else if(e.target.id ==="paid") populateProducts(paidProducts);
    })
}

// 
function footerHandler(){
    document.querySelector("footer").textContent = `@ ${new Date().getFullYear()} All rights reserved`
}

// Page Load

menuHandler()
greetingHandler()
clockHandler()
galleryHandler()
productsHandler()
footerHandler()