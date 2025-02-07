let losses = 0;
let wins = 0;

function slotMachine() {
    let slot1 = Math.floor(Math.random() * 3) + 1;
    let slot2 = Math.floor(Math.random() * 3) + 1;
    let slot3 = Math.floor(Math.random() * 3) + 1;
    console.log(slot1, slot2, slot3);
    let result;

    if (slot1 === slot2 && slot2 === slot3) {
    result = "You win!";
    wins +=1;
    } else{
    result = "You lose!";
    losses +=1;
    }
    const slots = document.getElementById("slots").getElementsByClassName("section");
    slots[0].innerHTML = slot1;
    slots[1].innerHTML = slot2;
    slots[2].innerHTML = slot3;
    document.getElementById("wins").innerHTML = wins;
    document.getElementById("losses").innerHTML = losses;

    document.getElementById("rawr").innerHTML = result;
}
