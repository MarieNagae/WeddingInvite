
const guestName = "たくまくん";

let step = 0;
let canClick = false;


const message = document.getElementById("message");
const touchArea = document.getElementById("touchArea");
const screen = document.getElementById("screen");
const photoArea = document.getElementById("photoArea");


function showPhoto() {
    photoArea.classList.add("show");
}

function showPhotoMode() {
    screen.classList.add("photo-mode");
    photoArea.classList.add("show");
}
async function changePhoto(src) {

    // いったん写真を消す
    photo.classList.add("fade-out");
    await wait(1000);

    // 写真を変更
    photo.src = src;

    // 新しい写真を表示
    photo.classList.remove("fade-out");
}

function whiteOut() {
    screen.classList.add("white-out");
    document.body.classList.add("white-out");
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
        step = 3;
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
        step = 8;

        showMessage("ありがとう.");
        await wait(1500);
        showMessage("じゃあ、少しだけ\n付き合って。");
        await wait(2500);

        // 写真モードへ
        showPhotoMode();
        await wait(2000);
        showMessage("これはね。");
        await wait(2500);
        showMessage("私たちが初めて出会った頃の写真。");
        await wait(2000);

        canClick = true;
        return;
    }


    // 写真を見せた後
    if (step === 4) {
        step = 5;

        showMessage("まだ、この先に何があるかなんて\n知らなかった。");
        await wait(2500);
        changePhoto("images/top/wedding.jpg");
        await wait(1500);
        showMessage("でも……");
        await wait(2000);
        showMessage("気づいたら、今日まで来てた。");
        await wait(2500);

        canClick = true;
        return;
    }

    // 「気づいたら、今日まで来てた。」の後
    if (step === 5) {
        step = 6;

        showMessage("……でも……");
        await wait(2500);
        showMessage("ここまで来られたのは、\n私たちだけじゃない。");
        await wait(3000);
        changePhoto("images/top/kobe-panorama.jpg");
        await wait(1500);
        showMessage("あなたがいてくれたから。");
        await wait(3000);
        showMessage("だから……");
        await wait(2500);

        canClick = true;
        return;
    }


    // 「だから……」の後
    if (step === 6) {
        step = 7;

        showMessage(`${guestName}。`);
        await wait(2500);
        showMessage("今日は、あなたに\n伝えたいことがあるの。");
        await wait(3000);
        showMessage("最後まで、\n聞いてくれる？");
        await wait(2000);

        canClick = true;
        return;
    }

    // 「最後まで、聞いてくれる？」の後
    if (step === 7) {
        step = 8;

        showMessage("ありがとう。");
        await wait(2000);
        showMessage("実はね……");
        await wait(2500);
        showMessage("私たち、結婚します。");
        await wait(3500);
        showMessage("そして……");
        await wait(2500);

        canClick = true;
        return;
    }

    // 「そして……」の後
    if (step === 8) {
        step = 9;

        showMessage(`${guestName}を、\n私たちの結婚式に招待したい。`);
        await wait(3500);

        // 次の演出へ
        showMessage("WEDDING INVITATION");
        await wait(3000);

        // 一瞬白くする
        whiteOut();
        await wait(800);

        // ここで通常の招待状画面へ
        window.location.href = "../../index_default.html";

        return;
    }
});

