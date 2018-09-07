class ViewIntegrator {
    constructor(){}

    generateViewRawData(oldContext, newContext){
        var robots = Object.values(newContext.robots);
        
        var buyRobots = robots.filter(function(robot){
            return robot.type == "buy";
        });
        var buyRobotsProductivity = buyRobots.reduce(function(carry, robot){
            return (robot.production * robot.quantity) + carry;
        }, 0);

        var repairRobots = robots.filter(function(robot){
            return robot.type == "repair";
        });
        var repairRobotsProductivity = repairRobots.reduce(function(carry, robot){
            return (robot.production * robot.quantity) + carry;
        }, 0);

        var saleRobots = robots.filter(function(robot){
            return robot.type == "sale";
        });
        
        var saleRobotsProductivity = saleRobots.reduce(function(carry, robot){
            return (robot.production * robot.quantity) + carry;
        }, 0);

        var totalSalaries = robots.reduce(function(carry, robot) {
            var totalForRobotKind = robot.quantity * robot.salary;
            return carry + totalForRobotKind;
        }, 0);

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
          "js-phone-sale-capability": saleRobotsProductivity,
          
          "js-buyer-one-price": newContext.robots["buyer_one"].baseCost, //precio de contrataor robot
          "js-buyer-one-bought": newContext.robots["buyer_one"].quantity, // cuantos robots tengo
          "js-buyer-one-upg-price": newContext.upgrades["upgrade_buyer_one"].price, //precio de upgrade
          "js-buyer-one-upg-bought": newContext.upgrades["upgrade_buyer_one"].isActive,
          "js-buyer-one-upg-multiplier": newContext.upgrades["upgrade_buyer_one"].productionMultiplier,
          "js-buyer-one-total-capacity": newContext.robots["buyer_one"].production * newContext.robots["buyer_one"].quantity, //productividad del robot * cantidad de robots
          
          "js-buyer-two-price": newContext.robots["buyer_two"].baseCost, //idem de acá para abajo
          "js-buyer-two-bought": newContext.robots["buyer_two"].quantity,
          "js-buyer-two-upg-price": newContext.upgrades["upgrade_buyer_two"].price,
          "js-buyer-two-upg-bought": newContext.upgrades["upgrade_buyer_two"].isActive,
          "js-buyer-two-upg-multiplier": newContext.upgrades["upgrade_buyer_two"].productionMultiplier,
          "js-buyer-two-total-capacity": newContext.robots["buyer_two"].production * newContext.robots["buyer_two"].quantity,

          "js-buyer-three-price": newContext.robots["buyer_three"].baseCost,
          "js-buyer-three-bought": newContext.robots["buyer_three"].quantity,
          "js-buyer-three-upg-price": newContext.upgrades["upgrade_buyer_three"].price,
          "js-buyer-three-upg-bought": newContext.upgrades["upgrade_buyer_three"].isActive,
          "js-buyer-three-upg-multiplier": newContext.upgrades["upgrade_buyer_three"].productionMultiplier,
          "js-buyer-three-total-capacity": newContext.robots["buyer_three"].production * newContext.robots["buyer_three"].quantity,
          
          "js-repairer-one-price": newContext.robots["repairer_one"].baseCost,
          "js-repairer-one-bought": newContext.robots["repairer_one"].quantity,
          "js-repairer-one-upg-price": newContext.upgrades["upgrade_repairer_one"].price,
          "js-repairer-one-upg-bought": newContext.upgrades["upgrade_repairer_one"].isActive,
          "js-repairer-one-upg-multiplier": newContext.upgrades["upgrade_repairer_one"].productionMultiplier,
          "js-repairer-one-total-capacity": newContext.robots["repairer_one"].production * newContext.robots["repairer_one"].quantity,
          
          "js-repairer-two-price": newContext.robots["repairer_two"].baseCost,
          "js-repairer-two-bought": newContext.robots["repairer_two"].quantity,
          "js-repairer-two-upg-price": newContext.upgrades["upgrade_repairer_two"].price,
          "js-repairer-two-upg-bought": newContext.upgrades["upgrade_repairer_two"].isActive,
          "js-repairer-two-upg-multiplier": newContext.upgrades["upgrade_repairer_two"].productionMultiplier,
          "js-repairer-two-total-capacity": newContext.robots["repairer_two"].production * newContext.robots["repairer_two"].quantity,
          
          "js-repairer-three-price": newContext.robots["repairer_three"].baseCost,
          "js-repairer-three-bought": newContext.robots["repairer_three"].quantity,
          "js-repairer-three-upg-price": newContext.upgrades["upgrade_buyer_three"].price,
          "js-repairer-three-upg-bought": newContext.upgrades["upgrade_buyer_three"].isActive,
          "js-repairer-three-upg-multiplier": newContext.upgrades["upgrade_repairer_three"].productionMultiplier,
          "js-repairer-three-total-capacity": newContext.robots["repairer_three"].production * newContext.robots["repairer_three"].quantity,
          
          "js-seller-one-price": newContext.robots["seller_one"].baseCost,
          "js-seller-one-bought": newContext.robots["seller_one"].quantity,
          "js-seller-one-upg-price": newContext.upgrades["upgrade_seller_one"].price,
          "js-seller-one-upg-bought": newContext.upgrades["upgrade_seller_one"].isActive,
          "js-seller-one-upg-multiplier": newContext.upgrades["upgrade_seller_one"].productionMultiplier,
          "js-seller-one-total-capacity": newContext.robots["seller_one"].production * newContext.robots["seller_one"].quantity,
          
          "js-seller-two-price": newContext.robots["seller_two"].baseCost,
          "js-seller-two-bought": newContext.robots["seller_two"].quantity,
          "js-seller-two-upg-price": newContext.upgrades["upgrade_seller_two"].price,
          "js-seller-two-upg-bought": newContext.upgrades["upgrade_seller_two"].isActive,
          "js-seller-two-upg-multiplier": newContext.upgrades["upgrade_seller_two"].productionMultiplier,
          "js-seller-two-total-capacity": newContext.robots["seller_two"].production * newContext.robots["seller_two"].quantity,
          
          "js-seller-three-price": newContext.robots["seller_three"].baseCost,
          "js-seller-three-bought": newContext.robots["seller_three"].quantity,
          "js-seller-three-upg-price": newContext.upgrades["upgrade_seller_three"].price,
          "js-seller-three-upg-bought": newContext.upgrades["upgrade_seller_three"].isActive,
          "js-seller-three-upg-multiplier": newContext.upgrades["upgrade_seller_three"].productionMultiplier,
          "js-seller-three-total-capacity": newContext.robots["seller_three"].production * newContext.robots["seller_three"].quantity,
          
          "js-this-loop-must-pay-salaries": newContext.salariesPaidThisTick,
          "js-salaries-amount": totalSalaries,
          "js-you-lose": newContext.gameOver,
          "js-you-win": newContext.gameWon,
        };
    }
}