import { useEffect, useState } from "react";

import MovieCard from "./MovieCard";

import './App.css'
import SearchIcon from './search.svg'

//59d4efdf

const API_URL = 'http://www.omdbapi.com?apikey=59d4efdf'

const movie1 = {
    "Title": "Barbie",
    "Year": "2023",
    "imdbID": "tt1517268",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNjU3N2QxNzYtMjk1NC00MTc4LTk1NTQtMmUxNTljM2I0NDA5XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg"
}


const App = () => {

    const [movies, setMovies] = useState();
    const [searchTerm, setSearchTerm] = useState();


    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`)
        const data = await response.json();
        setMovies(data.Search)

        //console.log(data.Search);
    }

    useEffect(() => {
        searchMovies('Barbie');
    }, [])

    return (
        <div className="app">
            <h1>MovieLand</h1>
            <div className="search">
                <input placeholder="Search for movies" value={searchTerm} onChange={(e) => {setSearchTerm(e.target.value) }} />
                <img src={SearchIcon} alt="search" onClick={() => { searchMovies(searchTerm)}}></img>
            </div>
            {movies?.length > 0 ?
                (
                <div className="container">
                    {movies.map(movie => (
                        <MovieCard movie={movie} />
                    ))}

                </div>
                ) : (<div className="empty"><h2>No movies found</h2></div>)
            }

        </div>
    );
}

export default App;