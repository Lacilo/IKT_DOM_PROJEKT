const box = document.getElementById("box");
const time = document.getElementById("time");

const startRound = () => {
    box.style.backgroundColor = "red";
    time.innerHTML = "";
}

box.onclick = () => {
    box.style.backgroundColor = "green";
}