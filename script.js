console.log("Hello world !");

function computerPlay() {
    values = ["Rock", "Paper", "Scissors"];
    random_number = Math.floor(Math.random() * 3);
    return values[random_number];
};

function playRound(user1, user2) {
    if (user1 == "Rock" && user2 == "Rock" || user1 == "Paper" && user2 == "Paper" || user1 == "Scissors" && user2 == "Scissors") {
        return 2;
    }
    else if (user1 == "Rock" && user2 == "Scissors" || user1 == "Paper" && user2 == "Rock" || user1 == "Scissors" && user2 == "Paper") {
        return 1;
    }
    else {
        return 0;
    };
};

function game() {
    let computerScore = 0;
    let userScore = 0;
    for (let i = 0; i < 5; i++) {
        userSelection = prompt("Rock, Paper or Scissors ?: ");
        computerSelection = computerPlay();
        result = playRound(userSelection, computerSelection);
        if (result == 1) {
            userScore++;
            console.log("You won ! +1 point");
        }
        else if (result == 0) {
            computerScore++;
            console.log("You loose ! +1 point for computer");
        }
        else {
            console.log("Tie !");
        };
    };
    if (computerScore > userScore) {
        console.log(`You loose, sorry ! The result are : ${computerScore} for computer and ${userScore} for you.`);
    }
    else {
        console.log(`You won, congratulations ! The result are : ${computerScore} for computer and ${userScore} for you.`);
    }

};

game();