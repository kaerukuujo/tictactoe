const gameBoard = (function(){
    let gameBoard = [['', '', ''], ['', '', ''], ['', '', '']];

    const setGameBoard = (() => {
        gameBoard = [['', '', ''], ['', '', ''], ['', '', '']];
    })();

    return { gameBoard, setGameBoard, }
})();

const displayController = (function(){
    
    return { preGameState, playGameState, postGameState }
})();



