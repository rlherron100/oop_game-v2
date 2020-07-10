/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */


class Game{
    constructor () {
        this.missed = 0;
        this.phrases = this.createPhrases();
        this.activePhrase = this.getRandomPhrase();
    }


    
    createPhrases() {
        const phrases = [
            new Phrase('You win'),
            new Phrase('This statement is false'),
            new Phrase('Watermelon sugar high'),
            new Phrase('This one is really difficult'),
            new Phrase('Wrong phrase')
        ];
        return phrases;
        };
    getRandomPhrase() { 
        let randomPhrase = this.phrases[Math.floor(Math.random() * this.createPhrases().length)];
      
        return randomPhrase;
    }

    startGame() {
        const overlay = document.getElementById('overlay'); 
        overlay.style.display = 'none';     
        this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay(Phrase)
}
    checkForWin(win) {
        new Phrase();
        win = false;
        let phraseLength = Phrase.phraseLi.length;
        let counter = 0;
        for (let i = 0; i < Phrase.phraseLi.length; i++) {
        if (Phrase.phraseLi[i].classList = `show letter`) 
        if (counter == phraseLength) {
            win = true
        }
    }};

    removeLife() {
        let lives = document.getElementsByClassName('tries');
        for (let i =0; i < lives.length; i++) {
            if (this.checkLetter = false) {
                lives[i].src = "images/lostHeart.png"
            }
        }
       this.missed + 1; 
    };

    gameOver() {
        
        if (this.checkForWin) {
            overlay.classList = 'win'; 
            overlay.style.display = 'block'
            document.getElementById('game-over-message').innerHTML = "Hooray! You guessed the phrase!"}
        if (missed == 5) {
            overlay.classList = 'lose'; 
            overlay.style.display= 'block'
            document.getElementById('game-over-message').innerHTML = "Sorry, you lose."}
    };

     handleInteraction() {
                new Phrase();
                let clicked = event.target;
                Phrase.checkLetter();
                if (Phrase.checkLetter(clicked)) {
                        showMatchedLetter();}
                else {removeLife()};              
                if (missed == 5) {gameOver()}
                if (checkForWin()) {gameOver()}
            }



         
    // })
    // }
    // `checkForWin()`: This method checks to see if the player has revealed all of the
    // letters in the active phrase.
    // ○ `removeLife()`: This method removes a life from the scoreboard, by replacing one
    // of the `liveHeart.png` images with a `lostHeart.png` image (found in the `images`
    // folder) and increments the `missed` property. If the player has five missed
    // guesses (i.e they're out of lives), then end the game by calling the `gameOver()`
    // method.
    // ○ `gameOver()`: This method displays the original start screen overlay, and
    // depending on the outcome of the game, updates the overlay `h1` element with a
    // friendly win or loss message, and replaces the overlay’s `start` CSS class with
    // either the `win` or `lose` CSS class.


}

// Now it’s time to start adding some user interaction to the game. When a user clicks on one of
// the onscreen keyboard buttons, several things need to happen:
// ● The clicked/chosen letter must be captured.
// ● The clicked letter must be checked against the phrase for a match.
// ● If there’s a match, the letter must be displayed on screen instead of the placeholder.
// ● If there’s no match, the game must remove a life from the scoreboard.
// ● The game should check if the player has won the game by revealing all of the letters in
// the phrase or if the game is lost because the player is out of lives.
// ● If the game is won or lost, a message should be displayed on screen.
// The logic and branching to handle all of those steps can be included in one method in the Game
// class called `handleInteraction()`.