import { useState, useEffect, Suspense} from "react";
import { useParams, Outlet, useLocation } from "react-router-dom";
import { getMovieDetails } from "utils/data";
import {MovieDetailsItem, MovieDetailsList, LinkItem, LinkItemDetails } from "pages/MovieDetails/MovieDetails.styled"
import Loader from "components/Loader";

const MovieDetails = () => {
    const { movieId } = useParams()
    const location = useLocation()
   
    const [title, setTitle] = useState("");
    const [userScore, setuserScore] = useState(0);
    const [overview, setOverview] = useState("");
    const [genres, setGenres] = useState([]);
    const [poster, setPoster] = useState("");
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null) 

    useEffect(() => {
        setIsLoading(true)
        getMovieDetails(movieId)
            .then(response => response.json())
            .then(data =>
                {setTitle(data.title)
                setuserScore(Math.round(Number(data.vote_average) * 10))
                setOverview(data.overview)
                setGenres(data.genres)
                setPoster(data.poster_path)
                }               
              )
            .catch(error => setError(error.message))
            .finally(setIsLoading(false));
 }, [movieId])
const genreNames = genres.map(genre => genre.name).join(', ');

    return (
    
        <div>
            {isLoading && <Loader />}
            <LinkItem to={location.state}> ⬅ Go back</LinkItem>
            <h2>{title}</h2>
            <img src={poster
                ? `https://image.tmdb.org/t/p/w300/${poster}`
                : <p>There is no photo </p>}
                alt=""
                width="300"/>
            <p>User Score: {userScore}%</p>
            <h4>Overview</h4>
            <p>{overview}</p>
            <MovieDetailsList>
                <h4>Genres:</h4>
                <p>{genreNames}</p>
                {/* {genres &&
                    genres.map(genre => {
                        return (
                            <MovieDetailsItem key={genre.id}>
                                {genre.name}
                            </MovieDetailsItem>

                        )
                    }

                    )
                } */}
            </MovieDetailsList>
           
        
            
        <div>
            <h3>Additional information</h3>
            <MovieDetailsList>
                <MovieDetailsItem>
                    <LinkItemDetails to={`/movies/${movieId}/cast`}>Cast</LinkItemDetails>
                </MovieDetailsItem>
                <MovieDetailsItem>
                    <LinkItemDetails to={`/movies/${movieId}/reviews`}>Reviews</LinkItemDetails>
                </MovieDetailsItem>
                </MovieDetailsList>
                <Suspense fallback={ <Loader />}> 
                   <Outlet />
                </Suspense>
            
            </div>
            {error && (<p>Something went wrong</p>)}
    </div>  
    );
};

export default MovieDetails