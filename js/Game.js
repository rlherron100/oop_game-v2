/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */


class Game{ //class that handles the game
    constructor () { //constructor method
        this.missed = 0; //missed property that tracks how many times the player guessed incorrectly
        this.phrases = this.createPhrases(); //property that holds the collected phrase options
        this.activePhrase = null; //property that holds the phrase currently in play. Begins as null until one of the phrases is pulled by getRandomPhrase.
    }


    
    createPhrases() { //method that holds array of phrases
        const phrases = [ //array of phrases
            new Phrase('You win'),
            new Phrase('This statement is false'),
            new Phrase('Watermelon sugar high'),
            new Phrase('This one is really difficult'),
            new Phrase('Wrong phrase')
        ];
        return phrases
    };

    getRandomPhrase() { //method that selects a random phrase from the phrase array
        let randomPhrase = this.phrases[Math.floor(Math.random() * this.createPhrases().length)];
        return randomPhrase
    };

    startGame() { //method that displays the start game overlay and sets the active phrase to be guessed
        const overlay = document.getElementById('overlay'); 
        overlay.style.display = 'none';     
        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay(Phrase)
    };

    handleInteraction(button) { //method that handles each keyboard selection based on whether it is correct or not.
    //check clicked key against activePhrase
        if (this.activePhrase.checkLetter(button.innerHTML))  { //calls the checkletter method from the phrase class and checks that it matches the displayed phrase
            button.disabled = true;  //disables selected button
            button.classList = "chosen"; //gives class name of chosen as to display relavent css styles
            this.activePhrase.showMatchedLetter(button.innerHTML); //calls the showMatchedLetter method
            this.checkForWin(); //checks if all phrase li elements have been guessed or not
            if (this.checkForWin(true)) { //if all letters have been guessed, returns true and ends game.
                this.gameOver()
            }
        } 
        else if (!this.activePhrase.checkLetter(button.innerHTML)) { //if the selected key does not match any of the active li elements
            button.disabled = true; //disables selected key
            button.classList = "wrong"; //class name is wrong to give it relavent css styles
            this.removeLife(this.missed); //runns removeLife method
        }
         //checkforwin only checks for win, it does not check for loss. If win = false, game continues and do not call gameover. Gamelost will be handled in removelife method.
    };

    checkForWin() { //method that checks if all li elements have been correctly guessed. Returns a boolean value
        let win = false;
        let hidden = document.querySelectorAll("li.hide").length
        if (hidden == 0) {
            win = true;
            return win
        } else {
            win = false;
            return win;
        }
    };

    removeLife(number) { //method that removes a life and changes the heart images to lost heart images
        let hearts = document.getElementsByTagName("img"); //targets the heart images
        hearts.item(number).src = "images/lostheart.png"; //changes the relavent heart image to a lost heart
        this.missed++; //adds 1 value to the missed counter
        if (this.missed == 5) { //if missed reaches 5, it calls the gameOver method
            this.gameOver();
          }
        
};

   gameOver() { //method that ends game and determines victory or loss
        if (this.checkForWin()) { //checks if player has won and displays winning message if true
            overlay.classList = 'win'; 
            overlay.style.display = 'block'
            document.getElementById('game-over-message').innerHTML = "Hooray! You guessed the phrase!"}
        else { //if player has not won and gameOver is called, displays losing message
            overlay.classList = 'lose'; 
            overlay.style.display= 'block'
            document.getElementById('game-over-message').innerHTML = "Sorry, you lose."
        }
            this.gameReset() //calls gameReset method

    };

    gameReset() { //method that resets game to be played again
            let phraseUl = document.querySelector('ul'); //targets the displayed phrase section
            let buttons = document.querySelectorAll('#qwerty button'); //targets entire keyboard
            let hearts = document.getElementsByTagName("img"); //targets the heart images
            phraseUl.innerHTML = ""; //resets the displayed phrase section
            for (let i = 0; i < buttons.length; i++) { //resets all of the keys to default
                buttons[i].className = "key";
                buttons[i].disabled = false;
            }
            this.missed = 0; //resets missed conter to 0
            for (let i = 0; i < hearts.length; i++) //replaces lost hearts with live hearts
            hearts.item(i).src = "images/liveHeart.png";
       
 
    };
    
};