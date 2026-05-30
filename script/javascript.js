
document.getElementById("login-btn").addEventListener('click', function(){
    const numberInput = document.getElementById("input-number");
    const contactNumber =numberInput.value;
    const pinNumber = document.getElementById("pin-number");
    const pin = pinNumber.value;
    if(contactNumber == "01311675428" && pin == "1234"){
        alert("login Successful");
        window.location.assign("home.html")
    }
    else{
        alert("login Failed");
        return;
    }
} )