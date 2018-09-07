class RepairFlow extends Flow {

	constructor() {
		super();
		console.log("RepairFlowConstructed");
	}

	work(context) {
		var repairRobots = context.robots.repair;		
		var robotRepairCapacity = this.getRobotCapacity(repairRobots);
		var clickRepairCapacity = this.getClickRepairCapacity(context.events);
		var repairCapacity = robotRepairCapacity + clickRepairCapacity;

		var moneyRepairCapacity = this.getMoneyCapacity(context.money, context.cellphoneRepairPrice);

		var quantityToRepair = Math.min(moneyRepairCapacity, repairCapacity, context.stockToRepair);

		context = this.repair(context, quantityToRepair);

		console.log("############# SaleFlow START ############# ");
        console.log("money:",context.money);
        console.log("quantityToRepair:",quantityToRepair);
		console.log("stockToRepair:",context.stockToRepair);
		console.log("stockToSale:",context.stockToSale);
        console.log("############# SaleFlow END ############# ");

		return context;
	};

	repair(context, quantityToRepair){
		context.money -= quantityToRepair * context.cellphoneRepairPrice;
		context.stockToRepair -= quantityToRepair;
		context.stockToSale += quantityToRepair;
		return context;
	}

	getClickRepairCapacity(events) {
		return events.reduce(function(carry, event) {
			if (event == EVENTS.REPAIR_CLICK){
				carry++;
			}
			return carry;
		}, 0);
	}
}