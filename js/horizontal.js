// ========================================
// Web招待状 横スライド
// ========================================
//
// ・1ページ = 1画面
// ・1スワイプ = 1ページ移動
// ・ページごとに写真を設定
// ・文字ごとに位置 / フォント / アニメーションを設定
// ・1ページ目は1文字ずつ
// ・それ以外はテキストブロックごと
//
// ========================================


// ========================================
// ページ設定
// ========================================

const pages = [

    // ====================================
    // 01 COVER
    // ====================================

    {
        id: "cover",
        name: "HOME<br>(ホーム)",
        image: "/images/image1.jpg",
        position: "center center",

        texts: [

            {
                text: "TAKUMA & MARIE",

                // 位置
                top: "12%",
                left: "10%",

                // フォント
                fontFamily: "'Great Vibes', cursive",
                fontSize: "clamp(24px, 5vw, 42px)",
                fontWeight: "400",

                // 色
                color: "#ffffff",

                // 文字間
                letterSpacing: "3px",

                // アニメーション
                animation: "fadeUp",

                // 表示開始
                delay: 300,

                // 1文字ごとの間隔
                charDelay: 70,

                // 1文字ずつ表示
                textAnimation: "char"
            },


            {
                text: "WEDDING INVITATION",

                top: "19%",
                left: "10%",

                fontFamily: "Arial, sans-serif",
                fontSize: "11px",

                color: "#ffffff",

                letterSpacing: "4px",

                animation: "fade",

                delay: 1200,

                charDelay: 40,

                textAnimation: "char"
            },


            {
                text: "2027.01.30",

                bottom: "12%",
                left: "10%",

                fontFamily: "Arial, sans-serif",
                fontSize: "13px",

                color: "#ffffff",

                letterSpacing: "3px",

                animation: "fadeUp",

                delay: 1700,

                charDelay: 60,

                textAnimation: "char"
            }

        ]
    },


    // ====================================
    // 02 MESSAGE
    // ====================================

    {
        id: "message",
        name: "Message<br>(メッセージ)",
        image: "/images/image2.jpg",
        position: "30% center",

        texts: [

            {
                text: "MESSAGE",

                top: "14%",
                left: "10%",

                fontFamily: "Arial, sans-serif",
                fontSize: "12px",

                color: "#ffffff",

                letterSpacing: "4px",

                animation: "fadeUp",

                delay: 300,

                textAnimation: "paragraph"
            },


            {
                text: "大切な皆さまへ",

                top: "25%",
                left: "10%",

                fontFamily: "'Noto Serif JP', serif",
                fontSize: "clamp(16px, 4vw, 22px)",

                color: "#ffffff",

                letterSpacing: "2px",

                animation: "fadeUp",

                delay: 800,

                textAnimation: "paragraph"
            },


            {
                text: "私たちの新しい一日に\nぜひ立ち会ってください。",

                top: "36%",
                left: "10%",
                width: "80%",

                fontFamily: "'Noto Serif JP', serif",
                fontSize: "clamp(14px, 3.5vw, 19px)",

                color: "#ffffff",

                letterSpacing: "2px",
                lineHeight: "2",

                animation: "fadeUp",

                delay: 1300,

                textAnimation: "paragraph"
            }

        ]
    },


    // ====================================
    // 03 OUR DAYS
    // ====================================

    {
        id: "ourDays",
        name: "Profile<br>(プロフィール)",
        image: "/images/image3.jpg",
        position: "30% center",

        texts: [
            {
                text: "OurDays",

                top: "15%",
                left: "10%",

                fontFamily: "Arial, sans-serif",
                fontSize: "12px",

                color: "#ffffff",

                letterSpacing: "4px",

                animation: "fadeUp",

                delay: 300,

                textAnimation: "paragraph"
            },


            {
                text: "TAKUMA",

                top: "30%",
                left: "10%",

                fontFamily: "Arial, sans-serif",
                fontSize: "clamp(24px, 6vw, 42px)",

                color: "#ffffff",

                letterSpacing: "4px",

                animation: "slideLeft",

                delay: 800,

                textAnimation: "paragraph"
            },


            {
                text: "MARIE",

                top: "42%",
                left: "10%",

                fontFamily: "Arial, sans-serif",
                fontSize: "clamp(24px, 6vw, 42px)",

                color: "#ffffff",

                letterSpacing: "4px",

                animation: "slideLeft",

                delay: 1200,

                textAnimation: "paragraph"
            }

        ]
    },


    // ====================================
    // 04 THE DAY
    // ====================================

    {
        id: "theDay",
        name: "The Day<br>(伝えたいこと)",
        image: "/images/image4.jpg",
        position: "30% center",
        countdown: true,

        texts: [

            {
                text: "THE DAY",

                top: "12%",
                left: "10%",

                fontFamily: "Arial, sans-serif",
                fontSize: "12px",

                color: "#ffffff",

                letterSpacing: "4px",

                animation: "fadeUp",

                delay: 300,

                textAnimation: "paragraph"
            },


            {
                text: "2027.01.30",

                top: "25%",
                left: "10%",

                fontFamily: "Arial, sans-serif",
                fontSize: "clamp(26px, 7vw, 48px)",

                color: "#ffffff",

                letterSpacing: "3px",

                animation: "scale",

                delay: 700,

                textAnimation: "paragraph"
            },


            {
                text: "SATURDAY",

                top: "34%",
                left: "10%",

                fontFamily: "Arial, sans-serif",
                fontSize: "13px",

                color: "#ffffff",

                letterSpacing: "4px",

                animation: "fade",

                delay: 1400,

                textAnimation: "paragraph"
            },


            {
                text: "Notre Dame KOBE",

                top: "42%",
                left: "10%",

                fontFamily: "'Noto Serif JP', serif",
                fontSize: "18px",

                color: "#ffffff",

                letterSpacing: "2px",

                animation: "fadeUp",

                delay: 1700,

                textAnimation: "paragraph"
            },
            
            {
                innerHTML: `
                    <div class="countdown">
                    <div class="countdown-days">
                        <span class="countdown-number" data-unit="days">00</span>
                        <span class="countdown-label">DAYS</span>
                    </div>

                    <div class="countdown-sub">
                        <div class="countdown-item">
                            <span class="countdown-number" data-unit="hours">00</span>
                            <span class="countdown-label">HOURS</span>
                        </div>

                        <div class="countdown-item">
                            <span class="countdown-number" data-unit="minutes">00</span>
                            <span class="countdown-label">MINUTES</span>
                        </div>

                        <div class="countdown-item">
                            <span class="countdown-number" data-unit="seconds">00</span>
                            <span class="countdown-label">SECONDS</span>
                        </div>
                    </div>
                    </div>
                    `,

                top: "50%",
                left: "10%",

                fontFamily: "Arial, sans-serif",
                //fontSize: "clamp(26px, 7vw, 48px)",

                color: "#ffffff",

                letterSpacing: "3px",

                animation: "scale",

                delay: 2000,

                textAnimation: "paragraphHTML"
            }

        ]
    },


    // ====================================
    // 05 INVITATION
    // ====================================

    {
        id: "invitation",
        name: "Invitation<br>(出欠確認)",
        image: "/images/image5.jpg",
        position: "30% center",

        texts: [

            {
                text: "INVITATION",

                top: "25%",
                left: "10%",

                fontFamily: "Arial, sans-serif",
                fontSize: "clamp(26px, 7vw, 48px)",

                color: "#ffffff",

                letterSpacing: "5px",

                animation: "fadeUp",

                delay: 300,

                textAnimation: "paragraph"
            }

        ],

        button: {

            text: "VIEW INVITATION",

            url: "../../rsvp.html",

            top: "40%",
            left: "10%"

        }
    },


    // ====================================
    // 06 ACCESS
    // ====================================

    {
        id: "access",
        name: "Access<br>(アクセス)",
        image: "/images/image6.jpg",
        position: "30% center",

        texts: [

            {
                text: "ACCESS",

                top: "25%",
                left: "10%",

                fontFamily: "Arial, sans-serif",
                fontSize: "clamp(26px, 7vw, 48px)",

                color: "#ffffff",

                letterSpacing: "5px",

                animation: "fadeUp",

                delay: 300,

                textAnimation: "paragraph"
            }

        ],

        button: {

            text: "VIEW ACCESS",

            url: "../../access.html",

            top: "40%",
            left: "10%"

        }
    },


    // ====================================
    // 07 FACILITY
    // ====================================

    {
        id: "facility",
        name: "Facility<br>(施設案内)",
        image: "/images/image7.jpg",
        position: "30% center",

        texts: [

            {
                text: "FACILITY",

                top: "25%",
                left: "10%",

                fontFamily: "Arial, sans-serif",
                fontSize: "clamp(26px, 7vw, 48px)",

                color: "#ffffff",

                letterSpacing: "5px",

                animation: "fadeUp",

                delay: 300,

                textAnimation: "paragraph"
            }

        ],

        button: {

            text: "VIEW FACILITY",

            url: "../../facility.html",

            top: "40%",
            left: "10%"

        }
    },


    // ====================================
    // 08 THANK YOU
    // ====================================

    {
        id: "thankyou",
        name: "And Then",
        image: "/images/image8.jpg",
        position: "30% center",

        texts: [

            {
                text: "AND THEN...",

                top: "25%",
                left: "10%",

                fontFamily: "Arial, sans-serif",
                fontSize: "clamp(20px, 5vw, 36px)",

                color: "#ffffff",

                letterSpacing: "5px",

                animation: "fadeUp",

                delay: 300,

                textAnimation: "paragraph"
            },


            {
                text: "Thank you for being\npart of our story.",

                top: "40%",
                left: "10%",
                width: "80%",

                fontFamily: "'Noto Serif JP', serif",
                fontSize: "clamp(16px, 4vw, 24px)",

                color: "#ffffff",

                letterSpacing: "2px",
                lineHeight: "1.8",

                animation: "fadeUp",

                delay: 1000,

                textAnimation: "paragraph"
            }

        ]
    }

];


