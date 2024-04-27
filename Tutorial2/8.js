for (let i = 1; i <= 5; i++) {
    let stars = '';
    for (let col = 1; col <= i; col++) {
        stars += '* ';
    }
    console.log(stars);
}

//cher example
let rows = 5;
let output = "";
for (let i = 1; i <= rows; i++) {
    for (let j = 0; j < i; j++) {
        output += '*'
    }
    output += '\n';
}
console.log(output);