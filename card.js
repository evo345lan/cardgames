const allCards = document.querySelectorAll(".card");
const scoreBoard = document.getElementById("score");
let cardsme = [];
let cardsyou = [];
//関数
function updateScore() {
    scoreBoard.textContent =
        "勝ち: " + win +
        "　負け: " + lose +
        "　引き分け: " + draw;
}

for (let i = 0; i < 3; i++) {
    cardsme[i] = Math.floor(Math.random() * 100);
    cardsyou[i] = Math.floor(Math.random() * 100);
}

let win = 0;
let lose = 0;
let draw = 0;
let round = 0;

// 相手カードは隠す
for (let i = 0; i < 3; i++) {
    allCards[i].textContent = "？";
}

// 自分のカード表示
for (let i = 0; i < 3; i++) {
    allCards[i + 3].textContent = cardsme[i];
}

// 自分のカードにクリックイベントをつける
for (let i = 0; i < 3; i++) {
    allCards[i + 3].addEventListener("click", function () {

        if (allCards[i + 3].textContent === "") return;
        if (round >= 3) return;

        let myCard = cardsme[i];
        let enemyCard = cardsyou[round];

        // 相手カードを公開
        allCards[round].textContent = enemyCard;
        
        //勝敗判定
        if (myCard > enemyCard) {
            alert("勝ち！");
            win++;
        } else if (myCard < enemyCard) {
            alert("負け！");
            lose++;
        } else {
            alert("引き分け！");
            draw++;
        }
        updateScore();
        // 使ったカードを消す
        allCards[i + 3].textContent = "";

        round++;

        // 3回終わったら結果表示
        if (round === 3) {
            setTimeout(() => {
                alert(
                    "リザルト\n勝ち: " + win +
                    
                    "\n負け: " + lose +
                    "\n引き分け: " + draw
                );
            }, 300);
        }
   
    });
}