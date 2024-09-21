document.getElementById("cashOut").addEventListener("click", function(event){
    event.preventDefault();

    const cashOutAmount = getInputFeiledValueById("cashOut-amount");
    const pinNumber = getInputFeiledValueById("cashOut-pinnumber");
    console.log(cashOutAmount, pinNumber)


    // bad way to verify the pin number 
    if(pinNumber === 123){

        const mainAmount = getTextFeiledValueById("total");

        const totalAmount = mainAmount - cashOutAmount;

        document.getElementById("total").innerText = totalAmount;




    }else{
        // alert("Invalid pin! Please try again later")
        // document.getElementById("CashoutPin").remove("hidden");
        // showError("CashoutPin")
        document.getElementById("cashoutPin").classList.remove("hidden")
    }

    // const swich = getTextFeiledValueById("addM");
    
})