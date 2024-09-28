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


// Get each slider and corresponding number input by their unique IDs
const dateSlider = document.getElementById('date-slider');
const dateNumber = document.getElementById('date-number');

const monthSlider = document.getElementById('month-slider');
const monthNumber = document.getElementById('month-number');

const yearSlider = document.getElementById('year-slider');
const yearNumber = document.getElementById('year-number');

// Sync Date slider with number input
dateSlider.addEventListener('input', function() {
    dateNumber.value = dateSlider.value;
});

// Sync Month slider with number input
monthSlider.addEventListener('input', function() {
    monthNumber.value = monthSlider.value;
});

// Sync Year slider with number input
yearSlider.addEventListener('input', function() {
    yearNumber.value = yearSlider.value;
});



