

const gameBoard = (function(){
    let gameBoard = [['', '', ''], ['', '', ''], ['', '', '']];

    const resetGameBoard = (() => {
        gameBoard = [['', '', ''], ['', '', ''], ['', '', '']];
        return gameBoard;
    })();

    return { gameBoard, resetGameBoard}
})();

const displayController = (function(){

    function setState() {
        let gameSpace = document.querySelectorAll('.gameState');
        let preGame = document.querySelector('.preGame');
    let playSpace = document.querySelector('.playSpace');
    let postGame = document.querySelector('.postGame');

    const preGameState = (() => {
        for(let i = 0; i < gameSpace.length; i++){
            gameSpace[i].setAttribute("data-state", "inactive");
        }
        preGame.setAttribute("data-state", "active");
        console.log("pregame State");
    })();

    const playGameState = (() => {
        for(let i = 0; i < gameSpace.length; i++){
            gameSpace[i].setAttribute("data-state", "inactive");
        }
        playSpace.setAttribute("data-state", "active");
        console.log("playgame State");
    })();

    const postGameState = (() => {
        for(let i = 0; i < gameSpace.length; i++){
            gameSpace[i].setAttribute("data-state", "inactive");
        }
        postGame.setAttribute("data-state", "active");
        console.log("postgame State");
    })();
    }

    
})();

const createPlayer = (playerName, icon) => {
    const playerIcon = icon;
    return { playerName, playerIcon };
};




