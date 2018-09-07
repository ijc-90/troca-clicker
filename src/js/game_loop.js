class GameLoop {

	constructor(){
		this.context = {
			money : 10000,
			cellphoneBuyPrice : 10,
			cellphoneRepairPrice : 5,
			cellphoneSalePrice : 100,
			geometricCostScale : 1.3,
			robots : {

				"buyer_one": {type: "buy", baseCost: 100, quantity: 0, production: 1},
				"buyer_two": {type: "buy", baseCost: 100, quantity: 0, production: 5},

				"repairer_one" : {type: "repair", baseCost: 100, quantity: 0, production: 1},
				"repairer_two" : {type: "repair", baseCost: 100, quantity: 0, production: 5},

				"seller_one" : {type: "sale", baseCost: 100, quantity: 1, production: 5},
				"seller_two" : {type: "sale", baseCost: 100, quantity: 2, production: 5},
			},
			upgrades: [],
			stockToRepair: 310,
			stockToSale: 0,
			events: [],
		};
		
		this.pipeline = [
			new BuyFlow(),
			new RepairFlow(),
			new SaleFlow(),
			new HiringFlow(),
		];

		this.events = [];
	}

	run() {
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