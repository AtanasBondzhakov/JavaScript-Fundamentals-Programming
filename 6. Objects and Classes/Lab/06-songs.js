function songs(data) {
    class Song {
        constructor(typeList, name, time) {
            this.typeList = typeList;
            this.name = name;
            this.time = time;
        }
    }

    const songsList = [];
    const count = Number(data.shift());
    const typeSong = data.pop();

    for (let song of data) {
        const [type, name, time] = song.split('_');
        const newSong = new Song(type, name, time);
        songsList.push(newSong);
    }

    if (typeSong === 'all') {
        songsList.forEach(s => console.log(s.name))
    } else {
        const matches = songsList.filter(s => s.typeList === typeSong);
        matches.forEach(s => console.log(s.name))
    }
}
