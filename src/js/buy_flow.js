class BuyFlow extends Flow {

	constructor() {
		super();
		console.log("BuyFlowConstructed");
	}

	work(context) {
		var buyRobots = this.getRobotsByType(Object.values(context.robots), "buy");
		var robotBuyCapacity = this.getRobotCapacity(buyRobots);
		var clickBuyCapacity = this.getQuantityOfEventsOfType(context.events, EVENTS.BUY_CLICK);
		var buyCapacity = robotBuyCapacity + clickBuyCapacity;

		var moneyBuyCapacity = this.getMoneyCapacity(context.money, context.cellphoneBuyPrice);

		var quantityToBuy = Math.min(moneyBuyCapacity, buyCapacity);

		context = this.buy(context, quantityToBuy);

		return context;
	};

	buy(context, quantityToBuy){
		context.money -= quantityToBuy * context.cellphoneBuyPrice;
		var incommingStockToRepair = Math.round(quantityToBuy * 0.7);
		var incommingStockToSale = quantityToBuy - incommingStockToRepair;

		context.stockToRepair += incommingStockToRepair;
		context.stockToSale += incommingStockToSale;
		return context;
	}
}