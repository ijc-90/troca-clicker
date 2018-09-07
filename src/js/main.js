

var contentInfo = [
    {
        type: "buyer_one", 
        name: "Comprador 1", 
        imgPath: "images/mit120.jpg",
        upgImgPath: "images/buyer_one_upg.jpg",
        descToolTip: "Descripcion tooltip",
        pluralName: "Compradores 1",
        upgTitle: "Birra"
    },
    {
        type: "buyer_two", 
        name: "Comprador 2", 
        imgPath: "images/mit120.jpg",
        upgImgPath: "images/buyer_two_upg.png",
        descToolTip: "Descripcion tooltip 2",
        pluralName: "Compradores 1",
        upgTitle: "Birra"
    },
    {
        type: "buyer_three", 
        name: "Comprador 3", 
        imgPath: "images/mit120.jpg",
        upgImgPath: "images/buyer_three_upg.jpg",
        descToolTip: "Descripcion tooltip 3",
        pluralName: "Compradores 1",
        upgTitle: "Birra"
    },
    {
        type: "repairer_one", 
        name: "Reparador 1", 
        imgPath: "images/mit120.jpg",
        upgImgPath: "images/buyer_one_upg.jpg",
        descToolTip: "Descripcion tooltip",
        pluralName: "Compradores 1",
        upgTitle: "Birra"
    },
    {
        type: "repairer_two", 
        name: "Reparador 2", 
        imgPath: "images/mit120.jpg",
        upgImgPath: "images/buyer_two_upg.png",
        descToolTip: "Descripcion tooltip 2",
        pluralName: "Compradores 1",
        upgTitle: "Birra"
    },
    {
        type: "repairer_three", 
        name: "Reparador 3", 
        imgPath: "images/mit120.jpg",
        upgImgPath: "images/buyer_three_upg.jpg",
        descToolTip: "Descripcion tooltip 3",
        pluralName: "Compradores 1",
        upgTitle: "Birra"
    },
    {
        type: "seller_one", 
        name: "Vendedor 1", 
        imgPath: "images/mit120.jpg",
        upgImgPath: "images/buyer_one_upg.jpg",
        descToolTip: "Descripcion tooltip",
        pluralName: "Compradores 1",
        upgTitle: "Birra"
    },
    {
        type: "seller_two", 
        name: "Vendedor 2", 
        imgPath: "images/mit120.jpg",
        upgImgPath: "images/buyer_two_upg.png",
        descToolTip: "Descripcion tooltip 2",
        pluralName: "Compradores 1",
        upgTitle: "Birra"
    },
    {
        type: "seller_three", 
        name: "Vendedor 3", 
        imgPath: "images/mit120.jpg",
        upgImgPath: "images/buyer_three_upg.jpg",
        descToolTip: "Descripcion tooltip 3",
        pluralName: "Compradores 1",
        upgTitle: "Birra"
    },
];


function updateContentInfo () {    
    contentInfo.forEach(function(info){
        $('#' + info.type + ' .click-robot-name').text(info.name);
        $('#' + info.type + ' .click-robot-img img').attr("src", info.imgPath);
        $('#' + info.type + ' .click-robot-tooltip-img img').attr("src", info.imgPath);
        $('#' + info.type + '_upgrade img').attr("src", info.upgImgPath);
        $('#' + info.type + ' .click-robot-tooltip-description').text(info.descToolTip);
        $('#' + info.type + ' .click-robot-tooltip-title').text("Contratar un " + info.name);
        $('#' + info.type + ' .click-robot-tooltip-plural').text(info.pluralName);
        $('#' + info.type + '_upgrade .click-upgrade-tooltip-title').text(info.upgTitle);  

    });
}


var gameLoop = new GameLoop();

window.setInterval(function(){
   updateFrontend(gameLoop.tick());

}, 1000);

