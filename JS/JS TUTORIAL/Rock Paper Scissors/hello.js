const score = JSON.parse(localStorage.getItem("score"))

function updateScore() {
    document.querySelector(".js_p_score").innerHTML = `Wins: ${score.wins} Loses:  ${score.loses} Ties: ${score.ties}`

}
let isAutoPlaying = false
let p_your_move = document.querySelector(".img_game_player_move")
let p_comp_move = document.querySelector(".img_game_comp_move")
let autoPlayButton = document.querySelector(".auto-play-botton")
updateScore()

function pickComputerMove() {
    const random = Math.random();
    let compmove = '';
    if (random >= 0 && random < 1 / 3) {
        compmove = 'rock'
    } else if (random >= 1 / 3 && random < 1 / 2) {
        compmove = 'scissors'
    } else {
        compmove = 'paper'
    }

    return compmove
}
let intervalId

function autoPlay() {

    if (!isAutoPlaying) {
        intervalId = setInterval(() => {
            const yourmove = pickComputerMove()
            thegame(yourmove)
            autoPlayButton.innerHTML = "Stop Playing"
        }, 1000)

        isAutoPlaying = true
    } else {
        clearInterval(intervalId)
        isAutoPlaying = false
        autoPlayButton.innerHTML = "Auto Play"
    }

}
document.querySelector(".js-rock-button").addEventListener("click", () => {
    thegame("rock")
})
document.querySelector(".js-paper-button").addEventListener("click", () => {
    thegame("paper")
})

document.querySelector(".js-scissors-button").addEventListener("click", () => {
    thegame("scissors")
})
document.querySelector(".reset").addEventListener("click", () => {
    thegame("reset")
})
document.body.addEventListener("keydown", (event) => {
    if (event.key === "Backspace") {
        thegame("reset")
    }
})
autoPlayButton.addEventListener("click", () => {
    autoPlay()
})
document.body.addEventListener("keydown", (event) => {
    if (event.key === "a") {
        autoPlay()
    }
})
document.body.addEventListener("keydown", (event) => {
    if (event.key === "r") {
        thegame("rock")
    } else if (event.key === "p") {
        thegame("paper")
    } else if (event.key === "s") {
        thegame("scissors")
    }
})

function thegame(yourmove) {
    const compmove = pickComputerMove()

    let result = '';
    if (yourmove === "scissors") {
        if (compmove === 'rock') {
            result = 'You lose'

        } else if (compmove === 'paper') {
            result = 'You win'
        } else {
            result = 'Its a tie'
        }
    }
    if (yourmove === "rock") {

        if (compmove === 'rock') {

            result = 'Its a tie'
        } else if (compmove === 'paper') {

            result = 'You lose'
        } else {

            result = 'You win'
        }
    } else if (yourmove === "rock") {

        if (compmove === 'rock') {
            result = 'Its a tie'
        } else if (compmove === 'paper') {
            result = 'You lose'
        } else {
            result = 'You win'
        }
    } else if (yourmove === "paper") {
        if (compmove === 'rock') {
            result = 'You win'
        } else if (compmove === 'paper') {
            result = 'Its a tie'
        } else {
            result = 'You lose'
        }

    }


    if (result === "You win") {
        score.wins++
    } else if (result === "You lose") {
        score.loses++
    } else if (result === "Its a tie") {
        score.ties++
    } else if (yourmove === "reset") {
        let willReset;
        let resetButton = document.querySelector(".conformResetScore")
        resetButton.innerHTML =
            `Are u sure u want to reset the score
            <button class="yesConformResetButton" >Yes</button>
            <button class="noConformResetButton">No</button>
            `
        let yesConformResetButton = document.querySelector(".yesConformResetButton")
        let noConformResetButton = document.querySelector(".noConformResetButton")
        yesConformResetButton.addEventListener("click", () => {
            score.ties *= 0
            score.wins *= 0
            score.loses *= 0
            document.querySelector(".js_p_score").innerHTML = `Wins: ${score.wins} Loses:  ${score.loses} Ties: ${score.ties}`
            resetButton.innerHTML = ""
        })
        noConformResetButton.addEventListener("click", () => {
            resetButton.innerHTML = ""
        })
        return
    }

    localStorage.setItem("score", JSON.stringify(score))
    updateScore("comp_move_rock")
    document.querySelector(".js_winOrlose").innerHTML = result
    document.querySelector(".moves").innerHTML = `You choosed
    <img class="img_game" src="/JS/JS TUTORIAL/First One/Images_rock_paper_scissors/${yourmove}-emoji.png" alt="">
    <img class="img_game" src="/JS/JS TUTORIAL/First One/Images_rock_paper_scissors/${compmove}-emoji.png" alt="">
    Computer choosed  `


}


pickComputerMove()