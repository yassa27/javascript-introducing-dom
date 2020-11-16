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

var colourButton = document.querySelectorAll(".colPicker")
//console.dir(colourButton)

for(var i=0; i<colourButton.length; i++)
{
    console.dir(colourButton[i])
    colourButton[i].addEventListener("click", chgColour)
}

function chgColour(ev)
{
    console.info(ev.target.classList[0])
    var colourPicked = ev.target.classList[0] + "Black"
    var bodyElement = document.querySelector("body")
    if(colourPicked === "resetBack")
    {
        bodyElement.removeAttribute("class")
    }
    else
    { 
        bodyElement.setAttribute("class", colourPicked)
    }
    
}
})()


