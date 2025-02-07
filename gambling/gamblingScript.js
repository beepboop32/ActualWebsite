let losses = 0;
let wins = 0;
let audios = [new Audio("Stinky.mp3"), new Audio("Yummy.mp3")];

function slotMachine() {
    let slot1 = Math.floor(Math.random() * 3) + 1;
    let slot2 = Math.floor(Math.random() * 3) + 1;
    let slot3 = Math.floor(Math.random() * 3) + 1;
    console.log(slot1, slot2, slot3);
    let result;

    if (slot1 === slot2 && slot2 === slot3) {
        result = "You win!";
        wins += 1;
    } else {
        result = "You lose!";
        losses += 1;
    }
    animateSlots([slot1, slot2, slot3], result);
}

function animateSlots(finalNumbers, result) {
    const slots = document.getElementById("slots").getElementsByClassName("section");
    let interval = setInterval(() => {
        for (let i = 0; i < slots.length; i++) {
            slots[i].innerHTML = Math.floor(Math.random() * 3) + 1;
        }
    }, 50);

    setTimeout(() => {
        clearInterval(interval);
        for (let i = 0; i < slots.length; i++) {
            slots[i].innerHTML = finalNumbers[i];
        }
        updateResults(result);
    }, 1000);
}

function updateResults(result) {
    document.getElementById("wins").innerHTML = `hehe who hah: ${wins}`;
    document.getElementById("losses").innerHTML = `RAWR!!!!!!: ${losses}`;
    document.getElementById("rawr").innerHTML = result;

    // Add animation class
    document.getElementById("wins").classList.add("animated-text");
    document.getElementById("losses").classList.add("animated-text");
    document.getElementById("rawr").classList.add("animated-text");
    if (result === "You win!") {
        playSound(audios[1]);
    } else {
        playSound(audios[0]);
    }
    // Remove animation class after animation ends
    setTimeout(() => {
        document.getElementById("wins").classList.remove("animated-text");
        document.getElementById("losses").classList.remove("animated-text");
        document.getElementById("rawr").classList.remove("animated-text");
    }, 500);
}

function playSound(audio) {
    if (!audio.paused) {
        audio.currentTime = 0;
    } else {
        audio.play();
    }
}