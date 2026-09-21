// ========================================
// Gallery
// ========================================

const viewport = document.querySelector(".gallery-viewport");
const track = document.querySelector(".gallery-track");
const lightbox = document.querySelector(".gallery-lightbox");
const lightboxImage = document.querySelector(".gallery-lightbox-image img");
const lightboxClose = document.querySelector(".gallery-lightbox-close");


// ========================================
// 元の写真
// ========================================

const originalItems = Array.from(
    document.querySelectorAll(".gallery-item")
);

const originalCount = originalItems.length;


// ========================================
// 無限ループ用
// 3周分の写真を作る
// ========================================

// 元の写真を3セットにする
const originalHTML = track.innerHTML;

track.innerHTML =
    originalHTML +
    originalHTML +
    originalHTML;


// ========================================
// 全写真
// ========================================

const items = Array.from(
    document.querySelectorAll(".gallery-item")
);


// ========================================
// 状態
// ========================================

// 3周の真ん中からスタート
//
// 1 2 3 4 5 | 1 2 3 4 5 | 1 2 3 4 5
//             ↑
//            ここ
//
let currentIndex = originalCount;

let startX = 0;
let currentTranslate = 0;
let startTranslate = 0;

let isDragging = false;
let hasMoved = false;
let tappedItem = null;


// ========================================
// 写真1枚分の幅
// ========================================

function getSlideWidth() {

    const item = items[0];

    const style =
        getComputedStyle(track);

    const gap =
        parseFloat(style.gap) || 0;

    return item.offsetWidth + gap;
}


// ========================================
// 中央に配置する位置
// ========================================

function getCenterPosition(index) {

    const viewportWidth =
        viewport.offsetWidth;

    const itemWidth =
        items[index].offsetWidth;

    const slideWidth =
        getSlideWidth();

    return (
        viewportWidth / 2
        - itemWidth / 2
        - slideWidth * index
    );
}


// ========================================
// active更新
// ========================================

function updateActive() {

    items.forEach((item, i) => {

        item.classList.toggle(
            "active",
            i === currentIndex
        );

    });

}


// ========================================
// 写真を移動
// ========================================

function moveTo(
    index,
    animate = true,
    callback = null
) {

    currentIndex = index;

    const position =
        getCenterPosition(
            currentIndex
        );

    currentTranslate =
        position;

    track.style.transition =
        animate
            ? "transform 0.35s ease"
            : "none";

    track.style.transform =
        `translateX(${position}px)`;

    updateActive();


    // アニメーション終了後
    if (
        animate &&
        callback
    ) {

        track.addEventListener(
            "transitionend",
            callback,
            { once: true }
        );

    }

}


// ========================================
// 無限ループ位置調整
// ========================================

function checkLoop() {

    let newIndex = null;


    // ====================================
    // 左側のセットに入った
    // ====================================

    if (currentIndex < originalCount) {

        newIndex =
            currentIndex + originalCount;

    }


    // ====================================
    // 右側のセットに入った
    // ====================================

    else if (
        currentIndex >= originalCount * 2
    ) {

        newIndex =
            currentIndex - originalCount;

    }


    // ループ不要
    if (newIndex === null) {
        return;
    }


    // ====================================
    // ループ切り替え中だけ
    // activeアニメーションをOFF
    // ====================================

    items.forEach(item => {

        item.style.transition = "none";

    });


    // 同じ写真をactiveにする
    items.forEach((item, i) => {

        item.classList.toggle(
            "active",
            i === newIndex
        );

    });


    // ====================================
    // 同じ写真の位置へ移動
    // ====================================

    currentIndex = newIndex;

    const position =
        getCenterPosition(currentIndex);

    currentTranslate = position;

    track.style.transition = "none";

    track.style.transform =
        `translateX(${position}px)`;


    // ====================================
    // 次の通常操作から
    // transitionを元に戻す
    // ====================================

    requestAnimationFrame(() => {

        requestAnimationFrame(() => {

            items.forEach(item => {

                item.style.transition = "";

            });

        });

    });

}



// ========================================
// 初期表示
// ========================================

window.addEventListener(
    "load",
    () => {

        moveTo(
            originalCount,
            false
        );

    }
);


// ========================================
// Pointer Down
// ========================================

viewport.addEventListener(
    "pointerdown",
    (event) => {

        if (
            event.target.closest(
                ".gallery-arrow"
            )
        ) {
            return;
        }


        isDragging = true;
        hasMoved = false;


        // 押した写真を記憶
        tappedItem =
            event.target.closest(
                ".gallery-item"
            );


        startX =
            event.clientX;

        startTranslate =
            currentTranslate;


        track.style.transition =
            "none";


        viewport.classList.add(
            "dragging"
        );


        viewport.setPointerCapture(
            event.pointerId
        );

    }
);


// ========================================
// Pointer Move
// ========================================

viewport.addEventListener(
    "pointermove",
    (event) => {

        if (!isDragging) {
            return;
        }


        const deltaX =
            event.clientX - startX;


        if (
            Math.abs(deltaX) > 10
        ) {

            hasMoved = true;

        }


        // ドラッグした分だけ移動
        currentTranslate =
            startTranslate +
            deltaX;


        track.style.transform =
            `translateX(${currentTranslate}px)`;

    }
);


