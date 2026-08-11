const scene = document.querySelector(".scene");
const envelope = document.getElementById("envelope");
const letter = document.querySelector(".letter");

let isOpening = false;
let isReadyToGoHome = false;


// ====================
// 封筒をタップ
// ====================

envelope.addEventListener("click", () => {

    if (isOpening) {
        return;
    }

    isOpening = true;

    // フタを開く
    envelope.classList.add("open");


    // 手紙を表示 ＆ 封筒を下げる
    setTimeout(() => {

        letter.classList.add("show");

        envelope.classList.add("slide-down");

        scene.classList.add("opened");

    }, 1200);


    // 封筒を完全に消す
    setTimeout(() => {

        envelope.classList.add("hidden");

    }, 2700);


    // 手紙を全画面にする
    setTimeout(() => {

        letter.classList.add("zoom");

    }, 2900);


    // 手紙タップ可能
    setTimeout(() => {

        isReadyToGoHome = true;

        scene.classList.add("ready");

    }, 4500);

});


// ====================
// 手紙をタップ
// ====================

letter.addEventListener("click", () => {

    if (!isReadyToGoHome) {
        return;
    }

    // ページをめくる
    letter.classList.add("turn-page");

    // めくり終わってからHomeへ
    setTimeout(() => {

        window.location.href = "../../index_default.html";

    }, 1000);

});