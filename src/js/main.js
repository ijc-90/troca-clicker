var money = 0;
var cellphoneSellPrice = 10;
var productionPerSecond = 0;
var geometricScale = 1.2;

var robots = [
    {type: "first", baseCost: 50, quantity: 0, production: 1}
];

function sellPhones(number){
    money = money + (number*cellphoneSellPrice);
    document.getElementById("money").innerHTML = money;
}


function buyRobot(type){
    var robot = robots.find(function(robot){
        return robot.type == type;
    });
    var cost = Math.floor(robot.baseCost * Math.pow(geometricScale,robot.quantity));
    if(money >= cost){
        robot.quantity += 1;
        money = money - cost;
        document.getElementById(robot.type.concat("-quantity")).innerHTML = robot.quantity;
        document.getElementById('money').innerHTML = money;
    }
    var nextCost = Math.floor(robot.baseCost * Math.pow(geometricScale,robot.quantity));
    document.getElementById(robot.type.concat("-cost")).innerHTML = nextCost;
}


window.setInterval(function(){
    recalculateProduction();
    sellPhones(productionPerSecond);
    document.getElementById('production').innerHTML = productionPerSecond;
}, 1000);

function recalculateProduction(){
    productionPerSecond = 0;
    robots.forEach(function(robot){
        productionPerSecond += robot.production*robot.quantity;
    });
    
}