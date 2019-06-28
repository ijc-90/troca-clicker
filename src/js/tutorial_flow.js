class TutorialFlow extends Flow {

    constructor(gameloop) {
        super();
        this.hideEveryFlow();
        this.buyFlowIsHidden = true;
        this.saleFlowIsHidden = true;
        this.repairFlowIsHidden = true;
        this.robotsAreHidden = true;
        this.gameloop = gameloop;
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

    shouldShowRobots(context){
        if(!this.buyFlowIsHidden && !this.saleFlowIsHidden && ! this.repairFlowIsHidden && context.money >= 120){
            return true;
        }
    }

    showRobots(context){
        var titulo1 = 'Ya ganamos plata!';
        var texto1 = 'Genial, ya pudiste vender los 10 celulares. Si te acordás, empezamos con $100 y ahora tenemos $120! Usá esos $120 para comprar reparar y vender todavía más celulares... y... algún día... Conquistaremos el mundo!';
        var titulo2 = 'Si te cansaste de clickear...';
        var texto2 = 'Ahora que vimos toda tu habilidad para los negocios y tu potencial, queremos que automatices y crees procesos que trabajen por vos, podés usar la plata para construir procesos de compra, de reparo y de venta';
        var titulo3 = 'Pero cuidado';
        var texto3 = 'Ahora se nos complica la cosa... Cada proceso que armes tiene un costo inicial, y un costo fijo que tenes que pagar cada cierto tiempo... Y los celulares también cuestan plata. Tené cuidado de balancear los 3 procesos para hacerlo lo más óptimo, y siempre tener plata disponible para sueldos y comprar celulares que alimenten el proceso.';

        
        modal.show(titulo1, texto1, this.gameloop, () =>{
           modal.show(titulo2,texto2, this.gameloop,() =>{
               modal.show(titulo3,texto3, this.gameloop, () => {});
           });    
       });
        context.showRobots = true;
        this.robotsAreHidden = false;
        return context;
    }


    showRepairFlow(context){
        modal.show('Conociendo el flujo de reparo', 'Bien! Compraste 10 celulares! pero... todavía nos quedamos sin plata y aún no están listos para vender.', gameLoop, () =>{
            modal.show('Ahora a reparar!', 'Repará estos 10 celulares que compraste, para dejarlos listos!', gameLoop);    
        });
        context.showRepairFlow = true;
        this.repairFlowIsHidden = false;
    }

    showSaleFlow(context){
        modal.show('Casi listos', 'Ya tenemos los 10 celulares reparados, solo falta venderlos!', gameLoop, () =>{
        });
        context.showSaleFlow = true;
        this.saleFlowIsHidden = false;
    }




}