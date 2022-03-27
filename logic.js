let burger = document.querySelector(".hamburger-lines");
let ul = document.querySelector("ul.menu-items");

let span1 = document.querySelector("span.line1");
let span2 = document.querySelector("span.line2");
let span3 = document.querySelector("span.line3");

burger.addEventListener("click",()=>{
    ul.classList.toggle("active")
    span1.classList.toggle("active")
    span2.classList.toggle("actived")
    span3.classList.toggle("activedd")
    
})