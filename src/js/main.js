var money = 0;
var cellphoneSellPrice = 10;
var productionPerSecond = 0;
var geometricScale = 1.2;

var robots = [
    {type: "mit", baseCost: 100, quantity: 0, production: 1},
    {type: "facu", baseCost: 1500, quantity: 0, production: 15},
    {type: "locha", baseCost: 20000, quantity: 0, production: 200},
    {type: "buga", baseCost: 150000, quantity: 0, production: 1500},
    {type: "tati", baseCost: 250000, quantity: 0, production: 2500},
    {type: "diaz", baseCost: 400000, quantity: 0, production: 4000},
];

var upgrades = [
    {type: "mit", multiplier: 5, cost: 1250, costMultiplier: 10},
    {type: "facu", multiplier: 10, cost: 37500, costMultiplier: 10},
    {type: "locha", multiplier: 15, cost: 750000, costMultiplier: 10},
    {type: "buga", multiplier: 20, cost: 7500000, costMultiplier: 10},
    {type: "tati", multiplier: 25, cost: 15625000, costMultiplier: 10},
    {type: "diaz", multiplier: 30, cost: 30000000, costMultiplier: 10},
]; 

var news = [
    "Sufren las ventas en trocafone, un desarrollador no identificado introdujo un bug crítico en el sistema y se tomó el palo a ‘elementum’",
    "Fuentes no confirmadas anuncian al ‘Cookie Clickers’ como fuente de inspiración de otros juegos del género",
    "Empleado de Trocafone ingresa a libro Guinness luego de ingerir una cantidad inhumana de empanadas",
    "Los empleados de Trocafone están pagando la universidad de mis hijos - Máximo Togni, CEO de Dogg.",
    "Federico Freire, hermano del fundador de Trocafone, se declara capáz de comer 20 empanadas en 20 minutos. Nicolás Díaz, actual campeón de la categoría se mantiene escéptico",
    "Cookie Clicker demanda a Troca Clicker por plagio. Altos giles",
    "Siempre que juego al Troca Clicker ligo el ancho de espadas - Gonzalo Higuaín",
    "Oferta millonaria de Facebook para comprar Troca Clicker. Trocafone dice que no y le descuentan 20 puntos a Nueva Chicago",
    "Troca Clickeeeeeeeeer eeeeeeeeeeeeeeeeeeeeeeeeee - Diego A. Maradona",
    "Gracias a Trocafone me compré un Galaxy Pocket Neo a dos mangos - Donald Trump en su discurso de asunción",
    "Yo no manejo el rating, yo manejo un Rolls-Royce y juego al Troca Clicker - Ricardo Fort",
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
}, 1000);

window.setInterval(function(){
    var item = news[Math.floor(Math.random()*news.length)];
    document.getElementById('news').innerHTML = item;
}, 15000);


function recalculateProduction(){
    productionPerSecond = 0;
    robots.forEach(function(robot){
        productionPerSecond += robot.production*robot.quantity;
    });
    document.getElementById('production').innerHTML = productionPerSecond * cellphoneSellPrice;
    
}


function upgradeRobot(type){
    var robot = robots.find(function(robot){
        return robot.type == type;
    });
    var upgrade = upgrades.find(function(robot){
        return robot.type == type;
    });

    if (money >= upgrade.cost){
        robot.production *= upgrade.multiplier;
        money -= upgrade.cost;
        upgrade.cost *= upgrade.costMultiplier;
    }
    recalculateProduction();

    document.getElementById("money").innerHTML = money;
}





$( document ).ready(function() {
    $("#mit-clickeable").on("click",function(){
    buyRobot("mit");
    });

    $("#facu-clickeable").on("click",function(){
    buyRobot("facu");
    });

    $("#locha-clickeable").on("click",function(){
    buyRobot("locha");
    });

    $("#buga-clickeable").on("click",function(){
    buyRobot("buga");
    });

    $("#tati-clickeable").on("click",function(){
    buyRobot("tati");
    });

    $("#diaz-clickeable").on("click",function(){
    buyRobot("diaz");
    });

    $("#mit-upgrade").on("click",function(){
    upgradeRobot("mit");
    });

    $("#facu-upgrade").on("click",function(){
    upgradeRobot("facu");
    });

    $("#locha-upgrade").on("click",function(){
    upgradeRobot("locha");
    });

    $("#buga-upgrade").on("click",function(){
    upgradeRobot("buga");
    });

    $("#tati-upgrade").on("click",function(){
    upgradeRobot("tati");
    });

    $("#diaz-upgrade").on("click",function(){
    upgradeRobot("diaz");
    });


});

