const Player1 = [
    document.querySelector('.P1img1'),
    document.querySelector('.P1img2'),
    document.querySelector('.P1img3'),
    document.querySelector('.P1img4'),
    document.querySelector('.P1img5'),
    document.querySelector('.P1img6'),
];

const Player2 = [
    document.querySelector('.P2img1'),
    document.querySelector('.P2img2'),
    document.querySelector('.P2img3'),
    document.querySelector('.P2img4'),
    document.querySelector('.P2img5'),
    document.querySelector('.P2img6'),
]

window.onload = () => {
  // Set initial message
  document.querySelector("h1").innerHTML = "Press the Play Button To Start";

  // Show only the first image of Player 1
  const player1Images = document.querySelectorAll('.dice img');
  player1Images.forEach((img, index) => {
    img.style.display = index === 0 ? 'block' : 'none';
  });

  // Show only the first image of Player 2
  const player2Images = document.querySelectorAll('.dice-2 img');
  player2Images.forEach((img, index) => {
    img.style.display = index === 0 ? 'block' : 'none';
  });
};

function DiceChallenge() {

    const RandomNumberP1 = Math.floor(Math.random() * Player1.length);
    const SelectedImageP1 = Player1[RandomNumberP1];

    const RandomNumberP2 = Math.floor(Math.random() * Player2.length);
    const SelectedImageP2 = Player2[RandomNumberP2]


    // Hide all the Images of SelectedImageP1 except first Images
    Player1.forEach((img, index) => {
        img.style.display = index === RandomNumberP1 ? 'block' : 'none';
    });

    // Hide all the Images of SelectedImageP2 except first Images
    Player2.forEach((img, index) => {
        img.style.display = index === RandomNumberP2 ? 'block' : 'none';
    });

    if (RandomNumberP1 > RandomNumberP2) {
        document.querySelector("h1").innerHTML = "Player 1 wins";
    } else if (RandomNumberP1 < RandomNumberP2) {
        document.querySelector("h1").innerHTML = "Player 2 wins";
    } else {
        document.querySelector("h1").innerHTML = "Draw";
    }
}

DiceChallenge();

document.querySelector("button").onclick = DiceChallenge;
