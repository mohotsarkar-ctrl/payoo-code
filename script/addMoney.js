document.getElementById("add-money-btn").addEventListener('click', function() {
    //get the bank
    const addMoneyBank = document.getElementById("add-money-bank");
    const addMoney = addMoneyBank.value;
    if(addMoney === 'Select A Bank'){
        alert("please select a bank");
        return;
    }
    //get the bank account number
    const bankAccountNumber = document.getElementById('add-money-number');
    const bankAccount = bankAccountNumber.value;
    if(bankAccount.length !== 11){
        alert("Invalid bank account number");
        return;
    }
    // get the amount 
    const addMoneyAmountInput = document.getElementById("add-money-amount");
    const addMoneyAmount = addMoneyAmountInput.value;
    // get the balance
    const addMoneyBalanceElement = document.getElementById('balance');
    const addMoneyBalance = addMoneyBalanceElement.innerText;
    const newAddMoneyBalance = Number(addMoneyBalance) + Number(addMoneyAmount);
    // get the pin
    const addMoneyPinInput = document.getElementById("add-money-pin");
    const addMoneyPin = addMoneyPinInput.value;
    if(addMoneyPin === "1234"){
        alert("Add Money Successful");
        addMoneyBalanceElement.innerText = newAddMoneyBalance;
    }
    else{
        alert('Invalid pin');
        return;
    }
})