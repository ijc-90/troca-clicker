class RepairFlow extends Flow {

	constructor() {
		super();
		console.log("RepairFlowConstructed");
	}

	work(context) {
		var repairRobots = this.getRobotsByType(Object.values(context.robots), "repair");
		var upgradesByRobot = this.getActiveUpgradesByRobot(context.upgrades);
		var robotRepairCapacity = this.getRobotCapacity(repairRobots, upgradesByRobot);
		var clickRepairCapacity = this.getClickRepairCapacity(context.events);
		var repairCapacity = robotRepairCapacity + clickRepairCapacity;

		var moneyRepairCapacity = this.getMoneyCapacity(context.money, context.cellphoneRepairPrice);

		var quantityToRepair = Math.min(moneyRepairCapacity, repairCapacity, context.stockToRepair);

		context = this.repair(context, quantityToRepair);

		console.log("############# Repair START ############# ");
        console.log("money:",context.money);
        console.log("quantityToRepair:",quantityToRepair);
		console.log("############# Repair END ############# ");

		return context;
	};

	repair(context, quantityToRepair){
		context.money -= quantityToRepair * context.cellphoneRepairPrice;
		context.stockToRepair -= quantityToRepair;
		context.stockToSale += quantityToRepair;
		context.amountOfPhonesRepairedThisCicle = quantityToRepair;
		context.moneySpentRepairingThisCicle = quantityToRepair * context.cellphoneRepairPrice;
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