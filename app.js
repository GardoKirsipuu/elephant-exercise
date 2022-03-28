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

    let orderValue = amountItems * priceItem;
    let startPrice = orderValue;

    if (orderValue >= 1000 && orderValue < 5000) {
        orderValue = orderValue * 0.97;
    }
    if (orderValue >= 5000 && orderValue < 7000) {
        orderValue = orderValue * 0.95;
    }
    if (orderValue >= 7000 && orderValue < 10000) {
        orderValue = orderValue * 0.93;
    }
    if (orderValue >= 10000 && orderValue < 50000) {
        orderValue = orderValue * 0.9;
    }
    if (orderValue >= 50000) {
        orderValue = orderValue * 0.85;
    }

    const StateTax = Object.keys(stateTax).map(k => stateTax[k])[stateCode].tax

    let valueWithTax = orderValue * StateTax

    if (ValueWithTax === 0) {
        totalPrice.textContent = "Total Price: "
    } else {
        totalPrice.textContent = "Total Price: $" + (Math.round(orderValue * 100) / 100);
    }

    let savedSum = startPrice - orderValue
    if (savedSum === 0) {
        totalSave.textContent = "You saved: "
    } else {
        totalSave.textContent = "You saved: $" + (Math.round(savedSum * 100) / 100);
    }
}