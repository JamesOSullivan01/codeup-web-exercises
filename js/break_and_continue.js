let num = parseFloat(prompt("Please enter an odd number between 1 and 50"));
for (let i = 1; i <= 50; i++) {
    if (i === num) {
        console.log("you skipped: " + num);
        continue;
    } else if(i % 2 !== 0) {
        console.log("here is an odd number: " + i);
    }
}