class BuyFlow extends Flow {

	constructor() {
		super();
		console.log("BuyFlowConstructed");
	}

	work(context) {
		var buyRobots = context.robots.buy;		
		var robotBuyCapacity = this.getRobotCapacity(buyRobots);
		var clickBuyCapacity = this.getQuantityOfEventsOfType(context.events, EVENTS.BUY_CLICK);
		var buyCapacity = robotBuyCapacity + clickBuyCapacity;

		var moneyBuyCapacity = this.getMoneyBuyCapacity(context.money, context.cellphoneBuyPrice);

		var quantityToBuy = Math.min(moneyBuyCapacity, buyCapacity);

		context = this.buy(context, quantityToBuy);

		console.log("############# Buy START ############# ");
		console.log("quantityToBuy:",quantityToBuy);
		console.log("money:",context.money);
		console.log("stockToRepair:",context.stockToRepair);
		console.log("stockToSale:",context.stockToSale);
		console.log("############# BUY END ############# ");

		return context;
	};

	getMoneyBuyCapacity(money, cellphoneBuyPrice) {
		return Math.floor(money / cellphoneBuyPrice);	
	}

	buy(context, quantityToBuy){
		context.money -= quantityToBuy * context.cellphoneBuyPrice;
		var incommingStockToRepair = Math.round(quantityToBuy * 0.7);
		var incommingStockToSale = quantityToBuy - incommingStockToRepair;

		context.stockToRepair += incommingStockToRepair;
		context.stockToSale += incommingStockToSale;
		return context;
	}
}