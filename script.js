//move functions and variables into modules that suit the task. 

// gameboard
let game_board = (function(){
    let boardArray = ['', '', '', '', '', '', '', '', ''];
    let playerIcon = "null";
    let computerIcon = "null";
    let lastIcon = "";
    let finalWinner = null;
    let randomTile = 0;

    let gameTiles = document.querySelectorAll('.gameTile');
    let startScreen = document.querySelector('.preGame');
    let playScreen = document.querySelector('.playSpace');
    let endScreen = document.querySelector('.endGame');

    const startingScreen = (() => {       
        endScreen.setAttribute('data-state', "inactive");
        startScreen.setAttribute('data-state', 'active');
        console.log("wobwobwob");
        //add styling to the 2 big buttons for player to choose icon
        let playerChoiceX = document.getElementById("X");
        let playerChoiceO = document.getElementById("O");
        playerChoiceO.setAttribute("data-sel", "n");
        playerChoiceX.setAttribute("data-sel", "n");
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
            if(playerIcon !== 'null'){
                wipeBoard;
                gameStart();
            } else {
                console.log("Choose an icon");
            }
            
        })
    });

    const gameStart = (() => {
        boardArray = ['', '', '', '', '', '', '', '', '']; 
        startScreen.setAttribute('data-state', 'inactive');
        playScreen.setAttribute('data-state', 'active');
        computerIcon = game_Flow.setCompIcon(playerIcon);
        console.log(computerIcon);
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
                        icon.setAttribute('class', 'icon');
                        if(gameTiles[i].firstChild === null){
                            currentTurn = "Player";
                            gameTiles[i].appendChild(icon);
                            boardArray[i] = playerIcon;
                            lastIcon = playerIcon;
                            game_Flow.winCondition(boardArray);   
                            if(finalWinner === null){
                                aiTurn();  
                            } else {
                                console.log("someones won");
                            }                    
                                                      
                        } else {
                            console.log("spot taken");
                        }           
                    } else {
                        console.log("spot taken");
                    }
            });
            gameTiles[i].innerHTML = boardArray[i];            
        }
        console.log("wobwobwobwobwob")
        
    });

    const endingScreen = (() => {
        currentTurn = "";
        playScreen.setAttribute('data-state', 'inactive');
        endScreen.setAttribute('data-state', 'active');
        const resetButton = document.getElementById("endGame");
        resetButton.addEventListener("click", () => {            
            wipeBoard;
            finalWinner = null;           
            startingScreen();
        });

        console.log("endScreen");
    });

    const aiTurn = (() => {
        currentTurn = "Computer";
        randomTile = getRandomInt(9);
            let computerImage = document.createElement("img");
            computerImage.setAttribute('class', 'icon');
            if(computerIcon === "X"){
                computerImage.src = "images/X.png";
            } else {
                computerImage.src = "images/O.png";
            }

            for(let i = 0; i < 1000; i++){            
                if(gameTiles[randomTile].firstChild !== null){
                    randomTile = getRandomInt(9);
                } else {
                    gameTiles[randomTile].appendChild(computerImage);
                    boardArray[randomTile] = computerIcon;
                    break;
                }
            }
            lastIcon = computerIcon;        
            game_Flow.winCondition(boardArray); 
            currentTurn = "Player";      
    });

    const wipeBoard = (() => {
        boardArray = boardArray = ['', '', '', '', '', '', '', '', ''];
        for(let i = 0; i < gameTiles.length; i++){
           gameTiles[i].firstChild = null; 
        }
        playerIcon = "null";
        computerIcon = "null";
        currentTurn = "";
        randomTile = 0;  
        finalWinner = null;         
        
    })();

    function setWinner(winner) {        
        finalWinner = 1;
        if(lastIcon === playerIcon){
            endScreen.querySelector('p').innerHTML = `The Player Wins!`;
        } else if(lastIcon === computerIcon){
            endScreen.querySelector('p').innerHTML = `The Computer Wins!`;
        }
        endingScreen();
    }

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    const getCurrentTurn = (() => {
        return currentTurn;
    })();

    const setCurrentTurn = ((setValue) => {
        currentTurn = setValue;
    })();

    const getBoardArray = (() => {
        return boardArray;
    })();

    const getComputerIcon = (() => {
        return computerIcon;
    })();

    

    return { startingScreen, gameStart, getCurrentTurn, getBoardArray, endingScreen, getComputerIcon, wipeBoard, setWinner };


})();
// game_board.startingScreen();

//gameflow 
    //game starts
    //player moves
    //check win condition
    //computer moves
    //check win condition 
    //back to player moves

let game_Flow = (function(){
    game_board.startingScreen();

    const setCompIcon = ((playerIcon) => {
        if(playerIcon === "X"){
            return "O";
        } else {
            return "X"
        }
    });

    const winCondition = ((boardArray) => {
        if(boardArray[0] === "X" && boardArray[3] === "X" && boardArray[6] === "X" 
        || boardArray[1] === "X" && boardArray[4] === "X" && boardArray[7] === "X" 
        || boardArray[2] === "X" && boardArray[5] === "X" && boardArray[8] === "X" 
        || boardArray[0] === "X" && boardArray[1] === "X" && boardArray[2] === "X" 
        || boardArray[3] === "X" && boardArray[4] === "X" && boardArray[5] === "X" 
        || boardArray[6] === "X" && boardArray[7] === "X" && boardArray[8] === "X" 
        || boardArray[0] === "X" && boardArray[4] === "X" && boardArray[8] === "X" 
        || boardArray[2] === "X" && boardArray[4] === "X" && boardArray[6] === "X" 
        || boardArray[0] === "O" && boardArray[3] === "O" && boardArray[6] === "O"
        || boardArray[1] === "O" && boardArray[4] === "O" && boardArray[7] === "O"
        || boardArray[2] === "O" && boardArray[5] === "O" && boardArray[8] === "O"
        || boardArray[0] === "O" && boardArray[1] === "O" && boardArray[2] === "O"
        || boardArray[3] === "O" && boardArray[4] === "O" && boardArray[5] === "O"
        || boardArray[6] === "O" && boardArray[7] === "O" && boardArray[8] === "O"
        || boardArray[0] === "O" && boardArray[4] === "O" && boardArray[8] === "O"
        || boardArray[2] === "O" && boardArray[4] === "O" && boardArray[6] === "O"){
            game_board.setWinner(game_board.getCurrentTurn);
        }
    });   

    return { winCondition, setCompIcon };
})(); 