// ========================================
// DOM
// ========================================

const slider = document.getElementById("slider");
const currentPageElement = document.getElementById("currentPage");
const totalPageElement = document.getElementById("totalPage");
const pageNumbersElement = document.getElementById("pageNumbers");
const swipeGuide = document.getElementById("swipeGuide");

const menuToggle = document.getElementById("menuToggle");
const menuOverlay = document.getElementById("menuOverlay");
const menuList = document.getElementById("menuList");
const menuClose = document.getElementById("menuClose");
const pageCounter = document.getElementById("pageCounter");

const weddingDate = new Date("2027-01-30T12:30:00+09:00");

let currentIndex = 0;
let isAnimating = false;
let swipeGuideTimer = null;


// ========================================
// ページ生成
// ========================================

function createPages() {

    pages.forEach((pageData, pageIndex) => {
        const page = document.createElement("section");
        page.classList.add("page");
        page.dataset.index = pageIndex;


        // -------------------------------
        // 背景画像
        // -------------------------------
        page.style.backgroundImage = `url("${pageData.image}")`;
        page.style.backgroundPosition = pageData.position || "center center";


        // -------------------------------
        // テキスト
        // -------------------------------

        pageData.texts?.forEach(textData => {
            const text = document.createElement("div");
            text.classList.add("page-text");


            // ===========================
            // 位置
            // ===========================
            if (textData.top) text.style.top = textData.top;
            if (textData.bottom) text.style.bottom = textData.bottom;
            if (textData.left) text.style.left = textData.left;
            if (textData.right) text.style.right = textData.right;
            if (textData.width) text.style.width = textData.width;


            // ===========================
            // フォント
            // ===========================
            if (textData.fontFamily) text.style.fontFamily = textData.fontFamily;
            if (textData.fontSize) text.style.fontSize = textData.fontSize;
            if (textData.fontWeight) text.style.fontWeight = textData.fontWeight;


            // ===========================
            // 見た目
            // ===========================
            if (textData.color) text.style.color = textData.color;
            if (textData.letterSpacing) text.style.letterSpacing = textData.letterSpacing;
            if (textData.lineHeight) text.style.lineHeight = textData.lineHeight;


            // ===========================
            // アニメーション種類
            // ===========================
            text.classList.add(`animation-${textData.animation || "fadeUp"}`);


            // ===========================
            // 表示開始時間
            // ===========================
            text.dataset.delay = textData.delay || 0;


            // ===========================
            // 文字生成
            // ===========================
            if (textData.textAnimation === "char") {
                // -----------------------
                // 1文字ずつ
                // -----------------------

                [...textData.text].forEach(
                    (char, charIndex) => {
                        const span = document.createElement("span");
                        span.classList.add("char");


                        // 改行
                        if (char === "\n") {
                            span.innerHTML =
                                "<br>";
                        } else {
                            span.textContent = char;
                        }


                        // -------------------
                        // 文字ごとの遅延
                        // -------------------
                        const charDelay = textData.charDelay || 50;
                        span.style.transitionDelay = `${charIndex * charDelay}ms`;
                        text.appendChild(span);
                    }
                );

            } else if(textData.textAnimation === "paragraphHTML"){

                // -----------------------
                // 段落 / ブロック単位
                // -----------------------
                const span = document.createElement("span");
                span.classList.add("paragraph");
                span.innerHTML = textData.innerHTML;
                text.appendChild(span);
            }else {

                // -----------------------
                // 段落 / ブロック単位
                // -----------------------
                const span = document.createElement("span");
                span.classList.add("paragraph");
                span.textContent = textData.text;
                text.appendChild(span);
            }
            page.appendChild(text);

        });



        // -------------------------------
        // ボタン
        // -------------------------------

        if (pageData.button) {
            const button = document.createElement("a");
            button.classList.add("page-button");
            button.textContent = pageData.button.text;
            button.href = pageData.button.url;

            if (pageData.button.top) button.style.top = pageData.button.top;
            if (pageData.button.bottom) button.style.bottom = pageData.button.bottom;
            if (pageData.button.left) button.style.left = pageData.button.left;
            if (pageData.button.right) button.style.right = pageData.button.right;

            page.appendChild(button);
        }

        // -------------------------------
        // ページを追加
        // -------------------------------
        slider.appendChild(page);
    });


    // -------------------------------
    // ページ数
    // -------------------------------
    totalPageElement.textContent = String(pages.length).padStart(2, "0");

    

    // -------------------------------
    // ページ番号を作成
    // -------------------------------
    createPageNumbers();


    // -------------------------------
    // メニューを作成
    // -------------------------------
    createMenu();

    // -------------------------------
    // 最初のページ
    // -------------------------------
    showPage(0, false);
}

