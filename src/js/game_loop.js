class GameLoop {

	constructor(){
		this.context = {
			money : 500,
			cellphoneBuyPrice : 0,
			cellphoneRepairPrice : 0,
			cellphoneSalePrice : 100,
			geometricCostScale : 1.3,
			robots : {
				"buyer_one": { type: "buy", baseCost: 100, quantity: 1, production: 1, salary: 10 },
				"buyer_two": { type: "buy", baseCost: 100, quantity: 0, production: 5, salary: 20 },
				"repairer_one" : { type: "repair", baseCost: 100, quantity: 2, production: 1, salary: 30 },
				"repairer_two" : { type: "repair", baseCost: 100, quantity: 0, production: 5, salary: 50 },
				"seller_one" : { type: "sale", baseCost: 100, quantity: 0, production: 5, salary: 10 },
				"seller_two" : { type: "sale", baseCost: 100, quantity: 0, production: 5, salary: 70 },
			},
			upgrades: [],
			stockToRepair: 310,
			stockToSale: 0,
			events: [],
			iterationsToPaySalary: 3,
			gameOver: false,
		};
		
		this.pipeline = [
			new BuyFlow(),
			new RepairFlow(),
			new SaleFlow(),
			new HiringFlow(),
			new SalaryFlow(),
		];

		this.events = [];
	}

	run() {
		if (this.context.gameOver){
			return;
		}
		this.context.events = this.events;
		this.events = [];

		this.context = this.pipeline.reduce( function(context, flowStep){
			return flowStep.work(context);
		}, this.context);
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

}