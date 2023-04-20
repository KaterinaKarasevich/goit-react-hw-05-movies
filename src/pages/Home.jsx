import { React, } from "react";
import { useState, useEffect } from "react";
import {Link, useLocation } from "react-router-dom";
import { getTrendingData } from "utils/data";

const Home = () => {
    const [moviesList, setMoviesList] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const location = useLocation();
    useEffect(() => {
        setIsLoading(true) 
        getTrendingData()
            .then(response => response.json())
            .then((data) => {
               setMoviesList(data.results)
            .catch(error => setError(error.message))
            .finally(setIsLoading(false));
        })
    }, [])
    return (
        <>
            <h3>Trending today</h3>
            <ul>
                {moviesList &&
                    moviesList.map(movie => {
                        return (
                            <li key={movie.id}>
                                <Link to={`/movies/${movie.id}`} state={{from: location}}>{movie.title}</Link>   
                        </li>
                    )
                })}
            </ul>

        </>
 )

}
export default Home