// ========================================
// ページ番号作成
// ========================================

function createPageNumbers() {
    if (!pageNumbersElement) return;

    pageNumbersElement.innerHTML = "";

    pages.forEach((page, index) => {
        const number = document.createElement("div");
        number.classList.add("page-number");

        const label = document.createElement("span");
        label.classList.add("page-number-label");
        label.textContent = String(index + 1).padStart(2, "0");
        number.appendChild(label);

        // クリックでそのページへ
        number.addEventListener("click", () => {
            if (isAnimating) return;
            showPage(index);
        });

        pageNumbersElement.appendChild(number);
    });
}


// ========================================
// ページ表示
// ========================================

function showPage(index, animate = true) {

    // 範囲外
    if (
        index < 0 ||
        index >= pages.length
    ) {
        return;
    }


    // アニメーション中
    if (isAnimating) {
        return;
    }


    if (animate) {
        isAnimating = true;
    }


    const pageElements = document.querySelectorAll(".page");


    // ====================================
    // ページ位置
    // ====================================

    pageElements.forEach(
        (page, i) => {
            page.classList.remove("active", "prev");

            if (i < index) {
                page.classList.add("prev");
            }
            else if (i === index) {
                page.classList.add("active");
            }

        }
    );


    currentIndex = index;


    // ====================================
    // ページ番号
    // ====================================
    currentPageElement.textContent = String(currentIndex + 1).padStart(2, "0");
    
    // ページ番号の現在位置を更新
    const pageNumbers = document.querySelectorAll(".page-number");

    pageNumbers.forEach((number, i) => {
        number.classList.toggle("active", i === currentIndex);
    });


    // ====================================
    // 文字表示
    // ====================================
    const currentPage = pageElements[currentIndex];
    const texts = currentPage.querySelectorAll(".page-text");


    texts.forEach(text => {
        text.classList.remove("show");
        const delay = Number(text.dataset.delay) || 0;


        setTimeout(() => {
            // 別ページへ移動していたら無視
            if (
                currentIndex !== index
            ) {
                return;
            }

            text.classList.add("show");
        }, delay);

    });


    // ====================================
    // スライド終了
    // ====================================
    if (animate) {

        setTimeout(() => {
            isAnimating = false;
        }, 750);

    }
    resetSwipeGuide();

}


