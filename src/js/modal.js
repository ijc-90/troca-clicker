class Modal {
    $el = null;
    gameloop;
    onClose = null;

    constructor() {
        $(document).ready(() => {
            this.$el = $('#modal');
            this.$el.find('.modal-button').click(() => this.close())
        })
        
    }

    show(title, text, gameloop, onClose) {
        this.gameloop = gameloop;
        this.gameloop.pause();
        this.onClose = onClose;
        this.$el.find('.modal-title').html(title);
        this.$el.find('.modal-text').html(text);
        const $container = this.$el.find('.modal-container');
        TweenMax.set($container, { scale: 1.25 });
        this.$el.show();
        TweenMax.to($container, 1, { scale: 1, ease:Elastic.easeOut })
    }

    close() {
        const $container = this.$el.find('.modal-container');
        TweenMax.to($container, 1, { scale: 0, ease:Elastic.easeIn, onComplete: () => {
            this.$el.hide();
            this.gameloop.resume();
            if (this.onClose) this.onClose()
        }});
    }
}

const modal = new Modal();