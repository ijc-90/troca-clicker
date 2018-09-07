class SalaryFlow extends Flow {

    constructor() {
        super();
        this.iterationIndex = 0;
        console.log("Salary Constructed");
    }

    work(context) {
        this.iterationIndex++;
        if (this.iterationIndex >= context.iterationsToPaySalary){
            context = this.tryToPaySalaries(context);
        }
        return context;
    };

    tryToPaySalaries(context) {
        this.iterationIndex = 0;

        var robots = Object.values(context.robots);
        var totalSalaries = robots.reduce(function(carry, robot) {
            var totalForRobotKind = robot.quantity * robot.salary;
            return carry + totalForRobotKind;
        }, 0);

        context.money -= totalSalaries;
        context.gameOver = (context.money < 0);
        return context;
    }
}