$(document).ready(function(){
    updateContentInfo();
    // $("#buy_clicker").click(function(e){
    //     e.preventDefault();
    //     gameLoop.buyClick();
    // });

    // $("#repair_clicker").click(function(e){
    //     e.preventDefault();
    //     gameLoop.repairClick();
    // });

    // $("#sale_clicker").click(function(e){
    //     e.preventDefault();
    //     gameLoop.saleClick();

    // });

    // $("#hire_clicker_buyer_1").click(function(e){
    //     e.preventDefault();
    //     gameLoop.hiringClick('buyer_one');
    // });

    // $("#upgrade_clicker_buyer_1").click(function(e){
    //     e.preventDefault();
    //     gameLoop.upgradeClick('upgrade_buyer_one');
    // });

    // $("#hire_clicker_repair_1").click(function(e){
    //     e.preventDefault();
    //     gameLoop.hiringClick('repairer_one');
    // });

    // $("#upgrade_clicker_repair_1").click(function(e){
    //     e.preventDefault();
    //     gameLoop.upgradeClick('upgrade_repairer_one');
    // });

    // $("#hire_clicker_seller_1").click(function(e){
    //     e.preventDefault();
    //     gameLoop.hiringClick('seller_one');
    // });

    // $("#upgrade_clicker_seller_1").click(function(e){
    //     e.preventDefault();
    //     gameLoop.upgradeClick('upgrade_seller_one');
    // });
});

// var news = [
//     "Sufren las ventas en trocafone, un desarrollador no identificado introdujo un bug crítico en el sistema y se tomó el palo a ‘elementum’",
//     "Fuentes no confirmadas anuncian al ‘Cookie Clickers’ como fuente de inspiración de otros juegos del género",
//     "Empleado de Trocafone ingresa a libro Guinness luego de ingerir una cantidad inhumana de empanadas",
//     "Los empleados de Trocafone están pagando la universidad de mis hijos - Máximo Togni, CEO de Dogg.",
//     "Federico Freire, hermano del fundador de Trocafone, se declara capáz de comer 20 empanadas en 20 minutos. Nicolás Díaz, actual campeón de la categoría se mantiene escéptico",
//     "Cookie Clicker demanda a Troca Clicker por plagio. Altos giles",
//     "Siempre que juego al Troca Clicker ligo el ancho de espadas - Gonzalo Higuaín",
//     "Oferta millonaria de Facebook para comprar Troca Clicker. Trocafone dice que no y le descuentan 20 puntos a Nueva Chicago",
//     "Troca Clickeeeeeeeeer eeeeeeeeeeeeeeeeeeeeeeeeee - Diego A. Maradona",
//     "Gracias a Trocafone me compré un Galaxy Pocket Neo a dos mangos - Donald Trump en su discurso de asunción",
//     "Yo no manejo el rating, yo manejo un Rolls-Royce y juego al Troca Clicker - Ricardo Fort",
//     "Zelucash intima a Trocafone por malentendido en búsquedas de Google. No paran de humillarse, qué pichonazos",
//     "Basta chicos - Ricky Fort, filósofo contemporáneo",
//     "Mamá cortaste toda la LOOZ, estaba jugando al troca clickers",
//     "Nos hacemos P#¢A, IM@¢#@¢L - El fresco",
//     "Declará tu independencia y tirate un par de clicks - Locha",
//     "Juego al trocaclickers las 24 horas del día, y de la noche también - Herminio Iglesias",
// ];

// function sellPhones(number){
//     money = money + (number*cellphoneSellPrice);
//     document.getElementById("money").innerHTML = money;
// }


// function buyRobot(type){
//     var robot = robots.find(function(robot){
//         return robot.type == type;
//     });
//     var cost = Math.floor(robot.baseCost * Math.pow(geometricScale,robot.quantity));
//     if(money >= cost){
//         robot.quantity += 1;
//         money = money - cost;
//         updateRobotQuantity(robot);

//         var totalProductionClass = ".";
//         totalProductionClass = totalProductionClass.concat(robot.type).concat("-total-production");
//         $(totalProductionClass).html(robot.quantity * robot.production * cellphoneSellPrice);

//         canPopUp = true;

//         document.getElementById('money').innerHTML = money;
//     }
//     updateRobotPrice(robot);

// }


// window.setInterval(function(){
//     //game loop
//     recalculateProduction();
//     sellPhones(productionPerSecond);
//     setOpacityForBuyables();
    
//     if(poppingUp){
//         popUpTime--;
//         document.getElementById('remainging-time').innerHTML = popUpTime;
//         if(popUpTime <= 0){
//             poppingUp = false;
//             $(".click-challenge").css("display","none");
//             $(".click-error").css("display","table-cell");
//             $(".click-succes").css("display","none");
//             looseOneRobot();
//             $(".click-error").on("click",function(){
//                 $(".click-popup").css("display","none");
//             });

//         }
//         $(".click-popup").on("click",function(){
//                 $(".click-challenge").css("display","none");
//                 $(".click-succes").css("display","table-cell");
//                 $(".click-error").css("display","none");
//                 $(".click-popup").on("click",function(){
//                     $(".click-popup").css("display","none");
//                 });
//                 if(poppingUp){
//                     money -= Math.min(money, costoSueldos);
//                     poppingUp = false;
//                 }
//                 canPopUp = false;
//         });
//         $(".click-popup").css("display","table");
//     }else{
//         popUpTime = popUpTotalTime +1;
//     }
// }, 1000);



