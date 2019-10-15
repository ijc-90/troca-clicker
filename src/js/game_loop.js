class GameLoop {

    constructor(){
        this.paused = false;
        this.viewIntegrator = new ViewIntegrator();
        this.clickerSound = new ClickerSound();

        this.context = {
            ticksPerSecond: 2,
            money: 100,
            cellphoneBuyPrice : 10,
            cellphoneRepairPrice : 0,
            cellphoneSalePrice : 12,
            geometricCostScale : 1.3,
            robots : {
                "buyer_one": { name: "buyer_one", type: "buy", baseCost: 50, quantity: 0, production: 1, salary: 7 },
                "buyer_two": { name: "buyer_two", type: "buy", baseCost: 200, quantity: 0, production: 4, salary: 21 },
                "buyer_three": { name: "buyer_three", type: "buy", baseCost: 800, quantity: 0, production: 16, salary: 70 },

                "repairer_one" : { name: "repairer_one", type: "repair", baseCost: 50, quantity: 0, production: 1, salary: 7 },
                "repairer_two" : { name: "repairer_two", type: "repair", baseCost: 200, quantity: 0, production: 4, salary: 21 },
                "repairer_three" : { name: "repairer_three", type: "repair", baseCost: 800, quantity: 0, production: 16, salary: 70 },

                "seller_one" : { name: "seller_one", type: "sale", baseCost: 50, quantity: 0, production: 1, salary: 7 },
                "seller_two" : { name: "seller_two", type: "sale", baseCost: 200, quantity: 0, production: 4, salary: 21 },
                "seller_three" : { name: "seller_three", type: "sale", baseCost: 800, quantity: 0, production: 16, salary: 70 },
            },
            upgrades: {
                "upgrade_buyer_one": { price: 100, productionMultiplier: 2, robot: "buyer_one", isActive: false },
                "upgrade_buyer_two": { price: 400, productionMultiplier: 2, robot: "buyer_two", isActive: false },
                "upgrade_buyer_three": { price: 1600, productionMultiplier: 3, robot: "buyer_three", isActive: false },

                "upgrade_repairer_one": { price: 100, productionMultiplier: 2, robot: "repairer_one", isActive: false },
                "upgrade_repairer_two": { price: 400, productionMultiplier: 2, robot: "repairer_two", isActive: false },
                "upgrade_repairer_three": { price: 1600, productionMultiplier: 3, robot: "repairer_three", isActive: false },

                "upgrade_seller_one": { price: 100, productionMultiplier: 2, robot: "seller_one", isActive: false },
                "upgrade_seller_two": { price: 400, productionMultiplier: 2, robot: "seller_two", isActive: false },
                "upgrade_seller_three": { price: 1600, productionMultiplier: 3, robot: "seller_three", isActive: false },
            },
            stockToRepair: 0,
            stockToSale: 0,
            events: [],
            iterationsToPaySalary: 90,
            gameOver: false,
            shouldPlayGameOverSound: false,
            gameWon: false,
            probabilityOfDefectiveBuy : 1,
            amountOfPhonesTotal: 0,
            moneySpentOnBuyingPhonesThisCicle: 0,
            amountOfPhonesBoughtThisCicle: 0,
            moneySpentRepairingThisCicle: 0,
            amountOfPhonesRepairedThisCicle: 0,
            moneyEarnedSellingThisCicle: 0,
            amountOfPhonesSoldThisCicle: 0,
            moneyPaidInSalaries: 0,
            salariesPaidThisTick: false,
            showBuyFlow: true,
            showRepairFlow: false,
            showSaleFlow: false,
            showRobots: false,
            skipTutorial: false,
        };
        
        this.pipeline = [
            new RepairFlow(),
            new BuyFlow(),
            new SaleFlow(),
            new HiringFlow(),
            new UpgradeFlow(),
            new SalaryFlow(),
            new TutorialFlow(this),
        ];

        this.events = [];
    }

    tick() {
        if (this.context.gameOver){
            return;
        }

        if(this.paused){
            return;
        }

        var oldContext = JSON.parse(JSON.stringify(this.context));

        this.context.events = this.events;
        this.events = [];

        this.context = this.pipeline.reduce( function(context, flowStep){
            return flowStep.work(context);
        }, this.context);

        return this.viewIntegrator.generateViewRawData(oldContext, this.context);
    }

    pause(){
        this.paused = true;
    }

    resume(){
        this.paused = false;
    }

    buyClick() {
        floatingNotifiers.mousePhone();
        this.events.push(new Event(EVENTS.BUY_CLICK));
    }

    repairClick() {
        floatingNotifiers.mousePhone();
        this.events.push(EVENTS.REPAIR_CLICK);
    }

    saleClick() {
        floatingNotifiers.mousePhone();
        this.events.push(new Event(EVENTS.SALE_CLICK));
    }

    hiringClick(robotName){
        if ($("#".robotName).hasClass("disabled")) {
            return;
        }

        floatingNotifiers.mouseHiring();
        var event = new Event(EVENTS.HIRING_CLICK);
        event.robotName = robotName;
        this.events.push(event);
    }

    upgradeClick(upgradeName){
        if ($("#".robotName).hasClass("disabled")) {
            return;
        }

        var event = new Event(EVENTS.UPGRADE_CLICK);
        event.upgradeName = upgradeName;
        this.events.push(event);
    }



}