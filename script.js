const navlink = document.querySelector(".nav-link");
const menu = document.querySelector(".menubar");

function myFunc(){
if (navlink.style.display == "block") {

navlink.style.display = "none";
menu.classList.remove("open");

}
else {
navlink.style.display = "block";
menu.classList.add("open");

}
};


const slides = document.querySelectorAll('.slide');
const dot = document.querySelectorAll(".slide-dot");
var index = 1;

function currentSlide(n){

    index = n;
show(index);
}

function plusSlider(n){

    index += n;
    if(index > slides.length){
        index = 1;
    }
    if(index < 1){
        index = slides.length;
    }
show(index);
}

function auto(){
    index++;
    if(index > slides.length){
        index = 1;
    }
    show(index);
    setTimeout(auto, 5000);
}
auto();

function show(n){
    
    for(i= 0; i<slides.length; i++){
        slides[i].style.display = "none";
    }
    for(i = 0; i<dot.length; i++){
        dot[i].className = dot[i].className.replace("active");
    }
    slides[n-1].style.display = ("block");
    dot[n-1].className += " active";
}




