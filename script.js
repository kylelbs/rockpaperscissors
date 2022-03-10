console.log("Hello world !")

function computerPlay(){
    values = ["Rock", "Paper", "Scissors"]
    random_number = Math.floor(Math.random() * 3)
    return values[random_number]
}

function playRound(user1, user2){
    if (user1 == "Rock" && user2 == "Rock" || user1 == "Paper" && user2 == "Paper" || user1 == "Scissors" && user2 == "Scissors"){
        return "tie"
    }
    else if (user1 == "Rock" && user2 == "Scissors" || user1 == "Paper" && user2 == "Rock" || user1 == "Scissors" && user2 == "Paper"){
        return "win"
    }
    else {
        return "loose"
    }
}

function game(){
    for (let i= 0; i<5; i++) {
        result = playRound(userSelection, computerSelection)
        if 
    }
}

userSelection = prompt("Rock, Paper or Scissors ?: ")
computerSelection = computerPlay()
playRound(userSelection, computerSelection)
