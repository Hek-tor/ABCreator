/**
* @name main.js
* @file Create interaction with the user.
* @author Hector Emilio, hectoremdz@gmail.com
* @version 1.2.0
*/
"use strict";
import { ViewController } from "./viewController.js";
import { Alphabet } from "./alphabet.js";
import { Die } from "./die.js";
window.addEventListener('load', init, false);

function init() {
    let btn_Create = document.getElementById('btn_Create');
    let viewController = new ViewController();
    let alphabet = new Alphabet();
    let die = new Die();

    btn_Create.addEventListener('click', () => {
        let randomIndex = die.getRandomNumber();
        let newLetter = alphabet.getAlphabet(randomIndex);
        viewController.insertResult(newLetter);
    });
};

