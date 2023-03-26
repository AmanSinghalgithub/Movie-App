// Initial Values
const API_KEY = 'f31fc7a3b55d2d0c026567ef35b6477c';
const IMAGE_URL = 'https://image.tmdb.org/t/p/w500';

const url = 'https://api.themoviedb.org/3/search/movie?api_key=f31fc7a3b55d2d0c026567ef35b6477c';


function generateUrl(path) {
    const url = `https://api.themoviedb.org/3${path}?api_key=f31fc7a3b55d2d0c026567ef35b6477c`;
    return url;  
}

function requestMovies(url, onComplete, onError) {
    fetch(url)
        .then((res) => res.json())
        .then(onComplete)
        .catch(onError);
}

function searchMovie(value) {
    const path = '/search/movie';
    const url = generateUrl(path) + '&query=' + value;

    requestMovies(url, renderSearchMovies, handleError);
}

function getUpcomingMovies() {
    const path = '/movie/upcoming';
    const url = generateUrl(path);
    
    const render = renderMovies.bind({ title: 'Upcoming Movies' });
    requestMovies(url, render, handleError);
}

function getTopRatedMovies() {
    const path = '/movie/top_rated';
    const url = generateUrl(path);
    
    const render = renderMovies.bind({ title: 'Top Rated Movies' });
    requestMovies(url, render, handleError);
}

function getPopularMovies() {
    const path = '/movie/popular';
    const url = generateUrl(path);
    
    const render = renderMovies.bind({ title: 'Popular Movies' });
    requestMovies(url, render, handleError);
}

function getLatestMovies() {
    const path = '/movie/latest';
    const url = generateUrl(path);

    const render = renderMovies.bind({ title: 'Latest Movies' });
    requestMovies(url, render, handleError);
}

function getPlayingMovies() {
    const path = '/movie/now_playing';
    const url = generateUrl(path);

    const render = renderMovies.bind({ title: 'Movies Now Playing' });
    requestMovies(url, render, handleError);
}