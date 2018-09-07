class BuyFlow {

	constructor() {
		console.log("soy el buy flow");
	}

	work(context) {
		var buyRobots = context.robots.buy;		
		var robotBuyCapacity = this.getRobotBuyCapacity(buyRobots);

		var moneyBuyCapacity = this.getMoneyBuyCapacity(context.money, context.cellphoneBuyPrice);

		var quantityToBuy = Math.min(moneyBuyCapacity, robotBuyCapacity);

		context = this.buy(context, quantityToBuy);

		console.log("money:",context.money);
		console.log("stockToRepair:",context.stockToRepair);
		console.log("stockToSale:",context.stockToSale);

		return context;
	};

	getRobotBuyCapacity(buyRobots) {
		return buyRobots.reduce(function(carry, robot) {
			var totalRobotCapacity = robot.quantity * robot.production;
			return carry + totalRobotCapacity;
		}, 0);
	}

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