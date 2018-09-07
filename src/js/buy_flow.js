class BuyFlow extends Flow {

	constructor() {
		super();
		console.log("BuyFlowConstructed");
	}

	work(context) {
		var buyRobots = context.robots.buy;		
		var robotBuyCapacity = this.getRobotCapacity(buyRobots);

		var moneyBuyCapacity = this.getMoneyBuyCapacity(context.money, context.cellphoneBuyPrice);

		var quantityToBuy = Math.min(moneyBuyCapacity, robotBuyCapacity);

		context = this.buy(context, quantityToBuy);

		console.log("money:",context.money);
		console.log("stockToRepair:",context.stockToRepair);
		console.log("stockToSale:",context.stockToSale);

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