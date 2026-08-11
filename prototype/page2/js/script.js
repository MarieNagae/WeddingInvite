const book = document.querySelector(".book");
const pages = document.querySelectorAll(".page");

let currentPage = 0;

let isDragging = false;

let startX = 0;
let startY = 0;

let activePage = null;
let flipDirection = null;

let didDrag = false;


/* =========================
   ページを次へ
========================= */

function nextPage() {

    if (currentPage >= pages.length - 1) {
        return;
    }

    pages[currentPage].style.transition =
        "transform 0.5s cubic-bezier(0.65, 0, 0.35, 1)";

    pages[currentPage].style.transform =
        "rotateY(-180deg)";

    currentPage++;
}


/* =========================
   ページを前へ
========================= */

function previousPage() {

    if (currentPage <= 0) {
        return;
    }

    currentPage--;

    pages[currentPage].style.transition =
        "transform 0.5s cubic-bezier(0.65, 0, 0.35, 1)";

    pages[currentPage].style.transform =
        "rotateY(0deg)";
}


/* =========================
   ポインター開始
   マウス / タッチ共通
========================= */

book.addEventListener("pointerdown", (e) => {

    startX = e.clientX;
    startY = e.clientY;

    isDragging = true;
    didDrag = false;

    flipDirection = null;
    activePage = null;

    /*
     * pointer capture
     *
     * 指やマウスが本の外に出ても
     * そのままドラッグを追跡できる
     */
    book.setPointerCapture(e.pointerId);

});


/* =========================
   ポインター移動
========================= */

book.addEventListener("pointermove", (e) => {

    if (!isDragging) {
        return;
    }

    const diffX = e.clientX - startX;
    const diffY = e.clientY - startY;


    /* -------------------------
       縦方向の動きは無視
    ------------------------- */

    if (
        !flipDirection &&
        Math.abs(diffY) > Math.abs(diffX)
    ) {
        return;
    }


    /* -------------------------
       少し動いたらドラッグ扱い
    ------------------------- */

    if (Math.abs(diffX) > 10) {
        didDrag = true;
    }


    /* =========================
       左へドラッグ
       → 次ページ
    ========================= */

    if (diffX < 0) {

        /*
         * すでに最後なら何もしない
         */
        if (currentPage >= pages.length - 1) {
            return;
        }


        flipDirection = "next";

        activePage = pages[currentPage];


        /*
         * ドラッグ中はアニメーションなし
         */
        activePage.style.transition = "none";


        const bookWidth = book.offsetWidth;


        /*
         * 左へ何px動いたかを
         * 0〜1に変換
         */
        let progress = -diffX / bookWidth;

        progress = Math.max(0, Math.min(1, progress));


        /*
         * 0 → -180°
         */
        activePage.style.transform =
            `rotateY(${-180 * progress}deg)`;

    }


    /* =========================
       右へドラッグ
       → 前ページ
    ========================= */

    else if (diffX > 0) {

        /*
         * 最初のページなら戻れない
         */
        if (currentPage <= 0) {
            return;
        }


        flipDirection = "previous";

        /*
         * 現在表示しているページではなく
         * 「ひとつ前のページ」を戻す
         */
        activePage = pages[currentPage - 1];


        /*
         * ドラッグ中はアニメーションなし
         */
        activePage.style.transition = "none";


        const bookWidth = book.offsetWidth;


        /*
         * 右へ何px動いたか
         */
        let progress = diffX / bookWidth;

        progress = Math.max(0, Math.min(1, progress));


        /*
         * -180° → 0°
         */
        const rotation = -180 + (180 * progress);


        activePage.style.transform =
            `rotateY(${rotation}deg)`;

    }

});


/* =========================
   ポインター終了
========================= */

book.addEventListener("pointerup", (e) => {

    if (!isDragging) {
        return;
    }

    isDragging = false;


    const diffX = e.clientX - startX;
    const bookWidth = book.offsetWidth;


    /* -------------------------
       ドラッグしていない
       → クリックとして扱う
    ------------------------- */

    if (!didDrag) {
        return;
    }


    /* =========================
       次ページ
    ========================= */

    if (flipDirection === "next") {

        let progress = -diffX / bookWidth;

        progress = Math.max(0, Math.min(1, progress));


        activePage.style.transition =
            "transform 0.5s cubic-bezier(0.65, 0, 0.35, 1)";


        /*
         * 半分以上なら完成
         */
        if (progress >= 0.5) {

            activePage.style.transform =
                "rotateY(-180deg)";

            currentPage++;

        }

        /*
         * 半分未満なら元に戻る
         */
        else {

            activePage.style.transform =
                "rotateY(0deg)";

        }

    }


    /* =========================
       前ページ
    ========================= */

    else if (flipDirection === "previous") {

        let progress = diffX / bookWidth;

        progress = Math.max(0, Math.min(1, progress));


        activePage.style.transition =
            "transform 0.5s cubic-bezier(0.65, 0, 0.35, 1)";


        /*
         * 半分以上戻したら
         * 前ページとして確定
         */
        if (progress >= 0.5) {

            activePage.style.transform =
                "rotateY(0deg)";

            currentPage--;

        }

        /*
         * 半分未満なら
         * 元の状態へ戻す
         */
        else {

            activePage.style.transform =
                "rotateY(-180deg)";

        }

    }


    flipDirection = null;
    activePage = null;

});


/* =========================
   pointercancel
========================= */

book.addEventListener("pointercancel", () => {

    isDragging = false;

    flipDirection = null;
    activePage = null;

});


/* =========================
   クリック
========================= */

book.addEventListener("click", (e) => {

    /*
     * ドラッグ後に発生するクリックは無視
     *
     * タッチパネルPCで
     * 「スワイプ → 勝手にクリック」
     * になるのを防ぐ
     */
    if (didDrag) {

        didDrag = false;

        return;
    }


    const rect = book.getBoundingClientRect();

    const clickX = e.clientX - rect.left;


    /*
     * 右半分 → 次ページ
     */
    if (clickX > rect.width / 2) {

        nextPage();

    }

    /*
     * 左半分 → 前ページ
     */
    else {

        previousPage();

    }

});