const prompt = require('prompt-sync')();

let x = 0;

do{
    x = prompt("Enter Number: ");
    if (x > 0 && x < 11) {
        console.log("Correct");
        break;
    }
} while (true) {
    
}  