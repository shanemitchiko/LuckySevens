function RollDice() {
    return Math.floor(Math.random() * 6) + 1;
}
function Play() {
    let startingBet = Number(document.getElementById('startingBet').value);
    if(startingBet > 0) {
        let currentCash = startingBet;
        let currentRollCount = 0;
        let highestAmountWon = 0;
        let rollCountAtHighestAmount = 0;
        while(currentCash > 0){
            let Roll1 = this.RollDice();
            let Roll2 = this.RollDice();
            if ((Roll1 + Roll2) === 7) {
                currentCash += 4;
            } else {
                currentCash -= 1;
            }
            currentRollCount++;
            if(currentCash > (highestAmountWon + startingBet)){
                highestAmountWon = currentCash - startingBet;
                rollCountAtHighestAmount = currentRollCount;
            }
        }
        document.getElementById("startingBetResult").innerText = "$" + startingBet;
        document.getElementById("currentRollResult").innerText = currentRollCount;
        document.getElementById("highestAmountWonResult").innerText = "$" + highestAmountWon;
        document.getElementById("rollCountAtHighestAmountResult").innerText = rollCountAtHighestAmount;
        $('#exampleModal').modal("show")
    } else {
        alert("Error. Please try again");
    }
}


// let form = document.getElementById('checkValidation');
//     form.addEventListener('submit' , function(event) {
//         event.preventDefault();
//     } )