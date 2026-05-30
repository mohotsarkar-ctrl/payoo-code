document.getElementById("cashout-btn").addEventListener("click", function(){
    //number-input
    const cashoutNumberInput = document.getElementById('cashout-number');
    const cashoutNumber = cashoutNumberInput.value;
    if(cashoutNumber.length !== 11){
        alert("Invalid Agent Number");
        return;
    }
    //amount-input
    const cashoutAmountInput =document.getElementById("cashout-amount");
    const cashoutAmount = cashoutAmountInput.value;

    const balanceElement = document.getElementById("balance");
    const balance = balanceElement.innerText;
    const newbalance = Number(balance) - Number(cashoutAmount);
    if(newbalance < 0){
        alert("Invalid Amount");
        return;
    }
    const cashoutPin = document.getElementById("cashout-pin");
    const pin = cashoutPin.value;
    if(pin === "1234"){
        alert("Cashout Successful");
        balanceElement.innerText = newbalance;
    }
    else{
        alert("Invalid Pin")
        return;
    }
})