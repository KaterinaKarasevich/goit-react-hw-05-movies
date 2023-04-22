import { React, Suspense, useEffect, useState} from "react";

import { getTrendingData } from "utils/data";
import { HomeList, HomeItem, Container, LinkItem } from "./Home.styled";
import Loader from "components/Loader";

const Home = () => {
    const [moviesList, setMoviesList] = useState(null);
    const [error, setError] = useState(null);
    
    useEffect(() => {
     
        getTrendingData()
            .then(response => response.json())
            .then((data) => {
               setMoviesList(data.results)
            .catch(error => setError(error.message))
           
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
                               <LinkItem to={`/movies/${movie.id}`}>{movie.title}</LinkItem> 
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
