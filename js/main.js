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