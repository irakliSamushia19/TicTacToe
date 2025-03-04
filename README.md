Tic-Tac-Toe Game

Description
This is a simple Tic-Tac-Toe game implemented using HTML, CSS, and JavaScript. Players take turns marking X or O in a 3x3 grid. The game determines a winner when a player gets three marks in a row, column, or diagonal. 
If all cells are filled without a winner, the game ends in a draw.

Features
Two-player mode: Alternates between X and O.
Win detection: Checks for winning combinations.
Draw detection: If all cells are filled without a winner, the game declares a draw.
Restart button: Resets the game board.

How to Play
Click on any empty cell to place X or O.
Players take turns until a winner is found or all cells are filled.
If a player wins, a message displays the winner.
Click the "Restart" button to reset the game.

Technologies Used
HTML: Structure of the game board.
CSS: Styling for the board and game elements.
JavaScript: Game logic, event handling, and winner detection.

Code Explanation
Game Logic
Uses an array to store winning combinations.
Click events detect if a cell is empty and update it with "X" or "O".
Checks for a winning combination after every move.
If a player wins, a message is displayed, and further moves are disabled.
If all cells are filled without a winner, the game announces a draw.
The Restart button clears the board and allows a new game.

JavaScript Highlights
querySelectorAll() selects all board cells.
addEventListener() handles cell clicks.
innerText updates the content of each cell.
Loops and conditions check for winning combinations.
disable() prevents further clicks after the game ends.

Setup Instructions
Clone the repository:
git clone https://github.com/irakliSamushia19/tic-tac-toe.git
Open index.html in a web browser.

Future Improvements
Add AI for single-player mode.
Enhance UI with animations.
Improve mobile responsiveness.



