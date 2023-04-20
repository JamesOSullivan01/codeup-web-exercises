let x = 1;
let i = 2;
let result = x * i;

while (result < 66000) {
    console.log(result);
    i++;
    result *= 2;
}


let allCones = Math.floor(Math.random() * 50) + 50;
let remainingCones = allCones;

console.log("Starting with " + allCones + " cones.");

do {
    let conesBought = Math.floor(Math.random() * 5) + 1;
    console.log("Cones bought: " + conesBought);

    if (conesBought > remainingCones) {
        console.log("Cannot sell you " + conesBought + " cones, I only have " + remainingCones + "...");
    } else {
        remainingCones -= conesBought;
        console.log(remainingCones + " cones left...");
    }

} while (remainingCones > 0);

console.log("Yay! I sold them all!");
