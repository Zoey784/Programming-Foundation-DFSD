const prompt = require('prompt-sync')();

let age = parseInt(prompt("Enter your Age: "));
let heartrate = parseInt(prompt("Enter your resting heart rate: "));

console.log(calculator(age, heartrate))

function calculator(age, heartrate){
    let maximum_heart_rate = 0;
    let heart_rate_reserve = 0;
    let heart_rate_range_low = 0;
    let heart_rate_range_high = 0;
    
    maximum_heart_rate = 220 - age;
    heart_rate_reserve = maximum_heart_rate - heartrate;
    heart_rate_range_low = parseInt((heart_rate_reserve * 0.3) + heartrate);
    heart_rate_range_high = heart_rate_reserve * 0.7 + heartrate;
    
    console.log(`Enter your age: \x1b[4m${age}\x1b[0m`);
    console.log(`Enter your resting heart rate: \x1b[4m${heartrate}\x1b[0m`);
    console.log("The range of your heart rate for low intensity training to high intensity training is");
    console.log(`from ${heart_rate_range_low} to ${heart_rate_range_high} beats per minute`)
}