// ========================================
// 次のページ
// ========================================

function nextPage() {
    if (isAnimating) {
        return;
    }


    if (currentIndex >= pages.length - 1) {
        return;
    }


    showPage(currentIndex + 1);
}


// ========================================
// 前のページ
// ========================================
function prevPage() {
    if (isAnimating) {
        return;
    }

    if (currentIndex <= 0) {
        return;
    }

    showPage(currentIndex - 1);
}


// ========================================
// メニュー操作
// ========================================

function createMenu() {
    if (!menuList) return;

    menuList.innerHTML = "";

    pages.forEach((page, index) => {
        const item = document.createElement("button");

        item.className = "menu-item";
        item.innerHTML = `
            <span class="menu-number">
                ${String(index + 1).padStart(2, "0")}
            </span>

            <span class="menu-line"></span>

            <span class="menu-label">
                ${page.name}
            </span>
        `;

        item.addEventListener("click", () => {
            showPage(index);
            closeMenu();
        });

        menuList.appendChild(item);

    });
}

function openMenu() {

    if (!menuOverlay) return;

    menuOverlay.classList.add("open");
    pageCounter.classList.add("menu-open");

}


function closeMenu() {

    if (!menuOverlay) return;

    menuOverlay.classList.remove("open");
    pageCounter.classList.remove("menu-open");
}

