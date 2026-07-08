import { db } from "./firebase.js";
import { collection, getDocs } from "firebase/firestore";

const tbody = document.getElementById("guestList");

async function loadGuests() {

    const snapshot = await getDocs(collection(db, "rsvp"));

    snapshot.forEach((doc) => {

        const data = doc.data();

        tbody.innerHTML += `
            <tr>
                <td>${data.lastName} ${data.firstName}</td>
                <td>${data.attendance == "attend" ? "〇" : "×"}</td>
                <td>${data.side == "groom" ? "新郎側" : "新婦側"}</td>
                <td>${data.relation}</td>
                <td>${data.tell}</td>
            </tr>
        `;
    });

}

loadGuests();