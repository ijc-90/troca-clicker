class HiringFlow extends Flow {

    constructor() {
        super();
        console.log("Hiring Constructed");
    }

    work(context) {
        var self = this;
        // this.robots = context.robots.buy.concat(context.robots.sale).concat(context.robots.repair)


        // var hiringClicks = this.getQuantityOfEventsOfType(context.events, EVENTS.HIRING_CLICK);
        // console.log("hiring, ",hiringClicks);
        console.log(context);

        var hiringEvents = this.getHiringEvents(context.events);
        hiringEvents.forEach(function(event){
            self.hireRobot(event, context);    
        });
        return context;
    };

    getHiringEvents(events) {
        return events.filter(function(event){
            return event.type == EVENTS.HIRING_CLICK;
        });
    }

    hireRobot(event, context){
        var robotToHire = context.robots[event.robotName];
        if (robotToHire.baseCost > context.money){
            return;
        }
        context.money -= robotToHire.baseCost;
        robotToHire.quantity += 1; //updates reference that is used by context

    }


}