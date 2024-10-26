// HTML element references
const audio = document.getElementById("audio");
const currentTimeDisplay = document.getElementById("currentTime");
const volumeSlider = document.getElementById("range26"); 
const playPauseButton = document.getElementById("playPauseButton");
const artist = document.getElementById("artist");
const songTitle = document.getElementById("songTitle");

// Audio files list
const audioFiles = [
    { src: "https://files.catbox.moe/fo805m.mp3", artist: "Ken Karson, Destroy Lonely", song: "Murda Musik" },
    { src: "https://files.catbox.moe/vlohr2.mp3", artist: "22Gz", song: "Twirlanta" },
    { src: "https://files.catbox.moe/gbztbw.mp3", artist: "BigXthaPlug", song: "Mmhmm" },
    { src: "https://files.catbox.moe/ebvch3.mp3", artist: "Jdot Breezy", song: "Tweak Shit, Pt. 2" },
    { src: "https://files.catbox.moe/xo4vuv.mp3", artist: "Jdot Breezy", song: "Shoot It Out" }
];

// Shuffle audio files and load the first track
const shuffledAudioFiles = shuffleArray(audioFiles);
let currentAudioIndex = 0;
loadAudio(currentAudioIndex);

// Update time display during playback
audio.addEventListener('timeupdate', () => {
    const minutes = Math.floor(audio.currentTime / 60);
    const seconds = Math.floor(audio.currentTime % 60);
    currentTimeDisplay.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
});

// Automatically load next song when current one ends
audio.addEventListener("ended", nextAudio);

// Adjust volume with slider
volumeSlider?.addEventListener('input', () => {
    audio.volume = volumeSlider.value / 100; 
});

// Play or pause audio and toggle button icon
function togglePlayPause() {
    const playPauseButtonIcon = document.getElementById('playpaus');
    if (audio.paused) {
        audio.play();
        playPauseButtonIcon.className = "status-bar-field fa-solid fa-pause";
    } else {
        audio.pause();
        playPauseButtonIcon.className = "status-bar-field fa-solid fa-play";
    }
}

// Play next track in the shuffled list
function nextAudio() {
    currentAudioIndex = (currentAudioIndex + 1) % shuffledAudioFiles.length;
    loadAudio(currentAudioIndex);
}

// Play previous track or restart current track if within first 3 seconds
function previousAudio() {
    if (audio.currentTime <= 3) {
        currentAudioIndex = (currentAudioIndex - 1 + shuffledAudioFiles.length) % shuffledAudioFiles.length;
    } else {
        audio.currentTime = 0;
    }
    loadAudio(currentAudioIndex);
}

// Load audio by index and update artist/song display
function loadAudio(index) {
    const audioFile = shuffledAudioFiles[index];
    audio.src = audioFile.src;
    artist.textContent = audioFile.artist;
    songTitle.textContent = audioFile.song;
    audio.play();
}

// Shuffle array using Fisher-Yates algorithm
function shuffleArray(array) {
    let currentIndex = array.length, temporaryValue, randomIndex;
    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
    return array;
}

// Initial setup
audio.src = shuffledAudioFiles[0].src;
loadAudio(0);
