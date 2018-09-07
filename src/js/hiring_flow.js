class HiringFlow extends Flow {

    constructor() {
        super();
    }

    work(context) {
        var self = this;
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
        robotToHire.baseCost = Math.floor(robotToHire.baseCost * context.geometricCostScale);
    }


}