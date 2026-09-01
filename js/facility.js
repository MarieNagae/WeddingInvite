const facilityData = {

    cloak: {
        icon: "🧥",
        title: "クローク",
        text: "お荷物やコートはクロークにてお預かりいたします。"
    },

    smoking: {
        icon: "🚬",
        title: "喫煙所",
        text: "館内に喫煙スペースをご用意しております。"
    },

    baby: {
        icon: "👶",
        title: "授乳室・おむつ替え",
        text: "小さなお子様連れの方も安心してご利用いただけます。"
    },

    barrier: {
        icon: "♿",
        title: "バリアフリー",
        text: "車椅子をご利用の方も安心してご来館いただけます。"
    },

    parking: {
        icon: "🚗",
        title: "駐車場",
        text: "お車でお越しの方は専用駐車場をご利用いただけます。"
    }

};


function openFacility(type) {

    const facility = facilityData[type];

    if (!facility) return;

    document.getElementById("modalIcon").textContent = facility.icon;
    document.getElementById("modalTitle").textContent = facility.title;
    document.getElementById("modalText").textContent = facility.text;

    document.getElementById("facilityModal").classList.add("show");

}


function closeFacility() {

    document.getElementById("facilityModal").classList.remove("show");

}