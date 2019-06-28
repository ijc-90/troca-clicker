

var contentInfo = [
    {
        type: "buyer_one", 
        name: "E-Purchase", 
        imgPath: "images/Venta_e-commerce.png",
        upgImgPath: "images/Compra__Responsive.png",
        pluralName: "E-Purchases",
        upgTitle: "Responsiveness"
    },
    {
        type: "buyer_two", 
        name: "Comprador en bici", 
        imgPath: "images/Compra__Comprador_en_bici.png",
        upgImgPath: "images/Compra__Comprador_en_moto.png",
        pluralName: "Comprador en bici",
        upgTitle: "Comprar moto para los recolectores"
    },
    {
        type: "buyer_three", 
        name: "Tienda física de compra", 
        imgPath: "images/mayweather.jpeg",
        upgImgPath: "images/Compra__Plan_canje.png",
        pluralName: "Tienda física de compra",
        upgTitle: "Ofrecer plan canje"
    },
    {
        type: "repairer_one", 
        name: "Reparador", 
        imgPath: "images/Reparar__Reparador.png",
        upgImgPath: "images/Reparar__Kit_de_herramientas.png",
        pluralName: "Reparadores",
        upgTitle: "Kit de herramientas"
    },
    {
        type: "repairer_two", 
        name: "Brazo robótico", 
        imgPath: "images/Reparar_Robot.png",
        upgImgPath: "images/Reparar_AI.png",
        pluralName: "Brazos robóticos",
        upgTitle: "Inteligencia artificial mejorada"
    },
    {
        type: "repairer_three", 
        name: "Planta automatizada", 
        imgPath: "images/Reparar_Planta_automatizada.png",
        upgImgPath: "images/Reparar__Paneles_solares.png",
        pluralName: "Plantas a  utomatizadas",
        upgTitle: "Implementación de paneles solares"
    },
    {
        type: "seller_one", 
        name: "E-Commerce", 
        imgPath: "images/Venta_e-commerce.png",
        upgImgPath: "images/Venta_responsive.png",
        pluralName: "E-Commerces",
        upgTitle: "Responsiveness"
    },
    {
        type: "seller_two", 
        name: "Tiendas física", 
        imgPath: "images/Venta__marketplace.png",
        upgImgPath: "images/Venta__24h.png",
        pluralName: "Tiendas físicas",
        upgTitle: "Abrir las 24 horas"
    },
    {
        type: "seller_three", 
        name: "Integración con Marketplace", 
        imgPath: "images/jobs.jpg",
        upgImgPath: "images/jobs.jpg",
        pluralName: "Integración con Marketplaces",
        upgTitle: "Ofrecer cuotas"
    },
];

function updateContentInfo () {    
    contentInfo.forEach(function(info){
        $('#' + info.type + ' .click-robot-name').text(info.name);
        $('#' + info.type + ' .click-robot-img img').attr("src", info.imgPath);
        $('#' + info.type + ' .click-robot-tooltip-img img').attr("src", info.imgPath);
        $('#' + info.type + '_upgrade img').attr("src", info.upgImgPath);
        $('#' + info.type + ' .click-robot-tooltip-description').text("Añade un " + info.name + " a trocafone!");
        $('#' + info.type + ' .click-robot-tooltip-title').text("Sumar un " + info.name);
        $('#' + info.type + ' .click-robot-tooltip-plural').text(info.pluralName);
        $('#' + info.type + '_upgrade .click-upgrade-tooltip-title').text(info.upgTitle);
        $('#' + info.type).on("click",function(){
            hireClick(info.type);
        });
        $('#' + info.type + '_upgrade').on("click",function(){
            upgradeClick(info.type);
        });
    });
}

var gameLoop = new GameLoop();
window.gameContext = gameLoop.context;

console.log("Bienvenido al modo Hacker. Un gran poder conlleva una gran responsabilidad");
console.log("Para modificar el juego tenés que hacer un trabajo de ingeniería inversa (o mirar la variable window.gameContext, que tiene todos los parámetros del juego) ");
console.log("Sugerencias, issues y PRs a https://github.com/ijc-90/troca-clicker");


window.setInterval(function(){
   updateFrontend(gameLoop.tick(2));
}, 500);

function sellClickerClick(){
    if ($(this).hasClass("disabled")) {
        return;
    }
    gameLoop.saleClick();
}

function buyClickerClick(){
    if ($(this).hasClass("disabled")) {
        return;
    }

    gameLoop.buyClick();
}

function repairClickerClick(){
    if ($(this).hasClass("disabled")) {
        return;
    }

    gameLoop.repairClick();
}

function hireClick(name){
    gameLoop.hiringClick(name);
}

function upgradeClick(name){
    gameLoop.upgradeClick("upgrade_" + name);
}

$(document).ready(function(){
    updateContentInfo();
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

var news = [
    "Fuentes no confirmadas anuncian al ‘Cookie Clickers’ como fuente de inspiración de otros juegos del género",
    "Cookie Clicker demanda a Troca Clicker por plagio. Altos giles",
    "Siempre que juego al Troca Clicker ligo el ancho de espadas - Gonzalo Higuaín",
    "Oferta millonaria de Facebook para comprar Troca Clicker. Trocafone dice que no y le descuentan 20 puntos a Nueva Chicago",
    "Troca Clickeeeeeeeeer eeeeeeeeeeeeeeeeeeeeeeeeee - Diego A. Maradona",
    "Gracias a Trocafone me compré un Galaxy Pocket Neo a dos mangos - Donald Trump en su discurso de asunción",
    "Yo no manejo el rating, yo manejo un Rolls-Royce y juego al Troca Clicker - Ricardo Fort",
    "Zelucash intima a Trocafone por malentendido en búsquedas de Google. No paran de humillarse, qué pichonazos",
    "Basta chicos - Ricky Fort, filósofo contemporáneo",
    "Mamá cortaste toda la LOOZ, estaba jugando al troca clickers",
    "Nos hacemos P#¢A, IM@¢#@¢L - El fresco"
];



window.setInterval(function(){
    var item = news[Math.floor(Math.random()*news.length)];
    document.getElementById('news').innerHTML = item;
}, 15000);

$(document).ready( () => {
    TweenMax.set($(".click-container"), { scale: 1.25 });
    
    setTimeout(() => $(".lds-ripple").remove(), 1500);
    modal.show('Bienvenido a troca clickers', 'Vamos a ir conociendo el maravilloso mundo de troca, y su funcionamiento.', gameLoop, () =>{
        modal.show('Primeros Pasos', 'Trocafone compra, reprocesa y vende celulares. Para arrancar te dejamos $100, comprá 10 celulares clickeando', gameLoop, () => {
            TweenMax.set(".click-message", { y: 200 })
            $(".click-message").show();
            TweenMax.to($(".click-container"), 1, { scale: 1, opacity: 1, ease:Expo.easeOut });
            TweenMax.to(".click-message", 1, { y: 0 })
        });    
    });
    
})



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