// ========================================
// タッチ操作
// ========================================
let startX = 0;
let startY = 0;
let isTouching = false;
let isHorizontalSwipe = false;


// ----------------------------------------
// タッチ開始
// ----------------------------------------
slider.addEventListener(
    "touchstart",
    event => {
        if (isAnimating) return;
        const touch = event.touches[0];

        startX = touch.clientX;
        startY = touch.clientY;

        isTouching = true;
        isHorizontalSwipe = false;

    },
    {
        passive: true
    }
);


// ----------------------------------------
// 指を動かしている途中
// ----------------------------------------

slider.addEventListener(
    "touchmove",
    event => {
        if (!isTouching || isAnimating) return;

        const touch = event.touches[0];

        const diffX = touch.clientX - startX;
        const diffY = touch.clientY - startY;


        // まだ方向が決まっていない場合
        if (!isHorizontalSwipe) {
            // 横方向が十分大きく、
            // 縦方向より明確に大きい場合だけ
            if (Math.abs(diffX) > 30 && Math.abs(diffX) > Math.abs(diffY) * 1.2) {
                isHorizontalSwipe = true;
            }
        }

        // 横スワイプ中は
        // ブラウザ側の横ジェスチャーを抑える
        if (isHorizontalSwipe) {
            event.preventDefault();
        }

    },
    {
        passive: false
    }
);


// ----------------------------------------
// タッチ終了
// ----------------------------------------
slider.addEventListener(
    "touchend",
    event => {
        if (!isTouching || isAnimating) return;

        isTouching = false;

        const touch = event.changedTouches[0];
        const diffX = touch.clientX - startX;
        const diffY = touch.clientY - startY;


        // --------------------------------
        // 横スワイプだけ判定
        // --------------------------------
        if (isHorizontalSwipe && Math.abs(diffX) >= 50 && Math.abs(diffX) > Math.abs(diffY) * 1.2) {
            // 左へスワイプ
            if (diffX < 0) {
                nextPage();
            }

            // 右へスワイプ
            else {
                prevPage();
            }
        }
        isHorizontalSwipe = false;
    }
);


