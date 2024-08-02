const API_KEY = '01309c07a825b1690e3ce8f17cd55792';
const API_URL = 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1';
const IMG_URL = 'https://image.tmdb.org/t/p/original';
const main = document.getElementById('main');
const form = document.getElementById('form');
const search = document.getElementById('search');
const home = document.getElementById('home');
const btn = document.querySelector(".modeBtn");
const body = document.body;

const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMTMwOWMwN2E4MjViMTY5MGUzY2U4ZjE3Y2Q1NTc5MiIsIm5iZiI6MTcyMjA5ODMxNi41MDkyMzIsInN1YiI6IjY2YTUyMTEzMDcxOWQ3ZTdhYzYwMGFmOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.dMMekxwgXqiIrhXNEhLzQ0FM4kDOJXUi7QYA6p3TB0A'
    }
};

getMovies(API_URL);
function getMovies(url){
    fetch(url, options)
    .then(response => response.json())
    .then(data => {
        console.log(data.results)
        showMovies(data.results)
    })
    .catch(err => console.error(err));
};

function showMovies(data){
    main.innerHTML = '';
    data.forEach(movie => {
        const {title, poster_path, vote_average, overview} = movie;
        const movies = document.createElement('div');
        movies.classList.add('movie');
        movies.innerHTML = `
            <img src="${IMG_URL+poster_path}" alt="${title}">
            <div class="movieInfo">
                <h3>${title}</h3>
                <span class="${ratingColor(vote_average)}">${vote_average}</span>
            </div>
            <div class="desp">
                <h3>Description:</h3>
                ${overview}
            </div>`;
        main.appendChild(movies);
    });
};

function ratingColor(vote){
    if(vote>=8){
        return 'green';
    }else if(vote>=5){
        return 'orange';
    }else{
        return 'red';
    }
};

form.addEventListener('submit', (a)=> {
    a.preventDefault();
    const searchTerm = search.value;
    const SEARCH_URL = 'https://api.themoviedb.org/3/search/movie?query='+searchTerm+'&include_adult=false&language=en-US&page=1';
    if(searchTerm){
        getMovies(SEARCH_URL);
    }
    else{
        getMovies(API_URL);
    }
});

home.addEventListener('click', (b)=>{
    b.preventDefault();
    getMovies(API_URL);
    search.value = "";
});

btn.addEventListener("click", () => {
    body.classList.toggle("darkMode");
    body.classList.toggle("lightMode");

    if(body.classList.contains("darkMode")){
        btn.textContent = "Switch to Light Mode";
    }else{
        btn.textContent = "Switch to Dark Mode";
    }
});