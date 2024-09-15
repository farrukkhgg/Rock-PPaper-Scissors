window.addEventListener("DOMContentLoaded", () => {
    const choice = ['rock', 'paper', 'scissors']
    const seeResult = document.getElementById("result")

    function getAiChoice() {
        let randomIndex = Math.floor(Math.random() * choice.length)
        return choice[randomIndex]
    }

    function findTheWinner(myChoice, AiChoice) {

        if (myChoice === AiChoice) {
            return 'tie!'
        }

        if(
            (myChoice === 'rock' && AiChoice === 'scissors')|| 
            (myChoice === 'scissors' && AiChoice === 'paper')||
            (myChoice === 'paper' && AiChoice === 'rock')
        )  {
            return 'You won :)'
        }
        return 'You lost :('
    }

    function play(myChoice) {
        const AiChoice = getAiChoice()
        const result = findTheWinner(myChoice, AiChoice)
        seeResult.textContent = `You chose ${myChoice}. The computer chose ${AiChoice}. ${result}`;
    }

    document.getElementById('rock').addEventListener('click', () => play('rock'));
    document.getElementById('paper').addEventListener('click', () => play('paper'));
    document.getElementById('scissors').addEventListener('click', () => play('scissors'));
})

