import { React } from "react";
import { useState, useEffect } from "react";
import { Form, useParams } from "react-router-dom";
import { getMovieCredits } from "utils/data";
import {CastList, CastItem } from "components/Cast/Cast.styled"
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
                                <img
                                    src={actor.profile_path
                                        ? `https://image.tmdb.org/t/p/w200/${actor.profile_path}`
                                        : <p>There is no photo</p>}
                                    alt=""
                                    width="200"/>
                                <p>{ actor.name}</p>
                                <p>Character: { actor.character}</p>
                        </CastItem>
                    )
                })
                }
            </CastList>
        
    )
}   

export default Cast
