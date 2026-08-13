const message = document.getElementById("message");
const touchArea = document.getElementById("touchArea");

const guestName = "たくまくん";

let step = 0;
let canClick = false;


const photoArea = document.getElementById("photoArea");

function showPhoto() {
    photoArea.classList.add("show");
}

//指定秒数待ち
function wait(ms) {
    return new Promise(resolve => {
        setTimeout(resolve, ms);
    });
}

// メッセージを表示
function showMessage(text) {
    message.classList.remove("show");

    setTimeout(() => {

        message.textContent = text;
        message.classList.add("show");

    }, 500);
}


// 最初の演出
window.addEventListener("load", () => {
    // ★ 最初はクリックできない
    canClick = false;
    
    setTimeout(() => {
        showMessage("……ん？");
    }, 1000);

    setTimeout(async() => {
        showMessage("誰か来た……？");
        step = 1;
        await wait(800);
            
        // ★ クリック有効化
        canClick = true;
    }, 4000);
    
});


// クリック
touchArea.addEventListener("click", async() => {

    // まだクリック可能じゃなければ何もしない
    if (!canClick) {
        return;
    }

    // ★ クリックした瞬間に、もう一度クリックできないようにする
    canClick = false;

    // 「誰か来た……？」の後
    if (step === 1) {
        step = 2;

        showMessage("……！");
        await wait(800);

        
        showMessage("こんにちは。");
        await wait(2000);

        
        showMessage(`${guestName}……\nですね？`);
        await wait(2000);
        canClick = true;

        return;
    }


    // 名前確認後
    if (step === 2) {

        step = 3;

        showMessage("あ、触った。");
        await wait(2000);

        // 「あ、触った。」表示から2.5秒後
        showMessage("ちゃんと見てくれてる。");
        await wait(2500);

        
        // 「ちゃんと見てくれてる。」表示から2.5秒後
        showMessage("……ふふ。");
        await wait(3000);

        // 「……ふふ。」表示から3秒後
        showMessage("少しだけ、\n私の話を聞いてくれる？");
        await wait(2000);
        canClick = true;

        return;
    }


    // 「少しだけ、私の話を聞いてくれる？」の後
    if (step === 3) {
        step = 4;

        showMessage("ありがとう。");
        await wait(1500);

        showMessage("じゃあ、少しだけ\n付き合って。");
        await wait(2500);

        // 写真を表示
        showPhoto();
        await wait(2000);

        showMessage("これはね。");
        await wait(2500);

        showMessage("私たちが初めて出会った頃の写真。");
        await wait(2500);

        canClick = true;
        return;
    }
});

