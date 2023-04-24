let numToSkip;
while (true) {
    numToSkip = parseInt((prompt("Please give an odd number between 1 and 50")));
    if (numToSkip >= 1 && numToSkip < 51 && numToSkip % 2 !== 0 ) {
        break;
    }
}


let num = parseFloat(prompt("Please enter an odd number between 1 and 50"));
for (let i = 1; i <= 50; i++) {
    if (i === num) {
        console.log("you skipped: " + num);
        continue;
    } else if(i % 2 !== 0) {
        console.log("here is an odd number: " + i);
    }
}