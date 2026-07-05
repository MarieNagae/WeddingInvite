const check = document.getElementById("companionCheck");
const area = document.getElementById("companionArea");

check.addEventListener("change", ()=>{
    area.style.display = check.checked ? "block" : "none";
});