// ========================================
// Pointer Up
// ========================================

viewport.addEventListener(
    "pointerup",
    (event) => {

        if (!isDragging) {
            return;
        }


        isDragging = false;

        viewport.classList.remove(
            "dragging"
        );


        const delta =
            currentTranslate -
            startTranslate;


        const swipeThreshold = 50;


        // ====================================
        // 次へ
        // ====================================

        if (
            delta < -swipeThreshold
        ) {

            currentIndex++;

        }


        // ====================================
        // 前へ
        // ====================================

        else if (
            delta > swipeThreshold
        ) {

            currentIndex--;

        }


        // ====================================
        // 中央へ移動
        // ====================================

        moveTo(
            currentIndex,
            true,
            checkLoop
        );


        // ====================================
        // タップ判定
        // ====================================

        if (
            !hasMoved &&
            tappedItem
        ) {

            const image =
                tappedItem.querySelector(
                    "img"
                );


            if (image) {

                openLightbox(
                    image.src
                );

            }

        }

    }
);


// ========================================
// Pointer Cancel
// ========================================

viewport.addEventListener(
    "pointercancel",
    () => {

        if (!isDragging) {
            return;
        }


        isDragging = false;

        viewport.classList.remove(
            "dragging"
        );


        moveTo(
            currentIndex,
            true
        );

    }
);


// ========================================
// ボタン
// ========================================

const prevButton =
    document.querySelector(
        ".gallery-prev"
    );

const nextButton =
    document.querySelector(
        ".gallery-next"
    );


// ========================================
// 次の写真
// ========================================

nextButton.addEventListener(
    "click",
    () => {

        currentIndex++;

        moveTo(
            currentIndex,
            true,
            checkLoop
        );

    }
);


// ========================================
// 前の写真
// ========================================

prevButton.addEventListener(
    "click",
    () => {

        currentIndex--;

        moveTo(
            currentIndex,
            true,
            checkLoop
        );

    }
);


// ========================================
// ウィンドウサイズ変更
// ========================================

window.addEventListener(
    "resize",
    () => {

        moveTo(
            currentIndex,
            false
        );

    }
);


// ========================================
// Lightboxを開く
// ========================================

function openLightbox(src) {

    const sourceImage =
        tappedItem.querySelector(
            "img"
        );


    const rect =
        sourceImage.getBoundingClientRect();


    // Lightbox画像
    lightboxImage.src =
        src;


    // ====================================
    // 最初の位置
    // ====================================

    lightbox.classList.add(
        "open"
    );


    lightboxImage.parentElement.style.left =
        `${rect.left}px`;

    lightboxImage.parentElement.style.top =
        `${rect.top}px`;

    lightboxImage.parentElement.style.width =
        `${rect.width}px`;

    lightboxImage.parentElement.style.height =
        `${rect.height}px`;


    // ====================================
    // 中央へ拡大
    // ====================================

    requestAnimationFrame(() => {

        requestAnimationFrame(() => {

            const targetWidth =
                Math.min(
                    window.innerWidth * 0.88,
                    400
                );


            const targetHeight =
                Math.min(
                    window.innerHeight * 0.85,
                    window.innerHeight
                );


            const targetLeft =
                (
                    window.innerWidth -
                    targetWidth
                ) / 2;


            const targetTop =
                (
                    window.innerHeight -
                    targetHeight
                ) / 2;


            lightboxImage.parentElement.style.left =
                `${targetLeft}px`;

            lightboxImage.parentElement.style.top =
                `${targetTop}px`;

            lightboxImage.parentElement.style.width =
                `${targetWidth}px`;

            lightboxImage.parentElement.style.height =
                `${targetHeight}px`;

        });

    });


    // スクロール禁止
    document.body.style.overflow =
        "hidden";

}


// ========================================
// Lightboxを閉じる
// ========================================

function closeLightbox() {

    if (tappedItem) {

        const sourceImage =
            tappedItem.querySelector(
                "img"
            );


        const rect =
            sourceImage.getBoundingClientRect();


        // 元の写真へ戻す
        lightboxImage.parentElement.style.left =
            `${rect.left}px`;

        lightboxImage.parentElement.style.top =
            `${rect.top}px`;

        lightboxImage.parentElement.style.width =
            `${rect.width}px`;

        lightboxImage.parentElement.style.height =
            `${rect.height}px`;

    }


    setTimeout(() => {

        lightbox.classList.remove(
            "open"
        );


        lightbox.setAttribute(
            "aria-hidden",
            "true"
        );


        document.body.style.overflow =
            "";

    }, 450);

}


// ========================================
// Lightbox閉じるボタン
// ========================================

lightboxClose.addEventListener(
    "click",
    closeLightbox
);


// ========================================
// 背景クリックで閉じる
// ========================================

lightbox.addEventListener(
    "click",
    (event) => {

        if (
            event.target === lightbox
        ) {

            closeLightbox();

        }

    }
);
