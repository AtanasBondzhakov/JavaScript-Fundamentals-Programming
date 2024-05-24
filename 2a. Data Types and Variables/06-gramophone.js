function gramophone(band, album, song) {
    let songDurationInSec = (album.length * band.length * song.length) / 2;
    let rotationCount = Math.ceil(songDurationInSec / 2.5);
    console.log(`The plate was rotated ${rotationCount} times.`);
}

gramophone('Black Sabbath', 'Paranoid', 'War Pigs'); //The plate was rotated 167 times.
gramophone('Rammstein', 'Sehnsucht', 'Engel'); //The plate was rotated 81 times.
