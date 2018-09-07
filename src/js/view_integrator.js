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
          "js-sale-balance": newContext.moneyEarnedSellingThisCicle, // cantidad de celulares vendidos * precio de venta
          "js-amount-phones-sold": newContext.amountOfPhonesSoldThisCicle, // cantidad de vendidos
          "js-amount-phones-awaiting-sale": newContext.stockToSale, //stock de venta
          "js-amount-sell-price": newContext.cellphoneSalePrice,
          "js-buyer-one-price": null, //precio de contrataor robot
          "js-buyer-one-bought": null, // cuantos robots tengo
          "js-buyer-one-upg-price": null, //precio de upgrade
          "js-buyer-one-total-capacity": null, //productividad del robot * cantidad de robots
          "js-buyer-two-price": null, //idem de acá para abajo
          "js-buyer-two-bought": null,
          "js-buyer-two-upg-price": null,
          "js-buyer-two-total-capacity": null,
          "js-buyer-three-price": null,
          "js-buyer-three-bought": null,
          "js-buyer-three-upg-price": null,
          "js-buyer-three-total-capacity": null,
          "js-repairer-one-price": null,
          "js-repairer-one-bought": null,
          "js-repairer-one-upg-price": null,
          "js-repairer-one-total-capacity": null,
          "js-repairer-two-price": null,
          "js-repairer-two-bought": null,
          "js-repairer-two-upg-price": null,
          "js-repairer-two-total-capacity": null,
          "js-repairer-three-price": null,
          "js-repairer-three-bought": null,
          "js-repairer-three-upg-price": null,
          "js-repairer-three-total-capacity": null,
          "js-seller-one-price": null,
          "js-seller-one-bought": null,
          "js-seller-one-upg-price": null,
          "js-seller-one-total-capacity": null,
          "js-seller-two-price": null,
          "js-seller-two-bought": null,
          "js-seller-two-upg-price": null,
          "js-seller-two-total-capacity": null,
          "js-seller-three-price": null,
          "js-seller-three-bought": null,
          "js-seller-three-upg-price": null,
          "js-seller-three-total-capacity": null
        };
    }
}