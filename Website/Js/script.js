const player = document.querySelector("#player");
let currentButton = null;

document.querySelectorAll(".song-button").forEach((button) => {
  button.addEventListener("click", async () => {
    const song = button.dataset.audio;

    // Clicking the playing image pauses it.
    if (currentButton === button && !player.paused) {
      player.pause();
      return;
    }

    // Choose the song assigned to this image.
    if (player.src !== new URL(song, document.baseURI).href) {
      player.src = song;
    }

    currentButton = button;

    try {
      await player.play();
    } catch (error) {
      console.error("The audio could not be played:", error);
    }
  });
});