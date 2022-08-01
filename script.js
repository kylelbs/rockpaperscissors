const buttons = document.querySelectorAll("button");
const buttonsdiv = document.querySelector(".buttons");

let textScore = document.createElement("p");
textScore.textContent = "";
textScore.classList.add("textScore");
buttonsdiv.appendChild(textScore);

let numberScore = document.createElement("p");
numberScore.textContent = "";
textScore.classList.add("numberScore");
buttonsdiv.appendChild(numberScore);


function computerPlay() {
    values = ["rock", "paper", "scissors"];
    random_number = Math.floor(Math.random() * 3);
    return values[random_number];
};

function playRound(user1, user2) {
    if (user1 == "rock" && user2 == "rock" || user1 == "paper" && user2 == "paper" || user1 == "scissors" && user2 == "scissors") {
        return 2;
    }
    else if (user1 == "rock" && user2 == "scissors" || user1 == "paper" && user2 == "rock" || user1 == "scissors" && user2 == "paper") {
        return 1;
    }
    else {
        return 0;
    };
};

let computerScore = 0;
let userScore = 0;
let userSelection;
let round = 5;

buttons.forEach(addEventListener('click', function (e) {
    if (round != 0) {
        userSelection = e.target.id;
        computerSelection = computerPlay();
        result = playRound(userSelection, computerSelection);
        if (result == 1) {
            userScore++;
            textScore.textContent = "You won ! +1 point";
        }
        else if (result == 0) {
            computerScore++;
            textScore.textContent = "You loose ! +1 point for computer";
        }
        else {
            textScore.textContent = "Tie !";
        };
        round--;
        numberScore.textContent = `Score - You : ${userScore} Computer: ${computerScore}`;
        if (round == 0) {
            if (computerScore > userScore) {
                textScore.textContent = `You loose, sorry ! The results are : ${computerScore} for computer and ${userScore} for you.`;
            }
            else if (computerScore == userScore) {
                textScore.textContent = `That's a tie ! The results are : ${computerScore} for computer and ${userScore} for you.`;
            }
            else {
                textScore.textContent = `You won, congratulations ! The results are : ${computerScore} for computer and ${userScore} for you.`;
            }
            round = 5;
            userScore = 0;
            computerScore = 0;
            numberScore.textContent = "";
        };
        // console.log(round);
    };
}));