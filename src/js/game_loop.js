class GameLoop {

    constructor(){
        this.viewIntegrator = new ViewIntegrator();

        this.context = {
            ticksPerSecond: 1,
            money : 300,
            cellphoneBuyPrice : 50,
            cellphoneRepairPrice : 40,
            cellphoneSalePrice : 100,
            geometricCostScale : 1.3,
            robots : {
                "buyer_one": { name: "buyer_one", type: "buy", baseCost: 150, quantity: 0, production: 1, salary: 120 },
                "buyer_two": { name: "buyer_two", type: "buy", baseCost: 10000, quantity: 0, production: 100, salary: 8000 },
                "buyer_three": { name: "buyer_three", type: "buy", baseCost: 11000000, quantity: 0, production: 8000, salary: 8800000 },

                "repairer_one" : { name: "repairer_one", type: "repair", baseCost: 150, quantity: 0, production: 1, salary: 120 },
                "repairer_two" : { name: "repairer_two", type: "repair", baseCost: 10000, quantity: 0, production: 70, salary: 8000 },
                "repairer_three" : { name: "repairer_three", type: "repair", baseCost: 11000000, quantity: 0, production: 5600, salary: 8800000 },

                "seller_one" : { name: "seller_one", type: "sale", baseCost: 150, quantity: 0, production: 1, salary: 120 },
                "seller_two" : { name: "seller_two", type: "sale", baseCost: 10000, quantity: 0, production: 100, salary: 8000 },
                "seller_three" : { name: "seller_three", type: "sale", baseCost: 11000000, quantity: 0, production: 8000, salary: 8800000 },
            },
            upgrades: {
                "upgrade_buyer_one": { price: 2000, productionMultiplier: 2, robot: "buyer_one", isActive: false },
                "upgrade_buyer_two": { price: 140000, productionMultiplier: 3, robot: "buyer_two", isActive: false },
                "upgrade_buyer_three": { price: 150000000, productionMultiplier: 4, robot: "buyer_three", isActive: false },

                "upgrade_repairer_one": { price: 2000, productionMultiplier: 2, robot: "repairer_one", isActive: false },
                "upgrade_repairer_two": { price: 140000, productionMultiplier: 3, robot: "repairer_two", isActive: false },
                "upgrade_repairer_three": { price: 150000000, productionMultiplier: 4, robot: "repairer_three", isActive: false },

                "upgrade_seller_one": { price: 2000, productionMultiplier: 2, robot: "seller_one", isActive: false },
                "upgrade_seller_two": { price: 140000, productionMultiplier: 3, robot: "seller_two", isActive: false },
                "upgrade_seller_three": { price: 150000000, productionMultiplier: 4, robot: "seller_three", isActive: false },
            },
            stockToRepair: 0,
            stockToSale: 0,
            events: [],
            iterationsToPaySalary: 60,
            gameOver: false,
            gameWon: false,
            probabilityOfDefectiveBuy : 0.7,

            moneySpentOnBuyingPhonesThisCicle: 0,
            amountOfPhonesBoughtThisCicle: 0,
            moneySpentRepairingThisCicle: 0,
            amountOfPhonesRepairedThisCicle: 0,
            moneyEarnedSellingThisCicle: 0,
            amountOfPhonesSoldThisCicle: 0,
            moneyPaidInSalaries: 0,
            salariesPaidThisTick: false,

        };
        
        this.pipeline = [
            new RepairFlow(),
            new BuyFlow(),
            new SaleFlow(),
            new HiringFlow(),
            new UpgradeFlow(),
            new SalaryFlow(),
        ];

        this.events = [];
    }

    tick() {
        if (this.context.gameOver){
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