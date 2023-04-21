import { React, Suspense} from "react";
import { useState, useEffect } from "react";
import {Link, useLocation } from "react-router-dom";
import { getTrendingData } from "utils/data";
import { HomeList, HomeItem, Container, LinkItem } from "./Home.styled";
import Loader from "components/Loader";
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
        <Container>  
            <h2>Trending today</h2>
               <Suspense  fallback ={<Loader />}>
            <HomeList>
                {moviesList && 
                    moviesList.map(movie => {
                        return (
                            <HomeItem key={movie.id}>
                                {/* <Link to={`/movies/${movie.id}`} state={location}>{movie.title}</Link> 
                                   */}
                                 <LinkItem to={`/movies/${movie.id}`} state={location}>{movie.title}</LinkItem> 
                        </HomeItem>
                    )
                })}
                </HomeList>
                </Suspense>
             {error && (<p>Something went wrong</p>)}
        </Container>
 )

}
export default Home
