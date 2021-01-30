const burger = document.querySelector(".burger")
const links = document.querySelector(".nav-links")
const heroButton = document.querySelector(".hero-button")

heroButton.addEventListener("click",joke)
burger.addEventListener("click",show)

function show(){
    links.classList.toggle("nav-open")
    burger.classList.toggle("toggle")
}

function joke(){
    alert("The button is there just for the view sorry xD")
}