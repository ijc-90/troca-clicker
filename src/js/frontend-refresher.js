var sampleJson = {
    "js-total-balance": 1200,
    "js-money": 1200,
    "js-buys-balance": 1200,
    "js-amount-phones-bought": 1200,
    "js-repair-chance": 1200,
    "js-phone-buy-capability": 1200,
    "js-phone-buy-price": 1200,
    "js-repair-balance": 1200,
    "js-amount-phones-repaired": 1200,
    "js-amount-phones-awaiting-repair": 1200,
    "js-phone-repair-capability": 1200,
    "js-phone-repair-price": 1200,
    "js-sale-balance": 1200,
    "js-amount-phones-sold": 1200,
    "js-amount-phones-awaiting-sale": 1200,
    "js-amount-sell-price": 1200,
    "js-buyer-one-price": 1200,
    "js-buyer-one-bought": 1200,
    "js-buyer-one-upg-price": 1200,
    "js-buyer-one-upg-multiplier": 1200,
    "js-buyer-one-total-capacity": 1200,
    "js-buyer-two-price": 1200,
    "js-buyer-two-bought": 1200,
    "js-buyer-two-upg-price": 1200,
    "js-buyer-two-upg-multiplier": 1200,
    "js-buyer-two-total-capacity": 1200,
    "js-buyer-three-price": 1200,
    "js-buyer-three-bought": 1200,
    "js-buyer-three-upg-price": 1200,
    "js-buyer-three-upg-multiplier": 1200,
    "js-buyer-three-total-capacity": 1200,
    "js-repairer-one-price": 1200,
    "js-repairer-one-bought": 1200,
    "js-repairer-one-upg-price": 1200,
    "js-repairer-one-upg-multiplier": 1200,
    "js-repairer-one-total-capacity": 1200,
    "js-repairer-two-price": 1200,
    "js-repairer-two-bought": 1200,
    "js-repairer-two-upg-price": 1200,
    "js-repairer-two-upg-multiplier": 1200,
    "js-repairer-two-total-capacity": 1200,
    "js-repairer-three-price": 1200,
    "js-repairer-three-bought": 1200,
    "js-repairer-three-upg-price": 1200,
    "js-repairer-three-upg-multiplier": 1200,
    "js-repairer-three-total-capacity": 1200,
    "js-seller-one-price": 1200,
    "js-seller-one-bought": 1200,
    "js-seller-one-upg-price": 1200,
    "js-seller-one-upg-multiplier": 1200,
    "js-seller-one-total-capacity": 1200,
    "js-seller-two-price": 1200,
    "js-seller-two-bought": 1200,
    "js-seller-two-upg-price": 1200,
    "js-seller-two-upg-multiplier": 1200,
    "js-seller-two-total-capacity": 1200,
    "js-seller-three-price": 1200,
    "js-seller-three-bought": 1200,
    "js-seller-three-upg-price": 1200,
    "js-seller-three-upg-multiplier": 1200,
    "js-seller-three-total-capacity": 1200
};

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
            elements.text(value);
        } else {
            console.error("ERROR, value not found.", {
                keyName: keyName,
                valueInJson: value,
                element: elements,
            })
        }
    });
}
