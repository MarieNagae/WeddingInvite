const facilityData = {

    cloak: {
        icon: "🧥",
        title: "クローク・ロッカー",
        text: "お荷物やコートはクロークまたはロッカーにて、お預かりいたします。<br><br>"

            + "  【クローク】"
            + "<img src=\"images/facility/welcomLounge.png\" class=\"facility-detail-img\">"
            + " 1階 建物へ入っていただいて右手にあります。<br><br>"

            + "  【ロッカー】"
            + "<img src=\"images/facility/welcomLounge.png\" class=\"facility-detail-img\">"
            + " クローク受付の奥にございます。<br>"
            + " お靴なども保管できるサイズございます。<br>"
            + " 180台以上ございますので、気兼ねなくお使いください。<br>"
    },

    changing: {
        icon: "👗",
        title: "更衣室",
        text: "簡単なお着換えなど可能です。<br><br>"

            + "  【女性更衣室】"
            + "<img src=\"images/facility/welcomLounge.png\" class=\"facility-detail-img\">"
            + " 下記のご用意がございます。<br>"
            + "   ・フィッティングルーム：10室<br>"
            + "   ・パウダースペース<br><br>"

            + "  【男性更衣室】"
            + "<img src=\"images/facility/welcomLounge.png\" class=\"facility-detail-img\">"
            + " 男性用更衣室もございます。<br><br>"
            
            + " 気兼ねなくご利用ください。<br>"
    },

    parking: {
        icon: "🚗",
        title: "駐車場",
        text: "お車でお越しの方は専用駐車場をご利用いただけます。<br>"
            + "180台の駐車スペースがあります。<br>"
            + "ぜひご利用ください。<br><br>"
            + "※ルミナリエ開催期間中につき<br>"
            + "  17時以降、一部区間で交通規制が行われます。<br>"
            + "  お車でお越しの際は、ご確認ください。<br>"
    },


    barrier: {
        icon: "♿",
        title: "バリアフリー",
        text: "館内、全面バリアフリーとなっております。<br>"
            + "車椅子をご利用の方も安心してご来館いただけます。"
    },

 
    smoking: {
        icon: "🚬",
        title: "喫煙所",
        text: "館内の各階に喫煙スペースをご用意しております。<br>ご利用ください。"
    }


};


// 施設カード
document.querySelectorAll(".card[data-facility]").forEach(card => {

    card.addEventListener("click", () => {

        const type = card.dataset.facility;
        const facility = facilityData[type];

        if (!facility) return;

        document.getElementById("modalIcon").textContent = facility.icon;
        document.getElementById("modalTitle").textContent = facility.title;
        document.getElementById("modalText").innerHTML = facility.text;

        document.getElementById("infoModal").classList.add("show");

    });

});


// モーダルを閉じる
function closeFacility() {

    document.getElementById("infoModal").classList.remove("show");

}


// ×ボタン
document.querySelector(".modal-close").addEventListener("click", closeFacility);


// 背景タップ
document.querySelector(".modal-overlay").addEventListener("click", closeFacility);

function adjustBackButton() {

    const backButton = document.querySelector(".back-link");

    if (!backButton) return;

    const viewportHeight = window.visualViewport
        ? window.visualViewport.height
        : window.innerHeight;

    const windowHeight = window.innerHeight;

    // SafariのUIによって発生する表示領域の差
    const diff = windowHeight - viewportHeight;

    // 最低限確保したい下の余白
    const minBottom = 100;

    if (diff > 0) {
        // SafariのUIが表示されている状態
        backButton.style.bottom = `${minBottom + diff}px`;
    } else {
        // SafariのUIが隠れている状態
        backButton.style.bottom = `${minBottom}px`;
    }
}
