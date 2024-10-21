var audio = document.getElementById("audio");
var playPauseButton = document.getElementById("playPauseButton");
var audioFiles = [
        {
        src: "https://files.catbox.moe/fo805m.mp3",
        artist: "Ken Karson, Destroy Lonely",
        song: "Murda Musik"
        },
        {
        src: "https://files.catbox.moe/vlohr2.mp3",
        artist: "22Gz",
        song: "Twirlanta"
        },
        {
        src: "https://files.catbox.moe/gbztbw.mp3",
        artist: "BigXthaPlug",
        song: "Mmhmm"
        },
        {
        src: "https://files.catbox.moe/ebvch3.mp3",
        artist: "Jdot Breezy",
        song: "Tweak Shit, Pt. 2"
        },
        {
        src: "https://files.catbox.moe/xo4vuv.mp3",
        artist: "Jdot Breezy",
        song: "Shoot It Out"
        },
];

var artist = document.getElementById("artist");
var songTitle = document.getElementById("songTitle");

var shuffledAudioFiles = shuffleArray(audioFiles);
var currentAudioIndex = 0;

audio.addEventListener("ended", function() {
    nextAudio();
});

function playMedia() {
    audio.play();
    document.getElementById("overlays").classList.add("fade-out");
}

function togglePlayPause() {
    if (audio.paused) {
        audio.play();
        playPauseButton.innerHTML = "<img src='./icon/pause.png'>";
    } else {
        audio.pause();
        playPauseButton.innerHTML = "<img src='./icon/play.png'>";
    }
}

function nextAudio() {
    currentAudioIndex = (currentAudioIndex + 1) % shuffledAudioFiles.length;
    loadAudio(currentAudioIndex);
}

function previousAudio() {
    if (audio.currentTime <= 3) {
        currentAudioIndex = (currentAudioIndex - 1 + shuffledAudioFiles.length) % shuffledAudioFiles.length;
    } else {
        audio.currentTime = 0;
    }
    loadAudio(currentAudioIndex);
}

function loadAudio(index) {
    var audioFile = shuffledAudioFiles[index];
    audio.src = audioFile.src;
    artist.textContent = audioFile.artist;
    songTitle.textContent = audioFile.song;
    audio.play();
}

function shuffleArray(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

audio.src = shuffledAudioFiles[0].src;
audio.play();

loadAudio(0);
