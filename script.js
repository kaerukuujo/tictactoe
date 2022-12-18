//move functions and variables into modules that suit the task. 

// gameboard
let game_board = (function(){
    let boardArray = ['', '', '', '', '', '', '', '', ''];
    let playerTurn = false;
    let playerIcon = "O";
    let computerIcon = 'o';

    let gameTiles = document.querySelectorAll('.gameTile');
    let startScreen = document.querySelector('.preGame');
    let playScreen = document.querySelector('.playSpace');

    const startingScreen = (() => {
        startScreen.setAttribute('data-state', 'active');
        console.log("wobwobwob");
        //add styling to the 2 big buttons for player to choose icon
        let playerChoiceX = document.getElementById("X");
        let playerChoiceO = document.getElementById("O");
        playerChoiceX.addEventListener("click", () => {
            playerIcon = "X";
            playerChoiceO.setAttribute("data-sel", "n");
            if(playerChoiceX.getAttribute("data-sel") !== "y"){
                playerChoiceX.setAttribute("data-sel", "y");
            } else {
                console.log("already selected");
            }            
        });
        playerChoiceO.addEventListener("click", () => {
            playerIcon = "O";
            playerChoiceX.setAttribute("data-sel", "n");
            if(playerChoiceO.getAttribute("data-sel") !== "y"){
                playerChoiceO.setAttribute("data-sel", "y");
            } else {
                console.log("already selected");
            }            
        });
             //assign players choice to playerIcon variable
        //add button to change state to gameStart
        let startButton = document.getElementById("startGame");
        startButton.addEventListener("click", () => {
            gameStart();
        })
    });

    const gameStart = (() => {
        startScreen.setAttribute('data-state', 'inactive');
        playScreen.setAttribute('data-state', 'active');
        //reset the gameBoard
        for(let i = 0; i < gameTiles.length; i++){
            gameTiles[i].addEventListener("click", () =>{
                //check tile hasn't got anything on it
                    if(gameTiles[i].firstChild === null){
                        const icon = document.createElement("img");
                        if(playerIcon === "X"){
                            icon.src = "images/X.png";
                        } else {
                            icon.src = "images/O.png";
                        }                        
                        icon.setAttribute('id', 'icon');
                        if(gameTiles[i].firstChild !== null){
                            gameTiles[i].firstChild.remove();
                        }              
                        gameTiles[i].appendChild(icon);
                    } else {
                        console.log("spot taken");
                    }
                //add icon to board
                    //check which icon playerIcon is set to
                
                //update boardArray with players choice
                //run function to check if win condition has been met
            });
            gameTiles[i].innerHTML = boardArray[i];

            
        }

        console.log("wobwobwobwobwob")
        
    });

    return { startingScreen, gameStart };

    //create function to checks board for if a tile can be placed there.


})();
game_board.startingScreen();

//gameflow 

let displayController = (function(){
    //intro gamestate
        //move from intro to game state only after players have been assigned and icons chosen
    //playing gamestate
        //update loop through array after something gets added to board
        //if win condition is met, update winner variable and move to game end state
    //game end gamestate
        //display winner and go back to intro gameState after reset has been pressed.


})();

//player creator 

//player factory that returns a players name, icon, whether theyre going first or second
    //if only 1 player is set, have player 2 be run by AI. 











