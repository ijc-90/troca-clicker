class Flow {
    work(context) {
    };

    getRobotCapacity(robots){
        return robots.reduce(function(carry, robot) {
            var totalRobotCapacity = robot.quantity * robot.production;
            return carry + totalRobotCapacity;
        }, 0);
    }
}