class TutorialFlow extends Flow {

    constructor(gameloop) {
        super();
        this.hideEveryFlow();
        this.buyFlowIsHidden = true;
        this.saleFlowIsHidden = true;
        this.repairFlowIsHidden = true;
        this.robotsAreHidden = true;
        this.gameloop = gameloop;
        this.firstTimeShowingRepair = true;
        this.firstTimeShowingSale = true;
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

        if(this.robotsAreHidden && this.shouldShowRobots(context)){
            this.showRobots(context);
        }
        return context;
    };

    hideEveryFlow(context){
        this.hideBuyFlow(context);
        this.hideSaleFlow(context);
        this.hideRepairFlow(context);
    }

    hideBuyFlow(context){
        this.buyFlowIsHidden = true;
        if (context){
            context.showBuyFlow = false;
        }
    }

    hideSaleFlow(context){
        this.saleFlowIsHidden = true;
        if (context){
            context.showSaleFlow = false;
        }
    }

    hideRepairFlow(context){
        this.repairFlowIsHidden = true;
        if (context){
            context.showRepairFlow = false;
        }
    }

    shouldShowBuyFlow(context){
        if (context.skipTutorial){
            return true;
        }

        return true;
    }

    shouldShowRepairFlow(context){
        return context.stockToRepair >= 10 || context.skipTutorial;
    }

    shouldShowSaleFlow(context){
        return context.stockToSale >= 10 || context.skipTutorial;
    }


    showBuyFlow(context){
        context.showBuyFlow = true;
        this.buyFlowIsHidden = false; 
    }

    shouldShowRobots(context){
        if (context.skipTutorial){
            return true;
        }
        if(!this.buyFlowIsHidden && !this.saleFlowIsHidden && ! this.repairFlowIsHidden && context.money >= 120){
            return true;
        }
    }

    showRobots(context){
        if (!context.skipTutorial){
            //var titulo1 = 'Ya ganamos plata!';
            //var texto1 = 'Genial, ya pudiste vender los 10 celulares. Si te acordás, empezamos con $100 y ahora tenemos $120! Usá esos $120 para comprar reparar y vender todavía más celulares... y... algún día... Conquistaremos el mundo!';
            var titulo2 = 'Ya compramos, reparamos y vendimos!';
            var texto2 = 'Ahora podés contratar para que lo hagan por vos. Te recomiendo comprar una Tienda (venta), luego un reparador, y luego un quiosco (compra)';
            var titulo3 = 'Pero cuidado';
            var texto3 = 'Contratar tiene costo (inicial y recurrente). Tené cuidado con los compradores, que si compran de más te dejan sin plata!';
            
            //modal.show(titulo1, texto1, this.gameloop, () =>{
               modal.show(titulo2,texto2, this.gameloop,() =>{
                   modal.show(titulo3,texto3, this.gameloop, () => {});
               });    
           //});
        }
        context.showRobots = true;
        this.robotsAreHidden = false;
        return context;
    }


    showRepairFlow(context){
        if (!context.skipTutorial && this.firstTimeShowingRepair){
            modal.show('Ahora a reparar!', 'Bien! Compraste 10 celulares! pero... hay que repararlos!', gameLoop);
        }
        context.showRepairFlow = true;
        this.repairFlowIsHidden = false;
        this.firstTimeShowingRepair = false;
    }

    showSaleFlow(context){
        if (!context.skipTutorial && this.firstTimeShowingSale){
            modal.show('Listo, reparados...', 'Ahora a venderlos!', gameLoop, () =>{});
        }
        this.firstTimeShowingSale = false;
        context.showSaleFlow = true;
        this.saleFlowIsHidden = false;
    }

   
}