let ai = document.querySelector('.aimove');
let player = document.querySelector('.player');
let rock = document.querySelector('#rock');
let paper = document.querySelector('#paper');
let scissor = document.querySelector('#scissor');
let result = document.querySelector('#result');

let moveOptions = ['rock', 'paper', 'scissor']

rock.addEventListener('click', () => {
    ai.innerHTML = moveOptions[Math.floor(Math.random() * 3)]
    player.innerHTML = moveOptions[0]
    rules();
})

paper.addEventListener('click', () => {
    ai.innerHTML = moveOptions[Math.floor(Math.random() * 3)]
    player.innerHTML = moveOptions[1]
    rules();
})

scissor.addEventListener('click', () => {
    ai.innerHTML = moveOptions[Math.floor(Math.random() * 3)]
    player.innerHTML = moveOptions[2]
    rules();
})

let rules = function () {
    if (ai.innerHTML === 'rock' && player.innerHTML === 'rock') {
        result.innerHTML = "TIE"
    }
    else if (ai.innerHTML === 'rock' && player.innerHTML === 'paper') {
        result.innerHTML = "YOU WIN"
    }
    else if (ai.innerHTML === 'rock' && player.innerHTML === 'scissor') {
        result.innerHTML = "YOU LOSE"
    }


    else if (ai.innerHTML === 'paper' && player.innerHTML === 'rock') {
        result.innerHTML = "YOU LOSE"
    }
    else if (ai.innerHTML === 'paper' && player.innerHTML === 'paper') {
        result.innerHTML = "TIE"
    }
    else if (ai.innerHTML === 'paper' && player.innerHTML === 'scissor') {
        result.innerHTML = "YOU WIN"
    }


    else if (ai.innerHTML === 'scissor' && player.innerHTML === 'rock') {
        result.innerHTML = "YOU WIN"
    }
    else if (ai.innerHTML === 'scissor' && player.innerHTML === 'paper') {
        result.innerHTML = "YOU LOSE"
    }
    else if (ai.innerHTML === 'scissor' && player.innerHTML === 'scissor') {
        result.innerHTML = "TIE"
    }
}




