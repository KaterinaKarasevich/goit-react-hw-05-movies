import { React } from "react";
import { useState, useEffect } from "react";
import { useSearchParams, Link, useLocation } from "react-router-dom";
import { getSearchMovies } from "utils/data";
import Searchbar from "components/SearchBar/SearchBar"

const Movies = () => {
    const [searchParams] = useSearchParams();
    const location = useLocation()
    console.log(location)
    const [searchedMovie, setSearchedMovie] = useState(null);
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null) 
    const movieSearch = searchParams.get("query") ?? '';

    useEffect(() => {
      movieSearch &&
        getSearchMovies(movieSearch) 
            .then(response => response.json())
            .then(data => setSearchedMovie(data.results))
            .catch(error => setError(error.message))
            .finally(setIsLoading(false));
    }, [movieSearch])
    
    return (<div>
        <Searchbar />
        <ul>
            {searchedMovie &&
                searchedMovie.map(movie => {
                    return (
                        <li key={movie.id}>
                            <Link to={`${movie.id}`} state={{from: location}} >{movie.title}
                            </Link>
                    </li>
                )
            })}
        </ul>
    </div>)
}
export default Movies