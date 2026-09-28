const infoData = {

    address: {
        icon: "🌎",
        title: "住所",
        text: "ノートルダム神戸<br><br>"

            + "〒650-0042"
            + " 兵庫県神戸市中央区波止場町7-3"

    },

    train: {
        icon: "🚄",
        title: "電車でお越しの方",
        text: "【新幹線】<br>"
            + "   新神戸駅よりお車で12分"
            + "   無料シャトルバスまたは、最寄りまで電車をご利用ください。<br>"

            + "【電車】"
            + "  ・地下鉄海岸線 みなと元町駅より 徒歩5分<br>"
            + "  ・阪急線 花隈駅より 徒歩6分<br>"
            + "  ・JR・阪神 元町駅より 徒歩10分<br>"
            + "  ・JR三ノ宮駅より 徒歩15分<br>"
            + "     （無料シャトルバスあり）<br>"
    },

    
    bus: {
        icon: "🚌",
        title: "無料シャトルバス",
        text: "下記時刻に各駅から無料シャトルバスがご利用いただけます<br><br>"

            + "★ノートルダム神戸 行き<br>"
            + "  【神戸三宮 発】<br>"
            + "      ・10分発/毎時<br>"
            + "      ・30分発/毎時<br>"
            + "      ・50分発/毎時<br><br>"
            + "  【新神戸 発】<br>"
            + "      ・00分発/毎時<br><br>"

            + "★ノートルダム神戸 発<br>"
            + "  【神戸三宮 行き】<br>"
            + "      ・10分発/毎時<br>"
            + "      ・50分発/毎時<br>"
            + "  【新神戸・神戸三宮 行き】<br>"
            + "      ・30分発/毎時<br>"
            + "  ※お開き後1時間以内のみご利用いただけます。<br><br>"
    },

    car: {
        icon: "🚙",
        title: "車でお越しの方",
        text: "車でお越しの方は専用駐車場をご利用いただけます。<br>"
            + "180台の駐車スペースがございます。<br>"
            + "ぜひご利用ください。<br><br>"

            + "※ルミナリエ開催期間中につき、<br>"
            + "  17時より一部区間で交通規制が行われます。<br>"
            + "  お車をご利用の際は、ご確認ください。<br>"
    },

    infomation: {
        icon: "ⓘ",
        title: "ご案内",
        text: "挙式開始15分前までにお越しいただけますと幸いです。"
    },

};


// 施設カード
document.querySelectorAll(".card[data-access]").forEach(card => {

    card.addEventListener("click", () => {

        const type = card.dataset.access;
        const access = infoData[type];

        if (!access) return;

        document.getElementById("modalIcon").textContent = access.icon;
        document.getElementById("modalTitle").textContent = access.title;
        document.getElementById("modalText").innerHTML = access.text;

        document.getElementById("infoModal").classList.add("show");

    });

});


// モーダルを閉じる
function closeaccess() {

    document.getElementById("infoModal").classList.remove("show");

}


// ×ボタン
document.querySelector(".modal-close").addEventListener("click", closeaccess);


// 背景タップ
document.querySelector(".modal-overlay").addEventListener("click", closeaccess);