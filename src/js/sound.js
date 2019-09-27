class ClickerSound {
    VOLUME = 0.4;
    SOUND_PATH = '../../sounds';

    loopSound = null;
    clickSound = null;
    errorSound = null;
    gameOverSound = null;

    constructor() {
        this.loopSound = new Howl({
            src: [this.SOUND_PATH + '/troca_clicker_loop.mp3'],
            volume: this.VOLUME,
            autoplay: true,
            loop: true
        });

        this.clickSound = new Howl({
            src: [this.SOUND_PATH + '/troca_clicker_click.wav'],
            volume: this.VOLUME
        });

        this.errorSound = new Howl({
            src: [this.SOUND_PATH + '/troca_clicker_click_error.aiff'],
            volume: this.VOLUME
        });

        this.gameOverSound = new Howl({
            src: [this.SOUND_PATH + '/troca_clicker_game_over.wav'],
            volume: this.VOLUME
        });
    }

    gameOver() {
        this.stopLoop();
        this.playGameOver();
    }

    startGame() {
        this.playLoop();
    }

    playLoop() {
        this.loopSound.play();
    }

    stopLoop() {
        this.loopSound.stop();
    }

    playGameOver() {
        this.gameOverSound.play();
    }

    playClick() {
        this.clickSound.play();
    }

    playError() {
        this.errorSound.play();
    }
}