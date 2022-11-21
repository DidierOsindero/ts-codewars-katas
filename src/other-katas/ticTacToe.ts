/*
[[x,x,x][y,"",y]["","",""]]
*/

type WinState = `X won by row` | 'X won by column' | 'X won by diagonal' | `Y won by row` | 'Y won by column' | 'Y won by diagonal' | 'There was a draw' | 'The game has not been finished yet';

const calcWinState = (BoardState: string [][]): WinState => {
    const xwonByRow = BoardState[0].every(el => el === 'x') || BoardState[1].every(el => el === 'x') || BoardState[2].every(el => el === 'x');
    const xwonByColumn = BoardState.every(row => row[0] === 'x') || BoardState.every(row => row[1] === 'x') || BoardState.every(row => row[2] === 'x');
    const xwonByDiagonal = BoardState[0][0] === 'x' && BoardState[1][1] === 'x' && BoardState[2][2] === 'x'|| BoardState [0][2] === 'x' && BoardState[1][1] === 'x' && BoardState[2][0] === 'x';
   
    const ywonByRow = BoardState[0].every(el => el === 'y') || BoardState[1].every(el => el === 'y') || BoardState[2].every(el => el === 'y');
    const ywonByColumn = BoardState.every(row => row[0] === 'y') || BoardState.every(row => row[1] === 'y') || BoardState.every(row => row[2] === 'y');
    const ywonByDiagonal = BoardState[0][0] === 'y' && BoardState[1][1] === 'y' && BoardState[2][2] === 'y'|| BoardState [0][2] === 'y' && BoardState[1][1] === 'y' && BoardState[2][0] === 'y';
    
    const isDraw = BoardState.every(row => row.every(position => position !== ""));


    if (xwonByRow) {
        return `X won by row`
    } else if (xwonByColumn) {
        return 'X won by column'
    } else if (xwonByDiagonal) {
        return 'X won by diagonal'
    } else if (ywonByRow) {
        return `Y won by row`
    } else if (ywonByColumn) {
        return 'Y won by column'
    } else if (ywonByDiagonal) {
        return 'Y won by diagonal'
    } else if (isDraw) {
        return 'There was a draw'
    } else {
        return 'The game has not been finished yet'
    }
}

console.log(calcWinState([['x','','x'],['x',"",'y'],["x","",""]]))