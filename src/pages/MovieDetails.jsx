import { useState, useEffect, useRef } from "react";
import { useParams, Outlet, Link, useLocation } from "react-router-dom";
import { getMovieDetails } from "utils/data";

const MovieDetails = () => {
    const { movieId } = useParams()
    const location = useLocation()
    console.log(location)
 const backLinkHref = useRef(location.state?.from ?? "/movies");

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
 }, [movieId])

    return (
    
        <div>
            {/* <button type="button" to={backLinkHref.current}>Go back</button> */}
            <h2>{title}</h2>
            <img src={poster
                ? `https://image.tmdb.org/t/p/w300/${poster}`
                : <p>There is no photo </p>}
                alt=""
                width="300"/>
            <p>User Score: {userScore}%</p>
            <h4>Overview</h4>
            <p>{overview}</p>
            <ul>
                <h4>Genres</h4>
                {genres &&
                    genres.map(genre => {
                        return (
                            <li key={genre.id}>
                                {genre.name}
                            </li>

                        )
                    }

                    )
                }
            </ul>
           
        
            
        <div>
            <h4>Additional information</h4>
            <ul>
                <li>
                    <Link to="cast">Cast</Link>
                </li>
                <li>
                    <Link to="reviews">Reviews</Link>
                </li>
            </ul>
            <Outlet />
        </div>
    </div>  
    );
};

export default MovieDetails