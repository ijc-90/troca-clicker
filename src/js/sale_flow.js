class SaleFlow extends Flow {

    constructor() {
        super();
    }

    work(context) {
        var saleRobots = this.getRobotsByType(Object.values(context.robots), "sale"); 
        var robotSaleCapacity = this.getRobotCapacity(saleRobots);
        var clickBuyCapacity = this.getQuantityOfEventsOfType(context.events, EVENTS.SALE_CLICK);
        var stockToSale = context.stockToSale;
        var saleCapacity = robotSaleCapacity + clickBuyCapacity;

        var quantityToSell = Math.min(stockToSale, saleCapacity);

        context = this.sell(context, quantityToSell);


        return context;
    };



    sell(context, quantityToSell){
        context.money += quantityToSell * context.cellphoneSalePrice;
        context.stockToSale -= quantityToSell;

        context.moneyEarnedSellingThisCicle = quantityToSell * context.cellphoneSalePrice;
        context.amountOfPhonesSoldThisCicle = quantityToSell;
        return context;
    }
}