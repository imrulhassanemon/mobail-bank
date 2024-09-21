
document.getElementById("addmoney").addEventListener("click", function(event){
    event.preventDefault();
    


    const addMoney = getInputFeiledValueById("addMoneyInput")
    const addPin = getInputFeiledValueById("pinNumber")
    console.log(addMoney, addPin)


    // wrong way to varyfied 

    if(addPin === 123){
        
        const amount =  getTextFeiledValueById("total")

        const  totalAmount = addMoney + amount;

        document.getElementById("total").innerText = totalAmount;   
        

    }else{
        document.getElementById("pinNumber").classList.remove("pinNumber");
    }

})



