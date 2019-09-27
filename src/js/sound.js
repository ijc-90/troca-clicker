class ClickerSound {
    sound = null;
    sounds = ['../../sounds/troca_clicker_loop.mp3'];

    constructor() {
        this.sound = new Howl({
            src: this.sounds,
            autoplay: true,
            loop: true,
            volume: 0.4,
            onend: function() {
                console.log('Finished!');
            }
        });

        this.sound.play()
    }

}