var sampleJson = {
    "js-total-balance": 0,
    "js-money": 0,
    "js-buys-balance": 0,
    "js-amount-phones-bought": 0,
    "js-repair-chance": 0,
    "js-phone-buy-capability": 0,
    "js-phone-buy-price": 0,
    "js-repair-balance": 0,
    "js-amount-phones-total": 0,
    "js-amount-phones-repaired": 0,
    "js-amount-phones-awaiting-repair": 0,
    "js-phone-repair-capability": 0,
    "js-phone-repair-price": 0,
    "js-sale-balance": 0,
    "js-amount-phones-sold": 0,
    "js-amount-phones-awaiting-sale": 0,
    "js-amount-sell-price": 0,
    "js-buyer-one-price": 0,
    "js-buyer-one-bought": 0,
    "js-buyer-one-upg-price": 0,
    "js-buyer-one-upg-multiplier": 0,
    "js-buyer-one-total-capacity": 0,
    "js-buyer-two-price": 0,
    "js-buyer-two-bought": 0,
    "js-buyer-two-upg-price": 0,
    "js-buyer-two-upg-multiplier": 0,
    "js-buyer-two-total-capacity": 0,
    "js-buyer-three-price": 0,
    "js-buyer-three-bought": 0,
    "js-buyer-three-upg-price": 0,
    "js-buyer-three-upg-multiplier": 0,
    "js-buyer-three-total-capacity": 0,
    "js-repairer-one-price": 0,
    "js-repairer-one-bought": 0,
    "js-repairer-one-upg-price": 0,
    "js-repairer-one-upg-multiplier": 0,
    "js-repairer-one-total-capacity": 0,
    "js-repairer-two-price": 0,
    "js-repairer-two-bought": 0,
    "js-repairer-two-upg-price": 0,
    "js-repairer-two-upg-multiplier": 0,
    "js-repairer-two-total-capacity": 0,
    "js-repairer-three-price": 0,
    "js-repairer-three-bought": 0,
    "js-repairer-three-upg-price": 0,
    "js-repairer-three-upg-multiplier": 0,
    "js-repairer-three-total-capacity": 0,
    "js-seller-one-price": 0,
    "js-seller-one-bought": 0,
    "js-seller-one-upg-price": 0,
    "js-seller-one-upg-multiplier": 0,
    "js-seller-one-total-capacity": 0,
    "js-seller-two-price": 0,
    "js-seller-two-bought": 0,
    "js-seller-two-upg-price": 0,
    "js-seller-two-upg-multiplier": 0,
    "js-seller-two-total-capacity": 0,
    "js-seller-three-price": 0,
    "js-seller-three-bought": 0,
    "js-seller-three-upg-price": 0,
    "js-seller-three-upg-multiplier": 0,
    "js-seller-three-total-capacity": 0,
    "js-salaries-time-for-payment": 0,
    "js-you-lose": 0
};

var notifiersWhiteList = [
    "js-money",
    "js-salaries-amount",
    "js-amount-phones-awaiting-repair",
    "js-amount-phones-awaiting-sale",
    "js-phone-buy-capability",
    "js-phone-repair-capability",
];

function kFormatter(num) {
    return num > 999 ? (num / 1000).toFixed(1) + 'k' : num
}

function kFormatterInverse(num) {
    if (num.indexOf('k') !== -1) {
        return Number(num.replace('k', '')) * 1000;
    }

    return Number(num);
}

function updateNumbers(json) {
    if (json === null || json === undefined) {
        return;
    }

    Object.keys(json).forEach(function (keyName) {
        var value = json[keyName];
        var elements = $("." + keyName);

        if (notifiersWhiteList.indexOf(keyName) !== -1) {
            renderFloatingNotify(value, elements);
        }


        if (!isNaN(value) && elements.length !== 0) {
            elements.text(kFormatter(value));
        } else if (typeof (value) !== "boolean" && keyName !== "js-salaries-amount") {

            elements.text(kFormatter(value));
        } else if (typeof (value) != "boolean") {

        }
    });
}

function renderFloatingNotify(value, $elements) {
    const lastValue = kFormatterInverse($elements.first().text());
    if (typeof value === 'number' || typeof lastValue === 'number') {
        if (lastValue !== value) {
            const diff = value - lastValue;
            if (diff !== 0) {
                $elements.each(function () {
                    if (diff < 0) {
                        floatingNotifiers.elementTextRed($(this), `${diff}`);
                    } else {
                        floatingNotifiers.elementText($(this), `${diff}`);
                    }

                })
            }
        }
    }
}

var robots = ['buyer-one', 'buyer-two', 'buyer-three',
    "repairer-one", 'repairer-two', 'repairer-three',
    'seller-one', 'seller-two', 'seller-three',
];


var actions = ["repair", "buy", "sell"];

function updateVisibilityOfUpgrades(json) {
    robots.forEach((robotName) => {
        var propertyName = 'js-' + robotName + '-upg-bought';
        var upgradeElementId = "#" + robotName.replace('-', "_") + "_upgrade";
        if (!json[propertyName] && json["js-money"] >= json["js-" + robotName + "-upg-price"]) {
            $(upgradeElementId)[0].style.opacity = 1;
            $(upgradeElementId).addClass("enabled");
            $(upgradeElementId).removeClass("disabled");
        } else {
            $(upgradeElementId)[0].style.opacity = 0.5;
            $(upgradeElementId).addClass("disabled");
            $(upgradeElementId).removeClass("enabled");
        }
    })
}

