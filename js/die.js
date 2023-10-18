export class Die {
    constructor() {
        this.min = 0;
        this.max = 26;
    };
    getRandomNumber() {
        let index = Math.floor(Math.random() * (this.max - this.min + 1)) + this.min;
        this.max--;
        return index;
    };
};
