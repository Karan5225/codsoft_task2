function bestMove(){
    //AI to make its Turn
    let bestScore = -Infinity;
    let bestMove;
    for (let i=0; i<3; i++) {
        for(let j=0; j<3; j++) {
            //Is the spot available?
            if(board[i][j]== '') {
                board[i][j] = ai;
                let score = minimax(board, 0, false);
                board[i][j] = '';
                if(score > bestScore) {
                    bestScore = score;
                    bestMove= {i,j};
                }
            }
        }
    }
    board[move.i][move.j] = ai;
    currentplayer= human;
}
let scores = {
     X: 1,
     0:-1,
     tie: 0
};
function minimax(board, depth, isMaximizing){
    let result = checkWinner();
    if(result !== null) {
      return scores[result];
    }
    if (isMaximizing) {
        let bestScore = -Infinity;
        for(let i = 0; i < 3; i++){
            for(let j = 0;j < 3;j++){
                //Is The spot available?
                if (board[i][j] == '') {
                    boatrd [i][j] = ai ;
                    let score = minimax(board, depth + 1, false);
                    board[i][j] = '';
                    bestScore = max(score , bestScore);
            
                }
            }
        }
        return bestScore;
    }   else { 
        let bestScore = Infinity;
        for(let i = 0; i<3; i++){
            for(let j=0;j<3;j++){
                 //Is The spot available?
                if (board[i][j] == '') {
                    boatrd [i][j] = human ;
                    let score = minimax(board, depth + 1, true);
                    board[i][j] = '';
                    bestScore = min(score, bestScore);
                }
            }
        }
        return bestScore;
    }
}