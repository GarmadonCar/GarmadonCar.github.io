function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


function ambiance() {
    const music = new Audio();
    music.volume = 0.8; // optional: adjust volume

    function playRandomSong() {
        const songNumber = Math.floor(Math.random() * 6) + 1; // 1 to 6
        music.src = `sounds/generic-music/song${songNumber}.mp3`;
        music.play();
    }

    music.addEventListener('ended', playRandomSong, false);

    // start with a random song
    playRandomSong();
}