class PhoneRain {

    INIT_NUMBER_ELEMENTS = 100
    $els = []
    $container = null;

    constructor() {
        $(document).ready(() => {
            this.$container = $(".click-container");
            this.buildElements();
            this.render();
            window.requestAnimationFrame(() => this.render());

        });
    }

    buildElements() {
        for (let i = 0; i < this.INIT_NUMBER_ELEMENTS; i++) {
            const sel = `el-phone-rain-${i}`;
            this.$container.append(`<img id='${sel}' class='phone-rain-el' src='images/phone.png' width='50' />`);
            const $el = $(`#${sel}`);
            TweenMax.set($el, { y: Math.random() * $(window).height(), x: Math.random() * $(window).width() })
            this.$els.push($el);
        }
    }

    render() {

        this.$els.forEach(function($el) {
            const y = $el.offset().top;
            const nextY = y > 100 ? y - 0.5 : $(window).height()
            TweenMax.set($el, { y: nextY });
        });
        window.requestAnimationFrame(() => this.render());
    }
}

(function() {
    var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
                                window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
    window.requestAnimationFrame = requestAnimationFrame;
  })();
  

new PhoneRain()