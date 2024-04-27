const prompt = require('prompt-sync')();

for(;;) {
    let input = prompt("Enter number: ");

    if (input === "exit") {
        console.log("correct");
        break;
    }
}