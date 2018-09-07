class SaleFlow extends Flow {

    constructor() {
        super();
        console.log("SaleFlow Constructed");
    }

    work(context) {
        var saleRobots = this.getRobotsByType(Object.values(context.robots), "sale"); 
        var robotSaleCapacity = this.getRobotCapacity(saleRobots);
        var clickBuyCapacity = this.getQuantityOfEventsOfType(context.events, EVENTS.SALE_CLICK);
        var stockToSale = context.stockToSale;
        var saleCapacity = robotSaleCapacity + clickBuyCapacity;

        var quantityToSell = Math.min(stockToSale, saleCapacity);

        context = this.sell(context, quantityToSell);

        // console.log("############# SaleFlow START ############# ");
        // console.log("money:",context.money);
        // console.log("stockToSale:",context.stockToSale);
        // console.log("vendi: ",quantityToSell);
        // console.log("############# SaleFlow END ############# ");

        return context;
    };



    sell(context, quantityToSell){
        context.money += quantityToSell * context.cellphoneSalePrice;
        context.stockToSale -= quantityToSell;
        return context;
    }
}