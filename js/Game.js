/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */


class Game{ //class
    constructor () { //constructor method
        this.missed = 0; //property
        this.phrases = this.createPhrases(); //property
        this.activePhrase = null; //property
    }


    
    createPhrases() { //method
        const phrases = [ //array
            new Phrase('You win'),
            new Phrase('This statement is false'),
            new Phrase('Watermelon sugar high'),
            new Phrase('This one is really difficult'),
            new Phrase('Wrong phrase')
        ];
        return phrases;
        };
    getRandomPhrase() { //method
        let randomPhrase = this.phrases[Math.floor(Math.random() * this.createPhrases().length)];
      
        return randomPhrase;
    }

    startGame() { //method
        const overlay = document.getElementById('overlay'); 
        overlay.style.display = 'none';     
        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay(Phrase)
    }

    handleInteraction(button) { //method
               
    //check clicked key against activePhrase
        if (this.activePhrase.checkLetter(button.innerHTML))  {
            button.disabled = true;
            button.classList = "chosen";
            this.activePhrase.showMatchedLetter(button.innerHTML);
            this.checkForWin();
            if (this.checkForWin(true)) {this.gameOver()}
        } else if (!this.activePhrase.checkLetter(button.innerHTML)) {
            button.disabled = true;
            button.classList = "wrong";
            this.removeLife(this.missed);
        }
         //checkforwin only checks for win, it does not check for loss. If win = false, game continues and do not call gameover. Gamelost will be handled in removelife method.
       

    }

    checkForWin() { //method
       let win = false;
        let hidden = document.querySelectorAll("li.hide").length
        if (hidden == 0) {
            win = true;
            return win
        } else {
            win = false;
            return win;
        }
        
        
        }
        

    ;

    removeLife(number) { //method
        let hearts = document.getElementsByTagName("img");
        hearts.item(number).src = "images/lostheart.png";
        this.missed++;
        if (this.missed == 5) {
            this.gameOver();
          };
        
};

   gameOver() { //method
        
        if (this.checkForWin()) {
            overlay.classList = 'win'; 
            overlay.style.display = 'block'
            document.getElementById('game-over-message').innerHTML = "Hooray! You guessed the phrase!"}
        else {
            overlay.classList = 'lose'; 
            overlay.style.display= 'block'
            document.getElementById('game-over-message').innerHTML = "Sorry, you lose."}
            this.gameReset()

    };

    gameReset() {
        let reset = document.getElementById('btn__reset');
       reset.addEventListener('click', () => {
            // After a game is completed, the gameboard needs to be reset so that clicking the "Start Game" button will successfully load a new game.
            // Remove all li elements from the Phrase ul element.
            // Enable all of the onscreen keyboard buttons and update each to use the key CSS class, and not use the chosen or wrong CSS classes.
            // Reset all of the heart images (i.e. the player's lives) in the scoreboard at the bottom of the gameboard to display the liveHeart.png image.

            let phraseUl = document.querySelectorAll('ul');
            phraseUl.innerHTML = "";
            let chosen = document.getElementsByClassName("chosen");
            for (let i = 0; i < chosen.length; i++) {
                chosen[i].disabled = false;
                chosen[i].className = "key";
            }
            let wrong = document.getElementsByClassName("wrong");
            for (let i = 0; i < wrong.length; i++) {
                wrong[i].disabled = false;
                wrong[i].className = "key";
            }
            let hearts = document.getElementsByTagName("img");
            for (let i = 0; i < hearts.length; i++)
            hearts.item(i).src = "images/liveHeart.png";
       }
        ); }
    
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