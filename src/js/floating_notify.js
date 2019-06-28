class FlatingNotify {
    idName = `floating-notify-${new Date().getUTCMilliseconds()}`;
    $el = null;
    text = '';
    $window = $('body')
    onComplete = () => {}
    type = 'mouse'
    TYPE_MOUSE = 'mouse'
    TYPE_EL = 'el'

    getTemplate(text, pos) {
        return `
            <span 
                class='floating-notify' 
                id='${this.idName}'
            >
                ${text}
            </span>
        `
    }

    constructor($el = null, text = '', onComplete) {
        this.$el = $el;
        this.text = text;
        this.type = (this.$el === null) ? this.TYPE_MOUSE : this.TYPE_EL;
        if (onComplete) {
            this.onComplete = onComplete;
        }

        this.$window.append(this.getTemplate(this.text));

        const initPosition = this.getInitPosition();
        const endPosition = this.getEndPosition(initPosition);

        TweenMax.set(`#${this.idName}`, initPosition);
        TweenMax.to(`#${this.idName}`, .75,  { ...endPosition, opacity: 0, onComplete:() => {
            $(`#${this.idName}`).remove()
            this.onComplete()
        } });
    }

    getInitPosition() {
        if (this.type ===  this.TYPE_MOUSE) {
            return this.getMousePosition();
        }

        return this.getElementPosition()
    }

    getMousePosition() {
        if ( event.pageX == null && event.clientX != null ) {
            var doc = document.documentElement, body = document.body;
            event.pageX = event.clientX + (doc && doc.scrollLeft || body && body.scrollLeft || 0) - (doc && doc.clientLeft || body && body.clientLeft || 0);
            event.pageY = event.clientY + (doc && doc.scrollTop  || body && body.scrollTop  || 0) - (doc   && doc.clientTop  || body && body.clientTop  || 0);
        }

        return {
            x: event.pageX,
            y: event.pageY - 10,
        };
    }

    getEndPosition(initPosition) {
        const randomPositive = Math.random() < 0.5 ? -1 : 1
        return {
            x: initPosition.x + (randomPositive * (Math.random() + 5)),
            y: initPosition.y - 25,
        }
    }

    getElementPosition() {
        return {
            x: this.$el.offset().left,
            y: this.$el.offset().top - 5,
        }
    }
}