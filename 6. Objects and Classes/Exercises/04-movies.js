function movies(data) {
    const moviesList = [];

    data.forEach(line => {
        if(line.includes('addMovie')) {
            const movieObj = {};
            const movieTitle = line.split('addMovie ')[1];
            movieObj.name = movieTitle;
            moviesList.push(movieObj);

        } else if (line.includes('directedBy')) {
            const [movieTitle, director] = line.split(' directedBy ');
            const currentMovie = moviesList.find(m => m.name === movieTitle);
            if(currentMovie) {
                currentMovie.director = director;
            }
            
        } else if(line.includes('onDate')) {
            const [movieTitle, date] = line.split(' onDate ');
            const currentMovie = moviesList.find(m => m.name === movieTitle);
            if(currentMovie) {
                currentMovie.date = date;
            }
        }
    })
    
    moviesList.forEach(movie => {
        if(movie.name && movie.director && movie.date) {
            console.log(JSON.stringify(movie));
        }
    });
}
