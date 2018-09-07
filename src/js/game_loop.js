class GameLoop {

	constructor(){
		this.viewIntegrator = new ViewIntegrator();

		this.context = {
			money : 500,
			cellphoneBuyPrice : 50,
			cellphoneRepairPrice : 40,
			cellphoneSalePrice : 100,
			geometricCostScale : 1.3,
			robots : {
				"buyer_one": { name: "buyer_one", type: "buy", baseCost: 120, quantity: 0, production: 1, salary: 20 },
				"buyer_two": { name: "buyer_two", type: "buy", baseCost: 1200, quantity: 0, production: 5, salary: 40 },
				"buyer_three": { name: "buyer_three", type: "buy", baseCost: 12000, quantity: 0, production: 25, salary: 120 },

				"repairer_one" : { name: "repairer_one", type: "repair", baseCost: 120, quantity: 0, production: 1, salary: 60 },
				"repairer_two" : { name: "repairer_two", type: "repair", baseCost: 1200, quantity: 0, production: 5, salary: 120 },
				"repairer_three" : { name: "repairer_three", type: "repair", baseCost: 12000, quantity: 0, production: 25, salary: 360 },

				"seller_one" : { name: "seller_one", type: "sale", baseCost: 120, quantity: 0, production: 1, salary: 20 },
				"seller_two" : { name: "seller_two", type: "sale", baseCost: 1200, quantity: 0, production: 5, salary: 40 },
				"seller_three" : { name: "seller_three", type: "sale", baseCost: 12000, quantity: 0, production: 25, salary: 120 },
			},
			upgrades: {
				"upgrade_buyer_one": { price: 2000, productionMultiplier: 2, robot: "buyer_one", isActive: false },
				"upgrade_buyer_two": { price: 5000, productionMultiplier: 3, robot: "buyer_two", isActive: false },
				"upgrade_buyer_three": { price: 100000, productionMultiplier: 4, robot: "buyer_three", isActive: false },

				"upgrade_repairer_one": { price: 2000, productionMultiplier: 2, robot: "repairer_one", isActive: false },
				"upgrade_repairer_two": { price: 5000, productionMultiplier: 3, robot: "repairer_two", isActive: false },
				"upgrade_repairer_three": { price: 100000, productionMultiplier: 4, robot: "repairer_three", isActive: false },

				"upgrade_seller_one": { price: 2000, productionMultiplier: 2, robot: "seller_one", isActive: false },
				"upgrade_seller_two": { price: 5000, productionMultiplier: 3, robot: "seller_two", isActive: false },
				"upgrade_seller_three": { price: 100000, productionMultiplier: 4, robot: "seller_three", isActive: false },
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
		this.events.push(new Event(EVENTS.BUY_CLICK));
	}

	repairClick() {
		this.events.push(EVENTS.REPAIR_CLICK);
	}

	saleClick() {
		this.events.push(new Event(EVENTS.SALE_CLICK));
	}

	hiringClick(robotName){
	    if ($("#".robotName).hasClass("disabled")) {
	        return;
        }
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