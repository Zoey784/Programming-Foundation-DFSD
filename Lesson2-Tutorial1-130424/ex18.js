let isSunny = false;
let isCloudy = true;
let isEveGoing = true;
let isTuesday = false;
let isJaniceGoing = false;

if ((isSunny || isCloudy) && isEveGoing && !isTuesday && !isJaniceGoing ) {
    console.log("Going to the beach!");
} 
else {
    console.log("Not going to the beach!");
}

if ((isSunny == true || isCloudy == true) && isEveGoing == true && isTuesday == false && isJaniceGoing == false ) {
    console.log("Going to the beach!");
} 
else {
    console.log("Not going to the beach!");
}