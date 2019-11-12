// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your Javascript code.
let player = "X";

function setTurn() {

    var turnE = document.getElementById("turn");
    turnE.innerText = `It is ${player}'s turn.`;;
}

function setWinner(player) {

    var turnE = document.getElementById("turn");
    turnE.innerText = `${player} wins!`;
}

function onClick(event) {

    event.preventDefault();

    if (!event.target.innerText) {

        event.target.innerText = player;

        if (player === "X")
            player = "O";
        else
            player = "X";
        
        if (!isOver())
            setTurn();
    }
}

function isOver() {

    let cells = document.getElementsByClassName("square");

    for (let i = 0; i < 9; i += 3) {

        if (cells[i].innerText !== "" && 
		cells[i].innerText === cells[i + 1].innerText && 
		cells[i + 1].innerText === cells[i + 2].innerText) {

            setWinner(cells[i].innerText);
            return true;
        }
    }

    for (let i = 0; i < 3; i++) {

        if (cells[i].innerText !== "" && 
		cells[i].innerText === cells[i + 3].innerText && 
		cells[i + 3].innerText === cells[i + 6].innerText) {

            setWinner(cells[i].innerText);
            return true;
        }
    }

    if (cells[0].innerText !== "" && cells[0].innerText === cells[4].innerText &&
	cells[4].innerText === cells[8].innerText) {

        setWinner(cells[4].innerText);
        return true;
    }

    if (cells[2].innerText !== "" && cells[2].innerText === cells[4].innerText && 
	cells[4].innerText === cells[6].innerText) {

        setWinner(cells[4].innerText);
        return true;
    }
    
}

let cells = document.getElementsByClassName("square");

for (i = 0; i < cells.length; i++) 
    cells[i].addEventListener("click", onClick);

setTurn();