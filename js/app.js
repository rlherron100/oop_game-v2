/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

//  Create a new instance of the Game class and add event listeners for the start button and onscreen keyboard buttons:
// Add a click event listener to the "Start Game" button which creates a new Game object and starts the game by calling the startGame() method.
// Add click event listeners to each of the onscreen keyboard buttons, so that clicking a button calls the handleInteraction() method on the Game object. Event delegation can also 
//be used in order to avoid having to add an event listener to each individual keyboard button. Clicking the space between and around the onscreen keyboard buttons should not result in the 
//handleInteraction() method being called.

// const startButton = document.getElementById("btn__reset");

// startButton.addEventListener('click', function start () {
//     const overlay = document.getElementById('overlay');
//     overlay.style.display = 'none';
//     const game = new Game();
//     game.startGame();

// })

const game = new Game();
const startButton = document.getElementById("btn__reset");

const keyboard = document.getElementById('qwerty');

startButton.addEventListener("click", (e) => {
  game.startGame();
});

keyboard.addEventListener('click', () => {
    if (event.target.type = 'BUTTON') {game.handleInteraction(event.target)}
})

//FIND OUT HOW TO TARGET THE SPECIFIC KEYBOARD KEYS THAT ARE CLICKED AND COMPARE THEM TO THE SPECIFIC CHARACTERS IN THE PHRASE