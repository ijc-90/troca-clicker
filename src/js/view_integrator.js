class ViewIntegrator {
    constructor(){}

    generateViewRawData(oldContext, newContext){
        var buyRobots = Object.values(newContext.robots).filter(function(robot){
            return robot.type == "buy";
        });
        var buyRobotsProductivity = buyRobots.reduce(function(carry, robot){
            return (robot.production * robot.quantity) + carry;
        });

        var repairRobots = Object.values(newContext.robots).filter(function(robot){
            return robot.type == "repair";
        });
        var repairRobotsProductivity = buyRobots.reduce(function(carry, robot){
            return (robot.production * robot.quantity) + carry;
        });

        var saleRobots = Object.values(newContext.robots).filter(function(robot){
            return robot.type == "sale";
        });
        var saleRobotsProductivity = buyRobots.reduce(function(carry, robot){
            return (robot.production * robot.quantity) + carry;
        });

        return {
          "js-total-balance": newContext.money - oldContext.money,
          "js-money": newContext.money,
          "js-buys-balance": newContext.moneySpentOnBuyingPhonesThisCicle, //null cuanta plata gasté en comprar (celulares comprados * precio de compra)
          "js-amount-phones-bought": newContext.amountOfPhonesBoughtThisCicle, //cuantos telefonos compre
          "js-repair-chance": newContext.probabilityOfDefectiveBuy * 100, 
          "js-phone-buy-capability": buyRobotsProductivity, // capacidad de todos los robots de compra
          "js-phone-buy-price": newContext.cellphoneBuyPrice,
          "js-repair-balance": newContext.moneySpentRepairingThisCicle, //Cuanto gasté en reparar telefonos este ciclo (celulares reparados * precio de reparo)
          "js-amount-phones-repaired": newContext.amountOfPhonesRepairedThisCicle, //cantidad de cells reparados
          "js-amount-phones-awaiting-repair": newContext.stockToRepair, //stock de "en reparo"
          "js-phone-repair-capability": repairRobotsProductivity, //Capacidad de todos los robots de reparo (cantidad * productividad)
          "js-phone-repair-price": newContext.cellphoneRepairPrice,
          "js-buyer-one-upg-multiplier": 1200,
          "js-sale-balance": newContext.moneyEarnedSellingThisCicle, // cantidad de celulares vendidos * precio de venta
          "js-amount-phones-sold": newContext.amountOfPhonesSoldThisCicle, // cantidad de vendidos
          "js-amount-phones-awaiting-sale": newContext.stockToSale, //stock de venta
          "js-amount-sell-price": newContext.cellphoneSalePrice,
          "js-buyer-one-price": 77777777, //precio de contrataor robot
          "js-buyer-one-bought": 77777777, // cuantos robots tengo
          "js-buyer-one-upg-price": 77777777, //precio de upgrade
          "js-buyer-one-total-capacity": 77777777, //productividad del robot * cantidad de robots
          "js-buyer-two-price": 77777777, //idem de acá para abajo
          "js-buyer-two-bought": 77777777,
          "js-buyer-two-upg-price": 77777777,
          "js-buyer-two-upg-multiplier": 1200,
          "js-buyer-two-total-capacity": 77777777,
          "js-buyer-three-price": 77777777,
          "js-buyer-three-bought": 77777777,
          "js-buyer-three-upg-price": 77777777,
          "js-buyer-three-total-capacity": 77777777,
          "js-repairer-one-price": 77777777,
          "js-repairer-one-bought": 77777777,
          "js-repairer-one-upg-price": 77777777,
          "js-repairer-one-upg-multiplier": 77777777,
          "js-repairer-one-total-capacity": 77777777,
          "js-repairer-two-price": 77777777,
          "js-repairer-two-bought": 77777777,
          "js-repairer-two-upg-price": 77777777,
          "js-repairer-two-upg-multiplier": 77777777,
          "js-repairer-two-total-capacity": 77777777,
          "js-repairer-three-price": 77777777,
          "js-repairer-three-bought": 77777777,
          "js-repairer-three-upg-price": 77777777,
          "js-repairer-three-upg-multiplier": 77777777,
          "js-repairer-three-total-capacity": 77777777,
          "js-seller-one-price": 77777777,
          "js-seller-one-bought": 77777777,
          "js-seller-one-upg-price": 77777777,
          "js-seller-one-upg-multiplier": 77777777,
          "js-seller-one-total-capacity": 77777777,
          "js-seller-two-price": 77777777,
          "js-seller-two-bought": 77777777,
          "js-seller-two-upg-price": 77777777,
          "js-seller-two-upg-multiplier": 77777777,
          "js-seller-two-total-capacity": 77777777,
          "js-seller-three-price": 77777777,
          "js-seller-three-bought": 77777777,
          "js-seller-three-upg-price": 77777777,
          "js-seller-three-upg-multiplier": 77777777,
          "js-seller-three-total-capacity": 77777777
        };
    }
}