function updateVisibilityOfRobots(json) {
    robots.forEach((robotName) => {
        var upgradeElementId = "#" + robotName.replace('-', "_");
        if (json["js-money"] >= json["js-" + robotName + "-price"]) {
            $(upgradeElementId)[0].style.opacity = 1;
            $(upgradeElementId).addClass("enabled");
            $(upgradeElementId).removeClass("disabled");
        } else {
            $(upgradeElementId)[0].style.opacity = 0.5;
            $(upgradeElementId).addClass("disabled");
            $(upgradeElementId).removeClass("enabled");
        }
    })
}

function updateAvailabilityOfSell(json) {
    var upgradeElementId = "#js-sell-clicker";
    if (json["js-amount-phones-awaiting-sale"] > 0) {
        $(upgradeElementId)[0].style.opacity = 1;
        $(upgradeElementId).addClass("enabled");
        $(upgradeElementId).removeClass("disabled");
    } else {
        $(upgradeElementId)[0].style.opacity = 0.2;
        $(upgradeElementId).addClass("disabled");
        $(upgradeElementId).removeClass("enabled");
    }
}

function updateAvailabilityOfRepair(json) {
    var upgradeElementId = "#js-repair-clicker";
    if (json["js-money"] >= json["js-phone-repair-price"] && json["js-amount-phones-awaiting-repair"] > 0) {
        $(upgradeElementId)[0].style.opacity = 1;
        $(upgradeElementId).addClass("enabled");
        $(upgradeElementId).removeClass("disabled");
    } else {
        $(upgradeElementId)[0].style.opacity = 0.2;
        $(upgradeElementId).addClass("disabled");
        $(upgradeElementId).removeClass("enabled");
    }
}

function updateAvailabilityOfBuy(json) {
    var upgradeElementId = "#js-buy-clicker";
    if (json["js-money"] >= json["js-phone-buy-price"]) {
        $(upgradeElementId)[0].style.opacity = 1;
        $(upgradeElementId).addClass("enabled");
        $(upgradeElementId).removeClass("disabled");
    } else {
        $(upgradeElementId)[0].style.opacity = 0.2;
        $(upgradeElementId).addClass("disabled");
        $(upgradeElementId).removeClass("enabled");
    }
}

function showOrHideFlows(json) {
    var buyFlowSelector = ".js-buy-flow-container";
    $(buyFlowSelector).css({ display: "flex" });
    if (json["showBuyFlow"]) {
        //$(buyFlowSelector).css({ display: "flex" });
    } else {
        //$(buyFlowSelector).css({ display: "none" });
    }

    var repairFlowSelector = ".js-repair-flow-container";
    $(repairFlowSelector).css({ display: "flex" });
    if (json["showRepairFlow"]) {
        //$(repairFlowSelector).css({ display: "flex" });
    } else {
        //$(repairFlowSelector).css({ display: "none" });
    }

    var saleFlowSelector = ".js-sale-flow-container";
    $(saleFlowSelector).css({ display: "flex" });
    if (json["showSaleFlow"]) {
        //$(saleFlowSelector).css({ display: "flex" });
    } else {
        //$(saleFlowSelector).css({ display: "none" });
    }

    var robotSelect = ".js-robots";
    $(robotSelect).css({ display: "block" });
    if (json["showRobots"]) {
        //$(robotSelect).css({ display: "block" });
    } else {
        //$(robotSelect).css({ display: "none" });
    }
}

function notifyIfLost(json, gameLoop) {
    if (json["js-you-lose"] && (gameLoop !== null && gameLoop !== undefined)) {
        modal.show('Perdiste', 'Ups lo volviste a hacer, la próxima será.', gameLoop, () => {
            document.location.reload();
        });
    }
}

function notifyPaidSalaries(json) {
    if (json["js-this-loop-must-pay-salaries"]) {
        if (json["js-you-lose"]) {
            $.notify({
                // options
                message: 'Llegó fin de mes! NO PUDISTE PAGAR LOS $' + json["js-salaries-amount"] + ' de sueldos.'
            }, {
                // settings
                type: 'danger'
            });
        } else {
            $.notify({
                // options
                message: 'Llegó fin de mes! Pagarás $' + json["js-salaries-amount"] + ' de sueldos.'
            }, {
                // settings
                type: 'success'
            });
        }
    }
}

function updateFrontend(json, gameLoop) {
    if (json === null || json === undefined) {
        return;
    }

    updateNumbers(json);
    //updateVisibilityOfUpgrades(json);
    notifyIfLost(json, gameLoop);
    notifyPaidSalaries(json);
    updateVisibilityOfRobots(json);
    updateAvailabilityOfBuy(json);
    updateAvailabilityOfSell(json);
    updateAvailabilityOfRepair(json);
    showOrHideFlows(json);
}


setTimeout(function () {
    updateFrontend(sampleJson, null);
}, 1000);
