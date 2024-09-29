import {professors} from "./professors.js"

// const guesses = [];
const MAX_GUESSES = 5;
let numberOfGuesses = MAX_GUESSES

let IsGameOver = false;
let DidWin = false;
let DidLose = false;

const professorName = document.getElementById("professorName")
const professorImage = document.getElementById("professorImage")
const professorDepartment = document.getElementById("professorDept")
const guessButton = document.getElementById("guessButton")
const guessTextbox = document.getElementById("age")
const guessesLeft = document.getElementById("guessesLeft")

let currentProfessor

getRandomProfessor()

function getRandomProfessor() 
{
    let randomIndex =  Math.floor( Math.random() * professors.length)
    currentProfessor = professors[randomIndex]
    updateProfessor( currentProfessor )
}

function updateProfessor( professor )
{
    const imageBasePath = "/images/professors/"
    professorName.innerText = professor.name
    professorDepartment.innerText = professor.department
    professorImage.src = imageBasePath + professor.imageUrl
}

// guessButton.addEventListener('click', (event)=> {
//     event.preventDefault()

//     // const guess = guessTextbox.value
//     // console.log(guess)

//     // show correct or incorrect 
//     // show too high or too low

//     // decrease number of guesses 

//     // update the history

// })

guessButton.addEventListener('click', (event) => {
    event.preventDefault();

    // Get the values from the sliders for the user's guess
    const guessedDate = parseInt(dateSlider.value)
    const guessedMonth = parseInt(monthSlider.value)
    const guessedYear = parseInt(yearSlider.value)

    // Get the professor's DOB and split it into date, month, and year
    const [profMonth, profDate, profYear] = currentProfessor.dob.split('-').map(Number)

    const inputBox = document.getElementById("input")

    // show correct or incorrect 
    // show too high or too low
    // Compare the guess with the professor's actual DOB
    if (guessedDate === profDate && guessedMonth === profMonth && guessedYear === profYear) {
        inputBox.value = "Correct! You guessed the professor's birthdate!"
        // You can also set `DidWin = true;` or handle a win scenario here.
    } else if (guessedYear > profYear || (guessedYear === profYear && guessedMonth > profMonth) || 
               (guessedYear === profYear && guessedMonth === profMonth && guessedDate > profDate)) {
        inputBox.value = "Too high! Try a lower date."
    } else {
        inputBox.value = "Too low! Try a higher date."
    }

    // Decrease the number of guesses
    numberOfGuesses--
    guessesLeft.textContent = numberOfGuesses

    // If no guesses left, end the game
    if (numberOfGuesses === 0) {
        inputBox.value = "Game over! No guesses left."
        guessButton.disabled = true // Disable the button after game over
    }

    // Clear the input field after the guess
    guessTextbox.value = ''
});


// Get each slider and corresponding number input by their unique IDs
const dateSlider = document.getElementById('date-slider')
const dateNumber = document.getElementById('date-number')

const monthSlider = document.getElementById('month-slider')
const monthNumber = document.getElementById('month-number')

const yearSlider = document.getElementById('year-slider')
const yearNumber = document.getElementById('year-number')

// Sync Date slider with number input
dateSlider.addEventListener('input', function() {
    dateNumber.value = dateSlider.value
})

// Sync Month slider with number input
monthSlider.addEventListener('input', function() {
    monthNumber.value = monthSlider.value
    updateDateSliderMax()
})

// Sync Year slider with number input
yearSlider.addEventListener('input', function() {
    yearNumber.value = yearSlider.value
    updateDateSliderMax()
})

function updateDateSliderMax() {
    const month = parseInt(monthSlider.value)
    const year = parseInt(yearSlider.value)

    let maxDays

    switch (month) {
        case 2:
            if((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
                maxDays = 29
            }
            else {
                maxDays = 28
            }
            break
        case 4: case 6: case 9: case 11:
            maxDays = 30
            break
        default:
            maxDays = 31
            break
    }

    dateSlider.max = maxDays

    // To make sure the date value doesn't exceed the new max
    if (parseInt(dateSlider.value) > maxDays) {
        dateSlider.value = maxDays
        dateNumber.value = maxDays
    }
}



