import { db } from "./firebase.js";
import { collection, addDoc } from "firebase/firestore";

const data = JSON.parse(sessionStorage.getItem("rsvpData"));

document.querySelectorAll("[data-field]").forEach(element => {
    const key = element.dataset.field;
    element.textContent = data[key] ?? "";
});


const sendButton = document.getElementById("sendButton");

sendButton.addEventListener("click", async () => {

    sendButton.disabled = true;
    sendButton.textContent = "送信中...";

    try {

        await addDoc(collection(db, "rsvp"), {
            ...data,
            updateAt: new Date().toLocaleString("ja-JP")
        });

        // 一時データ削除
        sessionStorage.removeItem("rsvpData");

        window.location.href = "rsvpComplete.html";

    } catch(err){

        console.error(err);

        alert("登録に失敗しました。");

        sendButton.disabled = false;
        sendButton.textContent = "回答を送信";
    }

});

document.getElementById("backButton").addEventListener("click", () => {
    window.location.href = "rsvp.html";
});