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
					{type: "buy_rep", baseCost: 100, quantity: 6, production: 1},
					{type: "supervisor", baseCost: 100, quantity: 2, production: 5},
				],
				repair: [],
				sale: [
					{type: "seller Jr", baseCost: 100, quantity: 6, production: 1},
				]
			},
			upgrades: [],
			stockToRepair: 0,
			stockToSale: 0
		};
		
		this.pipeline = [
			new BuyFlow(),
			new SaleFlow(),
		];
	}

	run() {
		this.context = this.pipeline.reduce( function(context, flowStep){
			return flowStep.work(context);
		}, this.context);
	}

}