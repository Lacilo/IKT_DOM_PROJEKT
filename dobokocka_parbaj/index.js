class Dobokocka {
    constructor(imgId, value = 0) {
        this.value = value;
        this.imgId = imgId;
    }

    changeValue = (changeValue = 0) => {
        if (changeValue == 0) {
            this.value = Math.floor(Math.random() * 6) + 1;
        }else{
            this.value = changeValue;
        }
    }

    displaySelf = (id = this.imgId) => {
        document.getElementById(id).src = `img/d${this.value}.png`;
    }
}

const getLargerCube = (c1, c2) => {
    if (c1.value > c2.value) {
        return c1;
    } 
    else if (c2.value > c1.value) {
        return c2;
    } 
    else {
        return null;
    }
}

const displayResult = (winnerCube) => {
    let resultText = "";

    if (winnerCube != null) {
        if (winnerCube.imgId == "cube-left") {
            resultText = `Bal nyert: ${d1.value} vs ${d2.value}`;
        } else {
            resultText = `Jobb nyert: ${d1.value} vs ${d2.value}`;
        }
    } else {
        resultText = `Döntetlen: ${d1.value} vs ${d2.value}`;
    }

    document.getElementById("result").innerHTML = resultText;
    addLog(resultText);
}

const rollAndDisplayCubes = (c1, c2) => {
    c1.changeValue();
    c1.displaySelf();

    c2.changeValue();
    c2.displaySelf();
}

const addLog = (text) => {
    document.getElementById("log").innerHTML += text + "<br>";
};

tortenet = [];

d1 = new Dobokocka("cube-left");
d1.changeValue(1);
d1.displaySelf();

d2 = new Dobokocka("cube-right");
d2.changeValue(2);
d2.displaySelf();

interval = null;

document.getElementById("roll-button").onclick = () => {
    if(interval !== null){
        clearInterval(interval);
    }

    document.getElementById("result").innerHTML = "";

    d1 = new Dobokocka("cube-left");
    d2 = new Dobokocka("cube-right");

    i = 0;

    interval = setInterval(() => {
        if (i != 10) {
            rollAndDisplayCubes(d1, d2);
            i++;
        }
        else{
            clearInterval(interval);
            displayResult(getLargerCube(d1, d2));
        }
        
    }, 100);    
}