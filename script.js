function calculateTip() {
    var totalBill = parseFloat(document.getElementById("total-bill").value);
    var tipPercentage = parseFloat(document.getElementById("tip-percentage").value);

    if (isNaN(totalBill) || isNaN(tipPercentage)) {
        alert("Please enter valid numbers.");
        return;
    }

    var tipAmount = totalBill * (tipPercentage / 100);
    var totalAmount = totalBill + tipAmount;

    document.getElementById("result").innerHTML = "Tip Amount: $" + tipAmount.toFixed(2) + "<br>Total Amount (including tip): $" + totalAmount.toFixed(2);
}
