import { React } from "react";
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom";
import { getMovieReviews } from "utils/data";

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    const {movieId} = useParams();

    useEffect(() => {
        getMovieReviews(movieId)
            .then(response => response.json())
            .then((data) => setReviews(data.results))
    }, [movieId])

    return (
        <ul>
           {reviews.length < 1 && <p>We dont have any reviews for this movie</p>}
           { reviews && reviews.map(review => {
                return (
                    <li key={review.id}>
                        <h3>Author: {review.author}</h3>
                        <p>{review.content}</p>
                    </li>
                    )
            })}
    </ul>
)
}

export default Reviews