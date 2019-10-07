class GameOverFlow extends Flow {

    constructor(gameloop) {
        super();
        this.iterationIndex = 0;
        this.countdownStarted = false;
        this.countdownFinnished = false;

    }

    work(context) {
        if (context.paused || !context.tutorialOver){
            return context;
        }

        this.iterationIndex++;
        if (this.iterationIndex >= context.ticksPerSecond){
            this.iterationIndex = 0;
            context = this.diminishCounter(context);
        }

/*
        if (context.tutorialOver && !this.countdownStarted){
            this.countdownStarted = true;
            var that = this;
            window.setInterval(function () {
                that.countdownFinnished = true;
            }, 3000); // 3 seconds
        }
        */

        if (this.countdownFinnished){
            context.gameOver = true;
            context.shouldPlayGameOverSound = context.gameOver;
        }
        return context;
    };

    diminishCounter(context){
        context.timeToGameOver--;
        if (context.timeToGameOver <= 0){
            this.countdownFinnished = true;
        }
        return context;
    }

}