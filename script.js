//move functions and variables into modules that suit the task. 

// gameboard
let game_board = (function(){
    let boardArray = ['', '', '', '', '', '', '', '', ''];
    let playerTurn = false;
    let playerIcon = 'x';
    let computerIcon = 'o';

    let gameTiles = document.querySelectorAll('.gameTile');
    let startScreen = document.querySelector('.preGame');
    let playScreen = document.querySelector('.playSpace');

    const startingScreen = (() => {
        startScreen.setAttribute('data-state', 'active');
        console.log("wobwobwob");
        //add styling to the 2 big buttons for player to choose icon
             //assign players choice to playerIcon variable
        //add button to change state to gameStart
    });

    const gameStart = (() => {
        playScreen.setAttribute('data-state', 'active');
        //reset the gameBoard
        for(let i = 0; i < gameTiles.length; i++){
            gameTiles[i].addEventListener("click", () =>{
                //check tile hasn't got anything on it
                    
                //add icon to board
                    //check which icon playerIcon is set to
                const icon = document.createElement("img");
                icon.src = "images/X.png";
                icon.setAttribute('id', 'icon');
                if(gameTiles[i].firstChild !== null){
                    gameTiles[i].firstChild.remove();
                }              
                gameTiles[i].appendChild(icon);
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

game_board.gameStart();

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











