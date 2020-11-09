// alert("Hello from here")

//IIFE
(function(){
    console.info("HELLO CONSOLE");
    console.dir(document)
    console.dir(document.getElementById)
    document.getElementById("myHeading").innerHTML = "Yassa's website"

    document.querySelector("nav ul li").setAttribute("class", "currentPage")
    document.querySelector("nav ul li").setAttribute("href", "http://google.co.uk")

    // document.getElementById("myTestEvent").onclick = function() {
    //     console.info("DOM event")

document.getElementById("myTestEvent").addEventListener("click", function(){
    console.info("HEllo from addlist")
})


})()


