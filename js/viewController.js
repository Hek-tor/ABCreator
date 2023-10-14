export class ViewController {
    constructor() {
        this.text = document.getElementById('letter');
        this.register = document.getElementById('logRecord');
        this.record = [];
    };

    insertResult(newLetter) {
        const gameOverkey = 'Fin del juego';
        this.text.classList = 'randomLetter';
        this.text.innerHTML = newLetter;

        if (newLetter === gameOverkey) { this.gameOver(gameOverkey) }
        else {
            this.logLetter(newLetter);
        };
    };

    logLetter(newLetter) {
        this.record.push(newLetter);
        this.register.innerHTML = this.record;
    };

    gameOver(key) {
        this.text.innerHTML = `${key}`;
        this.text.classList.remove('randomLetter')
        Swal.fire({
            icon: 'success',
            title: 'Fin del juego',
            text: '¡Todas las letra fueron usadas!',
        });
    };
};
