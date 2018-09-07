class HiringFlow extends Flow {

    constructor() {
        super();
        console.log("Hiring Constructed");
    }

    work(context) {
        var hiringClicks = this.getQuantityOfEventsOfType(context.events, EVENTS.HIRING_CLICK);
        console.log("hiring, ",hiringClicks);
        return context;
    };



    sell(context, quantityToSell){
        context.money += quantityToSell * context.cellphoneSalePrice;
        context.stockToSale -= quantityToSell;
        return context;
    }
}