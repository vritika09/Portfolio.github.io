let menuBtn = document.querySelector(".menu-btn");
let cancleBtn = document.querySelector(".cancle-btn");
let navBar = document.querySelector(".navbar");

menuBtn.onclick = function(){
    menuBtn.style.opacity = "0";
    menuBtn.style.pointerEvents = "none";
    navBar.classList.add("active");
}

cancleBtn.onclick = function(){
    menuBtn.style.opacity = "1";
    menuBtn.style.pointerEvents = "auto";
    navBar.classList.remove("active");
}



