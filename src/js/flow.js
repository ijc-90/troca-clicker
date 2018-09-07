class Flow {
    work(context) {
    };

    getRobotCapacity(robots){
        return robots.reduce(function(carry, robot) {
            var production = robot.production;
            var totalRobotCapacity = robot.quantity * production;
            return carry + totalRobotCapacity;
        }, 0);
    }

    getMoneyCapacity(money, operationPrice) {
        if (operationPrice <= 0 ){
            return Number.MAX_SAFE_INTEGER;
        }
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