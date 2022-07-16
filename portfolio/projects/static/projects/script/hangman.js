let lettersDiv = document.getElementById("letters-div")
let guessPara = document.getElementById("guess")
let canvas = document.getElementById("cvs")
let tries = document.getElementById("tries")
let catPara = document.getElementById("category")

const letterList = [...Array(26)].map((_, i) => String.fromCharCode(i + 97))

let badTry = 10

letterList.forEach(letter => {
    letterPara = document.createElement("p")
    letterPara.innerHTML = letter
    letterPara.addEventListener("click", (e) => {
        if (word.includes(letter)) {
            while (word.includes(letter)) {
                guessed = guessPara.innerHTML      
                guessed = guessed.split(" ")
                guessed[word.indexOf(letter)] = letter
                word[word.indexOf(letter)] = "_"
                console.log(guessed)
                guessPara.innerHTML = guessed.join(' ')
            }
        } else {
            switch(badTry) {
                case 10:
                    line(100, 140, 200, 140);
                    break;
                case 9:
                    line(150, 140, 150, 20);
                    break;
                case 8:
                    line(140, 30, 180, 30);
                    break;
                case 7:
                    line(180, 30, 180, 40);
                    break;
                case 6:
                    circle();
                    break;
                case 5:
                    line(180, 60, 180, 100);
                    break;
                case 4:
                    line(180, 70, 160, 90);
                    break;
                case 3:
                    line(180, 70, 200, 90);
                    break;
                case 2:
                    line(180, 100, 160, 130);
                    break;
                case 1:
                    line(180, 100, 200, 130);
                    break;
            }
            badTry -= 1
            if (badTry <= 0 ) {
                tries.innerHTML = "You have no tries left"
            } else {
                tries.innerHTML = "You have " + String(badTry) + " chances left"
            }
            guessed = guessPara.innerHTML 
            if (guessed.includes("_") == false) {
                console.log(guessed)
                tries.innerHTML = "You guessed the word"
            }
        }
        changeStyle(e.target)
    })
    lettersDiv.appendChild(letterPara)
})

let categories = ["technology", "football", "formula", "school"]

let words = {
    "technology": [
        "notebook", "desktop", "javascript", "python"
    ],
    "football": [
        "ball", "defender", "goalkeeper", "referee"
    ],
    "formula": [
        "mercedes", "ferrari", "redBull", "mclaren"
    ],
    "school": [
        "teacher", "students", "grade", "subject"
    ]
}

var guessCat = parseInt(Math.random()*10)

while (guessCat > 3) {
    guessCat = parseInt(Math.random()*10)
}

var guessWord = parseInt(Math.random()*10)

while (guessWord > 3) {
    guessWord = parseInt(Math.random()*10)
}

let word = words[categories[guessCat]][guessWord].split('')

catPara.innerHTML = "Word belongs to " + categories[guessCat] + " category"
word.forEach(x => guessPara.innerHTML += "_ ")

//canvas
var context = canvas.getContext("2d");
line = function(fromX, fromY, toX, toY) {
    context.strokeStyle = "#FF0000";
    context.moveTo(fromX, fromY);
    context.lineTo(toX, toY);
    context.stroke();
}

circle = function() {
    context.beginPath();
    context.arc(180, 50, 10, 0, 2 * Math.PI);
    context.stroke();
}

function changeStyle(elem) {
    elem.style.background = "black"
    elem.style.color = "white"
    //console.log(elem)
}
