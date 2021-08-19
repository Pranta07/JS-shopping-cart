const phonePrice = 1219;
const casePrice = 59;

function updateQuantity(type, change) {
    const input = document.getElementById(type + "-input");
    const curValue = parseInt(input.value);
    if (change == -1 && curValue == 0) {
        return;
    }
    input.value = curValue + change;

    const total = document.getElementById(type + "-total");
    const quantity = parseInt(input.value);
    if (type == "phone") {
        total.innerText = quantity * phonePrice;
    } else {
        total.innerText = quantity * casePrice;
    }
}
