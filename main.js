var money = 0;
var cellphoneSellPrice = 10;
var sellRobotQuantity = 0;

function sellClick(number){
    money = money + (number*cellphoneSellPrice);
    document.getElementById("money").innerHTML = money;
};

function addSellRobot(type){
    switch(type) {
    case 1:
        sellRobotQuantity = sellRobotQuantity + 1;
        break;
    default:
    }
};


function buySellRobot(){
    var sellRobotCost = Math.floor(10 * Math.pow(1.1,sellRobotQuantity));
    if(money >= sellRobotCost){
        sellRobotQuantity = sellRobotQuantity + 1;
        money = money - sellRobotCost;
        document.getElementById('sellRobotQuantity').innerHTML = sellRobotQuantity;
        document.getElementById('money').innerHTML = money;
    };
    var nextCost = Math.floor(10 * Math.pow(1.1,sellRobotQuantity));
    document.getElementById('cursorCost').innerHTML = nextCost;
};