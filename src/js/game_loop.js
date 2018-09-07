class GameLoop {

	constructor(){
		this.context = {
			money : 1000,
			cellphoneBuyPrice : 10,
			cellphoneRepairPrice : 5,
			cellphoneSalePrice : 100,
			geometricCostScale : 1.3,
			robots : {
				buy: [
					{type: "buyer_one", baseCost: 100, quantity: 6, production: 1},
					{type: "buyer_two", baseCost: 100, quantity: 2, production: 5},
				],
				repair: [
					{type: "repairer_one", baseCost: 100, quantity: 6, production: 1},
					{type: "repairer_two", baseCost: 100, quantity: 2, production: 5},
				],
				sale: [
					{type: "seller_one", baseCost: 100, quantity: 6, production: 1},
					{type: "seller_two", baseCost: 100, quantity: 6, production: 5},
				]
			},
			upgrades: [],
			stockToRepair: 0,
			stockToSale: 0,
			events: [],
		};
		
		this.pipeline = [
			// new BuyFlow(),
			// new SaleFlow(),
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

	saleClick() {
		this.events.push(new Event(EVENTS.SALE_CLICK));
	}

	hiringClick(){
		this.events.push(new Event(EVENTS.HIRING_CLICK));
	}

}