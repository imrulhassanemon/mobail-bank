

// function getInputFeiledValueById(){
//     console.log("will get value by Id")
    
//     const addmoney =  document.getElementById("addMoneyInput").value;
//     return addmoney
// }



function getInputFeiledValueById(id){
    const inputField = document.getElementById(id).value;
    const inputNumber = parseFloat(inputField)
    return inputNumber
    
}

function getTextFeiledValueById(id){
    const textValue = document.getElementById(id).innerText;
    const textNumber = parseInt(textValue);
    return textNumber;
}

// function switchAddMoney(id){
//     document.getElementById("addM").classList.add("hidden");
//     document.getElementById("addC").classList.add("hidden");
//     // show the file 
//     document.getElementById(id).remove("hidden");
// }


// function showError(id){
//     document.getElementById(id).remove("hidden")
// }