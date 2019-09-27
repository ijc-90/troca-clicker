var Bot = (function() {

    var containers = {}

    function addBotSprite(containerClass, name) {
        var $container;
        if (!containers[containerClass]) {
            containers[containerClass] = $(containerClass);
        }

        $container = containers[containerClass];

        $container.append(getContent(name));
    }

    function getContent(name) {
        return '<div class="bot-sprite ' + name + '"> \
                        \
                </div>\
        ';
    }
    
    return {
        add: addBotSprite
    }
})();

