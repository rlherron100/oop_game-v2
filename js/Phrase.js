/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */
// The class should include a constructor that receives a phrase parameter and initializes the following properties:
// phrase: this is the actual phrase the Phrase object is representing. This property should be set to the phrase parameter, but converted to all lower case.
// The class should also have these methods:
// addPhraseToDisplay(): this adds letter placeholders to the display when the game starts. Each letter is presented by an empty box, one li element for each letter. 
//See the example_phrase_html.txt file for an example of what the rendered HTML for a phrase should look like when the game starts, including any id or class attributes needed. When the player
// correctly guesses a letter, the empty box is replaced with the matched letter (see the showMatchedLetter() method below). Make sure the phrase displayed on the screen uses the letter CSS 
//class for letters and the space CSS class for spaces.
// checkLetter(): checks to see if the letter selected by the player matches a letter in the phrase.
// showMatchedLetter(): reveals the letter(s) on the board that matches the player's selection. To reveal the matching letter(s), select all of the letter DOM elements that have a CSS class
//  name that matches the selected letter and replace each selected element's hide CSS class with the show CSS class.


class Phrase{ //class
    constructor(phrase) /*constructor method*/ {this.phrase= phrase.toLowerCase(phrase)} //this.phrase is a property

    addPhraseToDisplay() { //method
        let displayPhrase = this.phrase.split("");
        let phraseUl = document.querySelector('ul');
         
        const regex = new RegExp(/[a-z]/i);
        for (let i = 0; i < displayPhrase.length; i++)
            { if (regex.test(displayPhrase[i]))
                {
                let phraseLi = document.createElement('li');
                phraseLi.className = `hide letter ${displayPhrase[i]}`;
                phraseLi.innerHTML = `${displayPhrase[i]}`;
                phraseUl.appendChild(phraseLi);}
            else {
               let phraseLi = document.createElement('li')
               phraseLi.className = 'space'
               phraseLi.innerHTML = `${displayPhrase[i]}`;
               phraseUl.appendChild(phraseLi);
            }

            } 
        }
   checkLetter(clicked) { //method
            
            if (game.activePhrase.phrase.includes(clicked)) {
                return true
            } else {return false}
         };

        

    showMatchedLetter(clicked) { //method
            
            let matching = document.getElementsByClassName(`hide letter ${clicked}`);
            matching.className = `show letter ${clicked}`;

            // for (let i =0; i< this.phraseLi.length; i++) {
            //     if (Game.clicked == this.phraseLi) {
            //         this.phraseLi.classList = `show letter ${phraseLi}`;
            //     }
            // }

            
             };
            }
//         Phrase class methods
// ○ `checkLetter()`: Checks to see if the letter selected by the player matches a letter
// in the phrase.
// ○ `showMatchedLetter()`: Reveals the letter(s) on the board that matches the
// player's selection. To reveal the matching letter(s), select all of the letter DOM
// elements that have a CSS class name that matches the selected letter and
// replace each selected element's `hide` CSS class with the `show` CSS class.

    
         
    

    // if a qwerty letter (identified by innerHTML) is == the innerHTML of a 'hide letter displayPhrase[i]' 
            //element, the hide letter class is changed to 'active letter displayPhrase[i]' and css class is changed to .show
        //     let keyboard = document.getElementById('qwerty');

        //     keyboard.addEventListener('click',  (e) => {
        //      let clicked = e.target;
        //      let qwerty = document.getElementsByClassName('key');
        //      let phraseLetters = document.getElementsByClassName('hide letter');
        //      for (let i = 0; i < qwerty.length; i++) {
        //          if (clicked.innerHTML == phraseLetters[i]) {
        //              console.log(phraseLetters[i]);
        //          }
 
        //     }
        //  })