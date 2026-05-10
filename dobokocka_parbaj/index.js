class Dobokocka {
    constructor(value = 0) {
        this.value = value;
    }

    chageValue = (newValue = 0) => {
        if (newValue == 0){
            this.value = Math.floor(Math.random() * 6) + 1;
        }
    }
}