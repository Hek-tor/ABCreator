export class Alphabet {
    constructor() {
        this.Letters =
            ["A", "B", "C", "D", "E", "F", "G", "H",
                "I", "J", "K", "L", "M", "N", "Ñ", "O", "P",
                "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    };
    deleteIndex(position) {
        let removeThisIndex = 1;
        this.Letters.splice(position, removeThisIndex);
    };

    getAlphabet(index) {
        if (this.Letters.length > 0) {
            let selectLetter = this.Letters[index];
            this.deleteIndex(index);
            return selectLetter;
        };
        return 'Fin del juego';
    };
}