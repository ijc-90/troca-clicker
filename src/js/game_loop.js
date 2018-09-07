class GameLoop {

	constructor(){
		this.context = {
			money : 10000,
			cellphoneBuyPrice : 10,
			cellphoneRepairPrice : 5,
			cellphoneSalePrice : 100,
			geometricCostScale : 1.3,
			robots : {
				buy: [
					{type: "buy_rep", baseCost: 100, quantity: 0, production: 1},
					{type: "supervisor", baseCost: 100, quantity: 0, production: 5},
				],
				repair: [
					{type: "technician-jr", baseCost: 100, quantity: 2, production: 1},
					{type: "technician-sr", baseCost: 400, quantity: 1, production: 5},
				],
				sale: [
					{type: "seller Jr", baseCost: 100, quantity: 6, production: 1},
				]
			},
			upgrades: [],
			stockToRepair: 310,
			stockToSale: 0,
			events: [],
		};
		
		this.pipeline = [
			// new BuyFlow(),
			new RepairFlow(),
			// new SaleFlow(),
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
		this.events.push(EVENTS.BUY_CLICK);
	}

	repairClick() {
		this.events.push(EVENTS.REPAIR_CLICK);
	}

}