// ========================================
// Gallery
// ========================================

const viewport = document.querySelector(".gallery-viewport");
const track = document.querySelector(".gallery-track");
const items = document.querySelectorAll(".gallery-item");
const lightbox = document.querySelector(".gallery-lightbox");
const lightboxImage = document.querySelector(".gallery-lightbox-image img");
const lightboxClose = document.querySelector(".gallery-lightbox-close");


// ========================================
// 状態
// ========================================

let currentIndex = 0;

let startX = 0;
let currentTranslate = 0;
let startTranslate = 0;

let isDragging = false;
let hasMoved = false;
let tappedItem = null;



// ========================================
// 写真1枚分の幅を取得
// ========================================

function getSlideWidth() {

    const item = items[0];

    const style = getComputedStyle(track);
    const gap = parseFloat(style.gap) || 0;

    return item.offsetWidth + gap;
}


// ========================================
// 中央に配置する位置を計算
// ========================================

function getCenterPosition(index) {

    const viewportWidth = viewport.offsetWidth;
    const itemWidth = items[index].offsetWidth;

    const slideWidth = getSlideWidth();

    return (
        viewportWidth / 2
        - itemWidth / 2
        - slideWidth * index
    );
}


// ========================================
// 写真を移動
// ========================================

function moveTo(index, animate = true) {

    currentIndex = index;

    const position = getCenterPosition(currentIndex);

    currentTranslate = position;

    track.style.transition =
        animate
            ? "transform 0.35s ease"
            : "none";

    track.style.transform =
        `translateX(${position}px)`;


    // 中央の写真をactiveにする
    items.forEach((item, i) => {

        item.classList.toggle(
            "active",
            i === currentIndex
        );

    });
}


// ========================================
// 初期表示
// ========================================

window.addEventListener("load", () => {

    moveTo(0, false);

});


// ========================================
// Pointer Down
// ========================================
viewport.addEventListener("pointerdown", (event) => {

    if (event.target.closest(".gallery-arrow")) {
        return;
    }

    isDragging = true;
    hasMoved = false;

    // 押した瞬間に写真を記憶
    tappedItem = event.target.closest(".gallery-item");

    startX = event.clientX;
    startTranslate = currentTranslate;

    track.style.transition = "none";

    viewport.classList.add("dragging");

    viewport.setPointerCapture(event.pointerId);

});

// ========================================
// Pointer Move
// ========================================

viewport.addEventListener("pointermove", (event) => {

    if (!isDragging) {
        return;
    }

    // 最初に触った位置から何px動いたか
    const deltaX =
        event.clientX - startX;

    if (Math.abs(deltaX) > 10) {
        hasMoved = true;
    }

    // 動かした分だけ移動
    currentTranslate =
        startTranslate + deltaX;
    
    track.style.transform =
        `translateX(${currentTranslate}px)`;

});

// ========================================
// Pointer Up
// ========================================
viewport.addEventListener("pointerup", (event) => {

    if (!isDragging) {
        return;
    }

    isDragging = false;

    viewport.classList.remove("dragging");


    // どれだけ動いたか
    const delta =
        currentTranslate - startTranslate;


    const swipeThreshold = 50;


    // ====================================
    // スワイプ
    // ====================================

    if (delta < -swipeThreshold) {

        currentIndex++;

    }

    else if (delta > swipeThreshold) {

        currentIndex--;

    }


    // ====================================
    // ループ範囲
    // ====================================

    if (currentIndex < 0) {
        currentIndex = items.length - 1;
    }

    if (currentIndex >= items.length) {
        currentIndex = 0;
    }


    // ====================================
    // 写真を中央へ
    // ====================================

    moveTo(currentIndex, true);


    // ====================================
    // タップ判定
    // ====================================

    if (!hasMoved && tappedItem) {

        const image =
            tappedItem.querySelector("img");

        if (image) {
            openLightbox(image.src);
        }

    }

});

// ========================================
// Pointer Cancel
// ========================================

viewport.addEventListener("pointercancel", () => {

    if (!isDragging) {
        return;
    }

    isDragging = false;

    viewport.classList.remove("dragging");

    moveTo(currentIndex, true);

});

// ========================================
// ボタン
// ========================================

const prevButton =
    document.querySelector(".gallery-prev");

const nextButton =
    document.querySelector(".gallery-next");


// 次の写真
nextButton.addEventListener("click", () => {

    currentIndex++;

    if (currentIndex >= items.length) {
        currentIndex = 0;
    }

    moveTo(currentIndex, true);

});


// 前の写真
prevButton.addEventListener("click", () => {

    currentIndex--;

    if (currentIndex < 0) {
        currentIndex = items.length - 1;
    }

    moveTo(currentIndex, true);

});

// ========================================
// ウィンドウサイズ変更
// ========================================

window.addEventListener("resize", () => {

    moveTo(currentIndex, false);

});

// ========================================
// Lightboxを開く
// ========================================

function openLightbox(src) {
    console.log("Lightbox OPEN:", src);
    lightboxImage.src = src;

    lightbox.classList.add("open");

    lightbox.setAttribute(
        "aria-hidden",
        "false"
    );

    document.body.style.overflow = "hidden";

}

// ========================================
// Lightboxを閉じる
// ========================================

function closeLightbox() {

    lightbox.classList.remove("open");

    lightbox.setAttribute(
        "aria-hidden",
        "true"
    );

    document.body.style.overflow = "";

}


// 閉じるボタン
lightboxClose.addEventListener(
    "click",
    closeLightbox
);


// 背景をクリックしても閉じる
lightbox.addEventListener(
    "click",
    (event) => {

        if (event.target === lightbox) {

            closeLightbox();

        }

    }
);