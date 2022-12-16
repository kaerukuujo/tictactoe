// gameboard
let game_board = (function(){
    const boardArray = ['', '', '', '', '', '', '', '', ''];
    let playerTurn = false;
    let playerIcon = 'x';
    let computerIcon = 'o';

    let gameTiles = document.querySelectorAll('.gameTile');
    let startScreen = document.querySelector('.preGame');
    let playScreen = document.querySelector('.playSpace');

    const startingScreen = (() => {
        startScreen.setAttribute('data-state', 'active');
        console.log("wobwobwob");
    });

    const gameStart = (() => {
        playScreen.setAttribute('data-state', 'active');
        //reset the gameBoard
        for(let i = 0; i < gameTiles.length; i++){
            gameTiles[i].innerHTML = "";
        }

        console.log("wobwobwobwobwob")
        
    });

    return { startingScreen, gameStart };

})();

game_board.gameStart();

//gameflow 

//player creator 













