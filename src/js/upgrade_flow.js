class UpgradeFlow extends Flow {

    constructor() {
        super();
        console.log("Upgrade Constructed");
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

        console.log("############# UPGRADE START ############# ");
        console.log("upgrade:",event.upgradeName);
        console.log("money:",upgradeToBuy.price);
        console.log("############# UPGRADE END ############# ");

        context.money -= upgradeToBuy.price;
        upgradeToBuy.isActive = true; //updates reference that is used by context
    }


}