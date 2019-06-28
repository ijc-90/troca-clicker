class TutorialFlow extends Flow {

    constructor() {
        super();
        this.hideEveryFlow();
        this.buyFlowIsHidden = true;
        this.saleFlowIsHidden = true;
        this.repairFlowIsHidden = true;
    }

    work(context) {
        if (this.buyFlowIsHidden && this.shouldShowBuyFlow(context)){
            this.showBuyFlow(context);
        }
        if (this.saleFlowIsHidden && this.shouldShowSaleFlow(context)){
            this.showSaleFlow(context);
        }
        if (this.repairFlowIsHidden && this.shouldShowRepairFlow(context)){
            this.showRepairFlow(context);
        }
        return context;
    };

    hideEveryFlow(){
        this.hideBuyFlow();
        this.hideSaleFlow();
        this.hideRepairFlow();
    }

    hideBuyFlow(){
        this.buyFlowIsHidden = true;
    }

    hideSaleFlow(){
        this.saleFlowIsHidden = true;
    }

    hideRepairFlow(){
        this.repairFlowIsHidden = true;
    }

    shouldShowBuyFlow(context){
        return true;
    }

    shouldShowRepairFlow(context){
        return context.stockToRepair >= 10;
    }

    shouldShowSaleFlow(context){
        return context.stockToSale >= 10;
    }


    showBuyFlow(context){
        context.showBuyFlow = true;
        this.buyFlowIsHidden = false; 
    }


    showRepairFlow(context){
        context.showRepairFlow = true;
        this.repairFlowIsHidden = false;
    }

    showSaleFlow(context){
        context.showSaleFlow = true;
        this.saleFlowIsHidden = false;
        
    }


}