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
          "js-buyer-one-price": newContext.robots["buyer_one"].baseCost, //precio de contrataor robot
          "js-buyer-one-bought": newContext.robots["buyer_one"].quantity, // cuantos robots tengo
          "js-buyer-one-upg-price": newContext.upgrades["upgrade_buyer_one"].price, //precio de upgrade
          "js-buyer-one-total-capacity": newContext.robots["buyer_one"].baseCost * newContext.robots["buyer_one"].quantity, //productividad del robot * cantidad de robots
          "js-buyer-two-price": newContext.robots["buyer_two"].baseCost, //idem de acá para abajo
          "js-buyer-two-bought": newContext.robots["buyer_two"].quantity,
          "js-buyer-two-upg-price": 77777777,
          "js-buyer-two-total-capacity": newContext.robots["buyer_two"].baseCost * newContext.robots["buyer_two"].quantity,
          "js-buyer-three-price": newContext.robots["buyer_three"].baseCost,
          "js-buyer-three-bought": newContext.robots["buyer_three"].quantity,
          "js-buyer-three-upg-price": 77777777,
          "js-buyer-three-total-capacity": newContext.robots["buyer_three"].baseCost * newContext.robots["buyer_three"].quantity,
          "js-repairer-one-price": newContext.robots["repairer_one"].baseCost,
          "js-repairer-one-bought": newContext.robots["repairer_one"].quantity,
          "js-repairer-one-upg-price": 77777777,
          "js-repairer-one-total-capacity": newContext.robots["repairer_one"].baseCost * newContext.robots["repairer_one"].quantity,
          "js-repairer-two-price": newContext.robots["repairer_two"].baseCost,
          "js-repairer-two-bought": newContext.robots["repairer_two"].quantity,
          "js-repairer-two-upg-price": 77777777,
          "js-repairer-two-total-capacity": newContext.robots["repairer_two"].baseCost * newContext.robots["repairer_two"].quantity,
          "js-repairer-three-price": newContext.robots["repairer_three"].baseCost,
          "js-repairer-three-bought": newContext.robots["repairer_three"].quantity,
          "js-repairer-three-upg-price": 77777777,
          "js-repairer-three-total-capacity": newContext.robots["repairer_three"].baseCost * newContext.robots["repairer_three"].quantity,
          "js-seller-one-price": newContext.robots["seller_one"].baseCost,
          "js-seller-one-bought": newContext.robots["seller_one"].quantity,
          "js-seller-one-upg-price": 77777777,
          "js-seller-one-total-capacity": newContext.robots["seller_one"].baseCost * newContext.robots["seller_one"].quantity,
          "js-seller-two-price": newContext.robots["seller_two"].baseCost,
          "js-seller-two-bought": newContext.robots["seller_two"].quantity,
          "js-seller-two-upg-price": 77777777,
          "js-seller-two-total-capacity": newContext.robots["seller_two"].baseCost * newContext.robots["seller_two"].quantity,
          "js-seller-three-price": newContext.robots["seller_three"].baseCost,
          "js-seller-three-bought": newContext.robots["seller_three"].quantity,
          "js-seller-three-upg-price": 77777777,
          "js-seller-three-total-capacity": newContext.robots["seller_three"].baseCost * newContext.robots["seller_three"].quantity
        };
    }
}