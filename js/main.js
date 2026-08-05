const menuBtn = document.getElementById("menuBtn");
const sideMenu = document.getElementById("sideMenu");
const overlay = document.getElementById("menuOverlay");

menuBtn.addEventListener("click", () => {

    menuBtn.classList.toggle("active");
    sideMenu.classList.toggle("show");
    overlay.classList.toggle("show");

});

overlay.addEventListener("click", closeMenu);

document.querySelectorAll(".side-menu a").forEach(link=>{

    link.addEventListener("click", closeMenu);

});

function closeMenu(){

    menuBtn.classList.remove("active");
    sideMenu.classList.remove("show");
    overlay.classList.remove("show");

}


//フォトギャラリー
const images = [
    "/images/top/gallery/photo1.jpg",
    "/images/top/gallery/photo2.jpg",
    "/images/top/gallery/photo3.jpg",
    "/images/top/gallery/photo4.jpg",
    "/images/top/gallery/photo5.jpg"
];

let current = 1;
const leftImage = document.getElementById("leftImage");
const centerImage = document.getElementById("centerImage");
const rightImage = document.getElementById("rightImage");

function render(){
    const left = (current - 1 + images.length) % images.length;
    const right = (current + 1) % images.length;

    leftImage.src = images[left];
    centerImage.src = images[current];
    rightImage.src = images[right];
}

function next(){
    current++;
    if(current >= images.length){
        current = 0;
    }
    render();
}

function prev(){
    current--;
    if(current < 0){
        current = images.length - 1;
    }
    render();
}
render();

document.getElementById("nextBtn").addEventListener("click",next);
document.getElementById("prevBtn").addEventListener("click",prev);

let startX = 0;
let currentX = 0;
let dragging = false;

const gallery = document.querySelector(".gallery-container");

function startDrag(x) {

    dragging = true;
    startX = x.clientX;

    gallery.setPointerCapture(x.pointerId);

}

function moveDrag(x){

    if (!dragging) return;

    currentX = x.clientX - startX;

    gallery.style.transform = `translateX(${currentX}px)`;

}

function endDrag() {
    if (!dragging) return;
    dragging = false;
    if (currentX < -80) {
        next();
    }
    else if (currentX > 80) {
        prev();
    }

    gallery.style.transform = "";
}

gallery.addEventListener("pointerdown", startDrag);
gallery.addEventListener("pointermove", moveDrag);
gallery.addEventListener("pointerup", endDrag);

gallery.addEventListener("touchstart", (e) => {
    startDrag(e.touches[0].clientX);
});

gallery.addEventListener("touchmove", (e) => {
    moveDrag(e.touches[0].clientX);
});

gallery.addEventListener("touchend", () => {
    endDrag();
});



//カウントダウン
const weddingDate = new Date("2027-01-30T12:30:00");

function updateCountdown(){
    const now = new Date();
    const diff = weddingDate - now;

    if(diff <= 0){
        return;
    }
    const days = Math.floor(diff / (1000*60*60*24));
    const hours = Math.floor(diff / (1000*60*60) % 24);
    const minutes = Math.floor(diff / (1000*60) % 60);
    const seconds = Math.floor(diff / 1000 % 60);

    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;

    //flip("days", days);
    //flip("hours", hours);
    //flip("minutes", minutes);
    //flip("seconds", seconds);

}

function flip(id, value){

    const card = document.getElementById(id);

    card.classList.remove("flip");

    void card.offsetWidth;

    card.querySelector(".top").textContent = value;
    card.querySelector(".bottom").textContent = value;

    card.classList.add("flip");

}

updateCountdown();

setInterval(updateCountdown,1000);




