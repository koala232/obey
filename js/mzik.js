// Create the audio element and load the music file
const music = new Audio("js/mzik.js"); // Update this path

// Audio files list
const audioFiles = [
    { src: "https://files.catbox.moe/fo805m.mp3", artist: "Ken Karson, Destroy Lonely", song: "Murda Musik" },
    { src: "https://files.catbox.moe/vlohr2.mp3", artist: "22Gz", song: "Twirlanta" },
    { src: "https://files.catbox.moe/gbztbw.mp3", artist: "BigXthaPlug", song: "Mmhmm" },
    { src: "https://files.catbox.moe/ebvch3.mp3", artist: "Jdot Breezy", song: "Tweak Shit, Pt. 2" },
    { src: "https://files.catbox.moe/xo4vuv.mp3", artist: "Jdot Breezy", song: "Shoot It Out" }
];

// Add event listeners to play/pause music on click or touch
document.body.addEventListener("click", toggleMusic);
document.body.addEventListener("touchstart", toggleMusic);
