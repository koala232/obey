// Create the audio element (set to the first song in the list as default)
let currentTrack = 0;
const music = new Audio(audioFiles[currentTrack].src);

// Audio files list
const audioFiles = [
    { src: "https://files.catbox.moe/fo805m.mp3", artist: "Ken Karson, Destroy Lonely", song: "Murda Musik" },
    { src: "https://files.catbox.moe/vlohr2.mp3", artist: "22Gz", song: "Twirlanta" },
    { src: "https://files.catbox.moe/gbztbw.mp3", artist: "BigXthaPlug", song: "Mmhmm" },
    { src: "https://files.catbox.moe/ebvch3.mp3", artist: "Jdot Breezy", song: "Tweak Shit, Pt. 2" },
    { src: "https://files.catbox.moe/xo4vuv.mp3", artist: "Jdot Breezy", song: "Shoot It Out" }
];

// Play/pause toggle function
function toggleMusic() {
    if (music.paused) {
        music.play();
    } else {
        music.pause();
    }
}

// Start playing the current track and show track details in console
function playTrack(index) {
    currentTrack = index;
    music.src = audioFiles[currentTrack].src;
    music.play();
    console.log(`Now playing: ${audioFiles[currentTrack].artist} - ${audioFiles[currentTrack].song}`);
}

// Add event listeners to play/pause music on click or touch
document.body.addEventListener("click", toggleMusic);
document.body.addEventListener("touchstart", toggleMusic);

// Optional: Play the next song when the current one ends
music.addEventListener("ended", () => {
    currentTrack = (currentTrack + 1) % audioFiles.length;
    playTrack(currentTrack);
});
