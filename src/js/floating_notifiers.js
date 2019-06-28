class FloatingNotifier {

    $mainBalanceElement = null;

    constructor() {
        $(document).ready(() => {
            this.$mainBalanceElement = $(".js-money");
        })
    }

    mousePhone() {
        let flatingNotify = new FlatingNotify(null, '<img width="15" src="images/phone-black.png" /', () => {
            flatingNotify = null;
        })
    }

    elementText($el, text) {
        let flatingNotify = new FlatingNotify($el, text, () => {
            flatingNotify = null;
        })
    }

    mainBalance(text) {
        this.elementText(this.$mainBalanceElement, text)
    }

    mainBalanceRed(text) {
        this.elementText(this.$mainBalanceElement, `<span style='color: red;'>${text}</span>`)
    }

    mouseHiring() {
        let flatingNotify = new FlatingNotify(null, '<img width="25" src="images/seller.png" /', () => {
            flatingNotify = null;
        })
    }
}

const floatingNotifiers = new FloatingNotifier();