document.getElementById("addMon").addEventListener("click", function(){

    switchAddMoney("addM")
    // switchAddCashOut("addC")


})
document.getElementById("addCas").addEventListener("click", function(){

    
    document.getElementById("addC").classList.remove("hidden");
    document.getElementById("addM").classList.add("hidden");
    document.getElementById("addCas").classList.add( "bg-gradient-to-r", "from-indigo-700", "via-purple-700", "to-pink-700", "text-white")
    document.getElementById("addMon").classList.remove( "bg-gradient-to-r", "from-indigo-700", "via-purple-700", "to-pink-700", "text-white")



})
document.getElementById("addMon").addEventListener("click", function(){
    document.getElementById("addM").classList.remove("hidden")
    document.getElementById("addC").classList.add("hidden")
    document.getElementById("addMon").classList.add( "bg-gradient-to-r", "from-indigo-700", "via-purple-700", "to-pink-700", "text-white")
    document.getElementById("addCas").classList.remove( "bg-gradient-to-r", "from-indigo-700", "via-purple-700", "to-pink-700", "text-white")
})