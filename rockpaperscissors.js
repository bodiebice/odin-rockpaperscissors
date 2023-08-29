function getComputerChoice(){
  let rand = Math.floor(Math.random() *100) +1
  let computerChoice = rand % 3
  switch(computerChoice){
    case 0:
      return("rock");
      break;
    case 1:
      return("paper");
    case 2:
      return("scissors");
  }
}
const playerSelection = "ROCK"

function rpsGame(playerSelection) {
  let compChoice = getComputerChoice()
  playerSelection = playerSelection.toLowerCase()
  if (playerSelection == "rock" || playerSelection == "scissors" || playerSelection == "paper"){
    if (compChoice == "rock") {
      if (playerSelection=="rock") {
        console.log("You tied with the computer! Try Again!")
        return 0;
      }
      if (playerSelection == "paper"){
        console.log("You Win! paper beats rock")
        return 1;
      }
      if (playerSelection == "scissors"){
        console.log("You lose! Rock beats Scissors")
        return -1;
      }
    }
    if (compChoice == "paper"){
      if (playerSelection=="paper"){
        console.log("You tied with the computer! Try Again!")
        return 0;
      }
      if (playerSelection == "rock"){
        console.log("You lose! paper beats rock")
        return -1;
      }
      if (playerSelection == "scissors"){
        console.log("You win! Scissors beats paper")
        return 1;
      }
    }

    if (compChoice == "scissors"){
      if (playerSelection=="scissors"){
        console.log("You tied with the computer! Try Again!")
        return 0;
      }
      if (playerSelection == "paper"){
        console.log("You lose! Scissors beats paper")
        return -1;
      }
      if (playerSelection == "rock"){
        console.log("You win! Rock beats Scissors")
        return 1;
      }
    }
  }

    
}

function game(){
  let score = 0
  for (let i = 0; i<5; i++){
    let playerSelection = prompt()
    playerSelection = playerSelection.toLowerCase()
    if (playerSelection == "rock" || playerSelection == "scissors" || playerSelection == "paper"){
      score += rpsGame(playerSelection)
      console.log("Your current score is", score)
    }
    else{
      console.log("Invalid input, aborting game")
    }
  }
}
  
console.log(game())