const principal = 100;
const rate = 0.05;
let total = principal;
let year = 0;

while(total < principal * 2) {
    year++;
    total += total * rate;
}
console.log();