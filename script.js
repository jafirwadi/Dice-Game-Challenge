const Player1 = [
    document.querySelector(".P1img1"),
    document.querySelector(".P1img2"),
    document.querySelector(".P1img3"),
    document.querySelector(".P1img4"),
    document.querySelector(".P1img5"),
    document.querySelector(".P1img6"),
];

const Player2 = [
    document.querySelector(".P2img1"),
    document.querySelector(".P2img2"),
    document.querySelector(".P2img3"),
    document.querySelector(".P2img4"),
    document.querySelector(".P2img5"),
    document.querySelector(".P2img6"),
];

//Hide the first image of the Player 1

Player1.forEach((img, index) => {
   img.style.display = index === 0 ? 'block' : 'none';
});

//Hide the first image of the Player 2


Player2.forEach((img, index) => {
    img.style.display = index === 0 ? 'block' : 'none';
});


function DiceChallenge() {
    const RandomNumberP1 = Math.floor(Math.random() * Player1.length);
    const ImageSelectionP1 = Player1[RandomNumberP1];

    const RandomNumberP2 = Math.floor(Math.random() * Player2.length);
    const ImageSelectionP2 = Player2[RandomNumberP2];

    //Show the Selected image only
    Player1.forEach((img, index) => {
        img.style.display = index === RandomNumberP1 ? 'block' : 'none';
    });

    //Show the Selected image only
    Player2.forEach((img, index) => {
        img.style.display = index === RandomNumberP2 ? 'block' : 'none';
    });

    if (RandomNumberP1 > RandomNumberP2) {
        document.querySelector("h1").innerHTML = "Player 1 Wins";
    } else if (RandomNumberP1 < RandomNumberP2) {
        document.querySelector("h1").innerHTML = "Player 2 wins";
    } else {
        document.querySelector("h1").innerHTML = "Draw";
    }
    console.log(DiceChallenge);
}

document.querySelector("button").onclick = DiceChallenge;
