const panoramaWrapper =
    document.querySelector(".panorama-wrapper");


// ========================================
// メッセージ設定
// ========================================
//
// trigger = 横スクロール何％で書き始めるか
//
// ここに追加していくだけでOK
//

const messages = [
    {
        id: "messageStory1",
        trigger: 5
    },
    {
        id: "messageStory2",
        trigger: 6
    },
    {
        id: "messageDate",
        trigger: 20
    },
    {
        id: "messageTime",
        trigger: 20
    },
    {
        id: "messageVenue",
        trigger: 30
    }
];


// ========================================
// メッセージを準備
// ========================================

messages.forEach(message => {

    const element =
        document.getElementById(message.id);

    if (!element) return;


    // 元の文章を取得
    const text = element.textContent.trim();


    // 一旦空にする
    element.textContent = "";


    // 1文字ずつspanにする
    for (const char of text) {

        const span =
            document.createElement("span");


        // スペースが消えないようにする
        span.textContent =
            char === " "
                ? "\u00A0"
                : char;


        element.appendChild(span);
    }


    // 一度だけ実行するためのフラグ
    element.dataset.started = "false";

});


// ========================================
// 横スクロール
// ========================================

panoramaWrapper.addEventListener("scroll", () => {

    // スクロール可能な最大距離
    const maxScroll =
        panoramaWrapper.scrollWidth -
        panoramaWrapper.clientWidth;


    // 現在のスクロール位置を％にする
    const scrollPercent =
        maxScroll > 0
            ? (panoramaWrapper.scrollLeft / maxScroll) * 100
            : 0;


    // ====================================
    // 各メッセージをチェック
    // ====================================

    messages.forEach(message => {

        const element =
            document.getElementById(message.id);

        if (!element) return;


        // すでに書き始めていたら何もしない
        if (element.dataset.started === "true") {
            return;
        }


        // 指定位置まで来た？
        if (scrollPercent >= message.trigger) {

            // 二度と実行しない
            element.dataset.started = "true";


            // ====================================
            // 1文字ずつ書く
            // ====================================

            const characters =
                element.querySelectorAll("span");


            characters.forEach((char, index) => {

                setTimeout(() => {

                    char.classList.add("writing");

                }, index * 30);

            });

        }

    });

});