// ========================================
// マウス操作
// ========================================
let mouseStartX = 0;
let mouseDown = false;

slider.addEventListener(
    "mousedown",
    event => {
        if (isAnimating) {
            return;
        }

        mouseStartX = event.clientX;
        mouseDown = true;
    }
);


slider.addEventListener(
    "mouseup",
    event => {
        if (!mouseDown || isAnimating) {
            return;
        }
        mouseDown = false;
        const diffX = event.clientX - mouseStartX;

        if (Math.abs(diffX) > 10) {
            if (diffX < 0) {
                nextPage();
            } else {
                prevPage();
            }
        }
    }
);


// ========================================
// キーボード
// ========================================

document.addEventListener(
    "keydown",
    event => {
        if (event.key ==="ArrowRight") {
            nextPage();
        }

        if (event.key === "ArrowLeft") {
            prevPage();
        }
    }
);

// ========================================
// タップ / クリックでページ移動
// ========================================

slider.addEventListener("click", event => {
    // ボタンなどをクリックした場合はページ移動しない
    if (event.target.closest("a, button")) {
        return;
    }

    // アニメーション中は操作しない
    if (isAnimating) return;

    const screenWidth = window.innerWidth;
    const clickX = event.clientX;

    // 画面の左半分 → 前ページ
    if (clickX < screenWidth / 2) {
        prevPage();
    }
    // 画面の右半分 → 次ページ
    else {
        nextPage();
    }
});


// ========================================
// MENUボタン操作
// ========================================

if (menuToggle) {
    menuToggle.addEventListener("click", () => {
        if (menuOverlay.classList.contains("open")) {
            closeMenu();
        } else {
            openMenu();
        }
    });
}


if (menuClose) {
    menuClose.addEventListener("click", () => { closeMenu(); });
}


// オーバーレイ部分をクリックしたら閉じる
if (menuOverlay) {
    menuOverlay.addEventListener("click", event => {
        if (event.target === menuOverlay) {
            closeMenu();
        }
    });
}

// ========================================
// COUNTDOWN
// ========================================
function updateCountdown() {
    const now = new Date();
    const diff = weddingDate.getTime() - now.getTime();
    const countdown = document.querySelector(".countdown");

    if (!countdown) return;


    // 結婚式日時を過ぎた場合
    if (diff <= 0) {
        countdown.querySelector('[data-unit="days"]').textContent = "00";
        countdown.querySelector('[data-unit="hours"]').textContent = "00";
        countdown.querySelector('[data-unit="minutes"]').textContent = "00";
        countdown.querySelector('[data-unit="seconds"]').textContent = "00";

        return;
    }


    const totalSeconds = Math.floor(diff / 1000);
    const days = Math.floor(totalSeconds / 86400);
    const hours =Math.floor((totalSeconds % 86400) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    countdown.querySelector('[data-unit="days"]').textContent = String(days).padStart(2, "0");
    countdown.querySelector('[data-unit="hours"]').textContent = String(hours).padStart(2, "0");
    countdown.querySelector('[data-unit="minutes"]').textContent = String(minutes).padStart(2, "0");
    countdown.querySelector('[data-unit="seconds"]').textContent = String(seconds).padStart(2, "0");
}

updateCountdown();

setInterval(
    updateCountdown,
    1000
);


// ========================================
// START
// ========================================
createPages();


// ========================================
// スワイプガイド
// ========================================
function resetSwipeGuide() {

    if (!swipeGuide) return;

    // いったん非表示
    swipeGuide.classList.remove("show");

    // 既存タイマーを解除
    clearTimeout(swipeGuideTimer);

    // 5秒後に表示
    swipeGuideTimer = setTimeout(() => { swipeGuide.classList.add("show");}, 5000);
}