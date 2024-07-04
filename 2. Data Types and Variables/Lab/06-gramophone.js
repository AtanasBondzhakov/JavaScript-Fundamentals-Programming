function gramophone(band, album, song) {
    let songDurationInSec = (album.length * band.length * song.length) / 2;
    let rotationCount = Math.ceil(songDurationInSec / 2.5);
    console.log(`The plate was rotated ${rotationCount} times.`);
}
