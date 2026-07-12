import { db } from "./firebase.js";
import { collection, addDoc } from "firebase/firestore"


const check = document.getElementById("companionCheck");
const area = document.getElementById("companionArea");
const form = document.getElementById("rsvpForm");
const backLink = document.getElementById("backLink");

//同伴チェックボタン押下
check.addEventListener("change", ()=>{
    area.style.display = check.checked ? "block" : "none";
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

        button.disabled = false;
        button.textContent = "回答する";
    }
});

//戻るボタン押下
backLink.addEventListener("click", (e) => {
    // 確認ダイアログ
    if (!confirm("入力内容は保存されません。\nホーム画面へ戻りますか？")) {    
        e.preventDefault();
    }
});
