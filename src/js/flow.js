class Flow {
    work(context) {
    };

    getRobotCapacity(robots, upgradesByRobot){
        return robots.reduce(function(carry, robot) {
            var production = robot.production;
            if (upgradesByRobot.hasOwnProperty(robot.name)){
                var upgrade = upgradesByRobot[robot.name];
                production = production * upgrade.productionMultiplier;
            }

            var totalRobotCapacity = robot.quantity * production;
            return carry + totalRobotCapacity;
        }, 0);
    }

    getActiveUpgradesByRobot(upgrades){
        var upgradesByRobot = {};
        for (var key in upgrades){
            var upgrade = upgrades[key];
            if (upgrade.isActive){
                upgradesByRobot[upgrade.robot] = upgrade;
            }
        }
        return upgradesByRobot;
    }

    getMoneyCapacity(money, operationPrice) {
		return Math.floor(money / operationPrice);	
	}

    getQuantityOfEventsOfType(events, type) {
        return events.reduce(function(carry, event) {
            if (event.type == type){
                carry++;
            }
            return carry;
        }, 0);
    }

    getRobotsByType(robots, type){
        return robots.filter(function(robot){
            return robot.type == type;
        });
    }
}