export class ViewController {
    constructor() {
        this.text = document.getElementById('letter');
        this.container = document.getElementById('logRecord');
        this.boton = document.getElementById('btn_Create');
        this.record = [];
        this.gameController = 'Fin del juego';
    };

    insertResult(newLetter) {
        this.text.classList = 'randomLetter';
        this.text.innerHTML = newLetter;

        if (newLetter === this.gameController) { this.gameOver() }
        else {
            this.logLetter(newLetter);
        };
    };

    logLetter(newLetter) {
        this.record.push(newLetter);
        this.container.innerHTML = this.record;
    };

    gameOver() {
        this.text.classList.remove('randomLetter');
        return Swal.fire({
            icon: 'success',
            title: this.gameController,
            text: '¡Todas las letra fueron usadas!',
        });
    };
};
