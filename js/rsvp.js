import { db } from "./firebase.js";
import { collection, addDoc } from "firebase/firestore"


const companionCheck = document.getElementById("companionCheck");
const companionArea = document.getElementById("companionArea");
const form = document.getElementById("rsvpForm");
const backLinkTop = document.getElementById("backLinkTop");
const backLinkBottom = document.getElementById("backLinkBottom");
const compAddressSame = document.getElementById("compAddressSame");
const compAddressArea = document.getElementById("compAddressArea");

//同伴チェックボタン押下
companionCheck.addEventListener("change", ()=>{
    companionArea.style.display = companionCheck.checked ? "block" : "none";
});


//同伴住所同上チェックボタン押下
compAddressSame.addEventListener("change", ()=>{
    compAddressArea.style.display = !compAddressSame.checked ? "block" : "none";
});


//回答ボタン押下
form.addEventListener("submit", async (e) => {
    e.preventDefault();

    //登録確認
    if (!confirm("ご回答を送信します。\nよろしいですか？")) {
        return;
    }

    const submitButton = document.getElementById("submitButton");
    const formData = Object.fromEntries(new FormData(form));
    const updateAt = new Date().toLocaleString("ja-JP");

    //連打抑止
    submitButton.disabled = true;
    submitButton.textContent = "送信中...";

    //登録処理
    try {
        await addDoc(collection(db, "rsvp"), {
            ...formData,
            updateAt: updateAt
        });
        
        window.location.href = "rsvpComplete.html";
    } catch (err) {
        console.error(err);
        alert("Firestore登録失敗");

        submitButton.disabled = false;
        submitButton.textContent = "回答する";
    }
});

//戻るボタン押下
backLinkTop.addEventListener("click", (e) => {
    // 確認ダイアログ
    if (!confirm("入力内容は保存されません。\nホーム画面へ戻りますか？")) {    
        e.preventDefault();
    }
});
backLinkBottom.addEventListener("click", (e) => {
    // 確認ダイアログ
    if (!confirm("入力内容は保存されません。\nホーム画面へ戻りますか？")) {    
        e.preventDefault();
    }
});



//郵便番号検索
const searchButton = document.getElementById("searchAddress");
const compSearchButton = document.getElementById("compSearchAddress");

//参加者住所
searchButton.addEventListener("click", async () => {
    const postalCode = document.getElementById("postalCode");
    const address = document.getElementById("address");
    searchAddress(postalCode, address);
});

//同伴者住所
compSearchButton.addEventListener("click", async () => {
    const postalCode = document.getElementById("compPostalCode");
    const address = document.getElementById("compAddress");
    searchAddress(postalCode, address);
});

//住所検索
async function searchAddress(postalCode, address){

    // ハイフン,スペースを除去
    const zip = postalCode.value.replace(/\D/g, "");

    if (zip.length !== 7) {
        alert("郵便番号は7桁で入力してください。");
        return;
    }

    try {
        const response = await fetch(
            `https://zipcloud.ibsnet.co.jp/api/search?zipcode=${zip}`
        );

        const data = await response.json();

        if (data.results) {
            const result = data.results[0];

            address.value =
                result.address1 +
                result.address2 +
                result.address3;
        } else {
            alert("住所が見つかりませんでした。");
        }

    } catch (err) {
        console.error(err);
        alert("住所検索に失敗しました。");
    }
};


//入力制限
const rules = {
    digitsOnly: value => value.replace(/\D/g, ""),
    removeControlChars: value => value.replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, ""),
    kanaOnly: value => value.replace(/[^\u3041-\u3096ー]/g, ""),
    nameOnly: value => value.replace(/[^\p{sc=Han}\p{sc=Hiragana}\p{sc=Katakana}\s　ー・]/gu,""),
    email: value => value.trim().replace(/\u3000/g, ""),
    trim: value => value.trim()
};

function setInputRestriction(element, ruleKeys, maxLength) {
    element.addEventListener("input", () => {
        let value = element.value;

        for (const key of ruleKeys) {
            value = rules[key](value);
        }

        if (maxLength) {
            value = value.slice(0, maxLength);
        }

        element.value = value;
    });
}

document.querySelectorAll("[data-rules]").forEach(element => {
    const ruleKeys = element.dataset.rules
        .split(",")
        .map(rule => rule.trim());

    const maxLength =
        element.maxLength > 0 ? element.maxLength : undefined;

    setInputRestriction(element, ruleKeys, maxLength);
});

