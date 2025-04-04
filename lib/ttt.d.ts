export class TicTacToe {
    /* X PlayerName */
    playerX: string;
    /* Y PlayerName */
    playerY: string;
    /* X if true, Y if false  */
    _currentTurn: boolean;
    _board: number[][];
    _turns: number;

    constructor(playerX: string, playerY: string) {
        this.playerX = playerX;
        this.playerY = playerY;
        this._currentTurn = true;  // Start with player X
        this._turns = 0;
        this._board = [
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0],
        ];
    }

    // Get the current board state
    get board(): number[][] {
        return this._board;
    }

    // Check if there is a winner
    checkWinner(): string | null {
        // Check rows and columns
        for (let i = 0; i < 3; i++) {
            if (this._board[i][0] === this._board[i][1] && this._board[i][1] === this._board[i][2] && this._board[i][0] !== 0) {
                return this._board[i][0] === 1 ? this.playerX : this.playerY;
            }
            if (this._board[0][i] === this._board[1][i] && this._board[1][i] === this._board[2][i] && this._board[0][i] !== 0) {
                return this._board[0][i] === 1 ? this.playerX : this.playerY;
            }
        }

        // Check diagonals
        if (this._board[0][0] === this._board[1][1] && this._board[1][1] === this._board[2][2] && this._board[0][0] !== 0) {
            return this._board[0][0] === 1 ? this.playerX : this.playerY;
        }
        if (this._board[0][2] === this._board[1][1] && this._board[1][1] === this._board[2][0] && this._board[0][2] !== 0) {
            return this._board[0][2] === 1 ? this.playerX : this.playerY;
        }

        return null;  // No winner
    }

    // Check if the game is a draw
    checkDraw(): boolean {
        return this._turns === 9 && this.checkWinner() === null;
    }

    // Make a move
    turn(player: string, x: number, y: number): boolean {
        // Ensure it's the player's turn and the position is empty
        if ((this._currentTurn && player === this.playerX || !this._currentTurn && player === this.playerY) &&
            this._board[x][y] === 0) {
            
            // Mark the move (1 for player X, 2 for player Y)
            this._board[x][y] = this._currentTurn ? 1 : 2;
            this._turns++;

            // Check if the move leads to a winner
            const winner = this.checkWinner();
            if (winner) {
                console.log(`${winner} wins!`);
                return true;
            }

            // Check if the game is a draw
            if (this.checkDraw()) {
                console.log("The game is a draw.");
                return true;
            }

            // Alternate the turn
            this._currentTurn = !this._currentTurn;
            return false;
        }
        console.log("Invalid move! Either it's not your turn or the position is already taken.");
        return false;
    }

    // Display the current board in a readable format
    displayBoard(): void {
        console.log(this._board.map(row => row.map(cell => cell === 0 ? '-' : cell === 1 ? 'X' : 'O').join(' ')).join('\n'));
    }
}
