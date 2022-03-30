onchange = function () { calcPrice };

let stateTax = [
    { code: "UT", tax: 1.05 },
    { code: "NV", tax: 1.08 },
    { code: "TX", tax: 1.0625 },
    { code: "AL", tax: 1.04 },
    { code: "CA", tax: 1.0825 }
]

function calcPrice(event) {
    const amountItems = document.querySelector("#amountInput").value;
    const priceItem = document.querySelector("#priceInput").value;
    const stateCode = document.querySelector("#stateInput").value;
    const totalPrice = document.querySelector("#totalPrc");

    if (amountItems && priceItem && stateCode) {
        let orderValue = amountItems * priceItem;
        let startPrice = orderValue;
        let toDiscount

        if (orderValue < 1000) {
            toDiscount = 1000 - orderValue;
        }

        if (orderValue >= 1000 && orderValue < 5000) {
            orderValue = orderValue * 0.97;
            toDiscount = 5000 - startPrice;
        }
        if (orderValue >= 5000 && orderValue < 7000) {
            orderValue = orderValue * 0.95;
            toDiscount = 7000 - startPrice;
        }
        if (orderValue >= 7000 && orderValue < 10000) {
            orderValue = orderValue * 0.93;
            toDiscount = 10000 - startPrice;
        }
        if (orderValue >= 10000 && orderValue < 50000) {
            orderValue = orderValue * 0.9;
            toDiscount = 50000 - startPrice;
        }
        if (orderValue >= 50000) {
            orderValue = orderValue * 0.85;
        }

        StateTax = Object.keys(stateTax).map(k => stateTax[k])[stateCode].tax

        let valueWithTax = orderValue * StateTax;

        if (valueWithTax === 0) {
            totalPrice.textContent = "Total Price: "
        } else {
            totalPrice.textContent = "Total Price: $" + (Math.round(valueWithTax * 100) / 100);
        }

        let savedSum = startPrice - orderValue
        if (savedSum === 0) {
            totalSave.textContent = "You saved: $0"
        } else {
            totalSave.textContent = "You saved: $" + (Math.round(savedSum * 100) / 100);
        }

        if (toDiscount >= 1000 && toDiscount < 50000) {
            totalMore.textContent = "You need to spend $" + toDiscount + " more for a better discount";
        } else {
            totalMore.textContent = "You need to spend $" + toDiscount + " more for a discount";
        }
    }    
}
