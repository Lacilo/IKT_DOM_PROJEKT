const box = document.getElementById("box");
const time = document.getElementById("time");

const roundEnd = (condition) => {
    if(condition === "win"){
        box.style.backgroundColor = "orange";
    }else{

    }
}

const startRound = () => {
    box.style.backgroundColor = "red";
    time.innerHTML = "";

    changeTime = (Math.random() * 6) + 2;
    console.log(changeTime);

    setTimeout(() => {
        box.style.backgroundColor = "green";
    }, changeTime * 1000);
}

box.onclick = () => {
    if(box.style.backgroundColor === "green"){
        roundEnd("win");
    }else{
        roundEnd("lose");
    }
}

box.onmouseover = () => {
    box.style.backgroundColor = "red";
    time.innerHTML = 0;
    startRound();
}