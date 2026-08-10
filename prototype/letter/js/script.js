const envelope = document.getElementById("envelope");
const tapText = document.getElementById("tapText");


envelope.addEventListener("click", () => {
    // すでに開いていたら何もしない
    if (envelope.classList.contains("open")) {
        return;
    }

    // 封筒を開く
    envelope.classList.add("open");


    // フタが開く時間を待ってから
    // 手紙を封筒の外へ出す
    setTimeout(() => {

        envelope.classList.add("letter-out");

    }, 800);

});