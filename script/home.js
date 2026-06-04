document.getElementById("cashout-btn").addEventListener('click', function(){
    //get the agent number
    const cashoutNumberInput = document.getElementById('cashout-number');
    const cashoutNumber = cashoutNumberInput.value;
    if(cashoutNumber.length !==11){
        alert("Invalid Number");
        return;
    }
    //get the ammout
    const cashoutAmountInput =document.getElementById("cashout-amount");
    const cashoutAmount = cashoutAmountInput.value;
    //get the balance
    const balanceElement = document.getElementById('balance');
    const balance = balanceElement.innerText;
    const newBalance = Number(balance) - Number(cashoutAmount);
    if(newBalance < 0){
        alert("Invalid Amount");
        return;
    }
    // get the pin input 
    const cashoutPin = document.getElementById("cashout-pin");
    const Pin = cashoutPin.value;
    if(Pin === "1234"){
        alert("Cashout Successful");
        balanceElement.innerText = newBalance;
    }
    else{
        alert("Invalid  Pin");
        return;
    }
})