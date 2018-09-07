class UpgradeFlow extends Flow {

    constructor() {
        super();
    }

    work(context) {
        var self = this;
        var upgradeEvents = this.getUpgradeEvents(context.events);
        upgradeEvents.forEach(function(event){
            self.buyUpgrade(event, context);    
        });
        return context;
    };

    getUpgradeEvents(events) {
        return events.filter(function(event){
            return event.type == EVENTS.UPGRADE_CLICK;
        });
    }

    buyUpgrade(event, context){
        var upgradeToBuy = context.upgrades[event.upgradeName];
        if (upgradeToBuy.price > context.money || upgradeToBuy.isActive){
            return;
        }


        context.money -= upgradeToBuy.price;
        upgradeToBuy.isActive = true; //updates reference that is used by context
        this.updateProductivyForRobots(upgradeToBuy, context.robots);
    }

    updateProductivyForRobots(upgrade, robots){
        for (var robotName in robots){
            if (upgrade.robot == robotName) {
                var robot = robots[robotName];
                robot.production = robot.production * upgrade.productionMultiplier;
            }
        }
    }


}