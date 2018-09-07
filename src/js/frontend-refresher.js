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

function updateFrontend(json) {
    Object.keys(json).forEach(function (keyName) {
        var value = json[keyName];
        var elements = $("."+keyName);
        if (!isNaN(value) && elements.length !== 0) {
            console.log("Changing element", {
                keyName: keyName,
                valueInJson: value,
                element: elements,
            });
            elements.text(kFormatter(value));
        } else if (typeof(value) != "boolean") {
            console.error("ERROR, value not found.", {
                keyName: keyName,
                valueInJson: value,
                element: elements,
            })
        }
    });
}
