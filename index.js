let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")


let player = {
    name: "Anand",
    chips: 145
}
 let playerEl = document.getElementById("player-el")
 playerEl.textContent = player.name + ": $" + player.chips


 function getRandomNumber(){
    let randomNumber= Math.floor( (Math.random() * 13) + 1) 
    if(randomNumber >10){
        return 10
    } else if(randomNumber === 1){
        return 11
    } else {
        return randomNumber
    }

}

function startGame(){
    isAlive = true
    let firstCard = getRandomNumber()
    let secondCard = getRandomNumber()
    cards = [firstCard,secondCard]
    sum = firstCard + secondCard
    renderGame()
}
 
function renderGame(){

    cardsEl.textContent = "Cards: " 
    for(let i = 0; i < cards.length; i++){
        cardsEl.textContent += cards[i] + " "
    }
    if(sum <= 20)
    message = "Do you want to draw a new card?"
    else if(sum === 21){
    message = " Wohoo! You've got a BlackJack!"
    hasBlackJack = true  
    }
    else{
        message = "You're out of the Game!"
        isAlive = false
    } 
    messageEl.textContent = message
    sumEl.textContent = "Sum: " + sum 
   

}

function newCard(){

     if(isAlive === true && hasBlackJack === false){
        let thirdCard = getRandomNumber()
        sum += thirdCard
        cards.push(thirdCard)
        renderGame()    
     }
    
}
