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
        } else if (!this.activePhrase.checkLetter(button.innerHTML)) {
            button.disabled = true;
            button.classList = "chosen";
            this.removeLife(this.missed);
        }
        this.checkForWin;
        if (this.checkForWin(win)) {this.gameOver(win)}   //THIS PARAM NEEDS TO PASS IN EITHER A WIN OR LOSE VALUE)};
        else if (this.checkForWin(lose)) {this.gameOver(lose)};
    // keyboard.addEventListener( 'click', () => {
    //     for (let i = 0; i<= letters.length; i++) {
    //         let clicked = event.target
    //         for (let i = 0; i <= this.activePhrase.length; i++) {
    //             if (this.activePhrase.includes(clicked)) {
    //             showMatchedLetter(); //changes activePhrase[i] class to show
    //             clicked.disabled = true;
    //             }
    //     }}})

       // let clicked = event.target;
       // Phrase.checkLetter();
       // if (Phrase.checkLetter(clicked)) {
       //         showMatchedLetter();}
        //else {removeLife()};              
       // if (missed == 5) {gameOver()}
      //  if (checkForWin()) {gameOver()}
    }

    checkForWin(gameStatus) { //method
        
        
        let winningNum = this.activePhrase.phrase.length;
        let counter = 0;
        for (let i = 0; i < winningNum; i++) {
        if (this.activePhrase.phrase[i].classList = `show letter`) {counter++};
        if (counter == winningNum) {
           gameStatus= win;
        }
        else if (this.missed = 5) {gameStatus = lose}
    }};

    removeLife(number) { //method
        document.getElementsByTagName("img").item(number).src = "images/lostheart.png";
        this.missed++;
        
};

    gameOver(boolean) { //method
        
        if (boolean = win) {
            overlay.classList = 'win'; 
            overlay.style.display = 'block'
            document.getElementById('game-over-message').innerHTML = "Hooray! You guessed the phrase!"}
        else if (boolean = lose) {
            overlay.classList = 'lose'; 
            overlay.style.display= 'block'
            document.getElementById('game-over-message').innerHTML = "Sorry, you lose."}
    };

     

            //if this.activePhrase includes 
            // Your handleInteraction should be using this.activePhrase to validate the letter and should be targeting the button pressed when doing other items 
           // (like disabling and adding classes).



         
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