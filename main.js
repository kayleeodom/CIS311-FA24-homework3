import {professors} from "./professors.js"

const guesses = [];
const MAX_GUESSES = 5;

let IsGameOver = false;
let DidWin = false;
let DidLose = false;

const professorName = document.getElementById("professorName")
const professorImage = document.getElementById("professorImage")
const professorDepartment = document.getElementById("professorDept")
const guessButton = document.getElementById("guessButton")
const guessTextbox = document.getElementById("age")

getRandomProfessor()

function getRandomProfessor() 
{
    let randomIndex =  Math.floor( Math.random() * professors.length)
    let currentProfessor = professors[randomIndex]
    updateProfessor( currentProfessor )
}

function updateProfessor( professor )
{
    const imageBasePath = "/images/professors/"
    professorName.innerText = professor.name
    professorDepartment.innerText = professor.department
    professorImage.src = imageBasePath + professor.imageUrl
}

guessButton.addEventListener('click', (event)=> {
    event.preventDefault()

    const guess = guessTextbox.value
    console.log(guess)

    // show correct or incorrect 

    // show too high or too low

    // decrease number of guesses 

    // update the history

})



