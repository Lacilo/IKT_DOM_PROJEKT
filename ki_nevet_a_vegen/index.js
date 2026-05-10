const box = document.getElementById("box");
const time = document.getElementById("time");
const leaderboard = document.getElementById("leaderboard");

let startTime = 0;
let count = 0;

const roundEnd = (condition) => {
    if (condition === "win") {
        box.style.backgroundColor = "orange";
    } else {
        box.style.backgroundColor = "red";
        time.innerHTML = "Túl korai!";
    }
};

const startRound = () => {
    box.style.backgroundColor = "red";
    time.innerHTML = "";

    let changeTime = (Math.random() * 4) + 2;

    setTimeout(() => {
        box.style.backgroundColor = "green";
        startTime = Date.now();
    }, changeTime * 1000);
};

box.onclick = () => {
    if (box.style.backgroundColor === "green") {
        let reaction = Date.now() - startTime;

        time.innerHTML = reaction + " ms";

        count++;

        const row = leaderboard.insertRow();
        row.insertCell(0).innerHTML = count;
        row.insertCell(1).innerHTML = reaction;

        roundEnd("win");
    } else {
        roundEnd("lose");
    }
};

box.onmouseover = () => {
    startRound();
};