// window.setInterval(function(){
//     var item = news[Math.floor(Math.random()*news.length)];
//     document.getElementById('news').innerHTML = item;
// }, 15000);


// window.setInterval(function(){
//     if(canPopUp && poppingUp == false){
//         $(".click-challenge").css("display","block");
//         $(".click-succes").css("display","none");
//         $(".click-error").css("display","none");
//         poppingUp = true;
//         canPopUp = false;

//     }
    
// }, 60000);


// function recalculateProduction(){
//     productionPerSecond = 0;
//     robots.forEach(function(robot){
//         productionPerSecond += robot.production*robot.quantity;
//     });
//     document.getElementById('production').innerHTML = productionPerSecond * cellphoneSellPrice;
    
// }


// function upgradeRobot(type){
//     var robot = robots.find(function(robot){
//         return robot.type == type;
//     });
//     var upgrade = upgrades.find(function(robot){
//         return robot.type == type;
//     });

//     if (money >= upgrade.cost){
//         robot.production *= upgrade.multiplier;
//         money -= upgrade.cost;
//         upgrade.cost *= upgrade.costMultiplier;
//     }
//     recalculateProduction();

//     var totalProductionClass = ".";
//     totalProductionClass = totalProductionClass.concat(robot.type).concat("-total-production");
//     $(totalProductionClass).html(robot.quantity * robot.production * cellphoneSellPrice);

//     document.getElementById(upgrade.type.concat("-upgrade-cost")).innerHTML = upgrade.cost;    

//     document.getElementById("money").innerHTML = money;
// }



// function setOpacityForBuyables(){
//     robots.forEach(function(robot){
//         var htmlID = robot.type.concat("-clickeable");
//         if (money >= robot.baseCost * Math.pow(geometricScale,robot.quantity)){
//             document.getElementById(htmlID).style.opacity = 1;    
//         }else{
//             document.getElementById(htmlID).style.opacity = 0.5;
//         }
//     });

//     upgrades.forEach(function(upgrade){
//         var htmlID = upgrade.type.concat("-upgrade");
//         if (money >= upgrade.cost){
//             document.getElementById(htmlID).style.opacity = 1;    
//         }else{
//             document.getElementById(htmlID).style.opacity = 0.5;
//         }
//     });
// }

//     function looseOneRobot(){
//          var robot = robots.find(function(robot){
//             return robot.quantity > 0;
//         });

//         robot.quantity -= 1;

//         updateRobotPrice(robot);
//         updateRobotQuantity(robot);

//     }

//     function updateRobotPrice(robot){
//         var cost = Math.floor(robot.baseCost * Math.pow(geometricScale,robot.quantity));

//         var costClass = ".";
//         costClass = costClass.concat(robot.type).concat("-cost");
//         $(costClass).html(cost);
//     }

//     function updateRobotQuantity(robot){
//         var quantityClass = ".";
//         quantityClass = quantityClass.concat(robot.type).concat("-quantity");
//         $(quantityClass).html(robot.quantity);
//     }


// $( document ).ready(function() {
//     $("#mit-clickeable").on("click",function(){
//     buyRobot("mit");
//     });

//     $("#facu-clickeable").on("click",function(){
//     buyRobot("facu");
//     });

//     $("#locha-clickeable").on("click",function(){
//     buyRobot("locha");
//     });

//     $("#buga-clickeable").on("click",function(){
//     buyRobot("buga");
//     });

//     $("#tati-clickeable").on("click",function(){
//     buyRobot("tati");
//     });

//     $("#diaz-clickeable").on("click",function(){
//     buyRobot("diaz");
//     });

//     $("#mit-upgrade").on("click",function(){
//     upgradeRobot("mit");
//     });

//     $("#facu-upgrade").on("click",function(){
//     upgradeRobot("facu");
//     });

//     $("#locha-upgrade").on("click",function(){
//     upgradeRobot("locha");
//     });

//     $("#buga-upgrade").on("click",function(){
//     upgradeRobot("buga");
//     });

//     $("#tati-upgrade").on("click",function(){
//     upgradeRobot("tati");
//     });

//     $("#diaz-upgrade").on("click",function(){
//     upgradeRobot("diaz");
//     });

//     updateContentInfo();

// });

