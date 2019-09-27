var Bot = (function() {

    var containers = {}, margin = 30;

    function addBotSprite(containerClass, name) {
        var $container;
        if (!containers[containerClass]) {
            containers[containerClass] = $(containerClass);
        }

        $container = containers[containerClass];

        $container.append(getContent(name));
    }

    function getRandomPosition() {
        var WIDTH = 100 - (margin / 2);
        return {
            x: (margin / 2) + Math.random() * WIDTH,
            y: (margin / 2) + Math.random() * WIDTH,
        }
    }

    function getContent(name) {
        var randomPosition = getRandomPosition();
        return '<div class="bot-sprite ' + name + '" style="background-image: url(' + name + ');top:' + randomPosition.y + '%;left:' + randomPosition.x + '%;"> \
                        \
                </div>\
        ';
    }
    
    return {
        add: addBotSprite
    }
})();

