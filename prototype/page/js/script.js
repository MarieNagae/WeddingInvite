const pages = document.querySelectorAll(".page");

let currentPage = 0;

let startX = 0;
let startY = 0;

let isDragging = false;


/* =========================
   次のページ
========================= */

function nextPage() {

    if (currentPage >= pages.length - 1) {
        return;
    }

    pages[currentPage].classList.add("flipped");

    currentPage++;
}


/* =========================
   前のページ
========================= */

function previousPage() {

    if (currentPage <= 0) {
        return;
    }

    currentPage--;

    pages[currentPage].classList.remove("flipped");
}


/* =========================
   タッチ開始
========================= */

document.addEventListener("touchstart", (e) => {

    const touch = e.touches[0];

    startX = touch.clientX;
    startY = touch.clientY;

    isDragging = true;

}, { passive: true });


/* =========================
   タッチ終了
========================= */

document.addEventListener("touchend", (e) => {

    if (!isDragging) {
        return;
    }

    const touch = e.changedTouches[0];

    const endX = touch.clientX;
    const endY = touch.clientY;

    const diffX = endX - startX;
    const diffY = endY - startY;

    isDragging = false;


    // 縦方向の操作なら無視
    if (Math.abs(diffY) > Math.abs(diffX)) {
        return;
    }


    // 左へスワイプ
    if (diffX < -50) {
        nextPage();
    }


    // 右へスワイプ
    if (diffX > 50) {
        previousPage();
    }

}, { passive: true });


/* =========================
   PC：クリック
========================= */

document.addEventListener("click", (e) => {

    const screenWidth = window.innerWidth;

    if (e.clientX > screenWidth / 2) {

        nextPage();

    } else {

        previousPage();

    }

});