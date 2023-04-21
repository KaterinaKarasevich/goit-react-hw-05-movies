import { React } from "react";
import { useState, useEffect } from "react";
import { useSearchParams, useLocation } from "react-router-dom";
import { getSearchMovies } from "utils/data";
import {Searchbar} from "components/SearchBar/SearchBar"
import Loader from "components/Loader";
import {MoviesList, MovieItem, LinkItem } from "pages/Movies/Movies.styled"

const Movies = () => {
    const [searchParams] = useSearchParams();
    const location = useLocation()
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
        {isLoading && <Loader />}
        <MoviesList>
            {searchedMovie &&
                searchedMovie.map(movie => {
                    return (
                        < MovieItem key={movie.id}>
                            <LinkItem to={`${movie.id}`} state={location} >{movie.title}
                            </LinkItem>
                    </MovieItem>
                )
            })}
        </MoviesList>
        {error && (<p>Something went wrong</p>)}
    </div>)
}
export default Movies

//  <Link to={`${movie.id}`} state={{from: location}} >{movie.title}