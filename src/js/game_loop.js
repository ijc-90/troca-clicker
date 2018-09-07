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
				"buyer_one": { name: "buyer_one", type: "buy", baseCost: 100, quantity: 0, production: 1, salary: 10 },
				"buyer_two": { name: "buyer_two", type: "buy", baseCost: 100, quantity: 0, production: 5, salary: 20 },
				"repairer_one" : { name: "repairer_one", type: "repair", baseCost: 100, quantity: 0, production: 1, salary: 30 },
				"repairer_two" : { name: "repairer_two", type: "repair", baseCost: 100, quantity: 0, production: 5, salary: 50 },
				"seller_one" : { name: "seller_one", type: "sale", baseCost: 100, quantity: 0, production: 1, salary: 10 },
				"seller_two" : { name: "seller_two", type: "sale", baseCost: 100, quantity: 0, production: 5, salary: 70 },
			},
			upgrades: {
				"upgrade_buyer_one": { price: 400, productionMultiplier: 3, robot: "buyer_one", isActive: false },
				"upgrade_buyer_two": { price: 100, productionMultiplier: 2, robot: "buyer_two", isActive: false },
				"upgrade_repairer_one": { price: 500, productionMultiplier: 10, robot: "repairer_one", isActive: false },
				"upgrade_repairer_two": { price: 100, productionMultiplier: 2, robot: "repairer_two", isActive: false },
				"upgrade_seller_one": { price: 100, productionMultiplier: 3, robot: "seller_one", isActive: false },
				"upgrade_seller_two": { price: 100, productionMultiplier: 2, robot: "seller_two", isActive: false },
			},
			stockToRepair: 310,
			stockToSale: 1000,
			events: [],
			iterationsToPaySalary: 3,
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
		var oldContext = JSON.stringify(this.context);

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
		var event = new Event(EVENTS.HIRING_CLICK);
		event.robotName = robotName;
		this.events.push(event);
	}

	upgradeClick(upgradeName){
		var event = new Event(EVENTS.UPGRADE_CLICK);
		event.upgradeName = upgradeName;
		this.events.push(event);
	}



}