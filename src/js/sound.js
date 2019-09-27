class ClickerSound {
    VOLUME = 0.4;
    SOUND_PATH = '../../sounds';

    loopSound = null;
    clickSound = null;

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
    }

    playLoop() {
        this.loopSound.play();
    }

    playClick() {
        this.clickSound.play();
    }
}