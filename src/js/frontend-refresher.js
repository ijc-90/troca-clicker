var sampleJson = {
    "js-total-balance": 37168,
    "js-money": 30000,
    "js-buys-balance": 30000,
    "js-amount-phones-bought": 30000,
    "js-repair-chance": 30000,
    "js-phone-buy-capability": 30000,
    "js-phone-buy-price": 30000,
    "js-repair-balance": 30000,
    "js-amount-phones-repaired": 30000,
    "js-amount-phones-awaiting-repair": 30000,
    "js-phone-repair-capability": 30000,
    "js-phone-repair-price": 30000,
    "js-sale-balance": 30000,
    "js-amount-phones-sold": 30000,
    "js-amount-phones-awaiting-sale": 30000,
    "js-amount-sell-price": 30000,
    "js-buyer-one-price": 30000,
    "js-buyer-one-bought": 30000,
    "js-buyer-one-upg-price": 30000,
    "js-buyer-one-upg-multiplier": 30000,
    "js-buyer-one-total-capacity": 30000,
    "js-buyer-two-price": 30000,
    "js-buyer-two-bought": 30000,
    "js-buyer-two-upg-price": 30000,
    "js-buyer-two-upg-multiplier": 30000,
    "js-buyer-two-total-capacity": 30000,
    "js-buyer-three-price": 30000,
    "js-buyer-three-bought": 30000,
    "js-buyer-three-upg-price": 30000,
    "js-buyer-three-upg-multiplier": 30000,
    "js-buyer-three-total-capacity": 30000,
    "js-repairer-one-price": 30000,
    "js-repairer-one-bought": 30000,
    "js-repairer-one-upg-price": 30000,
    "js-repairer-one-upg-multiplier": 30000,
    "js-repairer-one-total-capacity": 30000,
    "js-repairer-two-price": 30000,
    "js-repairer-two-bought": 30000,
    "js-repairer-two-upg-price": 30000,
    "js-repairer-two-upg-multiplier": 30000,
    "js-repairer-two-total-capacity": 30000,
    "js-repairer-three-price": 30000,
    "js-repairer-three-bought": 30000,
    "js-repairer-three-upg-price": 30000,
    "js-repairer-three-upg-multiplier": 30000,
    "js-repairer-three-total-capacity": 30000,
    "js-seller-one-price": 30000,
    "js-seller-one-bought": 30000,
    "js-seller-one-upg-price": 30000,
    "js-seller-one-upg-multiplier": 30000,
    "js-seller-one-total-capacity": 30000,
    "js-seller-two-price": 30000,
    "js-seller-two-bought": 30000,
    "js-seller-two-upg-price": 30000,
    "js-seller-two-upg-multiplier": 30000,
    "js-seller-two-total-capacity": 30000,
    "js-seller-three-price": 30000,
    "js-seller-three-bought": 30000,
    "js-seller-three-upg-price": 30000,
    "js-seller-three-upg-multiplier": 30000,
    "js-seller-three-total-capacity": 30000
};

function kFormatter(num) {
    return num > 999 ? (num/1000).toFixed(1) + 'k' : num
}

function updateNumbers(json) {
    Object.keys(json).forEach(function (keyName) {
        var value = json[keyName];
        var elements = $("."+keyName);
        if (!isNaN(value) && elements.length !== 0) {
            elements.text(kFormatter(value));
        } else if (typeof(value) !== "boolean" && keyName !== "js-salaries-amount") {
        
            elements.text(kFormatter(value));
        } else if (typeof(value) != "boolean") {
            
        }
    });
}

var robots = ['buyer-one', 'buyer-two', 'buyer-three',
    "repairer-one", 'repairer-two', 'repairer-three',
    'seller-one', 'seller-two', 'seller-three',
];

var actions = ["repair", "buy", "sell"];

function updateVisibilityOfUpgrades(json) {
    robots.forEach((robotName) => {
        var propertyName = 'js-'+robotName+'-upg-bought';
        var upgradeElementId = "#" + robotName.replace('-',"_") + "_upgrade";
        if (!json[propertyName] && json["js-money"] >= json["js-"+ robotName +"-upg-price"]) {
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
        var upgradeElementId = "#" + robotName.replace('-',"_");
        if (json["js-money"] >= json["js-"+ robotName +"-price"]) {
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

function notifyIfLost(json) {
    if (json["js-you-lose"]) {
        alert("PERDISTE!")
    }
}

function notifyPaidSalaries(json) {
    if (json["js-this-loop-must-pay-salaries"]) {
        if(json["js-you-lose"]) {
            $.notify({
                // options
                message: 'Llegó fin de mes! NO PUDISTE PAGAR LOS $' + json["js-salaries-amount"] + ' de sueldos.'
            },{
                // settings
                type: 'danger'
            });
        } else {
            $.notify({
                // options
                message: 'Llegó fin de mes! Pagarás $' + json["js-salaries-amount"] + ' de sueldos.'
            },{
                // settings
                type: 'success'
            });
        }
    }
}

function updateFrontend(json) {
    updateNumbers(json);
    updateVisibilityOfUpgrades(json);
    notifyIfLost(json);
    notifyPaidSalaries(json);
    updateVisibilityOfRobots(json);
    updateAvailabilityOfBuy(json);
    updateAvailabilityOfSell(json);
    updateAvailabilityOfRepair(json);
}


setTimeout(function () {
    updateFrontend(sampleJson);
}, 1000);
