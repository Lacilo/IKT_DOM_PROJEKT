class Dobokocka {
    constructor(imgId, value = 0) {
        this.value = value;
        this.imgId = imgId;
    }

    chageValue = (newValue = 0) => {
        if (newValue == 0) {
            this.value = Math.floor(Math.random() * 6) + 1;
        }
    }
}

const getLargerCube = (c1, c2) => {
    if(c1.value > c2.value) {
        return c1;
    }else if(c2.value > c1.value) {
        return c2;
    }else {
        return null;
    }
}