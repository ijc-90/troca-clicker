class SaleFlow extends Flow {

    constructor() {
        super();
        console.log("SaleFlow Constructed");
    }

    work(context) {
        var saleRobots = context.robots.sale;     
        var robotSaleCapacity = this.getRobotCapacity(saleRobots);
        var stockToSale = context.stockToSale;

        var quantityToSell = Math.min(stockToSale, robotSaleCapacity);

        context = this.sell(context, quantityToSell);

        console.log("############# SaleFlow START ############# ");
        console.log("money:",context.money);
        console.log("stockToSale:",context.stockToSale);
        console.log("############# SaleFlow END ############# ");

        return context;
    };



    sell(context, quantityToSell){
        context.money += quantityToSell * context.cellphoneSalePrice;
        context.stockToSale -= quantityToSell;
        return context;
    }
}