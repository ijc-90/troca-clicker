class Flow {
    work(context) {
    };

    getRobotCapacity(robots){
        return robots.reduce(function(carry, robot) {
            var totalRobotCapacity = robot.quantity * robot.production;
            return carry + totalRobotCapacity;
        }, 0);
    };

    getQuantityOfEventsOfType(events, type) {
        return events.reduce(function(carry, event) {
            if (event == type){
                carry++;
            }
            return carry;
        }, 0);
    };
}