/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */
class Phrase{ //class that handles the phrase
    constructor(phrase) { //constructor method that converts all the phrase string letters into lowercase
        this.phrase= phrase.toLowerCase(phrase)
    }; 

    addPhraseToDisplay() { //method that takes the random phrase pulled and displays it hidden on the game board
        let displayPhrase = this.phrase.split(""); //splits the selected phrase into each individual character, including spaces
        let phraseUl = document.querySelector('ul'); //targets the ul elements
        const regex = new RegExp(/[a-z]/i); //basic alphabet regex
        for (let i = 0; i < displayPhrase.length; i++) //for loop runs through the phrase characters to be displayed
            { if (regex.test(displayPhrase[i])) //tests that the phrase only uses the alphabet and spaces
                {
                let phraseLi = document.createElement('li'); //creates li elements for the phrase characters
                phraseLi.className = `hide letter ${displayPhrase[i]}`; //gives the li elements a class name so that they are displayed according to the relavent css styles
                phraseLi.innerHTML = `${displayPhrase[i]}`; //gives the innerHTML of the phrase character the relavent character
                phraseUl.appendChild(phraseLi);} //appends the li to the ul
            else {
               let phraseLi = document.createElement('li') //creates li element for spaces
               phraseLi.className = 'space' //gives spaces the space class to display relavent css styles
               phraseLi.innerHTML = `${displayPhrase[i]}`; //innerHTML is space
               phraseUl.appendChild(phraseLi); //appends space li to ul
            }

            } 
        }
   checkLetter(clicked) { //method that checks if the selected letter on the keyboard matches any of the characters in the displayed phrase.  Returns boolean value
            
            if (this.phrase.includes(clicked)) {
                return true
            } else {return false}
         };

        

    showMatchedLetter(clicked) { //method that changes the css value of the matched letter to display by changing its class name.
            let phraseLi = document.querySelectorAll("li.hide");
            for (let i = 0; i< phraseLi.length; i++) {
            if (phraseLi[i].innerHTML == clicked)
            {phraseLi[i].className = `show letter ${clicked}`}
        }

            
             };
            }

