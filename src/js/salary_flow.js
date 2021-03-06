class SalaryFlow extends Flow {

    constructor() {
        super();
        this.iterationIndex = 0;
    }

    work(context) {
        this.iterationIndex++;
        context.salariesPaidThisTick = false;
        context.salariesTimeForPayment = context.iterationsToPaySalary - this.iterationIndex;
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
        context.moneyPaidInSalaries = totalSalaries;
        context.salariesPaidThisTick = true;
        if (context.money < 0){
            context.gameOver = true;
            context.lost=true;
        }
        context.shouldPlayGameOverSound = context.gameOver;
        return context;
    }
}