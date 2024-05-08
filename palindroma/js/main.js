"use strict"

const userInput = "ciao"

function isPalindrome(myWord){
    if (myWord === "") return undefined;
    for(let i=0; i < Math.ceil(myWord.toString().length/2); i++){
        if(myWord.at(i) !== myWord.at(-1-i)){
            return false
        }
    }
    return true
}


console.log(isPalindrome(userInput))