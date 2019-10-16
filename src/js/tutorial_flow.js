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
            var titulo2 = 'Ya sos todo un empresario';
            var texto2 = 'Ahora que sabés como funciona el negocio, puedo irme de viaje por un periodo de <b>04:00 minutos</b> y dejar todo en tus manos…</br></br>¡Buena suerte! </br>(Y no rompas nada)</br></br></br></br></br><b></br></br>psssst:</b> yo arrancaría sumando una tienda, y quizás </br>después un reparador. </br></br>¡A romperla!';
            var titulo3 = 'Antes de irme, un tip muy importante. ';
            var texto3 = 'Sumar y escalar los procesos no es gratis. Tanto kioscos, reparadores y tiendas tienen costo inicial y recurrente.';

            $(".row-robot").addClass('over-modal over-modal-move');
            //modal.show(titulo1, texto1, this.gameloop, () =>{
               modal.show(titulo2,texto2, this.gameloop,() =>{
                   modal.show(titulo3,texto3, this.gameloop, () => {
                    $(".row-robot").removeClass('over-modal over-modal-move');
                    context.tutorialOver = true;
                   });
               });
           //});
        }
        context.showRobots = true;
        this.robotsAreHidden = false;
        return context;
    }


    showRepairFlow(context){
        if (!context.skipTutorial && this.firstTimeShowingRepair){
            $("#js-repair-clicker .circle").addClass('over-modal');
            modal.show('¡Bien! Tenemos 10 celulares. ', 'Ahora que tenemos estos 10 celulares</br></br></br></br></br></br></br></br></br></br></br></br>¡A reparar!', gameLoop, () => {
                $("#js-repair-clicker .circle").removeClass('over-modal');
            });
        }
        context.showRepairFlow = true;
        this.repairFlowIsHidden = false;
        this.firstTimeShowingRepair = false;
    }


    showSaleFlow(context){
        if (!context.skipTutorial && this.firstTimeShowingSale){
            $("#js-sell-clicker .circle").addClass('over-modal');
            modal.show('¡Excelente! Tenemos celulares reparados.', 'Estamos listos para venderlos. </br></br></br></br></br></br></br></br></br></br></br></br>¡A vender!', gameLoop, () => {
                $("#js-sell-clicker .circle").removeClass('over-modal');
            });
        }
        this.firstTimeShowingSale = false;
        context.showSaleFlow = true;
        this.saleFlowIsHidden = false;
    }


}
