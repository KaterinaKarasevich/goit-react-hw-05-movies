import { React } from "react";
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom";
import { getMovieReviews } from "utils/data";
import {ReviewsList, ReviewsItem } from "components/Reviews/Reviews.styled"
const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    const {movieId} = useParams();

    useEffect(() => {
        getMovieReviews(movieId)
            .then(response => response.json())
            .then((data) => setReviews(data.results))
    }, [movieId])

    return (
        <ReviewsList>
           {reviews.length < 1 && <p>We dont have any reviews for this movie</p>}
           { reviews && reviews.map(review => {
                return (
                    <ReviewsItem key={review.id}>
                        <h4>Author: {review.author}</h4>
                        <p>{review.content}</p>
                    </ReviewsItem>
                    )
            })}
    </ReviewsList>
)
}

export default Reviews