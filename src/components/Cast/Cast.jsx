import { React } from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getMovieCredits } from "utils/data";
import { CastList, CastItem, CastItemImg, CastItemInfo } from "components/Cast/Cast.styled"
const Cast = () => {
    const [actorsCast, setActorsCast] = useState([]);
    const {movieId} = useParams()
    console.log(movieId)

useEffect(() => {
    getMovieCredits(movieId)
        .then(response => response.json())
        .then((data) => setActorsCast(data.cast));
       
}, [movieId])
    
    return (
        
        <CastList>
            {actorsCast.length < 1 && <p>We dont have any information about Cast</p>}
            {actorsCast &&
                    actorsCast.map(actor => {
                        return (
                            <CastItem key={actor.id}>
                                
                                <CastItemImg
                                    src={actor.profile_path
                                        ? `https://image.tmdb.org/t/p/w200/${actor.profile_path}`
                                        : <p>There is no photo</p>}
                                    alt=""
                                        width="200" />
                                
                                <CastItemInfo>
                                    <p><b>Actor</b>: { actor.name}</p>
                                    <p><b>Character</b>: {actor.character}</p>
                                </CastItemInfo>
                        </CastItem>
                    )
                })
                }
               
            </CastList>
           
        
    )
}   

export default Cast

