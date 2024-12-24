console.log("Outside the timeout")

setTimeout(function(){
    console.log("Inside the timeout");
}, 3000)

setInterval(function(){
    console.log("Inside the timeout");
}, 1000)